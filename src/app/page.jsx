import HomeHero from '@/components/Home/HomeHero';
import InstalledBumper from '@/components/Home/InstalledBumper';
import ProductSelection from '@/components/Home/ProductSelection';
import BrandOverview from '@/components/Home/BrandOverview';
export const metadata = { alternates: { canonical: '/' } };
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <InstalledBumper />
      <ProductSelection />
      <BrandOverview />
    </>
  );
}
