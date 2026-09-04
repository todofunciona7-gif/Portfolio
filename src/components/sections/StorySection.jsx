import ScrollReveal from '../ui/ScrollReveal'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { about } from '../../data/content'

export default function StorySection() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-20 md:pb-24">
      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16 items-center">
        <ScrollReveal>
          <ImagePlaceholder label="Foto personal" height="h-[340px] md:h-[420px]" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-normal text-[36px] mb-6">Sobre mí</h2>
          <p className="text-base leading-[1.7] text-muted mb-5">{about.p1}</p>
          <p className="text-base leading-[1.7] text-muted">{about.p2}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
