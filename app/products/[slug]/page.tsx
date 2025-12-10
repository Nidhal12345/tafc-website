import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Snowflake, Sun, Package, ChevronRight, Fish } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProductBySlug, getProductsByCategory } from "@/lib/products-data"
import { ProductCard } from "@/components/ui/product-card"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

const whatsappNumber = "+21698621128"

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Produit non trouvé | TAFC",
    }
  }

  return {
    title: `${product.name} | TAFC - Produits de la mer B2B`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 3)

  const typeLabel = product.type === "surgelé" ? "Surgelé" : product.type === "frais" ? "Frais" : "Frais & Surgelé"

  const whatsappMessage = encodeURIComponent(
    `Bonjour TAFC, je suis intéressé(e) par le produit : ${product.name}. Pouvez-vous me donner plus d'informations ?`,
  )

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <Link href="/products" className="text-slate-500 hover:text-slate-900 transition-colors">
                Produits
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <Link
                href={`/products?category=${product.categorySlug}`}
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                {product.category}
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="text-slate-900 font-medium truncate max-w-[200px]">{product.name}</span>
            </nav>
          </div>
        </div>

        <section className="bg-white py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Retour au catalogue</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Image */}
              <div className="relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Tags overlay */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className={`text-sm font-semibold px-4 py-1.5 ${
                        tag === "Best-seller"
                          ? "bg-orange-500 text-white"
                          : tag === "Premium" || tag === "Luxe"
                            ? "bg-teal-600 text-white"
                            : tag === "HORECA"
                              ? "bg-orange-500 text-white"
                              : "bg-slate-800 text-white"
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 w-fit mb-4">
                  <Fish className="w-4 h-4 text-teal-600" />
                  <span className="text-teal-700 text-sm font-medium">{product.category}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 text-balance">
                  {product.name}
                </h1>

                {product.latinName && <p className="text-lg text-teal-600 italic mb-4">{product.latinName}</p>}

                <p className="text-slate-600 text-lg leading-relaxed mb-6">{product.description}</p>

                {product.priceIndicatif && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                    <p className="text-sm text-slate-500 mb-1">Prix indicatif</p>
                    <p className="text-2xl font-bold text-slate-900">{product.priceIndicatif}</p>
                  </div>
                )}

                {/* Quick Info */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 rounded-full">
                    <MapPin className="w-4 h-4 text-slate-600" />
                    <span className="text-sm text-slate-700 font-medium">{product.origin}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 rounded-full">
                    {product.type === "surgelé" ? (
                      <Snowflake className="w-4 h-4 text-cyan-600" />
                    ) : (
                      <Sun className="w-4 h-4 text-orange-500" />
                    )}
                    <span className="text-sm text-slate-700 font-medium">{typeLabel}</span>
                  </div>
                  {product.caliber && (
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 rounded-full">
                      <Package className="w-4 h-4 text-slate-600" />
                      <span className="text-sm text-slate-700 font-medium">Calibre {product.caliber}</span>
                    </div>
                  )}
                </div>

                {/* Usage */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Usage recommandé</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.usage.map((use) => (
                      <Badge key={use} variant="outline" className="border-slate-300 text-slate-600 px-3 py-1.5">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Formats */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Formats & conditionnements
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {product.formats.map((format) => (
                      <div
                        key={format}
                        className="px-4 py-3 bg-slate-50 rounded-xl text-center text-sm text-slate-700 font-medium border border-slate-200"
                      >
                        {format}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Demander un devis
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-6 rounded-xl bg-transparent"
                  >
                    <Link href="/contact">Contacter nous</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-teal-600 text-sm uppercase tracking-wider font-semibold mb-2">
                    Dans la même catégorie
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Produits similaires</h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="hidden sm:flex border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full px-6 bg-transparent"
                >
                  <Link href={`/products?category=${product.categorySlug}`}>Voir tous</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
                ))}
              </div>

              <div className="mt-10 sm:hidden">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full bg-transparent"
                >
                  <Link href={`/products?category=${product.categorySlug}`}>Voir tous les produits similaires</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
