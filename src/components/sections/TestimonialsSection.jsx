import { Quote } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { testimonials } from '../../data/content'

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-paper py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-10 md:mb-14">
          <div className="eyebrow mb-4">Testimonios</div>
          <h2 className="section-title mb-5">Lo que dicen las marcas</h2>
          <p className="max-w-[520px] text-muted-dark text-[15px] leading-[1.6]">
            Testimonios reales de las cuentas que acompaño.
          </p>
        </ScrollReveal>

        {/* Celular: carrusel que frena en cada tarjeta. Escritorio: grilla. */}
        <div className="fade-x md:mask-none no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.id}
              delay={i * 0.06}
              className="snap-center shrink-0 w-[84%] md:w-auto flex flex-col rounded-2xl border border-ink/10 bg-paper-soft p-7 md:p-8"
            >
              <Quote size={22} strokeWidth={1.75} className="text-lavender-deep mb-5" />
              <p className="text-[15px] leading-[1.6] text-muted-dark flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <ImagePlaceholder label="Foto" height="h-full" rounded="rounded-full" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-cream">{t.name}</div>
                  <div className="font-mono text-[11px] text-muted-dark">{t.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
