import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/constants/data'

const BASE_URL = 'https://eloi-charly.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = PROJECTS.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectPages,
  ]
}
