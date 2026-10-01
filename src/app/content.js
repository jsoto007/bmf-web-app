/**
 * All page copy, in one place. Section components read from here so copy
 * edits never require touching layout code. Copy is final per the v3 handoff;
 * see README "Content to confirm" for claims still awaiting client sign-off.
 */

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Programs', href: '#engage' },
  { label: 'FAQ', href: '#faq' },
]

export const HERO = {
  metaLeft: 'Mobile specimen collection',
  metaRight: 'New York · New Jersey · Connecticut',
  lede:
    'Certified mobile phlebotomists for employers, research teams, physician practices and care facilities — and for every patient who would rather not sit in a waiting room.',
  plateLabel: 'Plate I',
  plateCaption: 'Collection, wherever care happens',
  facts: [
    { figure: '20+', label: 'Years of industry experience in specimen collection' },
    { figure: '3', label: 'States served across the New York Tri-State Area' },
    { figure: '3×', label: 'Faster response since automating dispatch' },
  ],
}

export const DOORS = [
  {
    mode: 'org',
    kicker: 'For organizations',
    title: 'Run a collection program that just works.',
    body: 'Onsite screenings, research visits and recurring rounds — scoped, staffed and coordinated end to end, with every sample delivered to your lab.',
    cta: 'Request a proposal',
  },
  {
    mode: 'patient',
    kicker: 'For patients & families',
    title: 'Your blood draw, at your kitchen table.',
    body: 'A certified phlebotomist comes to your home at a time that suits you. No waiting room, no travel — ideal for seniors and periodic testing.',
    cta: 'Book a home visit',
  },
]

export const SERVICES = {
  kicker: 'Services',
  title: 'One partner for every collection setting.',
  lede: "The same trained team, the same safety protocol and the same reliable hand-off to your lab — whether it's one patient at home or a full day onsite.",
  rows: [
    {
      numeral: 'I',
      title: 'Corporate wellness',
      body: 'Onsite blood screening days at your offices, scheduled around shifts so employees lose minutes, not mornings.',
      audience: 'Employers · HR · Benefits',
    },
    {
      numeral: 'II',
      title: 'Clinical research',
      body: 'Decentralized and in-home collection for study participants, processed to protocol and shipped to your central lab.',
      audience: 'Sponsors · CROs · Sites',
    },
    {
      numeral: 'III',
      title: 'Physician & lab partners',
      body: 'Concierge draws for your patients at home or at work, collected against your requisitions and delivered to your lab.',
      audience: 'Practices · Concierge MDs · Labs',
    },
    {
      numeral: 'IV',
      title: 'Care facilities',
      body: 'Routine rounds and STAT draws for residents in senior living, home health and skilled nursing settings.',
      audience: 'Senior living · Home health',
    },
  ],
}

export const PROCESS = {
  kicker: 'Process',
  title: 'From request to result, without friction.',
  steps: [
    { title: 'Scope', body: 'A short call to understand your sites, volumes, tests and lab partner. You receive a written proposal.' },
    { title: 'Schedule', body: 'Your coordinator books appointments or onsite days and confirms each time with participants.' },
    { title: 'Collect', body: 'Certified phlebotomists perform each draw with sterile, single-use supplies and strict safety protocols.' },
    { title: 'Deliver', body: 'Samples are packaged to lab specification and delivered securely, with a documented hand-off.' },
  ],
}

export const STANDARDS = {
  kicker: 'Standards & operations',
  title: 'Built for the scrutiny of a compliance review.',
  lede: 'Procurement and clinical teams need more than a friendly visit. Every engagement runs on documented protocols, so you can account for each sample — where it was drawn, who handled it and when it reached the lab.',
  figures: [
    { figure: '3×', label: 'Faster response time after automating our scheduling and dispatch.', gold: true },
    { figure: '40+', label: 'Staff hours a week returned to patient care, not paperwork.' },
    { figure: '20+', label: 'Years of industry experience behind every draw.' },
  ],
  items: [
    { title: 'Certified phlebotomists', body: 'Trained professionals backed by more than two decades of industry experience.' },
    { title: 'Sterile, single-use supplies', body: 'Fresh equipment for every patient and every draw — no exceptions.' },
    { title: 'Documented chain of custody', body: 'Labeled at collection and tracked through delivery to your laboratory.' },
    { title: 'Privacy-first handling', body: 'Patient information shared only with the people and labs who need it.' },
  ],
}

