"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const floatingProducts = [
  {
    name: "Loup de Mer",
    subtitle: "Qualité premium",
    badge: "Best-seller",
    badgeColor: "bg-tafc-coral",
    image: "/fresh-sea-bass-fish-on-ice.jpg",
    size: "w-[200px] md:w-[240px]",
    position: "top-4 right-[15%] md:right-[10%]",
    rotation: -8,
    delay: 0,
  },
  {
    name: "Dorade Royale",
    subtitle: "Qualité premium",
    badge: "Premium",
    badgeColor: "bg-emerald-500",
    image: "/fresh-sea-bream-dorade-fish-on-ice.jpg",
    size: "w-[220px] md:w-[280px]",
    position: "top-[25%] right-[5%] md:right-[2%]",
    rotation: 6,
    delay: 0.15,
  },
  {
    name: "Crevettes Géantes",
    subtitle: "Qualité premium",
    badge: "Sélection du jour",
    badgeColor: "bg-tafc-coral",
    image: "/giant-prawns-shrimp-on-ice-premium.jpg",
    size: "w-[200px] md:w-[260px]",
    position: "bottom-[15%] right-[8%] md:right-[5%]",
    rotation: 8,
    delay: 0.3,
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0b1a2b] via-[#0d2137] to-[#0a1f35]">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,162,232,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,146,208,0.06),transparent_50%)]" />

      {/* Subtle ice texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center w-full">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/20 rounded-full px-5 py-2.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm font-semibold text-teal-400 uppercase tracking-widest">
                TAFC — Mediterranean Seafood
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
            >
              Des produits de la
              <br />
              mer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400">
                d&apos;exception
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-xl md:text-2xl text-teal-400 font-medium mb-6"
            >
              entre la Tunisie et l&apos;Algérie
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-300/90 mb-10 leading-relaxed max-w-xl"
            >
              The Tunisian Algerian Fish Company accompagne les restaurants, hôtels, traiteurs et commerces spécialisés
              avec une sélection rigoureuse de poissons et fruits de mer frais, tracés et prêts à être cuisinés.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-tafc-coral hover:bg-tafc-coral-dark text-white font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-tafc-coral/30 group"
              >
                <Link href="/products">
                  Découvrir nos produits
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-400/40 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400/60 font-semibold px-8 py-6 text-base rounded-full bg-transparent transition-all duration-300"
              >
                <Link href="/about">En savoir plus sur nous</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Product Cards */}
          <div className="order-1 lg:order-2 relative h-[420px] md:h-[520px] lg:h-[600px]">
            {floatingProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 60, rotate: 0, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, rotate: product.rotation, scale: 1 }}
                transition={{
                  delay: 0.5 + product.delay,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`absolute ${product.position} ${product.size}`}
                style={{ zIndex: 10 - index }}
              >
                <div className="relative bg-[#12253a]/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer group">
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span
                      className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-36 md:h-44 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12253a] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-4 bg-gradient-to-b from-[#12253a] to-[#0d1c2d]">
                    <h3 className="font-bold text-white text-lg tracking-tight">{product.name}</h3>
                    <p className="text-gray-400 text-sm mt-0.5">{product.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative blur cards for depth */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1.2 }}
              className="hidden lg:block absolute -top-8 right-[25%] w-28 h-36 bg-[#1a3550]/50 rounded-2xl rotate-[-15deg] blur-sm"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1.4 }}
              className="hidden lg:block absolute bottom-[5%] right-[35%] w-24 h-32 bg-[#1a3550]/40 rounded-2xl rotate-[12deg] blur-sm"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
    </section>
  )
}
