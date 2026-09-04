import ScrollReveal from '../ui/ScrollReveal'
import { steps } from '../../data/content'

export default function ProcessTimeline() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-20 md:pb-24">
      <h2 className="font-display font-normal text-[40px] mb-12 md:mb-14">Cómo trabajamos</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <ScrollReveal key={step.n} delay={i * 0.08} className="border-t-2 border-ink pt-6">
            <div className="font-display text-[15px] text-yellow-gold mb-4">{step.n}</div>
            <div className="text-[17px] font-semibold mb-2.5">{step.title}</div>
            <div className="text-sm leading-[1.6] text-muted">{step.desc}</div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
