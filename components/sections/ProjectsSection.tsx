'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/ui/SocialIcons'
import Link from 'next/link'
import { SectionTitle } from '../ui/SectionTitle'
import { Badge } from '../ui/Badge'
import { PROJECTS } from '@/constants/data'
import { staggerContainer, staggerFast, fadeInUp, scaleIn } from '@/lib/animations'

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.04 })

  const featured = PROJECTS.filter((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <SectionTitle
              number="04 //"
              label="Projets"
              description="Applications conçues pour résoudre de vrais problèmes métier, avec des résultats mesurables."
            />
          </motion.div>

          {/* Featured grid */}
          <motion.div
            variants={staggerFast}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6"
          >
            {featured.map((project) => (
              <motion.div
                key={project.id}
                variants={scaleIn}
                className="group flex flex-col bg-surface border border-wire clip-cyber hover:border-primary/40 transition-all duration-300"
              >
                {/* Card image area */}
                <div className="relative h-40 bg-panel border-b border-wire overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
                  <span
                    className="text-6xl font-extrabold text-primary/8 uppercase tracking-tighter select-none"
                    aria-hidden
                  >
                    {project.title.slice(0, 3).toUpperCase()}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent" />

                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">
                      {project.company}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 bg-background/70 border border-wire text-xs text-ghost font-mono">
                      {project.period}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-extrabold text-foreground text-sm uppercase tracking-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Metrics */}
                  <div className="flex gap-2 mb-3">
                    {project.metrics.slice(0, 2).map(({ metric, label }) => (
                      <div
                        key={metric}
                        className="flex-1 p-2 bg-panel border border-primary/15 text-center"
                      >
                        <div
                          className="text-xl font-extrabold text-primary leading-none"
                          style={{ textShadow: '0 0 8px rgba(255,45,85,0.4)' }}
                        >
                          {metric}
                        </div>
                        <div className="text-xs text-ghost mt-0.5 leading-tight">{label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-dim text-xs leading-relaxed mb-4 flex-1">{project.result}</p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-1 text-xs font-bold text-primary hover:gap-2.5 transition-all uppercase tracking-wider"
                    >
                      Voir le détail <ArrowRight size={12} />
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ghost hover:text-primary transition-colors"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Other projects */}
          <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
            {others.map((project) => (
              <div
                key={project.id}
                className="flex gap-4 p-4 bg-surface border border-wire hover:border-primary/30 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-foreground text-sm">{project.title}</h4>
                    <span className="text-xs text-ghost shrink-0">{project.company}</span>
                  </div>
                  <p className="text-xs text-dim leading-relaxed mb-2">{project.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs text-ghost">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ghost hover:text-primary transition-colors self-start shrink-0"
                  >
                    <GithubIcon size={16} />
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
