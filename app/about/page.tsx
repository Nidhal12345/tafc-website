import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Eye,
  Handshake,
  Globe2,
  ShieldCheck,
  Leaf,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  Anchor,
  Ship,
  Factory,
  Truck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "À propos | TAFC - The Tunisian Algerian Fish Company",
  description:
    "Découvrez TAFC, le partenariat stratégique entre la Tunisie et l'Algérie pour des produits de la mer de haute qualité. Notre histoire, notre mission et notre vision.",
}

const values = [
  {
    icon: ShieldCheck,
    title: "Qualité garantie",
    description: "Normes internationales strictes, contrôles rigoureux et traçabilité complète de la mer à la table.",
  },
  {
    icon: Leaf,
    title: "Durabilité",
    description:
      "Respect des ressources marines, pêche responsable et engagement pour la préservation de l'écosystème.",
  },
  {
    icon: Globe2,
    title: "Export international",
    description: "Certification export, documentation complète et logistique adaptée aux marchés internationaux.",
  },
  {
    icon: Users,
    title: "Partenariat B2B",
    description: "Accompagnement personnalisé, flexibilité et solutions sur mesure pour chaque client professionnel.",
  },
]

const stats = [
  { value: "15+", label: "Années d'expertise" },
  { value: "500+", label: "Clients B2B" },
  { value: "12", label: "Pays exportés" },
  { value: "24/7", label: "Chaîne du froid" },
]

