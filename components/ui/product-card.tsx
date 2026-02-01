"use client"

import { memo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Snowflake, Box, ArrowRight, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"
import type { Product, TranslatedProduct } from "@/lib/products-data"
import { useTranslations } from "next-intl"

interface ProductCardProps {
  product: Product | TranslatedProduct
  index?: number
}

const whatsappNumber = "+21698621128"


export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const t = useTranslations("productsData.ui")
  const tNav = useTranslations("nav")

  const whatsappMessage = encodeURIComponent(
    `${tNav("whatsappMessage")} - ${product.name} (Réf: ${product.id})`
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group h-full"
    >
      <div className="h-full flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-[#22C5C5]/30 hover:shadow-lg transition-all duration-300">
        {/* Image Section */}
        <Link href={`/products/${product.slug}`} className="block relative">
          <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
            <ImageWithSkeleton
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              {product.tags.includes("Premium") && (
                <Badge className="bg-[#042635] text-white border-0 hover:bg-[#042635]">Premium</Badge>
              )}
              {product.tags.includes("Export") && (
                <Badge className="bg-[#22C5C5] text-[#042635] border-0 hover:bg-[#22C5C5] font-bold">Export</Badge>
              )}
            </div>
          </div>
        </Link>

        {/* Content Section */}
        <div className="flex-1 p-5 flex flex-col">
          <div className="flex-1">
            {/* Latin Name */}
            {product.latinName && (
              <p className="text-xs text-slate-500 italic mb-1 font-serif">{product.latinName}</p>
            )}

            {/* Product Name */}
            <Link href={`/products/${product.slug}`} className="block group-hover:text-[#22C5C5] transition-colors">
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{product.name}</h3>
            </Link>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 mb-4 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-[#22C5C5] shrink-0" />
                <span className="truncate">{product.origin}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <Snowflake className="w-4 h-4 text-[#22C5C5] shrink-0" />
                <span className="truncate capitalize">{product.type.replace("-", " & ")}</span>
              </div>

              {product.formats && product.formats.length > 0 && (
                <div className="col-span-2 flex items-center gap-2 text-slate-600">
                  <Box className="w-4 h-4 text-[#22C5C5] shrink-0" />
                  <span className="truncate text-xs text-slate-500">
                    {product.formats.slice(0, 2).join(" • ")}
                    {product.formats.length > 2 && "..."}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 mt-auto border-t border-slate-100 grid grid-cols-2 gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[#042635] hover:border-[#042635]/20 font-medium"
            >
              <Link href={`/products/${product.slug}`}>
                {t("viewProduct")}
              </Link>
            </Button>

            <Button
              asChild
              size="sm"
              className="w-full bg-[#042635] hover:bg-[#063a4f] text-white shadow-sm hover:shadow"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t("requestQuote")}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

