'use client'

import { useState } from 'react'
import { FAQ } from '../content'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/contact'
import styles from './Faq.module.css'

export default function Faq() {
  // Index of the open item; -1 means all closed. First item open by default.
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className={`section ${styles.faq}`} aria-labelledby="faq-title">
      <div>
        <span className={`kicker ${styles.kicker}`}>{FAQ.kicker}</span>
        <h2 id="faq-title" className={`display-2 ${styles.title}`}>
          {FAQ.title}
        </h2>
        <p className={styles.note}>
          Something else? Call{' '}
          <a href={PHONE_HREF} className="tnum">
            {PHONE_DISPLAY}
          </a>{' '}
          and speak with our team directly.
        </p>
      </div>

      <div className={styles.list}>
        {FAQ.items.map((item, index) => {
          const isOpen = open === index
          const triggerId = `faq-trigger-${index}`
          const panelId = `faq-panel-${index}`
          return (
            <div key={item.q} className={styles.item}>
              <h3 className={styles.q}>
                <button
                  type="button"
                  id={triggerId}
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <span className={styles.sign} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!isOpen}>
                <p className={styles.a}>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
