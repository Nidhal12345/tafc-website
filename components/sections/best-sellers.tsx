"use client"

import { motion } from "framer-motion"
import { getBestSellers } from "@/lib/products-data"
import { ProductCard } from "@/components/ui/product-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function BestSellers() {
  const bestSellers = getBestSellers()

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs text-tafc-blue-medium uppercase tracking-wider font-semibold mb-3">
            Produits populaires
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-tafc-text-primary mb-4">Nos best-sellers</h2>
          <p className="text-tafc-text-secondary max-w-2xl mx-auto">
            Les références les plus demandées par nos clients gastronomiques et distributeurs.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {bestSellers.map((product, index) => (
              <CarouselItem key={product.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <ProductCard product={product} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-white border-tafc-border hover:bg-tafc-bg-light" />
          <CarouselNext className="hidden md:flex -right-4 bg-white border-tafc-border hover:bg-tafc-bg-light" />
        </Carousel>
      </div>
    </section>
  )
}
