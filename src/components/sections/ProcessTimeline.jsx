import ScrollReveal from '../ui/ScrollReveal'
import { steps } from '../../data/content'

export default function ProcessTimeline() {
  return (
    <section className="bg-ink-2 py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <h2 className="font-display font-normal text-[40px] mb-12 md:mb-14 text-cream">Cómo trabajamos</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 0.08} className="border-t-2 border-yellow pt-6">
              <div className="font-display text-[15px] text-yellow mb-4">{step.n}</div>
              <div className="text-[17px] font-semibold mb-2.5 text-cream">{step.title}</div>
              <div className="text-sm leading-[1.6] text-muted-dark">{step.desc}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
