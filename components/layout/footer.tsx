"use client"

import type React from "react"

import Link from "next/link"
import Image from 'next/image'
import { useState } from "react"
import { Fish, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight, Send } from "lucide-react"

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/products", label: "Produits" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Youtube, label: "YouTube" },
]

const legalLinks = [
  { href: "#", label: "Mentions légales" },
  { href: "#", label: "Politique de confidentialité" },
  { href: "#", label: "Conditions générales" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-[#042635] overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Pre-Footer CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center mb-12 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Prêt à faire évoluer votre offre en produits de la mer ?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Collaborez avec TAFC pour une qualité premium et un export fiable.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ff7a59] to-[#ff6b4a] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Demander un devis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Main 4-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  width={500}
                  height={500}
                  className="rounded-sm object-cover"
                  alt="Picture of the author"
                />              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-tight">TAFC</span>
                <span className="text-cyan-400 text-xs leading-tight">Tunisian Algerian Fish Co.</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              The Tunisian Algerian Fish Company – Votre partenaire de confiance pour des produits de la mer
              d&apos;exception.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-5">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative text-slate-400 hover:text-cyan-400 transition-colors text-sm inline-block"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:info@tacfisheries.com" className="hover:text-cyan-400 transition-colors">
                  info@tacfisheries.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+21698621128" className="hover:text-cyan-400 transition-colors">
                    +216 98 62 11 28
                  </a>
                  <a href="tel:+21698621938" className="hover:text-cyan-400 transition-colors">
                    +216 98 62 19 38
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>Tunisie & Algérie</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-5">Restez informé</h4>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email..."
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gradient-to-r from-[#ff7a59] to-[#ff6b4a] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  aria-label="S'abonner"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && <p className="text-cyan-400 text-xs mt-2">Merci pour votre inscription !</p>}
            </form>

            {/* Social Icons */}
            <div>
              <h5 className="text-slate-400 text-sm mb-3">Suivez-nous</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-cyan-400 hover:bg-[#ff7a59] hover:text-white hover:border-[#ff7a59] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} TAFC – The Tunisian Algerian Fish Company. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
