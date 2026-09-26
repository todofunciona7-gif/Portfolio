import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import ScrollReveal, { EASE } from '../ui/ScrollReveal'
import { cases } from '../../data/content'

// Captura de perfil de Instagram (antes o después). Si todavía no está,
// muestra el recuadro "Próximamente" con la misma proporción.
function Captura({ src, label, alt }) {
  return (
    <figure className="flex flex-col gap-2">
      <figcaption className="eyebrow !text-muted-dark">{label}</figcaption>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="foto w-full aspect-[9/16] object-cover object-top rounded-xl border border-ink/10 shadow-md"
        />
      ) : (
        <ImagePlaceholder label="Próximamente" height="aspect-[9/16]" rounded="rounded-xl" />
      )}
    </figure>
  )
}

function CaseBlock({ c, index }) {
  // En el celular todo va alineado a la izquierda; en escritorio alterna.
  const isLeft = index % 2 === 0
  const side = isLeft ? '' : 'md:items-end md:text-right'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`flex flex-col ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } md:items-center gap-8 md:gap-16 py-12 md:py-20 border-b border-ink/10 last:border-b-0`}
    >
      <div className="relative shrink-0 self-start md:self-auto">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[-12%] rounded-full border border-dashed border-lavender/40"
        />
        <div className="absolute inset-0 rounded-full bg-lavender blur-3xl opacity-[0.16]" />
        <div className="relative h-36 w-36 md:h-64 md:w-64 rounded-full overflow-hidden bg-white shadow-lg">
          <img
            src={c.logo}
            alt={`Logo de ${c.name}`}
            loading="lazy"
            className={`h-full w-full ${c.logoFit === 'contain' ? 'object-contain p-5 md:p-9' : 'object-cover'}`}
          />
        </div>
      </div>

      <div className={`flex-1 max-w-md flex flex-col items-start ${side}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-lavender-deep">{String(index + 1).padStart(2, '0')}</span>
          <span className="eyebrow !text-muted-dark">{c.category}</span>
        </div>
        <h3 className="display text-[40px] md:text-[56px] text-cream mb-2">{c.name}</h3>
        {c.handle ? <div className="font-mono text-sm text-lavender-deep mb-6">{c.handle}</div> : <div className="mb-6" />}

        {c.metrics.length > 0 && (
          <div className={`flex flex-wrap gap-x-7 gap-y-4 mb-7 ${isLeft ? '' : 'md:justify-end'}`}>
            {c.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-mono text-lg md:text-xl font-medium text-cream leading-none">{m.value}</div>
                <div className="text-[11px] text-muted-dark uppercase tracking-wider mt-1.5">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <details className="group w-full">
          <summary
            data-cursor="view"
            className={`inline-flex items-center gap-2 rounded-full border border-lavender-deep/30 px-4 py-2.5 text-sm font-semibold text-lavender-deep cursor-pointer list-none transition-colors duration-hover hover:bg-lavender-soft ${
              isLeft ? '' : 'md:flex-row-reverse'
            }`}
          >
            Ver antes y después
            <Plus size={16} className="shrink-0 transition-transform duration-estado group-open:rotate-45" />
          </summary>

          <div className={`mt-6 flex flex-col gap-6 items-start ${isLeft ? '' : 'md:items-end'}`}>
            {c.description && <p className="text-sm leading-[1.6] text-muted-dark">{c.description}</p>}

            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-sm">
              <Captura src={c.antes} label="Antes" alt={`Perfil de ${c.name} antes`} />
              <Captura src={c.despues} label="Después" alt={`Perfil de ${c.name} después`} />
            </div>
          </div>
        </details>
      </div>
    </motion.div>
  )
}

export default function CaseStudies() {
  return (
    <section id="casos" className="bg-paper-2 py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-4 md:mb-6">
          <div className="eyebrow mb-4">Casos</div>
          <h2 className="section-title mb-5">Cuentas que gestioné</h2>
          <p className="max-w-[520px] text-muted-dark text-[15px] leading-[1.6]">
            Marcas reales de San Rafael que acompaño en redes. Tocá cada una para ver cómo estaba la cuenta
            antes y cómo está ahora.
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
