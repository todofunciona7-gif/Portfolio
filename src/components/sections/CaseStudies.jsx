import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import ScrollReveal from '../ui/ScrollReveal'
import { cases } from '../../data/content'

function CaseBlock({ c, index }) {
  const isLeft = index % 2 === 0
  const ringClass = isLeft ? 'border-lavender/30' : 'border-lavender-deep/30'
  const glowClass = isLeft ? 'bg-lavender' : 'bg-lavender-deep'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex flex-col md:flex-row ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-10 md:gap-16 py-16 md:py-20 border-b border-ink/10 last:border-b-0`}
    >
      <div className="relative shrink-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className={`absolute inset-[-14%] rounded-full border border-dashed ${ringClass}`}
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute inset-0 rounded-full ${glowClass} blur-3xl opacity-[0.14]`}
        />
        <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden">
          <ImagePlaceholder label="Captura del cliente" height="h-full" rounded="rounded-full" />
        </div>
        <div className="absolute -bottom-4 -right-2 h-16 w-16 rounded-full border-2 border-paper overflow-hidden shadow-lg">
          <ImagePlaceholder label="Logo" height="h-full" rounded="rounded-full" />
        </div>
      </div>

      <div className={`flex-1 max-w-md flex flex-col ${isLeft ? 'items-start text-left' : 'items-end text-right'}`}>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-dark mb-3">{c.category}</div>
        <h3 className="font-display text-3xl md:text-4xl text-cream mb-6">{c.name}</h3>

        <details className={`group w-full ${isLeft ? 'text-left' : 'text-right'}`}>
          <summary
            data-cursor="view"
            className={`inline-flex items-center gap-2 text-sm font-semibold text-lavender-deep cursor-pointer list-none ${
              isLeft ? '' : 'flex-row-reverse'
            }`}
          >
            Ver más información
            <Plus size={16} className="shrink-0 transition-transform duration-300 group-open:rotate-45" />
          </summary>

          <div className={`mt-6 flex flex-col gap-6 ${isLeft ? 'items-start' : 'items-end'}`}>
            <p className="text-sm leading-[1.6] text-muted-dark">{c.description}</p>

            <div className="grid grid-cols-2 gap-3 w-full">
              <ImagePlaceholder label="Antes" height="h-32" />
              <ImagePlaceholder label="Después" height="h-32" />
            </div>

            <div className={`flex flex-wrap gap-6 w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
              {c.metrics.map((m) => (
                <div key={m.label} className={isLeft ? 'text-left' : 'text-right'}>
                  <div className="font-display text-xl text-cream leading-none">{m.value}</div>
                  <div className="text-[11px] text-muted-dark uppercase tracking-wider mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </div>
    </motion.div>
  )
}

export default function CaseStudies() {
  return (
    <section id="casos" className="bg-paper py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-4 md:mb-6">
          <h2 className="font-display font-normal text-[40px] mb-3.5 text-cream">Cuentas que gestioné</h2>
          <p className="max-w-[520px] text-muted-dark text-[15px] leading-[1.6]">
            8 marcas, 8 rubros distintos. De cada una te muestro capturas reales, resultados y el detalle del
            trabajo que hice.
          </p>
        </ScrollReveal>

        <div>
          {cases.map((c, i) => (
            <CaseBlock key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
