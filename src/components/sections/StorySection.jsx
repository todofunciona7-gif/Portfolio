import BlurText from '../ui/BlurText'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import ScrollReveal from '../ui/ScrollReveal'
import { about, siteName } from '../../data/content'

const [firstName, lastName] = siteName.split(' ')

export default function StorySection() {
  return (
    <section className="bg-ink-2 py-28 md:py-36 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-dark mb-10">Sobre mí</div>

        <div className="relative flex flex-col items-center">
          <BlurText
            text={firstName.toUpperCase()}
            animateBy="letters"
            delay={60}
            className="font-display font-bold text-yellow text-[46px] sm:text-[72px] md:text-[104px] lg:text-[130px] leading-[0.85] tracking-tight uppercase justify-center whitespace-nowrap"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" data-cursor="hover">
            <div className="w-[64px] h-[108px] sm:w-[84px] sm:h-[142px] md:w-[104px] md:h-[176px] lg:w-[120px] lg:h-[202px] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <ImagePlaceholder label="Foto personal" height="h-full" rounded="rounded-full" />
            </div>
          </div>

          <BlurText
            text={lastName.toUpperCase()}
            animateBy="letters"
            delay={60}
            className="font-display font-bold text-yellow text-[46px] sm:text-[72px] md:text-[104px] lg:text-[130px] leading-[0.85] tracking-tight uppercase justify-center whitespace-nowrap"
          />
        </div>

        <div className="flex justify-center mt-12 mb-16 px-6">
          <BlurText
            text="Cuatro años gestionando redes, cuenta por cuenta."
            animateBy="words"
            delay={120}
            className="text-base md:text-lg text-muted-dark text-center max-w-xl justify-center"
          />
        </div>

        <ScrollReveal className="max-w-2xl mx-auto text-center">
          <p className="text-base leading-[1.7] text-muted-dark mb-5">{about.p1}</p>
          <p className="text-base leading-[1.7] text-muted-dark">{about.p2}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
