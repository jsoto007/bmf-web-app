'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/burdier-logo.webp'
import { NAV_LINKS } from '../content'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/contact'
import ContactLink from './ContactLink'
import { CloseIcon, MenuIcon } from './Icons'
import styles from './Nav.module.css'

const DESKTOP_QUERY = '(min-width: 860px)'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // Close the mobile menu on Escape and whenever the viewport grows past the
  // breakpoint, so a rotated tablet never keeps a stale open panel.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && close()
    const media = window.matchMedia(DESKTOP_QUERY)
    const onMedia = (event) => event.matches && close()
    window.addEventListener('keydown', onKey)
    media.addEventListener('change', onMedia)
    return () => {
      window.removeEventListener('keydown', onKey)
      media.removeEventListener('change', onMedia)
    }
  }, [open])

  return (
    <header className={styles.nav} id="top">
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Burdier Mobile Phlebotomy — back to top">
          <Image src={logo} alt="" className={styles.logo} priority />
          <span className={styles.wordmark} aria-hidden="true">
            <span className={styles.name}>Burdier</span>
            <span className={styles.tagline}>Mobile Phlebotomy</span>
          </span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <a href={PHONE_HREF} className={`${styles.link} tnum`}>
            {PHONE_DISPLAY}
          </a>
          <ContactLink mode="org" className={`btn btn-primary ${styles.cta}`}>
            Request a proposal
          </ContactLink>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div id="mobile-menu" className={styles.menu} hidden={!open}>
        <nav className={styles.menuInner} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.menuLink} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href={PHONE_HREF} className={`${styles.menuLink} ${styles.menuPhone} tnum`} onClick={close}>
            {PHONE_DISPLAY}
          </a>
          <ContactLink mode="org" className={`btn btn-primary btn-lg ${styles.menuCta}`} onClick={close}>
            Request a proposal
          </ContactLink>
        </nav>
      </div>
    </header>
  )
}
