'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Clock, Zap } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { SectionTitle } from '../ui/SectionTitle'
import { ContactForm } from '@/features/contact/ContactForm'
import { staggerContainer, fadeInUp } from '@/lib/animations'
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
    value: 'Antananarivo, Madagascar · Remote OK',
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Fuseau horaire',
    value: 'GMT+3 (EAT) · Flexible',
    href: undefined,
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.04 })

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Bottom glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 110%, rgba(255,45,85,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <SectionTitle
              centered
              number="07 //"
              label="Contact"
              description="Disponible pour des missions freelance, du recrutement ou une collaboration. Réponse garantie sous 24h."
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Availability banner */}
              <div className="flex items-start gap-4 p-4 bg-primary/6 border border-primary/25">
                <Zap size={18} className="text-primary fill-current shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-extrabold text-foreground text-base">
                    Disponible immédiatement
                  </h3>
                  <p className="text-dim text-sm mt-1 leading-relaxed">
                    Ouvert aux missions freelance, CDD/CDI en remote ou hybride.
                    <br />
                    Réponse sous 24h, opérationnel immédiatement.
                  </p>
                </div>
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
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeInUp}>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
