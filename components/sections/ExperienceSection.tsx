'use client'

import { Calendar, MapPin, Building2 } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { Badge } from '../ui/Badge'
import { EXPERIENCES } from '@/constants/data'
import { cn } from '@/lib/utils'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-surface/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <SectionTitle
            label="Expériences"
            description="5 missions professionnelles, des résultats mesurables à chaque étape."
          />
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line - toujours visible sur mobile et desktop */}
          <div className="absolute left-1.75 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/50 md:-translate-x-1/2" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={exp.id}
                  className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-14 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot CARRÉ - tous visibles */}
                  <div
                    className={cn(
                      'absolute w-4 h-4 bg-primary border-2 border-background z-10',
                      'top-6 -left-px md:left-1/2 md:-translate-x-1/2',
                      'shadow-[0_0_12px_rgba(255,45,85,0.6)]'
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
                              <div className="text-2xl font-extrabold text-primary leading-none">
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
                  </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
