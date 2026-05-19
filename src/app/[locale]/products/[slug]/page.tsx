'use client';

import { notFound } from 'next/navigation';
import { getProductBySlug, formatPrice } from '@/data/products';
import { useLocale, useTranslations } from 'next-intl';
import { useCart } from '@/components/CartProvider';
import Image from 'next/image';
import { use } from 'react';

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const locale = useLocale();
  const t = useTranslations('product');
  const { addItem } = useCart();

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const name = locale === 'es' ? product.name_es : product.name_en;
  const description = locale === 'es' ? product.description_es : product.description_en;
  const tags = locale === 'es' ? product.tags_es : product.tags_en;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-[3/4] bg-green-dark/5 rounded overflow-hidden">
          <Image
            src={product.images[0]}
            alt={name}
            fill
            className="object-cover"
          />
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

          <button
            onClick={() => addItem({ id: product.id, slug: product.slug, name, price_clp: product.price_clp, image: product.images[0] })}
            className="bg-green-dark text-cream py-4 text-sm font-medium tracking-widest uppercase hover:bg-green-olive transition-colors mb-6"
          >
            {t('addToCart')}
          </button>

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
