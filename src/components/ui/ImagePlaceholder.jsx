export default function ImagePlaceholder({ label, className = '', height = 'h-full', rounded = 'rounded-[4px]' }) {
  return (
    <div
      className={`relative w-full ${height} ${rounded} bg-ink-soft border border-white/10 overflow-hidden flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.06]" />
      <span className="relative font-body text-xs uppercase tracking-[0.12em] text-muted-dark text-center px-6">
        {label}
      </span>
    </div>
  )
}
