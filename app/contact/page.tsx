"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const whatsappNumber = "+21698621128"
const whatsappMessage = encodeURIComponent("Bonjour TAFC, je souhaite en savoir plus sur vos produits de la mer.")

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@tafc.tn",
    href: "mailto:info@tafc.tn",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+216 98 62 11 28",
    secondaryValue: "+216 98 62 19 38",
    href: "tel:+21698621128",
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Tunisie & Algérie",
    description: "Présence dans les deux pays",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun - Sam: 8h - 18h",
    description: "Support disponible",
  },
]

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
]

const businessTypes = [
  "Restaurant",
  "Hôtel / Resort",
  "Traiteur / Événementiel",
  "Poissonnerie",
  "Distributeur / Grossiste",
  "Autre",
]

function ContactContent() {
  const searchParams = useSearchParams()
  const productParam = searchParams.get("product")

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    message: productParam ? `Je suis intéressé(e) par le produit : ${productParam}\n\n` : "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (productParam) {
      setFormState((prev) => ({
        ...prev,
        message: `Je suis intéressé(e) par le produit : ${productParam}\n\n`,
      }))
    }
  }, [productParam])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Parlons de votre projet</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Contactez-<span className="text-cyan-400">nous</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                Vous êtes un professionnel et souhaitez en savoir plus sur nos produits ? Notre équipe est à votre
                écoute.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Nos coordonnées</h2>
                  <p className="text-slate-600 leading-relaxed">
                    N&apos;hésitez pas à nous contacter par téléphone, email ou WhatsApp. Nous vous répondrons dans les
                    plus brefs délais.
                  </p>
                </div>

                <Card className="border-[#25D366]/30 bg-[#25D366]/5 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-[#25D366] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">Réponse rapide</h3>
                        <p className="text-slate-600 text-sm">Via WhatsApp</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Pour une réponse immédiate, contactez-nous directement sur WhatsApp.
                    </p>
                    <Button
                      asChild
                      className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-full"
                    >
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Démarrer une conversation
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-slate-200 bg-slate-50 rounded-2xl">
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{info.title}</h3>
                          {info.href ? (
                            <a href={info.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-slate-700">{info.value}</p>
                          )}
                          {info.secondaryValue && (
                            <a
                              href={`tel:${info.secondaryValue.replace(/\s/g, "")}`}
                              className="text-slate-700 hover:text-slate-900 transition-colors block"
                            >
                              {info.secondaryValue}
                            </a>
                          )}
                          {info.description && <p className="text-sm text-slate-500">{info.description}</p>}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Suivez-nous</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <Card className="border-slate-200 rounded-3xl shadow-xl shadow-slate-200/50">
                  <CardContent className="p-8 md:p-10">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                      >
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Message envoyé !</h3>
                        <p className="text-slate-600 mb-8 max-w-md mx-auto">
                          Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                        </p>
                        <Button
                          onClick={() => {
                            setIsSubmitted(false)
                            setFormState({
                              name: "",
                              email: "",
                              phone: "",
                              company: "",
                              businessType: "",
                              message: "",
                            })
                          }}
                          variant="outline"
                          className="border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full px-6"
                        >
                          Envoyer un autre message
                        </Button>
                      </motion.div>
                    ) : (
                      <>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Formulaire de contact</h2>
                        <p className="text-slate-600 mb-8">
                          Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="text-slate-700 font-medium">
                                Nom complet *
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                placeholder="Jean Dupont"
                                className="h-12 border-slate-200 bg-slate-50 rounded-xl focus:border-slate-900 focus:ring-slate-900/10 focus:bg-white"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-slate-700 font-medium">
                                Email professionnel *
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                placeholder="jean@restaurant.com"
                                className="h-12 border-slate-200 bg-slate-50 rounded-xl focus:border-slate-900 focus:ring-slate-900/10 focus:bg-white"
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="phone" className="text-slate-700 font-medium">
                                Téléphone
                              </Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formState.phone}
                                onChange={handleChange}
                                placeholder="+216 98 123 456"
                                className="h-12 border-slate-200 bg-slate-50 rounded-xl focus:border-slate-900 focus:ring-slate-900/10 focus:bg-white"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company" className="text-slate-700 font-medium">
                                Entreprise
                              </Label>
                              <Input
                                id="company"
                                name="company"
                                type="text"
                                value={formState.company}
                                onChange={handleChange}
                                placeholder="Nom de votre établissement"
                                className="h-12 border-slate-200 bg-slate-50 rounded-xl focus:border-slate-900 focus:ring-slate-900/10 focus:bg-white"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="businessType" className="text-slate-700 font-medium">
                              Type d&apos;établissement
                            </Label>
                            <Select
                              value={formState.businessType}
                              onValueChange={(value) => setFormState((prev) => ({ ...prev, businessType: value }))}
                            >
                              <SelectTrigger className="h-12 border-slate-200 bg-slate-50 rounded-xl">
                                <SelectValue placeholder="Sélectionnez votre activité" />
                              </SelectTrigger>
                              <SelectContent>
                                {businessTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message" className="text-slate-700 font-medium">
                              Votre message *
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              required
                              value={formState.message}
                              onChange={handleChange}
                              placeholder="Décrivez vos besoins : types de produits, volumes, fréquence de livraison..."
                              className="min-h-[150px] border-slate-200 bg-slate-50 rounded-xl focus:border-slate-900 focus:ring-slate-900/10 focus:bg-white resize-none"
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            size="lg"
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                Envoi en cours...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                Envoyer le message
                              </>
                            )}
                          </Button>
                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Notre zone d&apos;activité</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                TAFC opère depuis la Tunisie et l&apos;Algérie, avec des capacités d&apos;export vers l&apos;Europe, le
                Moyen-Orient et l&apos;Afrique.
              </p>
            </motion.div>

            <Card className="overflow-hidden rounded-3xl border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311542.5044073225!2d8.5!3d36.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation TAFC - Tunisie & Algérie"
                />
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <>
          <Header />
          <main className="pt-20 md:pt-24 min-h-screen bg-slate-50" />
          <Footer />
        </>
      }
    >
      <ContactContent />
    </Suspense>
  )
}
