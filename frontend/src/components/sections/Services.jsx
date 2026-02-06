import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../common/Container'
import Card from '../common/Card'
import Button from '../common/Button'
import Modal from '../common/Modal'
import BookingModal from '../common/BookingModal'
import { daySpas, experiences } from '../../constants/services'
import { FaWhatsapp, FaClock, FaCheckCircle, FaCalendarCheck } from 'react-icons/fa'
import { getWhatsAppLink } from '../../constants'

/**
 * Services - Seção de experiências/serviços
 * Mostra os 7 serviços do Mali Spa com modal de detalhes
 */
export default function Services() {
  const { t } = useTranslation()
  const [selectedService, setSelectedService] = useState(null)
  const [bookingService, setBookingService] = useState(null)

  // Combinar todos os serviços destacados
  const featuredServices = [...daySpas.filter(s => s.featured), ...experiences.filter(s => s.featured)]

  // Helper para pegar tradução do serviço
  const getServiceTranslation = (serviceId, field) => {
    return t(`services.data.${serviceId}.${field}`)
  }

  const getServiceWhatsAppMessage = (serviceId) => {
    const serviceName = getServiceTranslation(serviceId, 'name')
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
              {/* Imagem - Clicável para abrir modal */}
              <div
                className="relative h-56 md:h-48 bg-gradient-to-br from-secondary-100 via-secondary-light to-white overflow-hidden cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <img
                  src={service.image}
                  alt={getServiceTranslation(service.id, 'name')}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Overlay de hover com texto "Ver detalhes" */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{t('services.viewDetails')}</span>
                </div>

                {/* Badge de Categoria */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {service.category === 'day-spa' ? 'Day Spa' : 'Experience'}
                  </span>
                </div>
              </div>

              {/* Conteúdo com flex para alinhar botão no final */}
              <div className="p-5 flex flex-col h-full">
                {/* Conteúdo superior que cresce */}
                <div className="space-y-2 flex-grow">
                  {/* Título */}
                  <h3 className="text-xl font-heading font-bold text-brown-dark group-hover:text-gold transition-colors">
                    {getServiceTranslation(service.id, 'name')}
                  </h3>

                  {/* Slogan (se houver) */}
                  {service.slogan && (
                    <p className="text-sm italic text-gold-dark font-medium">
                      {getServiceTranslation(service.id, 'slogan')}
                    </p>
                  )}

                  {/* Duração */}
                  <div className="flex items-center gap-2 text-brown">
                    <FaClock className="text-gold" />
                    <span className="text-sm font-medium">{getServiceTranslation(service.id, 'duration')}</span>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 pt-1">
                    {getServiceTranslation(service.id, 'description')}
                  </p>
                </div>

                {/* CTA sempre alinhado no final */}
                <div className="mt-3 space-y-2">
                  {/* Badge Exclusivo para Banho Hammam */}
                  {service.isExclusive && (
                    <div className="mb-3 text-center">
                      <span className="inline-block bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                        ✨ {t('services.exclusiveBadge')}
                      </span>
                    </div>
                  )}

                  {/* Novo botão de pré-agendamento */}
                  <Button
                    onClick={() => setBookingService({ id: service.id, name: getServiceTranslation(service.id, 'name') })}
                    variant="primary"
                    size="md"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <FaCalendarCheck className="text-base" />
                    <span>Agendar Agora</span>
                  </Button>

                  {/* Botão WhatsApp direto (secundário) */}
                  <Button
                    href={getWhatsAppLink(getServiceWhatsAppMessage(service.id))}
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>Ou chamar no WhatsApp</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      {/* Modal de Detalhes do Serviço */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        maxWidth="max-w-5xl"
      >
        {selectedService && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Imagem Grande */}
            <div className="relative h-64 md:h-full min-h-[400px]">
              <img
                src={selectedService.image}
                alt={getServiceTranslation(selectedService.id, 'name')}
                className="w-full h-full object-cover"
              />
              {/* Badge no modal */}
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-gold to-gold-dark text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                  {selectedService.category === 'day-spa' ? 'Day Spa' : 'Experience'}
                </span>
              </div>
            </div>

            {/* Conteúdo Detalhado */}
            <div className="p-8 md:p-10">
              {/* Título */}
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-3">
                {getServiceTranslation(selectedService.id, 'name')}
              </h2>

              {/* Slogan */}
              {selectedService.slogan && (
                <p className="text-lg italic text-gold-dark font-medium mb-4">
                  {getServiceTranslation(selectedService.id, 'slogan')}
                </p>
              )}

              {/* Duração */}
              <div className="flex items-center gap-2 text-brown mb-6">
                <FaClock className="text-gold text-xl" />
                <span className="text-base font-semibold">{getServiceTranslation(selectedService.id, 'duration')}</span>
              </div>

              {/* Descrição Completa */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {getServiceTranslation(selectedService.id, 'description')}
              </p>

              {/* Inclui (se houver) */}
              {(() => {
                const translatedIncludes = t(`services.data.${selectedService.id}.includes`, { returnObjects: true, defaultValue: [] })
                return translatedIncludes && translatedIncludes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-heading text-xl font-bold text-primary-900 mb-4">
                      {t('services.whatIncludes')}
                    </h3>
                    <ul className="space-y-3">
                      {translatedIncludes.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-gold text-lg mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-primary-900">{item.name}</p>
                            {item.description && (
                              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })()}

              {/* Badge Exclusivo */}
              {selectedService.isExclusive && (
                <div className="mb-6 p-4 bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-lg border-l-4 border-gold">
                  <p className="text-primary-900 font-medium">
                    ✨ {t('services.exclusiveRarity')}
                  </p>
                </div>
              )}

              {/* CTA - Duplo */}
              <div className="space-y-3">
                <Button
                  onClick={() => {
                    setSelectedService(null)
                    setBookingService({ id: selectedService.id, name: getServiceTranslation(selectedService.id, 'name') })
                  }}
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <FaCalendarCheck className="text-xl" />
                  <span>Agendar com Data/Hora</span>
                </Button>

                <Button
                  href={getWhatsAppLink(getServiceWhatsAppMessage(selectedService.id))}
                  variant="whatsapp"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Ou chamar no WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal de Pré-Agendamento */}
      <BookingModal
        isOpen={!!bookingService}
        onClose={() => setBookingService(null)}
        service={bookingService}
      />
    </section>
  )
}
