"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, SlidersHorizontal, ChevronDown, Check, ArrowRight, ArrowUp } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductCard } from "@/components/ui/product-card"
import { SectionHeader } from "@/components/ui/section-header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products, categories, type Product } from "@/lib/products-data"

function ProductsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const categoryParam = searchParams.get("category")

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all")
  const [sortBy, setSortBy] = useState("name")
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Sync state with URL param
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    } else {
      setSelectedCategory("all")
    }
  }, [categoryParam])

  // Filtering Logic
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
          (p.latinName && p.latinName.toLowerCase().includes(query))
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
    // If clicking the already selected category, do nothing or reset? Let's just set it.
    setSelectedCategory(slug)
    if (slug === "all") {
      router.push("/products", { scroll: false })
    } else {
      router.push(`/products?category=${slug}`, { scroll: false })
    }
    setShowMobileFilters(false) // Close mobile drawer on selection
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSortBy("name")
    router.push("/products", { scroll: false })
  }

  const hasActiveFilters = searchQuery || (selectedCategory && selectedCategory !== "all")

  // Grouping logic for "All" view
  const groupedProducts = useMemo(() => {
    if (hasActiveFilters) return null // Don't group if filtered

    // Return an array of { category, products }
    return categories.map(cat => ({
      ...cat,
      items: products.filter(p => p.categorySlug === cat.slug)
    })).filter(group => group.items.length > 0)
  }, [hasActiveFilters])

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 min-h-screen bg-slate-50">

        {/* SPLIT BANQUET HERO */}
        <section className="relative w-full flex flex-col md:grid md:grid-cols-2 min-h-[60vh] md:h-[600px] bg-[#042635]">

          {/* Image Side (Top on Mobile, Left on Desktop) */}
          <div className="relative h-[40vh] md:h-full w-full overflow-hidden group">
            <Image
              src="/products-hero-seafood-display.jpg"
              alt="Banquet de fruits de mer premium"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Content Side (Bottom on Mobile, Right on Desktop) */}
          <div className="relative flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 bg-[#042635] text-white">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#22C5C5] font-bold tracking-widest uppercase text-xs mb-4 block">
                Catalogue 2024-2025
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
                Seafood — Découvrez <br className="hidden lg:block" />
                <span className="text-[#22C5C5]">Crevettes, Langoustes,</span> <br className="hidden lg:block" />
                Poissons & bien plus.
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                Notre mission est de fournir des produits de la mer durables et de la meilleure qualité.
                C'est pourquoi toute notre sélection provient de pêcheurs qui, comme nous, s'engagent
                pour une consommation responsable et la protection de nos océans.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#042635] bg-slate-200 relative overflow-hidden">
                      <Image src={`/placeholder-avatar.jpg`} alt="Chef" fill className="object-cover" />
                      {/* Note: In a real app we'd use real avatars, for now generic divs or placeholders if images missing */}
                      {/* Fallback to colored div if no image */}
                      <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-[#042635] font-bold text-xs">{i}</div>
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-white">
                  Approuvé par <span className="text-[#22C5C5] font-bold">+50 Chefs</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative Pattern overlay on the solid color */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white transform rotate-12">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01" />
                <path d="M15 9h.01" />
              </svg>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col lg:flex-row gap-10">
              {/* SIDEBAR FILTERS - REDUCED WIDTH */}
              <aside className={`lg:w-60 flex-shrink-0 ${showMobileFilters ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto" : "hidden lg:block"}`}>

                {/* Mobile Close Button */}
                <div className="lg:hidden flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-[#042635]">Filtres</h3>
                  <Button variant="ghost" size="icon" onClick={() => setShowMobileFilters(false)}>
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <div className="lg:sticky lg:top-24 space-y-8">

                  {/* Category Filter */}
                  <div>
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      Catégories
                    </h3>
                    <div className="space-y-1">
                      <button
                        onClick={() => handleCategoryChange("all")}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center justify-between group ${selectedCategory === "all"
                          ? "bg-[#042635] text-white font-medium shadow-md"
                          : "text-slate-600 hover:bg-slate-100"
                          }`}
                      >
                        <span>Toutes les catégories</span>
                        {selectedCategory === "all" && <Check className="w-4 h-4 text-[#22C5C5]" />}
                      </button>

                      {categories.map((category) => (
                        <button
                          key={category.slug}
                          onClick={() => handleCategoryChange(category.slug)}
                          className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center justify-between group ${selectedCategory === category.slug
                            ? "bg-[#042635] text-white font-medium shadow-md"
                            : "text-slate-600 hover:bg-slate-100"
                            }`}
                        >
                          <span>{category.name}</span>
                          {selectedCategory === category.slug && <Check className="w-4 h-4 text-[#22C5C5]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Filter - Only show if flattened list */}
                  {hasActiveFilters && (
                    <div className="pt-6 border-t border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-4">Trier par</h3>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full bg-white border-slate-200 h-11">
                          <SelectValue placeholder="Trier par" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="name">Nom (A-Z)</SelectItem>
                          <SelectItem value="category">Catégorie</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Active Filters Summary */}
                  {hasActiveFilters && (
                    <div className="pt-6 border-t border-slate-200">
                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="w-full border-dashed border-slate-300 text-slate-500 hover:text-[#042635] hover:border-[#042635]"
                      >
                        Réinitialiser les filtres
                      </Button>
                    </div>
                  )}
                </div>
              </aside>

              {/* PRODUCTS DISPLAY */}
              <div className="flex-1 min-w-0">

                {/* TOOLBAR: SEARCH & ACTIONS (Mobile + Desktop) */}
                <div className="mb-8 space-y-4">
                  {/* Search Bar - New Position */}
                  <div className="relative group max-w-2xl">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#22C5C5]/30 to-[#042635]/10 rounded-xl opacity-50 group-focus-within:opacity-100 transition duration-500"></div>
                    <div className="relative flex items-center bg-white border border-slate-200 p-1.5 rounded-xl shadow-sm focus-within:ring-1 focus-within:ring-[#22C5C5]/50">
                      <Search className="w-5 h-5 text-slate-400 ml-3 mr-3 group-focus-within:text-[#22C5C5] transition-colors" />
                      <input
                        type="text"
                        placeholder="Rechercher des produits..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border-none text-slate-900 text-base placeholder:text-slate-400 focus:outline-none focus:ring-0 h-10"
                      />
                      {searchQuery && (
                        <button onClick={() => setSearchQuery("")} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Mobile Toggle & Sort (Hidden on Desktop mostly, or repurposed) */}
                  <div className="flex gap-4 lg:hidden">
                    <Button
                      onClick={() => setShowMobileFilters(true)}
                      className="flex-1 bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50"
                    >
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      Filtres
                    </Button>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="flex-1 bg-white border-slate-200 shadow-sm">
                        <SelectValue placeholder="Trier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">Nom</SelectItem>
                        <SelectItem value="category">Catégorie</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* LOGIC BRANCHING: Grouped (Default) vs Filtered */}
                {groupedProducts ? (
                  // VIEW 1: GROUPED BY CATEGORY (Default)
                  <div className="space-y-16">
                    {groupedProducts.map((group) => (
                      <section key={group.slug} id={group.slug} className="scroll-mt-28">
                        <SectionHeader
                          title={group.name}
                          description={`Découvrez nos ${group.name.toLowerCase()} premium.`}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
                          {group.items.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                ) : (
                  // VIEW 2: FILTERED FLAT LIST
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-[#042635]">
                        {selectedCategory !== 'all' ? categories.find(c => c.slug === selectedCategory)?.name : 'Résultats de recherche'}
                      </h2>
                      <span className="text-slate-500 text-sm font-medium bg-slate-100 px-3 py-1 rounded-full">
                        {filteredProducts.length} produits
                      </span>
                    </div>

                    {filteredProducts.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
                        {filteredProducts.map((product, index) => (
                          <ProductCard key={product.id} product={product} index={index} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                        <Search className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Aucun produit trouvé</h3>
                        <p className="text-slate-500 mb-6">Nous ne trouvons pas de produits correspondant à vos critères.</p>
                        <Button onClick={clearFilters} variant="outline">Voir tout le catalogue</Button>
                      </div>
                    )}
                  </div>
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
      <main className="pt-20 md:pt-24 min-h-screen bg-slate-50">
        <div className="bg-[#042635] h-[400px] w-full animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 py-12 flex gap-10">
          <div className="w-72 hidden lg:block space-y-4">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-[400px] rounded-xl" />
            ))}
          </div>
        </div>
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
