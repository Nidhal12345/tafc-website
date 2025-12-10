"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Youtube, label: "YouTube" },
]

export function ContactPreview() {
  return (
    <section className="py-20 md:py-28 bg-tafc-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden rounded-2xl border-tafc-border shadow-lg h-full min-h-[300px]">
              <div className="relative w-full h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311542.5044073225!2d8.5!3d36.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation TAFC - Tunisie & Algérie"
                />
              </div>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs text-tafc-blue-medium uppercase tracking-wider font-semibold mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-tafc-text-primary mb-4">
              Parlons de vos besoins en produits de la mer
            </h2>
            <p className="text-tafc-text-secondary mb-8 leading-relaxed">
              Dites-nous quel type d&apos;établissement vous êtes, vos volumes, vos fréquences de livraison… Notre
              équipe vous accompagne dans la définition de votre approvisionnement.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-tafc-blue-light/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-tafc-blue-medium" />
                </div>
                <span className="text-tafc-text-primary">info@tafc.tn</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-tafc-blue-light/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-tafc-blue-medium" />
                </div>
                <div className="flex flex-col">
                  <span className="text-tafc-text-primary">+216 98 62 11 28</span>
                  <span className="text-tafc-text-primary">+216 98 62 19 38</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-tafc-blue-light/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-tafc-blue-medium" />
                </div>
                <span className="text-tafc-text-primary">Basé en Tunisie & Algérie</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-tafc-coral hover:bg-tafc-coral-dark text-white font-semibold px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Link href="/contact">Prendre contact avec l&apos;équipe</Link>
              </Button>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-tafc-border flex items-center justify-center text-tafc-text-secondary hover:bg-tafc-blue-light/10 hover:text-tafc-blue-medium hover:border-tafc-blue-light/40 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
