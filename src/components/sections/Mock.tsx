'use client';
import banner from '@/assets/images/banner.png';
import mock from '@/assets/images/mock.png';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Mock() {
  const t = useTranslations();
  return (
    <section className='mt-12 md:mt-20 text-[#344054]  '>
      <h2 className='text-2xl sm:text-3xl md:text-6xl font-bold text-center mb-8 md:mb-16 leading-tight'>
        {t('mock.headline')}
      </h2>

      <div className=' space-y-6 md:space-y-8 lg:space-y-12'>
        {/* First Image Container */}
        <div className='relative group'>
          {/* Mobile-specific background gradient */}
          <div className='absolute inset-0 bg-gradient-to-br from-[#3E1492]/5 via-[#feda02]/5 to-[#3E1492]/10 rounded-2xl md:rounded-3xl transform group-hover:scale-105 transition-transform duration-500'></div>

          <Image
            src={mock}
            alt='Mobile and desktop app mockup'
            width={1000}
            height={1000}
            className='relative z-10 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-full h-auto transform group-hover:scale-105 transition-all duration-500 hover:shadow-3xl mx-auto'
          />

          {/* Mobile overlay with better touch interaction */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </div>

        {/* Second Image Container */}
        <div className='relative group'>
          {/* Mobile-specific background gradient */}
          <div className='absolute inset-0 bg-gradient-to-br from-[#feda02]/5 via-[#3E1492]/5 to-[#feda02]/10 rounded-t-xl md:rounded-t-xl transform transition-transform duration-500'></div>

          <Image
            src={banner}
            alt='Platform banner showcase'
            width={1000}
            height={1000}
            className='relative z-10 rounded-t-xl shadow-xl md:shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-full h-auto transform  transition-all duration-500 hover:shadow-3xl mx-auto'
          />

          {/* Centered solid dark overlay with centered bold text */}
          <div className='absolute inset-0 flex flex-col justify-center items-center'>
            <div className='absolute inset-0 bg-black/80 rounded-t-xl'></div>
            <h2 className='relative z-10 text-white text-md sm:text-4xl md:text-5xl font-extrabold text-center px-4'>
              {t('mock.cta')}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
