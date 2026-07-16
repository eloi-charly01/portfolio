import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Building2, Calendar } from 'lucide-react'
import { GithubIcon } from '@/components/ui/SocialIcons'
import type { Metadata } from 'next'
import { PROJECTS } from '@/constants/data'
import { Badge } from '@/components/ui/Badge'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Eloi Charly`,
    description: project.solution,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero area */}
        <div className="relative pt-24 pb-16 border-b border-wire">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,45,85,0.1) 0%, transparent 65%)',
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-dim hover:text-primary transition-colors mb-10 uppercase tracking-wider"
            >
              <ArrowLeft size={14} />
              Retour aux projets
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 text-xs font-bold text-primary tracking-wider uppercase">
                <Building2 size={12} />
                {project.company}
              </span>
              <span className="text-ghost">·</span>
              <span className="flex items-center gap-1.5 text-xs text-ghost font-mono">
                <Calendar size={11} />
                {project.period}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground uppercase tracking-tight mb-8 leading-tight">
              {project.title}
            </h1>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4">
              {project.metrics.map(({ metric, label }) => (
                <div key={metric} className="px-6 py-4 bg-surface border border-wire min-w-[120px]">
                  <div
                    className="text-3xl font-extrabold text-primary leading-none"
                    style={{ textShadow: '0 0 12px rgba(255,45,85,0.45)' }}
                  >
                    {metric}
                  </div>
                  <div className="text-xs text-dim mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
          <section>
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 font-mono">
              Problématique
            </h2>
            <p className="text-dim leading-relaxed">{project.problem}</p>
          </section>

          <div className="h-px bg-wire" />

          <section>
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 font-mono">
              Solution développée
            </h2>
            <p className="text-dim leading-relaxed">{project.solution}</p>
          </section>

          <div className="h-px bg-wire" />

          <section>
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 font-mono">
              Résultats obtenus
            </h2>
            <p className="text-dim leading-relaxed">{project.result}</p>
          </section>

          <div className="h-px bg-wire" />

          <section>
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-5 font-mono">
              Technologies utilisées
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="tech">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold border border-wire hover:border-primary/50 hover:text-primary transition-all text-dim clip-cyber"
              >
                <GithubIcon size={16} />
                Voir sur GitHub
              </a>
            )}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-colors clip-cyber"
            >
              Discutons de votre projet
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
