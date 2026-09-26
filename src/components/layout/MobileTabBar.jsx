import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { House, Sparkles, BriefcaseBusiness, Tag, MessageCircle } from 'lucide-react'

// Las secciones que no están en la barra (Sobre mí, Testimonios, FAQ...)
// quedan marcadas con la pestaña anterior, porque se elige la última
// sección cuyo borde superior ya pasó el 40% de la pantalla.
const tabs = [
  { id: 'inicio', label: 'Inicio', Icon: House },
  { id: 'servicios', label: 'Servicios', Icon: Sparkles },
  { id: 'casos', label: 'Casos', Icon: BriefcaseBusiness },
  { id: 'precios', label: 'Precios', Icon: Tag },
  { id: 'contacto', label: 'Contacto', Icon: MessageCircle },
]

export default function MobileTabBar() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.4
      let current = tabs[0].id
      for (const { id } of tabs) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      // Al llegar al final de la página, el cierre queda activo aunque sea corto.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contacto'
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <nav
      aria-label="Secciones"
      className="md:hidden fixed inset-x-3 bottom-3 z-50 pb-safe"
    >
      <ul className="flex justify-between rounded-full bg-noche/90 backdrop-blur-xl p-1.5 shadow-[0_12px_32px_-8px_rgba(27,10,19,0.55)] ring-1 ring-white/10">
        {tabs.map(({ id, label, Icon }) => {
          const isActive = active === id
          return (
            <li key={id} className="flex-1">
              <a
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative flex flex-col items-center gap-0.5 rounded-full py-2 transition-colors duration-estado ${
                  isActive ? 'text-ink' : 'text-white/60'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-lavender"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon size={18} strokeWidth={2} className="relative" />
                <span className="relative text-[10px] font-semibold tracking-wide">{label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
