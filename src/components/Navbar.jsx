import { useEffect, useState } from 'react'
import { profile, navLinks } from '../data/portfolio'
import { useScrollProgress, useScrollSpy } from '../hooks/useScroll'
import { Icon } from './Icon'

const SECTION_IDS = navLinks.map((link) => link.id)

export function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(SECTION_IDS)
  const progress = useScrollProgress()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-linear-to-r from-brand-500 via-aqua-400 to-flare-400"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink-200/70 bg-ink-50/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/80'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="shell flex h-18 items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="relative grid size-9 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-aqua-400 font-display text-sm font-bold text-white shadow-lg shadow-brand-500/30">
              {profile.initials}
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/30 ring-inset" />
            </span>
            <span className="hidden font-display text-sm leading-tight font-semibold sm:block">
              {profile.name}
              <span className="block font-mono text-[10px] tracking-widest text-ink-500 uppercase dark:text-ink-400">
                {profile.role}
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                    active === link.id
                      ? 'text-brand-600 dark:text-aqua-300'
                      : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {active === link.id ? (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-linear-to-r from-brand-500 to-aqua-400" />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              className="grid size-9 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all duration-300 hover:rotate-12 hover:border-brand-400 hover:text-brand-500 dark:border-white/12 dark:text-ink-300 dark:hover:text-aqua-300"
            >
              <Icon name={isDark ? 'sun' : 'moon'} className="size-4" />
            </button>

            <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">
              Hire me
              <Icon name="arrowRight" className="size-4" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-full border border-ink-200 text-ink-700 md:hidden dark:border-white/12 dark:text-ink-200"
            >
              <Icon name={open ? 'close' : 'menu'} className="size-4" />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-30 md:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink-950/50 backdrop-blur-sm transition-opacity duration-400 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-x-4 top-20 rounded-3xl border border-ink-200/80 bg-ink-50/95 p-4 shadow-2xl backdrop-blur-xl transition-all duration-400 dark:border-white/10 dark:bg-ink-900/95 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  style={{ transitionDelay: open ? `${i * 45}ms` : '0ms' }}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 font-medium transition-all duration-300 ${
                    active === link.id
                      ? 'bg-brand-500/10 text-brand-600 dark:bg-white/5 dark:text-aqua-300'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  <Icon name="arrowUpRight" className="size-4 opacity-40" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
