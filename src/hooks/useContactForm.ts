import {
  ContactFormData,
  createContactFormSchema,
} from '@/lib/validations/contact';
import { ContactSubmissionResult, submitContactForm } from '@/services/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function useContactForm() {
  const locale = useLocale();
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] =
    useState<ContactSubmissionResult | null>(null);

  // Create locale-specific validation schema with translation function
  const contactFormSchema = createContactFormSchema(locale, (key: string) => {
    try {
      return t(key);
    } catch {
      return key; // Fallback to key if translation not found
    }
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onChange', // Validate on change for better UX
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const result = await submitContactForm(data);
      setSubmissionResult(result);

      if (result.success) {
        form.reset(); // Reset form on successful submission
      }
    } catch {
      setSubmissionResult({
        success: false,
        message:
          locale === 'ar'
            ? 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.'
            : 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearSubmissionResult = () => {
    setSubmissionResult(null);
  };

  return {
    form,
    isSubmitting,
    submissionResult,
    onSubmit: form.handleSubmit(onSubmit),
    clearSubmissionResult,
    // Expose form methods for convenience
    register: form.register,
    formState: form.formState,
    watch: form.watch,
    setValue: form.setValue,
    getValues: form.getValues,
  };
}
