import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vocaspeak-privacy.vercel.app',
      lastModified: new Date('2025-09-08'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}