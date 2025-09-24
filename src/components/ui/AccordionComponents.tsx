'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useFAQ } from '@/hooks/useFAQ';
import { StaggerContainer, StaggerItem } from '@/lib/animations';
import { FAQApiResponse, FAQItem } from '@/types/faq';
import { useLocale, useTranslations } from 'next-intl';

// Loading Skeleton Component
const FAQSkeleton = () => (
  <div className='w-full max-w-5xl mx-auto rounded-xl shadow-2xl p-6 backdrop-blur-md border'>
    {[1, 2, 3, 4, 5].map(i => (
      <div
        key={i}
        className='mb-4 rounded-xl border transition-all duration-300 shadow-lg animate-pulse'
      >
        <div className='flex w-full items-center justify-between px-6 py-4 bg-gray-200 rounded-t-xl'>
          <div className='h-6 bg-gray-300 rounded w-3/4'></div>
          <div className='w-6 h-6 bg-gray-300 rounded'></div>
        </div>
        <div className='px-6 py-4 bg-gray-100 rounded-b-xl'>
          <div className='h-4 bg-gray-200 rounded w-full mb-2'></div>
          <div className='h-4 bg-gray-200 rounded w-2/3'></div>
        </div>
      </div>
    ))}
  </div>
);

// Error Component
const FAQError = ({ message }: { message: string }) => (
  <div className='w-full max-w-5xl mx-auto rounded-xl shadow-2xl p-6 backdrop-blur-md border'>
    <div className='text-center py-12'>
      <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
        <svg className='w-8 h-8 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z'
          />
        </svg>
      </div>
      <p className='text-red-600 mb-2 font-semibold'>Failed to load FAQ</p>
      <p className='text-gray-600'>{message}</p>
    </div>
  </div>
);

export function AccordionDemo() {
  const t = useTranslations('faq');
  const locale = useLocale();

  const { data: faqData, isLoading, error } = useFAQ({ locale });

  // Loading State
  if (isLoading) {
    return <FAQSkeleton />;
  }

  // Error State
  if (error) {
    return <FAQError message={error.message || 'An error occurred while loading FAQ'} />;
  }

  // Get FAQ items from API or fallback to translations
  const faqItems: FAQItem[] = (faqData as FAQApiResponse)?.data || [];

  // Sort by visibilityOrder if available
  const sortedFAQItems = faqItems.sort((a, b) => a.visibilityOrder - b.visibilityOrder);

  // Fallback to translation data if no API data
  const displayItems =
    sortedFAQItems.length > 0
      ? sortedFAQItems
      : t.raw('questions').map((q: { question: string; answer: string }, index: number) => ({
          id: index + 1,
          question: q.question,
          answer: q.answer,
          visibilityOrder: index + 1,
        }));

  return (
    <Accordion
      type='single'
      collapsible
      className='w-full max-w-7xl mx-auto rounded-xl shadow-2xl p-6 backdrop-blur-md border'
      defaultValue='item-1'
    >
      <StaggerContainer delay={0.1}>
        {displayItems.map((item: FAQItem) => (
          <StaggerItem key={item.id}>
            <AccordionItem
              value={`item-${item.id}`}
              className='mb-4 rounded-xl border transition-all duration-300 shadow-lg'
            >
              <AccordionTrigger className='flex w-full items-center justify-between px-6 py-4 text-lg font-bold bg-gradient-to-r transition-colors duration-300 bg-[#3E1492] text-white rounded-t-xl'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='px-6 py-4 bg-[#E2DCF0] text-[#344054] rounded-b-xl text-base font-medium backdrop-blur-sm'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Accordion>
  );
}
