'use client'

import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { ProgressBar } from '../ui/ProgressBar'
import { SKILL_CATEGORIES } from '@/constants/data'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function SkillsSection() {
  const [activeId, setActiveId] = useState('backend')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeId)!

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <SectionTitle
              number="02 //"
              label="Compétences"
              description="15+ technologies maîtrisées, organisées par domaine d'expertise."
            />
          </motion.div>

          {/* Category tabs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-10">
            {SKILL_CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveId(id)}
                className={cn(
                  'px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all clip-cyber',
                  activeId === id
                    ? 'bg-primary text-white border border-primary'
                    : 'bg-surface text-dim border border-wire hover:border-primary/50 hover:text-primary'
                )}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Skills grid — animated key change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              className="grid sm:grid-cols-2 gap-x-12 gap-y-5 mb-14"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeCategory.skills.map(({ name, level }, i) => (
                <ProgressBar
                  key={name}
                  label={name}
                  value={level}
                  showLevel
                  delay={i * 0.08}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* All tech badges overview */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs text-ghost uppercase tracking-[0.3em] mb-4 font-mono">
              Toutes les technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILL_CATEGORIES.flatMap((c) => c.skills.map((s) => ({ ...s, cid: c.id }))).map(({ name, cid }) => (
                <span
                  key={`${cid}-${name}`}
                  className="px-3 py-1 text-xs font-medium bg-surface border border-wire text-dim hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
