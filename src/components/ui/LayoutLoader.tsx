'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ClientOnly from './ClientOnly';

// Dynamically import the Loader component with no SSR
const Loader = dynamic(() => import('./Loader'), {
  ssr: false,
  loading: () => null,
});

const LayoutLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return <ClientOnly>{loading ? <Loader /> : null}</ClientOnly>;
};

export default LayoutLoader;
