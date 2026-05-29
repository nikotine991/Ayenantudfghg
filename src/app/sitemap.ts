import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { collections } from '@/data/collections';

const BASE = 'https://ayenantu.cl';
const locales = ['es', 'en'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  for (const locale of locales) {
    entries.push({ url: `${BASE}/${locale}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 });
  }

  // Collection pages
  for (const collection of collections) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE}/${locale}/collections/${collection.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8
      });
    }
  }

  // Product pages
  for (const product of products) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE}/${locale}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7
      });
    }
  }

  // Static pages
  for (const page of ['about', 'care-guide', 'contact', 'privacy', 'terms', 'returns']) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5
      });
    }
  }

  return entries;
}
