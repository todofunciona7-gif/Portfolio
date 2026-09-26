import { GraduationCap } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { formations } from '../../data/content'

export default function FormationsSection() {
  return (
    <section id="formacion" className="bg-paper py-24 md:py-28">
      <div className="max-w-[820px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="eyebrow mb-4">Formación</div>
          <h2 className="section-title mb-10 md:mb-12">Dónde aprendí</h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {formations.map((f, i) => (
            <ScrollReveal
              key={f.id}
              delay={i * 0.06}
              className="flex items-start gap-5 py-6 border-b border-ink/10 last:border-b-0"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender-soft text-lavender-deep">
                <GraduationCap size={20} strokeWidth={1.75} />
              </div>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                <div>
                  <h3 className="text-base font-semibold text-cream">{f.title}</h3>
                  <p className="text-sm text-muted-dark mt-1">{f.institution}</p>
                </div>
                <span className="font-mono text-xs text-lavender-deep">{f.year}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
