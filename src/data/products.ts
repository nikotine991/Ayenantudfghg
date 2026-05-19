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
  tags_es: string[];
  tags_en: string[];
}

const BASE = '/images/products';

export const products: Product[] = [
  // ── ABRIGOS ──────────────────────────────────────────────────────────
  {
    id: 'abrigo-rojo',
    slug: 'abrigo-rojo',
    collection: 'abrigos',
    name_es: 'Abrigo Rojo Tejido a Telar',
    name_en: 'Red Handwoven Coat',
    description_es: 'Abrigo largo tejido a telar chilote en lana virgen de color rojo intenso. Cuello y ribete inferior en tela negra. Cierre de botones artesanales. Una prenda de colección.',
    description_en: 'Long coat woven on a Chilote loom in deep red virgin wool. Black fabric collar and hem trim. Handcrafted button closure. A collector\'s piece.',
    price_clp: 185000,
    images: [
      `${BASE}/IMG_20220913_191400.jpg`,
      `${BASE}/IMG_20220913_191631.jpg`
    ],
    featured: true,
    tags_es: ['lana virgen', 'telar chilote', 'abrigo largo', 'colección'],
    tags_en: ['virgin wool', 'Chilote loom', 'long coat', 'collection']
  },
  {
    id: 'chaqueta-turquesa',
    slug: 'chaqueta-turquesa',
    collection: 'abrigos',
    name_es: 'Chaqueta Bicolor Turquesa',
    name_en: 'Turquoise Two-tone Jacket',
    description_es: 'Chaqueta tejida a telar en dos tonos de azul turquesa. Diseño en bloques de color. Botones forrados artesanales. Tejido resistente al agua.',
    description_en: 'Loom-woven jacket in two shades of turquoise blue. Color block design. Handmade covered buttons. Water-resistant weave.',
    price_clp: 98000,
    images: [
      `${BASE}/IMG_20220912_130029.jpg`,
      `${BASE}/IMG_20220912_130048.jpg`
    ],
    featured: true,
    tags_es: ['lana virgen', 'telar chilote', 'bicolor', 'turquesa'],
    tags_en: ['virgin wool', 'Chilote loom', 'two-tone', 'turquoise']
  },
  {
    id: 'chaqueta-tierra',
    slug: 'chaqueta-tierra',
    collection: 'abrigos',
    name_es: 'Chaqueta Tierra con Flecos',
    name_en: 'Earth Tone Fringe Jacket',
    description_es: 'Chaqueta en tonos tierra tejida a telar con flecos decorativos en cuello y frente. Broche artesanal floral. Lana virgen teñida con hierbas nativas.',
    description_en: 'Earth tone loom-woven jacket with decorative fringe on collar and front. Floral handmade brooch. Virgin wool dyed with native herbs.',
    price_clp: 95000,
    images: [
      `${BASE}/IMG_20220912_124232.jpg`,
      `${BASE}/IMG_20220912_124327.jpg`
    ],
    featured: false,
    tags_es: ['lana virgen', 'tintes naturales', 'flecos', 'tierra'],
    tags_en: ['virgin wool', 'natural dyes', 'fringe', 'earth tones']
  },
  {
    id: 'chaqueta-negra-crema',
    slug: 'chaqueta-negra-crema',
    collection: 'abrigos',
    name_es: 'Chaqueta Negra con Mangas Crema',
    name_en: 'Black & Cream Fringe Jacket',
    description_es: 'Chaqueta de cuerpo negro con mangas en lana crema. Flecos en el ruedo. Cierre de botones oscuros. Diseño moderno con técnica tradicional.',
    description_en: 'Black-body jacket with cream wool sleeves. Fringe at the hem. Dark button closure. Modern design with traditional technique.',
    price_clp: 92000,
    images: [
      `${BASE}/IMG_20220912_130347.jpg`,
      `${BASE}/IMG_20220912_130220.jpg`
    ],
    featured: false,
    tags_es: ['lana virgen', 'bicolor', 'flecos', 'moderno'],
    tags_en: ['virgin wool', 'two-tone', 'fringe', 'modern']
  },

  // ── TRAJES ───────────────────────────────────────────────────────────
  {
    id: 'conjunto-negro-gris',
    slug: 'conjunto-negro-gris',
    collection: 'trajes',
    name_es: 'Conjunto Negro y Gris',
    name_en: 'Black & Grey Wool Set',
    description_es: 'Conjunto de chaleco negro con falda en lana gris melange, ambos tejidos a telar. Cuello tipo tortuga. Acabado elegante con ribete a crochet.',
    description_en: 'Black turtleneck vest and grey melange skirt set, both loom-woven. Turtleneck style. Elegant finish with crochet trim.',
    price_clp: 140000,
    images: [
      `${BASE}/IMG_20220912_123846.jpg`
    ],
    featured: true,
    tags_es: ['conjunto', 'lana virgen', 'telar chilote', 'elegante'],
    tags_en: ['set', 'virgin wool', 'Chilote loom', 'elegant']
  },
  {
    id: 'blazer-dorado',
    slug: 'blazer-dorado',
    collection: 'trajes',
    name_es: 'Blazer Dorado Multicolor',
    name_en: 'Golden Multicolor Blazer',
    description_es: 'Blazer tejido a telar en tonos dorados, verdes y ocres. Lana virgen teñida con hierbas nativas de Chiloé. Pieza única de colección.',
    description_en: 'Loom-woven blazer in golden, green and ochre tones. Virgin wool dyed with native Chiloé herbs. Unique collector\'s piece.',
    price_clp: 110000,
    images: [
      `${BASE}/IMG_20220912_130503.jpg`
    ],
    featured: false,
    tags_es: ['blazer', 'lana virgen', 'tintes naturales', 'dorado'],
    tags_en: ['blazer', 'virgin wool', 'natural dyes', 'golden']
  },

  // ── PONCHOS (Tops & Knitwear) ────────────────────────────────────────
  {
    id: 'vestido-blanco-capelina',
    slug: 'vestido-blanco-capelina',
    collection: 'ponchos',
    name_es: 'Vestido Blanco con Capelina Multicolor',
    name_en: 'White Dress with Colourful Capelet',
    description_es: 'Vestido tejido en lana blanca con encaje. Capelina artesanal en colores vivos tejida a crochet. Pieza artística y única.',
    description_en: 'White lace-knit wool dress with a handmade colourful crochet capelet. Artistic, one-of-a-kind piece.',
    price_clp: 125000,
    images: [
      `${BASE}/IMG_20220912_132145.jpg`
    ],
    featured: false,
    tags_es: ['vestido', 'crochet', 'lana virgen', 'artístico'],
    tags_en: ['dress', 'crochet', 'virgin wool', 'artistic']
  },
  {
    id: 'top-naranja-verde',
    slug: 'top-naranja-verde',
    collection: 'ponchos',
    name_es: 'Top Naranja y Verde',
    name_en: 'Orange & Green Sleeveless Top',
    description_es: 'Top sin mangas tejido en dos colores: naranja vibrante y verde oliva. Bordado a crochet en escote y ruedo. Lana virgen con tintes naturales.',
    description_en: 'Sleeveless two-colour top in vibrant orange and olive green. Crochet embroidery on neckline and hem. Virgin wool with natural dyes.',
    price_clp: 58000,
    images: [
      `${BASE}/IMG_20220912_130610.jpg`
    ],
    featured: false,
    tags_es: ['top', 'bicolor', 'bordado a crochet', 'tintes naturales'],
    tags_en: ['top', 'two-tone', 'crochet embroidery', 'natural dyes']
  },
  {
    id: 'cardigan-crema',
    slug: 'cardigan-crema',
    collection: 'ponchos',
    name_es: 'Cárdigan Crema Natural',
    name_en: 'Natural Cream Cardigan',
    description_es: 'Cárdigan tejido en lana virgen en su color natural. Cierre con botones de madera. Bolsillos laterales. Suave y cálido.',
    description_en: 'Cardigan knitted in natural virgin wool colour. Wooden button closure. Side pockets. Soft and warm.',
    price_clp: 72000,
    images: [
      `${BASE}/IMG_20220912_131338.jpg`
    ],
    featured: false,
    tags_es: ['cárdigan', 'lana natural', 'madera', 'cálido'],
    tags_en: ['cardigan', 'natural wool', 'wooden buttons', 'warm']
  },

  // ── ACCESORIOS (Felted hats, berets, capelets, scarves) ───────────────
  {
    id: 'set-boina-azul-fieltro',
    slug: 'set-boina-azul-fieltro',
    collection: 'accesorios',
    name_es: 'Set Boina + Echarpe Azul Cielo (Fieltro)',
    name_en: 'Sky Blue Felted Beret + Scarf Set',
    description_es: 'Set de boina y echarpe en lana fieltrada azul cielo con motivos florales. Técnica de fieltro húmedo artesanal. Conjunto único.',
    description_en: 'Felted beret and scarf set in sky blue wool with floral motifs. Traditional wet felting technique. Unique set.',
    price_clp: 48000,
    images: [
      `${BASE}/IMG_20220919_153138.jpg`,
      `${BASE}/IMG_20220919_153237.jpg`
    ],
    featured: true,
    tags_es: ['fieltro', 'boina', 'set', 'floral'],
    tags_en: ['felted', 'beret', 'set', 'floral']
  },
  {
    id: 'set-boina-roja-capelina',
    slug: 'set-boina-roja-capelina',
    collection: 'accesorios',
    name_es: 'Set Boina + Capelina Roja (Fieltro)',
    name_en: 'Red Felted Beret + Capelet Set',
    description_es: 'Set de boina y capelina en lana fieltrada roja coral con detalles en seda y lentejuelas. Pieza festiva y elegante.',
    description_en: 'Red coral felted beret and capelet set with silk and sequin details. Festive and elegant piece.',
    price_clp: 52000,
    images: [
      `${BASE}/IMG_20220919_153717.jpg`,
      `${BASE}/IMG_20220919_153731.jpg`
    ],
    featured: false,
    tags_es: ['fieltro', 'boina', 'capelina', 'rojo'],
    tags_en: ['felted', 'beret', 'capelet', 'red']
  },
  {
    id: 'set-boina-blanca-capelina',
    slug: 'set-boina-blanca-capelina',
    collection: 'accesorios',
    name_es: 'Set Boina + Capelina Blanca (Fieltro)',
    name_en: 'White Felted Beret + Capelet Set',
    description_es: 'Set de boina y capelina en lana fieltrada blanca. Acabado suave con detalles satinados. Elegante y versátil.',
    description_en: 'White felted beret and capelet set. Smooth finish with satin details. Elegant and versatile.',
    price_clp: 48000,
    images: [
      `${BASE}/IMG_20220919_153954.jpg`,
      `${BASE}/IMG_20220919_154011.jpg`
    ],
    featured: false,
    tags_es: ['fieltro', 'boina', 'capelina', 'blanco'],
    tags_en: ['felted', 'beret', 'capelet', 'white']
  },
  {
    id: 'set-boina-crema-echarpe',
    slug: 'set-boina-crema-echarpe',
    collection: 'accesorios',
    name_es: 'Set Boina + Echarpe Crema (Fieltro)',
    name_en: 'Cream Felted Beret + Scarf Set',
    description_es: 'Set de boina y echarpe en lana fieltrada crema con motivos naturales en ocre y café. Lana virgen sin teñir.',
    description_en: 'Cream felted beret and scarf set with natural ochre and brown motifs. Undyed virgin wool.',
    price_clp: 46000,
    images: [
      `${BASE}/IMG_20220919_154857.jpg`,
      `${BASE}/IMG_20220919_154929.jpg`
    ],
    featured: false,
    tags_es: ['fieltro', 'boina', 'lana natural', 'crema'],
    tags_en: ['felted', 'beret', 'natural wool', 'cream']
  },
  {
    id: 'set-boina-negra-echarpe',
    slug: 'set-boina-negra-echarpe',
    collection: 'accesorios',
    name_es: 'Set Boina Negra + Echarpe Crema (Fieltro)',
    name_en: 'Black Beret + Cream Scarf Felted Set',
    description_es: 'Boina negra de fieltro con echarpe crema. Combinación clásica y elegante. Técnica de fieltro húmedo artesanal.',
    description_en: 'Black felted beret with cream scarf. Classic and elegant combination. Handmade wet felting technique.',
    price_clp: 44000,
    images: [
      `${BASE}/IMG_20220919_155023.jpg`,
      `${BASE}/IMG_20220919_155014.jpg`
    ],
    featured: false,
    tags_es: ['fieltro', 'boina', 'negro', 'clásico'],
    tags_en: ['felted', 'beret', 'black', 'classic']
  },
  {
    id: 'set-boina-fucsia-echarpe',
    slug: 'set-boina-fucsia-echarpe',
    collection: 'accesorios',
    name_es: 'Set Boina Fucsia + Echarpe Multicolor (Fieltro)',
    name_en: 'Fuchsia Beret + Multicolor Scarf Felted Set',
    description_es: 'Boina fucsia de fieltro con echarpe en lana blanca y motivos multicolor tipo pompones. Alegre y original.',
    description_en: 'Fuchsia felted beret with white wool scarf featuring multicolor pom-pom motifs. Cheerful and original.',
    price_clp: 50000,
    images: [
      `${BASE}/IMG_20220919_155222.jpg`,
      `${BASE}/IMG_20220919_155251.jpg`
    ],
    featured: false,
    tags_es: ['fieltro', 'boina', 'fucsia', 'multicolor'],
    tags_en: ['felted', 'beret', 'fuchsia', 'multicolor']
  },
  {
    id: 'set-boina-azul-cowl',
    slug: 'set-boina-azul-cowl',
    collection: 'accesorios',
    name_es: 'Set Boina + Cuello Azul (Fieltro)',
    name_en: 'Blue Felted Beret + Cowl Set',
    description_es: 'Set de boina y cuello/bufanda en lana fieltrada azul con detalles en fucsia. Técnica de fieltro húmedo con incrustaciones.',
    description_en: 'Blue felted beret and cowl/scarf set with fuchsia inlay details. Wet felting technique with inclusions.',
    price_clp: 46000,
    images: [
      `${BASE}/IMG_20220825_160827.jpg`,
      `${BASE}/IMG_20220825_161234.jpg`
    ],
    featured: false,
    tags_es: ['fieltro', 'boina', 'azul', 'cuello'],
    tags_en: ['felted', 'beret', 'blue', 'cowl']
  },
  {
    id: 'boina-navy',
    slug: 'boina-navy',
    collection: 'accesorios',
    name_es: 'Boina Azul Marino (Fieltro)',
    name_en: 'Navy Blue Felted Beret',
    description_es: 'Boina artesanal en lana fieltrada azul marino. Clásica y sofisticada. Técnica de fieltro húmedo.',
    description_en: 'Handcrafted navy blue felted beret. Classic and sophisticated. Wet felting technique.',
    price_clp: 26000,
    images: [
      `${BASE}/IMG_20220825_161320.jpg`,
      `${BASE}/IMG_20220825_161352.jpg`
    ],
    featured: false,
    tags_es: ['fieltro', 'boina', 'navy', 'clásico'],
    tags_en: ['felted', 'beret', 'navy', 'classic']
  },
  {
    id: 'set-boina-fucsia-cuello-blanco',
    slug: 'set-boina-fucsia-cuello-blanco',
    collection: 'accesorios',
    name_es: 'Set Boina Fucsia + Cuello Blanco',
    name_en: 'Fuchsia Beret + White Neck Warmer Set',
    description_es: 'Boina fucsia de fieltro con cuello en lana blanca tejida. Dos técnicas combinadas: fieltro y tejido a telar.',
    description_en: 'Fuchsia felted beret with white knitted neck warmer. Two combined techniques: felting and loom weaving.',
    price_clp: 44000,
    images: [
      `${BASE}/IMG_20220825_161928.jpg`,
      `${BASE}/IMG_20220825_161940.jpg`,
      `${BASE}/IMG_20220825_161951.jpg`
    ],
    featured: false,
    tags_es: ['fieltro', 'boina', 'fucsia', 'cuello'],
    tags_en: ['felted', 'beret', 'fuchsia', 'neck warmer']
  },
  {
    id: 'set-boina-blanca-cuello',
    slug: 'set-boina-blanca-cuello',
    collection: 'accesorios',
    name_es: 'Set Boina Blanca + Cuello Tejido',
    name_en: 'White Beret + Knitted Neck Warmer',
    description_es: 'Boina blanca de fieltro con cuello tejido a telar en lana blanca. Set invernal elegante y cálido.',
    description_en: 'White felted beret with loom-knitted white neck warmer. Elegant and warm winter set.',
    price_clp: 44000,
    images: [
      `${BASE}/IMG_20220825_161824.jpg`
    ],
    featured: false,
    tags_es: ['fieltro', 'boina', 'blanco', 'cuello'],
    tags_en: ['felted', 'beret', 'white', 'neck warmer']
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
