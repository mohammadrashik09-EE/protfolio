import { motion } from 'motion/react'

const DIRECTION_OFFSETS = {
  up: { y: 26, x: 0 },
  down: { y: -26, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
  none: { x: 0, y: 0 },
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  as = 'div',
  ...rest
}) {
  const Component = motion[as] ?? motion.div
  const offset = DIRECTION_OFFSETS[direction] ?? DIRECTION_OFFSETS.up

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}
