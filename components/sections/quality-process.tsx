"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Anchor, ClipboardCheck, Snowflake, Truck } from "lucide-react"

const steps = [
  {
    icon: Anchor,
    number: "01",
    title: "Pêche & sélection",
    description:
      "Flottes modernes, sélection rigoureuse des meilleures espèces selon les saisons et les zones de pêche méditerranéennes.",
    image: "/fishing-boat-nets-mediterranean-sea-sunrise-profes.jpg",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Contrôle & transformation",
    description:
      "Usines certifiées aux normes internationales. Nettoyage, filetage et calibrage selon les standards les plus stricts.",
    image: "/seafood-quality-control-inspection-facility-worker.jpg",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Snowflake,
    number: "03",
    title: "Congélation & conditionnement",
    description:
      "Technologie IQF de pointe. Températures -18°C à -40°C. Emballages sous vide pour une fraîcheur optimale.",
    image: "/industrial-freezing-facility-seafood-packaging-pro.jpg",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Truck,
    number: "04",
    title: "Logistique & export",
    description:
      "Chaîne du froid garantie 24/7. Camions frigorifiques, conteneurs réfrigérés et documentation export complète.",
    image: "/refrigerated-truck-logistics-export-shipping-conta.jpg",
    color: "from-indigo-500 to-purple-500",
  },
]

export function QualityProcess() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#0a1628] via-[#0b1d30] to-[#0a1628] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,162,232,0.04),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-block text-[10px] sm:text-xs text-cyan-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold mb-3 sm:mb-4 border border-cyan-400/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-400/5">
            Notre processus
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight px-2">
            Une chaîne qualité maîtrisée{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              de la mer à votre cuisine
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Contrôle qualité rigoureux, chaîne du froid ininterrompue, traçabilité complète et normes export respectées
            à chaque étape.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-10 sm:space-y-14 md:space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.12, duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center"
            >
              {/* Image Side */}
              <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl shadow-black/40">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent" />

                  {/* Step number badge */}
                  <div
                    className={`absolute top-4 left-4 sm:top-5 sm:left-5 w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                  >
                    <span className="text-white font-bold text-base sm:text-lg">{step.number}</span>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 border border-white/10">
                      <p className="text-white text-xs sm:text-sm font-medium">Étape {index + 1} sur 4</p>
                    </div>
                  </div>
                </div>

                {/* Decorative blur behind - hidden on mobile for cleaner look */}
                <div
                  className={`hidden sm:block absolute -z-10 -bottom-4 ${index % 2 === 1 ? "-left-4" : "-right-4"} w-full h-full rounded-3xl bg-gradient-to-br ${step.color} opacity-10 blur-xl`}
                />
              </div>

              {/* Content Side - always left-aligned on mobile, alternating on desktop */}
              <div className={`${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                <div className={`flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div
                    className={`w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center shadow-lg border border-white/10 flex-shrink-0`}
                  >
                    <step.icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-white" />
                  </div>
                  <div className={`${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <p className="text-[10px] sm:text-xs text-cyan-400 uppercase tracking-widest font-semibold mb-0.5 sm:mb-1">
                      Étape {step.number}
                    </p>
                    <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">{step.title}</h3>
                  </div>
                </div>
                <p className={`text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-lg ${index % 2 === 1 ? "md:ml-auto" : ""}`}>
                  {step.description}
                </p>

                {/* Connecting line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className={`hidden md:flex mt-8 lg:mt-10 ${index % 2 === 1 ? "justify-end" : "justify-start"}`}>
                    <div className="flex items-center gap-2">
                      <div className={`h-0.5 w-12 lg:w-16 bg-gradient-to-r ${step.color} opacity-30`} />
                      <div className="w-2 h-2 rounded-full bg-cyan-400/50" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
