import { useCountUp } from '@/hooks/useCountUp'
import { useIntersection } from '@/hooks/useIntersection'

interface CounterProps {
  value: number
  suffix?: string
  label: string
}

export function Counter({ value, suffix = '', label }: CounterProps) {
  const { ref, inView } = useIntersection<HTMLDivElement>({ threshold: 0.4 })
  const count = useCountUp(value, inView)

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl font-bold text-gradient-gold md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-wider text-warm-white/60">
        {label}
      </div>
    </div>
  )
}
