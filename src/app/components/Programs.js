import { PROGRAMS } from '../content'
import ContactLink from './ContactLink'
import { CheckIcon } from './Icons'
import styles from './Programs.module.css'

export default function Programs() {
  return (
    <section id="engage" className={`section ${styles.programs}`} aria-labelledby="programs-title">
      <div className="intro">
        <div>
          <span className="kicker">{PROGRAMS.kicker}</span>
          <h2 id="programs-title" className="display-2">
            {PROGRAMS.title}
          </h2>
        </div>
        <p className="lede">{PROGRAMS.lede}</p>
      </div>

      <div className={styles.grid}>
        {PROGRAMS.plans.map((plan) => (
          <article
            key={plan.name}
            className={`card ${styles.plan} ${plan.featured ? styles.featured : ''}`}
            aria-labelledby={`plan-${plan.mode}-${plan.name.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <div className={styles.head}>
              <span className="kicker">{plan.kicker}</span>
              {plan.tag ? <span className="tag-outline">{plan.tag}</span> : null}
            </div>
            <h3 id={`plan-${plan.mode}-${plan.name.replace(/\s+/g, '-').toLowerCase()}`} className={styles.name}>
              {plan.name}
            </h3>
            <p className={styles.best}>{plan.bestFor}</p>
            <ul className={styles.items}>
              {plan.items.map((item) => (
                <li key={item} className={styles.item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ContactLink mode={plan.mode} className={`btn btn-primary btn-block ${styles.cta}`}>
              {plan.cta}
            </ContactLink>
          </article>
        ))}
      </div>
    </section>
  )
}
