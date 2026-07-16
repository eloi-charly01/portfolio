'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building2 } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { Badge } from '../ui/Badge'
import { EXPERIENCES } from '@/constants/data'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.04 })

  return (
    <section id="experience" className="py-24 relative bg-surface/15">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <SectionTitle
              number="03 //"
              label="Expériences"
              description="5 missions professionnelles, des résultats mesurables à chaque étape."
            />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:-translate-x-1/2" />

            <div className="space-y-10">
              {EXPERIENCES.map((exp, index) => {
                const isLeft = index % 2 === 0
                return (
                  <motion.div
                    key={exp.id}
                    variants={isLeft ? slideInLeft : slideInRight}
                    className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-14"
                  >
                    {/* Timeline dot */}
                    <div
                      className={cn(
                        'absolute w-3 h-3 bg-primary border-2 border-background z-10',
                        'top-6 left-0 md:left-1/2 md:-translate-x-1/2',
                        exp.current && 'ring-2 ring-primary/30 ring-offset-1 ring-offset-background'
                      )}
                    />

                    {/* Card — alternate sides */}
                    <div className={cn(isLeft ? 'md:col-start-1' : 'md:col-start-2')}>
                      <div className="bg-surface border border-wire p-5 hover:border-primary/40 transition-all duration-300 clip-cyber">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="font-extrabold text-foreground text-sm leading-snug">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              <Building2 size={12} className="text-primary shrink-0" />
                              <span className="text-primary text-sm font-bold">{exp.company}</span>
                              <span className="text-ghost">·</span>
                              <span className="text-dim text-xs">{exp.contract}</span>
                            </div>
                          </div>
                          {exp.current && (
                            <span className="px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider shrink-0">
                              Actuel
                            </span>
                          )}
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-5 mb-3 text-xs text-ghost font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar size={11} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} />
                            {exp.location}
                          </span>
                        </div>

                        {/* Summary */}
                        <p className="text-dim text-xs leading-relaxed mb-4">{exp.summary}</p>

                        {/* Achievements */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {exp.achievements.map(({ metric, label }) => (
                            <div
                              key={metric}
                              className="p-2.5 bg-panel border border-primary/20 text-center"
                            >
                              <div
                                className="text-2xl font-extrabold text-primary leading-none"
                                style={{ textShadow: '0 0 10px rgba(255,45,85,0.4)' }}
                              >
                                {metric}
                              </div>
                              <div className="text-xs text-dim mt-1 leading-tight">{label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="tech">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
