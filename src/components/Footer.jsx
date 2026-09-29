import { profile } from '../data/portfolio'
import { Icon } from './Icon'

const YEAR = new Date().getFullYear()

export function Footer() {
  const year = YEAR

  return (
    <footer className="border-t border-ink-200/70 py-12 dark:border-white/10">
      <div className="shell">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-aqua-400 font-display text-sm font-bold text-white">
                {profile.initials}
              </span>
              <span className="font-display font-semibold">{profile.name}</span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-ink-600 dark:text-ink-400">
              {profile.role} based in {profile.location}. Building clean, accessible web interfaces.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email me"
              className="grid size-10 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 dark:border-white/12 dark:text-ink-300 dark:hover:text-aqua-300"
            >
              <Icon name="mail" className="size-4" />
            </a>
            {profile.links.github ? (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="grid size-10 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 dark:border-white/12 dark:text-ink-300 dark:hover:text-aqua-300"
              >
                <Icon name="github" className="size-4" />
              </a>
            ) : null}
            {profile.links.linkedin ? (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 dark:border-white/12 dark:text-ink-300 dark:hover:text-aqua-300"
              >
                <Icon name="linkedin" className="size-4" />
              </a>
            ) : null}
            {profile.links.resume ? (
              <a
                href={profile.links.resume}
                className="btn-ghost !px-4 !py-2.5 text-sm"
                download
              >
                <Icon name="download" className="size-4" />
                Résumé
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink-200/70 pt-6 font-mono text-[11px] text-ink-500 md:flex-row dark:border-white/10 dark:text-ink-400">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Handcrafted with React, Tailwind CSS &amp; too much coffee.</p>
        </div>
      </div>
    </footer>
  )
}
