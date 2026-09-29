import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import { Work } from './components/Work'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { isDark, toggle } = useTheme()

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Navbar isDark={isDark} onToggleTheme={toggle} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Journey />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
