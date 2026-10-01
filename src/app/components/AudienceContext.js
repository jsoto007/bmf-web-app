'use client'

import { createContext, useContext, useMemo, useState } from 'react'

/**
 * Which audience the contact form is set up for: 'org' or 'patient'.
 * Any "Request a proposal" / "Book a home visit" link on the page can flip it
 * before scrolling to #contact, so the form arrives already in the right mode.
 */
const AudienceContext = createContext(null)

export function AudienceProvider({ children }) {
  const [mode, setMode] = useState('org')
  const value = useMemo(() => ({ mode, setMode }), [mode])
  return <AudienceContext.Provider value={value}>{children}</AudienceContext.Provider>
}

export function useAudience() {
  const ctx = useContext(AudienceContext)
  if (!ctx) throw new Error('useAudience must be used inside <AudienceProvider>')
  return ctx
}
