import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter'
import MagneticButton from '../ui/MagneticButton'
import { EASE } from '../ui/ScrollReveal'
import { hero, stats } from '../../data/content'

// Cada línea del título sube desde abajo de una "ranura" (overflow oculto).
function TitleLine({ children, delay, ready, className = '' }) {
  return (
    <span className="block overflow-hidden pb-[0.04em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: '105%' }}
        animate={ready ? { y: 0 } : undefined}
        transition={{ duration: 0.8, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function Rise({ children, delay, ready, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={ready ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export default function HeroSection({ ready }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // Al bajar, la foto se inclina, baja un poco y se agranda.
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -6])
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70])
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08])

  return (
    <section
      id="inicio"
      ref={ref}
      className="grain relative isolate overflow-hidden bg-noche text-white pt-24 md:pt-32 pb-14 md:pb-20 md:min-h-[min(100svh,920px)] flex flex-col justify-center"
    >
      {/* Luces de fondo */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-lavender/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[480px] w-[480px] rounded-full bg-[#8A2A86]/50 blur-[120px]" />

      <div className="relative z-[2] max-w-[1240px] w-full mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-start">
            <Rise ready={ready} delay={0.05} className="eyebrow !text-lavender mb-5 md:mb-7">
              {hero.eyebrow}
            </Rise>

            <h1 className="display text-[clamp(68px,19vw,156px)] mb-6 md:mb-8">
              <TitleLine ready={ready} delay={0.1}>Agostina</TitleLine>
              <TitleLine ready={ready} delay={0.2} className="text-lavender">
                Bellido
              </TitleLine>
            </h1>

            <Rise ready={ready} delay={0.3}>
              <p className="max-w-[500px] text-[15px] md:text-[17px] leading-[1.6] text-white/75 mb-8">{hero.lede}</p>
            </Rise>

            <Rise ready={ready} delay={0.38} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <MagneticButton
                href="#contacto"
                className="relative inline-flex justify-center items-center rounded-full bg-lavender text-ink px-7 py-4 text-sm font-semibold"
              >
                <span className="absolute inset-0 rounded-full border-2 border-lavender animate-pulse-ring motion-reduce:hidden" />
                Escribime
              </MagneticButton>
              <MagneticButton
                href="#casos"
                className="inline-flex justify-center items-center gap-2 rounded-full border border-white/25 text-white px-7 py-4 text-sm font-semibold transition-colors duration-hover hover:bg-white/10"
              >
                Ver casos
                <ArrowDown size={16} />
              </MagneticButton>
            </Rise>
          </div>

          {/* Foto: arriba del título en el celular, a la derecha en escritorio */}
          <motion.div
            className="order-first md:order-none relative mx-auto w-[58%] max-w-[230px] md:w-full md:max-w-[380px]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          >
            <motion.div style={{ rotate, y, scale }} className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-lavender/25 blur-3xl" />
              <div className="relative aspect-[4/5] rounded-[1.75rem] md:rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <img
                  src="/agostina.webp"
                  alt="Agostina Bellido"
                  className="foto h-full w-full object-cover object-[center_30%]"
                />
              </div>

              {/* Sticker flotante */}
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0], rotate: [-8, -5, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 md:-left-10 bottom-6 md:bottom-10 grid place-items-center h-[76px] w-[76px] md:h-24 md:w-24 rounded-full bg-paper text-ink text-center shadow-xl"
              >
                <span className="font-mono text-[9px] md:text-[10px] uppercase leading-tight tracking-[0.08em]">
                  <span className="display block text-[26px] md:text-[34px] text-lavender-deep">{hero.sticker.big}</span>
                  {hero.sticker.small}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Cifras separadas por líneas finas */}
        <Rise
          ready={ready}
          delay={0.46}
          className="mt-12 md:mt-16 grid grid-cols-3 border-t border-white/10"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={`pt-5 md:pt-6 pr-3 md:px-6 ${i > 0 ? 'pl-3 border-l border-white/10' : 'md:pl-0'}`}>
              <div className="display text-[clamp(34px,8vw,64px)] text-white">
                {/* El contador arranca recién cuando se va el loader */}
                {ready ? <AnimatedCounter end={stat.num} prefix={stat.prefix} /> : `${stat.prefix ?? ''}0`}
              </div>
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.12em] text-white/55 mt-2 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </Rise>
      </div>
    </section>
  )
}
