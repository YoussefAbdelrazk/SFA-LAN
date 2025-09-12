import axios from 'axios';

export const BaseApi = async (locale?: string) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // Add Accept-Language header if locale is provided
  if (locale) {
    headers['Accept-Language'] = locale;
  }

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers,
  });
};
