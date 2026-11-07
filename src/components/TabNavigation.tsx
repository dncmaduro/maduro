import type { Page } from '../types'
import { navItems } from '../data/siteData'

type TabNavigationProps = {
  currentPage: Page
  onNavigate: (page: Page, tab: HTMLElement | null) => void
}

export function TabNavigation({ currentPage, onNavigate }: TabNavigationProps) {
  return (
    <nav className="tab-nav" aria-label="Portfolio sections">
      {navItems.map((item) => {
        const active = currentPage === item.id
        return (
          <button key={item.id} type="button" className={`tab ${active ? 'tab--active' : ''}`} data-cat-tab={item.id} aria-current={active ? 'page' : undefined} onClick={(event) => onNavigate(item.id, event.currentTarget)}>
            <span className="tab-number">0{item.plate}</span>
            <span>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
