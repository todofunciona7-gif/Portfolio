import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import RotatingBadge from '../ui/RotatingBadge'
import AnimatedCounter from '../ui/AnimatedCounter'

const line1 = 'Estrategia y contenido'.split(' ')
const line2 = 'para marcas que quieren'.split(' ')

export default function Hero() {
  let wordIndex = 0
  const renderWords = (words) =>
    words.map((word, i) => {
      const delay = wordIndex++ * 0.07
      return (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      )
    })

  return (
    <section className="relative bg-ink overflow-hidden pt-32 md:pt-40 pb-24 md:pb-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />
      <div className="grain absolute inset-0 z-[1]" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-ink-soft border border-white/10 text-muted-dark font-body text-xs uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 bg-yellow rounded-full animate-pulse-slow" />
              Community Manager &amp; gestión de redes
            </motion.div>

            <h1 className="font-display font-normal text-[clamp(40px,5.6vw,68px)] leading-[1.05] mb-7 tracking-[-0.01em] text-cream">
              <span className="block">{renderWords(line1)}</span>
              <span className="block">{renderWords(line2)}</span>
              <motion.em
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: wordIndex * 0.07, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="not-italic italic bg-yellow text-ink px-2 inline-block"
              >
                crecer en serio.
              </motion.em>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg leading-[1.6] text-muted-dark max-w-[480px] mb-9"
            >
              Gestiono redes sociales de punta a punta: estrategia, contenido, diseño y reportes. Cuatro años
              acompañando cuentas que necesitaban una voz clara y presencia constante.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <MagneticButton
                href="#contacto"
                className="inline-block bg-yellow text-ink px-7 py-[15px] rounded-[2px] text-[15px] font-semibold"
              >
                Coordinemos una llamada
              </MagneticButton>
              <MagneticButton
                href="#casos"
                className="inline-block border border-white/20 text-cream px-7 py-[15px] rounded-[2px] text-[15px] font-semibold hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                Ver casos
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <ImagePlaceholder label="Foto de Agostina" height="h-[420px] md:h-[520px]" />

            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 hidden md:block opacity-80"
            >
              <RotatingBadge text="Community Manager · San Rafael · 2026 · " />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="absolute -bottom-6 -left-6 bg-ink-soft border border-white/10 rounded-[2px] px-6 py-4"
            >
              <div className="font-display text-3xl text-yellow leading-none">
                <AnimatedCounter end={3000} prefix="+" />
              </div>
              <div className="font-body text-[11px] text-muted-dark tracking-wider mt-1 uppercase">
                seguidores generados
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/3 right-[6%] z-0 opacity-20 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-56 h-56 border border-yellow rounded-full"
        />
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex justify-center mt-16 text-cream/30"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
