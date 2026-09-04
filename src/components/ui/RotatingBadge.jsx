import { motion } from 'framer-motion'

export default function RotatingBadge({ text, className = '' }) {
  const pathId = 'rotating-badge-path'
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className={className}
    >
      <svg viewBox="0 0 100 100" width="100" height="100">
        <path id={pathId} d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
        <text className="fill-cream/70 text-[9.5px] tracking-widest uppercase font-body">
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
    </motion.div>
  )
}
