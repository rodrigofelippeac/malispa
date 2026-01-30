import { useTranslation } from 'react-i18next'
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import Container from '../common/Container'
import { contact } from '../../constants'

/**
 * Footer - Rodapé com informações de contato
 */
export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  // Smooth scroll para seções
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer style={{ background: 'linear-gradient(to bottom, #311303, #1a0a01)' }}>
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Logo e Tagline */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold" style={{ color: '#ffffff' }}>
                Mali Spa
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#e6efee' }}>
                {t('hero.tagline')}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: '#e6efee', opacity: 0.8 }}>
                {t('hero.description')}
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold" style={{ color: '#ffffff' }}>
                {t('footer.navigation')}
              </h4>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('inicio')
                  }}
                  className="transition-all hover:translate-x-1 inline-block"
                  style={{ color: '#e6efee' }}
                  onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.target.style.color = '#e6efee'}
                >
                  {t('nav.home')}
                </a>
                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('sobre')
                  }}
                  className="transition-all hover:translate-x-1 inline-block"
                  style={{ color: '#e6efee' }}
                  onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.target.style.color = '#e6efee'}
                >
                  {t('nav.about')}
                </a>
                <a
                  href="#servicos"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('servicos')
                  }}
                  className="transition-all hover:translate-x-1 inline-block"
                  style={{ color: '#e6efee' }}
                  onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.target.style.color = '#e6efee'}
                >
                  {t('nav.services')}
                </a>
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('contato')
                  }}
                  className="transition-all hover:translate-x-1 inline-block"
                  style={{ color: '#e6efee' }}
                  onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.target.style.color = '#e6efee'}
                >
                  {t('nav.contact')}
                </a>
              </nav>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold" style={{ color: '#ffffff' }}>
                {t('footer.contactInfo')}
              </h4>
              <div className="flex flex-col space-y-3">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${contact.phone.raw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-all hover:translate-x-1 group"
                  style={{ color: '#e6efee' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#e6efee'
                  }}
                >
                  <FaWhatsapp className="text-xl transition-colors" />
                  <span>{contact.phone.display}</span>
                </a>

                {/* Telefone */}
                <a
                  href={`tel:${contact.phone.raw}`}
                  className="flex items-center gap-3 transition-all hover:translate-x-1 group"
                  style={{ color: '#e6efee' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#e6efee'
                  }}
                >
                  <FaPhone className="text-lg" />
                  <span>{contact.phone.display}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contact.email.address}`}
                  className="flex items-center gap-3 transition-all hover:translate-x-1 group"
                  style={{ color: '#e6efee' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#e6efee'
                  }}
                >
                  <FaEnvelope className="text-lg" />
                  <span>{contact.email.display}</span>
                </a>

                {/* Localização */}
                <div className="flex items-center gap-3" style={{ color: '#e6efee' }}>
                  <FaMapMarkerAlt className="text-lg" />
                  <span>{contact.location.fullAddress}</span>
                </div>

                {/* Instagram */}
                <a
                  href={contact.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-all hover:translate-x-1 group"
                  style={{ color: '#e6efee' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#e6efee'
                  }}
                >
                  <FaInstagram className="text-xl transition-colors" />
                  <span>{contact.social.instagram.handle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.5rem 0', textAlign: 'center' }}>
          <p style={{ color: '#e6efee', opacity: 0.8, fontSize: '0.875rem' }}>
            © {currentYear} {contact.business.name}. {t('footer.rights')}
          </p>
        </div>
      </Container>
    </footer>
  )
}
