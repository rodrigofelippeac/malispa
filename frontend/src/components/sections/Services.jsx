import { useTranslation } from 'react-i18next'
import Container from '../common/Container'
import Card from '../common/Card'
import Button from '../common/Button'
import { daySpas, experiences, formatPrice } from '../../constants/services'
import { FaWhatsapp, FaClock, FaUsers } from 'react-icons/fa'
import { getWhatsAppLink } from '../../constants'

/**
 * Services - Seção de experiências/serviços
 * Mostra os 7 serviços do Mali Spa
 */
export default function Services() {
  const { t } = useTranslation()

  // Combinar todos os serviços destacados
  const featuredServices = [...daySpas.filter(s => s.featured), ...experiences.filter(s => s.featured)]

  const getServiceWhatsAppMessage = (serviceName) => {
    return `Olá! Gostaria de agendar o serviço ${serviceName}.`
  }

  return (
    <section id="servicos" className="py-8 md:py-10 bg-gradient-to-b from-white via-beige-light to-beige">
      <Container>
        {/* Cabeçalho */}
        <div className="text-center mb-8 md:mb-10 space-y-3">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            {t('nav.services')}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brown-dark">
            {t('services.title')}
          </h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Grid de Serviços - 6 serviços em destaque (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredServices.map((service) => (
            <Card
              key={service.id}
              variant="default"
              className="overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-gray-100 flex flex-col"
            >
              {/* Imagem */}
              <div className="relative h-56 md:h-48 bg-gradient-to-br from-secondary-100 via-secondary-light to-white overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Badge de Categoria */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {service.category === 'day-spa' ? 'Day Spa' : 'Experience'}
                  </span>
                </div>
              </div>

              {/* Conteúdo com flex para alinhar botão no final */}
              <div className="p-6 flex flex-col h-full">
                {/* Conteúdo superior que cresce */}
                <div className="space-y-3 flex-grow">
                  {/* Título */}
                  <h3 className="text-xl font-heading font-bold text-brown-dark group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>

                  {/* Slogan (se houver) */}
                  {service.slogan && (
                    <p className="text-sm italic text-gold-dark font-medium">
                      {service.slogan}
                    </p>
                  )}

                  {/* Duração */}
                  <div className="flex items-center gap-2 text-brown">
                    <FaClock className="text-gold" />
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Preços e CTA sempre alinhados no final */}
                <div className="space-y-3 mt-4">
                  {/* Preços */}
                  {service.price && (
                    <div className="flex items-center gap-4 bg-beige-light p-3 rounded-lg">
                      <div>
                        <div className="text-xs text-brown-light font-medium">Individual</div>
                        <span className="text-xl font-bold text-brown-dark">
                          {formatPrice(service.price.individual)}
                        </span>
                      </div>
                      {service.price.couple && (
                        <>
                          <div className="h-8 w-px bg-gold"></div>
                          <div>
                            <div className="text-xs text-brown-light font-medium flex items-center gap-1">
                              <FaUsers className="text-xs" /> Casal
                            </div>
                            <span className="text-xl font-bold text-brown-dark">
                              {formatPrice(service.price.couple)}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* CTA */}
                  <Button
                    href={getWhatsAppLink(getServiceWhatsAppMessage(service.name))}
                    size="md"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>Agendar Agora</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
