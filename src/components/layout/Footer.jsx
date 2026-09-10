import { siteName } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-ink/10 py-10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-4">
        <div className="font-display text-base text-cream">{siteName}</div>
        <div className="text-[13px] text-muted-dark">© 2026. Community Manager &amp; Social Media Manager.</div>
      </div>
    </footer>
  )
}
