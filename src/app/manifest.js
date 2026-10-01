import { SEO_DESCRIPTION, SITE_NAME } from '@/lib/site'

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: 'Burdier',
    description: SEO_DESCRIPTION,
    start_url: '/',
    display: 'browser',
    background_color: '#f3f2f2',
    theme_color: '#f3f2f2',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
