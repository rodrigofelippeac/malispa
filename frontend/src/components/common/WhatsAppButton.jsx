import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppLinkWithDefaultMessage } from '../../constants'

/**
 * WhatsAppButton - Botão flutuante do WhatsApp
 * Fica fixo no canto inferior direito
 * Estilo premium com gradiente dourado alinhado à identidade Mali Spa
 */
export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLinkWithDefaultMessage()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out group"
      style={{
        background: 'linear-gradient(135deg, #C9A050 0%, #D4B46A 50%, #E5C77B 100%)',
        boxShadow: '0 8px 24px rgba(201, 160, 80, 0.4), 0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
      aria-label="Fale conosco pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #D4B46A 0%, #E5C77B 50%, #F0D18C 100%)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(201, 160, 80, 0.5), 0 6px 12px rgba(0, 0, 0, 0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #C9A050 0%, #D4B46A 50%, #E5C77B 100%)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(201, 160, 80, 0.4), 0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
    >
      <FaWhatsapp className="text-3xl drop-shadow-lg" />

      {/* Tooltip com cores da marca */}
      <span className="absolute right-full mr-3 bg-brown-dark text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        Fale conosco
      </span>

      {/* Pulse animation sutil com cor dourada */}
      <span
        className="absolute inline-flex h-full w-full rounded-full opacity-40 animate-ping"
        style={{ background: 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)' }}
      ></span>
    </a>
  )
}
