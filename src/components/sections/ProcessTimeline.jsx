import { Search, Target, Rocket, BarChart3, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import { steps } from '../../data/content'

const stepIcons = [Search, Target, Rocket, BarChart3]

export default function ProcessTimeline() {
  return (
    <section className="bg-paper-2 py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ScrollReveal className="flex flex-col items-start text-left">
            <div className="eyebrow mb-4">Mi proceso</div>
            <h2 className="section-title mb-5">Cómo trabajo</h2>
            <p className="text-muted-dark text-[15px] leading-[1.6] mb-8 max-w-sm">
              Creo en el trabajo prolijo: calendarios claros, contenido pensado y reportes que muestran
              resultados reales.
            </p>
            <MagneticButton
              href="#contacto"
              className="inline-flex items-center gap-2 bg-lavender text-ink px-6 py-3.5 rounded-full text-sm font-semibold"
            >
              Coordinemos una llamada
              <ArrowUpRight size={17} />
            </MagneticButton>
          </ScrollReveal>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-10">
            {steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <ScrollReveal
                  key={step.n}
                  delay={i * 0.06}
                  className="group relative flex sm:block gap-5 border-t border-ink/10 pt-6"
                >
                  <div className="shrink-0 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-paper text-lavender-deep transition-colors duration-estado group-hover:bg-lavender group-hover:text-ink">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.14em] text-lavender-deep mb-2">{step.n}</div>
                    <h3 className="display text-[30px] text-cream mb-2">{step.title}</h3>
                    <p className="text-sm leading-[1.6] text-muted-dark">{step.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
