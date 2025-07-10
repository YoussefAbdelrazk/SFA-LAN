'use client';

import { useLocale } from 'next-intl';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ClientOnly from './ClientOnly';

// Dynamically import the Loader components with no SSR
const Loader = dynamic(() => import('./Loader'), {
  ssr: false,
  loading: () => null,
});

const ArabicLoader = dynamic(() => import('./ArabicLoader'), {
  ssr: false,
  loading: () => null,
});

const LayoutLoader = () => {
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const LoaderComponent = locale === 'ar' ? ArabicLoader : Loader;

  return <ClientOnly>{loading ? <LoaderComponent /> : null}</ClientOnly>;
};

export default LayoutLoader;
