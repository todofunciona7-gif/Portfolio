import ScrollReveal from '../ui/ScrollReveal'
import { about } from '../../data/content'

export default function StorySection() {
  return (
    <section id="sobre-mi" className="bg-paper-2 pt-24 md:pt-32 pb-24 md:pb-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-end">
          <ScrollReveal>
            <div className="eyebrow mb-5">Sobre mí</div>
            <h2 className="section-title text-balance">
              Cuatro años gestionando redes, <span className="text-lavender-deep">cuenta por cuenta.</span>
            </h2>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.06}>
              <p className="text-base leading-[1.7] text-muted-dark mb-5">{about.p1}</p>
              <p className="text-base leading-[1.7] text-muted-dark">{about.p2}</p>
            </ScrollReveal>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {about.specialties.map((s, i) => (
                <ScrollReveal key={s} delay={0.12 + i * 0.06}>
                  <span className="inline-block font-mono text-[11px] md:text-xs uppercase tracking-[0.08em] text-ink bg-lavender-soft border border-lavender/30 px-3.5 py-2 rounded-full">
                    {s}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
