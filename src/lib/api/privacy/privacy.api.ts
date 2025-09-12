import { BaseApi } from '@/lib/config';
import { PrivacyApiResponse } from '@/types/privacy';

export const getPrivacy = async (locale?: string): Promise<PrivacyApiResponse> => {
  const api = await BaseApi(locale);
  const response = await api.get('/api/Privacy');
  return response.data;
};
