import { NextResponse } from 'next/server'
import { normalizeMode, sanitizeSubmission, validateSubmission } from '@/lib/contact'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /api/contact
 * Validates a submission with the same rules the form uses, then delivers it
 * through whichever channel is configured (see .env.example). Unconfigured
 * production deployments fail loudly so a lost lead never looks like success.
 */
export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real visitors never see this field. Pretend success for bots.
  if (typeof body?.website === 'string' && body.website.trim()) {
    return NextResponse.json({ ok: true })
  }

  const mode = normalizeMode(body?.mode)
  const values = sanitizeSubmission(body)
  const fields = validateSubmission(values, mode)
  if (Object.keys(fields).length) {
    return NextResponse.json({ error: 'Please check the highlighted fields.', fields }, { status: 422 })
  }

  const submission = { mode, ...values, receivedAt: new Date().toISOString() }
  try {
    await deliver(submission)
  } catch (error) {
    console.error('[contact] delivery failed:', error)
    return NextResponse.json({ error: 'We could not send your request right now.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}

async function deliver(submission) {
  const webhook = process.env.CONTACT_WEBHOOK_URL
  if (webhook) {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission),
    })
    if (!response.ok) throw new Error(`Webhook responded ${response.status}`)
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (apiKey && to && from) {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: to.split(',').map((address) => address.trim()).filter(Boolean),
        reply_to: submission.email || undefined,
        subject: subjectFor(submission),
        text: textFor(submission),
      }),
    })
    if (!response.ok) throw new Error(`Resend responded ${response.status}: ${await response.text()}`)
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log('[contact] No delivery channel configured. Submission:\n' + textFor(submission))
    return
  }
  throw new Error('No delivery channel configured. Set CONTACT_WEBHOOK_URL, or RESEND_API_KEY with CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.')
}

function subjectFor(s) {
  const kind = s.mode === 'org' ? 'Proposal request' : 'Home visit request'
  return `${kind} — ${s.name}${s.organization ? ` (${s.organization})` : ''}`
}

function textFor(s) {
  const lines =
    s.mode === 'org'
      ? [
          ['Request', 'Proposal (organization)'],
          ['Name', s.name],
          ['Phone', s.phone],
          ['Work email', s.email],
          ['Organization', s.organization],
          ['Service needed', s.service],
          ['Estimated draws / month', s.volume],
          ['About the program', s.notes],
        ]
      : [
          ['Request', 'Home visit (patient or family)'],
          ['Name', s.name],
          ['Phone', s.phone],
          ['Visit address', s.address],
          ['Preferred date', s.date],
          ['Notes', s.notes],
        ]
  lines.push(['Received', s.receivedAt])
  return lines
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n')
}
