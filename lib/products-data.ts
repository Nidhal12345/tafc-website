import { BestSellers } from "@/components/sections/best-sellers"

export interface ProductVariant {
  size?: string
  caliber?: string
  preparation?: string
  origin?: string
  pieces?: string
  type?: string
  grade?: string
}

export interface Product {
  id: string
  slug: string
  name: string
  latinName?: string
  category: string
  categorySlug: string
  description: string
  image: string
  tags: string[]
  origin: string
  type: string
  caliber?: string
  usage: string[]
  formats: string[]
  variants?: ProductVariant[]
  note?: string
  isBestSeller?: boolean
  priceIndicatif?: string
}

export const categories = [
  { slug: "crevettes-crustaces", name: "Crevettes & crustacés", icon: "shrimp" },
  { slug: "calamars-poulpes", name: "Calamars & poulpes", icon: "octopus" },
  { slug: "mollusques", name: "Mollusques", icon: "shell" },
  { slug: "poissons-mediterranee", name: "Poissons Méditerranée", icon: "fish" },
  { slug: "saumon-thon", name: "Saumon & thon", icon: "fish" },
  { slug: "caviar-haute-gastronomie", name: "Caviar & haute gastronomie", icon: "sparkles" },
  { slug: "oeufs-de-poisson-boutargue", name: "Œufs de poisson & Boutargue", icon: "egg" },
]

