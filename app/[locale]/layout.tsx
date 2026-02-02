import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Sora, Manrope } from "next/font/google"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { routing, localeMetadata, type Locale } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import { LoadingProvider } from "@/components/ui/loading-provider"
import "../globals.css"

// Optimized font loading with display swap for better performance
const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-sora",
    display: "swap",
})

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-manrope",
    display: "swap",
})

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
})

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
    themeColor: "#042635",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
}

// Generate static params for all locales
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

// Generate metadata dynamically based on locale
export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params

    // You can import translations here for dynamic SEO
    const messages = await import(`../../messages/${locale}.json`)
    const seo = messages.seo || {}

    const baseUrl = "https://tafc.tn"

    return {
        metadataBase: new URL(baseUrl),
        title: {
            default: seo.title || "TAFC - The Tunisian Algerian Fish Company",
            template: seo.titleTemplate || "%s | TAFC",
        },
        description: seo.description || "Premium B2B seafood supplier",
        keywords: [
            "produits de la mer",
            "grossiste poisson",
            "fournisseur B2B",
            "export tunisie",
            "export algerie",
            "poulpe méditerranée",
            "crevettes royales",
            "fruits de mer",
            "HORECA",
            "poisson frais",
            "seafood export",
            "mediterranean fish",
        ],
        authors: [{ name: "TAFC - The Tunisian Algerian Fish Company" }],
        creator: "TAFC",
        publisher: "TAFC",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            type: "website",
            locale: locale === 'ar' ? 'ar_SA' : locale === 'en' ? 'en_US' : 'fr_FR',
            url: baseUrl,
            siteName: "TAFC - The Tunisian Algerian Fish Company",
            title: seo.ogTitle || "TAFC - Premium Seafood Excellence",
            description: seo.ogDescription || "Premium seafood from Tunisia and Algeria",
            images: [
                {
                    url: "/products-hero-seafood-display.jpg",
                    width: 1200,
                    height: 630,
                    alt: "TAFC - Premium Seafood",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: seo.ogTitle || "TAFC - Premium Seafood",
            description: seo.twitterDescription || "Premium seafood export",
            images: ["/products-hero-seafood-display.jpg"],
        },
        icons: {
            icon: [{ url: "/logo.png", type: "image/png" }],
            apple: [{ url: "/logo.png", type: "image/png" }],
        },
        manifest: "/manifest.json",
        alternates: {
            canonical: baseUrl,
            languages: {
                'fr': `${baseUrl}/fr`,
                'en': `${baseUrl}/en`,
                'ar': `${baseUrl}/ar`,
            },
        },
    }
}

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params

    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as Locale)) {
        notFound()
    }

    // Enable static rendering
    setRequestLocale(locale)

    // Get messages for the current locale
    const messages = await getMessages()

    // Get text direction for the locale
    const direction = localeMetadata[locale as Locale]?.direction || 'ltr'

    return (
        <html lang={locale} dir={direction} className="scroll-smooth" suppressHydrationWarning>
            <head>
                {/* Preconnect to external resources for faster loading */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body
                className={cn(
                    inter.variable,
                    sora.variable,
                    manrope.variable,
                    "font-sans antialiased min-h-screen bg-slate-50 text-slate-900",
                    "selection:bg-[#22C5C5] selection:text-[#042635]"
                )}
            >
                <NextIntlClientProvider messages={messages}>
                    <LoadingProvider>
                        {children}
                    </LoadingProvider>
                </NextIntlClientProvider>
                <Toaster />
                <Analytics />
            </body>
        </html>
    )
}
