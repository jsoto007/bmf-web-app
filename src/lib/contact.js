/**
 * Contact form schema shared by the client form and the API route, so the
 * two can never disagree about what counts as a valid submission.
 */

export const PHONE_DISPLAY = '(516) 508-1898'
export const PHONE_HREF = 'tel:+15165081898'

export const SERVICE_OPTIONS = [
  'Corporate wellness screening',
  'Clinical research collection',
  'Physician & lab partnership',
  'Care facility rounds',
  'Something else',
]

export const VOLUME_OPTIONS = ['Under 50', '50 – 250', '250 – 1,000', '1,000+']

export const MAX_LENGTH = {
  name: 120,
  phone: 40,
  email: 160,
  organization: 160,
  address: 240,
  date: 10,
  notes: 2000,
}

export const EMPTY_SUBMISSION = {
  name: '',
  phone: '',
  email: '',
  organization: '',
  service: SERVICE_OPTIONS[0],
  volume: VOLUME_OPTIONS[0],
  address: '',
  date: '',
  notes: '',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function normalizeMode(mode) {
  return mode === 'patient' ? 'patient' : 'org'
}

/** Trim and clamp every text field; drop anything that is not a string. */
export function sanitizeSubmission(input = {}) {
  const out = {}
  for (const key of Object.keys(EMPTY_SUBMISSION)) {
    const raw = input[key]
    out[key] = typeof raw === 'string' ? raw.trim().slice(0, MAX_LENGTH[key] ?? 500) : ''
  }
  if (!SERVICE_OPTIONS.includes(out.service)) out.service = ''
  if (!VOLUME_OPTIONS.includes(out.volume)) out.volume = ''
  return out
}

/** Returns a { fieldName: message } map. An empty object means valid. */
export function validateSubmission(values, mode) {
  const errors = {}
  const isOrg = normalizeMode(mode) === 'org'

  if (!values.name) errors.name = 'Please enter your name.'

  const digits = values.phone.replace(/\D/g, '')
  if (!values.phone) errors.phone = 'Please enter a phone number.'
  else if (digits.length < 7 || digits.length > 15) errors.phone = 'That phone number looks incomplete.'

  if (isOrg) {
    if (!values.email) errors.email = 'Please enter a work email.'
    else if (!EMAIL_RE.test(values.email)) errors.email = 'That email address looks incomplete.'
  } else if (values.date && !/^\d{4}-\d{2}-\d{2}$/.test(values.date)) {
    errors.date = 'Please choose a valid date.'
  }

  return errors
}

export function firstNameOf(fullName) {
  return fullName.trim().split(/\s+/)[0] || 'you'
}
