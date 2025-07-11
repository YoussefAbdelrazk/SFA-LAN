import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';

import { Footer, Navbar } from '@/components/layout';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import StructuredData from '@/components/StructuredData';
import LayoutLoader from '@/components/ui/LayoutLoader';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sherife-franca.com'),
  title: {
    default:
      'Sherife Franca - Premium Fitness Platform | Get Fit. Pay Less. Stay Strong.',
    template: '%s | Sherife Franca',
  },
  description:
    'Sherife Franca is a leading fitness platform offering expert trainers, personalized programs, state-of-the-art equipment, and a supportive community. Achieve your health and wellness goals with our comprehensive classes and professional guidance. Perfect for all fitness levels.',
  keywords: [
    'fitness',
    'personal training',
    'gym',
    'workout',
    'health',
    'wellness',
    'exercise',
    'training',
    'fitness platform',
    'online fitness',
    'group classes',
    'nutrition guidance',
  ],
  authors: [{ name: 'Sherife Franca' }],
  creator: 'Sherife Franca',
  publisher: 'Sherife Franca',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sherife-franca.com',
    siteName: 'Sherife Franca',
    title: 'Sherife Franca - Premium Fitness Platform',
    description:
      'Get Fit. Pay Less. Stay Strong. Join Sherife Franca for expert trainers, personalized programs, and a supportive fitness community.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sherife Franca Fitness Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sherife Franca - Premium Fitness Platform',
    description:
      'Get Fit. Pay Less. Stay Strong. Join Sherife Franca for expert trainers, personalized programs, and a supportive fitness community.',
    images: ['/og-image.jpg'],
    creator: '@sherife-franca',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://sherife-franca.com',
    languages: {
      'en-US': 'https://sherife-franca.com/en',
      'ar-SA': 'https://sherife-franca.com/ar',
      'fr-FR': 'https://sherife-franca.com/fr',
    },
  },
  category: 'fitness',
  classification: 'fitness platform',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Sherife Franca',
    'application-name': 'Sherife Franca',
    'msapplication-TileColor': '#3E1492',
    'theme-color': '#3E1492',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  const validLocales = ['en', 'ar', 'fr'];
  if (!validLocales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className='overflow-x-hidden'
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <head>
        <StructuredData type='organization' locale={locale} />
        <StructuredData type='website' locale={locale} />
        <StructuredData type='fitness' locale={locale} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <PerformanceMonitor />
          <LayoutLoader />
          <Navbar />
          <main className='flex flex-col items-center justify-center md:block overflow-x-hidden'>
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
