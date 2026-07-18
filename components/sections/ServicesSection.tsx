'use client'

import { Zap, Layers, Database, ShieldCheck, Brain } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { CyberButton } from '../ui/CyberButton'
import { SERVICES } from '@/constants/data'

const ICON_MAP: Record<string, React.ComponentType<{ size: number; className?: string }>> = {
  Zap,
  Layers,
  Database,
  ShieldCheck,
  Brain,
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <SectionTitle
            centered
            label="Services"
            description="Ce que je peux faire pour vous, en freelance ou en mission longue durée."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <div
                key={service.id}
                className="relative bg-surface border border-wire p-6 clip-cyber hover:border-primary/40 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary/50" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/50" />

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-11 h-11 bg-primary/10 border border-primary/30 mb-4 clip-cyber group-hover:bg-primary/15 transition-colors">
                    {Icon && <Icon size={20} className="text-primary" />}
                  </div>

                  <h3 className="font-extrabold text-foreground text-sm uppercase tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-dim text-xs leading-relaxed mb-4">{service.description}</p>

                  <ul className="space-y-1.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-ghost">
                        <span className="w-1 h-1 bg-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center animate-fade-in-up" style={{ animationDelay: '700ms' }}>
            <p className="text-dim mb-6 text-base">
              Vous avez un projet ? Discutons de vos besoins.
            </p>
            <CyberButton href="#contact" variant="primary" size="lg">
              Démarrons votre projet
            </CyberButton>
        </div>
      </div>
    </section>
  )
}
