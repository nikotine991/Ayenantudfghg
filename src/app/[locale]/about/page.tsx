import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading text-green-dark mb-10">{t('title')}</h1>
      <div className="prose prose-stone max-w-none space-y-6">
        <p className="text-xl text-charcoal leading-relaxed italic font-heading">{t('p1')}</p>
        <p className="text-charcoal leading-relaxed">{t('p2')}</p>
        <p className="text-charcoal leading-relaxed">{t('p3')}</p>
        <p className="text-charcoal leading-relaxed font-medium">{t('p4')}</p>
      </div>
    </div>
  );
}
