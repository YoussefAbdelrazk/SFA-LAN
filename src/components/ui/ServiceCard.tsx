import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Button } from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  className?: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ title, description, image, className, ...props }, ref) => {
    const commonT = useTranslations('common');

    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center w-full h-full min-h-[420px] max-w-[364px] transition-all duration-300 hover:shadow-2xl text-[#344054]',
          className
        )}
        {...props}
      >
        <div className='relative w-full h-48 mb-4 overflow-hidden rounded-lg'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover transition-transform duration-300 hover:scale-105'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <h3 className='font-bold text-xl mb-2 '>{title}</h3>
        <p className='text-gray-600 flex-1 leading-relaxed'>{description}</p>
        <Button variant='primary' className='group mt-6 w-full justify-center'>
          {commonT('learnMore')}
          <ChevronRight className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1' />
        </Button>
      </div>
    );
  }
);

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
