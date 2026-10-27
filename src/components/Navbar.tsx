import { useState } from 'react'
import { profile } from '../data/portfolio'

interface NavbarProps {
  darkMode: boolean
  onToggleDarkMode: () => void
}

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

// Simple top navigation bar with name on the left and 4 plain text links on the right.
// Collapses to a basic "Menu" text button on small screens.
export function Navbar({ darkMode, onToggleDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-[#E7E5E4] bg-[#FAFAF9] dark:border-[#292524] dark:bg-[#141413]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[760px] items-center justify-between px-5 py-5 sm:px-6"
      >
        <a
          href="#top"
          className="text-[18px] font-semibold text-[#1C1917] hover:underline dark:text-[#F5F5F4]"
        >
          {profile.name}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] text-[#44403C] hover:text-[#2F5DA8] hover:underline dark:text-[#D6D3D1] dark:hover:text-[#7AA8E8]"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="text-[15px] text-[#57534E] underline-offset-4 hover:text-[#2F5DA8] hover:underline dark:text-[#A8A29E] dark:hover:text-[#7AA8E8]"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-4 sm:hidden">
          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="text-[15px] text-[#57534E] hover:text-[#2F5DA8] hover:underline dark:text-[#A8A29E] dark:hover:text-[#7AA8E8]"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-links"
            className="text-[16px] font-medium text-[#1C1917] hover:text-[#2F5DA8] hover:underline dark:text-[#F5F5F4] dark:hover:text-[#7AA8E8]"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile links list */}
      {menuOpen && (
        <div
          id="mobile-nav-links"
          className="border-t border-[#E7E5E4] bg-[#FAFAF9] px-5 py-4 dark:border-[#292524] dark:bg-[#141413] sm:hidden"
        >
          <ul className="mx-auto flex max-w-[760px] flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-[17px] text-[#1C1917] hover:text-[#2F5DA8] hover:underline dark:text-[#F5F5F4] dark:hover:text-[#7AA8E8]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

