import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { collections } from '@/data/collections';
import Image from 'next/image';

export default function CollectionGrid() {
  const t = useTranslations('collections');
  const locale = useLocale();

  return (
    <section className="bg-cream-dark py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-heading text-green-dark text-center mb-10">{t('title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {collections.map(col => (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className="group relative aspect-[3/4] overflow-hidden bg-green-dark/10 rounded"
            >
              <Image
                src={col.image}
                alt={locale === 'es' ? col.name_es : col.name_en}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-cream text-sm font-medium leading-tight">
                  {locale === 'es' ? col.name_es : col.name_en}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
