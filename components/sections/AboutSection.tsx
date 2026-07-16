'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock, Globe, Award } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { CyberCard } from '../ui/CyberCard'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const HIGHLIGHTS = [
  {
    number: '01',
    title: 'Architecture technique solide',
    description:
      "Conception de systèmes scalables avec API Platform, DDD et CQRS. Modélisation BDD relationnelle MySQL avancée avec focus sur la performance.",
  },
  {
    number: '02',
    title: 'Impact business mesurable',
    description:
      "-70% de traitement manuel, -50% temps de rapprochement, -40% d'intégration. Des résultats chiffrés prouvés sur chaque mission.",
  },
  {
    number: '03',
    title: 'Qualité & bonnes pratiques',
    description:
      "Clean code, principes SOLID, tests unitaires PHPUnit, code reviews systématiques. La qualité n'est pas optionnelle.",
  },
  {
    number: '04',
    title: 'Autonomie & collaboration',
    description:
      "4+ ans en télétravail, Agile/Scrum, communication claire. Opérationnel immédiatement, disponible pour des missions remote.",
  },
]

const INFO_CARDS = [
  { icon: MapPin, label: 'Localisation', value: 'Antananarivo, Madagascar' },
  { icon: Clock, label: 'Disponibilité', value: 'Immédiate · Télétravail' },
  { icon: Globe, label: 'Langues', value: 'Français · Anglais B1 · Malgache' },
  { icon: Award, label: 'Formation', value: 'Master 2 · CNTEMAD 2024' },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <SectionTitle
              number="01 //"
              label="À propos"
              description="Architecte de solutions web robustes, passionné par le clean code et les architectures scalables."
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="space-y-4 text-dim leading-relaxed">
                <p>
                  Développeur PHP Full Stack depuis{' '}
                  <strong className="text-foreground font-bold">plus de 4 ans</strong>, je me
                  spécialise dans la conception et le développement d'applications web métier
                  robustes avec{' '}
                  <strong className="text-primary font-bold">Symfony</strong> et{' '}
                  <strong className="text-primary font-bold">Laravel</strong>, ainsi que dans les
                  interfaces modernes avec{' '}
                  <strong className="text-primary font-bold">React / Next.js</strong>.
                </p>
                <p>
                  Mon approche est centrée sur l'
                  <strong className="text-foreground font-bold">impact business mesurable</strong>{' '}
                  : chaque projet est une opportunité d'apporter de la valeur concrète — réduction
                  des temps de traitement, automatisation des workflows critiques, optimisation des
                  performances SQL.
                </p>
                <p>
                  Adepte du{' '}
                  <strong className="text-foreground font-bold">clean code</strong> et des
                  principes{' '}
                  <strong className="text-primary font-bold">SOLID</strong>, je travaille en
                  environnement Agile et suis pleinement opérationnel en contexte de télétravail
                  international.
                </p>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-3">
                {INFO_CARDS.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 p-3 bg-surface border border-wire hover:border-primary/30 transition-colors"
                  >
                    <Icon size={15} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-ghost uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-semibold text-foreground mt-0.5 leading-tight">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-6">
                Ce que j'apporte
              </p>
              {HIGHLIGHTS.map(({ number, title, description }) => (
                <CyberCard key={number} className="flex gap-5" hover>
                  <span className="text-4xl font-extrabold text-primary/15 shrink-0 leading-none mt-1 font-mono">
                    {number}
                  </span>
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1.5">{title}</h4>
                    <p className="text-xs text-dim leading-relaxed">{description}</p>
                  </div>
                </CyberCard>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
