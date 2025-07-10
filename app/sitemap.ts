import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sherife-franca.com';
  const locales = ['en', 'ar', 'fr'];
  const pages = ['', '/about', '/contact', '/faq', '/privacy-policy'];

  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each locale and page
  locales.forEach((locale) => {
    pages.forEach((page) => {
      const url = `${baseUrl}/${locale}${page}`;
      const priority = page === '' ? 1.0 : 0.8;
      const changeFrequency = page === '' ? 'daily' : 'weekly';

      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  });

  return sitemap;
}
