import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import { EASE } from '../ui/ScrollReveal'
import { siteName, nav } from '../../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 60))

  // Sobre la portada oscura el texto va claro; con fondo crema, oscuro.
  const onLight = scrolled || mobileOpen

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-entrada ${
          scrolled ? 'backdrop-blur-xl bg-paper/85 border-b border-ink/10 py-3.5' : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <a
            href="#inicio"
            className={`display text-[22px] md:text-[26px] transition-colors duration-estado ${onLight ? 'text-cream' : 'text-white'}`}
            data-cursor="hover"
          >
            {siteName}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-hover relative group ${
                  onLight ? 'text-cream/80 hover:text-lavender-deep' : 'text-white/75 hover:text-white'
                }`}
                data-cursor="hover"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1px] bg-lavender w-0 group-hover:w-full transition-all duration-estado" />
              </a>
            ))}
          </nav>

          <MagneticButton
            href="#contacto"
            className="hidden md:inline-block bg-lavender text-ink px-[22px] py-[11px] rounded-full text-sm font-semibold"
          >
            Escribime
          </MagneticButton>

          <button
            className={`md:hidden p-2 -mr-2 z-50 transition-colors duration-estado ${onLight ? 'text-cream' : 'text-white'}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: EASE }}
            className="fixed inset-0 bg-paper z-40 flex flex-col justify-center px-8 md:hidden"
          >
            <nav className="flex flex-col gap-5">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
                  className="display text-5xl text-cream"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
