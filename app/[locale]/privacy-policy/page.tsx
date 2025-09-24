import { PrivacyContent } from '@/components/privacy';
import { setRequestLocale } from 'next-intl/server';

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> })   {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyContent />;
}
