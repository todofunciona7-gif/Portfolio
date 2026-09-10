import ScrollReveal from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import { plans } from '../../data/content'

const variantStyles = {
  dark: {
    card: 'bg-paper-soft',
    title: 'text-cream',
    tagline: 'text-muted-dark',
    feature: 'text-cream',
    dash: 'text-lavender-deep',
    cta: 'border border-lavender text-cream hover:bg-lavender hover:text-ink transition-colors',
  },
  lavender: {
    card: 'bg-lavender',
    title: 'text-ink',
    tagline: 'text-ink/70',
    feature: 'text-ink',
    dash: 'text-ink',
    cta: 'bg-ink text-lavender',
  },
}

export default function PricingSection() {
  return (
    <section id="precios" className="bg-paper py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-12 md:mb-14">
          <h2 className="font-display font-normal text-[40px] text-cream mb-3.5">Planes</h2>
          <p className="max-w-[520px] text-muted-dark text-[15px] leading-[1.6]">
            Defino los valores según objetivos y volumen de contenido. Estas son las tres formas de trabajo que
            más uso.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const v = variantStyles[plan.variant]
            return (
              <ScrollReveal key={plan.name} delay={i * 0.08} className="relative">
                <div className={`${v.card} rounded-[2px] p-10 md:p-8 flex flex-col h-full relative`}>
                  {plan.badge && (
                    <div className="absolute -top-[13px] left-8 bg-paper text-ink text-xs font-bold px-3 py-[5px] rounded-[2px]">
                      {plan.badge}
                    </div>
                  )}
                  <div className={`font-display text-2xl mb-2.5 ${v.title}`}>{plan.name}</div>
                  <div className={`text-sm mb-6 leading-[1.5] ${v.tagline}`}>{plan.tagline}</div>
                  <div className="flex flex-col gap-3 mb-7 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className={`text-sm flex gap-2.5 leading-[1.5] ${v.feature}`}>
                        <span className={v.dash}>—</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <MagneticButton
                    href="#contacto"
                    className={`text-center py-[13px] rounded-[2px] text-sm font-semibold ${v.cta}`}
                  >
                    Consultar valor
                  </MagneticButton>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
