import { useState, useEffect, useRef } from 'react'

export function useTypewriter(texts: string[], speed = 100, pause = 2500) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const rafRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    const currentText = texts[textIndex]
    const targetSpeed = isDeleting ? speed / 2 : speed

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      const elapsed = timestamp - lastTimeRef.current

      if (elapsed < targetSpeed) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      lastTimeRef.current = timestamp

      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        if (texts.length === 1) return
        setTimeout(() => setIsDeleting(true), pause)
        return
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((i) => (i + 1) % texts.length)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [charIndex, isDeleting, textIndex, texts, speed, pause])

  return displayText
}
