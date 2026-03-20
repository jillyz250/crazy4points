import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://crazy4points.com';

  return [
    '',
    '/about-me',
    '/tools/transfer-bonus-tracker',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date('2026-03-20T00:00:00Z'),
  }));
}
