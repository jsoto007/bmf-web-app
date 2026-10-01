import { STANDARDS } from '../content'
import { ShieldCheckIcon } from './Icons'
import styles from './Standards.module.css'

export default function Standards() {
  return (
    <section id="standards" className={styles.band} aria-labelledby="standards-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <div>
            <span className={`kicker kicker--light ${styles.kicker}`}>{STANDARDS.kicker}</span>
            <h2 id="standards-title" className="display-2">
              {STANDARDS.title}
            </h2>
          </div>
          <p className={styles.lede}>{STANDARDS.lede}</p>
        </div>

        <dl className={styles.figures}>
          {STANDARDS.figures.map((item) => (
            <div key={item.figure} className={styles.figure}>
              <dd className={`${styles.big} ${item.gold ? styles.gold : ''}`}>{item.figure}</dd>
              <dt className={styles.figLabel}>{item.label}</dt>
            </div>
          ))}
        </dl>

        <ul className={styles.grid}>
          {STANDARDS.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <ShieldCheckIcon />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemBody}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
