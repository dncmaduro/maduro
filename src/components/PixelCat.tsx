import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import type { CatState } from '../types'

type Point = { x: number; y: number }

type PixelCatProps = {
  state: CatState
  position: Point
  target?: (Point & { key: number; duration?: number }) | null
  onEasterEgg?: () => void
}

export function PixelCat({ state, position, target, onEasterEgg }: PixelCatProps) {
  const catRef = useRef<HTMLDivElement>(null)
  const lastClickRef = useRef(0)
  const clickCountRef = useRef(0)

  useEffect(() => {
    if (!catRef.current) return
    gsap.killTweensOf(catRef.current)
    if (target) {
      gsap.to(catRef.current, {
        left: target.x,
        top: target.y,
        duration: target.duration ?? 0.58,
        ease: 'power2.inOut',
      })
      return
    }
    gsap.to(catRef.current, {
      left: position.x,
      top: position.y,
      duration: 0.15,
      ease: 'power2.out',
    })
  }, [position, target])

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!catRef.current) return
      const rect = catRef.current.getBoundingClientRect()
      const withinCat = event.clientX >= rect.left - 12 && event.clientX <= rect.right + 12 && event.clientY >= rect.top - 12 && event.clientY <= rect.bottom + 12
      if (!withinCat) return
      const now = Date.now()
      clickCountRef.current = now - lastClickRef.current < 900 ? clickCountRef.current + 1 : 1
      lastClickRef.current = now
      if (clickCountRef.current >= 5) {
        clickCountRef.current = 0
        onEasterEgg?.()
      }
    }
    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [onEasterEgg])

  return (
    <div ref={catRef} className={`pixel-cat pixel-cat--${state}`} aria-hidden="true">
      <span className="cat-shadow" />
      <span className="cat-tail" />
      <span className="cat-body">
        <span className="cat-ear cat-ear--left" />
        <span className="cat-ear cat-ear--right" />
        <span className="cat-face"><i /><i /></span>
        <span className="cat-paw cat-paw--left" />
        <span className="cat-paw cat-paw--right" />
      </span>
    </div>
  )
}
