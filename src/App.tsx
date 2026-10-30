import { useEffect, useState } from 'react'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

// Root component: Obsidian dark-first editorial layout (max-width 1140px)
// with DARK as the default theme and choice persisted under localStorage key "theme".
export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = window.localStorage.getItem('theme')
      return saved ? saved === 'dark' : true
    } catch {
      return true
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    } catch {
      // Ignore storage errors if private browsing restricts localStorage
    }
  }, [darkMode])

  return (
    <div
      id="top"
      className="min-h-screen bg-bg text-ink transition-colors duration-200"
    >
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      <main>
        <Intro />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-line py-10">
        <div className="mx-auto max-w-[1140px] px-5 text-sm text-muted sm:px-8">
          © 2026 Sushanth Poojary
        </div>
      </footer>
    </div>
  )
}

export default App
