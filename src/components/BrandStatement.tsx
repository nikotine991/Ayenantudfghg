import { useTranslations } from 'next-intl';

export default function BrandStatement() {
  const t = useTranslations('brand');

  return (
    <section className="bg-cream py-16 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="text-charcoal text-lg leading-relaxed">{t('line1')}</p>
        <p className="text-charcoal text-lg leading-relaxed">{t('line2')}</p>
        <p className="text-green-dark font-heading text-xl italic">{t('line3')}</p>
      </div>
    </section>
  );
}
