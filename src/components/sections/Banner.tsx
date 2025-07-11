'use client';

import banner from '@/assets/images/group.png';

import { Button } from '@/components/ui/Button';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Banner() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className='bg-gray-100 relative overflow-hidden'>
      <div className='relative w-full'>
        <Image
          src={banner}
          alt='Download App Banner'
          width={1000}
          height={1000}
          className='w-full h-auto object-cover'
        />
        <div
          className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center ${
            isRTL ? 'items-end' : 'items-start'
          } px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12`}
        >
          <div
            className={`
              ${isRTL ? 'text-right items-end' : 'text-left items-start'}
              w-full max-w-[90vw] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
              bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20
              p-2 sm:p-5 md:p-8
              flex flex-col
              transition-all duration-300
            `}
          >
            <h2 className='text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 md:mb-4 leading-tight'>
              {t('banner.headline')}{' '}
              <span className='text-[#feda02] block sm:inline'>
                {t('banner.download')}
              </span>
            </h2>
            <p className='text-white/90 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-6 max-w-full sm:max-w-xs md:max-w-sm leading-relaxed'>
              {t('banner.desc')}
            </p>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-start items-start w-full'>
              <Button
                variant='outline'
                className='bg-white text-[#3E1492] hover:bg-[#3E1492] hover:text-white border-white hover:border-[#3E1492] transition-all duration-300 px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base w-full sm:w-auto shadow-md hover:shadow-lg rounded-lg'
              >
                <span className='flex items-center justify-center sm:justify-start gap-1 sm:gap-2'>
                  <svg
                    className='w-4 h-4 sm:w-5 sm:h-5'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' />
                  </svg>
                  <span className='hidden sm:inline'>Google Play</span>
                  <span className='sm:hidden'>Play</span>
                </span>
              </Button>
              <Button
                variant='outline'
                className='bg-white text-[#3E1492] hover:bg-[#3E1492] hover:text-white border-white hover:border-[#3E1492] transition-all duration-300 px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base w-full sm:w-auto shadow-md hover:shadow-lg rounded-lg'
              >
                <span className='flex items-center justify-center sm:justify-start gap-1 sm:gap-2'>
                  <svg
                    className='w-4 h-4 sm:w-5 sm:h-5'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.24,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z' />
                  </svg>
                  <span className='hidden sm:inline'>App Store</span>
                  <span className='sm:hidden'>App</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
