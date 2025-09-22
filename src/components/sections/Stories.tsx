'use client';

import StoriesImage from '@/assets/images/bigpic.jpg';
import smallpic1 from '@/assets/images/smpic1.jpg';
import smallpic2 from '@/assets/images/smpic2.jpg';
import { Button } from '@/components/ui';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Stories() {
  const t = useTranslations('stories');

  return (
    <section className='max-w-7xl mx-auto py-12 px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center my-20 place-items-center overflow-x-hidden text-[#344054]'>
      {/* content */}
      <div className='space-y-4'>
        <h2 className='text-4xl font-bold leading-tight max-w-[458px]'>
          {t('title')}
        </h2>
        <p className='text-lg text-[#475467] max-w-[458px]'>{t('subtitle')}</p>
        <Button variant='primary' size='md' className='mt-4'>
          {t('joinToday')}
        </Button>
      </div>
      {/* image */}
      <div className='relative'>
        <Image
          src={StoriesImage}
          alt='stories'
          width={487}
          height={532}
          className='rounded-3xl shadow-2xl w-[480px] h-[532px] object-cover'
        />
        <Image
          src={smallpic1}
          alt='stories'
          width={216}
          height={216}
          className='rounded-3xl shadow-2xl absolute top-[230px] -left-20 w-[216px] h-[216px] object-cover hidden md:block'
        />
        <Image
          src={smallpic2}
          alt='stories'
          width={244}
          height={300}
          className='rounded-3xl shadow-xl absolute top-12 -right-20 w-[244px] h-[166px] object-cover hidden md:block'
        />
      </div>
    </section>
  );
}
