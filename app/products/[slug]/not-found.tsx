import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Fish, ArrowLeft } from "lucide-react"

export default function ProductNotFound() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 min-h-[60vh] flex items-center justify-center bg-tafc-bg-light">
        <div className="text-center px-4">
          <div className="w-24 h-24 rounded-full bg-tafc-border/50 flex items-center justify-center mx-auto mb-6">
            <Fish className="w-12 h-12 text-tafc-text-secondary" />
          </div>
          <h1 className="text-3xl font-bold text-tafc-text-primary mb-4">Produit non trouvé</h1>
          <p className="text-tafc-text-secondary mb-8 max-w-md mx-auto">
            Le produit que vous recherchez n&apos;existe pas ou a été retiré de notre catalogue.
          </p>
          <Button
            asChild
            className="bg-tafc-coral hover:bg-tafc-coral-dark text-white font-semibold px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Link href="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au catalogue
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  )
}
