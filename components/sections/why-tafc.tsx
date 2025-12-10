"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Award, ClipboardCheck, Thermometer, Fish } from "lucide-react"

const features = [
  {
    title: "Qualité Garantie",
    description: "Produits certifiés et contrôlés pour une fraîcheur exceptionnelle à chaque commande.",
    icon: Award,
  },
  {
    title: "Contrôles Qualité Rigoureux",
    description: "Chaque lot est inspecté et vérifié selon des normes strictes avant expédition.",
    icon: ClipboardCheck,
  },
  {
    title: "Chaîne Du Froid",
    description: "Conservation optimale de -18°C à -40°C du départ jusqu'à votre réception.",
    icon: Thermometer,
  },
  {
    title: "Gamme Diversifiée",
    description: "Large sélection de produits de la mer pour répondre à tous vos besoins culinaires.",
    icon: Fish,
  },
]

export function WhyTAFC() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#0c1829] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header section - split layout like reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] sm:text-4xl md:text-[42px] lg:text-[46px] font-bold text-white leading-[1.12] tracking-tight text-balance">
              Pourquoi Choisir TAFC Comme Fournisseur ?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-white/70 text-[15px] md:text-base leading-relaxed mb-7 max-w-lg">
              Nous mettons tout en œuvre pour vous offrir des produits de la mer d'exception avec un service
              irréprochable, adapté aux besoins de votre établissement.
            </p>
            <div>
              <motion.button
                className="inline-flex items-center gap-2.5 bg-white hover:bg-white/90 text-[#0c1829] font-medium px-6 py-3 rounded-full transition-all duration-300 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Découvrir Nos Produits
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative bg-[#101f33] rounded-2xl p-6 md:p-7 border border-white/10 hover:border-white/20 transition-all duration-300 h-full hover:bg-[#152640]">
                  <div className="h-32 sm:h-36 mb-5 flex items-center justify-center rounded-xl bg-[#0c1829] border border-white/5 group-hover:border-white/10 transition-all duration-300">
                    <IconComponent
                      className="w-14 h-14 text-white/50 group-hover:text-white/70 transition-colors duration-300"
                      strokeWidth={1.3}
                    />
                  </div>

                  <h3 className="font-semibold text-sm md:text-[15px] text-white text-center leading-snug mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-white/50 text-xs text-center leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
