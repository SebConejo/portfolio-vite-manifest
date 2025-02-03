import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Sarah Anderson
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-6 pt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function NavLinks() {
  return (
    <>
      <a
        href="#about"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        About
      </a>
      <a
        href="#work"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        Work
      </a>
      <a
        href="#skills"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        Skills
      </a>
      <a
        href="#contact"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        Contact
      </a>
    </>
  )
}

function SocialLinks() {
  return (
    <>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900"
      >
        <Github size={20} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="mailto:your.email@example.com"
        className="text-gray-600 hover:text-gray-900"
      >
        <Mail size={20} />
      </a>
    </>
  )
}
