"use client"

import { motion } from "framer-motion"
import { useTranslations, useMessages } from 'next-intl'
import { getBestSellers, getTranslatedProduct, type ProductsDataTranslations } from "@/lib/products-data"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay, Mousewheel, Navigation } from 'swiper/modules'
import Image from "next/image"
import Link from "next/link"

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function BestSellers() {
  const t = useTranslations('bestSellers')
  const messages = useMessages()
  const rawBestSellers = getBestSellers()

  // Duplicate the list to ensure we have enough slides for the loop to work smoothly
  const loopedBestSellers = [...rawBestSellers, ...rawBestSellers, ...rawBestSellers]

  const bestSellers = loopedBestSellers.map((product, index) => {
    const translations = (messages.productsData as unknown) as ProductsDataTranslations
    const translated = getTranslatedProduct(product, translations)
    return { ...translated, uniqueId: `${product.id}-${index}` }
  })

  return (
    <section className="relative py-24 md:py-32 bg-[#F0F4F8] overflow-hidden">
      {/* CSS to handle the active slide ribbon visibility and Custom Navigation */}
      <style jsx global>{`
        .swiper-slide-active .best-seller-ribbon {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .swiper-button-next, .swiper-button-prev {
          color: #1B365D;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(4px);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .swiper-pagination-bullet-active {
          background: #1B365D !important;
        }
      `}</style>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/40 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-full h-[600px] pointer-events-none z-0 opacity-[0.4]">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-200/50">
          <path d="M0 600V400C200 450 400 300 600 350C800 400 1000 200 1200 250C1400 300 1440 100 1440 0V600H0Z" fill="currentColor" />
        </svg>
      </div>

      {/* Geometric Accents */}
      <div className="absolute top-20 left-[10%] w-24 h-24 border-4 border-white/20 rounded-full pointer-events-none animate-[spin_10s_linear_infinite]" />
      <div className="absolute bottom-40 right-[5%] w-16 h-16 border-4 border-tafc-gold-light/10 rotate-45 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight relative inline-block">
            <span className="block md:inline-block relative">
              {t('title').split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "text-tafc-blue-dark relative" : ""}>
                  {word}{" "}
                </span>
              ))}
            </span>
          </h2>

          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-tafc-gold to-transparent opacity-40" />
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed italic">
              {t('description')}
            </p>
          </div>
        </motion.div>

        <div className="w-full py-4 relative">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            speed={600}
            mousewheel={{
              forceToAxis: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 150,
              scale: 0.85,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay, Mousewheel, Navigation]}
            className="mySwiper !pb-14 !px-4"
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.uniqueId} className="!w-[280px] sm:!w-[350px] md:!w-[350px]">
                <Link href={`/products/${product.slug}`} className="block group relative">

                  {/* Floating 'Best Seller' Ribbon - Visible only on Active Slide via CSS */}
                  <div className="best-seller-ribbon absolute -top-3 left-1/2 -translate-x-1/2 z-30 opacity-0 translate-y-4 scale-75 transition-all duration-500 ease-out pointer-events-none">
                    <div className="bg-tafc-gold text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-[0_8px_16px_rgba(234,179,8,0.3)] flex items-center gap-1.5 border border-white/20 backdrop-blur-sm">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      Best Seller
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] group-hover:-translate-y-3 ring-1 ring-black/5">

                    {/* Image Container */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out"
                        sizes="(max-width: 768px) 280px, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/10 transition-opacity duration-300 group-hover:from-slate-900/90" />
                    </div>

                    {/* Star Rating Overlay */}
                    <div className="absolute top-4 right-4 flex gap-0.5 z-20 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3.5 h-3.5 text-amber-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white text-center mb-2 drop-shadow-md leading-tight group-hover:text-tafc-gold-light transition-colors">
                        {product.name}
                      </h3>

                      {/* Decorative Line */}
                      <div className="w-12 h-1 bg-white/30 rounded-full mx-auto backdrop-blur-sm overflow-hidden">
                        <div className="w-full h-full bg-tafc-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </div>
                    </div>

                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}