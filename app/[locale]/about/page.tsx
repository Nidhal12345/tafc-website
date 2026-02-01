"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Leaf, Handshake, Award, Anchor, Globe2 } from "lucide-react"
import { useTranslations } from "next-intl"

// --- ANIMATION VARIANTS ---
const fadeInRight = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
}

const heroTextVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
}

export default function AboutPage() {
  const t = useTranslations('aboutPage')
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen selection:bg-tafc-blue-light/20">

        {/* HERO SECTION - NEW */}
        <section className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden flex items-center justify-center">
          {/* Background Image with Parallax & Zoom Effect */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            style={{ y: y1 }}
          >
            <Image
              src="/fishing-boat-nets-mediterranean-sea-sunrise-profes.jpg"
              alt="Mer Méditerranée"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-tafc-deep-navy/30 via-transparent to-tafc-deep-navy/90" />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center text-white mt-16 md:mt-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.h1 variants={heroTextVariant} className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                  {t('hero.titlePart1')}
                </span>
                <span className="font-serif italic font-light text-tafc-blue-light">
                  {t('hero.titlePart2')}
                </span>
              </motion.h1>

              <motion.p variants={heroTextVariant} className="max-w-2xl mx-auto text-base md:text-xl text-gray-200 font-light leading-relaxed mb-8 md:mb-10 px-4">
                TAFC - The Tunisian Algerian Fish Company<br />
                <span className="opacity-80 text-sm md:text-lg">{t('hero.slogan')}</span>
              </motion.p>
            </motion.div>
          </div>
        </section>


        {/* REST OF CONTENT */}
        <div className="pt-16 md:pt-32 pb-20 bg-white space-y-20 md:space-y-32">

          {/* SECTION 1: PRESENTATION (Editorial Left-Right) */}
          <section className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeInRight}
                className="flex-1 relative z-10 w-full"
              >
                <div className="inline-block px-3 py-1 mb-6 border border-tafc-blue-medium/30 rounded-full text-tafc-blue-medium text-xs font-bold uppercase tracking-widest">
                  {t('presentation.badge')}
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-tafc-navy mb-8 leading-[1.1]">
                  {t('presentation.title')}
                </h2>
                <div className="w-16 md:w-20 h-1.5 bg-tafc-coral mb-8" />
                <p className="text-lg md:text-2xl text-tafc-text-primary font-light leading-relaxed">
                  {t('presentation.text')}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-tafc-text-secondary text-sm font-medium uppercase tracking-wider">
                    <Anchor className="w-4 h-4 text-tafc-blue-medium" /> {t('presentation.fishing')}
                  </div>
                  <div className="flex items-center gap-2 text-tafc-text-secondary text-sm font-medium uppercase tracking-wider">
                    <Globe2 className="w-4 h-4 text-tafc-blue-medium" /> {t('presentation.export')}
                  </div>
                </div>
              </motion.div>

              <div className="flex-1 w-full relative">
                <div className="relative aspect-[3/4] w-full max-w-sm md:max-w-md mx-auto lg:ml-auto lg:rotate-3 shadow-2xl rounded-sm overflow-hidden group">
                  <Image
                    src="/mediterranean-fishing-fleet-boats-harbor-tunisia.jpg"
                    alt="TAFC Fleet"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-tafc-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: MISSION & AVANTAGE (Editorial Right-Left) */}
          <section className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-32 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeInLeft}
                className="flex-1 relative z-10 w-full"
              >
                <div className="mb-12">
                  <h2 className="text-2xl md:text-4xl font-bold text-tafc-navy mb-4 md:mb-6">
                    {t('mission.title')}
                  </h2>
                  <p className="text-lg text-tafc-text-secondary leading-relaxed border-l-4 border-tafc-blue-light pl-6">
                    {t('mission.text')}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-tafc-navy mb-4 md:mb-6">
                    {t('advantage.title')}
                  </h2>
                  <p className="text-lg text-tafc-text-secondary leading-relaxed">
                    {t('advantage.text')}
                  </p>
                </div>
              </motion.div>

              <div className="flex-1 w-full relative">
                <div className="relative aspect-square w-full max-w-sm md:max-w-md mx-auto lg:mr-auto lg:-rotate-2 shadow-2xl rounded-sm overflow-hidden group">
                  <Image
                    src="/modern-seafood-processing-facility-quality-control.jpg"
                    alt="TAFC Quality Control"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-xs hidden lg:block z-20 border border-t-0 border-l-0 border-tafc-border">
                  <p className="font-serif italic text-tafc-navy text-lg text-center">
                    "{t('advantage.text').split(',')[0]}..."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: VALEURS (Bespoke "Expanding Gallery" Interaction) */}
          <section className="py-24 md:py-32 bg-[#050A14] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-between items-end gap-6"
              >
                <div>
                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                    {t('values.title')}
                  </h2>
                </div>
                <p className="text-white/50 max-w-sm text-sm md:text-base font-light leading-relaxed">
                  {t('values.subtitle')}
                </p>
              </motion.div>
            </div>

            {/* Expanding Cards Container */}
            <div className="container mx-auto px-4 lg:px-12 h-[600px] flex flex-col md:flex-row gap-4">
              <ExpandingCard
                title={t('values.cards.excellence.title')}
                subtitle={t('values.cards.excellence.subtitle')}
                desc={t('values.cards.excellence.desc')}
                icon={Award}
                image="/modern-seafood-processing-facility-quality-control.jpg"
                index={0}
              />
              <ExpandingCard
                title={t('values.cards.cooperation.title')}
                subtitle={t('values.cards.cooperation.subtitle')}
                desc={t('values.cards.cooperation.desc')}
                icon={Handshake}
                image="/mediterranean-fishing-fleet-boats-harbor-tunisia.jpg"
                index={1}
              />
              <ExpandingCard
                title={t('values.cards.responsibility.title')}
                subtitle={t('values.cards.responsibility.subtitle')}
                desc={t('values.cards.responsibility.desc')}
                icon={Leaf}
                image="/fishing-boat-nets-mediterranean-sea-sunrise-profes.jpg"
                index={2}
              />
            </div>
          </section>

          {/* SECTION 4: VISION (Cinematic Typographic Manifesto) */}
          <section className="relative min-h-[90vh] flex flex-col items-start justify-center overflow-hidden bg-white px-6 md:px-12 py-24">
            {/* Parallax Background Text */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none opacity-[0.03]">
              <h2 className="text-[20vw] font-black text-tafc-navy leading-none whitespace-nowrap">
                {t('vision.bgText')}
              </h2>
            </div>

            <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" as const }}
              >
                <span className="inline-block py-2 px-4 border border-tafc-navy rounded-full text-tafc-navy font-bold uppercase text-xs tracking-widest mb-8 hover:bg-tafc-navy hover:text-white transition-colors duration-300">
                  {t('vision.badge')}
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-tafc-navy leading-[0.9] tracking-tighter mb-10">
                  {t('vision.titlePart1')}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tafc-blue-medium to-tafc-coral">{t('vision.titleHighlight')}</span><br />
                  {t('vision.titlePart2')}
                </h2>
                <div className="h-[2px] w-32 bg-tafc-navy mb-10" />
                <p className="text-xl md:text-2xl text-tafc-text-primary font-light leading-relaxed max-w-xl">
                  "{t('hero.slogan')}"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative group"
              >
                {/* Abstract Composition */}
                <div className="relative z-10 bg-tafc-deep-navy p-12 md:p-16 rounded-[2rem] text-white shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-between">
                  {/* Gradient Orb */}
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-tafc-blue-light/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                  <div className="relative z-10">
                    <Globe2 className="w-16 h-16 text-tafc-blue-light mb-8" />
                    <h3 className="text-3xl font-bold mb-6">{t('vision.card.title')}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {t('vision.card.description')}
                    </p>
                  </div>

                  <div className="relative z-10 pt-12">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="bg-white text-tafc-navy hover:bg-tafc-blue-light hover:text-white rounded-full px-8 h-14 text-lg font-bold transition-all duration-300 shadow-xl shadow-white/5">
                        <Link href="/contact">{t('vision.card.ctaContact')}</Link>
                      </Button>
                      <Button asChild size="lg" variant="ghost" className="text-white border border-white/20 hover:bg-white/10 rounded-full px-8 h-14 text-lg">
                        <Link href="/products">{t('vision.card.ctaCatalog')}</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Decorative Element Behind */}
                <div className="absolute -bottom-8 -right-8 w-full h-full border border-tafc-navy/10 rounded-[2rem] -z-10" />
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

