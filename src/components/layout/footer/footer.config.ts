const currentYear = String(new Date().getFullYear());

export const footerConfig = {
  copyright: `© ${currentYear} Erika Milevskaya. All rights reserved.`,
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/rika-milew',
      icon: 'github' as const,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/erika-gumerova-777927192/',
      icon: 'linkedin' as const,
    },
    {
      name: 'Telegram',
      url: 'https://t.me/rika_mee',
      icon: 'telegram' as const,
    },
  ],
  icons: {
    github: {
      maskImage: 'url(/icons/github.svg)',
      webkitMaskImage: 'url(/icons/github.svg)',
    },
    linkedin: {
      maskImage: 'url(/icons/linkedin.svg)',
      webkitMaskImage: 'url(/icons/linkedin.svg)',
    },
    telegram: {
      maskImage: 'url(/icons/telegram.svg)',
      webkitMaskImage: 'url(/icons/telegram.svg)',
    },
  },
};
