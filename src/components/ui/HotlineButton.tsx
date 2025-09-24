'use client';

import { useContactData, getHotlineNumber } from '@/hooks/useContactData';
import { getHotlineDisplayName } from '@/constants/contact';
import { useLocale } from 'next-intl';

interface HotlineButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function HotlineButton({
  className = '',
  size = 'md',
  showText = true,
}: HotlineButtonProps) {
  const locale = useLocale();
  const { data: contactData, isLoading } = useContactData(locale);

  const handleHotlineClick = () => {
    const hotlineNumber = getHotlineNumber(contactData);
    const telUrl = `tel:${hotlineNumber}`;
    window.location.href = telUrl;
  };

  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-16 h-16 text-base',
    lg: 'w-20 h-20 text-lg',
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  if (isLoading) {
    return (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const hotlineNumber = getHotlineNumber(contactData);
  const displayName = getHotlineDisplayName(locale);

  return (
    <button
      onClick={handleHotlineClick}
      className={`
        ${sizeClasses[size]}
        bg-blue-600 hover:bg-blue-700
        text-white rounded-full shadow-lg
        hover:shadow-xl transform hover:scale-110
        transition-all duration-300 ease-in-out
        flex items-center justify-center gap-2
        ${className}
      `}
      aria-label={`Call ${displayName}: ${hotlineNumber}`}
      title={`Call ${displayName}: ${hotlineNumber}`}
    >
      <svg
        className={iconSizes[size]}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
      {showText && (
        <span className="hidden sm:inline font-medium">
          {displayName}
        </span>
      )}
    </button>
  );
}
