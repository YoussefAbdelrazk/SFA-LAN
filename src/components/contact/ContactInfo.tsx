'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface ContactInfoProps {
  className?: string;
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
  className?: string;
}

function ContactCard({
  icon,
  title,
  description,
  contact,
  className,
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform  border border-[#3E1492] card-hover group',
        className
      )}
    >
      <div className='flex flex-col items-start text-left space-y-4'>
        <div className='w-16 h-16 bg-gradient-to-r from-[#3E1492] to-[#6B46C1] rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3'>
          {icon}
        </div>
        <div className='transition-all duration-300'>
          <h3 className='text-xl font-bold  mb-2 transition-all duration-300 group-hover:text-[#3E1492]'>
            {title}
          </h3>
          <p className='text-gray-600 mb-3 transition-all duration-300 group-hover:text-gray-800'>
            {description}
          </p>
          <p className='text-[#3E1492] font-semibold transition-all duration-300 group-hover:text-[#6B46C1]'>
            {contact}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactInfo({ className }: ContactInfoProps) {
  const t = useTranslations('contact');

  return (
    <div className={cn('w-full section-fade-in', className)}>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Email Card */}
        <ContactCard
          icon={
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
          }
          title={t('cards.email.title')}
          description={t('cards.email.description')}
          contact={t('info.email')}
        />

        {/* Live Chat Card */}
        <ContactCard
          icon={
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 3.582-8 8-8s8 3.582 8 8z'
              />
            </svg>
          }
          title={t('cards.chat.title')}
          description={t('cards.chat.description')}
          contact={t('info.phone')}
        />

        {/* Phone Card */}
        <ContactCard
          icon={
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              />
            </svg>
          }
          title={t('cards.phone.title')}
          description={t('cards.phone.description')}
          contact={t('info.phone')}
        />
      </div>
    </div>
  );
}
