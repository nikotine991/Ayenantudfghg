import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const t = useTranslations('featured');
  const featured = getFeaturedProducts();

  return (
    <section className="bg-cream py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-heading text-green-dark">{t('title')}</h2>
          <Link
            href="/collections/abrigos"
            className="text-sm text-green-olive underline underline-offset-4 hover:text-green-dark transition-colors"
          >
            {t('viewAll')}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
