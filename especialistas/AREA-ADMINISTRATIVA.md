# Área Administrativa - Mali Spa

**Sistema de Gestão Completo**
**Data**: 29 de Janeiro de 2026

---

## Visão Geral

A área administrativa do Mali Spa será um sistema completo para gerenciar:
- ✅ Clientes
- ✅ Terapeutas
- ✅ Serviços (Massagens, Banhos, Tratamentos)
- ✅ Agendamentos
- ✅ Configurações

---

## Estrutura de Dados

### 1. Clientes

```javascript
{
  id: uuid,
  name: string,
  email: string,
  phone: string,
  cpf: string (opcional),
  birthDate: date (opcional),
  address: {
    street: string,
    number: string,
    complement: string,
    neighborhood: string,
    city: string,
    state: string,
    zipCode: string,
  },
  preferences: {
    favoriteServices: [serviceId],
    preferredTherapist: therapistId,
    allergies: string,
    observations: string,
  },
  history: {
    totalVisits: number,
    totalSpent: number,
    lastVisit: date,
    firstVisit: date,
  },
  marketing: {
    newsletter: boolean,
    whatsapp: boolean,
    source: string, // Como conheceu (Instagram, indicação, etc)
  },
  status: 'active' | 'inactive' | 'blocked',
  createdAt: date,
  updatedAt: date,
}
```

**Funcionalidades**:
- CRUD completo
- Busca por nome, telefone, email
- Histórico de agendamentos
- Estatísticas (frequência, gasto total)
- Notas internas
- Tags/Categorização
- Export para Excel/CSV

---

### 2. Terapeutas

```javascript
{
  id: uuid,
  name: string,
  photo: string (url),
  email: string,
  phone: string,
  cpf: string,
  specialty: string, // Ex: Massoterapia, Estética
  bio: string,
  certifications: [
    {
      name: string,
      institution: string,
      year: number,
      document: string (url),
    }
  ],
  services: [serviceId], // Serviços que pode realizar
  schedule: {
    monday: {
      active: boolean,
      hours: [
        { start: '09:00', end: '18:00' }
      ],
    },
    tuesday: { ... },
    wednesday: { ... },
    thursday: { ... },
    friday: { ... },
    saturday: { ... },
    sunday: { ... },
  },
  availability: {
    dayOff: [date], // Folgas específicas
    vacation: [
      { start: date, end: date }
    ],
  },
  stats: {
    totalAppointments: number,
    rating: number,
    reviews: number,
  },
  commission: {
    type: 'percentage' | 'fixed',
    value: number,
  },
  status: 'active' | 'inactive' | 'on_vacation',
  createdAt: date,
  updatedAt: date,
}
```

**Funcionalidades**:
- CRUD completo
- Upload de foto
- Upload de certificados
- Gestão de agenda (horários de trabalho)
- Bloqueio de datas (férias, folgas)
- Associação com serviços
- Estatísticas de desempenho
- Sistema de avaliação (futuro)
- Cálculo de comissões

---

### 3. Serviços

```javascript
{
  id: uuid,
  name: string,
  slug: string,
  category: 'massagens' | 'banhos' | 'tratamentos',
  subcategory: string, // Ex: 'Experiências', 'Rituais', 'Day Spa'
  description: string,
  benefits: [string], // Lista de benefícios
  includes: [string], // O que está incluído
  duration: number, // em minutos
  price: number,
  pricePromo: number (opcional),
  images: [
    {
      url: string,
      alt: string,
      isPrimary: boolean,
    }
  ],
  therapists: [therapistId], // Quem pode realizar
  availability: {
    daysOfWeek: [0-6], // 0=domingo, 6=sábado
    timeSlots: ['09:00', '10:30', '14:00', ...],
  },
  requirements: {
    minAdvanceBooking: number, // horas de antecedência
    maxSimultaneous: number, // quantos podem ser feitos ao mesmo tempo
    roomRequired: string, // tipo de sala necessária
  },
  seo: {
    metaTitle: string,
    metaDescription: string,
    keywords: [string],
  },
  stats: {
    totalBooked: number,
    rating: number,
    reviews: number,
  },
  featured: boolean,
  active: boolean,
  createdAt: date,
  updatedAt: date,
}
```

