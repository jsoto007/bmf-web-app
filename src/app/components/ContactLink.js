'use client'

import { useAudience } from './AudienceContext'

/** An in-page link to #contact that also sets the form's audience mode. */
export default function ContactLink({ mode = 'org', onClick, children, ...rest }) {
  const { setMode } = useAudience()
  return (
    <a
      href="#contact"
      {...rest}
      onClick={(event) => {
        setMode(mode)
        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}
