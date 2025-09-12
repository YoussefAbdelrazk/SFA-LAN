'use client';

import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn-card';
import { useMonthlySubscriptions, useYearlySubscriptions } from '@/hooks/useSubscriptions';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

interface SubscriptionPlansProps {
  className?: string;
}

// Loading Skeleton Component
const SubscriptionCardSkeleton = () => (
  <Card className='w-full max-w-[360px] min-h-[479px] animate-pulse'>
    <CardHeader className='text-center space-y-4'>
      <div className='h-8 bg-gray-200 rounded w-3/4 mx-auto'></div>
      <div className='h-12 bg-gray-200 rounded w-1/2 mx-auto'></div>
    </CardHeader>
    <CardContent className='space-y-4'>
      <div className='space-y-3'>
        {[1, 2, 3, 4].map(i => (
          <div key={i} className='flex items-center space-x-2'>
            <div className='w-4 h-4 bg-gray-200 rounded'></div>
            <div className='h-4 bg-gray-200 rounded w-3/4'></div>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <div className='w-full h-12 bg-gray-200 rounded'></div>
    </CardFooter>
  </Card>
);

export default function SubscriptionPlans({ className }: SubscriptionPlansProps) {
  const t = useTranslations('pricing');
  const commonT = useTranslations('common');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');

  const {
    data: monthlyData,
    isLoading: monthlyLoading,
    error: monthlyError,
  } = useMonthlySubscriptions({
    params: { pageNumber: 1, pageSize: 10 },
    locale,
  });

  const {
    data: yearlyData,
    isLoading: yearlyLoading,
    error: yearlyError,
  } = useYearlySubscriptions({
    params: { pageNumber: 1, pageSize: 10 },
    locale,
  });

  const currentData = activeTab === 'monthly' ? monthlyData : yearlyData;
  const isLoading = activeTab === 'monthly' ? monthlyLoading : yearlyLoading;
  const error = activeTab === 'monthly' ? monthlyError : yearlyError;

  const plans = currentData?.data?.items || [];

  return (
    <div className={cn('my-24 text-[#344054]', className)}>
      {/* Header */}
      <div className='text-center mb-8'>
        <h2 className='font-bold text-4xl mb-4 leading-tight max-w-lg mx-auto'>{t('title')}</h2>
        <p className='text-[#475467] text-md max-w-md mx-auto mb-8'>{t('subtitle')}</p>

        {/* Tab Navigation */}
        <div className='flex justify-center'>
          <div className='bg-gray-100 rounded-lg p-1'>
            <button
              onClick={() => setActiveTab('monthly')}
              className={cn(
                'px-6 py-2 rounded-md transition-all duration-300 font-semibold',
                activeTab === 'monthly'
                  ? 'bg-[#3E1492] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50',
              )}
            >
              {commonT('monthly')}
            </button>
            <button
              onClick={() => setActiveTab('yearly')}
              className={cn(
                'px-6 py-2 rounded-md transition-all duration-300 font-semibold',
                activeTab === 'yearly'
                  ? 'bg-[#3E1492] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50',
              )}
            >
              {commonT('yearly')}
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 place-items-center'>
          {[1, 2, 3].map(i => (
            <SubscriptionCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className='flex items-center justify-center py-12'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-red-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z'
                />
              </svg>
            </div>
            <p className='text-red-600 mb-2 font-semibold'>Failed to load subscription plans</p>
            <p className='text-gray-600'>{error.message}</p>
          </div>
        </div>
      )}

      {/* Plans Grid */}
      {!isLoading && !error && (
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 place-items-center'>
          {plans.map((plan, index) => {
            const isPopular = index === 1; // Make middle plan popular
            return (
              <Card
                key={plan.id}
                className={cn(
                  'w-full max-w-[360px] min-h-[479px] transition-all duration-500 hover:scale-105 flex flex-col justify-between overflow-hidden border-2',
                  isPopular
                    ? 'border-[#3E1492] bg-gradient-to-br from-[#3E1492] to-[#2d0f6b] text-white shadow-2xl scale-105'
                    : 'border-gray-200 hover:border-[#3E1492] hover:shadow-xl',
                )}
              >
                <CardHeader className='text-center space-y-4'>
                  <CardTitle
                    className={cn(
                      'text-3xl font-bold',
                      isPopular ? 'text-white' : 'text-[#344054]',
                    )}
                  >
                    {plan.planName}
                  </CardTitle>
                  <div className='space-y-2'>
                    <div
                      className={cn(
                        'text-5xl font-bold',
                        isPopular ? 'text-white' : 'text-[#3E1492]',
                      )}
                    >
                      {plan.priceEGP.toLocaleString()} EGP
                    </div>
                    <CardDescription
                      className={cn('text-sm', isPopular ? 'text-gray-200' : 'text-gray-500')}
                    >
                      per {activeTab === 'monthly' ? 'month' : 'year'}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className='space-y-4'>
                  <ul className='space-y-3'>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center gap-3'>
                        <div
                          className={cn(
                            'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
                            isPopular ? 'bg-white/20' : 'bg-[#3E1492]/10',
                          )}
                        >
                          <svg
                            className={cn('w-3 h-3', isPopular ? 'text-white' : 'text-[#3E1492]')}
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path
                              fillRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                        <span
                          className={cn('text-sm', isPopular ? 'text-gray-100' : 'text-gray-700')}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={isPopular ? 'secondary' : 'primary'}
                    size='lg'
                    className={cn(
                      'w-full font-semibold transition-all duration-300',
                      isPopular && 'bg-white text-[#3E1492] hover:bg-gray-50',
                    )}
                  >
                    {commonT('getStarted')}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}

      {/* Pagination Info */}
      {!isLoading && !error && currentData?.data?.pagination && (
        <div className='mt-8 text-center'>
          <p className='text-gray-600 text-sm'>
            Showing {currentData.data.pagination.pageNumber} of{' '}
            {currentData.data.pagination.totalPages} pages
            <span className='mx-2'>•</span>
            {currentData.data.pagination.totalCount} total plans available
          </p>
        </div>
      )}
    </div>
  );
}