const timeline = [
  {
    icon: Anchor,
    title: "Pêche responsable",
    description: "Flottes modernes équipées des dernières technologies pour une pêche sélective et durable.",
  },
  {
    icon: Ship,
    title: "Transport maritime",
    description: "Acheminement rapide vers nos centres de traitement avec maintien de la chaîne du froid.",
  },
  {
    icon: Factory,
    title: "Transformation",
    description: "Usines certifiées pour le tri, nettoyage, filetage, calibrage et conditionnement.",
  },
  {
    icon: Truck,
    title: "Distribution",
    description: "Logistique export complète avec camions frigorifiques et conteneurs réfrigérés.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tafc-navy via-tafc-navy to-tafc-blue-medium" />
          <div className="absolute inset-0 bg-[url('/ocean-waves-pattern.jpg')] opacity-5" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tafc-blue-light/10 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs text-tafc-blue-light uppercase tracking-wider font-semibold mb-4">À propos</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                Une alliance stratégique au service de l&apos;excellence
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                TAFC réunit le meilleur de la Tunisie et de l&apos;Algérie pour offrir aux professionnels des produits
                de la mer d&apos;exception. Qualité, traçabilité et durabilité sont au cœur de notre engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-tafc-coral hover:bg-tafc-coral-dark text-white font-semibold px-8"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 bg-transparent"
                >
                  <Link href="/products">Voir nos produits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b border-tafc-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-tafc-blue-medium mb-2">{stat.value}</div>
                  <div className="text-sm text-tafc-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-tafc-bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              <div>
                <p className="text-xs text-tafc-blue-medium uppercase tracking-wider font-semibold mb-3">
                  Notre histoire
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-tafc-text-primary mb-6 text-balance">
                  Le partenariat Tunisie-Algérie pour l&apos;excellence maritime
                </h2>
                <p className="text-tafc-text-secondary leading-relaxed mb-4">
                  Née de la volonté de créer une synergie entre deux nations méditerranéennes aux traditions maritimes
                  ancestrales, TAFC s&apos;est imposée comme un acteur majeur de l&apos;industrie des produits de la mer
                  en Afrique du Nord.
                </p>
                <p className="text-tafc-text-secondary leading-relaxed mb-4">
                  Notre partenariat unique nous permet d&apos;accéder aux meilleures zones de pêche de la Méditerranée
                  et de l&apos;Atlantique, tout en mutualisant nos expertises en transformation et en logistique.
                </p>
                <p className="text-tafc-text-secondary leading-relaxed">
                  Aujourd&apos;hui, nous servons des centaines de clients professionnels à travers le monde, des
                  restaurants gastronomiques aux grands distributeurs, en passant par les hôtels de luxe et les
                  traiteurs événementiels.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-tafc-blue-light/20 to-tafc-blue-medium/10 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/mediterranean-fishing-fleet-boats-harbor-tunisia.jpg"
                    alt="Flotte de pêche TAFC en Méditerranée"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white border-tafc-border rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-tafc-blue-light/10 flex items-center justify-center mb-4">
                    <Eye className="w-7 h-7 text-tafc-blue-medium" />
                  </div>
                  <h3 className="text-xl font-bold text-tafc-text-primary mb-3">Notre vision</h3>
                  <p className="text-tafc-text-secondary leading-relaxed">
                    Devenir la référence internationale des produits de la mer méditerranéens, reconnus pour notre
                    qualité exceptionnelle et notre engagement durable.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-tafc-border rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-tafc-blue-light/10 flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-tafc-blue-medium" />
                  </div>
                  <h3 className="text-xl font-bold text-tafc-text-primary mb-3">Notre mission</h3>
                  <p className="text-tafc-text-secondary leading-relaxed">
                    Fournir aux professionnels des produits de la mer sûrs, tracés et de haute qualité, tout en
                    préservant les ressources marines pour les générations futures.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-tafc-border rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-tafc-blue-light/10 flex items-center justify-center mb-4">
                    <Handshake className="w-7 h-7 text-tafc-blue-medium" />
                  </div>
                  <h3 className="text-xl font-bold text-tafc-text-primary mb-3">Notre engagement</h3>
                  <p className="text-tafc-text-secondary leading-relaxed">
                    Un accompagnement personnalisé pour chaque client, avec flexibilité, réactivité et solutions sur
                    mesure adaptées à vos besoins spécifiques.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs text-tafc-blue-medium uppercase tracking-wider font-semibold mb-3">Nos valeurs</p>
              <h2 className="text-3xl md:text-4xl font-bold text-tafc-text-primary mb-4">
                Les piliers de notre excellence
              </h2>
              <p className="text-tafc-text-secondary max-w-2xl mx-auto">
                Chaque jour, nous nous engageons à respecter ces valeurs fondamentales qui guident toutes nos actions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-tafc-bg-light border-tafc-border hover:border-tafc-blue-light/30 hover:shadow-lg transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-tafc-blue-light/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-tafc-blue-medium" />
                    </div>
                    <h3 className="font-semibold text-tafc-text-primary text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-tafc-text-secondary leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 md:py-24 bg-tafc-navy relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tafc-blue-light via-tafc-blue-medium to-tafc-blue-light opacity-50" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-tafc-blue-light/10 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs text-tafc-blue-light uppercase tracking-wider font-semibold mb-3">
                Notre processus
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">De la mer à votre établissement</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Une chaîne de valeur maîtrisée pour garantir la qualité et la fraîcheur de chaque produit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((step, index) => (
                <div key={index} className="relative">
                  {index < timeline.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0" />
                  )}
                  <div className="glass-navy rounded-2xl p-6 h-full relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-tafc-blue-light/20 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-tafc-blue-light" />
                    </div>
                    <div className="text-xs text-tafc-blue-light/60 uppercase tracking-wider mb-2">
                      Étape {index + 1}
                    </div>
                    <h3 className="font-semibold text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 bg-tafc-bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs text-tafc-blue-medium uppercase tracking-wider font-semibold mb-3">
                  Certifications
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-tafc-text-primary mb-6">
                  Des standards internationaux
                </h2>
                <p className="text-tafc-text-secondary leading-relaxed mb-6">
                  TAFC est certifiée selon les normes les plus exigeantes de l&apos;industrie agroalimentaire. Nos
                  installations et nos processus sont régulièrement audités pour garantir la conformité et la sécurité
                  alimentaire.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-tafc-blue-medium mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-tafc-text-primary">HACCP</span>
                      <p className="text-sm text-tafc-text-secondary">Système de gestion de la sécurité alimentaire</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-tafc-blue-medium mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-tafc-text-primary">ISO 22000</span>
                      <p className="text-sm text-tafc-text-secondary">
                        Management de la sécurité des denrées alimentaires
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-tafc-blue-medium mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-tafc-text-primary">Export UE</span>
                      <p className="text-sm text-tafc-text-secondary">
                        Agrément pour l&apos;exportation vers l&apos;Union Européenne
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-tafc-blue-light/20 to-tafc-blue-medium/10 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/modern-seafood-processing-facility-quality-control.jpg"
                    alt="Centre de transformation TAFC certifié"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tafc-text-primary mb-4">
              Prêt à découvrir nos produits ?
            </h2>
            <p className="text-tafc-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Explorez notre catalogue complet ou contactez notre équipe pour discuter de vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-tafc-coral hover:bg-tafc-coral-dark text-white font-semibold px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Link href="/products">
                  Voir le catalogue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-tafc-blue-medium text-tafc-blue-medium hover:bg-tafc-blue-light/10 font-semibold px-8 bg-transparent"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
