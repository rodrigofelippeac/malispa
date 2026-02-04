// Serviços do Mali Spa - Dados atualizados

// ========== DAY SPA ==========
export const daySpas = [
  {
    id: 'day-spa-mali',
    name: 'Day Spa Mali',
    category: 'day-spa',
    description: 'Uma jornada completa de relaxamento e renovação.',
    slogan: 'Experiência completa de bem-estar.',
    duration: '2h 30min',
    includes: [
      {
        name: 'Ritual de Boas Vindas',
        description: 'Escalda-pés seguido de esfoliação e reflexologia podal',
      },
      {
        name: 'Aromaterapia',
        description: null,
      },
      {
        name: 'Massagem Sinergia Mali Spa',
        description: 'Combinação exclusiva de manobras firmes e precisas para aliviar tensões profundas relaxantes, que integram com o calor das pedras quentes, a suavidade dos óleos vegetais, o aroma envolvente das velas e o toque terapêutico dos óleos essenciais.',
      },
      {
        name: 'Esfoliação Costas',
        description: 'Com cristais e óleos vegetais',
      },
      {
        name: 'Massagem craniofacial',
        description: null,
      },
      {
        name: 'Degustação sensorial',
        description: 'Opção de vinho ou drink especial, frutas, nuts e chocolates.',
      },
    ],
    image: '/day-spa-drinks.jpg',
    featured: true,
  },
  {
    id: 'day-spa-sentir',
    name: 'Day Spa Sentir',
    category: 'day-spa',
    description: 'Uma combinação relaxamento profundo, conexão e prazer sensorial.',
    slogan: 'Conexão e prazer sensorial.',
    duration: '2h 30min',
    includes: [
      {
        name: 'Ritual de Boas Vindas',
        description: 'Escalda-pés com rosas seguido de esfoliação e reflexologia podal',
      },
      {
        name: 'Massagem Sinergia Mali Spa',
        description: 'Combinação exclusiva de manobras firmes e precisas para aliviar tensões profundas relaxantes, que integram com o calor das pedras quentes, a suavidade dos óleos vegetais, o aroma envolvente das velas e o toque terapêutico dos óleos essenciais.',
      },
      {
        name: 'Esfoliação corporal',
        description: 'Com rosas, cristais e óleos vegetais',
      },
      {
        name: 'Massagem craniofacial',
        description: null,
      },
      {
        name: 'Revitalização facial',
        description: null,
      },
      {
        name: 'Degustação sensorial e ambientação',
        description: 'Rosas vermelhas ou flores campestres. Opção de vinho ou drink especial, frutas, nuts e chocolates.',
      },
    ],
    image: '/day-spa-sentir-rosas.jpg',
    featured: true,
  },
  {
    id: 'day-spa-aconchego',
    name: 'Day Spa Aconchego',
    category: 'day-spa',
    description: 'Um ritual restaurador que une o poder reconfortante do calor, a sutileza do toque e os benefícios dos aromas naturais.',
    slogan: 'Aconchego em forma de cuidado.',
    duration: '1h 30min',
    includes: [
      {
        name: 'Escalda-pés de boas vindas',
        description: null,
      },
      {
        name: 'Ritual de Aromaterapia',
        description: null,
      },
      {
        name: 'Massagem Terapêutica Relaxante combinada com Pedras quentes',
        description: null,
      },
      {
        name: 'Degustação',
        description: 'Chás Gourmet, Chocolate quente ou cappuccino e biscoitos finos',
      },
    ],
    image: '/day-spa-aconchego.jpg',
    featured: true,
  },
  {
    id: 'day-spa-revitalizar',
    name: 'Day Spa Revitalizar',
    category: 'day-spa',
    description: 'Um ritual para renovar o corpo, despertar os sentidos e deixar a pele luminosa.',
    slogan: 'Leveza que se sente na pele. Cuidado que se prolonga no tempo.',
    duration: '1h 30min',
    includes: [
      {
        name: 'Escalda-pés de boas vindas',
        description: null,
      },
      {
        name: 'Ritual de Aromaterapia',
        description: null,
      },
      {
        name: 'Drenagem Linfática',
        description: null,
      },
      {
        name: 'Massagem relaxante Costas',
        description: null,
      },
      {
        name: 'Degustação',
        description: 'Drink funcional Gelado e nuts',
      },
    ],
    image: '/day-spa-revitalizar.jpg',
    featured: true,
  },
]

