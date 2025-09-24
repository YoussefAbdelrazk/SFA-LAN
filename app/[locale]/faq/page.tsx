import { FAQContent } from '@/components/faq';
import { setRequestLocale } from 'next-intl/server';

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> } ) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FAQContent />;
}
