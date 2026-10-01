# Burdier Mobile Phlebotomy — website

Single-page marketing site for [burdiermobilephlebotomy.com](https://burdiermobilephlebotomy.com), built with Next.js 14 (App Router), React 18 and CSS Modules. It implements the v3 landing-page design handoff: one page aimed at **organizations** (who request a proposal) and **patients & families** (who book a home visit).

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. `npm run build && npm start` serves the production build; `npm run lint` runs ESLint.

## Contact form delivery

The form at `#contact` posts to `src/app/api/contact/route.js`, which validates the submission server-side and delivers it through one of two channels. Copy `.env.example` to `.env.local` and set **one**:

| Channel | Variables |
| --- | --- |
| Webhook (Zapier, Make, a CRM…) | `CONTACT_WEBHOOK_URL` — receives the submission as JSON |
| Email via [Resend](https://resend.com) | `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (comma-separate for several), `CONTACT_FROM_EMAIL` |

With neither set, development logs each submission to the terminal and reports success; production returns an error and the form shows the phone number as a fallback, so an unconfigured deploy never silently drops a lead.

Validation rules live in `src/lib/contact.js` and are shared by the form and the API route. A hidden honeypot field drops most bot submissions.

## SEO and AI readability

- `src/lib/site.js` holds the canonical URL, title, description and keywords; `src/app/layout.js` turns them into metadata (Open Graph, Twitter card, robots directives, canonical).
- `src/app/robots.js`, `sitemap.js` and `manifest.js` generate `/robots.txt`, `/sitemap.xml` and `/manifest.webmanifest`. Robots explicitly allows the major AI crawlers and blocks only `/api/`.
- `src/lib/seo.js` builds a Schema.org graph (MedicalBusiness, WebSite, WebPage, FAQPage, HowTo and the service catalog) from `content.js`, rendered as JSON-LD on the page.
- `/llms.txt` and `/llms-full.txt` (route handlers in `src/app/`) publish the site as plain Markdown for AI assistants, generated from the same `content.js`, so they never drift from the page.
- `public/og-image.png` is the 1200×630 social preview. Regenerate it if the headline changes.
- After claiming the domain in Google Search Console, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to emit the verification tag.

## Where things live

```
src/app/
  layout.js          fonts (Cormorant Garamond, Lora via next/font), metadata
  page.js            section order + JSON-LD
  robots.js, sitemap.js, manifest.js
  llms.txt/, llms-full.txt/   plain-text routes for AI assistants
  globals.css        design tokens, base reset, shared classes (.btn, .card, .input, .kicker…)
  content.js         all page copy
  components/        one component + CSS module per section
  api/contact/       form endpoint
src/lib/contact.js   form schema + validation shared by client and server
src/lib/site.js      canonical URL, SEO title/description, keywords
src/lib/seo.js       JSON-LD graph and llms.txt generators
public/              hero photo, logo, social image
```

Design tokens (colors, type, spacing, shadows) are CSS custom properties on `:root` in `globals.css`; they match the "Classical" design system from the handoff. Every multi-column layout uses `auto-fit`/`minmax` grids and fluid `clamp()` type, so the only explicit breakpoint is the mobile navigation (below 860px).

## Content to confirm with the client

Several claims were written for the redesign and are not on the previous site:

- The four service lines, and the program and coordinator details.
- "Within one business day" response time.
- "Most requested" on Recurring rounds.
- The chain-of-custody and privacy statements.

The "3×" and "40+ hours" figures come from SotoDev's public case study on Burdier (2024).
