'use server';
import { cookies } from 'next/headers';

const COOKIE_CONFIG = {
  httpOnly: true,

  path: '/',
  secure: true,
  sameSite: 'strict' as const,
};

export const getToken = async () => {
  return (await cookies()).get('token')?.value || null;
};

export const setToken = async (token: string) => {
  (await cookies()).set('token', token, COOKIE_CONFIG);
};

export const removeToken = async () => {
  (await cookies()).delete('token');
};
