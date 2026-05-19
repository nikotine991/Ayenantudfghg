'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const footer = useTranslations('footer');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-4xl font-heading text-green-dark mb-8">{t('title')}</h1>
        {sent ? (
          <p className="text-green-dark font-medium">✓ Mensaje enviado · Message sent</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">{t('name')}</label>
              <input
                type="text"
                required
                className="w-full border border-cream-dark bg-cream px-4 py-3 text-sm focus:outline-none focus:border-green-dark"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">{t('email')}</label>
              <input
                type="email"
                required
                className="w-full border border-cream-dark bg-cream px-4 py-3 text-sm focus:outline-none focus:border-green-dark"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">{t('message')}</label>
              <textarea
                required
                rows={5}
                className="w-full border border-cream-dark bg-cream px-4 py-3 text-sm focus:outline-none focus:border-green-dark resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-dark text-cream py-3 text-sm font-medium uppercase tracking-wide hover:bg-green-olive transition-colors"
            >
              {t('send')}
            </button>
          </form>
        )}
      </div>

      <div className="text-sm text-charcoal/80 space-y-3 pt-14">
        <p className="font-medium text-charcoal">{t('info')}</p>
        <p>{footer('address')}</p>
        <p>{footer('phone')}</p>
        <a href={`mailto:${footer('email')}`} className="block text-green-dark hover:underline">
          {footer('email')}
        </a>
        <a
          href="https://www.facebook.com/ayenantutextiles"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-green-dark hover:underline"
        >
          Facebook — Ayenantú Textiles
        </a>
      </div>
    </div>
  );
}
