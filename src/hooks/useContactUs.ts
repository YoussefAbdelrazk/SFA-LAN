import { sendContactUs } from '@/lib/api/contact-us/contact-us.api';
import { ContactFormData } from '@/lib/validations/contact';
import { useMutation } from '@tanstack/react-query';

interface UseContactUsOptions {
  locale?: string;
}

export const useContactUs = (options?: UseContactUsOptions) => {
  return useMutation({
    mutationFn: (data: ContactFormData) => sendContactUs(data, options?.locale),
    onSuccess: data => {
      console.log('Contact message sent successfully:', data);
    },
    onError: error => {
      console.error('Failed to send contact message:', error);
    },
  });
};
