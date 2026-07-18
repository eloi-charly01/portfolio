'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#experience', label: 'Expériences' },
  { href: '#projects', label: 'Projets' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.1, rootMargin: '-10% 0px -50% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/95 border-b border-wire'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group shrink-0" aria-label="Retour à l'accueil">
            <Zap size={16} className="text-primary fill-current" aria-hidden="true" />
            <span className="font-extrabold tracking-widest uppercase text-sm">
              ELOI<span className="text-primary">.</span>CHARLY
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                aria-current={activeSection === href.slice(1) ? 'page' : undefined}
                className={cn(
                  'text-xs font-semibold tracking-widest uppercase transition-colors duration-200',
                  activeSection === href.slice(1)
                    ? 'text-primary'
                    : 'text-dim hover:text-foreground'
                )}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 hover:bg-primary/10 hover:border-primary transition-all duration-300 clip-cyber"
          >
            Me contacter
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-dim hover:text-primary transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          className={cn(
            'fixed inset-0 z-40 bg-background/97 backdrop-blur-xl flex flex-col items-center justify-center gap-10',
            'animate-fade-in'
          )}
        >
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-primary/20" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-primary/20" />

          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-extrabold tracking-wider uppercase text-dim hover:text-primary transition-colors animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-4 text-sm font-bold tracking-widest uppercase bg-primary text-white clip-cyber animate-fade-in-up"
            style={{ animationDelay: `${NAV_LINKS.length * 60}ms` }}
          >
            Me contacter
          </a>
        </div>
      )}
    </>
  )
}
