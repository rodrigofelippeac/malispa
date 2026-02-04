import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Container from '../common/Container'
import { FaStar, FaStarHalfAlt, FaGoogle, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

/**
 * GoogleReviews - Seção de avaliações do Google em carrossel
 * Exibe apenas avaliações positivas (5 estrelas) com structured data para SEO
 */
export default function GoogleReviews() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Avaliações positivas 5 estrelas (substituir por avaliações reais do Google)
  const reviews = [
    {
      id: 1,
      author: 'Mariana Silva',
      rating: 5,
      date: '2025-01-15',
      text: 'Experiência maravilhosa! O ambiente é acolhedor e os profissionais extremamente atenciosos. A massagem relaxante foi perfeita, saí renovada.',
      avatar: 'MS'
    },
    {
      id: 2,
      author: 'Carlos Eduardo',
      rating: 5,
      date: '2025-01-10',
      text: 'Atendimento impecável! O Mali Spa superou todas as minhas expectativas. Recomendo muito o Day Spa, vale cada centavo.',
      avatar: 'CE'
    },
    {
      id: 3,
      author: 'Juliana Costa',
      rating: 5,
      date: '2024-12-28',
      text: 'Lugar incrível para relaxar e se cuidar. As terapeutas são muito profissionais e o ambiente transmite paz e tranquilidade.',
      avatar: 'JC'
    },
    {
      id: 4,
      author: 'Ricardo Mendes',
      rating: 5,
      date: '2024-12-20',
      text: 'Melhor spa de João Pessoa! Fui para a massagem terapêutica e voltarei com certeza. Excelente custo-benefício.',
      avatar: 'RM'
    },
    {
      id: 5,
      author: 'Ana Paula Santos',
      rating: 5,
      date: '2024-12-15',
      text: 'Simplesmente perfeito! Desde a recepção até o final do atendimento, tudo foi impecável. Voltarei sempre!',
      avatar: 'AP'
    },
    {
      id: 6,
      author: 'Fernando Oliveira',
      rating: 5,
      date: '2024-12-05',
      text: 'Experiência única! O Mali Spa é o melhor lugar para relaxar em João Pessoa. Super recomendo!',
      avatar: 'FO'
    }
  ]

  // Dados das avaliações do Google
  const averageRating = 4.9
  const totalReviews = 69

  // Número de reviews visíveis por vez (responsivo)
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3 // Desktop: 3 cards
      if (window.innerWidth >= 768) return 2 // Tablet: 2 cards
    }
    return 1 // Mobile: 1 card
  }

  const [visibleCount, setVisibleCount] = useState(getVisibleCount())

  // Atualizar visibleCount no resize
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setVisibleCount(getVisibleCount())
    })
  }

  // Navegação do carrossel
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= reviews.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, reviews.length - visibleCount) : prev - 1
    )
  }

  // Reviews visíveis no momento
  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount)

  return (
    <section id="avaliacoes" className="py-16 md:py-20 lg:py-24 bg-secondary-50">
      <Container>
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>

          {/* Rating Agregado */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <FaGoogle className="text-4xl" style={{ color: '#4285F4' }} />
              <span className="text-5xl font-bold text-primary-900">{averageRating.toFixed(1)}</span>
            </div>

            {/* Estrelas - 4.9 = 4 estrelas cheias + 1 meia */}
            <div className="flex gap-1">
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} className="text-2xl text-gold" />
              ))}
              <FaStarHalfAlt className="text-2xl text-gold" />
            </div>

            <p className="text-gray-600">
              {t('reviews.basedOn')} <span className="font-semibold text-primary-900">{totalReviews} {t('reviews.reviews')}</span>
            </p>
          </div>
        </div>

        {/* Carrossel de Avaliações */}
        <div className="relative">
          {/* Setas de Navegação - Desktop */}
          {reviews.length > visibleCount && (
            <>
              <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                style={{ color: '#311303' }}
                aria-label="Avaliação anterior"
              >
                <FaChevronLeft className="text-xl" />
              </button>

              <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                style={{ color: '#311303' }}
                aria-label="Próxima avaliação"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </>
          )}

          {/* Grid de Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Header do Review */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ background: 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)' }}
                  >
                    {review.avatar}
                  </div>

                  {/* Nome e Data */}
                  <div className="flex-grow">
                    <h3 className="font-semibold text-primary-900 text-lg">{review.author}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>

                  {/* Rating - Apenas 5 estrelas */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className="text-gold text-sm" />
                    ))}
                  </div>
                </div>

                {/* Texto da Avaliação */}
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{review.text}"
                </p>

                {/* Badge Google */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaGoogle style={{ color: '#4285F4' }} />
                  <span>{t('reviews.postedOn')}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de Posição - Mobile */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(reviews.length / visibleCount) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleCount)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleCount) === index
                    ? 'w-8 bg-gold'
                    : 'bg-gray-300'
                }`}
                aria-label={`Ir para grupo ${index + 1}`}
              />
            ))}
          </div>

          {/* Setas Mobile */}
          {reviews.length > visibleCount && (
            <div className="flex md:hidden justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                style={{ color: '#311303' }}
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                style={{ color: '#311303' }}
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>

        {/* CTA - Ver Mais Avaliações */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {t('reviews.experienceCTA')}
          </p>
          <a
            href="https://www.google.com/search?q=mali+spa+joão+pessoa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
            style={{
              background: 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)',
              color: '#1a0a01',
              boxShadow: '0 4px 12px rgba(201, 160, 80, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #D4B46A 0%, #E5C77B 100%)'
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(201, 160, 80, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 160, 80, 0.3)'
            }}
          >
            <FaGoogle className="text-xl" />
            <span>{t('reviews.viewAll')}</span>
          </a>
        </div>
      </Container>

      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "Mali Spa",
            "image": "https://malispa.com.br/logo-mali-spa.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Almirante Tamandaré, 229",
              "addressLocality": "João Pessoa",
              "addressRegion": "PB",
              "postalCode": "58039-010",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -7.0647,
              "longitude": -34.8386
            },
            "url": "https://malispa.com.br",
            "telephone": "+5583996619603",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": averageRating,
              "bestRating": "5",
              "ratingCount": totalReviews
            },
            "review": reviews.map(review => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": review.author
              },
              "datePublished": review.date,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": "5"
              },
              "reviewBody": review.text
            }))
          })
        }}
      />
    </section>
  )
}
