import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import { siteName, nav } from '../../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 60))

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl bg-cream/85 border-b border-border py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-display text-xl md:text-[22px] tracking-[0.01em]" data-cursor="hover">
            {siteName}
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium text-ink hover:text-yellow-gold transition-colors relative group"
                data-cursor="hover"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1px] bg-ink w-0 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <MagneticButton
            href="#contacto"
            className="hidden md:inline-block bg-yellow text-ink px-[22px] py-[11px] rounded-[2px] text-sm font-semibold"
          >
            Escribime
          </MagneticButton>

          <button className="md:hidden p-2 z-50" onClick={() => setMobileOpen((v) => !v)} aria-label="Menú">
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
            className="fixed inset-0 bg-cream z-40 flex flex-col justify-center px-8 md:hidden"
          >
            <nav className="flex flex-col gap-7">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="font-display text-4xl"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.28, duration: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-block w-fit bg-yellow text-ink px-6 py-3 rounded-[2px] font-semibold"
              >
                Escribime
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
