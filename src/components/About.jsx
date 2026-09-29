import { profile, services } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="glow-orb top-10 -left-32 size-96 bg-aqua-400/12 dark:bg-aqua-500/10" />

      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="About me"
          title="Design-minded developer with a"
          highlight="builder's mindset"
          copy="Here's the short version of who I am and how I work."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal direction="left" className="space-y-5">
            {profile.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-[1.85] text-pretty text-ink-600 dark:text-ink-300"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              {services.map((service) => (
                <span key={service.title} className="chip">
                  <Icon name={service.icon} className="size-3.5" />
                  {service.title}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.09} direction="right">
                <article className="group card-surface relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-xl hover:shadow-brand-500/10">
                  <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-brand-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-brand-500/12 to-aqua-400/12 text-brand-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 dark:text-aqua-300">
                      <Icon name={service.icon} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
