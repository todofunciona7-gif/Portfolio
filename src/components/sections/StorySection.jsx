import { motion } from 'framer-motion'
import BlurText from '../ui/BlurText'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import ScrollReveal from '../ui/ScrollReveal'
import { about, siteName } from '../../data/content'

export default function StorySection() {
  return (
    <section id="sobre-mi" className="bg-paper-2 pt-36 md:pt-44 pb-28 md:pb-36 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-dark mb-6">Sobre mí</div>

            <BlurText
              text={siteName}
              animateBy="letters"
              delay={40}
              className="font-display font-bold text-lavender-deep text-[40px] sm:text-[52px] md:text-[58px] lg:text-[66px] leading-[1.02] tracking-tight mb-6"
            />

            <BlurText
              text="Cuatro años gestionando redes, cuenta por cuenta."
              animateBy="words"
              delay={120}
              className="text-base md:text-lg text-muted-dark mb-8 max-w-md"
            />

            <ScrollReveal className="max-w-xl">
              <p className="text-base leading-[1.7] text-muted-dark mb-5">{about.p1}</p>
              <p className="text-base leading-[1.7] text-muted-dark">{about.p2}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="flex flex-wrap gap-3 mt-9">
              {about.specialties.map((s) => (
                <span
                  key={s}
                  className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.05em] text-ink bg-lavender-soft px-4 py-2 rounded-full"
                >
                  {s}
                </span>
              ))}
            </ScrollReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mx-auto md:mx-0 w-full max-w-[360px]"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-lavender/20 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-lavender-soft" />
            <div className="relative h-[420px] md:h-[480px] rounded-[2rem] overflow-hidden shadow-2xl" data-cursor="hover">
              <ImagePlaceholder label="Foto personal" height="h-full" rounded="rounded-[2rem]" />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-5 -right-5 h-20 w-20 rounded-full border border-dashed border-lavender/40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
