import { motion } from 'motion/react'
import { profile } from '../data/portfolio'
import { Icon } from './Icon'
import { Typewriter } from './Typewriter'

const CODE_LINES = [
  { indent: 0, text: 'const', accent: 'developer', rest: ' dev = {' },
  { indent: 1, text: 'name:', accent: 'key', rest: " 'Mahammad Rashik'," },
  { indent: 1, text: 'role:', accent: 'key', rest: " 'Frontend Web Developer'," },
  { indent: 1, text: 'stack:', accent: 'key', rest: " ['Next.js', 'Express.js', 'HTML', 'CSS']," },
  { indent: 1, text: 'location:', accent: 'key', rest: " 'Ujire, Mangalore'," },
  { indent: 1, text: 'available:', accent: 'key', rest: ' true,' },
  { indent: 0, text: '};', accent: 'punct' },
]

const ACCENT_CLASSES = {
  developer: 'text-brand-500 dark:text-brand-300',
  key: 'text-aqua-500 dark:text-aqua-300',
  punct: 'text-ink-500 dark:text-ink-400',
}

function CodeCard() {
  return (
    <div className="card-surface relative overflow-hidden p-5 shadow-xl shadow-ink-900/10 dark:shadow-black/40">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]" />
      <div className="relative flex items-center gap-2 border-b border-ink-200/70 pb-3 dark:border-white/10">
        <span className="size-2.5 rounded-full bg-red-400/80" />
        <span className="size-2.5 rounded-full bg-flare-400/80" />
        <span className="size-2.5 rounded-full bg-aqua-400/80" />
        <span className="ml-2 font-mono text-[11px] text-ink-500 dark:text-ink-400">developer.js</span>
      </div>

      <div className="relative mt-4 font-mono text-[12.5px] leading-6 sm:text-[13px]">
        {CODE_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.13, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex whitespace-pre"
          >
            <span className="w-5 shrink-0 text-ink-400/70 dark:text-ink-600">{line.indent}</span>
            <span>
              {line.accent === 'developer' ? <span className={ACCENT_CLASSES.developer}>const</span> : null}
              {line.accent === 'key' ? <span className={ACCENT_CLASSES.key}>{line.text}</span> : null}
              {line.accent === 'punct' ? <span className={ACCENT_CLASSES.punct}>{line.text}</span> : null}
              <span className="text-ink-600 dark:text-ink-300">{line.rest}</span>
            </span>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {['Responsive', 'Accessible', 'Pixel-clean'].map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + i * 0.12, duration: 0.45 }}
            className="chip !text-[10px]"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28">
      {/* backdrop */}
      <div className="grid-lines mask-fade-x absolute inset-0 -z-20" />
      <div className="glow-orb -top-24 -left-24 size-[28rem] animate-float bg-brand-500/25 dark:bg-brand-500/20" />
      <div
        className="glow-orb -top-10 right-0 size-[24rem] animate-float-slow bg-aqua-400/20 dark:bg-aqua-500/15"
        style={{ animationDelay: '-3s' }}
      />
      <div
        className="glow-orb bottom-0 left-1/3 size-[22rem] animate-float bg-flare-400/15 dark:bg-flare-500/10"
        style={{ animationDelay: '-6s' }}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-transparent to-ink-50 dark:to-ink-950" />

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="chip group hover:border-brand-400 hover:text-brand-500 dark:hover:text-aqua-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-aqua-400 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-aqua-500" />
            </span>
            {profile.availability}
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-4xl leading-[1.05] font-bold text-balance sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{' '}
            <span className="relative inline-block">
              <span className="text-gradient">{profile.name}</span>
              <svg
                className="absolute -bottom-1.5 left-0 h-3 w-full text-aqua-400/70"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M2 8c40-5 80-6 98-3s58 2 98-3"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.9, duration: 1.1, ease: 'easeInOut' }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-ink-600 dark:text-ink-300"
          >
            A <span className="font-medium text-ink-800 dark:text-white">{profile.role}</span> from{' '}
            {profile.location}, building <Typewriter words={profile.roles} /> interfaces that are
            fast, accessible and genuinely nice to use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="btn-primary">
              View my work
              <Icon name="arrowRight" className="size-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Icon name="mail" className="size-4" />
              Get in touch
            </a>
            {profile.links.github ? (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="grid size-11 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 dark:border-white/12 dark:text-ink-300 dark:hover:text-aqua-300"
              >
                <Icon name="github" />
              </a>
            ) : null}
            {profile.links.linkedin ? (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="grid size-11 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 dark:border-white/12 dark:text-ink-300 dark:hover:text-aqua-300"
              >
                <Icon name="linkedin" />
              </a>
            ) : null}
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
          >
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-ink-900 sm:text-3xl dark:text-white">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-mono text-[10px] tracking-widest text-ink-500 uppercase dark:text-ink-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            className="glow-orb -top-6 -right-6 size-40 bg-brand-500/30"
            style={{ animationDelay: '-2s' }}
          />
          <CodeCard />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="card-surface absolute -bottom-6 -left-4 hidden items-center gap-3 px-4 py-3 shadow-lg sm:flex"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-aqua-400/15 text-aqua-500 dark:text-aqua-300">
              <Icon name="check" className="size-4" />
            </span>
            <span className="font-mono text-[11px] leading-tight text-ink-600 dark:text-ink-300">
              <span className="block text-ink-900 dark:text-white">BCA completed</span>
              Frontend focused
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mx-auto mt-16 hidden w-fit flex-col items-center gap-2 text-ink-500 hover:text-brand-500 md:flex dark:text-ink-400"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="relative h-10 w-5 rounded-full border border-current">
          <motion.span
            animate={{ y: [4, 16, 4], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-current"
          />
        </span>
      </motion.a>
    </section>
  )
}
