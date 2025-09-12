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

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  await params; // Ensure params are resolved

  return (
    <div>
      <Hero />
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
