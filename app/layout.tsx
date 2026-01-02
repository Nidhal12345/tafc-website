import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Sora, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { cn } from "@/lib/utils"

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

// Comprehensive SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://tafc.tn"),
  title: {
    default: "TAFC - The Tunisian Algerian Fish Company | Produits de la Mer Premium B2B",
    template: "%s | TAFC - Produits de la Mer",
  },
  description:
    "Fournisseur B2B premium de produits de la mer : Crevettes royales, poulpe, calamars, poissons méditerranéens frais et congelés. Exportateur certifié pour professionnels HORECA depuis la Tunisie et l'Algérie.",
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
    locale: "fr_FR",
    url: "https://tafc.tn",
    siteName: "TAFC - The Tunisian Algerian Fish Company",
    title: "TAFC - Excellence des Produits de la Mer Premium",
    description:
      "Votre partenaire de confiance pour l'import-export de produits de la mer premium depuis la Tunisie et l'Algérie. Qualité certifiée pour les professionnels.",
    images: [
      {
        url: "/products-hero-seafood-display.jpg",
        width: 1200,
        height: 630,
        alt: "TAFC - Produits de la mer premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAFC - Produits de la Mer Premium B2B",
    description:
      "Exportation de produits de la mer frais et congelés pour le marché international. Qualité premium garantie.",
    images: ["/products-hero-seafood-display.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://tafc.tn",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
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
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
