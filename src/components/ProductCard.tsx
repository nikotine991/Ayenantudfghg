'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCart } from './CartProvider';
import { Product, formatPrice } from '@/data/products';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  const locale = useLocale();
  const t = useTranslations('product');
  const { addItem } = useCart();

  const name = locale === 'es' ? product.name_es : product.name_en;

  return (
    <div className="group bg-cream border border-cream-dark rounded overflow-hidden">
      <Link href={`/products/${product.slug}`} className="block relative aspect-[3/4] bg-green-dark/5">
        <Image
          src={product.images[0]}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-cream text-sm font-medium tracking-widest uppercase">
              {locale === 'es' ? 'Agotado' : 'Sold Out'}
            </span>
          </div>
        )}
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-heading text-charcoal text-lg leading-tight mb-1 hover:text-green-dark transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-green-dark font-semibold mb-3">{formatPrice(product.price_clp)}</p>
        {product.inStock ? (
          <button
            onClick={() => addItem({ id: product.id, slug: product.slug, name, price_clp: product.price_clp, image: product.images[0] })}
            className="w-full bg-green-dark text-cream py-2 text-sm font-medium tracking-wide uppercase hover:bg-green-olive transition-colors"
          >
            {t('addToCart')}
          </button>
        ) : (
          <button
            disabled
            className="w-full bg-charcoal/20 text-charcoal/40 py-2 text-sm font-medium tracking-wide uppercase cursor-not-allowed"
          >
            {locale === 'es' ? 'Agotado' : 'Sold Out'}
          </button>
        )}
      </div>
    </div>
  );
}
