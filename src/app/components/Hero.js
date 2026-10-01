import Image from 'next/image'
import heroPhoto from '../../../public/bmfBackground.jpg'
import { HERO } from '../content'
import ContactLink from './ContactLink'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.meta}>
        <span className={styles.metaAccent}>{HERO.metaLeft}</span>
        <span>{HERO.metaRight}</span>
      </div>

      <h1 id="hero-title" className={styles.title}>
        <span className={styles.line}>The lab, brought</span>
        <span className={`${styles.line} ${styles.lineIndent}`}>
          to <span className={styles.accent}>your people.</span>
        </span>
      </h1>

      <div className={styles.grid}>
        <figure className={styles.figure}>
          <div className="plate">
            <Image
              src={heroPhoto}
              alt="A Burdier phlebotomist drawing a blood sample during a home visit"
              className={styles.photo}
              priority
              sizes="(min-width: 980px) 50vw, 100vw"
            />
          </div>
          <figcaption className={styles.caption}>
            <span>{HERO.plateLabel}</span>
            <span>{HERO.plateCaption}</span>
          </figcaption>
        </figure>

        <div className={styles.aside}>
          <p className={styles.lede}>{HERO.lede}</p>
          <div className={styles.actions}>
            <ContactLink mode="org" className="btn btn-primary btn-lg">
              Request a proposal
            </ContactLink>
            <ContactLink mode="patient" className="btn btn-ghost btn-lg">
              Book a home visit
            </ContactLink>
          </div>
          <dl className={styles.facts}>
            {HERO.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt className={styles.factLabel}>{fact.label}</dt>
                <dd className={styles.factFigure}>{fact.figure}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
