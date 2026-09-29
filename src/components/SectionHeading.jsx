import { Reveal } from './Reveal'

export function SectionHeading({ index, eyebrow, title, highlight, copy, align = 'left' }) {
  const centered = align === 'center'

  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start'}`}>
      <Reveal direction="none">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-brand-500 dark:text-aqua-400">{index}</span>
          <span className="h-px w-10 bg-linear-to-r from-brand-500 to-transparent" />
          <span className="font-mono text-[11px] tracking-[0.28em] text-ink-500 uppercase dark:text-ink-400">
            {eyebrow}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="max-w-2xl text-3xl leading-[1.15] font-semibold text-balance sm:text-4xl md:text-5xl">
          {title} {highlight ? <span className="text-gradient">{highlight}</span> : null}
        </h2>
      </Reveal>

      {copy ? (
        <Reveal delay={0.12}>
          <p
            className={`max-w-2xl text-base leading-relaxed text-pretty text-ink-600 dark:text-ink-300 ${
              centered ? 'mx-auto' : ''
            }`}
          >
            {copy}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
