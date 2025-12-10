import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Sora, Manrope } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-sora'
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-manrope'
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "TAFC - The Tunisian Algerian Fish Company | Produits de la mer B2B",
  description:
    "Fournisseur B2B de produits de la mer de haute qualité. Crevettes, calamars, poulpes, poissons méditerranéens, saumon et caviar pour les professionnels HORECA.",
  keywords: [
    "produits de la mer",
    "B2B",
    "fruits de mer",
    "poisson",
    "crevettes",
    "HORECA",
    "Tunisie",
    "Algérie",
    "export",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} font-sans antialiased ${sora.variable} ${manrope.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
