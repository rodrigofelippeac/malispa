import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppLinkWithDefaultMessage } from '../../constants'

/**
 * WhatsAppButton - Botão flutuante do WhatsApp
 * Fica fixo no canto inferior direito
 */
export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLinkWithDefaultMessage()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25d366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 ease-in-out group animate-pulse hover:animate-none"
      aria-label="Fale conosco pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco
      </span>

      {/* Ping animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-75 animate-ping"></span>
    </a>
  )
}
