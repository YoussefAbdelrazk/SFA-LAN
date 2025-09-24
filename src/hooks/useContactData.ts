import { getContactUs } from '@/lib/api/contact-us/contact-us.api';
import { useQuery } from '@tanstack/react-query';

export const useContactData = (locale?: string) => {
  return useQuery({
    queryKey: ['contact-data', locale],
    queryFn: () => getContactUs(locale),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Helper function to extract WhatsApp number from contact data
export const getHotlineNumber = (
  contactData: { hotline?: string; phone?: string } | undefined,
): string => {
  // Assuming the API returns contact data with a whatsappNumber field
  // Adjust this based on your actual API response structure
  return contactData?.hotline || contactData?.hotline || '+1234567890';
};
