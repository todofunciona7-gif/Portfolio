import ScrollReveal from '../ui/ScrollReveal'
import { services } from '../../data/content'

export default function ServicesGrid() {
  return (
    <section id="servicios" className="max-w-[1240px] mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-20 md:pb-24">
      <div className="flex justify-between items-baseline gap-6 flex-wrap mb-12 md:mb-14">
        <h2 className="font-display font-normal text-[40px] m-0">Servicios</h2>
        <p className="max-w-[420px] text-muted text-[15px] leading-[1.6] m-0">
          Cada plan se adapta al momento de la marca. Esto es lo que puedo poner a trabajar para vos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border border border-border">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.n} delay={i * 0.06} className="bg-cream p-10 md:p-8">
            <div className="font-display text-[34px] text-yellow-gold mb-5">{svc.n}</div>
            <div className="text-[17px] font-semibold mb-2.5">{svc.title}</div>
            <div className="text-sm leading-[1.6] text-muted">{svc.desc}</div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
