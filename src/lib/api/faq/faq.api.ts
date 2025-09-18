import { BaseApi } from '@/lib/config';
import { FAQApiResponse } from '@/types/faq';

export const getFAQ = async (locale?: string): Promise<FAQApiResponse> => {
  const api = await BaseApi(locale);
  const response = await api.get(`/api/Faq`);
  return response.data;
};
