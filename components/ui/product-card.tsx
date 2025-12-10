"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
  index?: number
}

const whatsappNumber = "+21698621128"

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(`Bonjour TAFC, je souhaite demander un devis pour : ${product.name}.`)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <div className="h-full overflow-hidden border border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image Container */}
        <Link href={`/products/${product.slug}`} className="block">
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              {product.tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  className={`text-xs font-semibold px-2.5 py-1 ${
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
        </Link>

        {/* Content */}
        <div className="p-4">
          {/* Product Name & Latin Name */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-bold text-slate-900 text-lg group-hover:text-teal-600 transition-colors mb-1">
              {product.name}
            </h3>
          </Link>
          {product.latinName && <p className="text-sm text-teal-600 italic mb-2">{product.latinName}</p>}

          {/* Origin */}
          <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Origine: {product.origin}</span>
          </div>

          {/* Price */}
          {product.priceIndicatif && (
            <p className="text-sm text-slate-600 mb-4">
              <span className="font-medium">Prix indicatif :</span>{" "}
              <span className="text-slate-900 font-semibold">{product.priceIndicatif}</span>
            </p>
          )}

          {/* Buttons */}
          <div className="space-y-2">
            <Button
              asChild
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg h-10"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demander un devis
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg h-10 bg-transparent"
            >
              <Link href="/contact">Contacter nous</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
