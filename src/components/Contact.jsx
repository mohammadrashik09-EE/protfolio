import { useState } from 'react'
import { motion } from 'motion/react'
import { profile } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const CONTACT_CARDS = [
  { key: 'email', label: 'Email', value: profile.email, icon: 'mail', href: `mailto:${profile.email}` },
  { key: 'location', label: 'Location', value: `${profile.location}, Karnataka, India`, icon: 'pin' },
  ...(profile.links.github
    ? [
        {
          key: 'github',
          label: 'GitHub',
          value: 'See my code',
          icon: 'github',
          href: profile.links.github,
        },
      ]
    : []),
  ...(profile.links.linkedin
    ? [
        {
          key: 'linkedin',
          label: 'LinkedIn',
          value: "Let's connect",
          icon: 'linkedin',
          href: profile.links.linkedin,
        },
      ]
    : []),
]

const FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Doe' },
  { name: 'email', label: 'Your email', type: 'email', placeholder: 'jane@company.com' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [copied, setCopied] = useState(false)

  const update = (name) => (event) => {
    setValues((prev) => ({ ...prev, [name]: event.target.value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please add your name'
    if (!EMAIL_RE.test(values.email)) next.email = 'Enter a valid email address'
    if (values.message.trim().length < 12) next.message = 'Tell me a little more (12+ characters)'

    setErrors(next)
    if (Object.keys(next).length > 0) return

    const subject = `Portfolio enquiry from ${values.name}`
    const body = `${values.message}\n\n— ${values.name} (${values.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 sm:py-28">
      <div className="grid-lines absolute inset-0 -z-20" />
      <div className="glow-orb -bottom-32 -left-20 size-[30rem] bg-aqua-400/20 dark:bg-aqua-500/15" />
      <div className="glow-orb top-0 right-0 size-[24rem] bg-flare-400/15 dark:bg-flare-500/10" />

      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's build something"
          highlight="worth shipping"
          copy="Got an opening, a project, or just a question? My inbox is open."
          align="center"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {CONTACT_CARDS.map((card, i) => {
              const content = (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand-500/12 to-aqua-400/12 text-brand-500 transition-transform duration-500 group-hover:scale-110 dark:text-aqua-300">
                    <Icon name={card.icon} className="size-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] tracking-[0.2em] text-ink-500 uppercase dark:text-ink-400">
                      {card.label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-ink-900 dark:text-white">
                      {card.value}
                    </span>
                  </span>
                </>
              )

              return (
                <Reveal key={card.key} delay={i * 0.08} direction="left">
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer noopener"
                      className="card-surface group flex items-center gap-4 p-5 transition-all duration-400 hover:-translate-y-1 hover:border-brand-400/60"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card-surface group flex items-center gap-4 p-5 transition-all duration-400 hover:-translate-y-1 hover:border-brand-400/60">
                      {content}
                    </div>
                  )}
                </Reveal>
              )
            })}

            <Reveal delay={0.34} direction="left">
              <button
                type="button"
                onClick={copyEmail}
                className="card-surface group flex w-full items-center justify-between gap-4 p-5 text-left transition-all duration-400 hover:-translate-y-1 hover:border-brand-400/60"
              >
                <span className="text-sm font-medium text-ink-700 dark:text-ink-200">
                  {copied ? 'Copied to clipboard!' : 'Copy my email address'}
                </span>
                <Icon
                  name={copied ? 'check' : 'mail'}
                  className={`size-4.5 shrink-0 transition-colors ${
                    copied ? 'text-aqua-500' : 'text-ink-400'
                  }`}
                />
              </button>
            </Reveal>
          </div>

          <Reveal delay={0.12} direction="right">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-surface relative overflow-hidden p-7 sm:p-9"
            >
              <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" />

              <div className="relative grid gap-5 sm:grid-cols-2">
                {FIELDS.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 block font-mono text-[10.5px] tracking-[0.2em] text-ink-500 uppercase dark:text-ink-400"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={values[field.name]}
                      onChange={update(field.name)}
                      placeholder={field.placeholder}
                      aria-invalid={Boolean(errors[field.name])}
                      className={`w-full rounded-2xl border bg-transparent px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-ink-400 dark:placeholder:text-ink-600 ${
                        errors[field.name]
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-ink-200 focus:border-brand-500 dark:border-white/12 dark:focus:border-aqua-400'
                      }`}
                    />
                    {errors[field.name] ? (
                      <p className="mt-1.5 text-xs text-red-500">{errors[field.name]}</p>
                    ) : null}
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[10.5px] tracking-[0.2em] text-ink-500 uppercase dark:text-ink-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={update('message')}
                    placeholder="Tell me about the role or project…"
                    aria-invalid={Boolean(errors.message)}
                    className={`w-full resize-y rounded-2xl border bg-transparent px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-ink-400 dark:placeholder:text-ink-600 ${
                      errors.message
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-ink-200 focus:border-brand-500 dark:border-white/12 dark:focus:border-aqua-400'
                    }`}
                  />
                  {errors.message ? (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                  ) : null}
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary relative mt-7 w-full"
              >
                Send message
                <Icon name="arrowRight" className="size-4" />
              </motion.button>

              <p className="relative mt-4 text-center font-mono text-[10.5px] text-ink-500 dark:text-ink-400">
                Opens your default email client — no data is stored anywhere.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