export const products = [
  // =========================
  // POISSONS MÉDITERRANÉE
  // =========================
  {
    id: "1",
    slug: "merou-rouge",
    name: "Mérou Rouge",
    latinName: "Epinephelus marginatus",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Mérou rouge (Hammour) sauvage de Méditerranée, à la chair dense et raffinée, idéal pour des plats signatures au four, à la plancha ou en cuisson lente.",
    image: "/products/Merou_Rouge.jpg",
    tags: ["Premium", "Poisson noble", "HORECA"],
    origin: "Méditerranée",
    type: "Frais / Congelé",
    usage: ["Restaurants gastronomiques", "Hôtels", "Traiteurs haut de gamme"],
    formats: ["Poisson entier", "Tronçons sur commande"],
    variants: [{ size: "G" }, { size: "M" }]
  },
  {
    id: "2",
    slug: "merou-blanc",
    name: "Mérou Blanc",
    latinName: "Epinephelus spp.",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Mérou blanc de Méditerranée, poisson noble à la chair délicate et savoureuse, parfait pour les cuissons au four, au grill ou en sauce.",
    image: "/products/Merou_Blanc.jpg",
    tags: ["Premium", "Poisson noble", "Export"],
    origin: "Méditerranée",
    type: "Frais / Congelé",
    usage: ["Restaurants de spécialités", "Hôtels", "Poissonneries haut de gamme"],
    formats: ["Entier en caisse glacée", "Tronçonné sur demande"],
    variants: [{ size: "G" }, { size: "M" }]
  },
  {
    id: "3",
    slug: "pagre",
    name: "Pagre",
    latinName: "Pagrus pagrus",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Pagre (Merjan) frais de Méditerranée, poisson à la chair blanche et ferme, très apprécié pour les grillades et les recettes traditionnelles tunisiennes.",
    image: "/products/Pagre.jpg",
    tags: ["Poisson blanc", "Traditionnel"],
    origin: "Méditerranée",
    type: "Frais",
    usage: ["Poissonneries", "Restaurants", "Cuisine familiale"],
    formats: ["Caisse vrac", "Conditionnement export"],
    variants: [{ size: "G" }, { size: "M" }]
  },
  {
    id: "5",
    slug: "dorade",
    name: "Dorade",
    latinName: "Sparus aurata",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Dorade entière de Méditerranée, au profil fin et élégant, idéale pour une cuisson au four, en croûte de sel ou à la grillade entière.",
    image: "/products/Daurade.jpg",
    tags: ["Poisson emblématique", "HORECA"],
    origin: "Méditerranée",
    type: "Frais",
    usage: ["Restaurants", "Hôtels", "Poissonneries"],
    formats: ["Entière en caisse glacée"],
    variants: [{ size: "G" }, { size: "P" }]
  },
  {
    id: "7",
    slug: "loup",
    name: "Loup entier",
    latinName: "Dicentrarchus labrax",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Loup de mer (bar) entier de Méditerranée, à la chair fine et délicate, parfait pour les cuissons en croûte, au four ou à la plancha.",
    image: "/products/loup.jpg",
    tags: ["Poisson blanc", "HORECA"],
    origin: "Méditerranée",
    type: "Frais",
    usage: ["Restaurants", "Poissonneries", "Cuisine familiale"],
    formats: ["Caisse vrac", "Conditionnement HORECA"],
    variants: [{ size: "P" }, { size: "G" }]
  },
  {
    id: "8",
    slug: "rouget-de-roche",
    name: "Rouget de Roche",
    latinName: "Mullus surmuletus",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Rouget de roche, poisson coloré au goût prononcé et iodé, très recherché pour les assiettes gastronomiques et les recettes méditerranéennes.",
    image: "/products/Rouget_de_Roche.jpg",
    tags: ["Gastronomie", "Poisson coloré"],
    origin: "Méditerranée",
    type: "Frais",
    usage: ["Restaurants gastronomiques", "Bistrots de mer"],
    formats: ["Caisse vrac"],
    variants: [{}],
    isBestSeller: true
  },
  {
    id: "9",
    slug: "merlu",
    name: "Merlu",
    latinName: "Merluccius merluccius",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Merlu de Méditerranée, à la chair tendre et légère, idéal pour fritures, cuissons à la vapeur, en sauce ou en brandade.",
    image: "/products/Merlu.jpg",
    tags: ["Poisson blanc", "Polyvalent"],
    origin: "Méditerranée",
    type: "Frais / Congelé",
    usage: ["Restauration collective", "Poissonneries", "Transformation"],
    formats: ["Caisse vrac 5–10 kg"],
    variants: [{ size: "M" }, { size: "G" }]
  },
  {
    id: "10",
    slug: "tilapia-du-nil",
    name: "Tilapia du Nil",
    latinName: "Oreochromis niloticus",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Tilapia du Nil issu d’aquaculture contrôlée, poisson à la chair douce et neutre, apprécié pour les fritures, poêlées et préparations épicées.",
    image: "/products/Tilapia_du_Nil.jpg",
    tags: ["Aquaculture", "Poisson économique"],
    origin: "Élevage contrôlé",
    type: "Frais / Congelé",
    usage: ["Restaurants", "Restauration rapide", "Poissonneries"],
    formats: ["Caisse vrac", "Sachets selon grammage"],
    variants: [{}]
  },
  {
    id: "11",
    slug: "tilapia-rouge",
    name: "Tilapia rouge",
    latinName: "Oreochromis spp.",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Tilapia rouge, poisson d’élevage à la chair tendre et moelleuse, idéal pour fritures entières, grillades et plats familiaux.",
    image: "/products/tilapia-rouge.jpg",
    tags: ["Aquaculture", "Coloré"],
    origin: "Élevage",
    type: "Frais / Congelé",
    usage: ["Poissonneries", "Restauration familiale"],
    formats: ["Caisse vrac", "Conditionnement au poids"],
    variants: [{}]
  },
  {
    id: "12",
    slug: "filets-de-tilapia",
    name: "Filets de tilapia",
    latinName: "Oreochromis niloticus",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Filets de tilapia désarêtés, prêts à cuire, parfaits pour fritures, panures, plats diététiques et restauration rapide.",
    image: "/products/Filets_de_tilapia.jpg",
    tags: ["Prêt à cuire", "Filets"],
    origin: "Élevage",
    type: "Congelé",
    usage: ["Restaurants", "Restauration rapide", "Collectivités"],
    formats: ["Sachets 1 kg", "Cartons 5–10 kg"],
    variants: [{}]
  },
  {
    id: "13",
    slug: "carpe",
    name: "Carpe",
    latinName: "Cyprinus carpio",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Carpe d’eau douce, poisson traditionnel à la chair ferme, adapté aux recettes mijotées, grillades et spécialités régionales.",
    image: "/products/Carpe.jpg",
    tags: ["Poisson d'eau douce", "Traditionnel"],
    origin: "Élevage / Eau douce",
    type: "Frais",
    usage: ["Restaurants traditionnels", "Poissonneries"],
    formats: ["Caisse vrac"],
    variants: [{ size: "M" }, { size: "G" }]
  },
  {
    id: "14",
    slug: "filets-de-carpe",
    name: "Filets de Carpe",
    latinName: "Cyprinus carpio",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Filets de carpe préparés et désarêtés, pratiques pour une utilisation directe en cuisine, en friture, sauce ou cuisson au four.",
    image: "/products/Filets_de_Carpe.jpg",
    tags: ["Prêt à cuire", "Filets"],
    origin: "Élevage / Eau douce",
    type: "Frais / Congelé",
    usage: ["Restaurants", "Poissonneries", "Traiteurs"],
    formats: ["Barquettes sous-vide", "Sachets congélation"],
    variants: [{}]
  },
  {
    id: "15",
    slug: "sole",
    name: "Sole",
    latinName: "Solea solea",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Sole de Méditerranée, poisson plat à la chair fine et délicate, incontournable pour les cartes gastronomiques.",
    image: "/products/soll.jpg",
    tags: ["Poisson plat", "Gastronomie"],
    origin: "Méditerranée",
    type: "Frais",
    usage: ["Restaurants gastronomiques", "Hôtels", "Poissonneries premium"],
    formats: ["Caisse vrac", "Calibrée HORECA"],
    variants: [{ size: "M" }, { size: "G" }]
  },
  {
    id: "16",
    slug: "mulet",
    name: "Mulet",
    latinName: "Mugil cephalus",
    category: "Poissons Méditerranée",
    categorySlug: "poissons-mediterranee",
    description:
      "Mulet de Méditerranée, poisson à la chair savoureuse souvent utilisé pour grillades, tajines et préparation de boutargue.",
    image: "/products/Mulet.jpg",
    tags: ["Poisson traditionnel", "Pour boutargue"],
    origin: "Méditerranée",
    type: "Frais",
    usage: ["Poissonneries", "Restaurants", "Transformation en boutargue"],
    formats: ["Caisse vrac"],
    variants: [{ size: "M" }]

  },

  // =========================
  // SAUMON & THON
  // =========================
  {
    id: "19",
    slug: "filets-de-saumon-avec-peau",
    name: "Filets de saumon (avec peau)",
    latinName: "Salmo salar",
    category: "Saumon & thon",
    categorySlug: "saumon-thon",
    description:
      "Filets de saumon Atlantique avec peau, riches en oméga-3, parfaits pour grillades, cuisson au four ou plancha.",
    image: "/products/Filets_de_saumon_avec_peau.jpg",
    tags: ["Filets", "Oméga-3", "Premium"],
    origin: "Norvège / Élevage contrôlé",
    type: "Frais / Congelé",
    usage: ["Restaurants", "Hôtels", "Distribution retail"],
    formats: ["Filets calibrés", "Cartons 5–10 kg"],
    variants: [{ preparation: "Avec peau" }]
  },
  {
    id: "20",
    slug: "filets-de-saumon-sans-peau",
    name: "Filets de saumon (sans peau)",
    latinName: "Salmo salar",
    category: "Saumon & thon",
    categorySlug: "saumon-thon",
    description:
      "Filets de saumon sans peau, prêts à portionner ou à cuisiner, adaptés aux restaurants, snacking premium et plats préparés.",
    image: "/products/Filets_de_saumon_sans_peau.jpg",
    tags: ["Prêt à portionner", "Filets"],
    origin: "Norvège / Élevage contrôlé",
    type: "Congelé",
    usage: ["Restauration", "Industrie agroalimentaire", "Traiteurs"],
    formats: ["Blocs ou filets sous-vide", "Carton export"],
    variants: [{ preparation: "Sans peau" }]
  },
  {
    id: "21",
    slug: "tranches-de-saumon-fume",
    name: "Tranches de saumon fumé",
    latinName: "Salmo salar",
    category: "Saumon & thon",
    categorySlug: "saumon-thon",
    description:
      "Tranches de saumon fumé délicatement, prêtes à être dressées sur toasts, plateaux traiteur ou buffets froids.",
    image: "/products/Tranches_de_saumon_fumé.jpg",
    tags: ["Fumé", "Traiteur", "Premium"],
    origin: "Norvège",
    type: "Frais / Sous-vide",
    usage: ["Traiteurs", "Hôtels", "Événementiel"],
    formats: ["Plaques tranchées sous-vide"],
    variants: [{}],
    isBestSeller: true
  },

  // =========================
  // CALAMARS & POULPES
  // =========================
  {
    id: "22",
    slug: "encornet",
    name: "Encornet",
    latinName: "Loligo vulgaris",
    category: "Calamars & poulpes",
    categorySlug: "calamars-poulpes",
    description:
      "Encornet (h’bar) tendre et savoureux, idéal pour fritures, farcis, sauces ou préparations à la plancha.",
    image: "/products/Encornet.jpg",
    tags: ["Cuisine méditerranéenne", "Friture"],
    origin: "Méditerranée",
    type: "Frais / Congelé",
    usage: ["Restaurants", "Poissonneries", "Snacking de mer"],
    formats: ["Caisse vrac", "Sachets IQF"],
    variants: [{}]
  },
  {
    id: "23",
    slug: "poulpe",
    name: "Poulpe",
    latinName: "Octopus vulgaris",
    category: "Calamars & poulpes",
    categorySlug: "calamars-poulpes",
    description:
      "Poulpe de Méditerranée, idéal pour grillades, salades tièdes, tapas et plats traditionnels longuement mijotés.",
    image: "/products/Poulpe.jpg",
    tags: ["Tapas", "Grillade", "HORECA"],
    origin: "Méditerranée",
    type: "Congelé",
    usage: ["Restaurants", "Bars à tapas", "Traiteurs"],
    formats: ["Vrac IQF", "Pièces entières"],
    variants: [
      { type: "Vrac" },
      { size: "G" },
      { size: "GG" },
      { preparation: "Découpée" }
    ]
  },
  {
    id: "24",
    slug: "calamar-tube-100-300",
    name: "Calamar",
    latinName: "Loligo vulgaris",
    category: "Calamars & poulpes",
    categorySlug: "calamars-poulpes",
    description:
      "Tubes de calamar calibrés 100/300, parfaitement nettoyés, prêts à être farcis, coupés en anneaux ou poêlés.",
    image: "/products/Calamar_Tube.jpg",
    tags: ["Prêt à farcir", "Standardisé"],
    origin: "Méditerranée",
    type: "Congelé IQF",
    usage: ["Restaurants", "Industrie", "Traiteurs"],
    formats: ["Cartons 10 kg IQF"],
    variants: [{ caliber: "100/300" }]
  },

  // =========================
  // CREVETTES & CRUSTACÉS
  // =========================
  {
    id: "28",
    slug: "langouste",
    name: "Langouste",
    latinName: "Palinurus elephas",
    category: "Crevettes & crustacés",
    categorySlug: "crevettes-crustaces",
    description:
      "Langouste de roche, crustacé d’exception pour plateaux de fruits de mer, menus gastronomiques et événements haut de gamme.",
    image: "/products/Langouste.jpg",
    tags: ["Prestige", "Gastronomie", "Fruits de mer"],
    origin: "Méditerranée / Atlantique",
    type: "Congelé",
    usage: ["Restaurants gastronomiques", "Hôtels de luxe", "Traiteurs événementiels"],
    formats: ["Pièce entière congelée", "Carton export"],
    variants: [{}]
  },
  {
    id: "29",
    slug: "crevette-blanche",
    name: "Crevette Blanche",
    latinName: "Penaeus spp.",
    category: "Crevettes & crustacés",
    categorySlug: "crevettes-crustaces",
    description:
      "Crevette blanche polyvalente, idéale pour grillades, sautés, plats en sauce, paellas ou garnitures de pâtes.",
    image: "/products/Crevette_Blanche.jpg",
    tags: ["Polyvalente", "HORECA"],
    origin: "Méditerranée / Aquaculture",
    type: "Congelé",
    usage: ["Restaurants", "Restauration rapide", "Traiteurs"],
    formats: ["Vrac IQF", "Sachets 1–2 kg"],
    variants: [
      { pieces: "60p" },
      { preparation: "Décortiquée" },
      { type: "Vrac" }
    ]
  },
  {
    id: "30",
    slug: "chevrette",
    name: "Chevrette",
    latinName: "Penaeus kerathurus",
    category: "Crevettes & crustacés",
    categorySlug: "crevettes-crustaces",
    description:
      "Chevrette (caramote) locale, à la saveur fine et sucrée, très appréciée pour les fritures, grillades et plats méditerranéens.",
    image: "/products/chevrette.jpg",
    tags: ["Locale", "Frais", "Gastronomie"],
    origin: "Tunisie / Méditerranée",
    type: "Frais / Congelé",
    usage: ["Bistrots de mer", "Restaurants", "Épiceries fines"],
    formats: ["Vrac", "Barquette"],
    variants: [{ preparation: "Entière" }, { preparation: "Décortiquée" }],
    isBestSeller: false

  },
  {
    id: "31",
    slug: "crabe-bleu-decoupe",
    name: "Crab Bleu (Découpé)",
    latinName: "Callinectes sapidus",
    category: "Crevettes & crustacés",
    categorySlug: "crevettes-crustaces",
    description:
      "Crabe bleu découpé, à la chair parfumée, idéal pour bisques, sauces, pâtes, paellas et buffets de fruits de mer.",
    image: "/products/Crab_Bleu.jpg",
    tags: ["Crabe bleu", "Cuisine créative"],
    origin: "Méditerranée",
    type: "Congelé",
    usage: ["Restaurants", "Traiteurs", "Cuisine fusion"],
    formats: ["Sachets 1 kg", "Cartons 5–10 kg"],
    variants: [{ preparation: "Découpé" }]
  },
  {
    id: "32",
    slug: "crevette-rouge",
    name: "Crevette Rouge",
    latinName: "Aristeus antennatus",
    category: "Crevettes & crustacés",
    categorySlug: "crevettes-crustaces",
    description:
      "Crevette rouge de profondeur, très recherchée pour sa couleur vive et sa chair fine, parfaite pour plats signatures et dressages raffinés.",
    image: "/products/crevettes-rouges-entieres.jpg",
    tags: ["Premium", "Profondeur", "Gastronomie"],
    origin: "Méditerranée",
    type: "Frais / Congelé",
    usage: ["Restaurants gastronomiques", "Bars à tapas haut de gamme"],
    formats: ["Vrac IQF", "Cartons export"],
    variants: [
      { pieces: "15" },
      { pieces: "50" },
      { pieces: "10" },
      { preparation: "Sans tête" }
    ]
  },

  // =========================
  // MOLLUSQUES
  // =========================
  {
    id: "33",
    slug: "mixte-fruits-de-mer",
    name: "Mixte fruits de mer",
    latinName: "",
    category: "Mollusques",
    categorySlug: "mollusques",
    description:
      "Mélange de fruits de mer prêt à l’emploi, idéal pour paellas, risottos, pizzas, pâtes et woks de la mer.",
    image: "/products/fruit_de_mer_mixte.jpg",
    tags: ["Mixte", "Prêt à cuisiner"],
    origin: "Sélection Méditerranée / Atlantique",
    type: "Congelé",
    usage: ["Restauration rapide", "Collectivités", "Traiteurs"],
    formats: ["Sachets 1–2,5 kg", "Cartons 10 kg"],
    variants: []
  },

  // =========================
  // CAVIAR & HAUTE GASTRONOMIE
  // =========================
  {
    id: "34",
    slug: "caviar-beluga",
    name: "Caviar Beluga",
    latinName: "Huso huso",
    category: "Caviar & haute gastronomie",
    categorySlug: "caviar-haute-gastronomie",
    description:
      "Caviar Beluga, perles larges et fondantes, produit d’exception pour tables gastronomiques, réceptions VIP et accords mets & champagne.",
    image: "/products/beluga.jpeg",
    tags: ["Luxe", "Ultra-premium", "Gastronomie"],
    origin: "Élevage contrôlé",
    type: "Frais",
    usage: ["Restaurants étoilés", "Hôtels de luxe", "Événementiel haut de gamme"],
    formats: ["Boîtes 30 g", "50 g", "100 g", "250 g"],
    variants: [],
    isBestSeller: false
  },
  {
    id: "35",
    slug: "caviar-impérial",
    name: "Caviar Impérial",
    latinName: "Acipenser spp.",
    category: "Caviar & haute gastronomie",
    categorySlug: "caviar-haute-gastronomie",
    description:
      "Caviar Impérial, grains équilibrés et aromatiques, idéal pour room service, plateaux premium et dégustations raffinées.",
    image: "/products/imperial-caviar.jpeg",
    tags: ["Premium", "Luxe"],
    origin: "Élevage contrôlé",
    type: "Frais",
    usage: ["Hôtels", "Épiceries fines", "Traiteurs de prestige"],
    formats: ["Boîtes 30 g", "50 g", "100 g"],
    variants: [],
    isBestSeller: false
  },
  {
    id: "36",
    slug: "caviar-osetra",
    name: "Caviar Osetra",
    latinName: "Acipenser gueldenstaedtii",
    category: "Caviar & haute gastronomie",
    categorySlug: "caviar-haute-gastronomie",
    description:
      "Caviar Osetra, grains dorés à ambrés, aux notes de noisette, parfait pour les cartes gastronomiques et accords mets & vodka.",
    image: "/products/ossetra-caviar.jpeg",
    tags: ["Luxe", "Haute gastronomie"],
    origin: "Élevage contrôlé",
    type: "Frais",
    usage: ["Restaurants gastronomiques", "Bars à caviar", "Événements privés"],
    formats: ["Boîtes 30 g", "50 g", "100 g"],
    variants: [],
    isBestSeller: false
  },
  {
    id: "37",
    slug: "boutargue-fraiche",
    name: "Boutargue fraîche",
    latinName: "Mugil cephalus",
    category: "Caviar & haute gastronomie",
    categorySlug: "oeufs-de-poisson-boutargue",
    description:
      "Boutargue fraîche de mulet, œufs entiers prêts à être transformés, idéale pour artisans, chefs et fabricants de boutargue maison.",
    image: "/products/bottarga_fresh.jpg",
    tags: ["Frais", "Artisanal", "Gastronomie"],
    origin: "Méditerranée",
    type: "Frais",
    usage: ["Restaurants", "Artisans boutargue", "Épiceries fines"],
    formats: ["Pièce entière", "Barquettes réfrigérées"],
    variants: [],
    isBestSeller: false
  },
  {
    id: "38",
    slug: "boutargue-congelee",
    name: "Boutargue congelée",
    latinName: "Mugil cephalus",
    category: "Caviar & haute gastronomie",
    categorySlug: "oeufs-de-poisson-boutargue",
    description:
      "Boutargue congelée, idéale pour le stockage longue durée tout en préservant la qualité, la texture et le potentiel aromatique.",
    image: "/products/bottarga_congelée.jpg",
    tags: ["Congelé", "Stockage longue durée"],
    origin: "Méditerranée",
    type: "Congelé",
    usage: ["Grossistes", "Export", "Industrie agroalimentaire"],
    formats: ["Pièce entière sous-vide", "Cartons export"],
    variants: [],
    isBestSeller: true
  },
  {
    id: "39",
    slug: "boutargue-sechee",
    name: "Boutargue séchée",
    latinName: "Mugil cephalus",
    category: "Caviar & haute gastronomie",
    categorySlug: "oeufs-de-poisson-boutargue",
    description:
      "Boutargue séchée traditionnelle, affinée pour une saveur intense et saline, parfaite râpée sur pâtes, risottos ou servie en fines tranches.",
    image: "/products/boutargue_sechee.jpg",
    tags: ["Séché", "Produit premium", "Artisanal"],
    origin: "Méditerranée",
    type: "Sec",
    usage: ["Restaurants gastronomiques", "Épiceries fines", "Bars à vin"],
    formats: ["Pièce entière", "Tranchée sous-vide"],
    variants: [],
    isBestSeller: true
  },
  {
    id: "40",
    slug: "crevette-blanche-sans-tete",
    name: "Crevette Blanche (Sans tête)",
    latinName: "Penaeus vannamei",
    category: "Crevettes & crustacés",
    categorySlug: "crevettes-crustaces",
    description:
      "Crevette blanche préparée sans tête, pratique et régulière, idéale pour wok, sautés, plats mijotés, buffets et restauration rapide.",
    image: "/products/Crevette_Blanche_sans_tete.jpg",
    tags: ["Sans tête", "Pratique", "Standardisée"],
    origin: "Aquaculture contrôlée",
    type: "Congelé",
    usage: ["Restauration", "Cuisine asiatique", "Plats préparés"],
    formats: ["Blocs surgelés", "Sachets 1–2 kg"],
    variants: [
      { size: "30/40" },
      { size: "40/50" },
      { size: "50/60" }
    ]
  }
];



export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller)
}
