import type { ExperienceItem, Project, ToolboxShelf } from '../types'

export const links = {
  email: 'mailto:hello@maduro.dev',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  stackoverflow: 'https://stackoverflow.com/users/',
}

export const navItems = [
  { id: 'projects', label: 'projects', plate: '01', detail: '</>' },
  { id: 'experience', label: 'experience', plate: '02', detail: '▤' },
  { id: 'about', label: 'about', plate: '03', detail: '✦' },
  { id: 'contact', label: 'contact', plate: '04', detail: '✉' },
] as const

export const projects: Project[] = [
  {
    id: 'crossroads',
    number: '01',
    title: 'CrossRoadsInVietnam',
    type: 'Personal / Web Game',
    status: 'In development',
    description: "made a game about crossing the street in Vietnam because apparently doing it in real life wasn't stressful enough.",
    tech: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Rapier'],
    features: ['Vietnamese 3D street environment', 'traffic AI', 'collision system', 'multiple levels', 'ambient + spatial audio', 'pedestrians + vehicle types'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'viewport-capture',
    number: '02',
    title: 'Viewport Capture',
    type: 'Chrome Extension',
    description: "got tired of taking screenshots one by one, so i made a chrome extension that does it for me. yeah, that's pretty much it.",
    tech: ['JavaScript', 'Chrome Extension Manifest V3'],
    features: ['automatic viewport scrolling', 'PNG capture + ZIP export', 'lazy-loaded content support', 'restores original scroll position', 'stop / cancel overlay', 'minimal permissions'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'inoai',
    number: '03',
    title: 'InoAI',
    type: 'AI / Education',
    status: 'IN PROGRESS',
    description: "trying to make learning a little less painful with ai. still figuring things out, so don't expect magic just yet.",
    tech: ['AI', 'Education'],
    action: 'FOLLOW THE BUILD',
  },
  {
    id: 'revenue',
    number: '04',
    title: 'E-commerce Revenue Management',
    type: 'Freelance / Internal Tool',
    description: 'turns out managing revenue across multiple e-commerce platforms is a mess. so i built something to make that mess slightly more manageable.',
    tech: ['Dashboards', 'Analytics', 'Reporting'],
    features: ['multi-channel revenue tracking', 'revenue analytics', 'SKU-level insights', 'channel comparisons', 'KPI visualization'],
    action: 'VIEW CASE STUDY',
    private: true,
  },
  {
    id: 'attendance',
    number: '05',
    title: 'Employee Attendance System',
    type: 'Freelance / Internal Tool',
    description: "because apparently spreadsheets weren't causing enough suffering already.",
    tech: ['Time tracking', 'Reporting', 'Automation'],
    features: ['employee attendance', 'time tracking', 'productivity reporting', 'internal workflow automation'],
    action: 'VIEW CASE STUDY',
    private: true,
  },
  {
    id: 'expenses',
    number: '06',
    title: 'Company Expense Management',
    type: 'Freelance / Internal Tool',
    description: 'money goes in, money goes out, and somehow everyone needs to approve something. made a system for that.',
    tech: ['Approval workflow', 'Payment tracking', 'Reporting'],
    features: ['expense requests', 'approval workflow', 'payment tracking', 'company expense reporting'],
    action: 'VIEW CASE STUDY',
    private: true,
  },
]

export const experiments = [
  { title: 'Tanjiro vs Muzan', label: 'EXPERIMENT', description: "thought it'd be fun to make a demon slayer game. so i did." },
  { title: 'Ranked Mental Math Arena', label: 'BUILDING', description: "what if doing basic math felt like playing ranked? sounds stupid. i'm building it anyway.", detail: 'four players · ELO · leaderboard · email login' },
  { title: 'AI GitHub Bounty Hunter', label: 'EXPERIMENT', description: "trying to make an ai hunt down github bounties. basically teaching a robot to look for work because i can't be bothered." },
]

export const experience: ExperienceItem[] = [
  {
    period: 'Apr 2026 — Present',
    company: 'Viettel High Tech',
    role: 'Software Engineer',
    description: 'working on real-time software systems, building interfaces, dealing with lots of data, and trying to make things run faster without breaking everything else.',
    highlights: ['complex Flutter UI', 'real-time data visualization', 'NATS-based realtime communication', 'reusable Flutter SDK components', 'code review + requirement analysis', 'performance optimization'],
    metric: '15 → 45 FPS',
  },
  {
    period: 'Jun 2025 — Apr 2026',
    company: 'Sun Asterisk',
    role: 'Frontend Developer / Trainer',
    description: "wrote frontend code, worked with other developers, and occasionally tried to explain why something wasn't working.",
    highlights: ['frontend development', 'React applications', 'frontend architecture', 'developer training', 'mentoring / knowledge sharing'],
  },
  {
    period: 'Aug 2024 — Jun 2025',
    company: 'Missing Corner',
    role: 'Frontend Developer',
    description: 'built web interfaces, fixed bugs, refactored components, and did the usual frontend developer things.',
    highlights: ['CMS interfaces', 'reusable UI components', 'Kanban workflows', 'frontend refactoring'],
  },
  {
    period: 'Nov 2023 — Oct 2024',
    company: 'GDG HANU',
    role: 'Full-stack Developer',
    description: "where i spent a lot of time figuring out how things worked. and sometimes why they didn't.",
    tech: ['Vue', 'Nuxt', 'NestJS', 'PostgreSQL'],
  },
]

export const toolboxShelves: ToolboxShelf[] = [
  {
    id: 'often',
    label: 'stuff i use a lot',
    items: [
      { name: 'React', symbol: '◒', tooltip: 'REACT', flavor: 'yeah, i use this a lot.' },
      { name: 'TypeScript', symbol: 'TS', tooltip: 'TYPESCRIPT', flavor: 'javascript, but it yells at me.' },
      { name: 'Flutter', symbol: '◆', tooltip: 'FLUTTER', flavor: 'widgets. widgets everywhere.' },
      { name: 'JavaScript', symbol: 'JS', tooltip: 'JAVASCRIPT', flavor: "it works until it doesn't." },
    ],
  },
  {
    id: 'data',
    label: 'backend & data',
    items: [
      { name: 'Node.js', symbol: 'N', tooltip: 'NODE.JS', flavor: 'javascript escaped the browser.' },
      { name: 'NestJS', symbol: '✚', tooltip: 'NESTJS', flavor: 'decorators doing their little dance.' },
      { name: 'PostgreSQL', symbol: '🐘', tooltip: 'POSTGRESQL', flavor: "where i keep things i don't want to lose." },
      { name: 'MongoDB', symbol: 'M', tooltip: 'MONGODB', flavor: 'sometimes the schema is a feeling.' },
    ],
  },
  {
    id: 'sane',
    label: 'tools that keep me sane',
    items: [
      { name: 'Git', symbol: '⑂', tooltip: 'GIT', flavor: "please don't make me resolve another conflict." },
      { name: 'Docker', symbol: '▣', tooltip: 'DOCKER', flavor: 'works on my machine. now yours too. probably.' },
      { name: 'Vercel', symbol: '▲', tooltip: 'VERCEL', flavor: 'push code. hope for the best.' },
      { name: 'Figma', symbol: '●', tooltip: 'FIGMA', flavor: 'where pixels go to get judged.' },
    ],
  },
  {
    id: 'exploring',
    label: "things i'm messing with",
    note: 'currently exploring',
    items: [
      { name: 'Three.js', symbol: '◇', tooltip: 'THREE.JS', flavor: 'wireframes and bad decisions.' },
      { name: 'AI Agents', symbol: '◈', tooltip: 'AI AGENTS', flavor: 'trying to make computers do more of my work.' },
      { name: 'RAG', symbol: '↯', tooltip: 'RAG', flavor: 'search, but with extra steps.' },
      { name: 'MCP', symbol: '⌘', tooltip: 'MCP', flavor: 'connectors for my connectors.' },
    ],
  },
]

export const into = [
  { title: 'making games', description: "mostly because playing them wasn't enough, apparently." },
  { title: 'performance stuff', description: 'making things faster is weirdly satisfying.' },
  { title: 'ai & automation', description: 'trying to make computers do more of my work.' },
  { title: 'random side projects', description: 'i have too many ideas and not enough time.' },
]
