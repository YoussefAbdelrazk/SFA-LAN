import {
  Banner,
  Hero,
  Mock,
  Platform,
  Services,
  Stories,
  Transformation,
} from '@/components/sections';
import { SubscriptionPlans } from '@/components/subscription';
import { setRequestLocale } from 'next-intl/server';


export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  await params; // Ensure params are resolved
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div>
      <Hero />
      {/* <HeroTest /> */}
      <Platform />
      <Services />
      <Stories />
      {/* <Pricing /> */}
      <SubscriptionPlans />
      <Transformation />
      <Mock />
      <Banner />
    </div>
  );
}
