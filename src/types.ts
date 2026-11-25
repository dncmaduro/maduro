import type { SimpleIcon } from 'simple-icons'

export type Page = 'home' | 'work' | 'experiments' | 'open-source' | 'about'

export type CatState = 'idle' | 'walking' | 'running' | 'jumping' | 'sitting' | 'sleeping' | 'restless'

export type Project = {
  id: string
  number: string
  title: string
  type: string
  status?: string
  description: string
  secondaryDescription?: string
  tech: string[]
  features?: string[]
  demoUrl?: string
  sourceUrl?: string
  sourceLabel?: string
  installCommand?: string
  action?: string
  private?: boolean
}

export type WorkProject = {
  title: string
  bullets?: string[]
  metric?: string
}

export type WorkItem = {
  number: string
  period: string
  company: string
  role: string
  projects: WorkProject[]
  freelance?: boolean
}

export type ToolboxItem = {
  name: string
  icon: SimpleIcon
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

export type PullRequest = {
  number: number
  title: string
  description: string
  status: string
  date: string
  url: string
  technicalDetails: string[]
}

export type OpenSourceRepository = {
  name: string
  url: string
  description: string
  tech: string[]
  role: string
  pullRequests: PullRequest[]
}
