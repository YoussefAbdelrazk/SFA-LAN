'use client';

import login from '@/assets/images/Login_Mockup.png';
import Side_menu from '@/assets/images/Side_Menu_Mockup.png';
import { Button } from '@/components/ui';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className='relative min-h-screen bg-gradient-to-br from-[#1a1442] via-[#3E1492] to-[#6B46C1] overflow-hidden  '>
      {/* Debug Info - Remove this later */}
      {/* <div className='absolute top-4 left-4 z-50 bg-black/80 text-white p-2 rounded text-xs'>
        <div>Current Locale: {locale}</div>
        <div>Title: {t('title').substring(0, 20)}...</div>
        <div>Subtitle: {t('subtitle').substring(0, 30)}...</div>
      </div> */}

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#1a1442]/90 via-[#3E1492]/80 to-[#6B46C1]/90'></div>
      {/* Content Container */}
      <div className='relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-32 md:py-20 max-w-7xl mx-auto'>
        {/* Text Content */}
        <div className='text-center lg:text-left lg:w-1/2 space-y-8 mb-12 lg:mb-0 hero-text-animate'>
          <div className='space-y-6'>
            <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white'>
              {t('title')
                .split('\n')
                .map((line, index) => (
                  <span key={index} className='block'>
                    {line}
                  </span>
                ))}
            </h1>

            <p className='text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
              {t('subtitle')}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Button
                variant='primary'
                size='lg'
                className='bg-white text-[#3E1492] hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform  hover-lift'
              >
                {t('downloadApp')}
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-2    hover:text-[#3E1492] font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform  hover-lift'
              >
                {t('useWebPlatform')}
              </Button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className='lg:w-1/2 flex justify-center lg:justify-end hero-image-animate'>
          <div className='relative'>
            {/* Main App Mockup */}
            <div className='relative z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500 hover-lift'>
              <Image
                src={login}
                alt='Login Mockup'
                width={280}
                height={560}
                className='rounded-3xl shadow-2xl w-full max-w-[280px] h-auto image-fade-in'
                priority
              />
            </div>

            {/* Side Menu Mockup */}
            <div className='absolute -top-4 -right-4 z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500 hover-lift'>
              <Image
                src={Side_menu}
                alt='Side Menu Mockup'
                width={240}
                height={480}
                className='rounded-3xl shadow-2xl w-full max-w-[240px] h-auto image-fade-in'
              />
            </div>

            {/* Floating Elements */}
            <div className='absolute -top-8 -left-8 w-16 h-16 bg-white/10 rounded-full animate-pulse'></div>
            <div className='absolute -bottom-8 -right-8 w-12 h-12 bg-white/5 rounded-full animate-bounce'></div>
            <div className='absolute top-1/2 -left-4 w-8 h-8 bg-white/10 rounded-full animate-ping'></div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <div className='flex flex-col items-center space-y-2 text-white/60'>
          <span className='text-sm font-medium'>Scroll to explore</span>
          <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
