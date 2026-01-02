"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export function TargetClients() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  // Lazy-load + autoplay video
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true)
          video.play().catch(() => { })
        } else {
          video.pause()
        }
      },
      { threshold: 0.35, rootMargin: "200px" }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f3ef] pb-16 pt-24 md:pb-24 md:pt-28">
      {/* BACKGROUND ACCENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="mx-auto aspect-[1108/632] w-[72rem] bg-gradient-to-tr from-tafc-coral/40 via-tafc-coral/25 to-orange-200 opacity-20" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="flex max-w-3xl flex-col items-center text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            TUNISIAN · ALGERIAN SEAFOOD
          </p>

          <h1 className="font-serif text-[2.4rem] leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[3.8rem]">
            Sublimez vos cartes avec le{" "}
            <span className="italic text-tafc-coral">meilleur</span>
            <br /> de la Méditerranée.
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-600 sm:text-base">
            Des produits ultra-frais, sourcés avec exigence pour les restaurants, hôtels,
            chefs et professionnels entre la Tunisie et l’Algérie.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {/* CTA BUTTON (YOUR ORANGE COLOR) */}
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-tafc-coral px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-tafc-coral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tafc-coral focus-visible:ring-offset-2"
            >
              Voir nos produits
            </Link>

            <Link
              href="#about"
              className="text-sm font-medium text-slate-800 underline-offset-4 hover:underline"
            >
              Découvrir notre approche
            </Link>
          </div>
        </motion.div>

        {/* VIDEO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" as const }}
          className="mt-10 w-full sm:mt-12"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-slate-900/90 shadow-xl shadow-slate-900/10">
            {/* OVERLAY GRADIENT */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />

            {/* DECORATIVE TOP TABS */}
            <div className="pointer-events-none absolute inset-x-4 top-4 z-[2] flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-300/70" />
                <span className="h-2 w-2 rounded-full bg-slate-300/70" />
                <span className="h-2 w-2 rounded-full bg-slate-300/70" />
              </div>

              <p className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-slate-200/70 sm:block">
                FRESH • DAILY • PREMIUM
              </p>

              <div className="h-2 w-8 rounded-full bg-slate-300/40" />
            </div>

            {/* VIDEO */}
            <div className="relative aspect-[16/9] w-full">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                loop
                muted
                playsInline
                preload="none"
                poster="/fresh-sea-bass-fish-on-ice.jpg"
              >
                {isVideoVisible && (
                  <source
                    src="/2882090-Uhd%203840%202160%2024Fps.mp4"
                    type="video/mp4"
                  />
                )}
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
