import { getPrivacy } from '@/lib/api/privacy/privacy.api';
import { PrivacyApiResponse } from '@/types/privacy';
import { useQuery } from '@tanstack/react-query';

interface UsePrivacyOptions {
  locale?: string;
  enabled?: boolean;
}

export const usePrivacy = (options?: UsePrivacyOptions) => {
  return useQuery<PrivacyApiResponse, Error>({
    queryKey: ['privacy', options?.locale],
    queryFn: () => getPrivacy(options?.locale),
    enabled: options?.enabled ?? true,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};
