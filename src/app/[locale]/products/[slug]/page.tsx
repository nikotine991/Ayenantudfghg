import { notFound } from 'next/navigation';
import { getProductBySlug, formatPrice } from '@/data/products';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import AddToCartButton from '@/components/AddToCartButton';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string; locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const name = locale === 'es' ? product.name_es : product.name_en;
  const description = locale === 'es' ? product.description_es : product.description_en;

  return {
    title: name,
    description,
    openGraph: {
      title: `${name} | Ayenantú`,
      description,
      images: [{ url: product.images[0], alt: name }]
    }
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug, locale } = await params;
  const t = await getTranslations('product');
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const name = locale === 'es' ? product.name_es : product.name_en;
  const description = locale === 'es' ? product.description_es : product.description_en;
  const tags = locale === 'es' ? product.tags_es : product.tags_en;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-[3/4] bg-green-dark/5 rounded overflow-hidden">
          <Image src={product.images[0]} alt={name} fill className="object-cover" />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-cream text-lg font-medium tracking-widest uppercase">
                {locale === 'es' ? 'Agotado' : 'Sold Out'}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs text-green-olive uppercase tracking-widest mb-2">{t('unique')}</p>
          <h1 className="text-3xl font-heading text-charcoal mb-4">{name}</h1>
          <p className="text-2xl font-semibold text-green-dark mb-6">{formatPrice(product.price_clp)}</p>
          <p className="text-charcoal leading-relaxed mb-6">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map(tag => (
              <span key={tag} className="text-xs bg-green-olive/20 text-green-dark px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <AddToCartButton
            id={product.id}
            slug={product.slug}
            name={name}
            price_clp={product.price_clp}
            image={product.images[0]}
            label={t('addToCart')}
            soldOutLabel={locale === 'es' ? 'Agotado' : 'Sold Out'}
            inStock={product.inStock}
          />

          <details className="border-t border-cream-dark pt-4">
            <summary className="cursor-pointer text-sm font-medium text-charcoal mb-2">{t('care')}</summary>
            <p className="text-sm text-charcoal/70 mt-2">{t('careText')}</p>
          </details>
          <details className="border-t border-cream-dark pt-4 mt-4">
            <summary className="cursor-pointer text-sm font-medium text-charcoal mb-2">{t('material')}</summary>
            <p className="text-sm text-charcoal/70 mt-2">{t('materialText')}</p>
          </details>
        </div>
      </div>
    </div>
  );
}
