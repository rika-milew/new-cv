type PortfolioItem = {
  title: string;
  description: string;
  badges: string[];
  github: string;
  demo: string;
};

export const portfolioConfig: PortfolioItem[] = [
  {
    title: 'Swagger Editor App',
    description:
      'A full-featured Swagger/OpenAPI editor with an interactive viewer, API request execution and analytics.',
    badges: [
      'Next.js',
      'React',
      'Typescript',
      'Supabase',
      'Zustand',
      'Chakra UI',
      'CodeMirror',
      'Vitest',
    ],
    github: 'https://github.com/rika-milew/swagger-editor-app',
    demo: 'https://reactful-swagger-editor-app.vercel.app/',
  },
  {
    title: 'RS School React App',
    description:
      'This is a single-page search application that works with a public REST API supporting search and pagination.',
    badges: [
      'Next.js',
      'React',
      'Typescript',
      'Redux Toolkit',
      'RTK Query',
      'next-intl',
      'Vitest',
    ],
    github: 'https://github.com/rika-milew/rs-react-app',
    demo: 'https://rika-milew-rs-react-app.vercel.app/',
  },
  {
    title: 'Tandem App',
    description:
      'Web application for preparing for technical interviews with interactive widgets.',
    badges: ['React', 'Typescript', 'Node.js', 'Zustand', 'REST API'],
    github: 'https://github.com/rika-milew/fe-course-2025Q3-final',
    demo: 'https://tandem-growlab.vercel.app/',
  },
  {
    title: 'Puzzle Game',
    description:
      'Language learning mini-game where you assemble sentences from mixed-up words.',
    badges: ['HTML', 'CSS', 'Typescript', 'Vite', 'ESLint', 'Prettier'],
    github:
      'https://github.com/rolling-scopes-school/rika-milew-JSFE2025Q3/tree/rss-puzzle/rss-puzzle',
    demo: 'https://rolling-scopes-school.github.io/rika-milew-JSFE2025Q3/rss-puzzle/',
  },
  {
    title: 'Async Race',
    description:
      'A single-page application for managing a car collection and running dracing competitions.',
    badges: ['TypeScript', 'Vite', 'REST API', 'CSS Animations', 'SPA'],
    github:
      'https://github.com/rika-milew/rika-milew-JSFE2025Q3/tree/async-race',
    demo: 'https://rolling-scopes-school.github.io/rika-milew-JSFE2025Q3/async-race/',
  },
  {
    title: 'NFT Landing Page',
    description: 'A responsive one-page website showcasing an NFT collection.',
    badges: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
      'CSS Flexbox',
      'CSS Grid',
    ],
    github: 'https://github.com/rika-milew/nft',
    demo: 'https://rika-milew.github.io/nft/',
  },
];
