'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Newsletter() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="bg-green-olive py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-heading text-cream mb-2">{t('title')}</h2>
        <p className="text-cream/80 text-sm mb-6">{t('sub')}</p>
        {sent ? (
          <p className="text-cream font-medium">✓ Gracias / Thank you!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-sm mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t('placeholder')}
              className="flex-1 px-4 py-3 text-sm text-charcoal bg-cream outline-none"
            />
            <button
              type="submit"
              className="bg-green-dark text-cream px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-charcoal transition-colors"
            >
              {t('button')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
