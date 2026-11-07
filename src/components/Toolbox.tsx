import { useState } from 'react'
import type { ToolboxShelf } from '../types'

type ToolboxProps = { shelves: ToolboxShelf[] }

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
            <div className="tech-object-row">
              {shelf.items.map((item) => (
                <div className="tech-object-wrap" key={item.name} onMouseEnter={() => setHovered(item.name)} onMouseLeave={() => setHovered(null)}>
                  <div className={`tech-object tech-object--${item.name.toLowerCase().replace(/[^a-z]/g, '-')}`} title={item.name}>
                    <span>{item.symbol}</span>
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
