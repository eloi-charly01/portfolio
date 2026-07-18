'use client'

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
    <Tag
      className={cn(
        'relative bg-surface border border-wire clip-cyber transition-all duration-300',
        paddings[size],
        hover && 'hover:border-primary/50 hover:bg-[rgb(14,14,26)] hover:-translate-y-1',
        className
      )}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40 pointer-events-none transition-all duration-300" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 pointer-events-none transition-all duration-300" />
      {children}
    </Tag>
  )
}
