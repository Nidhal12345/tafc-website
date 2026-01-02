"use client"

import Image from "next/image"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronRight, Fish, MapPin, Package, Snowflake, Sun, ShoppingBag, CheckCircle2, Ruler, Layers, Scale, Info, ArrowRight, ZoomIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProductCard } from "@/components/ui/product-card"
import type { Product } from "@/lib/products-data"
import { cn } from "@/lib/utils"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog"

interface ProductViewProps {
    product: Product
    relatedProducts: Product[]
}

const whatsappNumber = "+21698621128"

export function ProductView({ product, relatedProducts }: ProductViewProps) {
    const typeLabel = product.type === "surgelé" ? "Surgelé" : product.type === "frais" ? "Frais" : "Frais & Surgelé"

    const whatsappMessage = encodeURIComponent(
        `Bonjour TAFC, je suis intéressé(e) par le produit : ${product.name}. Pouvez-vous me donner plus d'informations ?`,
    )

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const },
        },
    }

    return (
        <div className="min-h-screen bg-slate-50/50 pb-24 md:pb-0">
            {/* Desktop Sticky Nav */}
            <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden md:block sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center gap-2 text-sm text-slate-500">
                    <Link href="/products" className="hover:text-slate-900 transition-colors flex items-center gap-1 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        Produits
                    </Link>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                    <Link href={`/products?category=${product.categorySlug}`} className="hover:text-slate-900 transition-colors">
                        {product.category}
                    </Link>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                    <span className="text-slate-900 font-medium truncate">{product.name}</span>
                </div>
            </motion.nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:py-16">

                {/* Mobile Floating Back Button */}
                <Link
                    href="/products"
                    className="md:hidden absolute top-24 left-4 z-20 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg border border-slate-100/50 text-slate-700 active:scale-95 transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">

                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:sticky lg:top-32 h-fit space-y-4 relative"
                    >
                        {/* Main Image Container */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-xl md:shadow-2xl shadow-slate-200/50 border border-slate-100 group cursor-zoom-in">
                                    <ImageWithSkeleton
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />

                                    {/* Hover Overlay with Zoom Icon */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                            <ZoomIn className="w-6 h-6 text-slate-700" />
                                        </div>
                                    </div>

                                    {/* Floating Badges */}
                                    <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-wrap gap-2 max-w-[80%]">
                                        {product.tags.map((tag, i) => (
                                            <motion.div
                                                key={tag}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + (i * 0.1) }}
                                            >
                                                <Badge
                                                    className={cn(
                                                        "backdrop-blur-md border border-white/20 bg-black/30 text-white shadow-sm hover:bg-black/40 transition-all",
                                                        "text-[10px] md:text-xs font-semibold px-2.5 py-0.5 tracking-wide uppercase", // Smaller and more premium typography
                                                        tag === "Best-seller" && "bg-orange-500/80 border-orange-400/30 text-white",
                                                        tag === "Premium" && "bg-teal-600/80 border-teal-400/30 text-white"
                                                    )}
                                                >
                                                    {tag}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0 shadow-none overflow-hidden">
                                <DialogTitle className="sr-only">Vue détaillée de {product.name}</DialogTitle>
                                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                        sizes="90vw"
                                        priority
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>

                        {/* Visual Specs Row - Desktop Only in this col */}
                        <div className="hidden lg:grid grid-cols-3 gap-3">
                            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-1">
                                <MapPin className="w-5 h-5 text-teal-600 mb-1" />
                                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Origine</span>
                                <span className="text-sm font-bold text-slate-800 line-clamp-1">{product.origin}</span>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-1">
                                {product.type === "surgelé" ? <Snowflake className="w-5 h-5 text-cyan-600 mb-1" /> : <Sun className="w-5 h-5 text-orange-500 mb-1" />}
                                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Type</span>
                                <span className="text-sm font-bold text-slate-800">{typeLabel}</span>
                            </div>
                            {product.caliber && (
                                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-1">
                                    <Package className="w-5 h-5 text-purple-600 mb-1" />
                                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Calibre</span>
                                    <span className="text-sm font-bold text-slate-800">{product.caliber}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column - Details */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6 md:gap-8 pt-0 md:pt-2"
                    >
                        {/* Header Info */}
                        <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-teal-50 border border-teal-100 w-fit">
                                <Fish className="w-3.5 h-3.5 md:w-4 md:h-4 text-teal-600" />
                                <span className="text-teal-800 text-xs md:text-sm font-bold tracking-wide">{product.category}</span>
                            </div>

                            <div className="space-y-1 md:space-y-2">
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] font-[family-name:var(--font-sora)]">
                                    {product.name}
                                </h1>
                                {product.latinName && (
                                    <p className="text-lg md:text-2xl text-slate-400 font-serif italic">
                                        {product.latinName}
                                    </p>
                                )}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <p className="text-base md:text-xl text-slate-600 leading-relaxed font-[family-name:var(--font-manrope)]">
                                {product.description}
                            </p>
                        </motion.div>

                        {/* Mobile Specs Grid */}
                        <div className="grid grid-cols-2 gap-3 lg:hidden">
                            <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Origine</p>
                                <p className="font-semibold text-slate-900 flex items-center gap-1.5 text-sm">
                                    <MapPin className="w-4 h-4 text-teal-500" /> {product.origin}
                                </p>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Type</p>
                                <p className="font-semibold text-slate-900 flex items-center gap-1.5 text-sm">
                                    {product.type === "surgelé" ? <Snowflake className="w-4 h-4 text-cyan-600" /> : <Sun className="w-4 h-4 text-orange-500" />}
                                    {typeLabel}
                                </p>
                            </div>
                            {product.caliber && (
                                <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm col-span-2">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Calibre</p>
                                    <p className="font-semibold text-slate-900 flex items-center gap-1.5 text-sm">
                                        <Package className="w-4 h-4 text-purple-500" />
                                        {product.caliber}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Professional Order CTA Card - Desktop Only */}
                        <motion.div variants={itemVariants} className="hidden md:block">
                            <div className="flex flex-row gap-4 pt-2">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-14 rounded-xl shadow-lg shadow-green-900/10 flex-1"
                                >
                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <div className="bg-white/20 p-1.5 rounded-lg">
                                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        </div>
                                        <span className="text-base">Devis WhatsApp</span>
                                    </a>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 h-14 rounded-xl flex-1"
                                >
                                    <Link href="/contact" className="flex items-center justify-center gap-2">
                                        <span className="text-base">Contacter</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>

                        <Separator className="bg-slate-200" />

                        {/* Detailed Lists */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 font-[family-name:var(--font-sora)] flex items-center gap-2">
                                    <span className="w-1 h-5 md:h-6 bg-teal-500 rounded-full" /> Usage recommandé
                                </h3>
                                <div className="flex flex-col gap-2 md:gap-3">
                                    {product.usage.map((use) => (
                                        <div key={use} className="flex items-center gap-3 text-slate-700 bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-sm md:text-base">
                                            <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                            <span className="font-medium">{use}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 font-[family-name:var(--font-sora)] flex items-center gap-2">
                                    <span className="w-1 h-5 md:h-6 bg-orange-500 rounded-full" /> Conditionnements
                                </h3>
                                <div className="flex flex-col gap-2 md:gap-3">
                                    {product.formats.map((format) => (
                                        <div key={format} className="flex items-center gap-3 text-slate-700 bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-sm md:text-base">
                                            <Package className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                            <span className="font-medium">{format}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Variants Section */}
                        {product.variants && product.variants.length > 0 && product.variants.some(v => Object.keys(v).length > 0) && (
                            <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 font-[family-name:var(--font-sora)] flex items-center gap-2">
                                    <span className="w-1 h-5 md:h-6 bg-purple-500 rounded-full" /> Variantes disponibles
                                </h3>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {product.variants.map((variant, idx) => {
                                        // Build variant label
                                        const parts: string[] = []
                                        if (variant.size) parts.push(`Taille ${variant.size}`)
                                        if (variant.caliber) parts.push(`Calibre ${variant.caliber}`)
                                        if (variant.preparation) parts.push(variant.preparation)
                                        if (variant.origin) parts.push(variant.origin)
                                        if (variant.pieces) parts.push(`${variant.pieces} pièces`)
                                        if (variant.type) parts.push(variant.type)
                                        if (variant.grade) parts.push(`Grade ${variant.grade}`)

                                        const label = parts.join(' • ')
                                        if (!label) return null

                                        return (
                                            <div
                                                key={idx}
                                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 shadow-sm hover:border-purple-300 hover:bg-purple-50/50 transition-colors"
                                            >
                                                {variant.size && <Ruler className="w-4 h-4 text-purple-500" />}
                                                {variant.caliber && <Scale className="w-4 h-4 text-purple-500" />}
                                                {variant.preparation && <Layers className="w-4 h-4 text-purple-500" />}
                                                {!variant.size && !variant.caliber && !variant.preparation && <Package className="w-4 h-4 text-purple-500" />}
                                                {label}
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        )}

                        {/* Note Section */}
                        {product.note && (
                            <motion.div variants={itemVariants}>
                                <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-amber-800 font-medium">{product.note}</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Related Products - Horizontal Scroll on Mobile */}
                {relatedProducts.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mt-16 md:mt-32 border-t border-slate-200 pt-10 md:pt-16"
                    >
                        <div className="flex flex-row items-center justify-between mb-6 md:mb-10">
                            <div>
                                <span className="text-teal-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-1 block">Découvrir plus</span>
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-[family-name:var(--font-sora)] relative z-10">
                                    Similaires
                                </h2>
                            </div>
                            <Button asChild variant="ghost" className="text-slate-600 hover:text-slate-900 group text-sm md:text-base">
                                <Link href={`/products?category=${product.categorySlug}`}>
                                    <span className="hidden sm:inline">Voir tout</span>
                                    <span className="sm:hidden">Tout</span>
                                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:pb-0 sm:mx-0 sm:px-0 scrollbar-hide">
                            {relatedProducts.map((related, idx) => (
                                <div key={related.id} className="min-w-[85vw] sm:min-w-0 snap-center">
                                    <ProductCard product={related} index={idx} />
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}
            </main>

            {/* Mobile Fixed CTA */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 1 }}
                className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/90 backdrop-blur-xl border-t border-slate-200 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] md:hidden"
            >
                <div className="flex gap-3 max-w-sm mx-auto">
                    <Button
                        asChild
                        size="lg"
                        className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-lg shadow-green-900/10"
                    >
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                        >
                            <div className="bg-white/20 p-1 rounded-full">
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </div>
                            <span>Devis WhatsApp</span>
                        </a>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="flex-none w-14 border-2 border-slate-200 rounded-xl px-0"
                    >
                        <Link href="/contact" className="flex items-center justify-center">
                            <div className="sr-only">Contacter</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}
