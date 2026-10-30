import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

function shouldSkipAnimation(): boolean {
  if (typeof window === 'undefined') return true
  if (typeof window.IntersectionObserver === 'undefined') return true
  if (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return true
  }
  return false
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState<boolean>(shouldSkipAnimation)

  useEffect(() => {
    if (visible) return
    const element = ref.current
    if (!element || typeof window.IntersectionObserver === 'undefined') {
      return
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
            break
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -36px 0px',
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: visible && delay > 0 ? `${delay}ms` : undefined,
      }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-[28px] opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

