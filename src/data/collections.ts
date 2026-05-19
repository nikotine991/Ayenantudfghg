export interface Collection {
  slug: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  image: string;
}

export const collections: Collection[] = [
  {
    slug: 'abrigos',
    name_es: 'Abrigos y Chaquetas',
    name_en: 'Coats & Jackets',
    description_es: 'Prendas de abrigo tejidas a telar chilote, ideales para el frío austral.',
    description_en: 'Warm outerwear woven on Chilote looms, perfect for the southern cold.',
    image: '/images/collections/abrigos.jpg'
  },
  {
    slug: 'ponchos',
    name_es: 'Tops y Tejidos',
    name_en: 'Tops & Knitwear',
    description_es: 'Tops, vestidos y cárdigans tejidos a telar y a mano con lana virgen y tintes naturales.',
    description_en: 'Handwoven and hand-knitted tops, dresses and cardigans in virgin wool with natural dyes.',
    image: '/images/collections/ponchos.jpg'
  },
  {
    slug: 'faldas',
    name_es: 'Faldas y Pantalones',
    name_en: 'Skirts & Pants',
    description_es: 'Faldas y pantalones tejidos a telar. Próximamente nuevas piezas.',
    description_en: 'Loom-woven skirts and trousers. New pieces coming soon.',
    image: '/images/collections/faldas.jpg'
  },
  {
    slug: 'trajes',
    name_es: 'Conjuntos y Blazers',
    name_en: 'Suits & Blazers',
    description_es: 'Conjuntos y blazers elegantes confeccionados a mano con lana virgen de Chiloé.',
    description_en: 'Elegant handmade suits and blazers crafted from Chiloé virgin wool.',
    image: '/images/collections/trajes.jpg'
  },
  {
    slug: 'accesorios',
    name_es: 'Boinas y Accesorios de Fieltro',
    name_en: 'Felted Berets & Accessories',
    description_es: 'Boinas, echarpes, capelinas y cuellos artesanales en lana fieltrada. Técnica de fieltro húmedo tradicional.',
    description_en: 'Handcrafted felted berets, scarves, capelets and cowls. Traditional wet felting technique.',
    image: '/images/collections/accesorios.jpg'
  }
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find(c => c.slug === slug);
}
