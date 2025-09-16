import { BaseApi } from '@/lib/config';
import { ContactFormData } from '@/lib/validations/contact';

export const sendContactUs = async (data: ContactFormData, locale?: string) => {
  const api = await BaseApi(locale);
  const response = await api.post(`/api/ContactUs`, data);
  return response.data;
};


export const getContactUs = async (locale?: string) => {
  const api = await BaseApi(locale);
  const response = await api.get(`/api/ContactUs`);
  return response.data;
};