export const PROGRAMS = {
  kicker: 'Programs',
  title: 'Sized to your volume.',
  lede: 'Start with a single visit or build a standing program. Every option is quoted to your sites, schedule and lab requirements.',
  plans: [
    {
      kicker: 'Individuals',
      name: 'Single visit',
      bestFor: 'For patients and families who need a draw at home.',
      items: ['Booked by phone or online', 'Home visits across NY · NJ · CT', 'Collected against your requisition', 'Delivered to your chosen lab'],
      cta: 'Book a home visit',
      mode: 'patient',
      featured: false,
    },
    {
      kicker: 'Practices & facilities',
      name: 'Recurring rounds',
      bestFor: 'For practices and care settings with steady weekly volume.',
      items: ['Standing weekly or monthly schedule', 'Assigned coordinator', 'Patients’ homes or your facility', 'Monthly visit summary'],
      cta: 'Discuss a program',
      mode: 'org',
      featured: true,
      tag: 'Most requested',
    },
    {
      kicker: 'Employers & research',
      name: 'Enterprise partnership',
      bestFor: 'For employers, sponsors and multi-site networks.',
      items: ['Onsite event days and dedicated calendar', 'Named account coordinator', 'All Tri-State locations', 'Program reporting on your cadence'],
      cta: 'Request a proposal',
      mode: 'org',
      featured: false,
    },
  ],
}

export const FAQ = {
  kicker: 'Questions',
  title: 'What partners ask first.',
  items: [
    {
      q: 'Which areas do you cover?',
      a: 'We serve New York, New Jersey and Connecticut. For multi-site programs, share your locations and we will confirm coverage and staffing in the proposal.',
    },
    {
      q: 'Can you staff a large onsite screening?',
      a: 'Yes. We scope phlebotomist headcount, station layout and appointment flow to your expected participation, so lines stay short and employees return to work quickly.',
    },
    {
      q: 'How are samples transported to the lab?',
      a: 'Each sample is labeled at the draw, packaged to lab specification and delivered directly to your designated laboratory with a documented hand-off.',
    },
    {
      q: 'Do you work with our existing lab and requisitions?',
      a: 'We collect against your requisitions and deliver to your chosen lab, and can coordinate kits for specialty and research protocols.',
    },
    {
      q: 'How quickly can we get started?',
      a: 'Single visits can often be booked within days. Recurring and enterprise programs begin with a short scoping call, followed by a written proposal.',
    },
  ],
}

export const CONTACT = {
  kicker: 'Contact',
  title: "Let's plan your collection program.",
  lede: "Tell us about your team, sites and volume. We'll respond with a scoped proposal — usually within one business day.",
  coverage: 'NY · NJ · CT',
  org: {
    segLabel: 'An organization',
    notesLabel: 'Tell us about the program',
    notesPlaceholder: 'Sites, timing, number of participants, lab partner…',
    cta: 'Request a proposal',
    thanks: 'A coordinator will contact you within one business day to scope your program.',
  },
  patient: {
    segLabel: 'Myself or family',
    notesLabel: 'Notes (optional)',
    notesPlaceholder: 'Lab name, tests ordered, access instructions…',
    cta: 'Request a home visit',
    thanks: 'A representative will call shortly to confirm your appointment time.',
  },
}

export const FOOTER = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Programs', href: '#engage' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: 'Burdier Mobile Phlebotomy Corp. · New York, NY',
  tagline: 'Serving the New York Tri-State Area',
}
