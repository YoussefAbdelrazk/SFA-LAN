'use client';

import PrivacyImage from '@/assets/images//Placeholder Image.png';
import { Container, Section } from '@/components/layout';
import { usePrivacy } from '@/hooks/usePrivacy';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PrivacyContent() {
  const t = useTranslations('privacy');
  const locale = useLocale();
  const { data: privacyData, error } = usePrivacy({ locale });

  // Show loading state
  // if (isLoading) {
  //   return (
  //     <div className='min-h-screen flex items-center justify-center'>
  //       <div className='text-center'>
  //         <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3E1492] mx-auto mb-4'></div>
  //         <p className='text-gray-600'>Loading privacy policy...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // Show error state
  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-red-600 mb-4'>Failed to load privacy policy</p>
          <p className='text-gray-600'>{error.message}</p>
        </div>
      </div>
    );
  }

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
              {privacyData?.data?.title || t('title')}
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
              {privacyData?.data?.section1 || t('preferences.title')}
            </h2>
            <p className='text-lg  leading-relaxed'>
              {privacyData?.data?.content1 || t('preferences.content')}
            </p>
            <h2 className='text-4xl font-bold  mb-6'>
              {privacyData?.data?.section2 || t('information.title')}
            </h2>
            <p className='text-lg  leading-relaxed'>
              {privacyData?.data?.content2 || t('information.content')}
            </p>
          </div>

          {/* Image */}
          <div className='relative py-4'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl '>
              <Image
                src={privacyData?.data?.imageUrl || PrivacyImage}
                alt={privacyData?.data?.title || 'Privacy Policy'}
                width={530}
                height={540}
                className='object-cover object-center w-full'
                sizes='(max-width: 530px) 100vw, 50vw'
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
