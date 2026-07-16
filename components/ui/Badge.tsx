import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'tech'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase',
        variant === 'default' && 'bg-primary/10 text-primary border border-primary/30',
        variant === 'outline' &&
          'bg-transparent text-primary border border-primary/40 hover:bg-primary/5 transition-colors',
        variant === 'tech' &&
          'bg-panel text-dim border border-wire/70 hover:border-primary/40 hover:text-primary transition-colors cursor-default',
        className
      )}
    >
      {children}
    </span>
  )
}
