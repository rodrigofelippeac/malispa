import { useTranslation } from 'react-i18next'
import Container from '../common/Container'

/**
 * About - Seção sobre o Mali Spa
 * Filosofia e diferenciais
 */
export default function About() {
  const { t } = useTranslation()

  return (
    <section id="sobre" className="py-8 md:py-10 bg-gradient-to-br from-beige-light via-white to-beige">
      <Container>
        {/* Cabeçalho compacto */}
        <div className="text-center mb-6 md:mb-8">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            {t('about.title')}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown-dark mt-2">
            {t('about.subtitle')}
          </h2>
        </div>

        {/* Layout Principal - Imagem + Texto + Diferenciais integrados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Coluna Esquerda - Imagem */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl sticky top-8">
              <img
                src="/ambiente-spa-cliente.jpg"
                alt="Cliente relaxando no ambiente acolhedor do Mali Spa"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay decorativo */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown-dark/80 to-transparent p-6">
                <p className="text-white font-heading text-lg italic">
                  "Um refúgio de paz e bem-estar"
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Texto + Diferenciais */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Descrição */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-3 text-gray-700 leading-relaxed">
                {t('about.description').split('\n\n').map((paragraph, index) => (
                  <p key={index} className={index === 0 ? 'text-base font-semibold text-brown-dark' : 'text-sm'}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Diferenciais - Grid 2x2 compacto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-beige-light to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-200 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brown-dark mb-1 text-base">
                      {t('about.differentials.listening.title')}
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {t('about.differentials.listening.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-beige-light to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-200 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brown-dark mb-1 text-base">
                      {t('about.differentials.techniques.title')}
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {t('about.differentials.techniques.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-beige-light to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-200 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brown-dark mb-1 text-base">
                      {t('about.differentials.personalized.title')}
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {t('about.differentials.personalized.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-beige-light to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-200 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brown-dark mb-1 text-base">
                      {t('about.differentials.environment.title')}
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {t('about.differentials.environment.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
