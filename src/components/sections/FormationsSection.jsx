import { GraduationCap } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { formations } from '../../data/content'

export default function FormationsSection() {
  return (
    <section id="formacion" className="bg-paper py-24 md:py-28">
      <div className="max-w-[820px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <h2 className="font-display font-normal text-[40px] mb-12 text-cream">Formación</h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {formations.map((f, i) => (
            <ScrollReveal
              key={f.id}
              delay={i * 0.06}
              className="flex items-start gap-5 py-6 border-b border-ink/10 last:border-b-0"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ink/10 bg-paper-soft text-lavender-deep">
                <GraduationCap size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-cream">{f.title}</h3>
                <p className="text-sm text-muted-dark mt-1">
                  {f.institution} · {f.year}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
