"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Ship, Fish, Award, CheckCircle2 } from "lucide-react"

const pillarConfig = [
  {
    key: "vision",
    icon: Ship,
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    key: "mission",
    icon: Fish,
    gradient: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-400",
  },
  {
    key: "whyTafc",
    icon: Award,
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
]

const highlightKeys = [
  "partnership",
  "modernFleets",
  "traceability",
  "standards",
]

export function AboutPreview() {
  const t = useTranslations('about')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#0a1628] via-[#0d1f35] to-[#0a1628] relative overflow-hidden"
    >
      {/* Ambient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,162,232,0.05),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-block text-[10px] sm:text-xs text-cyan-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold mb-3 sm:mb-4 border border-cyan-400/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-400/5">
            {t('badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight px-2">
            {t('titlePart1')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">{t('tunisia')}</span> {t('and')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">{t('algeria')}</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main large image */}
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                <Image
                  src="/mediterranean-fishing-boats-harbor-tunisia-sunrise.jpg"
                  alt={t('imageAlt.fleet')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="bg-white/10 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full border border-white/10">
                    {t('modernFleets')}
                  </span>
                </div>
              </div>

              {/* Overlapping smaller images */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-8 -right-4 md:right-8 w-40 md:w-52 h-32 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0a1628]"
              >
                <Image
                  src="/seafood-processing-facility-workers-quality-contro.jpg"
                  alt={t('imageAlt.processing')}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-6 -right-2 md:right-16 w-36 md:w-44 h-28 md:h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0a1628]"
              >
                <Image
                  src="/fresh-fish-market-selection-mediterranean-premium.jpg"
                  alt={t('imageAlt.selection')}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-4 left-4 md:left-8 bg-gradient-to-br from-[#1a3550] to-[#0d2137] p-5 rounded-2xl shadow-2xl border border-cyan-500/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                15+
              </div>
              <div className="text-sm text-gray-300 mt-1">{t('yearsExperience')}</div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {t('description1')}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              {t('description2')}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlightKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm text-gray-200 font-medium">{t(`highlights.${key}`)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vision / Mission / Pourquoi TAFC Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillarConfig.map((pillar, index) => (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div
                className={`relative h-full bg-gradient-to-br ${pillar.gradient} backdrop-blur-xl rounded-3xl p-8 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Illuminated border effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,162,232,0.1) 0%, transparent 50%, rgba(0,146,208,0.1) 100%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-3 tracking-tight">{t(`pillars.${pillar.key}.title`)}</h3>
                  <p className="text-gray-300/90 leading-relaxed">{t(`pillars.${pillar.key}.description`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
