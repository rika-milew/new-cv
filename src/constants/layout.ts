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
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
] as const;

export const STARS = {
  COUNT: 80,
  SIZE: 1,
  SIZE_VARIATION: 3,
  MAX_DURATION: 4,
  MIN_DURATION: 2,
  MAX_DELAY: 5,
} as const;

export const FEATURED_PROJECTS_COUNT = 6;
