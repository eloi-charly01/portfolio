'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, Zap } from 'lucide-react'
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

      {/* Radial red glow - top center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(255,45,85,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Scan lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,45,85,0.015) 3px, rgba(255,45,85,0.015) 4px)',
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-primary/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-primary/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-primary/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-primary/20 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter uppercase leading-none">
              <span className="text-foreground">ELOI </span>
              <span
                className="text-primary"
                style={{
                  textShadow: '0 0 35px rgba(255,45,85,0.6), 0 0 70px rgba(255,45,85,0.3)',
                }}
              >
                CHARLY
              </span>
            </h1>
          </motion.div>

          {/* Title separator */}
          <motion.div
            className="flex items-center gap-5 mb-5"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.65, delay: 0.65 }}
          >
            <div className="h-px w-12 sm:w-24 bg-linear-to-r from-transparent to-primary/50" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-dim whitespace-nowrap">
              Développeur Full Stack
            </span>
            <div className="h-px w-12 sm:w-24 bg-linear-to-l from-transparent to-primary/50" />
          </motion.div>

          {/* Typewriter subtitle */}
          <motion.p
            className="text-base sm:text-lg font-medium mb-10 h-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <TypewriterSubtitle />
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <CyberButton href="#projects" variant="primary" size="lg">
              Voir mes projets
            </CyberButton>
            <CyberButton href="#contact" variant="outline" size="lg">
              Me contacter
            </CyberButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.15 }}
          >
            {[
              { href: PERSONAL_INFO.github, icon: GithubIcon, label: 'GitHub' },
              { href: PERSONAL_INFO.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
              { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }, i) => (
              <span key={label} className="flex items-center gap-6">
                {i > 0 && <span className="h-4 w-px bg-wire" />}
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-dim hover:text-primary transition-colors text-xs font-semibold tracking-wider uppercase"
                >
                  <Icon size={15} />
                  {label}
                </a>
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 sm:gap-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { value: `${PERSONAL_INFO.yearsOfExperience}+`, label: "ans d'expérience" },
              { value: `${PERSONAL_INFO.projectsCompleted}+`, label: 'projets majeurs' },
              { value: `${PERSONAL_INFO.technologiesMastered}+`, label: 'technologies' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-extrabold text-primary"
                  style={{ textShadow: '0 0 12px rgba(255,45,85,0.5)' }}
                >
                  {value}
                </div>
                <div className="text-xs text-dim mt-1 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <span className="text-xs text-ghost tracking-[0.3em] uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
