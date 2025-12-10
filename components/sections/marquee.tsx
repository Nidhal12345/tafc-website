"use client"

import { useEffect, useRef } from "react"

const marqueeItems = [
  "PREMIUM QUALITY",
  "EXPORT INTERNATIONAL",
  "PÊCHE DURABLE",
  "FRAÎCHEUR GARANTIE",
  "TRAÇABILITÉ TOTALE",
  "PRODUITS CERTIFIÉS",
  "LIVRAISON RAPIDE",
]

export function Marquee() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPos = 0
    const speed = 0.5

    const animate = () => {
      scrollPos += speed
      // Reset when we've scrolled half the content (since content is duplicated)
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0
      }
      scrollContainer.scrollLeft = scrollPos
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="relative overflow-hidden bg-slate-900 py-4 border-y border-cyan-500/20">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div ref={scrollRef} className="flex overflow-x-hidden whitespace-nowrap" style={{ scrollBehavior: "auto" }}>
        {/* Duplicate content for seamless loop */}
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0">
            {marqueeItems.map((item, index) => (
              <div key={`${setIndex}-${index}`} className="flex items-center px-8">
                <span className="text-white/80 text-sm font-semibold uppercase tracking-[0.2em]">{item}</span>
                <span className="ml-8 text-cyan-400 text-xl">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