// ========== EXPERIENCES ==========
export const experiences = [
  {
    id: 'banho-hammam',
    name: 'Banho Hammam',
    category: 'experiences',
    description: 'Inspirado nos rituais tradicionais de purificação, o Banho Hammam do Mali Spa é uma experiência de limpeza, relaxamento e renovação energética, conduzida com vapor, água e toque consciente.',
    slogan: 'Uma experiência rara em João Pessoa.',
    duration: 'Consulte',
    isExclusive: true,
    image: '/banho-hammam.jpg',
    featured: true,
  },
  {
    id: 'experience-relax',
    name: 'Experience Relax',
    category: 'experiences',
    description: 'Uma pausa suave para acalmar corpo e mente, com toques que despertam leveza e bem-estar.',
    slogan: 'Cuidar-se é um gesto de reconexão.',
    duration: '1h 30min',
    includes: [
      {
        name: 'Escalda-pés',
        description: 'Com ervas, sais e óleos essenciais',
      },
      {
        name: 'Aromaterapia personalizada',
        description: null,
      },
      {
        name: 'Esfoliação e hidratação dos pés',
        description: null,
      },
      {
        name: 'Massagem Podal',
        description: null,
      },
      {
        name: 'Massagem relaxante',
        description: 'Com manobras suaves e contínuas para reduzir estresse, aliviar tensões musculares e proporcionar bem-estar geral.',
      },
      {
        name: 'Degustação',
        description: 'Chás e biscoitos finos',
      },
    ],
    image: '/servico-02.jpg',
    featured: true,
  },
  {
    id: 'experience-therapy',
    name: 'Experience Therapy',
    category: 'experiences',
    description: 'Cuidado profundo e intencional para quem busca aliviar dores, tensões e reconectar-se com o próprio corpo.',
    slogan: 'O toque como gesto de cuidado.',
    duration: '1h 30min',
    includes: [
      {
        name: 'Escalda-pés de boas vindas',
        description: null,
      },
      {
        name: 'Aromaterapia',
        description: null,
      },
      {
        name: 'Massagem terapêutica',
        description: 'Com pressão mais firme na fáscia muscular, seguida de manobras relaxantes, para tratar dores e tensões musculares.',
      },
      {
        name: 'Degustação',
        description: 'Chás e biscoitos finos',
      },
    ],
    image: '/servico-01.jpg',
    featured: true,
  },
]

