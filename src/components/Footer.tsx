import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="bg-green-dark text-cream mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image src="/logo.png" alt="Ayenantú" width={140} height={48} className="h-12 w-auto mb-3" />
          <p className="text-sm text-cream/80">{t('tagline')}</p>
        </div>

        <div className="text-sm space-y-2">
          <p className="font-semibold uppercase tracking-wide text-green-olive text-xs mb-3">Links</p>
          <Link href="/collections/abrigos" className="block hover:text-green-olive transition-colors">{nav('collections')}</Link>
          <Link href="/about" className="block hover:text-green-olive transition-colors">{nav('about')}</Link>
          <Link href="/care-guide" className="block hover:text-green-olive transition-colors">{nav('care')}</Link>
          <Link href="/contact" className="block hover:text-green-olive transition-colors">{nav('contact')}</Link>
        </div>

        <div className="text-sm space-y-2">
          <p className="font-semibold uppercase tracking-wide text-green-olive text-xs mb-3">Contacto</p>
          <p className="text-cream/80">{t('address')}</p>
          <p className="text-cream/80">{t('phone')}</p>
          <a href={`mailto:${t('email')}`} className="block text-cream/80 hover:text-green-olive transition-colors">
            {t('email')}
          </a>
          <a
            href="https://www.facebook.com/ayenantutextiles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-cream/80 hover:text-green-olive transition-colors"
          >
            Facebook — Ayenantú Textiles
          </a>
        </div>
      </div>
      <div className="border-t border-cream/20 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Ayenantú. {t('rights')}
      </div>
    </footer>
  );
}
