'use client';

import platform from '@/assets/images/platform.jpg';
import { FlexComponent } from '@/components/ui';
import { Animate, ImageReveal, StaggerContainer, StaggerItem } from '@/lib/animations';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Platform() {
  const t = useTranslations('platform');

  return (
    <section className='max-w-6xl mx-auto py-12 px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center my-20 overflow-x-hidden'>
      {/* image */}
      <Animate variant='fadeInLeft' delay={0.2}>
        <div className='mb-8 md:mb-0 flex justify-center'>
          <ImageReveal delay={0.4}>
            <Image
              src={platform}
              alt='platform'
              width={530}
              height={500}
              className='rounded-xl shadow-2xl w-full h-[640px] object-cover'
            />
          </ImageReveal>
        </div>
      </Animate>

      {/* content */}
      <Animate variant='fadeInRight' delay={0.3}>
        <div className='space-y-6 text-[#344054]'>
          <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl leading-tight max-w-xl'>
            {t('title')}
          </h2>
          <p className='text-[#475467] text-base sm:text-lg'>{t('subtitle')}</p>
          {/* flex components */}
          <StaggerContainer delay={0.1}>
            <div className='flex flex-col gap-4 mt-6'>
              <StaggerItem>
                <FlexComponent
                  title={t('expertTrainers.title')}
                  description={t('expertTrainers.description')}
                  icon={<CheckCircle2 className='w-6 h-6 text-[#3E1492]' />}
                />
              </StaggerItem>
              <StaggerItem>
                <FlexComponent
                  title={t('stateOfTheArtEquipment.title')}
                  description={t('stateOfTheArtEquipment.description')}
                  icon={<CheckCircle2 className='w-6 h-6 text-[#3E1492]' />}
                />
              </StaggerItem>
              <StaggerItem>
                <FlexComponent
                  title={t('comprehensivePrograms.title')}
                  description={t('comprehensivePrograms.description')}
                  icon={<CheckCircle2 className='w-6 h-6 text-[#3E1492]' />}
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </Animate>
    </section>
  );
}
