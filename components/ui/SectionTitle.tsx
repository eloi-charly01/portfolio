'use client'

import { cn } from '@/lib/utils'

interface SectionTitleProps {
  label: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({
  label,
  description,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-20', centered && 'text-center', className)}>
      <div className={cn('flex items-center gap-5', centered && 'justify-center')}>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none animate-fade-in-up"
        >
          {label}
        </h2>
        {!centered && (
          <div className="flex-1 h-px bg-linear-to-r from-primary/50 to-transparent hidden sm:block" />
        )}
      </div>
      {centered && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-16 bg-primary/50" />
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <div className="h-px w-16 bg-primary/50" />
        </div>
      )}
      {description && (
        <p className={cn('mt-5 text-dim text-base sm:text-lg leading-relaxed', centered ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>
          {description}
        </p>
      )}
    </div>
  )
}
