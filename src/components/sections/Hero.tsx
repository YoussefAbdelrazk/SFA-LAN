'use client';

import login from '@/assets/images/Login_Mockup.png';
import Side_menu from '@/assets/images/Side_Menu_Mockup.png';
import { Animate, ImageReveal, TextReveal } from '@/lib/animations';
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
      <div className='relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-44 md:py-20 max-w-7xl mx-auto'>
        {/* Text Content */}
        <Animate
          variant='fadeInLeft'
          delay={0.2}
          className='text-center lg:text-left lg:w-1/2 space-y-8 mb-12 lg:mb-0'
        >
          <div className='space-y-6'>
            <TextReveal delay={0.3}>
              <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white'>
                {t('title')
                  .split('\n')
                  .map((line, index) => (
                    <span key={index} className='block'>
                      {line}
                    </span>
                  ))}
              </h1>
            </TextReveal>

            <Animate variant='fadeInUp' delay={0.5}>
              <p className='text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
                {t('subtitle')}
              </p>
            </Animate>

            <Animate variant='fadeInUp' delay={0.7}>
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <a
                  href='#btn-platform'
                  className='bg-[#3E1492] rounded-md text-white hover:text-[#feda02] font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'
                >
                  {t('downloadApp')}
                </a>
                <a
                  href='https://web.sherif-faranca.com'
                  target='_blank'
                  className='border-2 bg-white rounded-md hover:text-[#3E1492] font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer'
                >
                  {t('useWebPlatform')}
                </a>
              </div>
            </Animate>
          </div>
        </Animate>

        {/* Image Section */}
        <Animate
          variant='fadeInRight'
          delay={0.4}
          className='lg:w-1/2 flex justify-center lg:justify-end'
        >
          <div className='relative w-[280px] h-[560px]'>
            {/* Main App Mockup */}
            <ImageReveal delay={0.6}>
              <div className='relative z-10'>
                <Image
                  src={login}
                  alt='Login Mockup'
                  width={280}
                  height={560}
                  className='rounded-3xl shadow-2xl w-full h-auto'
                  priority
                />
              </div>
            </ImageReveal>
            {/* Side Menu Mockup - overlayed on login */}
            <ImageReveal delay={0.8}>
              <div className='absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2'>
                <Image
                  src={Side_menu}
                  alt='Side Menu Mockup'
                  width={240}
                  height={480}
                  className='rounded-3xl shadow-2xl w-[240px] h-auto'
                />
              </div>
            </ImageReveal>
            {/* Floating Elements */}
            <Animate variant='bounceIn' delay={1.0}>
              <div className='absolute -top-8 -left-8 w-16 h-16 bg-white/10 rounded-full animate-pulse'></div>
            </Animate>
            <Animate variant='bounceIn' delay={1.2}>
              <div className='absolute -bottom-8 -right-8 w-12 h-12 bg-white/5 rounded-full animate-bounce'></div>
            </Animate>
            <Animate variant='bounceIn' delay={1.4}>
              <div className='absolute top-1/2 -left-4 w-8 h-8 bg-white/10 rounded-full animate-ping'></div>
            </Animate>
          </div>
        </Animate>
      </div>
    </section>
  );
}
