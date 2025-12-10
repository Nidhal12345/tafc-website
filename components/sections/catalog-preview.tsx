"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products-data"
import { ProductCard } from "@/components/ui/product-card"
import { Button } from "@/components/ui/button"

export function CatalogPreview() {
  const previewProducts = products.slice(0, 6)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs text-tafc-blue-medium uppercase tracking-wider font-semibold mb-3">Notre catalogue</p>
          <h2 className="text-3xl md:text-4xl font-bold text-tafc-text-primary mb-4">Un aperçu de notre catalogue</h2>
          <p className="text-tafc-text-secondary max-w-2xl mx-auto">
            Découvrez quelques-unes de nos références emblématiques avant d&apos;explorer tous les produits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-tafc-coral hover:bg-tafc-coral-dark text-white font-semibold px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Link href="/products">
              Voir tout le catalogue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
