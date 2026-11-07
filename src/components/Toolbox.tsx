import { useState } from 'react'
import type { SimpleIcon } from 'simple-icons'
import type { ToolboxShelf } from '../types'

type ToolboxProps = { shelves: ToolboxShelf[] }

function BrandIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg className="tech-object-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={icon.path} />
    </svg>
  )
}

export function Toolbox({ shelves }: ToolboxProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="toolbox" aria-label="Toolbox">
      <div className="toolbox-top-label">TOOLBOX // click nothing, hover everything</div>
      <div className="shelf-unit">
        <div className="shelf-side shelf-side--left" />
        <div className="shelf-side shelf-side--right" />
        {shelves.map((shelf) => (
          <section className={`tech-shelf ${shelf.id === 'exploring' ? 'tech-shelf--exploring' : ''}`} key={shelf.id}>
            <div className="shelf-label">
              <span>{shelf.label}</span>
              {shelf.note && <em>{shelf.note}</em>}
            </div>
            <div className={`tech-object-row tech-object-row--${shelf.id}`}>
              {shelf.items.map((item) => (
                <div className="tech-object-wrap" key={item.name} onMouseEnter={() => setHovered(item.name)} onMouseLeave={() => setHovered(null)}>
                  <div className={`tech-object tech-object--${item.name.toLowerCase().replace(/[^a-z]/g, '-')}`} title={item.name}>
                    <BrandIcon icon={item.icon} />
                  </div>
                  <span className="tech-object-name">{item.name}</span>
                  {hovered === item.name && (
                    <div className="tech-tooltip" role="tooltip">
                      <strong>{item.tooltip}</strong>
                      <span>{item.flavor}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
