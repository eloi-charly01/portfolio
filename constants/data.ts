import type { Experience, SkillCategory, Project, Service, Education, Language } from '@/types'

export const PERSONAL_INFO = {
  name: 'Eloi Charly',
  fullName: 'RANDRIAMIHAINGO Herinandrianina Eloi Charly',
  title: 'Développeur Full Stack',
  subtitle: 'PHP · Symfony · Laravel · Next.js · React',
  description:
    "Architecte de solutions web robustes avec plus de 4 ans d'expérience. Spécialisé en Symfony, Laravel et Next.js. Je conçois des applications à haute valeur métier, des API performantes et des architectures scalables qui livrent des résultats mesurables.",
  location: 'Antananarivo, Madagascar',
  availability: 'Disponible immédiatement — Télétravail',
  email: 'nandry556@gmail.com',
  phone: '+261 34 60 559 29',
  github: 'https://github.com/eloi-charly01',
  linkedin: 'https://linkedin.com/in/eloi-charly',
  yearsOfExperience: 4,
  projectsCompleted: 5,
  technologiesMastered: 15,
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'mt-company',
    title: 'Développeur Full Stack — CRM Web',
    company: 'MT Company',
    contract: 'Freelance · Télétravail',
    location: 'Remote',
    period: 'Juin 2025 – Présent',
    current: true,
    summary:
      "Conception et développement d'un CRM entreprise from scratch en architecture API-first, avec API Platform (Symfony 7) au backend et Next.js au frontend.",
    achievements: [
      { metric: '-40%', label: "Temps d'intégration des nouvelles fonctionnalités" },
      { metric: '100%', label: 'Architecture API-first REST sécurisée et documentée' },
    ],
    technologies: ['API Platform', 'Symfony 7', 'Next.js', 'React', 'REST API', 'MySQL', 'JWT', 'Docker'],
    responsibilities: [
      "Conception de l'architecture technique full stack (API Platform + Next.js) en appliquant les principes SOLID",
      "Mise en place d'endpoints REST sécurisés avec authentification JWT et gestion fine des droits",
      "Participation active aux code reviews, sprints Agile et collaboration avec les équipes produit et UX/UI",
      "Intégration de données tierces et optimisation des pipelines de traitement",
      'Rédaction de requêtes SQL performantes et sécurisation des données sensibles',
    ],
  },
  {
    id: 'dev-web-service',
    title: 'Développeur PHP Full Stack',
    company: 'DEV WEB SERVICE',
    contract: 'CDI',
    location: 'Ambatoroaka, Antananarivo',
    period: 'Mai 2023 – Présent',
    current: true,
    summary:
      "Développement d'applications web métier complexes avec Symfony et Laravel, avec un focus sur l'optimisation des performances et la qualité du code.",
    achievements: [
      { metric: '-20%', label: 'Temps de chargement via cache et optimisation SQL' },
      { metric: '100%', label: 'Fonctionnalités critiques couvertes par des tests PHPUnit' },
    ],
    technologies: ['Symfony 6/7', 'Laravel 10/11', 'MySQL', 'PHPUnit', 'REST API', 'GraphQL', 'Redis'],
    responsibilities: [
      "Développement d'applications web métier avec Symfony et Laravel, de la conception à la mise en production",
      "Optimisation avancée des bases de données MySQL (indexation, query plan, stratégies de cache)",
      "Développement et consommation d'API REST et GraphQL pour l'intégration de services tiers",
      'Automatisation de workflows commerciaux critiques via des pipelines de traitement de données',
      "Tests unitaires (PHPUnit), code reviews et assurance qualité continue",
    ],
  },
  {
    id: 'marie-stopes',
    title: 'Développeur PHP — Agents & Prestataires',
    company: 'Marie Stopes Madagascar',
    contract: 'Mission',
    location: 'Antananarivo',
    period: 'Nov. 2024 – Mars 2025',
    current: false,
    summary:
      "Développement d'une plateforme critique de génération et distribution de codes uniques avec intégration SMS pour l'automatisation complète des remboursements.",
    achievements: [
      { metric: '-70%', label: 'Temps de traitement manuel des remboursements' },
      { metric: '0', label: "Erreur de distribution grâce à l'automatisation" },
    ],
    technologies: ['PHP 8', 'MySQL', 'Telerivet SMS API', 'Symfony', 'Docker', 'PHPUnit'],
    responsibilities: [
      "Développement d'une plateforme sécurisée de génération et distribution de codes uniques",
      "Intégration de l'API Telerivet SMS pour l'automatisation complète des workflows de remboursement",
      "Conception de l'architecture technique et modélisation MySQL pour garantir l'intégrité des données",
      "Implémentation de la génération sécurisée de tokens et des contrôles d'accès (RBAC)",
      'Mise en place de tests unitaires et procédures de sécurisation des données',
    ],
  },
  {
    id: 'fidev',
    title: 'Développeur PHP — Application Microfinance',
    company: 'FIDEV',
    contract: 'CDI',
    location: 'Alasora, Antananarivo',
    period: 'Août 2022 – Fév. 2023',
    current: false,
    summary:
      "Conception et développement from scratch d'une plateforme de microfinance gérant 500+ comptes clients, avec modules comptables complexes et tableaux de bord analytiques.",
    achievements: [
      { metric: '-50%', label: 'Temps de rapprochement comptable mensuel' },
      { metric: '500+', label: 'Comptes clients gérés sur la plateforme unifiée' },
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'UML', 'Merise'],
    responsibilities: [
      "Conception de l'architecture technique complète et modélisation de la base de données relationnelle MySQL",
      'Développement des modules métier : comptes, épargne, crédit, et comptabilité en partie double',
      "Remplacement intégral des processus tableur par un système unifié et robuste",
      'Développement de tableaux de bord analytiques pour le suivi en temps réel',
      'Gestion de plus de 500 comptes clients avec haute disponibilité des données',
    ],
  },
  {
    id: 'paositra',
    title: 'Développeur PHP — Produits Postaux',
    company: 'Paositra Malagasy',
    contract: 'CDD',
    location: 'Antananarivo',
    period: 'Jan. 2022 – Juil. 2022',
    current: false,
    summary:
      "Développement d'une interface de saisie modernisée avec validation en temps réel et dashboard analytique de suivi des stocks et coûts logistiques.",
    achievements: [
      { metric: '-35%', label: 'Erreurs de saisie grâce à la validation en temps réel' },
      { metric: '-60%', label: 'Temps de reporting manuel via export automatisé' },
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
    responsibilities: [
      "Développement d'une interface de saisie avec validation en temps réel des données postales",
      "Conception et développement d'un tableau de bord analytique de suivi des stocks et coûts",
      'Mise en place de pipelines de validation des données MySQL pour garantir l\'intégrité',
      'Automatisation des exports de rapports et réduction drastique du reporting manuel',
    ],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'PHP 8+', level: 95 },
      { name: 'Symfony 6/7', level: 92 },
      { name: 'Laravel 10/11', level: 88 },
      { name: 'API Platform', level: 85 },
      { name: 'NestJS', level: 65 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', level: 82 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Angular', level: 65 },
      { name: 'Livewire / AlpineJS', level: 72 },
    ],
  },
  {
    id: 'databases',
    label: 'Bases de données',
    skills: [
      { name: 'MySQL', level: 92 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 62 },
      { name: 'SQLite', level: 70 },
    ],
  },
  {
    id: 'api',
    label: 'APIs & Intégrations',
    skills: [
      { name: 'REST API', level: 95 },
      { name: 'GraphQL', level: 72 },
      { name: 'API Platform', level: 85 },
      { name: 'Shopify API', level: 60 },
      { name: 'Telerivet SMS', level: 70 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Outils',
    skills: [
      { name: 'Git / GitHub / GitLab', level: 88 },
      { name: 'Docker', level: 72 },
      { name: 'CI/CD', level: 65 },
      { name: 'Postman / Bruno', level: 85 },
    ],
  },
  {
    id: 'quality',
    label: 'Qualité & Tests',
    skills: [
      { name: 'PHPUnit', level: 82 },
      { name: 'Clean Code / SOLID', level: 88 },
      { name: 'Code Review', level: 85 },
      { name: 'SonarQube', level: 65 },
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture',
    skills: [
      { name: 'DDD', level: 72 },
      { name: 'CQRS', level: 65 },
      { name: 'UML / Merise', level: 85 },
      { name: 'Conception BDD relationnelle', level: 90 },
    ],
  },
  {
    id: 'methods',
    label: 'Méthodes',
    skills: [
      { name: 'Agile / Scrum', level: 85 },
      { name: 'Jira / Trello', level: 82 },
      { name: 'Documentation technique', level: 78 },
      { name: 'Télétravail', level: 95 },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'crm-web-mt-company',
    title: "CRM Web d'entreprise",
    company: 'MT Company',
    period: 'Juin 2025 – Présent',
    problem:
      "L'entreprise gérait ses relations clients avec des outils dispersés (tableurs, emails), causant des pertes de données, des doublons et un suivi client inefficace.",
    solution:
      "Conception et développement d'un CRM complet en architecture API-first avec API Platform (Symfony 7) au backend et Next.js/React au frontend, en appliquant les principes SOLID.",
    result:
      "Système unifié avec endpoints REST sécurisés, gestion des droits granulaire (JWT + RBAC), tableaux de bord temps réel et intégration de données tierces automatisée.",
    metrics: [
      { metric: '-40%', label: "Temps d'intégration des nouvelles fonctionnalités" },
      { metric: '100%', label: 'Sécurisation des données avec JWT + RBAC' },
    ],
    technologies: ['API Platform', 'Symfony 7', 'Next.js', 'React', 'TypeScript', 'MySQL', 'JWT', 'Docker'],
    featured: true,
  },
  {
    id: '2',
    slug: 'plateforme-remboursements-marie-stopes',
    title: 'Plateforme de remboursements automatisée',
    company: 'Marie Stopes Madagascar',
    period: 'Nov. 2024 – Mars 2025',
    problem:
      "La distribution de remboursements aux agents et prestataires était entièrement manuelle, source d'erreurs critiques et chronophage pour les équipes opérationnelles.",
    solution:
      "Plateforme sécurisée de génération et distribution de codes uniques avec intégration Telerivet SMS pour l'automatisation complète du workflow de remboursement.",
    result:
      "Élimination totale des erreurs de distribution et réduction massive du temps de traitement grâce à l'automatisation complète du cycle de remboursement.",
    metrics: [
      { metric: '-70%', label: 'Réduction du temps de traitement manuel' },
      { metric: '0', label: 'Erreur de distribution depuis le déploiement' },
    ],
    technologies: ['PHP 8', 'Symfony', 'MySQL', 'Telerivet SMS API', 'Docker', 'PHPUnit'],
    featured: true,
  },
  {
    id: '3',
    slug: 'app-microfinance-fidev',
    title: 'Application de gestion microfinance',
    company: 'FIDEV',
    period: 'Août 2022 – Fév. 2023',
    problem:
      "FIDEV gérait 500+ comptes clients via des tableurs Excel, engendrant des erreurs comptables fréquentes, des incohérences et un rapprochement mensuel laborieux.",
    solution:
      "Développement from scratch d'une plateforme complète avec modules épargne, crédit et comptabilité en partie double, remplaçant l'intégralité des processus tableur.",
    result:
      "Système unifié gérant 500+ comptes avec tableaux de bord analytiques, réduction drastique du temps de rapprochement et élimination des erreurs de saisie manuelle.",
    metrics: [
      { metric: '-50%', label: 'Temps de rapprochement comptable mensuel' },
      { metric: '500+', label: 'Comptes clients gérés sur la plateforme' },
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'UML', 'Merise'],
    featured: true,
  },
  {
    id: '4',
    slug: 'gestion-produits-postaux',
    title: 'Dashboard analytics produits postaux',
    company: 'Paositra Malagasy',
    period: 'Jan. 2022 – Juil. 2022',
    problem:
      "La saisie et le suivi des produits postaux étaient manuels, sans validation ni reporting automatisé, entraînant des erreurs fréquentes et un reporting mensuel très chronophage.",
    solution:
      "Interface de saisie modernisée avec validation en temps réel, pipeline de validation MySQL et dashboard analytique de suivi des stocks et coûts logistiques.",
    result:
      "Réduction significative des erreurs de saisie et du temps de reporting grâce à l'automatisation des exports et à la validation temps réel.",
    metrics: [
      { metric: '-35%', label: 'Réduction des erreurs de saisie' },
      { metric: '-60%', label: 'Réduction du temps de reporting manuel' },
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
    featured: false,
  },
  {
    id: '5',
    slug: 'projets-open-source',
    title: 'Projets Open Source & Veille',
    company: 'Personnel',
    period: '2022 – Présent',
    problem:
      "Exploration continue des architectures modernes API-first, des patterns DDD/CQRS et des frameworks JavaScript/TypeScript pour rester à la pointe.",
    solution:
      "Projets web personnels avec React, Next.js, NestJS et API Platform pour explorer les architectures modernes. Auto-formation continue sur PHP 8+, Docker et CI/CD.",
    result:
      "Maîtrise des patterns DDD et CQRS, montée en compétence sur NestJS et architecture microservices, contributions open source sur GitHub.",
    metrics: [
      { metric: '10+', label: 'Projets personnels sur GitHub' },
      { metric: 'DDD/CQRS', label: 'Patterns maîtrisés en auto-formation' },
    ],
    technologies: ['React', 'Next.js', 'NestJS', 'API Platform', 'TypeScript', 'Docker', 'CI/CD'],
    featured: false,
    githubUrl: 'https://github.com/eloi-charly01',
  },
]

export const SERVICES: Service[] = [
  {
    id: 'api',
    title: 'Développement API REST / GraphQL',
    description:
      "Conception et développement d'API robustes, documentées et sécurisées avec Symfony API Platform ou NestJS. Architecture API-first, authentification JWT, versioning.",
    icon: 'Zap',
    features: ['API Platform / Symfony', 'GraphQL', 'JWT / OAuth2', 'Documentation OpenAPI', 'Tests unitaires'],
  },
  {
    id: 'fullstack',
    title: 'Application Full Stack Web',
    description:
      "Développement complet d'applications web métier, du backend PHP/Node.js au frontend React/Next.js, en passant par la base de données et le déploiement.",
    icon: 'Layers',
    features: ['Symfony / Laravel', 'React / Next.js', 'TypeScript', 'MySQL / PostgreSQL', 'Docker'],
  },
  {
    id: 'db-architecture',
    title: 'Architecture & Optimisation BDD',
    description:
      "Conception de bases de données relationnelles performantes, optimisation de requêtes SQL lentes, mise en place de stratégies de cache et d'indexation avancée.",
    icon: 'Database',
    features: ['Modélisation UML / Merise', 'Indexation avancée', 'Query optimization', 'Cache strategy', 'Migration'],
  },
  {
    id: 'code-review',
    title: 'Audit de Code & Code Review',
    description:
      "Analyse de codebase existante, détection des anti-patterns, revues de code systématiques et mise en place de standards de qualité (SOLID, Clean Code, PHPUnit).",
    icon: 'ShieldCheck',
    features: ['Analyse SOLID', 'Clean Code', 'PHPUnit / TDD', 'SonarQube', 'Refactoring'],
  },
  {
    id: 'conseil',
    title: 'Conseil Technique & Architecture',
    description:
      "Accompagnement dans le choix technologique, la définition de l'architecture (DDD, CQRS), la mise en place de CI/CD et les bonnes pratiques DevOps.",
    icon: 'Brain',
    features: ['DDD / CQRS', 'Choix technologique', 'CI/CD pipeline', 'Docker / Cloud', 'Agile / Scrum'],
  },
]

export const EDUCATION: Education = {
  degree: 'Master 2',
  field: 'Bases de Données & Génie Logiciel',
  institution: 'CNTEMAD',
  location: 'Antananarivo, Madagascar',
  year: '2024',
  highlights: [
    'Conception de bases de données (UML, Merise)',
    'Génie logiciel et patterns de conception',
    'Programmation orientée objet avancée',
    'Algorithmique et structures de données',
  ],
}

export const LANGUAGES: Language[] = [
  { name: 'Malgache', level: 'Langue maternelle', code: 'mg' },
  { name: 'Français', level: 'Avancé — Maîtrise professionnelle', code: 'fr' },
  { name: 'Anglais', level: 'B1 — Technique (lecture, écriture, documentation)', code: 'en' },
]
