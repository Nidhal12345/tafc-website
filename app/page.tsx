import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Marquee } from "@/components/sections/marquee"
import { AboutPreview } from "@/components/sections/about-preview"
import { BestSellers } from "@/components/sections/best-sellers"
import { Categories } from "@/components/sections/categories"
import { QualityProcess } from "@/components/sections/quality-process"
import { WhyTAFC } from "@/components/sections/why-tafc"
import { TargetClients } from "@/components/sections/target-clients"
import { CatalogPreview } from "@/components/sections/catalog-preview"
import { ContactPreview } from "@/components/sections/contact-preview"
import { Newsletter } from "@/components/sections/newsletter"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <AboutPreview />
        <BestSellers />
        <Categories />
        <QualityProcess />
        <WhyTAFC />
        <TargetClients />
        <CatalogPreview />
        <ContactPreview />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
