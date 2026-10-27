import { useEffect, useState } from 'react'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

// Root component: single-column layout (max-width 760px) with light theme by default
// and an optional dark mode toggle.
export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      return window.localStorage.getItem('theme') === 'dark'
    } catch {
      return false
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
      className="min-h-screen bg-[#FAFAF9] text-[#1C1917] transition-colors duration-150 dark:bg-[#141413] dark:text-[#F5F5F4]"
    >
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      <main className="mx-auto max-w-[760px] px-5 sm:px-6">
        <Intro />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-[#E7E5E4] py-8 dark:border-[#292524]">
        <div className="mx-auto max-w-[760px] px-5 text-[15px] text-[#57534E] dark:text-[#A8A29E] sm:px-6">
          © 2026 Sushanth Poojary
        </div>
      </footer>
    </div>
  )
}

export default App

