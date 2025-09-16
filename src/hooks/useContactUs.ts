import { getContactUs, sendContactUs } from '@/lib/api/contact-us/contact-us.api';
import { ContactFormData } from '@/lib/validations/contact';
import { useMutation, useQuery } from '@tanstack/react-query';

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

export const useGetContactUs = (options?: UseContactUsOptions) => {
  return useQuery({
    queryKey: ['contactUs'],
    queryFn: () => getContactUs(options?.locale),
  });
};
