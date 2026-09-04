import AnimatedCounter from '../ui/AnimatedCounter'
import ScrollReveal from '../ui/ScrollReveal'
import { stats } from '../../data/content'

export default function StatsSection() {
  return (
    <section className="bg-yellow py-16 md:py-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1}>
            <div className="font-display text-[56px] md:text-[64px] text-ink leading-none">
              <AnimatedCounter end={stat.num} prefix={stat.prefix} />
            </div>
            <div className="text-sm text-ink/70 font-semibold mt-[10px] tracking-[0.03em]">{stat.label}</div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
