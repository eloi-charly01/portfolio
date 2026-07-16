'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, BookOpen, Code2, Server } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { CyberCard } from '../ui/CyberCard'
import { EDUCATION } from '@/constants/data'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const SELF_LEARNING = [
  {
    icon: Code2,
    label: 'DDD & CQRS',
    desc: 'Domain-Driven Design et Command Query Responsibility Segregation en auto-formation continue',
  },
  {
    icon: Server,
    label: 'Docker & CI/CD',
    desc: "Containerisation, GitHub Actions, pipelines de déploiement automatisés",
  },
  {
    icon: BookOpen,
    label: 'PHP 8+ & Symfony',
    desc: 'Fiber, Enums, Readonly properties, attributs PHP 8.2+, nouvelles APIs Symfony',
  },
  {
    icon: Code2,
    label: 'NestJS & TypeScript',
    desc: 'Backend Node.js typé, microservices, décorateurs et architecture modulaire',
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section id="education" className="py-24 relative bg-surface/15">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <SectionTitle
              number="06 //"
              label="Formation"
              description="Formation académique solide et veille technologique continue."
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Academic */}
            <motion.div variants={fadeInUp}>
              <p className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.28em] mb-6">
                <GraduationCap size={14} />
                Formation académique
              </p>
              <CyberCard size="lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 border border-primary/30 flex items-center justify-center clip-cyber">
                    <GraduationCap size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-foreground text-base leading-tight">
                      {EDUCATION.degree} — {EDUCATION.field}
                    </h4>
                    <p className="text-primary text-sm font-bold mt-1">{EDUCATION.institution}</p>
                    <p className="text-ghost text-xs mt-0.5 font-mono">
                      {EDUCATION.location} · {EDUCATION.year}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {EDUCATION.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-dim">
                          <span className="w-1 h-1 bg-primary shrink-0 mt-1.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CyberCard>
            </motion.div>

            {/* Self-learning */}
            <motion.div variants={fadeInUp}>
              <p className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.28em] mb-6">
                <BookOpen size={14} />
                Veille & Auto-formation
              </p>
              <div className="space-y-3">
                {SELF_LEARNING.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex gap-3 p-4 bg-surface border border-wire hover:border-primary/30 transition-colors"
                  >
                    <Icon size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-foreground text-sm">{label}</p>
                      <p className="text-ghost text-xs mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 bg-primary/5 border border-primary/20">
                <p className="text-xs text-dim leading-relaxed">
                  <span className="text-primary font-bold">github.com/eloi-charly01</span> — Projets
                  web personnels avec React, Next.js, NestJS et API Platform pour explorer les
                  architectures modernes et l'approche API-first.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
