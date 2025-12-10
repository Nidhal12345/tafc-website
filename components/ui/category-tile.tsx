"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Waves, Shell, Fish, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryTileProps {
  slug: string
  name: string
  description: string
  icon: string
  index?: number
}

const iconMap: Record<string, React.ElementType> = {
  shrimp: Waves,
  octopus: Waves,
  shell: Shell,
  fish: Fish,
  sparkles: Sparkles,
}

export function CategoryTile({ slug, name, description, icon, index = 0 }: CategoryTileProps) {
  const IconComponent = iconMap[icon] || Fish

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/products?category=${slug}`}>
        <Card className="group h-full bg-white hover:bg-tafc-bg-light border-tafc-border hover:border-tafc-blue-light/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-tafc-blue-light/10 group-hover:bg-tafc-blue-light/20 flex items-center justify-center mb-4 transition-colors">
              <IconComponent className="w-8 h-8 text-tafc-blue-medium" />
            </div>
            <h3 className="font-semibold text-tafc-text-primary group-hover:text-tafc-blue-medium transition-colors mb-2">
              {name}
            </h3>
            <p className="text-sm text-tafc-text-secondary line-clamp-2 mb-4">{description}</p>
            <span className="text-xs font-medium text-tafc-blue-medium uppercase tracking-wider group-hover:text-tafc-coral transition-colors">
              Voir les produits →
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
