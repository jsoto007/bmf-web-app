import { STANDARDS } from '../content'
import { ShieldCheckIcon } from './Icons'
import styles from './TrustBar.module.css'

/**
 * A ruled strip under the hero that surfaces the four operating standards
 * (same copy as the Standards band) as at-a-glance badges, so the proof of
 * reliability is visible before a visitor scrolls.
 */
export default function TrustBar() {
  return (
    <section className={styles.bar} aria-label="Our standards">
      <span className={`kicker ${styles.kicker}`}>On every visit</span>
      <ul className={styles.list}>
        {STANDARDS.items.map((item) => (
          <li key={item.title} className={styles.item}>
            <ShieldCheckIcon size={22} />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
