import { MessageCircle, Mail } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import { contact } from '../../data/content'

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
    </svg>
  )
}

export default function CTASection() {
  return (
    <section id="contacto" className="max-w-[1240px] mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-28 md:pb-32 text-center">
      <ScrollReveal>
        <h2 className="font-display font-normal text-[clamp(36px,5vw,54px)] mb-6 max-w-[720px] mx-auto">
          Hablemos de tu próxima estrategia de contenido.
        </h2>
        <p className="text-base text-muted max-w-[480px] mx-auto mb-10">
          Contame de tu marca y en 24hs te respondo con los próximos pasos.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <MagneticButton
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-yellow text-ink px-8 py-4 rounded-[2px] text-[15px] font-semibold"
          >
            <MessageCircle size={18} /> WhatsApp
          </MagneticButton>
          <MagneticButton
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-4 rounded-[2px] text-[15px] font-semibold"
          >
            <LinkedinIcon /> LinkedIn
          </MagneticButton>
          <MagneticButton
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-4 rounded-[2px] text-[15px] font-semibold"
          >
            <Mail size={18} /> Email
          </MagneticButton>
        </div>
      </ScrollReveal>
    </section>
  )
}
