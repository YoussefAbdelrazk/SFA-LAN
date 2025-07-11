'use client';

import { Section } from '@/components/layout';
import { TestimonialCard } from '@/components/ui';
import { testimonials } from '@/data';
import { useTranslations } from 'next-intl';

export default function Transformation() {
  const t = useTranslations('testimonials');

  return (
    <Section id='testimonials' className='my-32 text-[#344054] '>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4'>{t('title')}</h2>
        <p className='text-lg max-w-[862px] mx-auto text-[#475467] px-4 md:px-0'>
          {t('subtitle')}
        </p>
      </div>

      {/* Testimonials Grid - No Scroll */}
      <div className='w-full max-w-7xl mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 place-items-center overflow-x-hidden'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='w-full max-w-[360px] flex justify-center p-3'
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                rating={testimonial.rating}
                content={testimonial.content}
                memberSince={testimonial.memberSince}
                className='w-full max-w-[360px] mx-auto'
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
