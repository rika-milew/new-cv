export type IconConfig = {
  class: string;
  maskImage: string;
  webkitMaskImage: string;
};

export type ContactItem = {
  type: IconType;
  href: string;
  heading: string;
  linkText: string;
  icon: IconConfig;
};

export type ContactsConfig = {
  title: string;
  description: string;
  items: ContactItem[];
};

type IconType = 'email' | 'github' | 'telegram' | 'linkedin';

export const ICONS: Record<IconType, IconConfig> = {
  email: {
    class: 'contact__icon_mail',
    maskImage: 'url(/icons/mail.svg)',
    webkitMaskImage: 'url(/icons/mail.svg)',
  },
  github: {
    class: 'contact__icon_github',
    maskImage: 'url(/icons/github.svg)',
    webkitMaskImage: 'url(/icons/github.svg)',
  },
  telegram: {
    class: 'contact__icon_telegram',
    maskImage: 'url(/icons/telegram.svg)',
    webkitMaskImage: 'url(/icons/telegram.svg)',
  },
  linkedin: {
    class: 'contact__icon_linked',
    maskImage: 'url(/icons/linkedin.svg)',
    webkitMaskImage: 'url(/icons/linkedin.svg)',
  },
} as const;

export type IconName = keyof typeof ICONS;

export const contactsConfig: ContactsConfig = {
  title: 'Contacts',
  description:
    "Feel free to reach out — I'd love to discuss your project or collaboration opportunities.",
  items: [
    {
      type: 'email' as const,
      href: 'mailto:erika.milewska@gmail.com',
      heading: 'Email',
      linkText: 'erika.milewska@gmail.com',
      icon: ICONS.email,
    },
    {
      type: 'github' as const,
      href: 'https://github.com/rika-milew',
      heading: 'GitHub',
      linkText: 'github.com/rika-milew',
      icon: ICONS.github,
    },
    {
      type: 'linkedin' as const,
      href: 'https://www.linkedin.com/in/rika-milew/',
      heading: 'LinkedIn',
      linkText: 'linkedin.com/in/rika-milew',
      icon: ICONS.linkedin,
    },
    {
      type: 'telegram' as const,
      href: 'https://t.me/rika_mee',
      heading: 'Telegram',
      linkText: '@rika_mee',
      icon: ICONS.telegram,
    },
  ],
} as const;

export type ContactType = (typeof contactsConfig.items)[number]['type'];
