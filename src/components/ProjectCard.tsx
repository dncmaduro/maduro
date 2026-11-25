import { useState } from 'react'
import type { Project } from '../types'
import { PortfolioCard } from './PortfolioCard'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [copied, setCopied] = useState(false)
  const demoUrl = project.demoUrl && project.demoUrl !== '#' ? project.demoUrl : undefined
  const sourceUrl = project.sourceUrl && project.sourceUrl !== '#' ? project.sourceUrl : undefined
  const hasFooter = Boolean(demoUrl || sourceUrl || project.action || project.installCommand)

  const copyInstallCommand = async () => {
    if (!project.installCommand) return
    try {
      await navigator.clipboard.writeText(project.installCommand)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <PortfolioCard
      number={project.number}
      meta={project.type}
      metaRight={project.status}
      title={project.title}
      description={project.description}
      secondaryDescription={project.secondaryDescription}
      tech={project.tech}
      footer={hasFooter ? (
        <>
          {project.installCommand && (
            <div className="install-command">
              <code>{project.installCommand}</code>
              <button className="copy-command" type="button" onClick={copyInstallCommand} aria-label={`Copy installation command: ${project.installCommand}`}>
                {copied ? 'COPIED ✓' : 'COPY'}
              </button>
              <span className="sr-only" aria-live="polite">{copied ? 'Installation command copied.' : ''}</span>
            </div>
          )}
          <div className="project-actions">
            {demoUrl && <a className="text-action" href={demoUrl} target="_blank" rel="noreferrer">TRY IT <span>↗</span></a>}
            {project.action && !demoUrl && <span className="project-note">{project.action}</span>}
            {sourceUrl && <a className="text-action text-action--muted" href={sourceUrl} target="_blank" rel="noreferrer">{project.sourceLabel ?? 'SOURCE'} <span>↗</span></a>}
          </div>
        </>
      ) : undefined}
    />
  )
}
