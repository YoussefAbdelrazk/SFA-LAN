import {
  getMonthlySubscriptions,
  getSubscriptions,
  getYearlySubscriptions,
} from '@/lib/api/subscription/subscription.api';
import {
  SubscriptionApiResponse,
  SubscriptionParams,
  SubscriptionType,
} from '@/types/subscription';
import { useQuery } from '@tanstack/react-query';

interface UseSubscriptionsOptions {
  type: SubscriptionType;
  params?: SubscriptionParams;
  locale?: string;
  enabled?: boolean;
}

export const useSubscriptions = (options: UseSubscriptionsOptions) => {
  return useQuery<SubscriptionApiResponse, Error>({
    queryKey: ['subscriptions', options.type, options.params, options.locale],
    queryFn: () => getSubscriptions(options.type, options.params, options.locale),
    enabled: options.enabled ?? true,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

interface UseMonthlySubscriptionsOptions {
  params?: SubscriptionParams;
  locale?: string;
  enabled?: boolean;
}

export const useMonthlySubscriptions = (options?: UseMonthlySubscriptionsOptions) => {
  return useQuery<SubscriptionApiResponse, Error>({
    queryKey: ['subscriptions', 'monthly', options?.params, options?.locale],
    queryFn: () => getMonthlySubscriptions(options?.params, options?.locale),
    enabled: options?.enabled ?? true,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

interface UseYearlySubscriptionsOptions {
  params?: SubscriptionParams;
  locale?: string;
  enabled?: boolean;
}

export const useYearlySubscriptions = (options?: UseYearlySubscriptionsOptions) => {
  return useQuery<SubscriptionApiResponse, Error>({
    queryKey: ['subscriptions', 'yearly', options?.params, options?.locale],
    queryFn: () => getYearlySubscriptions(options?.params, options?.locale),
    enabled: options?.enabled ?? true,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};
