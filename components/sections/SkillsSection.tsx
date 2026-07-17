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
    <section id="skills" className="py-28 relative">
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
              label="Compétences"
              description="Technologies et pratiques au cœur de mon expertise quotidienne."
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
              className="grid sm:grid-cols-2 gap-x-12 gap-y-5"
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
        </motion.div>
      </div>
    </section>
  )
}
