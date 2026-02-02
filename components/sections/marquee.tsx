"use client"

import { useTranslations, useLocale } from 'next-intl'
import { motion } from "framer-motion"

export function Marquee() {
  const t = useTranslations('marquee')
  const locale = useLocale()
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

  return (
    <section className="relative overflow-hidden bg-slate-900 py-4 border-y border-cyan-500/20" dir="ltr">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        {/* We use a negative X move for LTR (moving left) and positive X move for RTL (moving right) */}
        {/* Since we are forcing dir="ltr" on the section wrapper to keep layout consistent, we handle direction via animation */}
        <motion.div
          className="flex flex-nowrap"
          animate={{
            x: isRTL ? ["-25%", "0%"] : ["0%", "-25%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Create 4 copies to ensure smooth looping */}
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {marqueeItemKeys.map((key, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center px-8 gap-8">
                  <span className="text-white/80 text-sm font-semibold uppercase tracking-[0.2em] whitespace-nowrap">
                    {t(`items.${key}`)}
                  </span>
                  <span className="text-cyan-400 text-xl">•</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
