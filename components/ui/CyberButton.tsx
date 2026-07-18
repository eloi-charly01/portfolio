'use client'

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
      'bg-primary text-white border border-primary hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(255,45,85,0.5)]',
    outline:
      'bg-transparent text-primary border border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(255,45,85,0.3)]',
    ghost:
      'bg-transparent text-dim border border-wire hover:border-primary/50 hover:text-primary',
  }

  const base = cn(
    'relative inline-flex items-center justify-center gap-2 font-bold tracking-widest uppercase transition-all duration-300 ease-out clip-cyber hover:scale-[1.02] active:scale-[0.98]',
    sizes[size],
    variants[variant],
    disabled && 'opacity-50 pointer-events-none',
    className
  )

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={base}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={base}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

