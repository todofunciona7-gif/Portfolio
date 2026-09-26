import { Plus } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { faqs } from '../../data/content'

export default function FAQSection() {
  return (
    <section id="faq" className="bg-paper py-24 md:py-28">
      <div className="max-w-[820px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="eyebrow mb-4">FAQ</div>
          <h2 className="section-title mb-10 md:mb-12">Preguntas frecuentes</h2>
        </ScrollReveal>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.q} delay={i * 0.05}>
              <details className="group border-b border-ink/10 py-[22px]">
                <summary className="cursor-pointer text-base md:text-[17px] font-semibold flex justify-between items-center gap-4 text-cream" data-cursor="hover">
                  {faq.q}
                  <span className="grid place-items-center h-8 w-8 shrink-0 rounded-full bg-lavender-soft text-lavender-deep transition-colors duration-estado group-open:bg-lavender group-open:text-ink">
                    <Plus size={16} className="transition-transform duration-estado group-open:rotate-45" />
                  </span>
                </summary>
                <p className="text-[15px] leading-[1.7] text-muted-dark mt-3.5 pr-12">{faq.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
