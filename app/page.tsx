import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}


