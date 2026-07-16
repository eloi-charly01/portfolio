import { Mail, Zap } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-wire">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap size={15} className="text-primary fill-current" />
            <span className="font-extrabold tracking-widest uppercase text-sm">
              ELOI<span className="text-primary">.</span>DEV
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/eloi-charly01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghost hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/eloi-charly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghost hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:nandry556@gmail.com"
              className="text-ghost hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-ghost">
            © {year} Eloi Charly — Développeur Full Stack
          </p>
        </div>
      </div>
    </footer>
  )
}
