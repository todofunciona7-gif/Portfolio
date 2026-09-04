import { Plus } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { faqs } from '../../data/content'

export default function FAQSection() {
  return (
    <section id="faq" className="bg-ink py-24 md:py-28">
      <div className="max-w-[820px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <h2 className="font-display font-normal text-[40px] mb-12 text-cream">Preguntas frecuentes</h2>
        </ScrollReveal>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.q} delay={i * 0.05}>
              <details className="group border-b border-white/10 py-[22px]">
                <summary className="cursor-pointer text-base font-semibold flex justify-between items-center gap-4 text-cream" data-cursor="hover">
                  {faq.q}
                  <Plus size={18} className="shrink-0 transition-transform duration-300 group-open:rotate-45 text-yellow" />
                </summary>
                <p className="text-[15px] leading-[1.7] text-muted-dark mt-3.5">{faq.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
