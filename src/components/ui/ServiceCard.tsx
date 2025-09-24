import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  className?: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ title, description, image, className, ...props }, ref) => {
    // const commonT = useTranslations('common');

    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-xl shadow-xl px-3 py-2 flex flex-col items-center text-center w-full h-full min-h-[420px] max-w-[364px] transition-all duration-300 hover:shadow-2xl text-[#344054]',
          className,
        )}
        {...props}
      >
        <div className='relative w-full  mb-4 overflow-hidden rounded-lg'>
          <Image
            src={image}
            alt={title}
            className='object-cover transition-transform duration-300 hover:scale-105 w-[330px] h-[250px]'
          />
        </div>
        <h3 className='font-bold text-xl mb-2 '>{title}</h3>
        <p className='text-gray-600 flex-1 leading-relaxed'>{description}</p>
      </div>
    );
  },
);

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
