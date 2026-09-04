import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const scale = useMotionValue(1)
  const springScale = useSpring(scale, { stiffness: 300, damping: 20 })
  const ref = useRef(null)

  useEffect(() => {
    setEnabled(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`
      }
    }
    const onDown = () => scale.set(1.35)
    const onUp = () => scale.set(1)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [enabled, scale])

  if (!enabled) return null

  return (
    <motion.div
      ref={ref}
      style={{ scale: springScale }}
      className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-yellow/[0.12] blur-[110px] pointer-events-none z-40 mix-blend-screen"
    />
  )
}
