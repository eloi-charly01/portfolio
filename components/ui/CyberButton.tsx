'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CyberButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function CyberButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled = false,
}: CyberButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  }

  const variants = {
    primary:
      'bg-primary text-white border border-primary hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(255,45,85,0.45)]',
    outline:
      'bg-transparent text-primary border border-primary hover:bg-primary/8 hover:shadow-[0_0_12px_rgba(255,45,85,0.25)]',
    ghost:
      'bg-transparent text-dim border border-wire hover:border-primary/50 hover:text-primary',
  }

  const base = cn(
    'relative inline-flex items-center justify-center gap-2 font-bold tracking-widest uppercase transition-all duration-200 clip-cyber',
    sizes[size],
    variants[variant],
    disabled && 'opacity-50 pointer-events-none',
    className
  )

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  }

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <motion.a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={base}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={base}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}

