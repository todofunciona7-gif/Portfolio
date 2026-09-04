import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import ScrollReveal from '../ui/ScrollReveal'
import { cases } from '../../data/content'

function CaseBlock({ c, index }) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex flex-col md:flex-row ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-10 md:gap-16 py-16 md:py-20 border-b border-white/10 last:border-b-0`}
    >
      <a href="#" data-cursor="view" aria-label={`Ver caso: ${c.name}`} className="relative shrink-0 group">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[-14%] rounded-full border border-dashed border-yellow/20"
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-yellow blur-3xl opacity-[0.12]"
        />
        <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
          <ImagePlaceholder label="Captura del cliente" height="h-full" rounded="rounded-full" />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-dark bg-ink px-4 py-2 rounded-full border border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow animate-pulse-slow" />
            {c.name}
          </div>
        </div>
      </a>

      <div className={`flex-1 max-w-md flex flex-col ${isLeft ? 'items-start text-left' : 'items-end text-right'}`}>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-dark mb-3">{c.category}</div>
        <h3 className="font-display text-3xl md:text-4xl text-cream mb-6">{c.name}</h3>
        <a
          href="#"
          data-cursor="view"
          className="inline-flex items-center gap-2 text-sm font-semibold text-yellow group"
        >
          Ver caso
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export default function CaseStudies() {
  return (
    <section id="casos" className="bg-ink py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-4 md:mb-6">
          <h2 className="font-display font-normal text-[40px] mb-3.5 text-cream">Cuentas que gestioné</h2>
          <p className="max-w-[520px] text-muted-dark text-[15px] leading-[1.6]">
            8 marcas, 8 rubros distintos. Cada una va a tener su propia página de caso con capturas reales,
            resultados y el detalle del trabajo.
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
