import { HERO_IMAGE, OG_IMAGE, PAGE_MODIFIED, SITE_URL } from '@/lib/site'

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: PAGE_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
      images: [OG_IMAGE.url, HERO_IMAGE.url],
    },
  ]
}
