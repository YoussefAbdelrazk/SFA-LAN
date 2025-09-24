'use client';

import { Container } from '@/components/layout';
import { AccordionDemo } from '@/components/ui/AccordionComponents';
import { Animate, TextReveal } from '@/lib/animations';
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
            <TextReveal delay={0.2}>
              <h1 className='text-4xl md:text-7xl font-bold mb-6'>{t('title')}</h1>
            </TextReveal>
          </div>
        </Container>
      </section>

      <Animate variant='fadeInUp' delay={0.4}>
        <section className='my-20'>
          <AccordionDemo />
        </section>
      </Animate>
    </div>
  );
}
