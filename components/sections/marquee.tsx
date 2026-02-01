"use client"

import { useEffect, useRef } from "react"
import { useTranslations, useLocale } from 'next-intl'

export function Marquee() {
  const t = useTranslations('marquee')
  const locale = useLocale()
  const scrollRef = useRef<HTMLDivElement>(null)
  const isRTL = locale === 'ar'

  const marqueeItemKeys = [
    "premiumQuality",
    "internationalExport",
    "sustainableFishing",
    "guaranteedFreshness",
    "fullTraceability",
    "certifiedProducts",
    "fastDelivery",
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPos = isRTL ? scrollContainer.scrollWidth / 2 : 0
    const speed = 0.5

    const animate = () => {
      if (isRTL) {
        // RTL: scroll from right to left (decrease scrollLeft)
        scrollPos -= speed
        if (scrollPos <= 0) {
          scrollPos = scrollContainer.scrollWidth / 2
        }
      } else {
        // LTR: scroll from left to right (increase scrollLeft)
        scrollPos += speed
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0
        }
      }
      scrollContainer.scrollLeft = scrollPos
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isRTL])

  return (
    <section className="relative overflow-hidden bg-slate-900 py-4 border-y border-cyan-500/20">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div ref={scrollRef} className="flex overflow-x-hidden whitespace-nowrap" style={{ scrollBehavior: "auto" }}>
        {/* Duplicate content for seamless loop */}
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0">
            {marqueeItemKeys.map((key, index) => (
              <div key={`${setIndex}-${index}`} className="flex items-center px-8">
                <span className="text-white/80 text-sm font-semibold uppercase tracking-[0.2em]">{t(`items.${key}`)}</span>
                <span className="ml-8 text-cyan-400 text-xl">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
