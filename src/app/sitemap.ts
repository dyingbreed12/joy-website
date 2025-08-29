// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.teacherada.com', // Replace with your domain
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}