**Categorias Principais**:

#### 🙌 Massagens
- Massoterapia
- Relaxante
- Desportiva
- Pedras quentes
- Aromaterapia
- Shiatsu
- Reflexologia
- Drenagem linfática

#### 💧 Banhos
- Banho de imersão
- Ofurô
- Hidromassagem
- Banho de ervas
- Escalda-pés
- Banho de argila

#### ✨ Tratamentos
- Facial
- Corporal
- Esfoliação
- Máscara
- Limpeza de pele
- Peeling
- Hidratação

**Funcionalidades**:
- CRUD completo
- Upload múltiplo de imagens
- Categorização (massagens/banhos/tratamentos)
- Gestão de preços e promoções
- Associação com terapeutas
- Disponibilidade e horários
- SEO para cada serviço
- Ativar/Desativar
- Ordenação personalizada
- Destaque na home

---

### 4. Agendamentos

```javascript
{
  id: uuid,
  client: clientId,
  therapist: therapistId,
  service: serviceId,
  date: date,
  time: string, // '14:00'
  duration: number, // minutos
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show',
  payment: {
    method: 'cash' | 'card' | 'pix' | 'voucher',
    status: 'pending' | 'paid' | 'refunded',
    amount: number,
    paidAt: date,
  },
  reminder: {
    email: boolean,
    sms: boolean,
    whatsapp: boolean,
    sentAt: date,
  },
  notes: {
    client: string, // Observações do cliente
    internal: string, // Notas internas da equipe
  },
  cancellation: {
    cancelledAt: date,
    cancelledBy: 'client' | 'therapist' | 'admin',
    reason: string,
    refunded: boolean,
  },
  review: {
    rating: number,
    comment: string,
    createdAt: date,
  },
  source: 'site' | 'phone' | 'whatsapp' | 'instagram' | 'walk_in',
  createdAt: date,
  updatedAt: date,
}
```

**Funcionalidades**:
- CRUD completo
- Calendário visual (FullCalendar.js)
- Filtros (data, status, terapeuta, serviço)
- Criação manual
- Confirmação automática
- Lembretes automáticos (24h antes)
- Check-in/Check-out
- Gestão de cancelamentos
- Reagendamento
- Histórico completo
- Notas do atendimento
- Sistema de avaliação pós-serviço
- Export para relatórios

---

### 5. Configurações do Sistema

```javascript
{
  business: {
    name: 'Mali Spa',
    logo: string (url),
    email: 'malispabr@gmail.com',
    phone: '83996619603',
    address: {
      street: string,
      number: string,
      complement: string,
      neighborhood: 'Tambaú',
      city: 'João Pessoa',
      state: 'PB',
      zipCode: string,
    },
    social: {
      instagram: '@malispa_br',
      facebook: string,
      website: string,
    },
  },

  schedule: {
    defaultHours: {
      monday: { start: '09:00', end: '19:00' },
      tuesday: { start: '09:00', end: '19:00' },
      wednesday: { start: '09:00', end: '19:00' },
      thursday: { start: '09:00', end: '19:00' },
      friday: { start: '09:00', end: '19:00' },
      saturday: { start: '09:00', end: '17:00' },
      sunday: { active: false },
    },
    slotDuration: 30, // minutos entre horários
    bufferTime: 15, // minutos entre agendamentos
    maxAdvanceBooking: 60, // dias
    minAdvanceBooking: 2, // horas
  },

  notifications: {
    email: {
      enabled: boolean,
      smtp: {
        host: string,
        port: number,
        user: string,
        password: string,
      },
      templates: {
        confirmation: string,
        reminder: string,
        cancellation: string,
      },
    },
    sms: {
      enabled: boolean,
      provider: string,
      apiKey: string,
    },
    whatsapp: {
      enabled: boolean,
      businessPhone: '5583996619603',
      apiToken: string,
    },
  },

  payments: {
    methods: ['cash', 'card', 'pix', 'voucher'],
    taxRate: number,
    currency: 'BRL',
    gateway: {
      stripe: { apiKey: string },
      pagseguro: { apiKey: string },
    },
  },

  booking: {
    requiresApproval: boolean,
    allowCancellation: boolean,
    cancellationDeadline: number, // horas
    maxSimultaneousBookings: number,
    depositRequired: boolean,
    depositPercentage: number,
  },
}
```

