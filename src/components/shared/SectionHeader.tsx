import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'mb-4 flex items-center gap-3',
            align === 'center' && 'justify-center'
          )}
        >
          <span className="h-px w-8 bg-copper" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
            {eyebrow}
          </span>
          {align === 'center' && <span className="h-px w-8 bg-copper" />}
        </div>
      )}
      <h2 className="font-serif text-3xl font-semibold leading-tight text-warm-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-warm-white/60 md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
