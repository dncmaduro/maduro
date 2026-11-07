import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { HomePage } from './components/HomePage'
import { InteriorPage } from './components/InteriorPage'
import { PixelCat } from './components/PixelCat'
import type { CatState, Page } from './types'

type Point = { x: number; y: number }

const pageFromPath = (path: string): Page => {
  const candidate = path.replace(/^\//, '') as Page
  return ['projects', 'experience', 'about', 'contact'].includes(candidate) ? candidate : 'home'
}

const pointFromElement = (element: HTMLElement | null): Point | null => {
  if (!element) return null
  const rect = element.getBoundingClientRect()
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 - 12 }
}

const pointAboveTab = (element: HTMLElement | null): Point | null => {
  if (!element) return null
  const rect = element.getBoundingClientRect()
  return { x: rect.left + rect.width / 2, y: rect.top - 22 }
}

export default function App() {
  const initialPoint = useMemo(() => ({ x: Math.max(window.innerWidth * 0.54, 120), y: Math.max(window.innerHeight * 0.46, 160) }), [])
  const [page, setPage] = useState<Page>(() => pageFromPath(window.location.pathname))
  const [catState, setCatState] = useState<CatState>(() => pageFromPath(window.location.pathname) === 'home' ? 'idle' : 'sitting')
  const [catPosition, setCatPosition] = useState<Point>(initialPoint)
  const [catTarget, setCatTarget] = useState<(Point & { key: number; duration?: number }) | null>(null)
  const [catLocked, setCatLocked] = useState(page !== 'home')
  const [easterEgg, setEasterEgg] = useState(false)
  const pointerRef = useRef<Point>(initialPoint)
  const idleTimerRef = useRef<number | undefined>(undefined)
  const transitionLockRef = useRef(false)

  const updateUrl = useCallback((nextPage: Page, replace = false) => {
    const nextPath = nextPage === 'home' ? '/' : `/${nextPage}`
    if (window.location.pathname !== nextPath) {
      window.history[replace ? 'replaceState' : 'pushState']({}, '', nextPath)
    }
  }, [])

  const moveCat = useCallback((point: Point | null, duration = 0.55) => {
    if (!point) return
    setCatTarget({ ...point, key: Date.now(), duration })
  }, [])

  const showEasterEgg = useCallback(() => {
    setEasterEgg(true)
    setCatState('sitting')
    window.setTimeout(() => setEasterEgg(false), 2600)
  }, [])

  const goHome = useCallback(() => {
    if (page === 'home' || transitionLockRef.current) return
    transitionLockRef.current = true
    setCatState('running')
    const backPoint = { x: 72, y: 82 }
    moveCat(backPoint, 0.32)
    window.setTimeout(() => {
      setPage('home')
      updateUrl('home')
      setCatTarget(null)
      setCatLocked(false)
      setCatPosition(pointerRef.current)
      setCatState('walking')
      transitionLockRef.current = false
    }, 300)
  }, [moveCat, page, updateUrl])

  const goToInternal = useCallback((nextPage: Page, tab: HTMLElement | null) => {
    if (nextPage === 'home') {
      goHome()
      return
    }
    const destination = pointAboveTab(tab)
    if (transitionLockRef.current) return
    transitionLockRef.current = true
    setCatLocked(true)
    setCatState('jumping')
    moveCat(destination, 0.42)
    window.setTimeout(() => {
      setPage(nextPage)
      updateUrl(nextPage)
      setCatState('sitting')
      transitionLockRef.current = false
    }, 340)
  }, [goHome, moveCat, updateUrl])

  const openFromHome = useCallback((nextPageString: string, target: HTMLElement | null) => {
    const nextPage = nextPageString as Page
    if (!['projects', 'experience', 'about', 'contact'].includes(nextPage) || transitionLockRef.current) return
    const box = target?.closest('.home-box') as HTMLElement | null
    const destination = pointFromElement(target)
    transitionLockRef.current = true
    setCatLocked(true)
    setCatState('running')
    moveCat(destination, 0.56)
    if (box) {
      gsap.timeline().to(box, { x: -3, duration: 0.045, repeat: 5, yoyo: true, ease: 'none' }).to(box, { scale: 1.02, duration: 0.14, ease: 'power2.out' })
    }
    window.setTimeout(() => {
      setPage(nextPage)
      updateUrl(nextPage)
      transitionLockRef.current = false
      window.setTimeout(() => {
        const tabPoint = pointAboveTab(document.querySelector(`[data-cat-tab="${nextPage}"]`))
        setCatState('running')
        moveCat(tabPoint, 0.5)
        window.setTimeout(() => setCatState('sitting'), 500)
      }, 50)
    }, 700)
  }, [moveCat, updateUrl])

  useEffect(() => {
    const onPopState = () => {
      const nextPage = pageFromPath(window.location.pathname)
      transitionLockRef.current = false
      setPage(nextPage)
      setCatLocked(nextPage !== 'home')
      setCatTarget(null)
      setCatState(nextPage === 'home' ? 'idle' : 'sitting')
      window.setTimeout(() => {
        if (nextPage !== 'home') moveCat(pointAboveTab(document.querySelector(`[data-cat-tab="${nextPage}"]`)), 0.25)
      }, 40)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [moveCat])

  useEffect(() => {
    document.documentElement.scrollTop = 0
    if (page !== 'home' && !catTarget) {
      const timer = window.setTimeout(() => moveCat(pointAboveTab(document.querySelector(`[data-cat-tab="${page}"]`)), 0.25), 40)
      return () => window.clearTimeout(timer)
    }
  }, [catTarget, moveCat, page])

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (page !== 'home' || catLocked || event.pointerType === 'touch') return
      const next = { x: event.clientX + 26, y: event.clientY + 22 }
      const previous = pointerRef.current
      const distance = Math.hypot(next.x - previous.x, next.y - previous.y)
      pointerRef.current = next
      setCatPosition(next)
      setCatState(distance > 18 ? 'running' : distance > 2 ? 'walking' : 'idle')
      window.clearTimeout(idleTimerRef.current)
      idleTimerRef.current = window.setTimeout(() => setCatState('idle'), 850)
    }
    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [catLocked, page])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((event.target as HTMLElement)?.tagName)) return
      if (event.key === 'Escape') {
        goHome()
        return
      }
      const keyed: Record<string, Page> = { '1': 'projects', '2': 'experience', '3': 'about', '4': 'contact' }
      const nextPage = keyed[event.key]
      if (!nextPage) return
      const tab = document.querySelector(`[data-cat-tab="${nextPage}"]`) as HTMLElement | null
      if (page === 'home') openFromHome(nextPage, document.querySelector(`[data-target="${nextPage}"]`))
      else goToInternal(nextPage, tab)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goHome, goToInternal, openFromHome, page])

  return (
    <div className={`app app--${page}`}>
      <a className="skip-link" href="#page-title">skip to content</a>
      <div className="page-grain" aria-hidden="true" />
      {page === 'home' ? <HomePage onNavigate={openFromHome} /> : <InteriorPage page={page} onNavigate={goToInternal} onBack={goHome} />}
      <PixelCat state={catState} position={catPosition} target={catTarget} onEasterEgg={showEasterEgg} />
      {easterEgg && <div className="cat-speech" aria-live="polite">stop clicking me.<br />i&apos;m working.</div>}
      <div className="keyboard-hint" aria-hidden="true">1—4 navigate · esc home</div>
    </div>
  )
}
