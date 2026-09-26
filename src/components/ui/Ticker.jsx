import { services } from '../../data/content'

const items = [...services.map((s) => s.title), 'Resultados reales']

// Cinta en movimiento continuo. El contenido va duplicado y la animación
// `marquee` lo corre -50%, así el loop no tiene salto.
function Group({ hidden }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className="display flex items-center gap-6 pl-6 py-3.5 md:py-4 text-[22px] md:text-[28px] whitespace-nowrap">
          {item}
          <span className="text-lavender-deep text-[18px] md:text-[22px]">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <div className="relative z-10 -my-5 md:-my-6 py-5 md:py-6 overflow-hidden">
      <div className="-mx-[5%] w-[110%] -rotate-[1.5deg] bg-lavender text-ink border-y border-ink/15 shadow-[0_14px_30px_-14px_rgba(169,133,177,0.8)]">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          <Group />
          <Group hidden />
        </div>
      </div>
    </div>
  )
}
