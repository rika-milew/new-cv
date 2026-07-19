type EducationItem = {
  year: string;
  establishment: string;
  description: string;
  icon: 'study' | 'book';
};

export const educationConfig: EducationItem[] = [
  {
    year: '2014 — 2018',
    establishment:
      'Linguistic and Humanitarian College | The Branch of Minsk State Linguistic University',
    description:
      'Language Support of Socio-cultural Activities. Diploma with honors.',
    icon: 'study',
  },
  {
    year: '2018 — 2021',
    establishment:
      'Faculty of Intercultural Communication | Minsk State Linguistic University',
    description:
      'Specialty — Language Support of Intercultural Communication (major in Public Relations). ' +
      'Qualification — Specialist in Intercultural Communication. ' +
      'Translator/Interpreter (Advisor). ' +
      'Diploma with honors.',
    icon: 'study',
  },
  {
    year: '2022',
    establishment: 'The course of Website Development Basics | Belhard Academy',
    description:
      'The course program includes development and architecture of modern websites, ' +
      'HTML5 basics, CSS3 basics, Adobe Photoshop, software for developing websites, ' +
      'CSS Flexbox and CSS Grid layout models, JavaScript basics, CMS systems.',
    icon: 'book',
  },
  {
    year: '2022',
    establishment:
      'The course of Modern Front-End using JavaScript and HTML5 | Belhard Academy',
    description:
      'The course program includes the study of JavaScript, ' +
      'Angular, work with DOM, CSS3 animation, ' +
      'Git, GitHub, HTML5 API, debugging tools Chrome, Firebug.',
    icon: 'book',
  },
  {
    year: '2022 — 2023',
    establishment: 'JS / Front-End. Stage 0 | RS School Educational Platform',
    description:
      'The course program includes HTML Basics, Chrome Dev Tools, ' +
      'introduction to the Git Version Control System, CSS basics and positioning, CSS Flex, ' +
      'Figma, the study of JavaScript basics, DOM API, DOM Events, algorithms and data structures.',
    icon: 'book',
  },
  {
    year: '2025 — 2026',
    establishment: 'JS / Front-end. Stage 1-2 | RS School Educational Platform',
    description:
      'Topics covered: Git, HTML, CSS, Advanced Javascript, Typescript, Security, Testing, ' +
      'Agile, Networking, Web development tools, React. Completed multiple hands-on tasks ' +
      'and a final collaborative project simulating real-world development workflow.',
    icon: 'book',
  },
  {
    year: '2026 — Present',
    establishment: 'React Course. Stage 3 | RS School Educational Platform',
    description:
      'Frontend development course focused on React and modern ecosystem tools, ' +
      'including state management, routing, testing, performance optimization, and Next.js. ' +
      'Emphasis on hands-on development, teamwork, and building production-like applications with API integration.',
    icon: 'book',
  },
];
