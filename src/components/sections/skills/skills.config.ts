type SkillCategory = {
  title: string;
  items: readonly string[];
};

export const skillsConfig: SkillCategory[] = [
  {
    title: 'Core',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Redux',
      'Zustand',
      'SSG / SSR',
    ],
  },
  {
    title: 'Styling & Layout',
    items: [
      'HTML5',
      'CSS3',
      'CSS Modules',
      'Responsive Design',
      'Accessibility (a11y)',
    ],
  },
  {
    title: 'Data & Routing',
    items: ['TanStack Query', 'TanStack Router', 'REST API', 'Server Actions'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Testing',
    items: ['Vitest', 'React Testing Library', 'User Event'],
  },
  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Vite',
      'Webpack',
      'VS Code',
      'Chrome DevTools',
      'Markdown',
      'Figma',
      'ESLint',
      'Prettier',
      'Biome',
    ],
  },
];
