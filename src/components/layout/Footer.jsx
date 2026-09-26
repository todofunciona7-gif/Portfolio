import { siteName } from '../../data/content'

export default function Footer() {
  return (
    // pb extra en el celular para que la barra de abajo no tape el texto
    <footer className="bg-noche-2 border-t border-white/10 pt-8 pb-28 md:py-10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-4">
        <div className="display text-xl text-white">{siteName}</div>
        <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
          © 2026 · Community Manager &amp; Social Media Manager
        </div>
      </div>
    </footer>
  )
}
