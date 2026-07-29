export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

export const ANCHORS = {
  HOME: '/',
  ABOUT: '/#about',
  SKILLS: '/#skills',
  PORTFOLIO: '/#portfolio',
  EDUCATION: '/#education',
  CONTACTS: '/#contacts',
} as const;

export const NAV_ITEMS = [
  { href: ANCHORS.ABOUT, label: 'About' },
  { href: ANCHORS.SKILLS, label: 'Skills' },
  { href: ANCHORS.PORTFOLIO, label: 'Portfolio' },
  { href: ANCHORS.EDUCATION, label: 'Education' },
  { href: ANCHORS.CONTACTS, label: 'Contacts' },
] as const;

export const STARS = {
  COUNT: 80,
  SIZE: 1,
  SIZE_VARIATION: 3,
  MAX_DURATION: 4,
  MIN_DURATION: 2,
  MAX_DELAY: 5,
} as const;
