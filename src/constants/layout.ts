export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

export const NAV_ITEMS = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#education', label: 'Education' },
  { href: '/#contacts', label: 'Contacts' },
] as const;

export const STARS = {
  COUNT: 80,
  SIZE: 1,
  SIZE_VARIATION: 3,
  MAX_DURATION: 4,
  MIN_DURATION: 2,
  MAX_DELAY: 5,
} as const;
