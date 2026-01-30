// Informações de contato do Mali Spa

export const contact = {
  business: {
    name: 'Mali Spa',
    slogan: 'Nossa missão é cuidar de você!',
    tagline: 'Um convite ao cuidado',
    description: 'O Mali Spa é um refúgio de bem-estar na nossa linda João Pessoa. Um espaço para promover equilíbrio entre corpo e mente, onde cada detalhe foi pensado para proporcionar harmonia, saúde, relaxamento e vitalidade.',
    closingMessage: 'Queremos te proporcionar momentos de relaxamento e bem-estar. Caso precise de ajuda para escolher a terapia ideal, estamos sempre à disposição.',
    website: 'https://malispa.com.br',
    domain: 'malispa.com.br',
  },

  location: {
    street: 'Rua Nossa Senhora dos Navegantes, 431',
    neighborhood: 'Tambaú',
    city: 'João Pessoa',
    state: 'PB',
    fullAddress: 'Rua Nossa Senhora dos Navegantes, 431 - Tambaú, João Pessoa - PB',
    mapsUrl: 'https://g.co/kgs/8ZwmVTu',
  },

  phone: {
    display: '(83) 99661-9603',
    raw: '5583996619603',
    whatsapp: true,
  },

  email: {
    address: 'malispabr@gmail.com',
    display: 'malispabr@gmail.com',
  },

  social: {
    instagram: {
      handle: '@malispa_br',
      handleDisplay: '@MALISPA_BR',
      url: 'https://instagram.com/malispa_br',
    },
    facebook: null,
  },

  hours: {
    weekdays: {
      days: 'Segunda a Sábado',
      open: '09:00',
      close: '20:00',
    },
    sunday: {
      days: 'Domingo',
      open: '10:00',
      close: '18:00',
    },
    note: 'Todos os atendimentos são por agendamento prévio',
  },
}

// Helper functions
export const getWhatsAppLink = (message = '') => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${contact.phone.raw}${message ? `?text=${encodedMessage}` : ''}`
}

export const getDefaultWhatsAppMessage = () => {
  return 'Olá! Gostaria de agendar um horário no Mali Spa.'
}

export const getWhatsAppLinkWithDefaultMessage = () => {
  return getWhatsAppLink(getDefaultWhatsAppMessage())
}
