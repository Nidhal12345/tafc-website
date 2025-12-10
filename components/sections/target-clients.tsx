"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export function TargetClients() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Intersection Observer to lazy load and play video only when visible
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true)
            video.play().catch(() => {
              // Autoplay blocked, that's okay
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Text starts above the video and moves down into the video center
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? 350 : 450])

  // Text color transition - starts dark, becomes white when entering video
  const textColorR = useTransform(scrollYProgress, [0, 0.35, 0.5], [31, 140, 255])
  const textColorG = useTransform(scrollYProgress, [0, 0.35, 0.5], [26, 135, 255])
  const textColorB = useTransform(scrollYProgress, [0, 0.35, 0.5], [19, 125, 255])

  // Video transforms - simplified for better performance
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1])
  const videoBorderRadius = useTransform(scrollYProgress, [0, 0.5], [16, 0])
  const outlineOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Video top offset
  const videoTop = useTransform(scrollYProgress, [0, 0.3], [isMobile ? 180 : 220, 0])

  return (
    <>
      <div ref={containerRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f5f3ef]">
          {/* Text Content */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col items-center pt-8 md:pt-12"
            style={{
              y: textY,
            }}
          >
            <motion.h1
              className="text-center font-serif text-[2.5rem] leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl px-4"
              style={{
                color: useTransform([textColorR, textColorG, textColorB], ([r, g, b]) => `rgb(${r}, ${g}, ${b})`),
              }}
            >
              Sublimez vos cartes avec le <span className="italic">meilleur</span>
              <br />
              de la Méditerranée.
            </motion.h1>

            <div className="pointer-events-auto mt-4 md:mt-5">
              <Link
                href="/products"
                className="inline-block rounded-full bg-tafc-coral px-7 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-tafc-coral-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2755d1] focus-visible:ring-offset-2 md:px-8 md:py-3.5 md:text-base"
              >
                Voir nos produits
              </Link>
            </div>
          </motion.div>

          {/* Video Container */}
          <motion.div
            className="absolute inset-x-0 bottom-0 will-change-transform"
            style={{
              top: videoTop,
              scale: videoScale,
            }}
          >
            <motion.div
              className="relative h-full w-full overflow-hidden"
              style={{
                borderRadius: videoBorderRadius,
              }}
            >
              {/* Outline */}
              <motion.div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  opacity: outlineOpacity,
                  boxShadow: "inset 0 0 0 2px rgb(20, 23, 81)",
                  borderRadius: videoBorderRadius,
                }}
              />

              {/* Video with lazy loading */}
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
                  <source src="/2882090-Uhd%203840%202160%2024Fps.mp4" type="video/mp4" />
                )}
              </video>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

