'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';

interface FAQQuestion {
  question: string;
  answer: string;
}

export function AccordionDemo() {
  const t = useTranslations('faq');

  return (
    <Accordion
      type='single'
      collapsible
      className='w-full max-w-5xl mx-auto  rounded-xl shadow-2xl p-6 backdrop-blur-md border '
      defaultValue='item-1'
    >
      {t.raw('questions').map((question: FAQQuestion, index: number) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className={`mb-4 rounded-xl border  transition-all duration-300 shadow-lg`}
        >
          <AccordionTrigger
            className={`flex w-full items-center justify-between px-6 py-4 text-lg font-bold bg-gradient-to-r   transition-colors duration-300
               bg-[#3E1492] text-white " }`}
          >
            {question.question}
          </AccordionTrigger>
          <AccordionContent className='px-6 py-4 bg-[#E2DCF0] text-[#344054]  rounded-b-xl text-base font-medium backdrop-blur-sm'>
            {question.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
