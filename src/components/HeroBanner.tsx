import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HeroBanner() {
  const t = useTranslations('hero');

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center bg-green-dark overflow-hidden"
      style={{ backgroundImage: 'url(/images/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-cream px-6 max-w-2xl mx-auto">
        <p className="text-green-olive font-medium tracking-widest uppercase text-sm mb-4">{t('sub')}</p>
        <h1 className="text-5xl md:text-7xl font-heading mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          Ayenantú
        </h1>
        <p className="text-lg text-cream/90 mb-8">{t('tagline')}</p>
        <Link
          href="/collections/abrigos"
          className="inline-block bg-green-olive text-cream px-8 py-3 rounded-none text-sm font-medium tracking-wide uppercase hover:bg-cream hover:text-green-dark transition-colors"
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  );
}
