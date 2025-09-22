'use client';

import platform from '@/assets/images/platform.jpg';
import { Button, FlexComponent } from '@/components/ui';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Platform() {
  const t = useTranslations('platform');

  return (
    <section className='max-w-6xl mx-auto py-12 px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center my-20 overflow-x-hidden'>
      {/* image */}
      <div className='mb-8 md:mb-0 flex justify-center'>
        <Image
          src={platform}
          alt='platform'
          width={530}
          height={500}
          className='rounded-xl shadow-2xl w-full h-[640px] object-cover'
        />
      </div>

      {/* content */}
      <div className='space-y-6 text-[#344054]'>
        <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl leading-tight max-w-xl'>
          {t('title')}
        </h2>
        <p className='text-[#475467] text-base sm:text-lg'>{t('subtitle')}</p>
        {/* flex components */}
        <div className='flex flex-col gap-4 mt-6'>
          <FlexComponent
            title={t('expertTrainers.title')}
            description={t('expertTrainers.description')}
            icon={<CheckCircle2 className='w-6 h-6 text-[#3E1492]' />}
          />
          <FlexComponent
            title={t('stateOfTheArtEquipment.title')}
            description={t('stateOfTheArtEquipment.description')}
            icon={<CheckCircle2 className='w-6 h-6 text-[#3E1492]' />}
          />
          <FlexComponent
            title={t('comprehensivePrograms.title')}
            description={t('comprehensivePrograms.description')}
            icon={<CheckCircle2 className='w-6 h-6 text-[#3E1492]' />}
          />
        </div>
        <Button variant='primary' size='lg' className='group mt-6'>
          {t('getStartedNow')}
          <ChevronRight className='w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 cursor-pointer' />
        </Button>
      </div>
    </section>
  );
}
