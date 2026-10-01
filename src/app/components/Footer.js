import Image from 'next/image'
import logo from '../../../public/burdier-logo.webp'
import { FOOTER } from '../content'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/contact'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <span className={styles.brand}>
            <Image src={logo} alt="Burdier Mobile Phlebotomy logo" className={styles.logo} />
            <span className={styles.name}>Burdier</span>
          </span>
          <nav className={styles.links} aria-label="Footer">
            {FOOTER.links.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
            <a href={PHONE_HREF} className={`${styles.phone} tnum`}>
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <span>
            © {year} {FOOTER.legal}
          </span>
          <span>{FOOTER.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
