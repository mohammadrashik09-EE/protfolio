import { marqueeItems } from '../data/portfolio'

export function Marquee() {
  const track = [...marqueeItems, ...marqueeItems]

  return (
    <div className="relative border-y border-ink-200/70 py-5 dark:border-white/10">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-3 hover:[animation-play-state:paused]">
          {track.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-3 font-display text-sm font-medium whitespace-nowrap text-ink-500 transition-colors hover:text-brand-500 sm:text-base dark:text-ink-400 dark:hover:text-aqua-300"
            >
              {item}
              <span className="size-1.5 rounded-full bg-linear-to-br from-brand-500 to-aqua-400" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
