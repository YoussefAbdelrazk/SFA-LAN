'use client';

import { getWhatsAppUrl } from '@/constants/contact';
import { useGetContactUs } from '@/hooks/useContactUs';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';

interface ContactInfoProps {
  className?: string;
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
  className?: string;
  onClick?: () => void;
  isClickable?: boolean;
}

function ContactCard({
  icon,
  title,
  description,
  contact,
  className,
  onClick,
  isClickable = false,
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-[#3E1492] card-hover group',
        isClickable && 'cursor-pointer hover:scale-105',
        className,
      )}
      onClick={onClick}
    >
      <div className='flex flex-col items-start text-left space-y-4'>
        <div className='w-16 h-16 bg-gradient-to-r from-[#3E1492] to-[#6B46C1] rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3'>
          {icon}
        </div>
        <div className='transition-all duration-300'>
          <h3 className='text-xl font-bold mb-2 transition-all duration-300 group-hover:text-[#3E1492]'>
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
  const locale = useLocale();
  const { data: contactInfo } = useGetContactUs({ locale });

  const handleWhatsAppClick = () => {
    const whatsappUrl = getWhatsAppUrl(locale);
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo?.mail}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${contactInfo?.hotline}`, '_blank');
  };

  return (
    <div className={cn('w-full section-fade-in', className)}>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-4'>
        {/* Email Card */}
        <ContactCard
          icon={
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
          contact={contactInfo?.mail}
          onClick={handleEmailClick}
          isClickable={true}
        />

        {/* WhatsApp Card */}
        <ContactCard
          icon={
            <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
            </svg>
          }
          title={t('cards.whatsapp.title')}
          description={t('cards.whatsapp.description')}
          contact={contactInfo?.hotline}
          onClick={handleWhatsAppClick}
          isClickable={true}
        />

        {/* Phone Card */}
        <ContactCard
          icon={
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
          contact={contactInfo?.hotline}
          onClick={handlePhoneClick}
          isClickable={true}
        />
      </div>
    </div>
  );
}
