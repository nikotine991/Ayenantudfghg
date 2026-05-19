'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCart } from '@/components/CartProvider';

export default function SuccessPage() {
  const t = useTranslations('success');
  const { clearCart } = useCart();

  useEffect(() => { clearCart(); }, []);

  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">🌞</div>
      <h1 className="text-3xl font-heading text-green-dark mb-4">{t('title')}</h1>
      <p className="text-charcoal/70 mb-8">{t('sub')}</p>
      <Link
        href="/"
        className="inline-block bg-green-dark text-cream px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-green-olive transition-colors"
      >
        {t('back')}
      </Link>
    </div>
  );
}
