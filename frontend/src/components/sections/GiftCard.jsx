import { useTranslation } from 'react-i18next'
import Container from '../common/Container'
import Button from '../common/Button'
import { FaGift, FaHeart, FaSpa, FaCheckCircle } from 'react-icons/fa'
import { getWhatsAppLink } from '../../constants'

/**
 * GiftCard - Seção de Gift Cards e Presentes
 * Layout especial para promover gift cards do Mali Spa
 */
export default function GiftCard() {
  const { t } = useTranslation()

  const giftOptions = [
    {
      id: 'gift-card-digital',
      icon: FaGift,
      name: t('giftCard.options.digital.name'),
      description: t('giftCard.options.digital.description'),
    },
    {
      id: 'giftbox',
      icon: FaSpa,
      name: t('giftCard.options.giftbox.name'),
      description: t('giftCard.options.giftbox.description'),
    },
    {
      id: 'flowers',
      icon: FaHeart,
      name: t('giftCard.options.flowers.name'),
      description: t('giftCard.options.flowers.description'),
    },
  ]

  const getGiftCardWhatsAppMessage = () => {
    return 'Olá! Gostaria de presentear alguém especial com um Gift Card do Mali Spa. Poderia me dar mais informações?'
  }

  return (
    <section id="presentes" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-secondary-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FaGift className="text-4xl md:text-5xl text-gold" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900">
              {t('giftCard.title')}
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-3">
            {t('giftCard.subtitle')}
          </p>
        </div>

        {/* Layout Principal: Imagem + Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-center">
          {/* Imagem do Gift Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-dark opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/gift-card-spa.jpg?v=2"
                alt="Gift Card Mali Spa"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay com badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-gold to-gold-dark text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <FaGift className="text-lg" />
                  {t('giftCard.badge')}
                </span>
              </div>
            </div>
          </div>

          {/* Conteúdo: Opções de Presente */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              {t('giftCard.optionsTitle')}
            </h3>

            {/* Lista de opções */}
            <div className="space-y-4">
              {giftOptions.map((option) => {
                const IconComponent = option.icon
                return (
                  <div
                    key={option.id}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-primary-900 text-lg mb-1">
                        {option.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {option.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <FaCheckCircle className="text-gold text-xl" />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Frase inspiradora */}
            <div className="mt-8 p-6 bg-gradient-to-br from-secondary-50 to-white rounded-xl border-l-4 border-gold">
              <p className="text-primary-900 text-lg md:text-xl font-medium italic text-center">
                "{t('giftCard.quote')}"
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Button
                href={getWhatsAppLink(getGiftCardWhatsAppMessage())}
                size="lg"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg shadow-lg hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)',
                  color: '#1a0a01',
                }}
              >
                <FaGift className="text-2xl" />
                <span>{t('giftCard.cta')}</span>
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                {t('giftCard.ctaSubtext')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
