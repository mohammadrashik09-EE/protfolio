import { testimonials, timeline } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Journey"
          title="Where I've been and"
          highlight="where I'm heading"
          copy="Still early in my career — and that is exactly the point."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ol className="relative space-y-8 border-l border-ink-200 pl-7 dark:border-white/10">
            <div className="absolute top-2 -left-[1px] h-24 w-px bg-linear-to-b from-brand-500 to-transparent" />

            {timeline.map((entry, i) => (
              <Reveal as="li" key={entry.period} delay={i * 0.1} direction="left" className="relative">
                <span
                  className={`absolute top-1.5 -left-[33px] grid size-3.5 place-items-center rounded-full border-2 ${
                    entry.current
                      ? 'border-brand-500 bg-brand-500/25'
                      : 'border-ink-300 bg-ink-50 dark:border-ink-600 dark:bg-ink-950'
                  }`}
                >
                  {entry.current ? (
                    <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/30" />
                  ) : null}
                </span>

                <div className="card-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/60">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="chip !border-brand-400/50 !text-brand-600 dark:!text-aqua-300">
                      {entry.period}
                    </span>
                    {entry.current ? (
                      <span className="rounded-full bg-aqua-400/15 px-2.5 py-1 font-mono text-[10px] tracking-wide text-aqua-500 uppercase dark:text-aqua-300">
                        Current
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">{entry.title}</h3>
                  <p className="font-mono text-xs text-ink-500 dark:text-ink-400">{entry.org}</p>

                  <ul className="mt-4 space-y-2">
                    {entry.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-linear-to-br from-brand-500 to-aqua-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="space-y-4">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={0.1 + i * 0.1} direction="right">
                <figure className="card-surface relative overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/60">
                  <Icon
                    name="quote"
                    className="absolute top-5 right-5 size-10 text-brand-500/12 dark:text-aqua-400/12"
                  />
                  <blockquote className="relative text-base leading-relaxed text-pretty text-ink-700 dark:text-ink-200">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-linear-to-br from-brand-500 to-aqua-400 font-display text-xs font-bold text-white">
                      {item.name.slice(0, 1)}
                    </span>
                    <span className="text-sm">
                      <span className="block font-medium text-ink-900 dark:text-white">{item.name}</span>
                      <span className="font-mono text-[11px] text-ink-500 dark:text-ink-400">
                        {item.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}

            <Reveal delay={0.3} direction="right">
              <div className="rounded-3xl border border-dashed border-ink-300 p-7 text-center dark:border-white/15">
                <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  This timeline has a blank space waiting for a{' '}
                  <span className="font-medium text-ink-900 dark:text-white">production team</span>. If
                  that&apos;s yours, let&apos;s talk.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
