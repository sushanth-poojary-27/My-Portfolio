import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

interface NavbarProps {
  darkMode: boolean
  onToggleDarkMode: () => void
}

const navLinks = [
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export function Navbar({ darkMode, onToggleDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window.IntersectionObserver === 'undefined') return

    const elements = navLinks
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new window.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0,
      },
    )

    for (const el of elements) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-line bg-bg/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1140px] items-center justify-between px-5 py-5 sm:px-8"
      >
        <a
          href="#top"
          onClick={() => setActiveSection('')}
          className="font-serif text-xl tracking-tight text-ink transition-colors duration-200 hover:text-accent sm:text-2xl"
        >
          {profile.name}
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-1 text-xs font-medium uppercase tracking-[0.22em] transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute right-0 -bottom-1 left-0 h-px bg-accent transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            )
          })}

          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="rounded-full border border-line bg-surface/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-all duration-200 hover:border-accent hover:text-accent"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:border-accent hover:text-accent"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-links"
            className="rounded-full border border-line bg-surface px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:border-accent hover:text-accent"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          id="mobile-nav-links"
          className="border-t border-line bg-bg/95 px-5 py-8 backdrop-blur-xl sm:px-8 md:hidden"
        >
          <ul className="mx-auto flex max-w-[1140px] flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block font-serif text-3xl transition-colors duration-200 ${
                      isActive ? 'italic text-accent' : 'text-ink hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
