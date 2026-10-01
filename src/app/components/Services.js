import { SERVICES } from '../content'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`} aria-labelledby="services-title">
      <div className="intro">
        <div>
          <span className="kicker">{SERVICES.kicker}</span>
          <h2 id="services-title" className="display-2">
            {SERVICES.title}
          </h2>
        </div>
        <p className="lede">{SERVICES.lede}</p>
      </div>

      <div className={styles.list}>
        {SERVICES.rows.map((row) => (
          <article key={row.numeral} className={styles.row}>
            <span className={styles.numeral} aria-hidden="true">
              {row.numeral}
            </span>
            <div className={styles.cells}>
              <h3 className={styles.title}>{row.title}</h3>
              <p className={styles.body}>{row.body}</p>
              <span className={styles.audience}>{row.audience}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
