import { motion } from 'framer-motion'
import MagneticButton from '../ui/MagneticButton'
import ImagePlaceholder from '../ui/ImagePlaceholder'

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
    <section className="max-w-[1240px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[13px] font-bold uppercase tracking-[0.12em] mb-5"
          >
            Community Manager &amp; gestión de redes
          </motion.div>

          <h1 className="font-display font-normal text-[clamp(40px,5.6vw,68px)] leading-[1.05] mb-7 tracking-[-0.01em]">
            <span className="block">{renderWords(line1)}</span>
            <span className="block">{renderWords(line2)}</span>
            <motion.em
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: wordIndex * 0.07, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="not-italic italic bg-yellow px-2 inline-block"
            >
              crecer en serio.
            </motion.em>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg leading-[1.6] text-muted max-w-[480px] mb-9"
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
              className="inline-block bg-ink text-yellow px-7 py-[15px] rounded-[2px] text-[15px] font-semibold"
            >
              Coordinemos una llamada
            </MagneticButton>
            <MagneticButton
              href="#casos"
              className="inline-block border border-ink text-ink px-7 py-[15px] rounded-[2px] text-[15px] font-semibold"
            >
              Ver casos
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ImagePlaceholder label="Foto de Agostina" height="h-[420px] md:h-[520px]" />
        </motion.div>
      </div>
    </section>
  )
}
