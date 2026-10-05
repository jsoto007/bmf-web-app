/** Site-wide constants shared by metadata, structured data, robots, sitemap and llms.txt. */

export const SITE_URL = 'https://burdiermobilephlebotomy.com'
export const SITE_NAME = 'Burdier Mobile Phlebotomy'
export const LEGAL_NAME = 'Burdier Mobile Phlebotomy Corp.'

/** ≤ 60 characters so it is not truncated in search results. */
export const SEO_TITLE = 'Burdier Mobile Phlebotomy | Mobile Blood Draws in NY, NJ & CT'

/** ≤ 155 characters for the same reason. */
export const SEO_DESCRIPTION =
  'Certified mobile phlebotomy for employers, research teams, practices, care facilities and patients at home. Serving New York, New Jersey and Connecticut.'

export const KEYWORDS = [
  'mobile phlebotomy',
  'mobile phlebotomist',
  'at-home blood draw',
  'in-home blood draw',
  'corporate wellness blood screening',
  'clinical research specimen collection',
  'mobile specimen collection',
  'concierge blood draw',
  'care facility phlebotomy',
  'New York',
  'New Jersey',
  'Connecticut',
  'Tri-State Area',
]

/** ISO dates for structured data and the sitemap. Bump PAGE_MODIFIED when page content changes. */
export const PAGE_PUBLISHED = '2026-10-01'
export const PAGE_MODIFIED = '2026-10-08'

export const HERO_IMAGE = {
  url: `${SITE_URL}/bmfBackground.jpg`,
  width: 2000,
  height: 1333,
  caption: 'A Burdier phlebotomist drawing a blood sample during a home visit',
}

export const STATES_SERVED = ['New York', 'New Jersey', 'Connecticut']
export const STATE_CODES = ['US-NY', 'US-NJ', 'US-CT']

export const OG_IMAGE = { url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Burdier Mobile Phlebotomy — the lab, brought to your people. Serving NY, NJ and CT.' }
