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
    <section id="contacto" className="bg-ink px-6 md:px-12 pt-24 md:pt-28 pb-28 md:pb-32">
      <div className="max-w-[1240px] mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display font-normal text-[clamp(36px,5vw,54px)] mb-6 max-w-[720px] mx-auto text-cream">
            Hablemos de tu próxima estrategia de contenido.
          </h2>
          <p className="text-base text-muted-dark max-w-[480px] mx-auto mb-14">
            Contame de tu marca y en 24hs te respondo con los próximos pasos.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex justify-center">
          <div className="rounded-3xl bg-ink-soft/80 border border-white/10 backdrop-blur-xl shadow-[0_0_60px_rgba(244,196,48,0.12)] px-10 py-12 md:px-16">
            <div className="flex flex-wrap justify-center gap-10 md:gap-14">
              {socials.map(({ key, label, href, external, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  data-cursor="hover"
                  className="group flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/5 border border-white/10 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-yellow group-hover:shadow-[0_0_25px_rgba(244,196,48,0.6)]">
                    <span className="group-hover:animate-shake">
                      <Icon size={30} strokeWidth={1.75} className="text-cream transition-colors duration-300 group-hover:text-ink" />
                    </span>
                  </div>
                  <span className="mt-3 text-sm font-medium text-cream/70 group-hover:text-cream group-hover:translate-y-0.5 transition-all duration-300">
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
