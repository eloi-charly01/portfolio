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
    title: 'Architecture & Performance',
    description:
      "Conception de systèmes scalables avec API Platform, DDD et patterns modernes. Optimisation SQL avancée pour des performances maximales.",
  },
  {
    number: '02',
    title: 'Impact mesurable',
    description:
      "Réductions de 40 à 70% des temps de traitement sur chaque mission. Des résultats concrets, chiffrés et vérifiables.",
  },
  {
    number: '03',
    title: 'Excellence technique',
    description:
      "Clean Architecture, principes SOLID, tests automatisés. Code maintenable et évolutif comme standard, pas comme option.",
  },
  {
    number: '04',
    title: 'Expertise Full Stack',
    description:
      "De la modélisation BDD aux interfaces React/Next.js. Vision complète de la stack pour des solutions cohérentes.",
  },
]

const INFO_CARDS = [
  { icon: MapPin, label: 'Localisation', value: 'Antananarivo, Madagascar' },
  { icon: Globe, label: 'Langues', value: 'Français · Anglais · Malgache' },
  { icon: Award, label: 'Formation', value: 'Master 2 · CNTEMAD 2024' },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <SectionTitle
              label="À propos"
              description="Architecte de solutions web robustes, passionné par le clean code et les architectures scalables."
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="space-y-4 text-dim leading-relaxed">
                <p>
                  Développeur Full Stack depuis{' '}
                  <strong className="text-foreground font-bold">plus de 4 ans</strong>, spécialisé
                  dans la conception d'applications métier critiques avec{' '}
                  <strong className="text-primary font-bold">Symfony</strong>,{' '}
                  <strong className="text-primary font-bold">Laravel</strong> et{' '}
                  <strong className="text-primary font-bold">API Platform</strong>.
                </p>
                <p>
                  Mon expertise couvre l'ensemble de la chaîne de valeur : de l'architecture backend
                  et la modélisation de bases de données complexes, jusqu'aux interfaces modernes avec{' '}
                  <strong className="text-primary font-bold">React / Next.js</strong>. Chaque
                  ligne de code est pensée pour la maintenabilité et la performance.
                </p>
                <p>
                  Adepte des principes{' '}
                  <strong className="text-primary font-bold">SOLID</strong> et du{' '}
                  <strong className="text-foreground font-bold">Clean Code</strong>, je privilégie
                  les architectures robustes et évolutives. Résultats mesurables : réductions de 40 à
                  70% des temps de traitement sur mes projets récents.
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
