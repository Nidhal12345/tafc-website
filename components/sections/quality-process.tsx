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
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-[#0a1628] via-[#0b1d30] to-[#0a1628] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,162,232,0.04),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs text-cyan-400 uppercase tracking-[0.2em] font-semibold mb-4 border border-cyan-400/20 px-4 py-2 rounded-full bg-cyan-400/5">
            Notre processus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
            Une chaîne qualité maîtrisée{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              de la mer à votre cuisine
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Contrôle qualité rigoureux, chaîne du froid ininterrompue, traçabilité complète et normes export respectées
            à chaque étape.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-12 md:space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 === 1 ? "" : ""}`}
            >
              {/* Image Side */}
              <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden group shadow-2xl shadow-black/40">
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
                    className={`absolute top-5 left-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                  >
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10">
                      <p className="text-white text-sm font-medium">Étape {index + 1} sur 4</p>
                    </div>
                  </div>
                </div>

                {/* Decorative blur behind */}
                <div
                  className={`absolute -z-10 -bottom-4 ${index % 2 === 1 ? "-left-4" : "-right-4"} w-full h-full rounded-3xl bg-gradient-to-br ${step.color} opacity-10 blur-xl`}
                />
              </div>

              {/* Content Side */}
              <div className={`${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                <div className={`flex items-center gap-4 mb-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center shadow-lg border border-white/10`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={index % 2 === 1 ? "text-right" : ""}>
                    <p className="text-xs text-cyan-400 uppercase tracking-widest font-semibold mb-1">
                      Étape {step.number}
                    </p>
                    <h3 className="font-bold text-2xl md:text-3xl text-white tracking-tight">{step.title}</h3>
                  </div>
                </div>
                <p className={`text-lg text-gray-300 leading-relaxed max-w-lg ${index % 2 === 1 ? "md:ml-auto" : ""}`}>
                  {step.description}
                </p>

                {/* Connecting line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className={`hidden md:flex mt-10 ${index % 2 === 1 ? "justify-end" : "justify-start"}`}>
                    <div className="flex items-center gap-2">
                      <div className={`h-0.5 w-16 bg-gradient-to-r ${step.color} opacity-30`} />
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
