import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { HomePage } from './components/HomePage'
import { InteriorPage } from './components/InteriorPage'
import { PixelCat } from './components/PixelCat'
import type { CatState, Page } from './types'

type Point = { x: number; y: number }

const internalPages: Page[] = ['work', 'experiments', 'about', 'contact']

const pageFromPath = (path: string): Page => {
  const candidate = path.replace(/^\/+|\/+$/g, '')
  if (candidate === 'projects' || candidate === 'experience' || candidate === 'work') return 'work'
  if (candidate === 'experiments') return 'experiments'
  if (candidate === 'about') return 'about'
  if (candidate === 'contact') return 'contact'
  return 'home'
}

const pathForPage = (page: Page) => page === 'home' ? '/' : `/${page}`

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

const cloneInteriorPage = (pageRoot: HTMLElement) => {
  const clone = pageRoot.cloneNode(true) as HTMLElement
  clone.classList.add('page-transition-page-clone')
  document.body.appendChild(clone)
  return clone
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

  const updateUrl = useCallback((nextPage: Page) => {
    const nextPath = pathForPage(nextPage)
    if (window.location.pathname !== nextPath) window.history.pushState({}, '', nextPath)
  }, [])

  const resetScroll = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
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
    setCatLocked(true)
    setCatState('running')

    const returningPage = page
    resetScroll()
    const pageRoot = document.querySelector('.interior-page') as HTMLElement | null
    const pageClone = pageRoot ? cloneInteriorPage(pageRoot) : null

    window.setTimeout(() => {
      setPage('home')
      updateUrl('home')

      window.setTimeout(() => {
        const target = document.querySelector(`[data-target="${returningPage}"]`) as HTMLElement | null
        const box = target?.closest('.home-box') as HTMLElement | null
        if (!box) {
          pageClone?.remove()
          setCatTarget(null)
          setCatPosition(pointerRef.current)
          setCatLocked(false)
          setCatState('walking')
          transitionLockRef.current = false
          return
        }
        const rect = box.getBoundingClientRect()
        moveCat(pointFromElement(target), 0.38)
        if (!pageClone) {
          setCatTarget(null)
          setCatPosition(pointerRef.current)
          setCatLocked(false)
          setCatState('walking')
          transitionLockRef.current = false
          return
        }
        gsap.to(pageClone, {
          x: rect.left,
          y: rect.top,
          scaleX: rect.width / window.innerWidth,
          scaleY: rect.height / window.innerHeight,
          opacity: 0,
          duration: 0.56,
          ease: 'power3.inOut',
          onComplete: () => {
            pageClone.remove()
            setCatTarget(null)
            setCatPosition(pointerRef.current)
            setCatLocked(false)
            setCatState('walking')
            transitionLockRef.current = false
          },
        })
      }, 60)
    }, 220)
  }, [moveCat, page, resetScroll, updateUrl])

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
    moveCat(destination, 0.48)
    const outgoing = document.querySelector('.page-content')
    if (outgoing) gsap.to(outgoing, { opacity: 0, y: 12, duration: 0.18, ease: 'power1.in' })
    window.setTimeout(() => {
      resetScroll()
      setPage(nextPage)
      updateUrl(nextPage)
      setCatState('sitting')
      transitionLockRef.current = false
    }, 360)
  }, [goHome, moveCat, resetScroll, updateUrl])

  const openFromHome = useCallback((nextPageString: string, target: HTMLElement | null) => {
    const nextPage = nextPageString as Page
    if (!internalPages.includes(nextPage) || transitionLockRef.current) return

    const box = target?.closest('.home-box') as HTMLElement | null
    const destination = pointFromElement(target)
    const cardRect = box?.getBoundingClientRect() ?? null
    if (box) box.style.visibility = 'hidden'

    transitionLockRef.current = true
    setCatLocked(true)
    setCatState('running')
    moveCat(destination, 0.52)

    window.setTimeout(() => {
      resetScroll()
      setPage(nextPage)
      updateUrl(nextPage)
      window.setTimeout(() => {
        const pageRoot = document.querySelector('.interior-page') as HTMLElement | null
        if (!pageRoot || !cardRect) {
          setCatState('sitting')
          transitionLockRef.current = false
          return
        }
        gsap.set(pageRoot, {
          position: 'fixed',
          left: cardRect.left,
          top: cardRect.top,
          width: window.innerWidth,
          height: window.innerHeight,
          maxWidth: 'none',
          margin: 0,
          overflow: 'hidden',
          transformOrigin: 'top left',
          scaleX: cardRect.width / window.innerWidth,
          scaleY: cardRect.height / window.innerHeight,
          zIndex: 80,
          background: 'var(--paper)',
        })
        gsap.to(pageRoot, {
          left: 0,
          top: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.72,
          ease: 'power3.inOut',
          onComplete: () => {
            gsap.set(pageRoot, { clearProps: 'position,left,top,width,height,maxWidth,margin,overflow,transformOrigin,transform,zIndex,background' })
            setCatState('sitting')
            transitionLockRef.current = false
          },
        })
      }, 40)
    }, 360)

    window.setTimeout(() => {
      const tabPoint = pointAboveTab(document.querySelector(`[data-cat-tab="${nextPage}"]`))
      setCatState('running')
      moveCat(tabPoint, 0.46)
    }, 520)
  }, [moveCat, resetScroll, updateUrl])

  useEffect(() => {
    const canonicalPath = pathForPage(page)
    if (window.location.pathname !== canonicalPath) window.history.replaceState({}, '', canonicalPath)
  }, [page])

  useEffect(() => {
    const onPopState = () => {
      const nextPage = pageFromPath(window.location.pathname)
      transitionLockRef.current = false
      setPage(nextPage)
      setCatLocked(nextPage !== 'home')
      setCatTarget(null)
      setCatState(nextPage === 'home' ? 'idle' : 'sitting')
      resetScroll()
      window.setTimeout(() => {
        if (nextPage !== 'home') moveCat(pointAboveTab(document.querySelector(`[data-cat-tab="${nextPage}"]`)), 0.25)
        else setCatPosition(pointerRef.current)
      }, 40)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [moveCat, resetScroll])

  useEffect(() => {
    resetScroll()
  }, [page, resetScroll])

  useEffect(() => {
    if (page === 'home' || catTarget) return
    const timer = window.setTimeout(() => moveCat(pointAboveTab(document.querySelector(`[data-cat-tab="${page}"]`)), 0.25), 40)
    return () => window.clearTimeout(timer)
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
      const keyed: Record<string, Page> = { '1': 'work', '2': 'experiments', '3': 'about', '4': 'contact' }
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
