import { DOORS } from '../content'
import ContactLink from './ContactLink'
import { ArrowRightIcon } from './Icons'
import styles from './Doors.module.css'

export default function Doors() {
  return (
    <section className={styles.doors} aria-label="Who we serve">
      {DOORS.map((door) => (
        <ContactLink key={door.mode} mode={door.mode} className={`card ${styles.door}`}>
          <span className="kicker">{door.kicker}</span>
          <h2 className={styles.title}>{door.title}</h2>
          <p className={styles.body}>{door.body}</p>
          <span className={styles.footer}>
            {door.cta}
            <ArrowRightIcon />
          </span>
        </ContactLink>
      ))}
    </section>
  )
}
