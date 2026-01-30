# Planejamento Técnico - Mali Spa

## Arquitetura do Projeto

### Estrutura Geral
```
malispa/
├── briefing/                 # Documentação e referências
│   ├── docs/                # Documentos de planejamento
│   └── images/              # Imagens de referência
├── frontend/                # Aplicação React (Landing Page)
│   ├── src/
│   ├── public/
│   └── package.json
└── backend/                 # API Fastify (futuro - painel admin)
    ├── src/
    ├── package.json
    └── README.md
```

## Frontend - Landing Page

### Stack Tecnológico
- **Framework**: React 18+
- **Build Tool**: Vite
- **Linguagem**: JavaScript (ES6+)
- **Estilização**: Tailwind CSS
- **Roteamento**: React Router (se necessário)
- **Ícones**: React Icons ou Lucide React
- **Animações**: Framer Motion (opcional)
- **Formulários**: React Hook Form (se necessário)
- **HTTP Client**: Axios (para futuras integrações)

### Estrutura de Pastas (Frontend)

```
frontend/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── services/
│   │   ├── ambiente/
│   │   └── hero/
│   └── favicon.ico
├── src/
│   ├── assets/             # Assets estáticos (se não forem em public)
│   ├── components/         # Componentes reutilizáveis
│   │   ├── common/        # Botões, Cards, etc
│   │   ├── layout/        # Header, Footer, Navigation
│   │   └── sections/      # Hero, Services, About, Contact
│   ├── pages/             # Páginas da aplicação
│   │   └── Home.jsx
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Funções utilitárias
│   ├── constants/         # Constantes (serviços, cores, etc)
│   ├── styles/            # Estilos globais
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

### Componentes Principais

#### Layout
- **Header**: Logo + Menu de navegação
- **Footer**: Contato + Redes sociais + Copyright
- **Navigation**: Menu mobile responsivo

#### Sections
- **Hero**: Banner principal com CTA
- **About**: Sobre o Mali Spa + Filosofia
- **Services**: Grid/Cards dos serviços
- **ServiceCard**: Card individual de serviço
- **Gallery**: Galeria de fotos (opcional)
- **Testimonials**: Depoimentos (futuro)
- **Contact**: Formulário + WhatsApp + Mapa

#### Common
- **Button**: Botão reutilizável
- **Card**: Card genérico
- **Container**: Wrapper com max-width
- **Section**: Wrapper de seção
- **SocialLinks**: Links redes sociais
- **WhatsAppButton**: Botão flutuante WhatsApp

### Páginas

#### Fase 1 (MVP)
- **Home**: Landing page completa (single page)

#### Fase 2 (Futuro)
- **Services**: Página detalhada de cada serviço
- **About**: Página sobre expandida
- **Blog**: Artigos sobre bem-estar
- **Contact**: Página de contato dedicada

### Funcionalidades

#### Fase 1 (MVP)
- [x] Design responsivo (mobile-first)
- [x] Navegação smooth scroll
- [x] Integração WhatsApp
- [x] Links redes sociais
- [x] Listagem de serviços
- [x] Informações de contato
- [ ] SEO básico (meta tags)
- [ ] Performance otimizada
- [ ] Acessibilidade (A11y)

#### Fase 2
- [ ] Formulário de contato funcional
- [ ] Integração Google Maps
- [ ] Galeria de fotos lightbox
- [ ] Depoimentos de clientes
- [ ] Blog/artigos
- [ ] Sistema de agendamento online
- [ ] Multi-idioma (PT/EN)

## Backend - Painel Administrativo (Futuro)

### Stack Tecnológico
- **Framework**: Fastify
- **Linguagem**: JavaScript/Node.js
- **Banco de Dados**: PostgreSQL ou MongoDB
- **ORM**: Prisma ou Mongoose
- **Autenticação**: JWT
- **Validação**: Zod ou Joi
- **File Upload**: Multer

### Funcionalidades Planejadas
- Gerenciamento de serviços
- Agendamentos
- Clientes
- Blog/conteúdo
- Configurações do site
- Analytics básico

### APIs Necessárias
- CRUD de serviços
- CRUD de agendamentos
- CRUD de clientes
- Upload de imagens
- Autenticação admin
- Envio de emails/notificações

## Integrações

### Fase 1
- WhatsApp Business API (link direto)
- Instagram (links)
- Google Analytics (opcional)

### Fase 2
- Google Maps API
- Email service (SendGrid, Resend)
- Calendar API (agendamentos)
- Payment gateway (se necessário)

## Configurações Iniciais

### Vite + React + Tailwind

```bash
# Criar projeto
npm create vite@latest frontend -- --template react

# Instalar Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Dependências adicionais
npm install react-router-dom react-icons
```

### Configuração Tailwind

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#311303',
          light: '#5a3825',
          dark: '#1a0a01',
        },
        secondary: {
          DEFAULT: '#e6efee',
          light: '#f5faf9',
          dark: '#d0e5e2',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## Git & Deployment

### Branches
- `main`: Produção
- `develop`: Desenvolvimento
- `feature/*`: Features específicas

### Deploy Frontend (Sugestões)
- Vercel (recomendado para React)
- Netlify
- GitHub Pages
- CloudFlare Pages

### Deploy Backend (Futuro)
- Railway
- Render
- AWS EC2/ECS
- Digital Ocean

## Cronograma Sugerido

### Sprint 1 (Semana 1-2)
- [x] Setup do projeto
- [ ] Estrutura de pastas
- [ ] Configuração Tailwind
- [ ] Componentes base (Button, Card, Container)
- [ ] Layout (Header, Footer)

### Sprint 2 (Semana 3-4)
- [ ] Seção Hero
- [ ] Seção About
- [ ] Seção Services
- [ ] Seção Contact
- [ ] WhatsApp integration

### Sprint 3 (Semana 5-6)
- [ ] Responsividade completa
- [ ] Otimizações de performance
- [ ] SEO
- [ ] Testes
- [ ] Deploy

### Sprint 4+ (Futuro)
- [ ] Backend Fastify
- [ ] Painel administrativo
- [ ] Sistema de agendamento
- [ ] Features avançadas

## Métricas de Qualidade

### Performance
- Lighthouse Score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Imagens otimizadas (WebP)

### SEO
- Meta tags completas
- Sitemap.xml
- Robots.txt
- Structured data (Schema.org)

### Acessibilidade
- WCAG 2.1 Level AA
- Navegação por teclado
- Screen reader friendly
- Contraste adequado

## Próximos Passos Imediatos

1. [ ] Criar projeto Vite + React
2. [ ] Instalar e configurar Tailwind CSS
3. [ ] Criar estrutura de pastas
4. [ ] Criar arquivo de constantes (serviços, contatos)
5. [ ] Desenvolver componentes base
6. [ ] Implementar layout principal
