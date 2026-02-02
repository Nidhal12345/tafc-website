"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, Globe, ArrowRight, Instagram, Facebook, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useTranslations } from "next-intl"
import { useState, FormEvent } from "react"
import { toast } from "sonner"

export default function ContactPage() {
    const t = useTranslations('contactPage')

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (data.success) {
                toast.success(t('form.success') || "Message sent successfully!")
                setFormData({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    message: ""
                })
            } else {
                toast.error(data.error || t('form.error') || "Failed to send message")
            }
        } catch (error) {
            toast.error(t('form.error') || "An error occurred. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-slate-200">

                {/* Modern Hero Section */}
                <section className="relative h-[40vh] min-h-[350px] flex items-end pb-16 overflow-hidden bg-[#020c1b]">
                    {/* Background Image */}
                    <img
                        src="/site_support_12.jpg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/70 to-[#020c1b]/90 z-10" />
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#22C5C5]/5 rounded-full blur-3xl opacity-60 z-[5]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#5865f2]/5 rounded-full blur-3xl opacity-60 z-[5]" />

                    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-sora tracking-tight leading-[1.15] mb-3">
                                {t('hero.title')}
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
                                {t('hero.subtitle')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30 pb-24">

                    {/* PRIMARY ROW: Direct Contact Methods (The Stars) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="grid md:grid-cols-3 gap-6 mb-12"
                    >
                        {/* WhatsApp Card - Primary */}
                        <a href="https://wa.me/21698621128" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-[#25D366] transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MessageSquare className="w-24 h-24 text-[#25D366]" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-6 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                                    <MessageSquare className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#042635] mb-2 font-sora">{t('cards.whatsapp.title')}</h3>
                                <p className="text-slate-500 mb-6 font-medium">{t('cards.whatsapp.subtitle')}</p>
                                <span className="inline-flex items-center text-[#25D366] font-bold group-hover:translate-x-2 transition-transform">
                                    {t('cards.whatsapp.cta')} <ArrowRight className="w-4 h-4 ml-2" />
                                </span>
                            </div>
                        </a>

                        {/* Phone Card - Secondary */}
                        <a href="tel:+21698621128" className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-[#042635] transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Phone className="w-24 h-24 text-[#042635]" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#042635]/10 text-[#042635] flex items-center justify-center mb-6 group-hover:bg-[#042635] group-hover:text-white transition-colors">
                                    <Phone className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#042635] mb-2 font-sora">{t('cards.phone.title')}</h3>
                                <p className="text-slate-500 mb-6 font-medium">{t('cards.phone.subtitle')}</p>
                                <span className="text-xl font-bold text-[#042635] group-hover:text-[#22C5C5] transition-colors">
                                    +216 98 621 128
                                </span>
                            </div>
                        </a>

                        {/* Email Card - Tertiary */}
                        <a href="mailto:sales@tafc.tn" className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-[#22C5C5] transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Mail className="w-24 h-24 text-[#22C5C5]" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#22C5C5]/10 text-[#22C5C5] flex items-center justify-center mb-6 group-hover:bg-[#22C5C5] group-hover:text-white transition-colors">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#042635] mb-2 font-sora">{t('cards.email.title')}</h3>
                                <p className="text-slate-500 mb-6 font-medium">{t('cards.email.subtitle')}</p>
                                <span className="text-lg font-bold text-[#042635] group-hover:text-[#22C5C5] transition-colors">
                                    sales@tafc.tn
                                </span>
                            </div>
                        </a>
                    </motion.div>

                    {/* SECONDARY ROW: Context & Form */}
                    <div className="grid lg:grid-cols-12 gap-8 items-start">

                        {/* Context Info (Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-4 space-y-6"
                        >
                            {/* Location Card */}
                            <div className="bg-[#042635] p-8 rounded-3xl shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=36.8065,10.1815&zoom=10&size=400x400&sensor=false')] bg-cover bg-center" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#042635] to-[#042635]/80" />

                                <div className="relative z-10 text-center">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/10">
                                        <Globe className="w-8 h-8 text-[#22C5C5]" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-1">{t('cards.location.title')}</h3>
                                    <p className="text-[#22C5C5] text-sm font-medium mb-4">{t('cards.location.subtitle')}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {t('cards.location.desc').split(' ').slice(0, 2).join(' ')}<br />
                                        {t('cards.location.desc').split(' ').slice(2).join(' ')}
                                    </p>
                                </div>
                            </div>

                            {/* Socials - Compact */}
                            <div className="grid grid-cols-2 gap-4">
                                <a href="https://www.instagram.com/tafc.seafood/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] p-[2px] mb-3 group-hover:scale-110 transition-transform">
                                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                            <Instagram className="w-5 h-5 text-pink-600" />
                                        </div>
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">{t('cards.socials.instagram')}</span>
                                </a>

                                <a href="https://www.facebook.com/profile.php?id=61585917932963" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                                        <Facebook className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">{t('cards.socials.facebook')}</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Simplified Form (Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-8"
                        >
                            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-1 h-8 bg-slate-200 rounded-full" />
                                    <div>
                                        <h3 className="text-xl font-bold text-[#042635]">{t('form.title')}</h3>
                                        <p className="text-slate-400 text-sm">{t('form.subtitle')}</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('form.name')}</Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="h-11 bg-slate-50 border-slate-200 focus:border-[#042635] focus:ring-0 rounded-xl"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="company" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('form.company')}</Label>
                                            <Input
                                                id="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="h-11 bg-slate-50 border-slate-200 focus:border-[#042635] focus:ring-0 rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('form.email')}</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="h-11 bg-slate-50 border-slate-200 focus:border-[#042635] focus:ring-0 rounded-xl"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="phone" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('form.phone')}</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="h-11 bg-slate-50 border-slate-200 focus:border-[#042635] focus:ring-0 rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="message" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('form.message')}</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="min-h-[120px] bg-slate-50 border-slate-200 focus:border-[#042635] focus:ring-0 rounded-xl resize-none"
                                        />
                                    </div>

                                    <div className="pt-2 flex justify-end">
                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-5 text-base rounded-xl transition-all disabled:opacity-70"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    {t('form.sending') || "Sending..."}
                                                </>
                                            ) : (
                                                t('form.submit')
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
