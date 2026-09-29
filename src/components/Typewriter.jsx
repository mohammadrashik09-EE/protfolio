import { useEffect, useState } from 'react'

/** Cycles through words with a type/delete animation. */
export function Typewriter({ words, typeSpeed = 70, deleteSpeed = 38, hold = 1500 }) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const complete = text === word
    const delay = complete ? hold : deleting ? deleteSpeed : typeSpeed

    const timer = setTimeout(() => {
      if (complete) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold])

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] animate-blink bg-aqua-400" />
    </span>
  )
}
