import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import { services } from '../../data/content'

export default function ServicesGrid() {
  return (
    <section id="servicios" className="bg-ink-2 py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal className="flex justify-between items-baseline gap-6 flex-wrap mb-12 md:mb-14">
          <h2 className="font-display font-normal text-[40px] m-0 text-cream">Servicios</h2>
          <p className="max-w-[420px] text-muted-dark text-[15px] leading-[1.6] m-0">
            Cada plan se adapta al momento de la marca. Esto es lo que puedo poner a trabajar para vos.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 divide-y divide-white/10 md:divide-y-0 md:divide-x">
          {services.map((svc, i) => (
            <motion.div
              key={svc.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="p-10 md:p-8 group hover:bg-white/[0.03] transition-colors duration-500"
              data-cursor="hover"
            >
              <div className="font-display text-[42px] text-yellow mb-5 leading-none group-hover:scale-110 origin-left transition-transform duration-300">
                {svc.n}
              </div>
              <div className="text-[17px] font-semibold mb-2.5 text-cream">{svc.title}</div>
              <div className="text-sm leading-[1.6] text-muted-dark">{svc.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
