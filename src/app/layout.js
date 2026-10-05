import localFont from 'next/font/local'
import { KEYWORDS, LEGAL_NAME, OG_IMAGE, SEO_DESCRIPTION, SEO_TITLE, SITE_NAME, SITE_URL } from '@/lib/site'
import './globals.css'

// Self-hosted variable fonts (see src/app/fonts/README.md). Weights 400 and
// 600 are the only ones the design uses; nothing is synthesised.
const cormorant = localFont({
  src: './fonts/CormorantGaramond.woff2',
  weight: '400 600',
  style: 'normal',
  display: 'swap',
  variable: '--font-cormorant',
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: 'Times New Roman', // size-adjusted serif fallback keeps layout stable while the font loads
})

const lora = localFont({
  src: './fonts/Lora.woff2',
  weight: '400 600',
  style: 'normal',
  display: 'swap',
  variable: '--font-lora',
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: 'Times New Roman',
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: LEGAL_NAME, url: SITE_URL }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  category: 'Healthcare',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
    languages: { 'en-US': '/', 'x-default': '/' },
    types: { 'text/plain': '/llms.txt' },
  },
  appleWebApp: { title: 'Burdier', statusBarStyle: 'default' },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION after claiming the site in Search Console.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    'geo.region': 'US-NY',
    'geo.placename': 'New York',
  },
}

export const viewport = {
  themeColor: '#f3f2f2',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