---

## Módulos da Área Administrativa

### 📊 Dashboard

**Métricas em Tempo Real**:
- Agendamentos hoje
- Agendamentos semana
- Receita do mês
- Novos clientes
- Taxa de ocupação
- Serviços mais vendidos
- Terapeutas mais solicitados

**Gráficos**:
- Agendamentos por dia (últimos 30 dias)
- Receita mensal (últimos 12 meses)
- Serviços mais populares
- Horários de pico

**Ações Rápidas**:
- Novo agendamento
- Novo cliente
- Ver agenda hoje
- Mensagens pendentes

---

### 👥 Gestão de Clientes

**Tela de Listagem**:
- Tabela com: Nome, Email, Telefone, Última Visita, Total Gasto
- Busca por: Nome, Email, Telefone
- Filtros: Status, Período, Gasto
- Ordenação
- Paginação
- Export Excel/CSV
- Ações: Ver, Editar, Desativar

**Tela de Detalhes**:
- Informações pessoais
- Estatísticas (total visitas, gasto, última visita)
- Histórico de agendamentos (tabela)
- Notas internas (timeline)
- Preferências
- Edição inline

**Tela de Cadastro/Edição**:
- Form com validação
- Upload de foto (opcional)
- Campos obrigatórios: Nome, Telefone
- Auto-complete de endereço (ViaCEP)
- Preferências de marketing

---

### 💆 Gestão de Terapeutas

**Tela de Listagem**:
- Cards com foto, nome, especialidade
- Status (ativo, férias, inativo)
- Estatísticas rápidas
- Busca
- Filtros por status
- Ações: Ver, Editar, Agenda

**Tela de Detalhes**:
- Foto grande
- Bio completa
- Certificações (com download)
- Serviços que realiza
- Agenda semanal
- Estatísticas detalhadas
- Agendamentos futuros
- Histórico

**Tela de Cadastro/Edição**:
- Upload de foto
- Form completo
- Upload de certificados (múltiplos)
- Seleção de serviços (checkboxes)
- Configuração de agenda (por dia)
- Comissões
- Status

**Gestão de Agenda**:
- Calendário mensal do terapeuta
- Marcar folgas/férias
- Bloquear horários específicos
- Ver agendamentos confirmados

---

### 💅 Gestão de Serviços

**Tela de Listagem**:
- Tabs por categoria:
  - Massagens
  - Banhos
  - Tratamentos
  - Todos
- Cards com imagem, nome, duração, preço
- Destaque visual
- Ativo/Inativo
- Drag and drop para ordenar
- Busca
- Filtros
- Ações: Ver, Editar, Duplicar, Desativar

**Tela de Detalhes**:
- Galeria de imagens
- Todas informações
- Estatísticas (total vendas, avaliação)
- Terapeutas habilitados
- Últimos agendamentos
- Avaliações de clientes

**Tela de Cadastro/Edição**:
- Upload múltiplo de imagens (drag & drop)
- Crop de imagens
- Form completo
- Editor de texto rico (descrição)
- Seleção de categoria
- Subcategoria
- Benefícios (lista dinâmica)
- O que inclui (lista dinâmica)
- Preço e promoção
- Duração (seletor intuitivo)
- Selecionar terapeutas (checkboxes)
- Configuração de disponibilidade
- SEO (meta title, description, keywords)
- Destaque na home (toggle)
- Ativo/Inativo (toggle)

