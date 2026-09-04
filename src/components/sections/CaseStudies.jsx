import { motion } from 'framer-motion'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import ScrollReveal from '../ui/ScrollReveal'
import { cases } from '../../data/content'

export default function CaseStudies() {
  return (
    <section id="casos" className="bg-ink py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-12 md:mb-14">
          <h2 className="font-display font-normal text-[40px] mb-3.5 text-cream">Cuentas que gestioné</h2>
          <p className="max-w-[520px] text-muted-dark text-[15px] leading-[1.6]">
            8 marcas, 8 rubros distintos. Reemplazá cada casilla con la captura real de la cuenta.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group"
              data-cursor="hover"
            >
              <div className="transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_0_30px_rgba(244,196,48,0.12)]">
                <ImagePlaceholder label="Captura del cliente" height="h-[190px]" />
              </div>
              <div className="mt-3.5">
                <div className="text-sm font-semibold text-cream">{c.name}</div>
                <div className="text-[13px] text-muted-dark mt-0.5">{c.category}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
