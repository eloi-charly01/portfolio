'use client'

import { useState } from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { ProgressBar } from '../ui/ProgressBar'
import { SKILL_CATEGORIES } from '@/constants/data'
import { cn } from '@/lib/utils'

export function SkillsSection() {
  const [activeId, setActiveId] = useState('backend')

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeId)!

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <SectionTitle
            label="Compétences"
            description="Technologies et pratiques au cœur de mon expertise quotidienne."
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
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
        </div>

        {/* Skills grid — animated key change */}
        <div
          key={activeId}
          className="grid sm:grid-cols-2 gap-x-12 gap-y-5 animate-fade-in"
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
        </div>
      </div>
    </section>  
  )
}