---

### 📅 Gestão de Agendamentos

**Calendário Visual**:
- View: Mês, Semana, Dia
- Cores por status:
  - Verde: Confirmado
  - Amarelo: Pendente
  - Azul: Em andamento
  - Cinza: Cancelado
  - Vermelho: Faltou
- Drag & drop para reagendar
- Click para ver detalhes
- Filtros:
  - Terapeuta
  - Serviço
  - Status
  - Data

**Tela de Listagem**:
- Tabela com: Data/Hora, Cliente, Terapeuta, Serviço, Status, Valor
- Busca por cliente
- Filtros avançados
- Ordenação
- Paginação
- Export
- Ações rápidas (Confirmar, Cancelar, Completar)

**Tela de Novo Agendamento**:
1. Selecionar serviço
2. Selecionar terapeuta (mostrar disponíveis)
3. Selecionar data
4. Selecionar horário (grid visual)
5. Selecionar/Criar cliente
6. Observações
7. Forma de pagamento
8. Confirmação

**Tela de Detalhes**:
- Todas informações
- Timeline de status
- Notas
- Ações:
  - Confirmar
  - Iniciar atendimento
  - Finalizar
  - Cancelar
  - Reagendar
  - Enviar lembrete
  - Imprimir

**Funcionalidades Especiais**:
- Lembretes automáticos (24h, 2h antes)
- WhatsApp, SMS, Email
- Confirmação pelo cliente (link)
- Check-in QR Code (futuro)
- Avaliação pós-atendimento

---

### ⚙️ Configurações

**Tabs**:

1. **Dados da Empresa**
   - Logo (upload)
   - Nome, Email, Telefone
   - Endereço completo
   - Redes sociais

2. **Horários de Funcionamento**
   - Por dia da semana
   - Horário de abertura/fechamento
   - Intervalo de almoço
   - Duração dos slots
   - Buffer entre agendamentos

3. **Bloqueios e Feriados**
   - Adicionar feriados
   - Bloqueios pontuais
   - Observações

4. **Notificações**
   - Email (SMTP)
   - SMS (provedor)
   - WhatsApp (API)
   - Templates de mensagens
   - Quando enviar

5. **Pagamentos**
   - Métodos aceitos
   - Taxas
   - Integração gateway
   - Política de cancelamento

6. **Regras de Agendamento**
   - Aprovação automática?
   - Antecedência mínima/máxima
   - Permite cancelamento?
   - Prazo para cancelar
   - Depósito obrigatório?

7. **Usuários Admin**
   - Listar usuários
   - Adicionar novo
   - Permissões (roles)
   - Histórico de acessos

---

## Chatbot WhatsApp

### Integração

**Tecnologia**: Baileys (WhatsApp Web API) ou API Oficial WhatsApp Business

**Fluxo do Chatbot**:

```
[Cliente envia mensagem]
    ↓
[Saudação automática]
    "Olá! Bem-vindo ao Mali Spa 🌿
    Sou a assistente virtual.
    Como posso ajudar?"

[Opções]
    1️⃣ Agendar horário
    2️⃣ Ver serviços
    3️⃣ Falar com atendente
    4️⃣ Endereço e horários

[Se escolher 1 - Agendar]
    → "Qual serviço você gostaria?"
    → Lista de serviços (botões)
    → "Qual data prefere?"
    → Calendário (próximos 30 dias)
    → "Horários disponíveis:"
    → Lista de horários
    → "Seu nome completo?"
    → "Seu telefone?" (validar)
    → "Confirmar agendamento?"
    → ✅ Agendamento criado no sistema
    → "Agendamento confirmado! ✅
        Data: XX/XX às XX:XX
        Serviço: XXXXX
        Endereço: Tambaú, João Pessoa

        Enviaremos um lembrete 24h antes.
        Até breve! 🌿"

[Se escolher 2 - Ver serviços]
    → Lista todos serviços com preços
    → "Gostaria de agendar algum?"
    → [volta para fluxo 1]

[Se escolher 3 - Atendente]
    → "Transferindo para nosso atendente humano..."
    → [Notifica admin no painel]
    → [Conversa manual]

[Se escolher 4 - Endereço]
    → Envia endereço completo
    → Link Google Maps
    → Horários de funcionamento
```

