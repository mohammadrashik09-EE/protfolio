import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Icon } from './Icon'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed right-5 bottom-5 z-30 grid size-11 place-items-center rounded-full bg-linear-to-br from-brand-500 to-aqua-400 text-white shadow-xl shadow-brand-500/30 transition-transform duration-300 hover:-translate-y-1 sm:right-8 sm:bottom-8"
        >
          <Icon name="arrowRight" className="size-4 -rotate-90" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
