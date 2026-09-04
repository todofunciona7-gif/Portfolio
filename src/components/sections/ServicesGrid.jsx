import { Share2, PenTool, Palette, CalendarDays, Camera } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { services } from '../../data/content'

const serviceIcons = [Share2, PenTool, Palette, CalendarDays, Camera]
const spans = ['md:col-span-3', 'md:col-span-3', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2']

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

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {services.map((svc, i) => {
            const Icon = serviceIcons[i]
            return (
              <ScrollReveal
                key={svc.n}
                delay={i * 0.06}
                className={`col-span-1 ${spans[i]} group relative rounded-lg border border-white/10 bg-ink-soft p-8 transition-all duration-300 hover:border-yellow/50 hover:shadow-lg`}
              >
                <span className="absolute top-6 right-7 font-display text-lg text-muted-dark/50">{svc.n}</span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-ink text-yellow transition-colors duration-300 group-hover:bg-yellow group-hover:text-ink">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div className="text-[17px] font-semibold mb-2.5 text-cream">{svc.title}</div>
                <div className="text-sm leading-[1.6] text-muted-dark">{svc.desc}</div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
