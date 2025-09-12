'use client';

import aboutUsImage from '@/assets/images/AboutUsGrid.jpg';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutContent() {
  const t = useTranslations('about');
  const commonT = useTranslations('common');

  return (
    <div className='min-h-screen overflow-x-hidden'>
      {/* Hero Section with Background Image */}
      <section className='about-background relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/40 z-10'></div>

        {/* Content */}
        <Container className='relative z-20 text-center text-white'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>{t('hero.title')}</h1>
            <p className='text-xl md:text-2xl mb-8 leading-relaxed'>{t('hero.subtitle')}</p>
          </div>
        </Container>
      </section>

      {/* About Content Section */}
      <Section className='bg-white'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Text Content */}
          <div className='space-y-6'>
            <h2 className='text-4xl font-bold text-[#344054] mb-6'>{t('story.title')}</h2>
            <p className='text-lg text-gray-700 leading-relaxed'>{t('story.content')}</p>
            <p className='text-lg text-gray-700 leading-relaxed'>{t('story.content2')}</p>
            <div className='flex flex-col sm:flex-row gap-4 mt-8'>
              <Button variant='primary' size='lg'>
                {commonT('getStarted')}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className='relative'>
            <div className='relative h-[500px] rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src={aboutUsImage}
                alt='About Sherife Franca'
                fill
                className='object-cover object-center'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className='bg-gradient-to-r from-[#1a1442] to-[#3E1492] text-white '>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-4'>{t('impact.title')}</h2>
          <p className='text-xl opacity-90'>{t('impact.subtitle')}</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
          <div className='space-y-2'>
            <div className='text-4xl font-bold'>{t('impact.stats.members')}</div>
            <div className='text-lg opacity-90'>{t('impact.stats.membersLabel')}</div>
          </div>
          <div className='space-y-2'>
            <div className='text-4xl font-bold'>{t('impact.stats.trainers')}</div>
            <div className='text-lg opacity-90'>{t('impact.stats.trainersLabel')}</div>
          </div>
          <div className='space-y-2'>
            <div className='text-4xl font-bold'>{t('impact.stats.experience')}</div>
            <div className='text-lg opacity-90'>{t('impact.stats.experienceLabel')}</div>
          </div>
          <div className='space-y-2'>
            <div className='text-4xl font-bold'>{t('impact.stats.access')}</div>
            <div className='text-lg opacity-90'>{t('impact.stats.accessLabel')}</div>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className='bg-gray-50 text-[#344054]'>
        <div className='text-center max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold  mb-6'>{t('mission.title')}</h2>
          <p className='text-xl  leading-relaxed mb-8'>{t('mission.subtitle')}</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
            <div className='text-center space-y-4'>
              <div className='w-16 h-16 bg-[#3E1492] rounded-full flex items-center justify-center mx-auto'>
                <span className='text-white text-2xl font-bold'>💪</span>
              </div>
              <h3 className='text-xl font-bold'>{t('mission.values.strength.title')}</h3>
              <p className='text-gray-600'>{t('mission.values.strength.description')}</p>
            </div>
            <div className='text-center space-y-4'>
              <div className='w-16 h-16 bg-[#3E1492] rounded-full flex items-center justify-center mx-auto'>
                <span className='text-white text-2xl font-bold'>🤝</span>
              </div>
              <h3 className='text-xl font-bold'>{t('mission.values.community.title')}</h3>
              <p className='text-gray-600'>{t('mission.values.community.description')}</p>
            </div>
            <div className='text-center space-y-4'>
              <div className='w-16 h-16 bg-[#3E1492] rounded-full flex items-center justify-center mx-auto'>
                <span className='text-white text-2xl font-bold'>🎯</span>
              </div>
              <h3 className='text-xl font-bold'>{t('mission.values.results.title')}</h3>
              <p className='text-gray-600'>{t('mission.values.results.description')}</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
