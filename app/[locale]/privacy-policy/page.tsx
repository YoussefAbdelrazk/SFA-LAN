'use client';

import PrivacyImage from '@/assets/images//Placeholder Image.png';
import { Container, Section } from '@/components/layout';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacy');

  return (
    <div className='min-h-screen overflow-x-hidden text-[#344054]'>
      {/* Hero Section with Background Image */}
      <section className='privacy-background relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/40 z-10'></div>

        {/* Content */}
        <Container className='relative z-20 text-center text-white'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-4xl md:text-7xl font-bold mb-6'>
              {t('title')}
            </h1>
          </div>
        </Container>
      </section>

      {/* About Content Section */}
      <Section className='bg-white text-[#344054]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Text Content */}
          <div className='space-y-6'>
            <h2 className='text-4xl font-bold  mb-6'>
              {t('preferences.title')}
            </h2>
            <p className='text-lg  leading-relaxed'>
              {t('preferences.content')}
            </p>
            <h2 className='text-4xl font-bold  mb-6'>
              {t('information.title')}
            </h2>
            <p className='text-lg  leading-relaxed'>
              {t('information.content')}
            </p>
          </div>

          {/* Image */}
          <div className='relative'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl '>
              <Image
                src={PrivacyImage}
                alt='About Sherife Franca'
                width={530}
                height={540}
                className='object-cover object-center'
                sizes='(max-width: 530px) 100vw, 50vw'
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
