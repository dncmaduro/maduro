import type { OpenSourceRepository, Project, ToolboxShelf } from '../types'
import {
  siDart,
  siDocker,
  siFlutter,
  siGit,
  siGithubactions,
  siJavascript,
  siMongodb,
  siNatsdotio,
  siNestjs,
  siNodedotjs,
  siPnpm,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siRust,
  siSupabase,
  siThreedotjs,
  siTypescript,
  siVercel,
  siVite,
  siVuedotjs,
  siWebassembly,
} from 'simple-icons'

export const links = {
  email: 'mailto:hello@maduro.dev',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  stackoverflow: 'https://stackoverflow.com/users/',
}

export const navItems = [
  { id: 'work', label: 'work', plate: '01', detail: '▤' },
  { id: 'experiments', label: 'experiments', plate: '02', detail: '</>' },
  { id: 'open-source', label: 'open source', plate: '03', detail: '↗' },
  { id: 'about', label: 'about', plate: '04', detail: '✦' },
] as const

export const maduroLabsProjects: Project[] = [
  {
    id: 'ruseact',
    number: '01',
    title: 'Ruseact',
    type: 'Frontend Runtime',
    status: 'IN DEVELOPMENT',
    description: "wondered what a frontend runtime with a rust-powered reactive core would look like. now i'm building one.",
    secondaryDescription: 'an experimental react-inspired runtime exploring fine-grained reactivity, dependency tracking, wasm integration, and compiler-assisted dom rendering.',
    tech: ['Rust', 'WebAssembly', 'TypeScript', 'JSX', 'Reactivity'],
    sourceUrl: 'https://github.com/MaduroLabs/ruseact',
    sourceLabel: 'SOURCE CODE',
  },
  {
    id: 'styleport',
    number: '02',
    title: 'StylePort',
    type: 'AI / Developer Tooling',
    status: 'AVAILABLE',
    description: 'got tired of explaining the same design system to ai coding agents. so i made it portable.',
    secondaryDescription: "reusable agent skills for extracting and adapting design systems across frontend applications without replacing their existing business logic or behavior.",
    tech: ['Agent Skills', 'Design Systems', 'AI Tooling'],
    installCommand: 'npx skills add MaduroLabs/styleport',
    sourceUrl: 'https://github.com/MaduroLabs/styleport',
    sourceLabel: 'SOURCE CODE',
    demoUrl: 'https://skills.sh/MaduroLabs/styleport',
  },
]

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
    id: 'languages',
    label: 'languages',
    items: [
      { name: 'JavaScript', icon: siJavascript, tooltip: 'JAVASCRIPT', flavor: 'the original escape plan.' },
      { name: 'TypeScript', icon: siTypescript, tooltip: 'TYPESCRIPT', flavor: 'javascript with a seatbelt.' },
      { name: 'Rust', icon: siRust, tooltip: 'RUST', flavor: 'taking the scenic route to the browser.' },
      { name: 'Dart', icon: siDart, tooltip: 'DART', flavor: 'widgets, but make them cross-platform.' },
      { name: 'Python', icon: siPython, tooltip: 'PYTHON', flavor: 'still useful when javascript is too much.' },
    ],
  },
  {
    id: 'frontend-runtime',
    label: 'frontend & runtime',
    items: [
      { name: 'React', icon: siReact, tooltip: 'REACT', flavor: 'yeah, i use this a lot.' },
      { name: 'Vue', icon: siVuedotjs, tooltip: 'VUE', flavor: 'simple, flexible, and somehow still fun.' },
      { name: 'Flutter', icon: siFlutter, tooltip: 'FLUTTER', flavor: 'widgets. widgets everywhere.' },
      { name: 'WebAssembly', icon: siWebassembly, tooltip: 'WEBASSEMBLY', flavor: 'native-ish power in the browser.' },
      { name: 'Three.js', icon: siThreedotjs, tooltip: 'THREE.JS', flavor: 'making flat screens less flat.' },
      { name: 'Vite', icon: siVite, tooltip: 'VITE', flavor: 'fast feedback is a personality trait.' },
    ],
  },
  {
    id: 'backend-data',
    label: 'backend & data',
    items: [
      { name: 'Node.js', icon: siNodedotjs, tooltip: 'NODE.JS', flavor: 'javascript escaped the browser.' },
      { name: 'NestJS', icon: siNestjs, tooltip: 'NESTJS', flavor: 'structure for when the backend gets real.' },
      { name: 'MongoDB', icon: siMongodb, tooltip: 'MONGODB', flavor: 'sometimes the schema is a feeling.' },
      { name: 'PostgreSQL', icon: siPostgresql, tooltip: 'POSTGRESQL', flavor: "where i keep things i don't want to lose." },
      { name: 'Redis', icon: siRedis, tooltip: 'REDIS', flavor: 'fast memory for forgetful apps.' },
      { name: 'NATS', icon: siNatsdotio, tooltip: 'NATS', flavor: 'messages, but without the drama.' },
    ],
  },
  {
    id: 'other',
    label: 'other',
    items: [
      { name: 'Git', icon: siGit, tooltip: 'GIT', flavor: "please don't make me resolve another conflict." },
      { name: 'GitHub Actions', icon: siGithubactions, tooltip: 'GITHUB ACTIONS', flavor: 'let the robots run the checklist.' },
      { name: 'Vercel', icon: siVercel, tooltip: 'VERCEL', flavor: 'push code. hope for the best.' },
      { name: 'Supabase', icon: siSupabase, tooltip: 'SUPABASE', flavor: 'backend, but with fewer headaches.' },
      { name: 'Docker', icon: siDocker, tooltip: 'DOCKER', flavor: 'works on my machine. now yours too. probably.' },
      { name: 'pnpm', icon: siPnpm, tooltip: 'PNPM', flavor: 'dependencies, but a little more sensible.' },
    ],
  },
]

export const into = [
  { title: 'frontend framework internals', description: 'apparently i wanted to know what happens underneath the abstractions.' },
  { title: 'rust & webassembly', description: 'taking the scenic route to the browser.' },
  { title: 'open source', description: "fixing bugs in code that isn't mine for a change." },
  { title: 'performance stuff', description: 'making things faster is weirdly satisfying.' },
  { title: 'ai & developer tools', description: 'making tools that make building other tools easier.' },
  { title: 'making games', description: "mostly because playing them wasn't enough, apparently." },
  { title: 'random side projects', description: 'i have too many ideas and not enough time.' },
]

export const openSourceRepositories: OpenSourceRepository[] = [
  {
    name: 'Reka UI',
    url: 'https://github.com/unovue/reka-ui',
    description: 'an accessible, headless ui component library for vue.',
    tech: ['Vue', 'TypeScript', 'DOM', 'Browser Testing'],
    role: 'CONTRIBUTOR',
    pullRequests: [
      {
        number: 3331,
        title: 'fix(NavigationMenu): clamp viewport to clipping ancestors',
        status: 'MERGED',
        date: 'November 24, 2026',
        url: 'https://github.com/unovue/reka-ui/pull/3331',
        description: 'fixed a positioning bug where navigation menu viewports could be clipped by their ancestors, even when enough visible space was available.',
        technicalDetails: [
          'clipping ancestor detection',
          'effective clipping boundary intersection',
          'scrollport and padding-edge calculations',
          'screen-to-local coordinate conversion',
          'resize and scroll handling',
          'browser regression tests',
        ],
      },
    ],
  },
]
