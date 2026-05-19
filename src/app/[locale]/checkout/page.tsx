'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useCart } from '@/components/CartProvider';
import { Link } from '@/i18n/navigation';
import { formatPrice } from '@/data/products';
import { useState } from 'react';

export default function CheckoutPage() {
  const t = useTranslations('cart');
  const locale = useLocale();
  const { items, removeItem, total } = useCart();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(i => ({
            id: i.id,
            title: i.name,
            quantity: i.quantity,
            unit_price: i.price_clp
          })),
          locale
        })
      });
      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      }
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="text-charcoal/60 mb-6">{t('empty')}</p>
        <Link href="/" className="text-green-dark underline underline-offset-4">
          {t('continue')}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading text-green-dark mb-8">{t('title')}</h1>

      <div className="space-y-4 mb-8">
        {items.map(item => (
          <div key={item.id} className="flex items-center gap-4 border-b border-cream-dark pb-4">
            <div className="w-16 h-20 bg-green-dark/10 flex-shrink-0 relative overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-charcoal">{item.name}</p>
              <p className="text-sm text-charcoal/60">× {item.quantity}</p>
              <p className="text-green-dark font-semibold">{formatPrice(item.price_clp * item.quantity)}</p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-xs text-charcoal/40 hover:text-charcoal transition-colors"
            >
              {t('remove')}
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6 font-semibold text-lg">
        <span>{t('subtotal')}</span>
        <span className="text-green-dark">{formatPrice(total)}</span>
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-green-dark text-cream py-4 font-medium tracking-wide uppercase hover:bg-green-olive transition-colors disabled:opacity-60"
      >
        {loading ? '...' : t('checkout')}
      </button>
    </div>
  );
}
