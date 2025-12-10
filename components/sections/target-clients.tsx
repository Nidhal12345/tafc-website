"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Utensils, Building2, Sparkles, Ship } from "lucide-react"

const clients = [
  {
    icon: Utensils,
    title: "Restaurants & chefs",
    headline: "Sélection de poissons ultra-frais pour des assiettes maîtrisées au gramme près.",
    subtext: "Découpes adaptées, calibres réguliers et livraisons cadencées selon vos services.",
  },
  {
    icon: Building2,
    title: "Hôtels & resorts",
    headline: "Gammes complètes pour buffets, room service et restauration premium.",
    subtext: "Volumes sécurisés, qualité constante et réactivité pour vos pics d'activité.",
  },
  {
    icon: Sparkles,
    title: "Traiteurs & événementiel",
    headline: "Produits sur mesure pour cocktails, banquets et grands événements.",
    subtext: "Conditionnements optimisés, pertes limitées et présentation irréprochable.",
  },
  {
    icon: Ship,
    title: "Distributeurs & grossistes",
    headline: "Partenaire export fiable pour vos réseaux B2B.",
    subtext: "Tarifs compétitifs, volumes réguliers, traçabilité claire et support logistique dédié.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export function TargetClients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-semibold mb-4">Nos segments B2B</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Pensé pour les professionnels <span className="text-cyan-400">exigeants</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            TAFC accompagne les acteurs de la restauration, de l&apos;hôtellerie et de la distribution avec des
            solutions adaptées à chaque besoin.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.title}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="group"
            >
              <div className="relative h-full bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:bg-slate-800/80 hover:border-cyan-500/30">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-slate-700/50 border border-slate-600/50 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                    <client.icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  <p className="text-xs text-cyan-400/80 uppercase tracking-widest font-medium mb-3">{client.title}</p>

                  <h3 className="text-white font-semibold text-xl leading-snug mb-4 text-balance">{client.headline}</h3>

                  <p className="text-slate-400 leading-relaxed">{client.subtext}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
