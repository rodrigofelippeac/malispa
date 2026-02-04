import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes } from 'react-icons/fa'
import Container from '../common/Container'
import LanguageSelector from '../common/LanguageSelector'

/**
 * Header - Cabeçalho fixo com navegação
 */
export default function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detectar scroll para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll para seções
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false) // Fechar menu mobile após click
    }
  }

  // Links de navegação
  const navLinks = [
    { id: 'inicio', label: t('nav.home'), href: '#inicio' },
    { id: 'sobre', label: t('nav.about'), href: '#sobre' },
    { id: 'servicos', label: t('nav.services'), href: '#servicos' },
    { id: 'contato', label: t('nav.contact'), href: '#contato' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('inicio')
              }}
              className="flex items-center"
            >
              <img
                src="/logo-mali-spa.png"
                alt="Mali Spa"
                className="h-16 w-16 md:h-20 md:w-20 object-contain transition-all duration-300"
              />
            </a>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.id)
                }}
                className={`font-medium transition-colors hover:text-primary-light ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Selector Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector isScrolled={isScrolled} />
          </div>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-primary hover:bg-secondary-light' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </Container>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ top: '80px' }}
          />

          {/* Menu Slide */}
          <div className="fixed top-20 left-0 right-0 bg-white md:hidden shadow-lg">
            <Container>
              <nav className="flex flex-col py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.id)
                    }}
                    className="py-3 px-4 text-gray-700 font-medium hover:bg-secondary-light hover:text-primary rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Language Selector Mobile */}
                <div className="pt-2 pb-2 px-4">
                  <LanguageSelector isScrolled={true} />
                </div>
              </nav>
            </Container>
          </div>
        </>
      )}
    </header>
  )
}
