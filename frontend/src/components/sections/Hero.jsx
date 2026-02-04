import { useTranslation } from 'react-i18next'
import Container from '../common/Container'

/**
 * Hero - Seção principal da landing page
 * Baseada no design do site antigo Mali Spa
 */
export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="inicio"
      className="relative min-h-screen md:h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/hero-massagem.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay gradiente escuro melhorado para contraste de texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/75 via-brown/65 to-primary/80" />

      {/* Conteúdo */}
      <Container className="relative z-10 pt-20 pb-16">
        <div className="text-center space-y-8">
          {/* Logo - Tamanho reduzido para não competir com a imagem */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <img
                src="/logo-mali-spa.png"
                alt="Mali Spa"
                className="w-full h-full object-contain drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>

          {/* Tagline com sombra para legibilidade */}
          <p className="text-2xl md:text-3xl font-light text-white/95" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            {t('hero.tagline')}
          </p>

          {/* Descrição com sombra para legibilidade */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
            {t('hero.description')}
          </p>

          {/* CTA */}
          <div className="flex justify-center items-center pt-6">
            <button
              onClick={() => {
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)',
                color: '#1a0a01',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #D4B46A 0%, #E5C77B 100%)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {t('hero.viewExperiences')}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => {
                document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-white/60 hover:text-white transition-colors"
              aria-label={t('hero.scrollDown')}
            >
              <svg
                className="w-8 h-8 mx-auto"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Ondas decorativas bege no fundo */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F5F0E8"
          />
        </svg>
      </div>
    </section>
  )
}
