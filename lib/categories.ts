export type Category = {
  slug: string
  name: string
  description: string
  image: string
  count: string
}

export const categories: Category[] = [
  {
    slug: "crevettes-crustaces",
    name: "Crevettes & Crustacés",
    description: "Crevettes blanches, rouges, gambas et crustacés de qualité premium méditerranéenne.",
    image: "/giant-prawns-shrimp-on-ice-premium.jpg",
    count: "12+ produits",
  },
  {
    slug: "calamars-poulpes",
    name: "Calamars & Poulpes",
    description: "Calamars tubes, tentacules et poulpes entiers pêchés en Méditerranée.",
    image: "/fresh-calamari-squid-mediterranean-seafood-ice.jpg",
    count: "8+ produits",
  },
  {
    slug: "mollusques",
    name: "Mollusques",
    description: "Moules, huîtres, palourdes et coquillages frais ou surgelés de nos côtes.",
    image: "/fresh-mussels-shellfish-seafood-ice-premium.jpg",
    count: "10+ produits",
  },
  {
    slug: "poissons-mediterranee",
    name: "Poissons Méditerranée",
    description: "Bar, dorade, merlan, sardines et poissons nobles de la Méditerranée.",
    image: "/fresh-sea-bream-dorade-fish-on-ice.jpg",
    count: "20+ produits",
  },
  {
    slug: "saumon-thon",
    name: "Saumon & Thon",
    description: "Filets, pavés et blocs de saumon atlantique et thon de qualité export.",
    image: "/fresh-salmon-fillet-premium-seafood-ice.jpg",
    count: "6+ produits",
  },
  {
    slug: "caviar-haute-gastronomie",
    name: "Caviar & Haute Gastronomie",
    description: "Caviar d'exception et produits de luxe pour les établissements prestigieux.",
    image: "/luxury-caviar-premium-gourmet-seafood.jpg",
    count: "4+ produits",
  },
  {
    slug: "oeufs-de-poisson-boutargue",
    name: "Œufs de poisson & Boutargue",
    description: "Œufs de poisson frais, congelés et séchés (boutargue), destinés aux professionnels et à l’export.",
    image: "/fish-roe-boutargue-premium-seafood.jpg",
    count: "3+ produits",
  },
]
