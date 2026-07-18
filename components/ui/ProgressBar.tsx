'use client'

import { cn } from '@/lib/utils'

interface ProgressBarProps {
  label: string
  value: number // 0-100
  showLevel?: boolean
  className?: string
  delay?: number
}

const levelLabel = (v: number) => {
  if (v >= 90) return 'Expert'
  if (v >= 75) return 'Avancé'
  if (v >= 60) return 'Intermédiaire'
  return 'Débutant'
}

export function ProgressBar({ label, value, showLevel = true, className, delay = 0 }: ProgressBarProps) {
  return (
    <div className={cn('space-y-2 animate-fade-in', className)} style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        {showLevel && (
          <span className="text-xs font-bold text-primary font-mono tracking-wide">{levelLabel(value)}</span>
        )}
      </div>
      <div className="relative h-1.5 bg-wire overflow-hidden rounded-sm">
        <div
          className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_8px_rgba(255,45,85,0.6)] animate-progress-fill"
          style={{ '--progress-width': `${value}%`, animationDelay: `${delay}ms` } as React.CSSProperties}
        />
        {/* Shimmer */}
        <div
          className="absolute inset-y-0 w-12 bg-linear-to-r from-transparent via-white/40 to-transparent animate-progress-shimmer"
          style={{ '--shimmer-end': `calc(${value}% - 1.5rem)`, animationDelay: `${delay}ms` } as React.CSSProperties}
        />
      </div>
    </div>
  )
}
