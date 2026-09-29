import { useRef } from 'react'

/** Card wrapper that renders a soft spotlight following the cursor. */
export function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)

  const onMove = (event) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(360px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklab, var(--color-brand-500) 14%, transparent), transparent 70%)',
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  )
}
