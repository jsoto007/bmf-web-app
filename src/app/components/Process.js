import { PROCESS } from '../content'
import styles from './Process.module.css'

export default function Process() {
  return (
    <section id="process" className={`section ${styles.process}`} aria-labelledby="process-title">
      <span className={`kicker ${styles.kicker}`}>{PROCESS.kicker}</span>
      <h2 id="process-title" className={`display-2 ${styles.title}`}>
        {PROCESS.title}
      </h2>

      <ol className={styles.steps}>
        {PROCESS.steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.node} aria-hidden="true" />
            <span className={styles.label}>Step {String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.body}>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
