'use client';

import { Button } from '@/components/ui';
import { FormField, Input, Textarea } from '@/components/ui/form-field';
import { useContactUs } from '@/hooks/useContactUs';
import { cn } from '@/lib/utils';
import { ContactFormData, createContactFormSchema } from '@/lib/validations/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const t = useTranslations('contact');
  const commonT = useTranslations('common');
  const validationT = useTranslations('validation');
  const locale = useLocale();
  const contactMutation = useContactUs({ locale });

  // Create locale-specific validation schema with translation function
  const localizedSchema = createContactFormSchema(locale, (key: string) => {
    try {
      const translation = validationT(key);
      if (!translation || translation === key) {
        console.warn(`Missing translation for key: ${key}`);
      }
      return translation;
    } catch (error) {
      console.error(`Error resolving translation for key: ${key}`, error);
      return key; // Fallback to key if translation not found
    }
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(localizedSchema),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
    mode: 'onChange', // Validate on change for better UX
  });

  // Handle mutation state changes
  useEffect(() => {
    if (contactMutation.isSuccess && contactMutation.data) {
      if (contactMutation.data.isSuccess) {
        form.reset(); // Reset form on successful submission
        toast.success(contactMutation.data.message, {
          description:
            locale === 'ar' ? 'تم إرسال رسالتك بنجاح' : 'Your message has been sent successfully',
          duration: 5000,
        });
      } else {
        toast.error(contactMutation.data.message, {
          description:
            locale === 'ar'
              ? 'حدث خطأ أثناء إرسال الرسالة'
              : 'An error occurred while sending your message',
          duration: 5000,
        });
      }
    }
  }, [contactMutation.isSuccess, contactMutation.data, form, locale]);

  useEffect(() => {
    if (contactMutation.isError) {
      const errorMessage =
        locale === 'ar'
          ? 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.'
          : 'An unexpected error occurred. Please try again.';

      toast.error(errorMessage, {
        description: locale === 'ar' ? 'يرجى المحاولة مرة أخرى' : 'Please try again later',
        duration: 5000,
      });
    }
  }, [contactMutation.isError, contactMutation.error, locale]);

  const onSubmit = (data: ContactFormData) => {
    console.log('data', data);
    contactMutation.mutate({
      fullName: data.fullName,
      email: data.email,
      message: data.message,
    });
  };

  // Watch field values for validation
  const watchedValues = form.watch();

  // Helper function to check if field is valid
  const isFieldValid = (fieldName: keyof typeof watchedValues) => {
    return (
      form.formState.touchedFields[fieldName] &&
      !form.formState.errors[fieldName] &&
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

      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 section-fade-in'>
        {/* Name Field */}
        <FormField label={commonT('fullName')} error={form.formState.errors.fullName?.message}>
          <Input
            {...form.register('fullName')}
            type='text'
            placeholder={t('form.fullNamePlaceholder')}
            error={!!form.formState.errors.fullName}
            isValid={isFieldValid('fullName')}
            icon={
              <div
                className={cn(
                  'flex items-center justify-center w-5 h-5',
                  locale === 'ar' ? 'ml-2' : 'mr-1',
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
        <FormField label={commonT('email')} error={form.formState.errors.email?.message}>
          <Input
            {...form.register('email')}
            type='email'
            placeholder={t('form.emailPlaceholder')}
            error={!!form.formState.errors.email}
            isValid={isFieldValid('email')}
            icon={
              <div
                className={cn(
                  'flex items-center justify-center w-5 h-5',
                  locale === 'ar' ? 'ml-1' : 'mr-1',
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
        <FormField label={commonT('message')} error={form.formState.errors.message?.message}>
          <Textarea
            {...form.register('message')}
            placeholder={t('form.messagePlaceholder')}
            rows={5}
            error={!!form.formState.errors.message}
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
          disabled={contactMutation.isPending}
        >
          {contactMutation.isPending ? commonT('submitting') : t('form.submitNow')}
        </Button>
      </form>
    </div>
  );
}
