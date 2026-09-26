import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import ScrollReveal from '../ui/ScrollReveal'
import { cases } from '../../data/content'

// Captura de perfil de Instagram (antes o después). Si todavía no está,
// muestra el recuadro "Próximamente" con la misma proporción.
function Captura({ src, label, alt }) {
  return (
    <figure className="flex flex-col gap-2">
      <figcaption className="text-[11px] uppercase tracking-[0.2em] text-muted-dark">{label}</figcaption>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full aspect-[9/16] object-cover object-top rounded-[6px] border border-ink/10 shadow-md"
        />
      ) : (
        <ImagePlaceholder label="Próximamente" height="aspect-[9/16]" rounded="rounded-[6px]" />
      )}
    </figure>
  )
}

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
        <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden bg-white shadow-lg">
          <img
            src={c.logo}
            alt={`Logo de ${c.name}`}
            loading="lazy"
            className={`h-full w-full ${c.logoFit === 'contain' ? 'object-contain p-8 md:p-10' : 'object-cover'}`}
          />
        </div>
      </div>

      <div className={`flex-1 max-w-md flex flex-col ${isLeft ? 'items-start text-left' : 'items-end text-right'}`}>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-dark mb-3">{c.category}</div>
        <h3 className="font-display text-3xl md:text-4xl text-cream mb-1">{c.name}</h3>
        {c.handle ? (
          <div className="text-sm text-lavender-deep mb-6">{c.handle}</div>
        ) : (
          <div className="mb-6" />
        )}

        <details className={`group w-full ${isLeft ? 'text-left' : 'text-right'}`}>
          <summary
            data-cursor="view"
            className={`inline-flex items-center gap-2 text-sm font-semibold text-lavender-deep cursor-pointer list-none ${
              isLeft ? '' : 'flex-row-reverse'
            }`}
          >
            Ver antes y después
            <Plus size={16} className="shrink-0 transition-transform duration-300 group-open:rotate-45" />
          </summary>

          <div className={`mt-6 flex flex-col gap-6 ${isLeft ? 'items-start' : 'items-end'}`}>
            {c.description && <p className="text-sm leading-[1.6] text-muted-dark">{c.description}</p>}

            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-sm">
              <Captura src={c.antes} label="Antes" alt={`Perfil de ${c.name} antes`} />
              <Captura src={c.despues} label="Después" alt={`Perfil de ${c.name} después`} />
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
