'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className={cn('space-y-2', className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        {showLevel && (
          <span className="text-xs font-bold text-primary font-mono tracking-wide">{levelLabel(value)}</span>
        )}
      </div>
      <div className="relative h-1.5 bg-wire overflow-hidden rounded-sm">
        <motion.div
          className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_8px_rgba(255,45,85,0.6)]"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
        />
        {/* Shimmer */}
        <motion.div
          className="absolute inset-y-0 w-12 bg-linear-to-r from-transparent via-white/40 to-transparent"
          initial={{ left: '-3rem' }}
          animate={isInView ? { left: `calc(${value}% - 1.5rem)` } : { left: '-3rem' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
        />
      </div>
    </div>
  )
}
