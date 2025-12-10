"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Droplets, Package, Thermometer, FlaskConical, Handshake, Clock } from "lucide-react"

const benefits = [
  {
    icon: Droplets,
    title: "Fraîcheur maîtrisée",
    description: "Produits pêchés et traités dans les 24h pour une fraîcheur optimale garantie.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Package,
    title: "Logistique export rapide",
    description: "Expédition internationale en 48-72h avec documentation complète.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Thermometer,
    title: "Chaîne du froid garantie",
    description: "Températures contrôlées de -18°C à -40°C du port à votre établissement.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: FlaskConical,
    title: "Contrôles qualité rigoureux",
    description: "Tests laboratoire systématiques et certifications internationales.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Handshake,
    title: "Accompagnement B2B",
    description: "Un interlocuteur dédié pour vos commandes et demandes spécifiques.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Disponibilité toute l'année",
    description: "Stock permanent et approvisionnement régulier selon vos besoins.",
    color: "from-pink-500 to-rose-500",
  },
]

export function WhyTAFC() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-[#0d1f35] via-[#0a1628] to-[#0b1a2b] relative overflow-hidden"
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
            style={{ top: `${20 + i * 20}%`, left: 0, right: 0 }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-cyan-400 uppercase tracking-[0.2em] font-semibold mb-4 border border-cyan-400/20 px-4 py-2 rounded-full bg-cyan-400/5">
            Nos avantages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Pourquoi travailler avec{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">TAFC</span> ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Des engagements concrets pour une collaboration de confiance avec les professionnels de la restauration et
            de la distribution.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative h-full bg-[#12253a]/60 backdrop-blur-sm rounded-3xl p-8 border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
                {/* Hover glow */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} bg-opacity-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  {/* Pulse effect on hover */}
                  <div
                    className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-30 animate-ping`}
                    style={{ animationDuration: "2s" }}
                  />
                </div>

                {/* Content */}
                <h3 className="font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>

                {/* Bottom line accent */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
