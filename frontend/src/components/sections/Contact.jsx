import { useTranslation } from 'react-i18next'
import Container from '../common/Container'
import Button from '../common/Button'
import { contact } from '../../constants'
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

/**
 * Contact - Seção de contato otimizada
 * Layout em 3 colunas com design compacto e funcional
 */
export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contato" className="py-8 md:py-10 bg-gradient-to-br from-beige-light via-white to-beige">
      <Container>
        {/* Cabeçalho */}
        <div className="text-center mb-8 space-y-2">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            {t('nav.contact')}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown-dark">
            {t('contact.title')}
          </h2>
        </div>

        {/* Grid 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 - WhatsApp Destaque */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <FaWhatsapp className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-heading font-bold text-brown-dark">WhatsApp</h3>
            </div>
            <p className="text-2xl font-bold text-brown-dark mb-2">{contact.phone.display}</p>
            <p className="text-sm text-brown mb-4">Atendimento rápido e fácil</p>
            <Button
              href={`https://wa.me/${contact.phone.raw}?text=${encodeURIComponent('Olá! Gostaria de agendar um horário no Mali Spa.')}`}
              variant="whatsapp"
              size="md"
              className="w-full flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              <span>Chamar no WhatsApp</span>
            </Button>
          </div>

          {/* Card 2 - Horários */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <FaClock className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-heading font-bold text-brown-dark">Horários</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-700">{contact.hours.weekdays.days}</span>
                <span className="text-sm font-bold text-brown-dark">
                  {contact.hours.weekdays.open} - {contact.hours.weekdays.close}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{contact.hours.sunday.days}</span>
                <span className="text-sm font-bold text-brown-dark">
                  {contact.hours.sunday.open} - {contact.hours.sunday.close}
                </span>
              </div>
              <div className="mt-4 p-3 bg-beige-light rounded-lg">
                <p className="text-xs text-brown-dark font-medium">
                  💡 {contact.hours.note}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Outros Contatos */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-heading font-bold text-brown-dark">Outros Contatos</h3>
            </div>
            <div className="space-y-3">
              {/* Telefone */}
              <a
                href={`tel:${contact.phone.raw}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-beige transition-all group"
              >
                <FaPhone className="text-brown text-lg group-hover:text-gold transition-colors" />
                <div>
                  <p className="text-xs text-gray-500">Telefone</p>
                  <p className="text-sm font-bold text-brown-dark">{contact.phone.display}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contact.email.address}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-beige transition-all group"
              >
                <FaEnvelope className="text-brown text-lg group-hover:text-gold transition-colors" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-bold text-brown-dark break-all">{contact.email.display}</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={contact.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-beige transition-all group"
              >
                <FaInstagram className="text-brown text-lg group-hover:text-pink-500 transition-colors" />
                <div>
                  <p className="text-xs text-gray-500">Instagram</p>
                  <p className="text-sm font-bold text-brown-dark">{contact.social.instagram.handle}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Mapa - Full width abaixo dos cards */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-heading font-bold text-brown-dark">Localização</h3>
              <p className="text-sm text-gray-700">{contact.location.fullAddress}</p>
              <p className="text-xs text-gold-dark font-medium mt-1">
                📍 {contact.location.reference}
              </p>
            </div>
            <Button
              href={contact.location.mapsUrl}
              size="sm"
              className="hidden md:flex items-center gap-2"
            >
              <FaMapMarkerAlt />
              <span>Abrir no Maps</span>
            </Button>
          </div>

          {/* Mapa com cantos arredondados suaves */}
          <div className="aspect-[21/9] bg-beige-light rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7!2d-34.8329!3d-7.1166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839c32e8455%3A0x1e0c7c1c7c1c7c1c!2sRua%20Nossa%20Senhora%20dos%20Navegantes%2C%20431%20-%20Tamba%C3%BA%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Mali Spa"
            ></iframe>
          </div>

          {/* Botão mobile */}
          <div className="md:hidden mt-4">
            <Button
              href={contact.location.mapsUrl}
              size="md"
              className="w-full flex items-center justify-center gap-2"
            >
              <FaMapMarkerAlt />
              <span>Abrir no Google Maps</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
