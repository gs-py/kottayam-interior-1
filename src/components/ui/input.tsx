import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md border border-white/10 bg-graphite-light/40 px-4 py-2 text-sm text-warm-white transition-colors placeholder:text-warm-white/40 focus-visible:outline-none focus-visible:border-copper focus-visible:ring-1 focus-visible:ring-copper disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
