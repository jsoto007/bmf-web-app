/* Lucide outline icons, inlined so the page ships no icon library. */

function Svg({ size = 24, strokeWidth = 1.5, stroke = 'currentColor', children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <Svg size={22} strokeWidth={1.5} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Svg>
  )
}

export function CheckIcon(props) {
  return (
    <Svg size={16} strokeWidth={1.8} stroke="var(--color-accent)" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  )
}

export function ShieldCheckIcon(props) {
  return (
    <Svg size={24} strokeWidth={1.4} stroke="var(--color-accent)" {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  )
}

export function CircleCheckIcon(props) {
  return (
    <Svg size={40} strokeWidth={1.2} stroke="var(--color-accent)" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  )
}

export function MenuIcon(props) {
  return (
    <Svg size={22} strokeWidth={1.6} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Svg>
  )
}

export function CloseIcon(props) {
  return (
    <Svg size={22} strokeWidth={1.6} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Svg>
  )
}
