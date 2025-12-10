"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Loader2 } from "lucide-react"

export function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "" })
  }

  return (
    <section className="relative py-12 sm:py-14 md:py-18 lg:py-20 overflow-hidden">
      {/* Orange/Amber background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600" />

      {/* Fish pattern SVG background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          {/* Left fish */}
          <g transform="translate(50, 150) scale(0.8)" fill="currentColor" className="text-black">
            <path d="M120,80 Q80,40 40,80 Q0,120 40,160 Q80,200 120,160 L180,120 L120,80 Z" />
            <circle cx="50" cy="110" r="8" fill="white" />
            <path d="M180,120 L220,80 L220,160 Z" />
            <path d="M60,100 Q80,90 100,100" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M60,120 Q80,130 100,120" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M60,140 Q80,150 100,140" fill="none" stroke="currentColor" strokeWidth="2" />
          </g>

          {/* Right fish (mirrored) */}
          <g transform="translate(1000, 150) scale(-0.8, 0.8)" fill="currentColor" className="text-black">
            <path d="M120,80 Q80,40 40,80 Q0,120 40,160 Q80,200 120,160 L180,120 L120,80 Z" />
            <circle cx="50" cy="110" r="8" fill="white" />
            <path d="M180,120 L220,80 L220,160 Z" />
            <path d="M60,100 Q80,90 100,100" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M60,120 Q80,130 100,120" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M60,140 Q80,150 100,140" fill="none" stroke="currentColor" strokeWidth="2" />
          </g>

          {/* Decorative waves */}
          <path
            d="M0,350 Q300,320 600,350 Q900,380 1200,350"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-black/20"
          />
          <path
            d="M0,370 Q300,340 600,370 Q900,400 1200,370"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-black/15"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 uppercase tracking-wide px-2">
            Inscrivez-vous pour les offres spéciales
          </h2>

          {/* Form */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 py-8"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <p className="text-white text-xl font-semibold">Merci pour votre inscription!</p>
              <p className="text-white/80">Vous recevrez nos offres exclusives très bientôt.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  type="text"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-14 bg-white border-0 text-gray-900 placeholder:text-gray-500 text-base rounded-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-14 bg-white border-0 text-gray-900 placeholder:text-gray-500 text-base rounded-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
                />
                <Input
                  type="tel"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-14 bg-white border-0 text-gray-900 placeholder:text-gray-500 text-base rounded-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-tafc-navy hover:bg-tafc-navy/90 text-white font-bold uppercase tracking-wider px-12 py-6 h-auto text-base rounded-sm transition-all hover:shadow-xl disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "S'inscrire"
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
