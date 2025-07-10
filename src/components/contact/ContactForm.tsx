'use client';

import { Button } from '@/components/ui';
import { FormField, Input, Textarea } from '@/components/ui/form-field';
import { useContactForm } from '@/hooks/useContactForm';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const t = useTranslations('contact');
  const commonT = useTranslations('common');
  const locale = useLocale();

  const {
    isSubmitting,
    submissionResult,
    onSubmit,
    clearSubmissionResult,
    register,
    formState: { errors, touchedFields },
    watch,
  } = useContactForm();

  // Watch field values for validation
  const watchedValues = watch();

  // Helper function to check if field is valid
  const isFieldValid = (fieldName: keyof typeof watchedValues) => {
    return (
      touchedFields[fieldName] &&
      !errors[fieldName] &&
      watchedValues[fieldName]?.length > 0
    );
  };

  return (
    <div className={cn('w-full max-w-md page-transition', className)}>
      <div className='mb-8 section-fade-in'>
        <h1 className='text-4xl md:text-5xl font-bold  mb-4 transition-all duration-500 hover:text-[#3E1492]'>
          {t('title')}
        </h1>
        <p className='text-gray-600 text-lg transition-all duration-300 hover:text-gray-800'>
          {t('subtitle')}
        </p>
      </div>

      {/* Success/Error Message */}
      {submissionResult && (
        <div
          className={cn(
            'mb-6 p-4 rounded-lg flex items-center gap-3',
            submissionResult.success
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          )}
        >
          {submissionResult.success ? (
            <svg
              className='w-5 h-5 text-green-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              className='w-5 h-5 text-red-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                clipRule='evenodd'
              />
            </svg>
          )}
          <span>{submissionResult.message}</span>
          <button
            type='button'
            onClick={clearSubmissionResult}
            className='ml-auto text-gray-400 hover:text-gray-600'
          >
            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      )}

      <form onSubmit={onSubmit} className='space-y-6 section-fade-in'>
        {/* Name Field */}
        <FormField label={commonT('name')} error={errors.name?.message}>
          <Input
            {...register('name')}
            type='text'
            placeholder={t('form.namePlaceholder')}
            error={!!errors.name}
            isValid={isFieldValid('name')}
            icon={
              <div
                className={cn(
                  'flex items-center justify-center w-5 h-5',
                  locale === 'ar' ? 'ml-2' : 'mr-1'
                )}
              >
                <svg
                  className='h-5 w-5 text-[#3E1492]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </div>
            }
            className={locale === 'ar' ? 'text-left' : ''}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          />
        </FormField>

        {/* Email Field */}
        <FormField label={commonT('email')} error={errors.email?.message}>
          <Input
            {...register('email')}
            type='email'
            placeholder={t('form.emailPlaceholder')}
            error={!!errors.email}
            isValid={isFieldValid('email')}
            icon={
              <div
                className={cn(
                  'flex items-center justify-center w-5 h-5',
                  locale === 'ar' ? 'ml-1' : 'mr-1'
                )}
              >
                <svg
                  className='h-5 w-5 text-[#3E1492]'
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
              </div>
            }
            className={locale === 'ar' ? 'text-left' : ''}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          />
        </FormField>

        {/* Message Field */}
        <FormField label={commonT('message')} error={errors.message?.message}>
          <Textarea
            {...register('message')}
            placeholder={t('form.messagePlaceholder')}
            rows={5}
            error={!!errors.message}
            isValid={isFieldValid('message')}
            className={locale === 'ar' ? 'text-left' : ''}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          />
        </FormField>

        {/* Submit Button */}
        <Button
          type='submit'
          variant='primary'
          size='lg'
          className='w-full'
          disabled={isSubmitting}
        >
          {isSubmitting ? commonT('submitting') : t('form.submitNow')}
        </Button>
      </form>
    </div>
  );
}
