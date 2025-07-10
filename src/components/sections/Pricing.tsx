'use client';

import { Button, PricingCard } from '@/components/ui';
import { pricingPlans } from '@/data';
import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('pricing');
  const commonT = useTranslations('common');

  const translatedPlans = [
    {
      ...pricingPlans[0],
      title: t('basicPlan.title'),
      price: t('basicPlan.price'),
      features: t.raw('basicPlan.features'),
      buttonText: commonT('getStarted'),
    },
    {
      ...pricingPlans[1],
      title: t('premiumPlan.title'),
      price: t('premiumPlan.price'),
      features: t.raw('premiumPlan.features'),
      buttonText: commonT('getStarted'),
    },
    {
      ...pricingPlans[2],
      title: t('elitePlan.title'),
      price: t('elitePlan.price'),
      features: t.raw('elitePlan.features'),
      buttonText: commonT('getStarted'),
    },
  ];

  return (
    <div className='my-24 text-[#344054] '>
      <h2 className='font-bold text-4xl text-center my-6 leading-tight max-w-lg mx-auto'>
        {t('title')}
      </h2>
      <p className='text-[ #475467] text-center text-md max-w-md mx-auto'>
        {t('subtitle')}
      </p>
      <div className='flex justify-center gap-4 mt-6'>
        <Button variant='primary' size='lg'>
          {commonT('monthly')}
        </Button>
        <Button variant='outline' size='lg'>
          {commonT('yearly')}
        </Button>
      </div>

      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 place-items-center'>
        {translatedPlans.map((plan, idx) => (
          <PricingCard
            key={idx}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
            highlighted={plan.isPopular}
            className={
              plan.isPopular
                ? 'bg-[#3E1492] text-white scale-105 shadow-2xl'
                : ''
            }
          />
        ))}
      </div>
    </div>
  );
}
