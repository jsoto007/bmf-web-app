import Link from 'next/link'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/contact'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

/** Real 404 status with a way back, so a bad link never becomes a soft-404 in search. */
export default function NotFound() {
  return (
    <main id="main" className="container" style={{ padding: 'clamp(80px, 12vw, 160px) 0', minHeight: '60vh' }}>
      <span className="kicker" style={{ marginBottom: 24 }}>
        Error 404
      </span>
      <h1 className="display-2" style={{ marginBottom: 24 }}>
        That page isn&apos;t here.
      </h1>
      <p className="lede" style={{ marginBottom: 36 }}>
        The address may be out of date. Everything about Burdier Mobile Phlebotomy lives on one page, so the home page
        is the place to start.
      </p>
      <p style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
        <Link href="/" className="btn btn-primary btn-lg">
          Back to the home page
        </Link>
        <a href={PHONE_HREF} className="btn btn-ghost btn-lg tnum">
          Call {PHONE_DISPLAY}
        </a>
      </p>
    </main>
  )
}
