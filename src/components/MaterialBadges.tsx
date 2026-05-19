import { useTranslations } from 'next-intl';

const badges = [
  { key: 'badge1', icon: '🐑' },
  { key: 'badge2', icon: '🌿' },
  { key: 'badge3', icon: '🧵' },
  { key: 'badge4', icon: '✋' }
] as const;

export default function MaterialBadges() {
  const t = useTranslations('craft');

  return (
    <section className="bg-green-olive/20 py-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {badges.map(b => (
          <div key={b.key} className="flex flex-col items-center gap-2">
            <span className="text-4xl">{b.icon}</span>
            <p className="text-sm font-medium text-green-dark">{t(b.key)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
