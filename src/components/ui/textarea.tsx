import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[120px] w-full rounded-md border border-white/10 bg-graphite-light/40 px-4 py-3 text-sm text-warm-white transition-colors placeholder:text-warm-white/40 focus-visible:outline-none focus-visible:border-copper focus-visible:ring-1 focus-visible:ring-copper disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
