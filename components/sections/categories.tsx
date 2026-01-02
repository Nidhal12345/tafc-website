import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/categories"
import { CategoriesMotion } from "./categories-motion"

export function Categories() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#0a1628] to-[#0d1f35] relative overflow-hidden">
      {/* Ice texture effect */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header (animated in small client wrapper) */}
        <CategoriesMotion>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block text-[10px] sm:text-xs text-cyan-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold mb-3 sm:mb-4 border border-cyan-400/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-400/5">
              Nos gammes
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance px-2">
              Des gammes structurées pour vos besoins
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
              Notre offre couvre l&apos;ensemble des produits de la mer : crevettes, calamars, poulpes, mollusques,
              poissons méditerranéens, saumon, thon, caviar et œufs de poisson.
            </p>
          </div>
        </CategoriesMotion>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.slug} href={`/products?category=${category.slug}`} className="block group h-full">
              <div className="relative h-full bg-[#12253a]/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12253a] via-[#12253a]/50 to-transparent" />

                  {/* Product count badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/10 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                      {category.count}
                    </span>
                  </div>

                  {/* Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    <span>Voir les produits</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05)" }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-tafc-coral hover:bg-tafc-coral-dark text-white font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-tafc-coral/30 group"
          >
            <Link href="/products">
              Voir le catalogue complet
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,60 C300,100 400,20 600,60 C800,100 900,20 1200,60 L1200,120 L0,120 Z"
            fill="rgba(10,22,40,0.5)"
          />
        </svg>
      </div>
    </section>
  )
}
