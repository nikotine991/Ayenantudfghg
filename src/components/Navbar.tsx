'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useCart } from './CartProvider';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const otherLocale = locale === 'es' ? 'en' : 'es';
  const otherLabel = locale === 'es' ? 'EN' : 'ES';

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-cream-dark">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Ayenantú" width={414} height={118} className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
          <Link href="/collections/abrigos" className="hover:text-green-dark transition-colors">
            {t('collections')}
          </Link>
          <Link href="/about" className="hover:text-green-dark transition-colors">
            {t('about')}
          </Link>
          <Link href="/care-guide" className="hover:text-green-dark transition-colors">
            {t('care')}
          </Link>
          <Link href="/contact" className="hover:text-green-dark transition-colors">
            {t('contact')}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={pathname}
            locale={otherLocale as 'es' | 'en'}
            className="text-xs font-medium text-green-olive border border-green-olive px-2 py-1 rounded hover:bg-green-olive hover:text-cream transition-colors"
          >
            {otherLabel}
          </Link>
          <Link href="/checkout" className="relative text-charcoal hover:text-green-dark transition-colors">
            <span className="text-sm font-medium">{t('cart')}</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-dark text-cream text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-5 h-px bg-current" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/collections/abrigos" onClick={() => setMenuOpen(false)}>{t('collections')}</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>{t('about')}</Link>
          <Link href="/care-guide" onClick={() => setMenuOpen(false)}>{t('care')}</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>{t('contact')}</Link>
        </div>
      )}
    </header>
  );
}
