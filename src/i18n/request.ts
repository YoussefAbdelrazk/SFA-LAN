import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'ar', 'fr'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // If locale is undefined, use default locale
  const resolvedLocale = locale || defaultLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(resolvedLocale as Locale)) {
    throw new Error(
      `Locale '${resolvedLocale}' is not supported. Supported locales: ${locales.join(
        ', '
      )}`
    );
  }

  return {
    messages: (await import(`./locales/${resolvedLocale}.json`)).default,
    locale: resolvedLocale as string,
  };
});
