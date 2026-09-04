export default function ImagePlaceholder({ label, className = '', height = 'h-full' }) {
  return (
    <div
      className={`relative w-full ${height} rounded-[4px] bg-cream-alt border border-border overflow-hidden flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
      <span className="relative font-body text-xs uppercase tracking-[0.12em] text-muted text-center px-6">
        {label}
      </span>
    </div>
  )
}
