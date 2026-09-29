/**
 * Single source of truth for every piece of content on the site.
 * Edit the values here and the whole portfolio updates.
 */

export const profile = {
  name: 'Mahammad Rashik',
  initials: 'MR',
  role: 'Frontend Web Developer',
  location: 'Ujire, Mangalore',
  email: 'mohammadrashik09@gmail.com',
  availability: 'Open to junior frontend roles & freelance work',
  // TODO: add your real profile links
  links: {
    github: 'https://github.com/mohammadrashik09-EE',
    linkedin: 'https://www.linkedin.com/in/mohammad-rashik-556b96390/',
    resume: '',
  },
  roles: [
    'Frontend Web Developer',
    'React & Next.js Enthusiast',
    'UI Design-minded Coder',
    'Clean Code Perfectionist',
  ],
  tagline:
    'I turn ideas into fast, responsive web interfaces that feel as good as they look — with an eye for UI design and a habit of shipping accessible, maintainable code.',
  about: [
    "I'm a frontend-focused developer based in Ujire, Mangalore. I recently completed my BCA and jumped straight into building for the web — teaching myself React, Next.js and modern UI practices by shipping real projects rather than following tutorials blindly.",
    'Most of my work lives in the space where design meets implementation: translating a Figma-style idea into responsive layouts, wiring up APIs, and polishing the small details — spacing, motion, empty states — that make an interface feel intentional.',
    'I am actively looking for a junior frontend role where I can learn from an experienced team while contributing on real product work.',
  ],
  stats: [
    { value: '6+', label: 'Projects built' },
    { value: '5', label: 'Core technologies' },
    { value: '100%', label: 'Responsive layouts' },
    { value: '∞', label: 'Curiosity' },
  ],
}

export const skills = [
  {
    name: 'Frontend Frameworks',
    level: 80,
    items: ['Next.js', 'React', 'JavaScript (ES6+)', 'Responsive Layouts'],
  },
  {
    name: 'Styling & Design',
    level: 85,
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'UI Design', 'Figma basics'],
  },
  {
    name: 'Backend Basics',
    level: 55,
    items: ['Express.js', 'REST APIs', 'JSON', 'Git & GitHub'],
  },
]

export const marqueeItems = [
  'Next.js',
  'React',
  'JavaScript',
  'TypeScript basics',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Express.js',
  'REST APIs',
  'Responsive Design',
  'Accessibility',
  'Git',
  'GitHub',
  'UI Design',
  'Figma',
  'Vite',
]

/**
 * TODO: replace these sample projects with your real ones.
 * `link` is optional — leave it as '' to hide the "Live" button.
 * `code` is optional — leave it as '' to hide the "Code" button.
 */
export const projects = [
  {
    title: 'Nova Portfolio Starter',
    blurb:
      'A production-ready personal portfolio template with dark mode, scroll animations and a fully responsive layout.',
    stack: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    tags: ['Portfolio', 'Animation', 'Responsive'],
    year: '2025',
    link: '',
    code: '',
    accent: 'from-brand-500 to-aqua-400',
    featured: true,
  },
  {
    title: 'ShopSphere Storefront',
    blurb:
      'Product catalogue with filtering, sorting, a cart backed by Express.js APIs and Stripe-ready checkout flow.',
    stack: ['React', 'Express.js', 'CSS3'],
    tags: ['Full-Stack', 'API', 'E-commerce'],
    year: '2025',
    link: '',
    code: '',
    accent: 'from-aqua-400 to-brand-500',
    featured: true,
  },
  {
    title: 'TrackMate Dashboard',
    blurb:
      'Habit and fitness tracker with a live stats dashboard, local persistence and clean data-visualisation charts.',
    stack: ['Next.js', 'JavaScript', 'CSS3'],
    tags: ['Dashboard', 'Data Viz'],
    year: '2024',
    link: '',
    code: '',
    accent: 'from-flare-400 to-brand-500',
    featured: true,
  },
  {
    title: 'CineWave UI Kit',
    blurb:
      'Movie discovery interface with a searchable grid, genre filters and a detail view — built as a UI design exercise.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    tags: ['UI Design', 'Search'],
    year: '2024',
    link: '',
    code: '',
    accent: 'from-brand-600 to-flare-400',
    featured: false,
  },
  {
    title: 'TaskFlow API',
    blurb:
      'Express.js REST API for a project task manager with JWT auth, validation and a documented endpoint list.',
    stack: ['Express.js', 'REST', 'JSON'],
    tags: ['Backend', 'Auth'],
    year: '2024',
    link: '',
    code: '',
    accent: 'from-aqua-500 to-brand-400',
    featured: false,
  },
  {
    title: 'Bloom Fitness Landing',
    blurb:
      'Conversion-focused landing page for a gym brand, with an animated hero, pricing cards and mobile-first layout.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    tags: ['Landing Page', 'Marketing'],
    year: '2023',
    link: '',
    code: '',
    accent: 'from-flare-500 to-aqua-400',
    featured: false,
  },
]

export const timeline = [
  {
    period: '2024 — Present',
    title: 'Junior Web Developer (Frontend)',
    org: 'Self-driven projects & freelancing',
    points: [
      'Building production-style web apps with React and Next.js end to end.',
      'Designing and implementing responsive, accessible interfaces from scratch.',
      'Integrating Express.js REST APIs into frontend applications.',
      'Managing code with Git and GitHub — small commits, clear history.',
    ],
    current: true,
  },
  {
    period: '2021 — 2024',
    title: 'BCA — Bachelor of Computer Applications',
    org: 'Mangalore, Karnataka',
    points: [
      'Studied core computer science: data structures, DBMS, web technologies.',
      'Led college web-club events and built internal web tools for coursework.',
      'Discovered frontend development and went all-in on HTML, CSS and JavaScript.',
    ],
    current: false,
  },
]

export const services = [
  {
    title: 'Responsive Frontend',
    desc: 'Pixel-clean, mobile-first layouts built with modern HTML, CSS and Tailwind that look right from 320px up.',
    icon: 'layout',
  },
  {
    title: 'UI Implementation',
    desc: 'Translating designs into pixel-accurate components, with attention to spacing, type scale and interaction states.',
    icon: 'sparkle',
  },
  {
    title: 'API Integration',
    desc: 'Wiring frontend apps to Express.js and REST endpoints with clean data handling and error states.',
    icon: 'code',
  },
]

export const testimonials = [
  {
    quote:
      'Rashik picked up a redesign project on day one and shipped something cleaner than our original brief asked for. Rare for someone early in their career.',
    name: 'Project mentor',
    role: 'Frontend mentor',
  },
  {
    quote:
      'Fast, communicative and genuinely interested in the details. He asks the right questions before he writes a line of code.',
    name: 'College project guide',
    role: 'BCA faculty',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]
