import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { projects } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SpotlightCard } from './SpotlightCard'

const FILTERS = [
  { id: 'all', label: 'All work' },
  { id: 'Next.js', label: 'Next.js' },
  { id: 'React', label: 'React' },
  { id: 'Express.js', label: 'Express.js' },
  { id: 'HTML5', label: 'HTML & CSS' },
]

function ProjectCard({ project, index }) {
  return (
    <SpotlightCard className="card-surface h-full transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-400/60 hover:shadow-2xl hover:shadow-brand-500/10">
      <div className="flex h-full flex-col">
        <div className={`relative h-40 overflow-hidden bg-linear-to-br ${project.accent}`}>
          <div className="grid-lines absolute inset-0 opacity-30" />
          <div className="noise-overlay absolute inset-0 opacity-10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-5xl font-bold text-white/25 transition-transform duration-700 group-hover:scale-110">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="absolute top-3 left-3 flex gap-1.5">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/20 px-2.5 py-1 font-mono text-[10px] tracking-wide text-white uppercase backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="absolute right-3 bottom-3 flex gap-2">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open live demo of ${project.title}`}
                className="grid size-9 place-items-center rounded-full bg-white/90 text-ink-900 opacity-0 transition-all duration-400 hover:bg-white group-hover:opacity-100"
              >
                <Icon name="arrowUpRight" className="size-4" />
              </a>
            ) : null}
            {project.code ? (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`View source code of ${project.title}`}
                className="grid size-9 place-items-center rounded-full bg-white/90 text-ink-900 opacity-0 transition-all duration-400 hover:bg-white group-hover:opacity-100"
              >
                <Icon name="github" className="size-4" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg leading-snug font-semibold transition-colors duration-300 group-hover:text-brand-600 dark:group-hover:text-aqua-300">
              {project.title}
            </h3>
            <span className="font-mono text-[11px] text-ink-400 dark:text-ink-500">
              {project.year}
            </span>
          </div>

          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            {project.blurb}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-lg bg-ink-100 px-2.5 py-1 font-mono text-[10.5px] text-ink-600 dark:bg-white/5 dark:text-ink-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SpotlightCard>
  )
}

export function Work() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.stack.includes(filter))),
    [filter],
  )

  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="glow-orb top-24 -right-40 size-[26rem] bg-brand-500/12 dark:bg-brand-500/10" />

      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Projects that taught me"
          highlight="how to build"
          copy="A mix of self-directed builds and coursework — each one pushed a different skill."
        />

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] tracking-wide uppercase transition-all duration-300 ${
                filter === item.id
                  ? 'border-transparent bg-linear-to-r from-brand-500 to-aqua-400 text-white shadow-lg shadow-brand-500/25'
                  : 'border-ink-200 text-ink-600 hover:border-brand-400 hover:text-brand-500 dark:border-white/12 dark:text-ink-300 dark:hover:text-aqua-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -8 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} index={projects.indexOf(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
