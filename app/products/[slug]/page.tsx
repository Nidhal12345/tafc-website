import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getProductBySlug, getProductsByCategory, products } from "@/lib/products-data"
import { ProductView } from "./product-view"

// Generate static pages for all products at build time (best for Vercel performance)
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// Force static generation
export const dynamic = 'force-static'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Produit non trouvé",
    }
  }

  const title = `${product.name} - ${product.origin || 'Méditerranée'}`
  const description = product.description || `Découvrez ${product.name}, produit premium de la mer. Qualité B2B garantie par TAFC.`

  return {
    title,
    description,
    keywords: [product.name, product.category, product.origin, 'produits de la mer', 'B2B', 'TAFC'].filter(Boolean),
    openGraph: {
      title: `${product.name} | TAFC`,
      description,
      images: product.image ? [{ url: product.image, alt: product.name }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | TAFC`,
      description,
    },
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

  return (
    <>
      <Header />
      <ProductView product={product} relatedProducts={relatedProducts} />
      <Footer />
    </>
  )
}
