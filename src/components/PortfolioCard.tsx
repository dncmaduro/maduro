import type { ReactNode } from 'react'

type PortfolioCardProps = {
  number: string
  meta: string
  metaRight?: string
  title: string
  description?: string
  tech?: string[]
  children?: ReactNode
  footer?: ReactNode
  variant?: 'work' | 'experiment'
  className?: string
}

export function PortfolioCard({ number, meta, metaRight, title, description, tech, children, footer, variant = 'experiment', className = '' }: PortfolioCardProps) {
  return (
    <article className={`portfolio-card portfolio-card--${variant} ${className}`.trim()}>
      <div className="portfolio-card__meta">
        <span>{number} / {meta}</span>
        {metaRight && <span className="portfolio-card__meta-right">{metaRight}</span>}
      </div>
      <h3>{title}</h3>
      {description && <p className="portfolio-card__description">{description}</p>}
      {children}
      {tech && tech.length > 0 && <div className="tag-row" aria-label="Technologies used">{tech.map((item) => <span className="tag" key={item}>{item}</span>)}</div>}
      {footer && <div className="portfolio-card__footer">{footer}</div>}
    </article>
  )
}