**Funcionalidades**:
- ✅ Respostas automáticas 24/7
- ✅ Agendamento direto pelo WhatsApp
- ✅ Consulta de horários disponíveis
- ✅ Informações sobre serviços
- ✅ Transfer para atendente humano
- ✅ Confirmação de agendamento
- ✅ Lembretes automáticos
- ✅ Cancelamento pelo cliente
- ✅ FAQ automático
- ✅ Histórico de conversas salvo

**Implementação**:

```javascript
// Exemplo básico de estrutura
const chatbotFlow = {
  greeting: {
    message: 'Olá! Bem-vindo ao Mali Spa 🌿...',
    options: [
      { id: 1, text: 'Agendar horário', next: 'booking' },
      { id: 2, text: 'Ver serviços', next: 'services' },
      { id: 3, text: 'Falar com atendente', next: 'human' },
      { id: 4, text: 'Endereço e horários', next: 'info' },
    ]
  },

  booking: {
    steps: [
      { type: 'select', field: 'service', message: 'Qual serviço?' },
      { type: 'calendar', field: 'date', message: 'Qual data?' },
      { type: 'select', field: 'time', message: 'Horário?' },
      { type: 'input', field: 'name', message: 'Seu nome?' },
      { type: 'input', field: 'phone', message: 'Telefone?' },
      { type: 'confirm', next: 'createBooking' },
    ]
  },

  // ... outros fluxos
}
```

**Painel Admin - Chatbot**:
- Ver conversas ativas
- Histórico de conversas
- Assumir conversa (transfer)
- Estatísticas:
  - Total de mensagens
  - Agendamentos pelo bot
  - Taxa de conversão
  - Horários de pico
- Configurar mensagens
- Ativar/Desativar bot
- Fallback para humano

---

## Stack Técnico Recomendado

### Frontend Admin

**Framework**: React + Vite
**UI Library**:
- Tailwind CSS (base)
- shadcn/ui ou Ant Design (componentes prontos)
- React Icons

**Componentes Especiais**:
- **Calendário**: FullCalendar.js ou React Big Calendar
- **Tabelas**: TanStack Table (React Table v8)
- **Forms**: React Hook Form + Zod
- **Upload**: React Dropzone
- **Editor**: TipTap ou Quill
- **Charts**: Recharts ou Chart.js
- **Toast**: React Hot Toast

**Gerenciamento de Estado**:
- Zustand ou Jotai (leve)
- React Query (cache de API)

**Rotas**:
- React Router v6

---

### Backend

**Framework**: Fastify
**Banco de Dados**: PostgreSQL
**ORM**: Prisma
**Autenticação**: JWT + bcrypt
**Validação**: Zod
**Upload**: Multer ou Fastify Multipart
**Email**: Nodemailer
**SMS**: Twilio
**WhatsApp**: Baileys ou API Oficial
**Agendamento**: node-cron (lembretes)
**Storage**: AWS S3 ou Cloudinary (imagens)

---

## Próximos Passos

### Fase 1: Frontend Público ✅ (atual)
- Landing page completa
- Informações atualizadas

### Fase 2: Backend + Admin (próxima)
1. Setup backend Fastify
2. Banco de dados PostgreSQL + Prisma
3. Autenticação
4. API CRUD para:
   - Clientes
   - Terapeutas
   - Serviços
   - Agendamentos
   - Configurações
5. Painel admin básico
6. Deploy

### Fase 3: Chatbot WhatsApp
1. Integração WhatsApp
2. Fluxo de conversas
3. Agendamento pelo bot
4. Painel de gerenciamento
5. Testes e ajustes

---

**Documento criado**: 29 de Janeiro de 2026
**Versão**: 1.0
