'use client'

import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { useTypewriter } from '@/hooks/useTypewriter'
import { CyberButton } from '../ui/CyberButton'
import { PERSONAL_INFO } from '@/constants/data'

const TYPEWRITER_TEXTS = [
  'PHP · Symfony · Laravel',
  'API Platform · REST · GraphQL',
  'React · Next.js · TypeScript',
  'Architecture · DDD · CQRS',
]

function TypewriterSubtitle() {
  const text = useTypewriter(TYPEWRITER_TEXTS)
  return (
    <span className="text-primary font-mono">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <div className="mb-6 animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter uppercase leading-none">
              <span className="text-foreground">ELOI </span>
              <span className="text-primary">CHARLY</span>
            </h1>
          </div>

          {/* Title separator */}
          <div className="flex items-center gap-5 mb-5 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="h-px w-12 sm:w-24 bg-linear-to-r from-transparent to-primary/50" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-dim whitespace-nowrap">
              Développeur Full Stack
            </span>
            <div className="h-px w-12 sm:w-24 bg-linear-to-l from-transparent to-primary/50" />
          </div>

          {/* Typewriter subtitle */}
          <p className="text-base sm:text-lg font-medium mb-10 h-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <TypewriterSubtitle />
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: '450ms' }}
          >
            <CyberButton href="#projects" variant="primary" size="lg">
              Voir mes projets
            </CyberButton>
            <CyberButton href="#contact" variant="outline" size="lg">
              Me contacter
            </CyberButton>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-6 mb-16 animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            {[
              { href: PERSONAL_INFO.github, icon: GithubIcon, label: 'GitHub' },
              { href: PERSONAL_INFO.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
              { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }, i) => (
              <span key={label} className="flex items-center gap-6">
                {i > 0 && <span className="h-4 w-px bg-wire" aria-hidden="true" />}
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={`Voir mon profil ${label}`}
                  className="flex items-center gap-1.5 text-dim hover:text-primary transition-colors text-xs font-semibold tracking-wider uppercase"
                >
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </a>
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 sm:gap-20 animate-fade-in-up"
            style={{ animationDelay: '750ms' }}
          >
            {[
              { value: `${PERSONAL_INFO.yearsOfExperience}+`, label: "ans d'expérience" },
              { value: `${PERSONAL_INFO.projectsCompleted}+`, label: 'projets majeurs' },
              { value: `${PERSONAL_INFO.technologiesMastered}+`, label: 'technologies' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-primary">
                  {value}
                </div>
                <div className="text-xs text-dim mt-1 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '900ms' }}
      >
        <span className="text-xs text-ghost tracking-[0.3em] uppercase font-mono">Scroll</span>
        <div className="animate-bounce-slow">
          <ArrowDown size={14} className="text-primary" />
        </div>
      </div>
    </section>
  )
}
