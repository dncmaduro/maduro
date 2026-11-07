import type { Project } from '../types'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-preview" aria-hidden="true">
        <span className="preview-grid" />
        <span className="preview-label">PROJECT PREVIEW</span>
        <span className="preview-corner">{project.number}</span>
        <span className="preview-cursor">▮</span>
      </div>
      <div className="project-card__body">
        <div className="project-meta">
          <span>{project.number} / {project.type}</span>
          {project.status && <span className="project-status">{project.status}</span>}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row" aria-label="Technologies used">
          {project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
        </div>
        {project.features && (
          <ul className="feature-list">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        )}
        <div className="project-actions">
          {project.private ? (
            <button type="button" className="text-action" onClick={() => undefined}>{project.action} <span>↗</span></button>
          ) : project.demoUrl ? (
            <a className="text-action" href={project.demoUrl} onClick={(event) => event.preventDefault()}>{project.id === 'crossroads' ? 'PLAY GAME' : 'CHROME STORE'} <span>↗</span></a>
          ) : (
            <span className="project-note">{project.action}</span>
          )}
          {project.sourceUrl && <a className="text-action text-action--muted" href={project.sourceUrl} onClick={(event) => event.preventDefault()}>SOURCE CODE <span>↗</span></a>}
        </div>
      </div>
    </article>
  )
}
