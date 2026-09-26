import { Share2, PenTool, Palette, CalendarDays, Camera } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { services } from '../../data/content'

const serviceIcons = [Share2, PenTool, Palette, CalendarDays, Camera]
const spans = ['md:col-span-3', 'md:col-span-3', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2']

export default function ServicesGrid() {
  return (
    <section id="servicios" className="bg-paper py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal className="flex justify-between items-end gap-6 flex-wrap mb-10 md:mb-14">
          <div>
            <div className="eyebrow mb-4">Qué hago</div>
            <h2 className="section-title">Servicios</h2>
          </div>
          <p className="max-w-[400px] text-muted-dark text-[15px] leading-[1.6] m-0">
            Cada plan se adapta al momento de la marca. Esto es lo que puedo poner a trabajar para vos.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4">
          {services.map((svc, i) => {
            const Icon = serviceIcons[i]
            return (
              <ScrollReveal
                key={svc.n}
                delay={i * 0.06}
                className={`col-span-1 ${spans[i]} group relative rounded-2xl border border-ink/10 bg-paper-soft p-7 md:p-8 transition-all duration-estado hover:-translate-y-1 hover:border-lavender/60 hover:shadow-[0_18px_40px_-20px_rgba(107,61,115,0.45)]`}
              >
                <span className="absolute top-6 right-7 font-mono text-xs text-muted-dark/70">{svc.n}</span>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-lavender-soft text-lavender-deep transition-colors duration-estado group-hover:bg-lavender group-hover:text-ink">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div className="display text-[28px] md:text-[32px] mb-3 text-cream">{svc.title}</div>
                <div className="text-sm leading-[1.6] text-muted-dark">{svc.desc}</div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
