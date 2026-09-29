import { motion } from 'motion/react'
import { skills } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Toolkit"
          title="The stack I build"
          highlight="with every day"
          copy="A focused toolkit — I go deep on a few things rather than shallow on everything."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.1}>
              <article className="group card-surface relative h-full overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-400/60">
                <div className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-brand-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{group.name}</h3>
                  <span className="font-mono text-xs text-ink-500 dark:text-ink-400">
                    {group.level}%
                  </span>
                </div>

                <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-ink-200/80 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-linear-to-r from-brand-500 via-aqua-400 to-flare-400"
                  />
                </div>

                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-ink-200/80 px-3 py-1.5 text-sm text-ink-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-ink-200 dark:hover:border-aqua-400 dark:hover:text-aqua-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
