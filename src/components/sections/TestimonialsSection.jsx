import { Quote } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { testimonials } from '../../data/content'

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-ink-2 py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-12 md:mb-14">
          <h2 className="font-display font-normal text-[40px] mb-3.5 text-cream">Lo que dicen las marcas</h2>
          <p className="max-w-[520px] text-muted-dark text-[15px] leading-[1.6]">
            Testimonios reales de las cuentas que acompaño.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.id}
              delay={i * 0.08}
              className="flex flex-col rounded-lg border border-white/10 bg-ink-soft p-8"
            >
              <Quote size={22} strokeWidth={1.75} className="text-yellow mb-5" />
              <p className="text-[15px] leading-[1.6] text-muted-dark flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <ImagePlaceholder label="Foto" height="h-full" rounded="rounded-full" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-cream">{t.name}</div>
                  <div className="text-xs text-muted-dark">{t.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
