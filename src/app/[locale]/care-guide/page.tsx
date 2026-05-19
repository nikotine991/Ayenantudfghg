import { getTranslations } from 'next-intl/server';

export default async function CareGuidePage() {
  const t = await getTranslations('care');
  const steps = [0, 1, 2, 3, 4, 5];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading text-green-dark mb-4">{t('title')}</h1>
      <p className="text-charcoal/70 mb-12">{t('intro')}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {steps.map(i => (
          <div key={i} className="bg-cream-dark p-6 rounded">
            <p className="font-heading text-green-dark text-lg mb-2">
              {t(`steps.${i}.title`)}
            </p>
            <p className="text-charcoal/80 text-sm leading-relaxed">
              {t(`steps.${i}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
