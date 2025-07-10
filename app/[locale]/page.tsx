import {
  Hero,
  Platform,
  Pricing,
  Services,
  Stories,
  Transformation,
} from '@/components/sections';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params; // Ensure params are resolved

  return (
    <div>
      <Hero />
      <Platform />
      <Services />
      <Stories />
      <Pricing />
      <Transformation />
    </div>
  );
}
