'use client'

import { Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { SectionTitle } from '../ui/SectionTitle'
import { ContactForm } from '@/features/contact/ContactForm'
import { PERSONAL_INFO } from '@/constants/data'

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/eloi-charly01',
    href: PERSONAL_INFO.github,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/eloi-charly',
    href: PERSONAL_INFO.linkedin,
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Antananarivo, Madagascar',
    href: undefined,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Bottom glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 110%, rgba(255,45,85,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <SectionTitle
            centered
            label="Contact"
            description="Parlons de votre projet. Échangeons sur vos besoins techniques et vos défis d'architecture."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {/* Intro */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Discutons de votre projet
                </h3>
                <p className="text-dim text-sm leading-relaxed">
                  Que ce soit pour une mission de développement, un audit technique ou du conseil
                  en architecture, je suis à l'écoute de vos besoins. Réponse garantie sous 24h.
                </p>
              </div>

              {/* Links */}
              <div className="space-y-4">
                {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <Icon size={15} className="text-primary shrink-0" />
                    <span className="text-xs text-ghost uppercase tracking-wider w-24 shrink-0">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-dim hover:text-primary transition-colors truncate"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-dim">{value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick note */}
              <div className="p-4 border-l-2 border-primary/50 bg-surface">
                <p className="text-xs text-dim leading-relaxed italic">
                  "Je préfère construire des systèmes robustes et maintenables plutôt que du code
                  rapide qui crée de la dette technique. Chaque ligne de code que j'écris, je l'écris
                  comme si quelqu'un d'autre devait le maintenir demain."
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <ContactForm />
            </div>
          </div>
      </div>
    </section>
  )
}
