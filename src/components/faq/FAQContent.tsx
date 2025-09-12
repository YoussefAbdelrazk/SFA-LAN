'use client';

import { Container } from '@/components/layout';
import { AccordionDemo } from '@/components/ui/AccordionComponents';
import { useTranslations } from 'next-intl';

export default function FAQContent() {
  const t = useTranslations('faq');

  return (
    <div>
      <section className='faq-background relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/40 z-10'></div>

        {/* Content */}
        <Container className='relative z-20 text-center text-white'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-4xl md:text-7xl font-bold mb-6'>{t('title')}</h1>
          </div>
        </Container>
      </section>

      <section className='my-20'>
        <AccordionDemo />
      </section>
    </div>
  );
}
