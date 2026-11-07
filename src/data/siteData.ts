import type { Project, ToolboxShelf } from '../types'
import { siDocker, siFlutter, siGit, siMongodb, siNodedotjs, siPostgresql, siReact, siSupabase, siVercel, siVuedotjs } from 'simple-icons'

export const links = {
  email: 'mailto:hello@maduro.dev',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  stackoverflow: 'https://stackoverflow.com/users/',
}

export const navItems = [
  { id: 'work', label: 'work', plate: '01', detail: '▤' },
  { id: 'experiments', label: 'experiments', plate: '02', detail: '</>' },
  { id: 'about', label: 'about', plate: '03', detail: '✦' },
  { id: 'contact', label: 'contact', plate: '04', detail: '✉' },
] as const

export const experimentProjects: Project[] = [
  {
    id: 'crossroads',
    number: '01',
    title: 'CrossRoadsInVietnam',
    type: 'Web Game',
    status: 'IN DEVELOPMENT',
    description: "made a game about crossing the street in Vietnam because apparently doing it in real life wasn't stressful enough.",
    tech: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Rapier'],
    demoUrl: 'https://cross-road-in-vietnam.vercel.app/',
  },
  {
    id: 'viewport-capture',
    number: '02',
    title: 'Viewport Capture',
    type: 'Chrome Extension',
    description: 'got tired of taking screenshots one by one, so i made a chrome extension that does it for me.',
    tech: ['JavaScript', 'Chrome Extension Manifest V3'],
    demoUrl: 'https://chromewebstore.google.com/detail/viewport-capture/gaelmapmgljenmnddpnjadkfpdhncnnm',
  },
  {
    id: 'inoai',
    number: '03',
    title: 'InoAI',
    type: 'AI / Education',
    status: 'IN PROGRESS',
    description: "trying to make learning a little less painful with ai. still figuring things out.",
    tech: ['AI', 'Education'],
  },
]

export const experiments = [
  { title: 'Tanjiro vs Muzan', label: 'EXPERIMENT', description: 'demon slayer game. that’s it.' },
  { title: 'Ranked Mental Math Arena', label: 'BUILDING', description: 'ranked mode, but for basic math.' },
  { title: 'AI GitHub Bounty Hunter', label: 'EXPERIMENT', description: 'teaching a robot to look for work.' },
]

export const workItems = [
  {
    number: '01',
    period: 'Apr 2026 — Present',
    company: 'Viettel High Tech',
    role: 'Software Engineer',
    projects: [
      { title: 'Battlefield Management System', bullets: ['optimized complex UI and tactical map rendering', 'real-time data visualization', 'code review + requirement analysis', 'complex Flutter UI'], metric: '15 → 45 FPS' },
      { title: 'Flutter SDK', bullets: ['researched existing SDK approaches and internal requirements', "designed the SDK's base architecture", 'built reusable foundations for multiple projects', 'designed extension points so consumers can customize behavior'] },
    ],
  },
  {
    number: '02',
    period: 'Jun 2025 — Apr 2026',
    company: 'Sun Asterisk',
    role: 'Frontend Developer / Trainer',
    projects: [
      { title: 'Resource Allocation Platform', bullets: ['frontend development', "reviewed the existing team's interface implementation", 'helped analyze and improve the previous UI structure'] },
      { title: 'Mentoring Interns & Freshers', bullets: ['Python', 'ReactJS'] },
    ],
  },
  {
    number: '03',
    period: 'Aug 2024 — Jun 2025',
    company: 'Missing Corner',
    role: 'Frontend Developer',
    projects: [
      { title: 'Low-code Platform', bullets: ['rebuilt existing components', 'upgraded the UI library', 'pushed the project toward a more reusable component architecture'] },
    ],
  },
  {
    number: '04',
    period: 'Freelance',
    company: 'Freelance',
    role: '',
    freelance: true,
    projects: [
      { title: 'E-commerce Revenue Management' },
      { title: 'Employee Attendance Management' },
      { title: 'Company Expense Management' },
    ],
  },
]

export const toolboxShelves: ToolboxShelf[] = [
  {
    id: 'software',
    label: 'software',
    items: [
      { name: 'React', icon: siReact, tooltip: 'REACT', flavor: 'yeah, i use this a lot.' },
      { name: 'Vue', icon: siVuedotjs, tooltip: 'VUE', flavor: 'simple, flexible, and somehow still fun.' },
      { name: 'Flutter', icon: siFlutter, tooltip: 'FLUTTER', flavor: 'widgets. widgets everywhere.' },
      { name: 'Nodejs', icon: siNodedotjs, tooltip: 'NODEJS', flavor: 'javascript escaped the browser.' },
      { name: 'Mongo DB', icon: siMongodb, tooltip: 'MONGO DB', flavor: 'sometimes the schema is a feeling.' },
      { name: 'Postgres', icon: siPostgresql, tooltip: 'POSTGRES', flavor: "where i keep things i don't want to lose." },
    ],
  },
  {
    id: 'other',
    label: 'other',
    items: [
      { name: 'Git', icon: siGit, tooltip: 'GIT', flavor: "please don't make me resolve another conflict." },
      { name: 'Vercel', icon: siVercel, tooltip: 'VERCEL', flavor: 'push code. hope for the best.' },
      { name: 'Supabase', icon: siSupabase, tooltip: 'SUPABASE', flavor: 'backend, but with fewer headaches.' },
      { name: 'Docker', icon: siDocker, tooltip: 'DOCKER', flavor: 'works on my machine. now yours too. probably.' },
    ],
  },
]

export const into = [
  { title: 'making games', description: "mostly because playing them wasn't enough, apparently." },
  { title: 'performance stuff', description: 'making things faster is weirdly satisfying.' },
  { title: 'ai & automation', description: 'trying to make computers do more of my work.' },
  { title: 'random side projects', description: 'i have too many ideas and not enough time.' },
]