// ========== MASSAGENS TERAPÊUTICAS ==========
export const massagens = [
  {
    id: 'escalda-pes',
    name: 'Escalda-pés',
    nameEn: 'Foot Reflexology',
    category: 'massagens',
    duration: '30min',
    price: 100.00,
  },
  {
    id: 'craniofacial',
    name: 'Craniofacial',
    nameEn: 'Craniofacial Massage',
    category: 'massagens',
    duration: '30min',
    price: 100.00,
  },
  {
    id: 'massagem-express',
    name: 'Massagem Express',
    nameEn: 'Massage Express',
    category: 'massagens',
    duration: '30min',
    price: 100.00,
  },
  {
    id: 'terapeutica-relaxante',
    name: 'Terapêutica Relaxante',
    nameEn: 'Therapeutic Relaxing',
    category: 'massagens',
    options: [
      { duration: '50min', price: 180.00 },
      { duration: '80min', price: 200.00 },
    ],
  },
  {
    id: 'pedras-quentes',
    name: 'Pedras Quentes',
    nameEn: 'Hot Stone',
    category: 'massagens',
    options: [
      { duration: '50min', price: 180.00 },
      { duration: '80min', price: 200.00 },
    ],
  },
  {
    id: 'candle-massage',
    name: 'Candle Massage',
    nameEn: 'Candle Massage',
    category: 'massagens',
    options: [
      { duration: '50min', price: 180.00 },
      { duration: '80min', price: 200.00 },
    ],
  },
  {
    id: 'shiatsu',
    name: 'Shiatsu',
    nameEn: 'Shiatsu',
    category: 'massagens',
    options: [
      { duration: '50min', price: 200.00 },
      { duration: '80min', price: 250.00 },
    ],
  },
  {
    id: 'thai-massage',
    name: 'Thai Massage',
    nameEn: 'Thai Massage',
    category: 'massagens',
    options: [
      { duration: '50min', price: 200.00 },
      { duration: '80min', price: 250.00 },
    ],
  },
  {
    id: 'ayurvedica',
    name: 'Ayurvédica',
    nameEn: 'Ayurvedic Massage',
    category: 'massagens',
    options: [
      { duration: '50min', price: 200.00 },
      { duration: '80min', price: 250.00 },
    ],
  },
]

// ========== TRATAMENTOS ==========
export const tratamentos = [
  {
    id: 'esfoliacao-corporal',
    name: 'Esfoliação Corporal Revitalizante',
    category: 'tratamentos',
    duration: '30min',
    price: 180.00,
  },
  {
    id: 'terapia-capilar',
    name: 'Terapia Capilar',
    category: 'tratamentos',
    duration: '30min',
    price: 100.00,
  },
  {
    id: 'drenagem-linfatica',
    name: 'Drenagem Linfática',
    category: 'tratamentos',
    duration: '50min',
    price: 180.00,
  },
  {
    id: 'dreno-sculpt',
    name: 'Dreno Sculpt',
    category: 'tratamentos',
    duration: '80min',
    price: 250.00,
  },
  {
    id: 'liberacao-miofacial-manual',
    name: 'Liberação Miofacial Manual',
    category: 'tratamentos',
    duration: '50min',
    price: 180.00,
  },
  {
    id: 'liberacao-miofacial-ventosas',
    name: 'Liberação Miofacial com Ventosas',
    category: 'tratamentos',
    duration: '80min',
    price: 200.00,
  },
  {
    id: 'quirosetai',
    name: 'QuiroSetai',
    category: 'tratamentos',
    options: [
      { duration: '50min', price: 200.00 },
      { duration: '80min', price: 250.00 },
    ],
  },
]

// ========== CATEGORIAS ==========
export const serviceCategories = [
  {
    id: 'day-spa',
    name: 'Day Spa',
    description: 'Experiências completas de relaxamento e renovação',
    icon: 'sparkles',
  },
  {
    id: 'experiences',
    name: 'Experiences',
    description: 'Rituais especiais para corpo e mente',
    icon: 'heart',
  },
  {
    id: 'massagens',
    name: 'Massagens Terapêuticas',
    description: 'Tratamentos individuais de massagem',
    icon: 'hands',
  },
  {
    id: 'tratamentos',
    name: 'Tratamentos',
    description: 'Cuidados específicos e especializados',
    icon: 'droplet',
  },
]

// ========== TODOS OS SERVIÇOS (Array unificado) ==========
export const allServices = [
  ...daySpas,
  ...experiences,
  ...massagens,
  ...tratamentos,
]

// ========== SERVIÇOS DESTACADOS ==========
export const featuredServices = allServices.filter(service => service.featured)

// ========== HELPERS ==========
export const getServiceById = (id) => {
  return allServices.find(service => service.id === id)
}

export const getServicesByCategory = (categoryId) => {
  return allServices.filter(service => service.category === categoryId)
}

export const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}
