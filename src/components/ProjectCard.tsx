import type { Project } from '../types'
import { PortfolioCard } from './PortfolioCard'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const demoUrl = project.demoUrl && project.demoUrl !== '#' ? project.demoUrl : undefined
  const sourceUrl = project.sourceUrl && project.sourceUrl !== '#' ? project.sourceUrl : undefined
  const hasFooter = Boolean(demoUrl || sourceUrl || project.action)

  return (
    <PortfolioCard
      number={project.number}
      meta={project.type}
      metaRight={project.status}
      title={project.title}
      description={project.description}
      tech={project.tech}
      footer={hasFooter ? (
        <div className="project-actions">
          {demoUrl && <a className="text-action" href={demoUrl} target="_blank" rel="noreferrer">{project.id === 'crossroads' ? 'PLAY' : 'OPEN'} <span>↗</span></a>}
          {project.action && !demoUrl && <span className="project-note">{project.action}</span>}
          {sourceUrl && <a className="text-action text-action--muted" href={sourceUrl} target="_blank" rel="noreferrer">SOURCE <span>↗</span></a>}
        </div>
      ) : undefined}
    />
  )
}
