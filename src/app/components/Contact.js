'use client'

import { useId, useState } from 'react'
import { CONTACT } from '../content'
import {
  EMPTY_SUBMISSION,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_OPTIONS,
  VOLUME_OPTIONS,
  firstNameOf,
  sanitizeSubmission,
  validateSubmission,
} from '@/lib/contact'
import { useAudience } from './AudienceContext'
import { CircleCheckIcon } from './Icons'
import styles from './Contact.module.css'

const MODES = ['org', 'patient']

export default function Contact() {
  const { mode, setMode } = useAudience()
  const uid = useId()
  const [values, setValues] = useState(EMPTY_SUBMISSION)
  const [trap, setTrap] = useState('') // honeypot; humans never see it
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed
  const [failure, setFailure] = useState('')

  const copy = CONTACT[mode]
  const isOrg = mode === 'org'
  const fieldId = (key) => `${uid}-${key}`

  const update = (key) => (event) => {
    const next = event.target.value
    setValues((current) => ({ ...current, [key]: next }))
    if (errors[key]) {
      setErrors((current) => {
        const { [key]: _removed, ...rest } = current
        return rest
      })
    }
  }

  const chooseMode = (next) => {
    setMode(next)
    setErrors({})
    setFailure('')
    if (status === 'failed') setStatus('idle')
  }

  const inputProps = (key) => ({
    id: fieldId(key),
    name: key,
    value: values[key],
    onChange: update(key),
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${fieldId(key)}-error` : undefined,
  })

  async function handleSubmit(event) {
    event.preventDefault()
    const clean = sanitizeSubmission(values)
    const found = validateSubmission(clean, mode)
    if (Object.keys(found).length) {
      setErrors(found)
      document.getElementById(fieldId(Object.keys(found)[0]))?.focus()
      return
    }

    setStatus('sending')
    setFailure('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, ...clean, website: trap }),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        if (data.fields) setErrors(data.fields)
        throw new Error(data.error || 'We could not send your request right now.')
      }
      setStatus('sent')
    } catch (error) {
      setStatus('failed')
      setFailure(error.message || 'We could not send your request right now.')
    }
  }

  function reset() {
    setValues(EMPTY_SUBMISSION)
    setTrap('')
    setErrors({})
    setFailure('')
    setStatus('idle')
  }

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className={styles.aside}>
        <span className={`kicker ${styles.kicker}`}>{CONTACT.kicker}</span>
        <h2 id="contact-title" className={styles.title}>
          {CONTACT.title}
        </h2>
        <p className={styles.lede}>{CONTACT.lede}</p>
        <div className={styles.info}>
          <a href={PHONE_HREF} className={`${styles.infoRow} tnum`}>
            <span className={styles.infoLabel}>Phone</span>
            <span className={styles.infoValue}>{PHONE_DISPLAY}</span>
          </a>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Coverage</span>
            <span className={styles.infoValue}>{CONTACT.coverage}</span>
          </div>
        </div>
      </div>

      <div className={`card ${styles.panel}`}>
        {status === 'sent' ? (
          <div className={styles.success} role="status">
            <CircleCheckIcon />
            <h3 className={styles.successTitle}>Thank you, {firstNameOf(values.name)}.</h3>
            <p className={styles.successBody}>{copy.thanks}</p>
            <div>
              <button type="button" className="btn btn-ghost" onClick={reset}>
                Send another request
              </button>
            </div>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.seg} role="radiogroup" aria-label="I am requesting for">
              {MODES.map((option) => (
                <label key={option} className={`${styles.segOpt} ${mode === option ? styles.segOn : ''}`}>
                  <input
                    type="radio"
                    name="audience"
                    value={option}
                    className={styles.segInput}
                    checked={mode === option}
                    onChange={() => chooseMode(option)}
                  />
                  {CONTACT[option].segLabel}
                </label>
              ))}
            </div>

            <div className={styles.row}>
              <Field id={fieldId('name')} label="Full name" error={errors.name}>
                <input className="input" type="text" autoComplete="name" required placeholder="Jane Doe" {...inputProps('name')} />
              </Field>
              <Field id={fieldId('phone')} label="Phone" error={errors.phone}>
                <input className="input" type="tel" autoComplete="tel" required placeholder="(555) 123-4567" {...inputProps('phone')} />
              </Field>
            </div>

            {isOrg ? (
              <div className={styles.stack}>
                <div className={styles.row}>
                  <Field id={fieldId('email')} label="Work email" error={errors.email}>
                    <input className="input" type="email" autoComplete="email" required placeholder="jane@company.com" {...inputProps('email')} />
                  </Field>
                  <Field id={fieldId('organization')} label="Organization" error={errors.organization}>
                    <input className="input" type="text" autoComplete="organization" placeholder="Company or practice" {...inputProps('organization')} />
                  </Field>
                </div>
                <div className={styles.row}>
                  <Field id={fieldId('service')} label="Service needed" error={errors.service}>
                    <select className="input" {...inputProps('service')}>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id={fieldId('volume')} label="Estimated draws per month" error={errors.volume}>
                    <select className="input" {...inputProps('volume')}>
                      {VOLUME_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
              </div>
            ) : (
              <div className={styles.row}>
                <Field id={fieldId('address')} label="Visit address" error={errors.address}>
                  <input className="input" type="text" autoComplete="street-address" placeholder="Street, city, ZIP" {...inputProps('address')} />
                </Field>
                <Field id={fieldId('date')} label="Preferred date" error={errors.date}>
                  <input className="input" type="date" min={todayIso()} {...inputProps('date')} />
                </Field>
              </div>
            )}

            <Field id={fieldId('notes')} label={copy.notesLabel} error={errors.notes}>
              <textarea className="input" rows={3} placeholder={copy.notesPlaceholder} {...inputProps('notes')} />
            </Field>

            {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
            <div className={styles.trap} aria-hidden="true">
              <label htmlFor={fieldId('website')}>Website</label>
              <input id={fieldId('website')} name="website" type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
            </div>

            {status === 'failed' ? (
              <p className={styles.alert} role="alert">
                {failure} Please try again, or call{' '}
                <a href={PHONE_HREF} className="tnum">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            ) : null}

            <button type="submit" className={`btn btn-primary btn-block ${styles.submit}`} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : copy.cta}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function todayIso() {
  const now = new Date()
  const offsetMs = now.getTimezoneOffset() * 60_000
  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 10)
}
