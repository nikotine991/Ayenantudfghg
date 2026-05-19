import { useTranslations } from 'next-intl';

export default function TheCraft() {
  const t = useTranslations('craft');

  return (
    <section className="bg-cream py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-heading text-green-dark mb-6">{t('title')}</h2>
          <p className="text-charcoal leading-relaxed mb-4">{t('p1')}</p>
          <p className="text-charcoal leading-relaxed mb-4">{t('p2')}</p>
          <p className="text-charcoal leading-relaxed">{t('p3')}</p>
        </div>
        <div
          className="aspect-[4/5] bg-green-dark/10 rounded overflow-hidden"
          style={{ backgroundImage: 'url(/images/workshop.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="w-full h-full bg-green-dark/10" />
        </div>
      </div>
    </section>
  );
}