// COMPONENT: Expanding Card (Values)
function ExpandingCard({ title, subtitle, desc, icon: Icon, image, index }: { title: string, subtitle: string, desc: string, icon: any, image: string, index: number }) {
  return (
    <motion.div
      layout
      className="relative group h-[400px] md:h-full rounded-3xl overflow-hidden cursor-pointer md:flex-1 md:hover:flex-[2.5] transition-[flex] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] isolate"
    >
      {/* Background Image (Reveals on Hover/Active) */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

      {/* Content Container */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
        {/* Icon & Index */}
        <div className="absolute top-8 left-8 md:top-10 md:left-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 group-hover:bg-tafc-coral group-hover:border-tafc-coral transition-all duration-500">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-white/40 font-mono text-sm tracking-widest uppercase">0{index + 1}</span>
        </div>

        <motion.div layout="position" className="relative z-10">
          <span className="text-tafc-coral uppercase tracking-widest text-xs font-bold mb-2 block opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 md:group-hover:translate-y-0">
            {subtitle}
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-2 md:mb-4 tracking-tight">
            {title}
          </h3>
          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 md:group-hover:translate-y-0 h-auto md:h-0 md:group-hover:h-auto overflow-hidden">
            {desc}
          </p>
        </motion.div>
      </div>

      {/* Interactive Border */}
      <div className="absolute inset-0 border-2 border-white/10 rounded-3xl group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  )
}