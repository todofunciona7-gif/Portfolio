import ScrollReveal from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import { plans, planNotes } from '../../data/content'

const variantStyles = {
  dark: {
    card: 'bg-paper-soft border border-ink/10',
    title: 'text-cream',
    tagline: 'text-muted-dark',
    feature: 'text-cream',
    dash: 'text-lavender-deep',
    cta: 'border border-lavender-deep/40 text-cream hover:bg-lavender hover:border-lavender hover:text-ink transition-colors duration-hover',
  },
  lavender: {
    card: 'bg-lavender shadow-[0_24px_50px_-24px_rgba(107,61,115,0.7)]',
    title: 'text-ink',
    tagline: 'text-ink/70',
    feature: 'text-ink',
    dash: 'text-ink',
    cta: 'bg-ink text-lavender',
  },
}

export default function PricingSection() {
  return (
    <section id="precios" className="bg-paper-2 py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-8 md:mb-12">
          <div className="eyebrow mb-4">Precios</div>
          <h2 className="section-title mb-5">Paquetes</h2>
          <p className="max-w-[520px] text-muted-dark text-[15px] leading-[1.6]">
            Paquetes mensuales de gestión de redes sociales. Elegí el que mejor se adapte al momento de tu marca.
          </p>
        </ScrollReveal>

        {/* Celular: carrusel que frena en cada paquete. Escritorio: grilla. */}
        <div className="fade-x md:mask-none no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pt-4 pb-2 flex md:grid md:grid-cols-3 gap-3 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
          {plans.map((plan, i) => {
            const v = variantStyles[plan.variant]
            return (
              <ScrollReveal key={plan.name} delay={i * 0.06} className="relative snap-center shrink-0 w-[84%] md:w-auto">
                <div
                  className={`${v.card} rounded-3xl p-7 md:p-8 flex flex-col h-full relative transition-transform duration-estado md:hover:-translate-y-1.5`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-7 bg-noche text-lavender font-mono text-[11px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full">
                      {plan.badge}
                    </div>
                  )}
                  <div className={`display text-[34px] mb-2 ${v.title}`}>{plan.name}</div>
                  <div className={`text-sm mb-6 leading-[1.5] ${v.tagline}`}>{plan.tagline}</div>
                  <div className="mb-7 flex items-baseline gap-2">
                    <span className={`display text-[56px] ${v.title}`}>{plan.price}</span>
                    <span className={`font-mono text-xs uppercase ${v.tagline}`}>/ mes</span>
                  </div>
                  <div className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className={`text-sm flex gap-2.5 leading-[1.5] ${v.feature}`}>
                        <span className={v.dash}>—</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <MagneticButton href="#contacto" className={`text-center py-3.5 rounded-full text-sm font-semibold ${v.cta}`}>
                    Quiero este pack
                  </MagneticButton>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal className="mt-10">
          <ul className="flex flex-col gap-2 text-sm text-muted-dark leading-[1.5]">
            {planNotes.map((n) => (
              <li key={n} className="flex gap-2.5">
                <span className="text-lavender-deep">—</span>
                {n}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
