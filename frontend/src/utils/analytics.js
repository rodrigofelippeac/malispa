/**
 * Analytics Helper - Google Analytics 4 Event Tracking
 * Centraliza todos os eventos de conversão e interação
 */

/**
 * Track quando usuário clica em botão de agendamento
 */
export const trackBookingStart = (serviceName) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'booking_start', {
      event_category: 'Engagement',
      event_label: serviceName,
      value: 1,
    })
  }
}

/**
 * Track quando usuário envia agendamento pelo modal
 */
export const trackBookingSubmit = (serviceName, date, time) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'booking_submit', {
      event_category: 'Conversion',
      event_label: serviceName,
      booking_date: date,
      booking_time: time,
      value: 10, // Maior peso para conversão
    })
  }
}

/**
 * Track clique direto no WhatsApp
 */
export const trackWhatsAppClick = (source, serviceName = '') => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Contact',
      event_label: serviceName || source,
      source: source, // 'card', 'modal', 'floating_button', etc
      value: 5,
    })
  }
}

/**
 * Track quando abre modal de detalhes do serviço
 */
export const trackServiceView = (serviceName) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'view_item', {
      event_category: 'Engagement',
      event_label: serviceName,
      content_type: 'service',
    })
  }
}

/**
 * Track scroll para seções importantes
 */
export const trackSectionView = (sectionName) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'scroll_section', {
      event_category: 'Engagement',
      event_label: sectionName,
    })
  }
}

/**
 * Track interação com Instagram
 */
export const trackSocialClick = (platform) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'social_click', {
      event_category: 'Social',
      event_label: platform,
    })
  }
}

/**
 * Track mudança de idioma
 */
export const trackLanguageChange = (language) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'language_change', {
      event_category: 'Settings',
      event_label: language,
    })
  }
}
