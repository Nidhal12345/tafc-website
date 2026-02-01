import { notFound } from "next/navigation"
import { getMessages } from "next-intl/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  getProductBySlug,
  getProductsByCategory,
  products,
  getTranslatedProduct,
  getTranslatedProducts,
  type ProductsDataTranslations,
  type TranslatedProduct
} from "@/lib/products-data"
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
  params: Promise<{ slug: string; locale: string }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug, locale } = await params
  const product = getProductBySlug(slug)

  // Get translations for metadata
  const messages = await getMessages({ locale })
  const productsDataTranslations = (messages as { productsData?: ProductsDataTranslations }).productsData

  if (!product) {
    return {
      title: "Product not found",
    }
  }

  // Use translated name/description if available
  const translatedProduct = productsDataTranslations
    ? getTranslatedProduct(product, productsDataTranslations)
    : product

  const title = `${translatedProduct.name} - ${translatedProduct.origin || 'Mediterranean'}`
  const description = translatedProduct.description || `Discover ${translatedProduct.name}, premium seafood product. B2B quality guaranteed by TAFC.`

  return {
    title,
    description,
    keywords: [translatedProduct.name, translatedProduct.category, translatedProduct.origin, 'seafood', 'B2B', 'TAFC'].filter(Boolean),
    openGraph: {
      title: `${translatedProduct.name} | TAFC`,
      description,
      images: product.image ? [{ url: product.image, alt: translatedProduct.name }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${translatedProduct.name} | TAFC`,
      description,
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug, locale } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Get translations on server
  const messages = await getMessages({ locale })
  const productsDataTranslations = (messages as { productsData?: ProductsDataTranslations }).productsData

  // Apply translations on server (better for SEO)
  const translatedProduct = productsDataTranslations
    ? getTranslatedProduct(product, productsDataTranslations)
    : (product as TranslatedProduct)

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 3)

  const translatedRelatedProducts = productsDataTranslations
    ? getTranslatedProducts(relatedProducts, productsDataTranslations)
    : (relatedProducts as TranslatedProduct[])

  return (
    <>
      <Header />
      <ProductView product={translatedProduct} relatedProducts={translatedRelatedProducts} />
      <Footer />
    </>
  )
}
