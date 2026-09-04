import { siteName } from '../../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-4">
        <div className="font-display text-base">{siteName}</div>
        <div className="text-[13px] text-muted-footer">© 2026. Community Manager &amp; gestión de redes.</div>
      </div>
    </footer>
  )
}
