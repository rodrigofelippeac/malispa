import { useTranslation } from 'react-i18next'
import Container from '../common/Container'
import { FaHandsHelping, FaSpa, FaUserMd, FaHome } from 'react-icons/fa'

/**
 * About - Seção sobre o Mali Spa
 * Filosofia e diferenciais
 */
export default function About() {
  const { t } = useTranslation()

  // Dados dos diferenciais com ícones
  const differentials = [
    {
      icon: FaHandsHelping,
      titleKey: 'about.differentials.listening.title',
      descKey: 'about.differentials.listening.description'
    },
    {
      icon: FaSpa,
      titleKey: 'about.differentials.techniques.title',
      descKey: 'about.differentials.techniques.description'
    },
    {
      icon: FaUserMd,
      titleKey: 'about.differentials.personalized.title',
      descKey: 'about.differentials.personalized.description'
    },
    {
      icon: FaHome,
      titleKey: 'about.differentials.environment.title',
      descKey: 'about.differentials.environment.description'
    },
  ]

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

        {/* Layout Principal - Novo formato */}
        <div className="space-y-8">
          {/* Duas imagens lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Imagem 1 - Filtro quente aplicado */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <img
                src="/ambiente-spa-cliente.jpg"
                alt="Cliente relaxando no ambiente acolhedor do Mali Spa"
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(0.15) saturate(1.1) brightness(1.05)' }}
                loading="lazy"
              />
              {/* Overlay decorativo */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown-dark/80 to-transparent p-4">
                <p className="text-white font-heading text-sm italic">
                  "Um refúgio de paz e bem-estar"
                </p>
              </div>
            </div>

            {/* Imagem 2 - Filtro quente aplicado */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <img
                src="/ambiente-spa.jpg"
                alt="Ambiente do Mali Spa"
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(0.15) saturate(1.1) brightness(1.05)' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Texto descritivo */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="space-y-3 text-gray-700 leading-relaxed">
              {t('about.description').split('\n\n').map((paragraph, index) => (
                <p key={index} className={index === 0 ? 'text-base font-semibold text-brown-dark' : 'text-sm'}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Diferenciais - 4 cards orgânicos e leves */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border border-gold/20">
                  <div className="flex flex-col items-center text-center gap-4">
                    {/* Ícone dourado sem fundo */}
                    <div className="flex-shrink-0">
                      <IconComponent className="text-gold text-5xl" style={{ filter: 'drop-shadow(0 2px 4px rgba(201, 160, 80, 0.3))' }} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-brown-dark mb-2 text-base">
                        {t(item.titleKey)}
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        {t(item.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
