export interface Product {
  id: string;
  slug: string;
  collection: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  price_clp: number;
  images: string[];
  featured: boolean;
  inStock: boolean;
  tags_es: string[];
  tags_en: string[];
}

const BASE = '/images/products';

export const products: Product[] = [
  // ── ABRIGOS Y CHAQUETAS ───────────────────────────────────────────────
  {
    id: 'chaqueta-crema-crochet',
    slug: 'chaqueta-crema-crochet',
    collection: 'abrigos',
    name_es: 'Chaqueta Crema con Cuello Crochet',
    name_en: 'Cream Jacket with Crochet Collar',
    description_es: 'Chaqueta tejida a telar en lana virgen crema natural. Cuello tipo Peter Pan y puños con encaje a crochet artesanal. Ruedo con flecos. Cierre frontal. Pieza elegante y cálida.',
    description_en: 'Loom-woven jacket in natural cream virgin wool. Peter Pan collar and cuffs with handmade crochet lace. Fringed hem. Front closure. Elegant and warm piece.',
    price_clp: 95000,
    images: [
      `${BASE}/chaqueta-crema-crochet-1.jpg`,
      `${BASE}/chaqueta-crema-crochet-2.jpg`
    ],
    featured: false,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'crochet', 'crema', 'flecos'],
    tags_en: ['virgin wool', 'Chilote loom', 'crochet', 'cream', 'fringe']
  },
  {
    id: 'abrigo-cafe-oversized',
    slug: 'abrigo-cafe-oversized',
    collection: 'abrigos',
    name_es: 'Abrigo Café Oversized',
    name_en: 'Oversized Brown Wool Coat',
    description_es: 'Abrigo oversized tejido a telar en lana café oscura. Tejido grueso y muy cálido, ideal para el invierno austral. Silueta amplia y envolvente. Cierre con botones artesanales.',
    description_en: 'Oversized loom-woven dark brown wool coat. Thick and very warm weave, perfect for the southern winter. Wide, enveloping silhouette. Handcrafted button closure.',
    price_clp: 150000,
    images: [
      `${BASE}/abrigo-cafe-oversized-1.jpg`,
      `${BASE}/abrigo-cafe-oversized-2.jpg`
    ],
    featured: false,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'café', 'oversized', 'invierno'],
    tags_en: ['virgin wool', 'Chilote loom', 'brown', 'oversized', 'winter']
  },
  {
    id: 'abrigo-escoces-largo',
    slug: 'abrigo-escoces-largo',
    collection: 'abrigos',
    name_es: 'Abrigo Largo Estilo Escocés',
    name_en: 'Long Tartan-Style Coat',
    description_es: 'Abrigo largo tejido a telar en patrón tipo escocés en tonos tierra, crema y café. Bolsillo parche en el frente. Botones artesanales. Combina el tejido a telar con lana natural sin teñir. Prenda de colección.',
    description_en: 'Long loom-woven coat in tartan-style pattern, earth tones, cream and brown. Front patch pocket. Handcrafted buttons. Combines loom weaving with undyed natural wool. Collector\'s piece.',
    price_clp: 175000,
    images: [
      `${BASE}/abrigo-escoces-largo-1.jpg`,
      `${BASE}/abrigo-escoces-largo-2.jpg`
    ],
    featured: true,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'abrigo largo', 'escocés', 'tierra', 'colección'],
    tags_en: ['virgin wool', 'Chilote loom', 'long coat', 'tartan', 'earth tones', 'collection']
  },
  {
    id: 'chaqueta-azul-teal',
    slug: 'chaqueta-azul-teal',
    collection: 'abrigos',
    name_es: 'Chaqueta Azul Teal con Bolsillos Denim',
    name_en: 'Teal Blue Jacket with Denim Pockets',
    description_es: 'Chaqueta tejida a telar en azul teal intenso. Bolsillos aplicados en tela denim, mezcla de técnicas artesanales. Flecos en el ruedo. Cierre con broche artesanal. Diseño contemporáneo.',
    description_en: 'Loom-woven jacket in deep teal blue. Applied denim fabric pockets — a blend of artisan techniques. Fringed hem. Handcrafted brooch closure. Contemporary design.',
    price_clp: 95000,
    images: [
      `${BASE}/chaqueta-azul-teal.jpg`
    ],
    featured: false,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'teal', 'azul', 'denim', 'flecos'],
    tags_en: ['virgin wool', 'Chilote loom', 'teal', 'blue', 'denim', 'fringe']
  },
  {
    id: 'abrigo-rojo-cuero',
    slug: 'abrigo-rojo-cuero',
    collection: 'abrigos',
    name_es: 'Abrigo Rojo con Bolsillos de Cuero',
    name_en: 'Red Coat with Leather Pockets',
    description_es: 'Abrigo tejido a telar en lana roja intensa. Bolsillos aplicados en cuero rojo, cierre de botones tipo duffle. Pieza de fuerte impacto visual. Lana virgen teñida con tintes fuertes.',
    description_en: 'Loom-woven coat in deep red wool. Applied red leather pockets. Duffle-style toggle closure. Visually striking piece. Virgin wool dyed with vibrant dyes.',
    price_clp: 165000,
    images: [
      `${BASE}/abrigo-rojo-cuero.jpg`
    ],
    featured: true,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'rojo', 'cuero', 'abrigo'],
    tags_en: ['virgin wool', 'Chilote loom', 'red', 'leather', 'coat']
  },
  {
    id: 'chaqueta-mostaza-rayada',
    slug: 'chaqueta-mostaza-rayada',
    collection: 'abrigos',
    name_es: 'Chaqueta Mostaza con Canesú Rayado',
    name_en: 'Mustard Jacket with Striped Yoke',
    description_es: 'Chaqueta tejida a telar en lana mostaza dorada. Canesú y bolsillos en tejido a rayas café, crema y negro. Botones artesanales forrados. Detalle de cierre trasero. Pieza con gran trabajo artesanal.',
    description_en: 'Loom-woven jacket in golden mustard wool. Yoke and pockets in brown, cream and black striped weave. Covered handmade buttons. Back closure detail. Exceptional artisan craftsmanship.',
    price_clp: 105000,
    images: [
      `${BASE}/chaqueta-mostaza-rayada-1.jpg`,
      `${BASE}/chaqueta-mostaza-rayada-2.jpg`
    ],
    featured: true,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'mostaza', 'rayas', 'artesanal'],
    tags_en: ['virgin wool', 'Chilote loom', 'mustard', 'striped', 'artisan']
  },
  {
    id: 'chaqueta-turquesa-volados',
    slug: 'chaqueta-turquesa-volados',
    collection: 'abrigos',
    name_es: 'Chaqueta Turquesa con Volados',
    name_en: 'Turquoise Jacket with Ruffle Front',
    description_es: 'Chaqueta tejida a telar en azul turquesa vibrante. Volados en lana verde lima recorren el frente. Ribete inferior a rayas turquesa y lima. Sin botones, silueta abierta. Diseño avant-garde único.',
    description_en: 'Loom-woven jacket in vibrant turquoise blue. Lime green wool ruffles run down the front. Striped turquoise and lime lower trim. Buttonless open silhouette. Unique avant-garde design.',
    price_clp: 98000,
    images: [
      `${BASE}/chaqueta-turquesa-volados.jpg`
    ],
    featured: false,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'turquesa', 'volados', 'avant-garde'],
    tags_en: ['virgin wool', 'Chilote loom', 'turquoise', 'ruffle', 'avant-garde']
  },

  // ── PONCHOS Y CHALES ─────────────────────────────────────────────────
  {
    id: 'chal-tierra-pompones',
    slug: 'chal-tierra-pompones',
    collection: 'ponchos',
    name_es: 'Chal Tierra con Pompones',
    name_en: 'Earth Tone Shawl with Pom-Poms',
    description_es: 'Chal tejido a telar en lana tonos tierra con borde decorativo de pompones en lana naranja y rosa. Broche artesanal de madera. Tejido resistente al agua. Ideal para cubrir hombros.',
    description_en: 'Loom-woven earth-tone wool shawl with decorative border of orange and pink wool pom-poms. Wooden handmade brooch. Water-resistant weave. Perfect as a shoulder wrap.',
    price_clp: 72000,
    images: [
      `${BASE}/chal-tierra-pompones.jpg`
    ],
    featured: false,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'tierra', 'pompones', 'chal'],
    tags_en: ['virgin wool', 'Chilote loom', 'earth tones', 'pom-poms', 'shawl']
  },
  {
    id: 'poncho-multicolor-turquesa',
    slug: 'poncho-multicolor-turquesa',
    collection: 'ponchos',
    name_es: 'Poncho Multicolor con Ribete Turquesa',
    name_en: 'Multicolor Poncho with Turquoise Trim',
    description_es: 'Poncho tejido a telar en lana multicolor con mezcla de verdes, amarillos y naranjas. Ribete y bordado lateral en turquesa. Lana virgen teñida con tintes naturales. Pieza única.',
    description_en: 'Loom-woven multicolor wool poncho blending greens, yellows and oranges. Turquoise border and side embroidery. Virgin wool with natural dyes. One-of-a-kind piece.',
    price_clp: 85000,
    images: [
      `${BASE}/poncho-multicolor-turquesa.jpg`
    ],
    featured: false,
    inStock: true,
    tags_es: ['lana virgen', 'tintes naturales', 'poncho', 'multicolor', 'turquesa'],
    tags_en: ['virgin wool', 'natural dyes', 'poncho', 'multicolor', 'turquoise']
  },
  {
    id: 'poncho-mostaza-bordado',
    slug: 'poncho-mostaza-bordado',
    collection: 'ponchos',
    name_es: 'Poncho Mostaza con Bordado',
    name_en: 'Mustard Poncho with Embroidery',
    description_es: 'Poncho tejido a telar en lana mostaza vibrante. Bordado decorativo en el centro y ribete multicolor. Cierre con broche artesanal. Diseño que equilibra color sólido con detalles artísticos.',
    description_en: 'Loom-woven poncho in vibrant mustard wool. Decorative centre embroidery and multicolor trim. Artisan brooch closure. Design balancing solid colour with artistic details.',
    price_clp: 82000,
    images: [
      `${BASE}/poncho-mostaza-bordado.jpg`
    ],
    featured: false,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'mostaza', 'bordado', 'poncho'],
    tags_en: ['virgin wool', 'Chilote loom', 'mustard', 'embroidery', 'poncho']
  },
  {
    id: 'poncho-verde-strelitzia',
    slug: 'poncho-verde-strelitzia',
    collection: 'ponchos',
    name_es: 'Poncho Verde con Strelitzia',
    name_en: 'Green Poncho with Strelitzia',
    description_es: 'Poncho tejido a telar en lana verde oliva. Bordado artístico de flor de strelitzia en naranja y azul. Flecos en los bordes. Pieza única con alto valor artístico.',
    description_en: 'Loom-woven olive green wool poncho. Artistic embroidery of a strelitzia bird-of-paradise flower in orange and blue. Fringed edges. Unique piece with high artistic value.',
    price_clp: 90000,
    images: [
      `${BASE}/poncho-verde-strelitzia.jpg`
    ],
    featured: true,
    inStock: true,
    tags_es: ['lana virgen', 'tintes naturales', 'verde', 'bordado', 'strelitzia', 'artístico'],
    tags_en: ['virgin wool', 'natural dyes', 'green', 'embroidery', 'strelitzia', 'artistic']
  },
  {
    id: 'chal-teal-bolsillos',
    slug: 'chal-teal-bolsillos',
    collection: 'ponchos',
    name_es: 'Chal Teal con Bolsillos',
    name_en: 'Teal Shawl with Pockets',
    description_es: 'Chal grande tejido a telar en lana azul teal intenso. Bolsillos integrados en ambos lados. Flecos en el ruedo. Puede usarse como poncho o chal envolvente. Muy versátil.',
    description_en: 'Large loom-woven shawl in deep teal blue wool. Integrated pockets on both sides. Fringed hem. Can be worn as a poncho or wrap shawl. Very versatile.',
    price_clp: 78000,
    images: [
      `${BASE}/chal-teal-bolsillos.jpg`
    ],
    featured: false,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'teal', 'azul', 'bolsillos', 'chal'],
    tags_en: ['virgin wool', 'Chilote loom', 'teal', 'blue', 'pockets', 'shawl']
  },
  {
    id: 'chal-crema-macrame',
    slug: 'chal-crema-macrame',
    collection: 'ponchos',
    name_es: 'Chal Crema con Flecos Macramé',
    name_en: 'Cream Shawl with Macramé Fringe',
    description_es: 'Chal tejido a telar en lana virgen crema sin teñir. Borde inferior con trabajo artesanal de macramé en lana gruesa. Mezcla dos técnicas textiles en una sola pieza de autor.',
    description_en: 'Loom-woven shawl in undyed natural cream virgin wool. Lower edge with handmade macramé work in thick wool. Blends two textile techniques in one unique artisan piece.',
    price_clp: 75000,
    images: [
      `${BASE}/chal-crema-macrame.jpg`
    ],
    featured: false,
    inStock: true,
    tags_es: ['lana virgen', 'lana natural', 'macramé', 'crema', 'chal', 'artesanal'],
    tags_en: ['virgin wool', 'natural wool', 'macramé', 'cream', 'shawl', 'artisan']
  },

  // ── TRAJES Y VESTIDOS ─────────────────────────────────────────────────
  {
    id: 'vestido-mostaza-cuero',
    slug: 'vestido-mostaza-cuero',
    collection: 'trajes',
    name_es: 'Vestido Sin Mangas Mostaza con Bolsillos de Cuero',
    name_en: 'Sleeveless Mustard Dress with Leather Pockets',
    description_es: 'Vestido sin mangas tejido a telar en lana mostaza-oliva. Bolsillos aplicados en cuero ecológico. Silueta recta y versátil. Se lleva sobre blusa o polera. Elegante y práctico.',
    description_en: 'Sleeveless loom-woven dress in mustard-olive wool. Applied faux leather pockets. Straight, versatile silhouette. Worn over a blouse or T-shirt. Elegant and practical.',
    price_clp: 120000,
    images: [
      `${BASE}/vestido-mostaza-cuero-1.jpg`,
      `${BASE}/vestido-mostaza-cuero-2.jpg`
    ],
    featured: false,
    inStock: true,
    tags_es: ['lana virgen', 'telar chilote', 'vestido', 'mostaza', 'cuero', 'sin mangas'],
    tags_en: ['virgin wool', 'Chilote loom', 'dress', 'mustard', 'leather', 'sleeveless']
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter(p => p.collection === collectionSlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function formatPrice(clp: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(clp);
}
