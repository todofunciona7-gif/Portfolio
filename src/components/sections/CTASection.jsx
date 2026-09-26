import { MessageCircle, Mail } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { contact } from '../../data/content'

function LinkedinIcon({ size = 24, className, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

const socials = [
  { key: 'whatsapp', label: 'WhatsApp', href: contact.whatsapp, external: true, Icon: MessageCircle },
  { key: 'linkedin', label: 'LinkedIn', href: contact.linkedin, external: true, Icon: LinkedinIcon },
  { key: 'email', label: 'Email', href: `mailto:${contact.email}`, external: false, Icon: Mail },
]

export default function CTASection() {
  return (
    <section id="contacto" className="grain relative isolate overflow-hidden bg-noche text-white px-6 md:px-12 pt-24 md:pt-32 pb-28 md:pb-32">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[480px] w-[760px] rounded-full bg-lavender/20 blur-[120px]" />

      <div className="relative z-[2] max-w-[1240px] mx-auto text-center">
        <ScrollReveal>
          <div className="eyebrow !text-lavender mb-5">Contacto</div>
          <h2 className="display text-[clamp(64px,17vw,180px)] mb-6">
            Hablemos<span className="text-lavender">.</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-[460px] mx-auto mb-10 md:mb-12">
            Contame de tu marca y en 24hs te respondo con los próximos pasos.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="flex justify-center">
          <div className="w-full sm:w-auto rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_0_60px_rgba(169,133,177,0.25)] px-6 py-10 sm:px-12 md:px-16 md:py-12">
            <div className="flex justify-around sm:justify-center gap-6 sm:gap-10 md:gap-14">
              {socials.map(({ key, label, href, external, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  data-cursor="hover"
                  className="group flex flex-col items-center"
                >
                  <div className="w-[72px] h-[72px] md:w-20 md:h-20 rounded-full flex items-center justify-center bg-white/5 border border-white/15 shadow-lg transition-all duration-estado group-hover:-translate-y-2 group-hover:bg-lavender group-hover:border-lavender group-hover:shadow-[0_0_25px_rgba(169,133,177,0.6)]">
                    <span className="group-hover:animate-shake">
                      <Icon size={30} strokeWidth={1.75} className="text-white transition-colors duration-estado group-hover:text-ink" />
                    </span>
                  </div>
                  <span className="mt-3 text-sm font-medium text-white/70 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-estado">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
