import HomeHero from '@/components/Home/HomeHero';
import InstalledBumper from '@/components/Home/InstalledBumper';
import ProductSelection from '@/components/Home/ProductSelection';
import Production from '@/components/Home/Production';
import HowToOrder from '@/components/Home/HowToOrder';
export const metadata = { alternates: { canonical: '/' } };
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <InstalledBumper />
      <ProductSelection />
      <Production />
      <HowToOrder />
    </>
  );
}
