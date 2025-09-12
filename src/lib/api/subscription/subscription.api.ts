import { BaseApi } from '@/lib/config';
import {
  SubscriptionApiResponse,
  SubscriptionParams,
  SubscriptionType,
} from '@/types/subscription';

export const getSubscriptions = async (
  type: SubscriptionType,
  params: SubscriptionParams = {},
  locale?: string,
): Promise<SubscriptionApiResponse> => {
  const api = await BaseApi(locale);

  const searchParams = new URLSearchParams();
  if (params.pageNumber) searchParams.append('pageNumber', params.pageNumber.toString());
  if (params.pageSize) searchParams.append('pageSize', params.pageSize.toString());

  const queryString = searchParams.toString();
  const url = `/api/Subscription/${type}${queryString ? `?${queryString}` : ''}`;

  const response = await api.get(url);
  return response.data;
};

// Convenience functions for specific subscription types
export const getMonthlySubscriptions = async (
  params: SubscriptionParams = {},
  locale?: string,
): Promise<SubscriptionApiResponse> => {
  return getSubscriptions('monthly', params, locale);
};

export const getYearlySubscriptions = async (
  params: SubscriptionParams = {},
  locale?: string,
): Promise<SubscriptionApiResponse> => {
  return getSubscriptions('yearly', params, locale);
};
