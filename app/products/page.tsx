"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Search, X, SlidersHorizontal, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductCard } from "@/components/ui/product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products, categories } from "@/lib/products-data"
import { Marquee } from "@/components/sections/marquee"

function ProductsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const categoryParam = searchParams.get("category")

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all")
  const [sortBy, setSortBy] = useState("name")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((p) => p.categorySlug === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.origin.toLowerCase().includes(query) ||
          (p.latinName && p.latinName.toLowerCase().includes(query)),
      )
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "category") {
      result.sort((a, b) => a.category.localeCompare(b.category))
    }

    return result
  }, [searchQuery, selectedCategory, sortBy])

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug)
    if (slug === "all") {
      router.push("/products", { scroll: false })
    } else {
      router.push(`/products?category=${slug}`, { scroll: false })
    }
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSortBy("name")
    router.push("/products", { scroll: false })
  }

  const hasActiveFilters = searchQuery || (selectedCategory && selectedCategory !== "all")

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/products-hero-seafood-display.jpg"
              alt="Fresh seafood display"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#042635]/80 via-[#042635]/70 to-[#042635]/90" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Une réserve riche à la croisée de <span className="text-cyan-400">poissons</span> et{" "}
              <span className="text-cyan-400">fruits de mer</span> frais
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-lg mb-8"
            >
              Fraîcheur garantie et qualité des tunisiens
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Rechercher un produit, une espèce..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-10 h-14 border-white/20 bg-white/10 backdrop-blur-md rounded-full shadow-lg focus:border-cyan-400 focus:ring-cyan-400/20 text-white placeholder:text-slate-400 text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marquee */}
        <Marquee />

        {/* Products Section */}
        <section className="py-8 md:py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <Button
                variant="outline"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="w-full justify-between border-slate-200 rounded-xl h-12 bg-white"
              >
                <span className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filtrer & Trier
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showMobileFilters ? "rotate-180" : ""}`} />
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className={`lg:w-64 flex-shrink-0 ${showMobileFilters ? "block" : "hidden lg:block"}`}>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 sticky top-24 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4">Filtres & Trier</h3>

                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Catégories</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => handleCategoryChange("all")}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === "all"
                            ? "bg-[#042635] text-white font-medium"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        Tous les produits
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category.slug}
                          onClick={() => handleCategoryChange(category.slug)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedCategory === category.slug
                              ? "bg-[#042635] text-white font-medium"
                              : "text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Trier par</h4>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full border-slate-200 rounded-lg">
                        <SelectValue placeholder="Trier par" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">Nom</SelectItem>
                        <SelectItem value="category">Catégorie</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Clear Filters */}
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="w-full border-slate-200 text-slate-600 hover:text-slate-900 rounded-lg bg-transparent"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Effacer les filtres
                    </Button>
                  )}
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {/* Results count */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-slate-600">
                    <span className="font-bold text-slate-900">{filteredProducts.length}</span> produit
                    {filteredProducts.length !== 1 ? "s" : ""} trouvé{filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                    <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
                      <Search className="w-12 h-12 text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Aucun produit trouvé</h3>
                    <p className="text-slate-500 mb-8 max-w-md mx-auto">
                      Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
                    </p>
                    <Button
                      onClick={clearFilters}
                      className="bg-[#042635] hover:bg-[#063a4f] text-white px-8 py-3 rounded-full"
                    >
                      Voir tous les produits
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ProductsSkeleton() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="bg-[#042635] py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4 bg-slate-700" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-8 bg-slate-700" />
            <Skeleton className="h-14 w-full max-w-xl mx-auto rounded-full bg-slate-700" />
          </div>
        </section>
        <section className="py-8 md:py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
                  <Skeleton className="aspect-[4/3]" />
                  <div className="p-4 space-y-3">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <ProductsContent />
    </Suspense>
  )
}
