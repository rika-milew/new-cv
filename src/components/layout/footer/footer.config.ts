const currentYear = String(new Date().getFullYear());

type FooterIcon = 'github' | 'linkedin' | 'telegram';

type FooterLink = {
  name: string;
  url: string;
  icon: FooterIcon;
};

type IconStyles = {
  maskImage: string;
  webkitMaskImage: string;
};

type FooterConfig = {
  copyright: string;
  links: FooterLink[];
  icons: Record<FooterIcon, IconStyles>;
};

export const footerConfig: FooterConfig = {
  copyright: `© ${currentYear} Erika Milevskaya. All rights reserved.`,
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/rika-milew',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/erika-gumerova-777927192/',
      icon: 'linkedin',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/rika_mee',
      icon: 'telegram',
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
