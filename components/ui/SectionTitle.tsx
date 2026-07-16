'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  number?: string
  label: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({
  number,
  label,
  description,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)}>
      {number && (
        <span className="text-xs font-bold text-primary/60 tracking-[0.4em] uppercase mb-3 block font-mono">
          {number}
        </span>
      )}
      <div className={cn('flex items-center gap-4', centered && 'justify-center')}>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {label}
        </motion.h2>
        {!centered && (
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent hidden sm:block" />
        )}
      </div>
      {centered && (
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-px w-12 bg-primary/40" />
          <div className="w-1 h-1 bg-primary" />
          <div className="h-px w-12 bg-primary/40" />
        </div>
      )}
      {description && (
        <p className={cn('mt-4 text-dim text-base sm:text-lg leading-relaxed', centered ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>
          {description}
        </p>
      )}
    </div>
  )
}
