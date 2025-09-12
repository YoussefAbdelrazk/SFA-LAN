import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, image, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-xl shadow-lg overflow-hidden transition-all  hover:shadow-xl hover:scale-105 duration-300',
          className,
        )}
        {...props}
      >
        <div className='relative h-48 w-full'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <div className='p-6'>
          <h3 className='text-xl font-bold text-gray-900 mb-2'>{title}</h3>
          <p className='text-gray-600 text-sm leading-relaxed'>{description}</p>
        </div>
      </div>
    );
  },
);

Card.displayName = 'Card';

export default Card;
