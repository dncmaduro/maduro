export type Page = 'home' | 'projects' | 'experience' | 'about' | 'contact'

export type CatState = 'idle' | 'walking' | 'running' | 'jumping' | 'eating' | 'sitting' | 'sleeping'

export type Project = {
  id: string
  number: string
  title: string
  type: string
  status?: string
  description: string
  tech: string[]
  features?: string[]
  demoUrl?: string
  sourceUrl?: string
  action?: string
  private?: boolean
}

export type ExperienceItem = {
  period: string
  company: string
  role: string
  description: string
  highlights?: string[]
  tech?: string[]
  metric?: string
}

export type ToolboxItem = {
  name: string
  symbol: string
  tooltip: string
  flavor: string
  accent?: string
}

export type ToolboxShelf = {
  id: string
  label: string
  note?: string
  items: ToolboxItem[]
}
