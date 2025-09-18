import { getFAQ } from '@/lib/api/faq/faq.api';
import { FAQApiResponse } from '@/types/faq';
import { useQuery } from '@tanstack/react-query';

interface UseFAQOptions {
  locale?: string;
}

export const useFAQ = (options?: UseFAQOptions) => {
  return useQuery<FAQApiResponse, Error>({
    queryKey: ['faq', options?.locale],
    queryFn: () => getFAQ(options?.locale),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    retry: 2,
  });
};
