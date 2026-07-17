'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CyberCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  size?: 'sm' | 'md' | 'lg'
  as?: 'div' | 'article' | 'li'
}

export function CyberCard({
  children,
  className,
  hover = true,
  size = 'md',
  as: Tag = 'div',
}: CyberCardProps) {
  const paddings = { sm: 'p-4', md: 'p-6', lg: 'p-8' }

  return (
    <motion.div
      // @ts-expect-error motion polymorphism
      as={Tag}
      className={cn(
        'relative bg-surface border border-wire clip-cyber transition-all duration-300',
        paddings[size],
        className
      )}
      whileHover={
        hover
          ? {
              borderColor: 'rgba(255, 45, 85, 0.5)',
              backgroundColor: 'rgb(14, 14, 26)',
              y: -4,
            }
          : undefined
      }
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40 pointer-events-none transition-all duration-300" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 pointer-events-none transition-all duration-300" />
      {children}
    </motion.div>
  )
}
