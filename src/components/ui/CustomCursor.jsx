import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [cursorState, setCursorState] = useState('default')

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const trailX = useSpring(mouseX, { stiffness: 150, damping: 25 })
  const trailY = useSpring(mouseY, { stiffness: 150, damping: 25 })
  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    setEnabled(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const onMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [enabled, mouseX, mouseY])

  useEffect(() => {
    if (!enabled) return
    const handleMouseOver = (e) => {
      const el = e.target.closest('[data-cursor]')
      if (el) setCursorState(el.getAttribute('data-cursor'))
    }
    const handleMouseOut = (e) => {
      if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('[data-cursor]')) return
      setCursorState('default')
    }
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [enabled])

  if (!enabled) return null

  const variants = {
    default: { width: 10, height: 10, x: '-50%', y: '-50%', borderRadius: '50%', backgroundColor: '#F7F3EA', opacity: 1 },
    hover: { width: 46, height: 46, x: '-50%', y: '-50%', borderRadius: '50%', backgroundColor: '#F7F3EA', opacity: 1 },
    text: { width: 3, height: 22, x: '-2px', y: '-11px', borderRadius: '2px', backgroundColor: '#F7F3EA', opacity: 1 },
    view: { width: 64, height: 64, x: '-50%', y: '-50%', borderRadius: '50%', backgroundColor: '#F7F3EA', opacity: 1 },
  }

  const trailingVariants = {
    default: { width: 30, height: 30, opacity: 0.35, border: '1px solid #F7F3EA', backgroundColor: 'transparent' },
    hover: { opacity: 0 },
    text: { opacity: 0 },
    view: { opacity: 0 },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none flex justify-center items-center text-ink font-body text-[10px] tracking-widest font-bold overflow-hidden mix-blend-difference"
        style={{ x: springX, y: springY }}
        variants={variants}
        animate={cursorState}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        {cursorState === 'view' && 'VER'}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full mix-blend-difference"
        style={{ x: trailX, y: trailY, transform: 'translate(-50%, -50%)' }}
        variants={trailingVariants}
        animate={cursorState}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
