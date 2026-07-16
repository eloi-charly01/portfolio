export interface Achievement {
  metric: string
  label: string
}

export interface Experience {
  id: string
  title: string
  company: string
  contract: string
  location: string
  period: string
  current: boolean
  summary: string
  achievements: Achievement[]
  technologies: string[]
  responsibilities: string[]
}

export interface Skill {
  name: string
  level: number // 0-100
}

export interface SkillCategory {
  id: string
  label: string
  skills: Skill[]
}

export interface Project {
  id: string
  slug: string
  title: string
  company: string
  period: string
  problem: string
  solution: string
  result: string
  metrics: Achievement[]
  technologies: string[]
  featured: boolean
  githubUrl?: string
  demoUrl?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Language {
  name: string
  level: string
  code: string
}

export interface Education {
  degree: string
  field: string
  institution: string
  location: string
  year: string
  highlights: string[]
}
