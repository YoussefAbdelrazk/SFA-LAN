'use client';

import { Section } from '@/components/layout';
import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  const translatedServices = [
    {
      ...services[0],
      title: t('personalTraining.title'),
      description: t('personalTraining.description'),
    },
    {
      ...services[1],
      title: t('groupClasses.title'),
      description: t('groupClasses.description'),
    },
    {
      ...services[2],
      title: t('nutritionGuidance.title'),
      description: t('nutritionGuidance.description'),
    },
    {
      ...services[3],
      title: t('wellnessPrograms.title'),
      description: t('wellnessPrograms.description'),
    },
    {
      ...services[4],
      title: t('fitnessAssessment.title'),
      description: t('fitnessAssessment.description'),
    },
    {
      ...services[5],
      title: t('onlineCoaching.title'),
      description: t('onlineCoaching.description'),
    },
  ];

  return (
    <Section id='services text-[#344054]'>
      <div className='text-center mb-12'>
        <h2 className='text-5xl font-bold mb-4 text-[#344054]'>{t('title')}</h2>
        <p className='text-lg text-[#475467] max-w-3xl mx-auto'>
          {t('subtitle')}
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {translatedServices.map((service, idx) => (
          <div key={idx} className='flex justify-center h-full'>
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
