import { useTranslation } from 'react-i18next'
import Container from '../common/Container'
import { contact } from '../../constants'
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

/**
 * Contact - Seção de contato redesenhada
 * Layout moderno e harmonioso com o restante do site
 */
export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contato" className="py-8 md:py-10 bg-gradient-to-b from-beige via-white to-beige-light">
      <Container>
        {/* Cabeçalho */}
        <div className="text-center mb-8 md:mb-10 space-y-3">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            {t('nav.contact')}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brown-dark">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Layout em duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Coluna Esquerda - Informações de Contato */}
          <div className="space-y-6">
            {/* Card Principal de Contato */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-brown-dark mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                Entre em Contato
              </h3>

              <div className="space-y-4">
                {/* WhatsApp - Destaque */}
                <a
                  href={`https://wa.me/${contact.phone.raw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">WhatsApp</p>
                    <p className="text-lg font-bold text-gray-900">{contact.phone.display}</p>
                    <p className="text-xs text-green-700 font-medium">Clique para agendar</p>
                  </div>
                </a>

                {/* Outros Contatos */}
                <div className="grid grid-cols-1 gap-3">
                  {/* Telefone */}
                  <a
                    href={`tel:${contact.phone.raw}`}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-beige transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all flex-shrink-0">
                      <FaPhone className="text-brown-dark group-hover:text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Telefone</p>
                      <p className="text-sm font-bold text-brown-dark">{contact.phone.display}</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${contact.email.address}`}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-beige transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all flex-shrink-0">
                      <FaEnvelope className="text-brown-dark group-hover:text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Email</p>
                      <p className="text-sm font-bold text-brown-dark break-all">{contact.email.display}</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href={contact.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-beige transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 group-hover:scale-110 transition-all flex-shrink-0">
                      <FaInstagram className="text-brown-dark group-hover:text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Instagram</p>
                      <p className="text-sm font-bold text-brown-dark">{contact.social.instagram.handle}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Horário de Atendimento */}
            <div className="bg-gradient-to-br from-beige-light to-beige rounded-2xl shadow-2xl p-8">
              <h3 className="text-xl font-heading font-bold text-brown-dark mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brown to-brown-dark flex items-center justify-center">
                  <FaClock className="text-white text-lg" />
                </div>
                {t('contact.hours.title')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-brown/10">
                  <span className="text-brown font-medium">{contact.hours.weekdays.days}</span>
                  <span className="text-brown-dark font-bold">
                    {contact.hours.weekdays.open} - {contact.hours.weekdays.close}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-brown font-medium">{contact.hours.sunday.days}</span>
                  <span className="text-brown-dark font-bold">
                    {contact.hours.sunday.open} - {contact.hours.sunday.close}
                  </span>
                </div>
                <div className="mt-4 p-4 bg-white/60 rounded-lg border-l-4 border-brown">
                  <p className="text-sm text-brown-dark font-medium">
                    💡 {contact.hours.note}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Localização */}
          <div className="space-y-6">
            {/* Card de Localização */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-brown-dark mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                {t('contact.location.title')}
              </h3>

              {/* Endereço */}
              <div className="mb-6 p-4 bg-beige-light rounded-lg border-l-4 border-brown">
                <p className="text-brown-dark font-medium leading-relaxed">
                  {contact.location.fullAddress}
                </p>
                <p className="text-sm text-brown mt-2">
                  📍 {contact.location.neighborhood}, {contact.location.city} - {contact.location.state}
                </p>
              </div>

              {/* Mapa do Google */}
              <div className="flex-1 space-y-4">
                <div className="aspect-video bg-beige-light rounded-xl overflow-hidden shadow-lg">
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

                {/* Botão Google Maps */}
                <a
                  href={contact.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold rounded-xl transition-all duration-300 bg-gradient-to-r from-brown-dark to-brown hover:from-brown hover:to-brown-light text-white shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <FaMapMarkerAlt className="text-xl group-hover:scale-110 transition-transform" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final - Agende sua visita */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-beige to-beige-light rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brown-dark mb-4">
              Pronto para cuidar de você?
            </h3>
            <p className="text-brown mb-6 max-w-2xl mx-auto">
              Entre em contato pelo WhatsApp e agende seu momento de relaxamento e bem-estar.
            </p>
            <a
              href={`https://wa.me/${contact.phone.raw}?text=${encodeURIComponent('Olá! Gostaria de agendar um horário no Mali Spa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-lg hover:shadow-2xl hover:scale-105 group"
            >
              <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
