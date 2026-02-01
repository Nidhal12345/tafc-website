"use client"

import { useTranslations } from 'next-intl'
import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products-data"
import { ProductCard } from "@/components/ui/product-card"
import { Button } from "@/components/ui/button"

export function CatalogPreview() {
  const t = useTranslations('catalog')
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
          <p className="text-xs text-tafc-blue-medium uppercase tracking-wider font-semibold mb-3">{t('badge')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-tafc-text-primary mb-4">{t('title')}</h2>
          <p className="text-tafc-text-secondary max-w-2xl mx-auto">
            {t('description')}
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
              {t('viewAll')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
