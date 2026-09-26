import { motion } from 'framer-motion'

// Misma curva y duración de entrada que en tailwind.config.js
// (0.5s, arranca rápido y frena suave). El desplazamiento es corto a propósito.
export const EASE = [0.16, 1, 0.3, 1]

export default function ScrollReveal({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
