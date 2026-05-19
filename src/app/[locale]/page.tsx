import HeroBanner from '@/components/HeroBanner';
import BrandStatement from '@/components/BrandStatement';
import CollectionGrid from '@/components/CollectionGrid';
import TheCraft from '@/components/TheCraft';
import MaterialBadges from '@/components/MaterialBadges';
import FeaturedProducts from '@/components/FeaturedProducts';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <BrandStatement />
      <CollectionGrid />
      <TheCraft />
      <MaterialBadges />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
}
