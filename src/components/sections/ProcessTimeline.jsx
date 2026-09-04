import { Search, Target, Rocket, BarChart3, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import { steps } from '../../data/content'

const stepIcons = [Search, Target, Rocket, BarChart3]

export default function ProcessTimeline() {
  return (
    <section className="bg-ink-2 py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <ScrollReveal className="flex flex-col items-start text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow mb-3">
              Nuestro proceso
            </span>
            <h2 className="font-display font-normal text-[40px] mb-4 text-cream">Cómo trabajamos</h2>
            <p className="text-muted-dark text-[15px] leading-[1.6] mb-8 max-w-sm">
              Creo en el trabajo prolijo: calendarios claros, contenido pensado y reportes que muestran
              resultados reales.
            </p>
            <MagneticButton
              href="#contacto"
              className="inline-flex items-center gap-2 bg-yellow text-ink px-6 py-3 rounded-[2px] text-sm font-semibold"
            >
              Coordinemos una llamada
              <ArrowUpRight size={17} />
            </MagneticButton>
          </ScrollReveal>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <ScrollReveal key={step.n} delay={i * 0.08} className="relative group">
                  <div className="absolute -left-4 top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-white/10 transition-colors group-hover:bg-yellow sm:block" />
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-ink text-yellow transition-colors duration-300 group-hover:bg-yellow group-hover:text-ink">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <div className="text-[13px] font-semibold uppercase tracking-widest text-muted-dark mb-1">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-semibold text-cream mb-1.5">{step.title}</h3>
                  <p className="text-sm leading-[1.6] text-muted-dark">{step.desc}</p>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
