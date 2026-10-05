import { DOORS, FAQ, HERO, PROCESS, PROGRAMS, SERVICES, STANDARDS } from '@/app/content'
import { PHONE_DISPLAY } from '@/lib/contact'
import { HERO_IMAGE, LEGAL_NAME, OG_IMAGE, PAGE_MODIFIED, PAGE_PUBLISHED, SEO_DESCRIPTION, SEO_TITLE, SITE_NAME, SITE_URL, STATES_SERVED, STATE_CODES } from '@/lib/site'

const ORG_ID = `${SITE_URL}/#organization`
const SITE_ID = `${SITE_URL}/#website`
const PAGE_ID = `${SITE_URL}/#webpage`
const PHONE_E164 = '+1-516-508-1898'

/**
 * Schema.org graph for the landing page. Built from the same content module
 * the page renders, so search engines and AI assistants see what visitors see.
 */
export function structuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalBusiness', 'LocalBusiness'],
        '@id': ORG_ID,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        url: SITE_URL,
        telephone: PHONE_E164,
        description: SEO_DESCRIPTION,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/burdier-logo.webp`, width: 204, height: 276 },
        image: OG_IMAGE.url,
        address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
        areaServed: STATES_SERVED.map((name) => ({ '@type': 'State', name })),
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: PHONE_E164,
          contactType: 'sales',
          areaServed: STATE_CODES,
          availableLanguage: 'English',
        },
        knowsAbout: ['Phlebotomy', 'Specimen collection', 'Corporate wellness screening', 'Clinical research sample collection'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Mobile phlebotomy services',
          itemListElement: SERVICES.rows.map((row) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: row.title,
              description: row.body,
              serviceType: 'Mobile phlebotomy',
              provider: { '@id': ORG_ID },
              areaServed: STATES_SERVED.map((name) => ({ '@type': 'State', name })),
              audience: { '@type': 'Audience', audienceType: row.audience },
            },
          })),
        },
        makesOffer: PROGRAMS.plans.map((plan) => ({
          '@type': 'Offer',
          name: plan.name,
          description: plan.bestFor,
          itemOffered: { '@type': 'Service', name: plan.name, serviceType: 'Mobile phlebotomy', provider: { '@id': ORG_ID } },
        })),
      },
      {
        '@type': 'WebSite',
        '@id': SITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: 'en-US',
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'WebPage',
        '@id': PAGE_ID,
        url: `${SITE_URL}/`,
        name: SEO_TITLE,
        description: SEO_DESCRIPTION,
        inLanguage: 'en-US',
        datePublished: PAGE_PUBLISHED,
        dateModified: PAGE_MODIFIED,
        isPartOf: { '@id': SITE_ID },
        about: { '@id': ORG_ID },
        primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height },
        image: [
          { '@type': 'ImageObject', url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height },
          { '@type': 'ImageObject', url: HERO_IMAGE.url, width: HERO_IMAGE.width, height: HERO_IMAGE.height, caption: HERO_IMAGE.caption },
        ],
        mainEntity: { '@id': ORG_ID },
        potentialAction: {
          '@type': 'CommunicateAction',
          name: 'Request a proposal or book a home visit',
          target: `${SITE_URL}/#contact`,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        isPartOf: { '@id': PAGE_ID },
        mainEntity: FAQ.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'HowTo',
        '@id': `${SITE_URL}/#process`,
        name: PROCESS.title,
        description: 'How a Burdier mobile phlebotomy engagement runs, from the first call to delivery at the lab.',
        step: PROCESS.steps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.title,
          text: step.body,
        })),
      },
    ],
  }
}

/** Renders the JSON-LD graph. Lives in the body so it ships in the static HTML. */
export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to embed; escape "<" so a value can never close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()).replace(/</g, '\\u003c') }}
    />
  )
}

/* ── llms.txt ──────────────────────────────────────────────────────────── */

const hr = (rows) => rows.map((r) => `- ${r}`).join('\n')

/** Short index per https://llmstxt.org — what the site is, and where the detail lives. */
export function llmsIndex() {
  return `# ${SITE_NAME}

> ${SEO_DESCRIPTION}

${SITE_NAME} (${LEGAL_NAME}) is a mobile specimen-collection company based in New York, NY. Certified phlebotomists travel to workplaces, research sites, clinics, care facilities and private homes across New York, New Jersey and Connecticut, collect blood samples against the client's requisitions, and deliver them to the client's laboratory with a documented hand-off. Phone: ${PHONE_DISPLAY}.

## Who it is for

${hr(DOORS.map((d) => `**${d.kicker}:** ${d.body}`))}

## Services

${hr(SERVICES.rows.map((s) => `**${s.title}** (${s.audience}): ${s.body}`))}

## Programs

${hr(PROGRAMS.plans.map((p) => `**${p.name}** — ${p.bestFor}`))}

## Contact

- Phone: ${PHONE_DISPLAY}
- Request a proposal or book a home visit: ${SITE_URL}/#contact
- Coverage: ${STATES_SERVED.join(', ')}

## Resources

- [Full page content](${SITE_URL}/llms-full.txt): every section of the site as plain text
- [Website](${SITE_URL}/): the landing page itself
`
}

/** The whole page as Markdown, in reading order. */
export function llmsFull() {
  const sections = [
    `# ${SITE_NAME}\n\n> ${SEO_DESCRIPTION}\n\nSource: ${SITE_URL}/ · Phone: ${PHONE_DISPLAY} · Coverage: ${STATES_SERVED.join(' · ')}`,

    `## The lab, brought to your people.\n\n${HERO.lede}\n\n${hr(HERO.facts.map((f) => `**${f.figure}** — ${f.label}`))}`,

    `## Who we serve\n\n${DOORS.map((d) => `### ${d.kicker}: ${d.title}\n\n${d.body}\n\nCall to action: ${d.cta}.`).join('\n\n')}`,

    `## ${SERVICES.title}\n\n${SERVICES.lede}\n\n${SERVICES.rows
      .map((s) => `### ${s.numeral}. ${s.title}\n\n${s.body}\n\nAudience: ${s.audience}.`)
      .join('\n\n')}`,

    `## ${PROCESS.title}\n\n${PROCESS.steps.map((s, i) => `${i + 1}. **${s.title}.** ${s.body}`).join('\n')}`,

    `## ${STANDARDS.title}\n\n${STANDARDS.lede}\n\n${hr(STANDARDS.figures.map((f) => `**${f.figure}** — ${f.label}`))}\n\n${STANDARDS.items
      .map((i) => `- **${i.title}.** ${i.body}`)
      .join('\n')}`,

    `## ${PROGRAMS.title}\n\n${PROGRAMS.lede}\n\n${PROGRAMS.plans
      .map(
        (p) =>
          `### ${p.name}${p.tag ? ` (${p.tag})` : ''}\n\nFor: ${p.kicker}. ${p.bestFor}\n\n${p.items.map((i) => `- ${i}`).join('\n')}\n\nCall to action: ${p.cta}.`,
      )
      .join('\n\n')}`,

    `## Frequently asked questions\n\n${FAQ.items.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}`,

    `## Contact\n\nTell us about your team, sites and volume and we respond with a scoped proposal, usually within one business day. Organizations request a proposal; patients and families request a home visit.\n\n- Phone: ${PHONE_DISPLAY}\n- Form: ${SITE_URL}/#contact\n- Coverage: ${STATES_SERVED.join(', ')}\n\n© ${new Date().getFullYear()} ${LEGAL_NAME} · New York, NY`,
  ]
  return sections.join('\n\n') + '\n'
}
