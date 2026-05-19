import { notFound } from 'next/navigation';
import { getCollectionBySlug } from '@/data/collections';
import { getProductsByCollection } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations('collections');

  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const products = getProductsByCollection(slug);
  const name = locale === 'es' ? collection.name_es : collection.name_en;
  const description = locale === 'es' ? collection.description_es : collection.description_en;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-heading text-green-dark mb-3">{name}</h1>
        <p className="text-charcoal/70 max-w-xl">{description}</p>
      </div>
      {products.length === 0 ? (
        <p className="text-charcoal/50 italic">Próximamente / Coming soon</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
