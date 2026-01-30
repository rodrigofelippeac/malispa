# Checklist Completo do Projeto Mali Spa

**Objetivo**: Landing page + Sistema administrativo + Backend
**Metodologia**: Frontend primeiro → Backend depois
**Data de início**: 29 de Janeiro de 2026

---

## 📊 Visão Geral

```
FASE 1: Landing Page (Frontend)     ████████████░░░░ 75% planejado
FASE 2: Backend + Admin             ░░░░░░░░░░░░░░░░  0% (futuro)
FASE 3: Integrações                 ░░░░░░░░░░░░░░░░  0% (futuro)
```

---

# FASE 1: LANDING PAGE (FRONTEND)

## 1.1 Preparação e Planejamento

### ✅ Setup Inicial (COMPLETO)
- [x] Criar repositório Git
- [x] Inicializar projeto Vite + React
- [x] Configurar Tailwind CSS
- [x] Instalar dependências básicas (React Icons)
- [x] Configurar estrutura de pastas
- [x] Criar arquivo CLAUDE.md com padrões
- [x] Build de produção funcionando

### ✅ Documentação (COMPLETO)
- [x] Extrair informações do site antigo
- [x] Pesquisar spas internacionais (50+)
- [x] Pesquisar spas brasileiros (8+)
- [x] Definir paleta de cores
- [x] Definir tipografia
- [x] Planejar layout completo
- [x] Criar design tokens
- [x] Documentar padrões de código

### ✅ Assets Iniciais (PARCIAL)
- [x] Baixar logo do site antigo
- [x] Baixar imagem hero
- [x] Baixar 2 imagens de serviços
- [ ] Solicitar logo vetorial ao cliente (SVG/AI)
- [ ] Solicitar fotos profissionais do spa
- [ ] Solicitar fotos das salas de tratamento
- [ ] Solicitar endereço completo
- [ ] Solicitar horário de funcionamento
- [ ] Confirmar preços (se exibir ou não)

---

## 1.2 Componentes Base (Reutilizáveis)

### 🎯 Prioridade ALTA

#### [ ] Container.jsx
**Localização**: `src/components/common/Container.jsx`
**Funcionalidade**: Wrapper padrão com max-width
**Variantes**: sm, md, lg, full
**Tempo estimado**: 30min

**Checklist interno**:
- [ ] Criar componente
- [ ] Adicionar PropTypes
- [ ] Implementar variantes de tamanho
- [ ] Padding responsivo
- [ ] Testar em App.jsx
- [ ] Documentar uso

---

#### [ ] Button.jsx
**Localização**: `src/components/common/Button.jsx`
**Funcionalidade**: Botão reutilizável com variantes
**Tempo estimado**: 1h

**Checklist interno**:
- [ ] Criar componente base
- [ ] Variantes:
  - [ ] primary (marrom)
  - [ ] secondary (verde menta)
  - [ ] outline
  - [ ] ghost
  - [ ] whatsapp (verde WhatsApp)
- [ ] Tamanhos: sm, md, lg, xl
- [ ] Estados:
  - [ ] Hover (scale + shadow)
  - [ ] Focus (ring acessibilidade)
  - [ ] Disabled (opacity 50%)
  - [ ] Loading (opcional)
- [ ] Ícones (left/right)
- [ ] PropTypes completos
- [ ] Testar todas variantes
- [ ] Documentar uso

---

#### [ ] Card.jsx
**Localização**: `src/components/common/Card.jsx`
**Funcionalidade**: Card reutilizável
**Tempo estimado**: 45min

**Checklist interno**:
- [ ] Criar componente base
- [ ] Variantes:
  - [ ] default (branco, shadow padrão)
  - [ ] elevated (shadow maior)
  - [ ] bordered (apenas borda)
  - [ ] flat (sem shadow)
- [ ] Hover effect (translateY + shadow)
- [ ] Padding interno
- [ ] PropTypes
- [ ] Testar variantes
- [ ] Documentar uso

---

#### [ ] Badge.jsx
**Localização**: `src/components/common/Badge.jsx`
**Funcionalidade**: Tag/Label para duração, categorias
**Tempo estimado**: 30min

**Checklist interno**:
- [ ] Criar componente
- [ ] Variantes de cor
- [ ] Tamanhos
- [ ] Ícone opcional
- [ ] PropTypes
- [ ] Documentar uso

---

### 🎯 Prioridade MÉDIA

#### [ ] Input.jsx
**Localização**: `src/components/common/Input.jsx`
**Funcionalidade**: Campo de formulário (futuro contato)
**Tempo estimado**: 1h

**Checklist interno**:
- [ ] Input text
- [ ] Textarea
- [ ] Label
- [ ] Error state
- [ ] Helper text
- [ ] Ícones
- [ ] PropTypes
- [ ] Acessibilidade (ARIA)

---

#### [ ] Alert.jsx
**Localização**: `src/components/common/Alert.jsx`
**Funcionalidade**: Mensagens de feedback
**Tempo estimado**: 30min

**Checklist interno**:
- [ ] Variantes: success, error, warning, info
- [ ] Ícones
- [ ] Botão fechar
- [ ] Auto-dismiss (opcional)
- [ ] PropTypes

---

## 1.3 Layout (Estrutura da Página)

### [ ] Header.jsx
**Localização**: `src/components/layout/Header.jsx`
**Funcionalidade**: Cabeçalho fixo com navegação
**Tempo estimado**: 2h

**Checklist interno**:
- [ ] Logo Mali Spa (esquerda)
- [ ] Menu desktop:
  - [ ] Início
  - [ ] Sobre
  - [ ] Experiências
  - [ ] Contato
- [ ] Botão WhatsApp (destaque, direita)
- [ ] Sticky ao scroll
- [ ] Background transparente → branco ao scroll
- [ ] Shadow ao scroll
- [ ] Menu mobile (hamburger):
  - [ ] Ícone hamburger
  - [ ] Menu slide-in
  - [ ] Overlay escuro
  - [ ] Fechar ao clicar fora
  - [ ] Fechar ao clicar em link
- [ ] Smooth scroll para seções
- [ ] Active link highlight
- [ ] PropTypes
- [ ] Responsivo completo
- [ ] Testar navegação
- [ ] Acessibilidade (teclado)

---

### [ ] Footer.jsx
**Localização**: `src/components/layout/Footer.jsx`
**Funcionalidade**: Rodapé com informações
**Tempo estimado**: 1h

**Checklist interno**:
- [ ] Background marrom escuro
- [ ] Texto branco
- [ ] Logo Mali (branco/claro)
- [ ] Links de navegação
- [ ] Redes sociais:
  - [ ] Instagram
  - [ ] WhatsApp
- [ ] Informações de contato:
  - [ ] Endereço
  - [ ] Telefone
  - [ ] Email (se houver)
- [ ] Horário de funcionamento
- [ ] Copyright © 2026 Mali Spa
- [ ] Link "Desenvolvido por..."
- [ ] Layout responsivo (col no mobile)
- [ ] PropTypes
- [ ] Testar links

---

### [ ] WhatsAppButton.jsx
**Localização**: `src/components/common/WhatsAppButton.jsx`
**Funcionalidade**: Botão flutuante WhatsApp
**Tempo estimado**: 45min

**Checklist interno**:
- [ ] Position fixed (bottom-right)
- [ ] Bottom: 20px, Right: 20px
- [ ] Verde WhatsApp (#25d366)
- [ ] Ícone WhatsApp (React Icons)
- [ ] Tamanho: 56x56px ou 64x64px
- [ ] Border-radius: full (circular)
- [ ] Shadow grande
- [ ] Animação pulse sutil
- [ ] Hover: scale ligeiramente
- [ ] Link para WhatsApp com mensagem padrão
- [ ] Z-index alto (9999)
- [ ] Esconder no scroll down (opcional)
- [ ] Tooltip "Fale conosco"
- [ ] PropTypes
- [ ] Testar em mobile
- [ ] Acessibilidade

---

## 1.4 Seções da Landing Page

### [ ] Hero.jsx
**Localização**: `src/components/sections/Hero.jsx`
**Funcionalidade**: Seção principal (primeira impressão)
**Tempo estimado**: 2h

**Checklist interno**:
- [ ] Height: 100vh (desktop), 80vh (mobile)
- [ ] Background image (hero-background.jpg):
  - [ ] Otimizar imagem (WebP + fallback)
  - [ ] Overlay escuro (40% opacity)
  - [ ] Background-size: cover
  - [ ] Background-position: center
- [ ] Conteúdo centralizado:
  - [ ] Logo ou título "MALI SPA"
  - [ ] Slogan: "Um convite ao cuidado"
  - [ ] Texto breve sobre filosofia
  - [ ] CTA principal "Agende sua Experiência"
- [ ] Scroll indicator (ícone seta animado)
- [ ] Responsivo (texto menor no mobile)
- [ ] Animação fade-in ao carregar
- [ ] PropTypes
- [ ] Testar em múltiplos tamanhos
- [ ] Acessibilidade (alt texts)

---

### [ ] About.jsx
**Localização**: `src/components/sections/About.jsx`
**Funcionalidade**: Sobre o Mali Spa + Filosofia
**Tempo estimado**: 2h

**Checklist interno**:
- [ ] Background: verde menta claro (#f5faf9)
- [ ] Padding: 80px vertical (responsivo)
- [ ] Layout 2 colunas (desktop):
  - [ ] Imagem do ambiente (40%)
  - [ ] Texto (60%)
- [ ] Layout 1 coluna (mobile)
- [ ] Conteúdo:
  - [ ] Título "Sobre o Mali Spa"
  - [ ] Texto da filosofia
  - [ ] Destacar: "Técnicas ancestrais + Escuta presente"
  - [ ] Mencionar: Tambaú, João Pessoa
- [ ] Imagem:
  - [ ] Border-radius suave
  - [ ] Shadow sutil
  - [ ] Lazy loading
- [ ] PropTypes
- [ ] Responsivo
- [ ] Animação scroll reveal (opcional)

---

### [ ] Diferenciais.jsx
**Localização**: `src/components/sections/Diferenciais.jsx`
**Funcionalidade**: Por que escolher o Mali
**Tempo estimado**: 1.5h

**Checklist interno**:
- [ ] Background: branco ou secundário
- [ ] Padding: 64px vertical
- [ ] Título: "Por que escolher o Mali Spa"
- [ ] Grid 3-4 colunas (desktop), 1 col (mobile)
- [ ] Cada diferencial:
  - [ ] Ícone grande (React Icons)
  - [ ] Título
  - [ ] Descrição breve
- [ ] Diferenciais sugerir:
  - [ ] "Escuta Presente" (ícone: coração/ouvido)
  - [ ] "Técnicas Ancestrais" (ícone: folha/natureza)
  - [ ] "Ambiente Intimista" (ícone: casa/aconchego)
  - [ ] "Ritmo Individual" (ícone: relógio/pessoa)
- [ ] Centralizado
- [ ] PropTypes
- [ ] Responsivo
- [ ] Hover sutil nos cards

---

### [ ] Services.jsx
**Localização**: `src/components/sections/Services.jsx`
**Funcionalidade**: Grid de experiências/serviços
**Tempo estimado**: 2.5h

**Checklist interno**:
- [ ] Background: branco
- [ ] Padding: 80px vertical
- [ ] Título: "Nossas Experiências"
- [ ] Subtítulo/descrição breve
- [ ] Grid:
  - [ ] 3 colunas (desktop)
  - [ ] 2 colunas (tablet)
  - [ ] 1 coluna (mobile)
  - [ ] Gap: 24px
- [ ] Usar ServiceCard para cada serviço
- [ ] Importar dados de `constants/services.js`
- [ ] Mapear todos os 7 serviços
- [ ] Filtro por categoria (opcional V2)
- [ ] PropTypes
- [ ] Responsivo completo
- [ ] Performance (lazy load images)

---

### [ ] ServiceCard.jsx
**Localização**: `src/components/common/ServiceCard.jsx`
**Funcionalidade**: Card individual de serviço
**Tempo estimado**: 1.5h

**Checklist interno**:
- [ ] Baseado em Card.jsx
- [ ] Estrutura:
  - [ ] Imagem topo (ou ícone placeholder)
  - [ ] Badge com duração
  - [ ] Título do serviço
  - [ ] Descrição (2-3 linhas)
  - [ ] Preço (se definido)
  - [ ] Botão "Agendar" ou "Saiba mais"
- [ ] Hover effect:
  - [ ] Lift (translateY -4px)
  - [ ] Shadow aumenta
  - [ ] Transition 200ms
- [ ] Border-radius: 16px
- [ ] Padding: 24px ou 32px
- [ ] Imagem:
  - [ ] Aspect ratio 4:3 ou 16:9
  - [ ] Object-fit: cover
  - [ ] Border-radius top
  - [ ] Lazy loading
- [ ] PropTypes completos
- [ ] Responsivo
- [ ] Acessibilidade

---

### [ ] Contact.jsx
**Localização**: `src/components/sections/Contact.jsx`
**Funcionalidade**: Informações de contato
**Tempo estimado**: 2h

**Checklist interno**:
- [ ] Background: verde menta claro
- [ ] Padding: 64px vertical
- [ ] Título: "Entre em Contato"
- [ ] Layout centralizado
- [ ] Cards de contato (3 colunas no desktop):
  - [ ] WhatsApp:
    - [ ] Ícone grande
    - [ ] Número formatado
    - [ ] Link clicável
    - [ ] Verde WhatsApp
  - [ ] Instagram:
    - [ ] Ícone
    - [ ] @malisppa_br
    - [ ] Link para perfil
  - [ ] Telefone:
    - [ ] Ícone
    - [ ] Número
    - [ ] Link clicável (tel:)
- [ ] Endereço:
  - [ ] Ícone localização
  - [ ] Tambaú, João Pessoa - PB
  - [ ] Endereço completo (quando tiver)
- [ ] Horário de funcionamento:
  - [ ] Ícone relógio
  - [ ] Dias e horários
- [ ] Mapa Google Maps (V2):
  - [ ] Iframe ou Google Maps API
  - [ ] Height: 400px
  - [ ] Lazy loading
- [ ] Formulário de contato (V2):
  - [ ] Nome, Email, Telefone, Mensagem
  - [ ] Validação
  - [ ] Envio
- [ ] PropTypes
- [ ] Responsivo (stack no mobile)
- [ ] Links testados
- [ ] Acessibilidade

---

## 1.5 Página Principal

### [ ] Home.jsx
**Localização**: `src/pages/Home.jsx`
**Funcionalidade**: Montar todas as seções
**Tempo estimado**: 1h

**Checklist interno**:
- [ ] Importar todas as seções:
  - [ ] Hero
  - [ ] About
  - [ ] Diferenciais
  - [ ] Services
  - [ ] Contact
- [ ] Ordem correta das seções
- [ ] Smooth scroll funcionando
- [ ] IDs nas seções para navegação
- [ ] PropTypes (se necessário)
- [ ] Testar navegação completa
- [ ] Scroll to top ao mudar rota (se houver)

---

### [ ] App.jsx
**Localização**: `src/App.jsx`
**Funcionalidade**: Layout principal + Rotas
**Tempo estimado**: 45min

**Checklist interno**:
- [ ] Importar Header
- [ ] Importar Footer
- [ ] Importar WhatsAppButton
- [ ] Importar Home
- [ ] Estrutura:
  ```jsx
  <div>
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
  ```
- [ ] Configurar rotas (se necessário)
- [ ] Scroll restoration
- [ ] Testar layout completo

---

## 1.6 Otimização e Refinamento

### [ ] Responsividade
**Tempo estimado**: 3h

**Checklist**:
- [ ] Testar em breakpoints:
  - [ ] Mobile (375px - iPhone SE)
  - [ ] Mobile (390px - iPhone 12/13/14)
  - [ ] Tablet (768px - iPad)
  - [ ] Tablet landscape (1024px)
  - [ ] Desktop (1280px)
  - [ ] Desktop large (1920px)
- [ ] Header responsivo em todos tamanhos
- [ ] Menu mobile funcionando perfeitamente
- [ ] Todas seções empilham corretamente
- [ ] Imagens responsivas (não esticam/distorcem)
- [ ] Textos legíveis em todos tamanhos
- [ ] Botões clicáveis (min 44x44px)
- [ ] Espaçamentos adequados
- [ ] Sem scroll horizontal
- [ ] Testar orientação portrait/landscape

---

### [ ] Imagens e Assets
**Tempo estimado**: 2h

**Checklist**:
- [ ] Otimizar todas as imagens:
  - [ ] Logo (PNG otimizado)
  - [ ] Hero background (WebP + JPEG)
  - [ ] Imagens de serviços (WebP + JPEG)
  - [ ] Ícones (SVG quando possível)
- [ ] Criar múltiplas resoluções:
  - [ ] Desktop: 1920px
  - [ ] Tablet: 1024px
  - [ ] Mobile: 768px, 375px
- [ ] Implementar lazy loading (React.lazy ou lib)
- [ ] Usar srcset para responsive images
- [ ] Favicon:
  - [ ] favicon.ico (16x16, 32x32)
  - [ ] apple-touch-icon.png (180x180)
  - [ ] android-chrome (192x192, 512x512)
- [ ] Alt text em TODAS imagens
- [ ] Testar carregamento (3G throttling)
- [ ] Verificar formatos (WebP suportado?)

---

### [ ] Performance
**Tempo estimado**: 2h

**Checklist**:
- [ ] Lighthouse audit (alvo: 90+):
  - [ ] Performance: 90+
  - [ ] Accessibility: 90+
  - [ ] Best Practices: 90+
  - [ ] SEO: 90+
- [ ] Otimizações:
  - [ ] Code splitting (React.lazy)
  - [ ] Tree shaking (Vite faz automaticamente)
  - [ ] Minificação (build automático)
  - [ ] Compression (Gzip/Brotli no servidor)
  - [ ] Preload fonts críticas
  - [ ] Defer scripts não-críticos
- [ ] Métricas Core Web Vitals:
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1
- [ ] Testar performance:
  - [ ] DevTools Network (3G)
  - [ ] Chrome DevTools Performance
  - [ ] WebPageTest.org
- [ ] Bundle size analysis (vite-bundle-visualizer)
- [ ] Remover console.logs
- [ ] Remover código não usado

---

### [ ] Acessibilidade (A11y)
**Tempo estimado**: 2h

**Checklist**:
- [ ] Semantic HTML:
  - [ ] `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
  - [ ] Headings hierárquicos (h1 → h2 → h3)
  - [ ] `<button>` para ações, `<a>` para links
- [ ] ARIA:
  - [ ] aria-label em ícones sem texto
  - [ ] aria-labelledby em seções
  - [ ] aria-hidden em elementos decorativos
  - [ ] role quando necessário
- [ ] Contraste de cores:
  - [ ] Texto/background: mínimo 4.5:1
  - [ ] Texto grande: mínimo 3:1
  - [ ] Verificar com WebAIM Contrast Checker
- [ ] Navegação por teclado:
  - [ ] Tab através de todos elementos interativos
  - [ ] Focus visible (outline/ring)
  - [ ] Enter/Space em botões
  - [ ] Escape fecha modais/menus
  - [ ] Menu mobile navegável por teclado
- [ ] Screen readers:
  - [ ] Testar com VoiceOver (Mac/iOS)
  - [ ] Testar com NVDA (Windows)
  - [ ] Alt text descritivo em imagens
  - [ ] Labels em inputs
- [ ] Formulários (V2):
  - [ ] Labels associados
  - [ ] Error messages claros
  - [ ] Required fields indicados
- [ ] Skip links (opcional)
- [ ] WCAG 2.1 Level AA compliance
- [ ] Axe DevTools audit

---

### [ ] SEO
**Tempo estimado**: 1.5h

**Checklist**:
- [ ] Meta tags (index.html):
  - [ ] `<title>` descritivo
  - [ ] `<meta name="description">`
  - [ ] `<meta name="keywords">`
  - [ ] `<meta name="author">`
  - [ ] Viewport meta tag
- [ ] Open Graph (redes sociais):
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image
  - [ ] og:url
  - [ ] og:type
- [ ] Twitter Card:
  - [ ] twitter:card
  - [ ] twitter:title
  - [ ] twitter:description
  - [ ] twitter:image
- [ ] Schema.org markup (JSON-LD):
  - [ ] LocalBusiness
  - [ ] Organization
  - [ ] ContactPoint
- [ ] Sitemap.xml:
  - [ ] Gerar sitemap
  - [ ] Incluir todas páginas
- [ ] robots.txt:
  - [ ] Criar arquivo
  - [ ] Permitir crawling
- [ ] Canonical URL
- [ ] Heading structure (h1 único por página)
- [ ] Alt text em imagens (já feito em A11y)
- [ ] URLs amigáveis (se multi-página)
- [ ] Page speed otimizado (já feito)
- [ ] Mobile-friendly (já feito)
- [ ] Google Analytics (opcional):
  - [ ] GA4 setup
  - [ ] Event tracking
- [ ] Google Search Console (após deploy)

---

### [ ] Conteúdo Final
**Tempo estimado**: 2h

**Checklist**:
- [ ] Revisar todos os textos:
  - [ ] Correção ortográfica
  - [ ] Gramática
  - [ ] Tom de voz consistente
  - [ ] Filosofia do Mali bem comunicada
- [ ] Confirmar informações:
  - [ ] Endereço correto
  - [ ] Telefone correto
  - [ ] WhatsApp correto
  - [ ] Instagram @malisppa_br
  - [ ] Horário de funcionamento
- [ ] Descrições de serviços:
  - [ ] Revisar com cliente
  - [ ] Duração correta
  - [ ] Preços (se exibir)
- [ ] Imagens finais:
  - [ ] Substituir por profissionais
  - [ ] Aprovar com cliente
  - [ ] Todos os serviços têm imagem
- [ ] Links funcionando:
  - [ ] WhatsApp abre app
  - [ ] Instagram abre perfil
  - [ ] Telefone faz ligação
  - [ ] Email abre cliente (se houver)
- [ ] Mensagem WhatsApp padrão:
  - [ ] Revisar texto
  - [ ] Aprovar com cliente

---

### [ ] Testes
**Tempo estimado**: 2h

**Checklist**:
- [ ] Testes funcionais:
  - [ ] Todas navegações funcionam
  - [ ] Menu mobile abre/fecha
  - [ ] Smooth scroll funciona
  - [ ] Botões levam para destino correto
  - [ ] Links externos abrem em nova aba
  - [ ] WhatsApp abre com mensagem correta
- [ ] Cross-browser:
  - [ ] Chrome (desktop/mobile)
  - [ ] Firefox
  - [ ] Safari (desktop/mobile)
  - [ ] Edge
- [ ] Cross-device:
  - [ ] iPhone (Safari)
  - [ ] Android (Chrome)
  - [ ] iPad
  - [ ] Desktop Windows
  - [ ] Desktop Mac
- [ ] Testes de usuário:
  - [ ] Pedir feedback de 3-5 pessoas
  - [ ] Observar comportamento
  - [ ] Ajustar baseado em feedback
- [ ] Testes de conversão:
  - [ ] CTAs visíveis?
  - [ ] WhatsApp fácil de achar?
  - [ ] Jornada clara?

---

## 1.7 Deploy Frontend

### [ ] Preparação para Deploy
**Tempo estimado**: 1h

**Checklist**:
- [ ] Build de produção funciona:
  ```bash
  npm run build
  npm run preview
  ```
- [ ] Testar build local
- [ ] Verificar tamanho dos bundles
- [ ] Verificar warnings do build
- [ ] Configurar variáveis de ambiente (se necessário)
- [ ] .gitignore configurado:
  - [ ] /node_modules
  - [ ] /dist
  - [ ] .env
- [ ] README.md atualizado
- [ ] Git commit final antes do deploy

---

### [ ] Deploy Vercel (Recomendado)
**Tempo estimado**: 1h

**Checklist**:
- [ ] Criar conta Vercel
- [ ] Conectar repositório GitHub
- [ ] Configurar projeto:
  - [ ] Framework: Vite
  - [ ] Build command: `npm run build`
  - [ ] Output directory: `dist`
  - [ ] Install command: `npm install`
- [ ] Configurar domínio:
  - [ ] Usar subdomínio Vercel (.vercel.app)
  - [ ] OU configurar domínio customizado
- [ ] Variáveis de ambiente (se houver)
- [ ] Deploy automático configurado (main branch)
- [ ] HTTPS habilitado (automático)
- [ ] Testar URL de produção
- [ ] Verificar Analytics (Vercel Analytics)
- [ ] Configurar redirects (se necessário)

**Alternativas**:
- [ ] Netlify (similar ao Vercel)
- [ ] GitHub Pages (gratuito, mas limitado)
- [ ] Cloudflare Pages

---

### [ ] Pós-Deploy
**Tempo estimado**: 1h

**Checklist**:
- [ ] Testar site em produção:
  - [ ] Todas funcionalidades
  - [ ] Performance
  - [ ] Mobile
- [ ] Configurar monitoramento:
  - [ ] Google Analytics
  - [ ] Vercel Analytics
  - [ ] Hotjar (opcional)
- [ ] Submeter ao Google:
  - [ ] Google Search Console
  - [ ] Submeter sitemap
  - [ ] Verificar indexação
- [ ] Configurar DNS (se domínio próprio):
  - [ ] A record ou CNAME
  - [ ] Aguardar propagação
  - [ ] Testar domínio
- [ ] Certificado SSL verificado
- [ ] Compartilhar com cliente:
  - [ ] URL de produção
  - [ ] Credenciais (se houver)
  - [ ] Documentação básica
- [ ] Backup do código:
  - [ ] GitHub remoto
  - [ ] Backup local
  - [ ] Documentar versão

---

## 📊 RESUMO FASE 1

**Total estimado**: ~40-50 horas de desenvolvimento

**Divisão**:
- Componentes base: ~8h
- Layout: ~5h
- Seções: ~12h
- Otimizações: ~9h
- Testes: ~4h
- Deploy: ~3h
- Buffer/Imprevistos: ~10h

---

# FASE 2: BACKEND + ÁREA ADMINISTRATIVA

## 2.1 Planejamento Backend

### [ ] Setup Backend
**Tempo estimado**: 2h

**Checklist**:
- [ ] Criar pasta `backend/`
- [ ] Inicializar projeto Node.js
- [ ] Instalar Fastify
- [ ] Configurar estrutura MVC
- [ ] Setup TypeScript (opcional)
- [ ] Configurar ESLint/Prettier
- [ ] Git ignore

---

### [ ] Banco de Dados
**Tempo estimado**: 4h

**Checklist**:
- [ ] Escolher DB: **PostgreSQL** (recomendado)
- [ ] Instalar DB localmente
- [ ] Configurar ORM: **Prisma**
- [ ] Criar schema/models:
  - [ ] Users (admin)
  - [ ] Clients (clientes) ⭐ **NOVO**
  - [ ] Therapists (terapeutas) ⭐ **NOVO**
  - [ ] Services (categorias: massagens, banhos, tratamentos)
  - [ ] ServiceCategories (massagens/banhos/tratamentos) ⭐ **NOVO**
  - [ ] Bookings/Agendamentos
  - [ ] Settings
  - [ ] ChatbotConversations ⭐ **NOVO**
  - [ ] Blog posts (V2)
- [ ] Migrations
- [ ] Seeds (dados iniciais)
- [ ] Testar conexão

**Ver estrutura detalhada**: [AREA-ADMINISTRATIVA.md](especialistas/AREA-ADMINISTRATIVA.md)

---

### [ ] Autenticação
**Tempo estimado**: 4h

**Checklist**:
- [ ] JWT setup
- [ ] Hash de senhas (bcrypt)
- [ ] Login endpoint
- [ ] Logout
- [ ] Refresh token
- [ ] Middleware de autenticação
- [ ] Proteção de rotas
- [ ] Testes de auth

---

## 2.2 APIs Backend

### [ ] API de Serviços
**Checklist**:
- [ ] GET /api/services (listar todos)
- [ ] GET /api/services/:id (um serviço)
- [ ] POST /api/services (criar - admin)
- [ ] PUT /api/services/:id (atualizar - admin)
- [ ] DELETE /api/services/:id (deletar - admin)
- [ ] Upload de imagens
- [ ] Validação de dados (Zod ou Joi)

---

### [ ] API de Agendamentos
**Checklist**:
- [ ] POST /api/bookings (criar agendamento)
- [ ] GET /api/bookings (listar - admin)
- [ ] GET /api/bookings/:id (detalhes)
- [ ] PUT /api/bookings/:id (atualizar status)
- [ ] DELETE /api/bookings/:id (cancelar)
- [ ] Validação de horários disponíveis
- [ ] Email/SMS confirmação
- [ ] Notificações

---

### [ ] API de Clientes ⭐
**Checklist**:
- [ ] GET /api/clients (listar - admin)
- [ ] GET /api/clients/:id (detalhes)
- [ ] POST /api/clients (criar)
- [ ] PUT /api/clients/:id (atualizar)
- [ ] DELETE /api/clients/:id (desativar)
- [ ] GET /api/clients/:id/history (histórico de agendamentos)
- [ ] GET /api/clients/:id/stats (estatísticas)
- [ ] Busca por nome/telefone/email
- [ ] Filtros e ordenação
- [ ] Export Excel/CSV

---

### [ ] API de Terapeutas ⭐ **NOVO**
**Tempo estimado**: 3h

**Checklist**:
- [ ] GET /api/therapists (listar todos)
- [ ] GET /api/therapists/:id (um terapeuta)
- [ ] POST /api/therapists (criar - admin)
- [ ] PUT /api/therapists/:id (atualizar - admin)
- [ ] DELETE /api/therapists/:id (desativar - admin)
- [ ] Upload de foto
- [ ] Upload de certificados (múltiplos)
- [ ] GET /api/therapists/:id/schedule (agenda)
- [ ] PUT /api/therapists/:id/schedule (atualizar agenda)
- [ ] GET /api/therapists/:id/availability (horários disponíveis)
- [ ] POST /api/therapists/:id/dayoff (marcar folga)
- [ ] GET /api/therapists/:id/stats (estatísticas)
- [ ] Associação com serviços
- [ ] Validação de dados (Zod)
- [ ] Histórico de agendamentos
- [ ] Programa fidelidade (V2)

---

### [ ] API de Configurações
**Checklist**:
- [ ] GET /api/settings (geral)
- [ ] PUT /api/settings (atualizar - admin)
- [ ] Horários de funcionamento
- [ ] Feriados/bloqueios
- [ ] Configurações do site

---

### [ ] API de Contato
**Checklist**:
- [ ] POST /api/contact (formulário)
- [ ] Validação de dados
- [ ] Rate limiting (anti-spam)
- [ ] Envio de email
- [ ] Salvar em BD (opcional)

---

### [ ] API de Chatbot WhatsApp ⭐ **NOVO**
**Tempo estimado**: 6h

**Checklist**:
- [ ] Integração WhatsApp (Baileys ou API Oficial)
- [ ] Webhook para receber mensagens
- [ ] Sistema de fluxos de conversa
- [ ] POST /api/chatbot/webhook (receber mensagens)
- [ ] GET /api/chatbot/conversations (listar conversas - admin)
- [ ] GET /api/chatbot/conversations/:id (detalhes)
- [ ] POST /api/chatbot/send (enviar mensagem - admin)
- [ ] PUT /api/chatbot/conversations/:id/transfer (transferir para humano)
- [ ] Fluxo de agendamento automático:
  - [ ] Seleção de serviço
  - [ ] Seleção de terapeuta
  - [ ] Seleção de data/hora
  - [ ] Captura de dados do cliente
  - [ ] Confirmação de agendamento
  - [ ] Criação automática no banco
- [ ] Fluxo de informações:
  - [ ] Lista de serviços
  - [ ] Endereço e horários
  - [ ] Transferência para atendente
- [ ] Lembretes automáticos (24h antes)
- [ ] Confirmação de agendamento
- [ ] Cancelamento pelo cliente
- [ ] FAQ automático
- [ ] Salvar histórico de conversas
- [ ] Rate limiting (anti-spam)
- [ ] Métricas e analytics

**Funcionalidades Especiais**:
- [ ] Botões interativos (WhatsApp Business)
- [ ] Listas de opções
- [ ] Envio de localização (Google Maps)
- [ ] Envio de imagens (serviços)
- [ ] Templates de mensagem
- [ ] Horário de funcionamento do bot
- [ ] Mensagem fora do horário

**Ver fluxo completo**: [AREA-ADMINISTRATIVA.md](especialistas/AREA-ADMINISTRATIVA.md#chatbot-whatsapp)

---

## 2.3 Painel Administrativo

### [ ] Setup Admin Frontend
**Tempo estimado**: 2h

**Checklist**:
- [ ] Criar pasta `admin/` ou `backend/admin/`
- [ ] Vite + React (ou usar mesma estrutura)
- [ ] Tailwind CSS
- [ ] React Router
- [ ] Axios para API calls
- [ ] Estrutura de pastas

---

### [ ] Autenticação Admin
**Checklist**:
- [ ] Página de login
- [ ] Form validação
- [ ] Guardar token (localStorage/cookie)
- [ ] Axios interceptor (adicionar token)
- [ ] Protected routes
- [ ] Logout
- [ ] Redirect se não autenticado

---

### [ ] Dashboard
**Checklist**:
- [ ] Layout admin (sidebar + topbar)
- [ ] Página inicial com métricas:
  - [ ] Agendamentos hoje
  - [ ] Agendamentos semana
  - [ ] Clientes totais
  - [ ] Receita (V2)
- [ ] Gráficos (Chart.js ou Recharts)
- [ ] Navegação

---

### [ ] Gestão de Serviços
**Checklist**:
- [ ] Listar serviços (tabela)
- [ ] Criar serviço (form)
- [ ] Editar serviço
- [ ] Deletar serviço (confirmação)
- [ ] Upload de imagem
- [ ] Preview
- [ ] Validação
- [ ] Ordenação/Filtros

---

### [ ] Gestão de Agendamentos
**Checklist**:
- [ ] Calendário visual (FullCalendar.js)
- [ ] Lista de agendamentos
- [ ] Filtros (data, status, serviço)
- [ ] Criar agendamento manual
- [ ] Editar agendamento
- [ ] Cancelar agendamento
- [ ] Marcar como concluído
- [ ] Notificar cliente
- [ ] Histórico
- [ ] Export (CSV/PDF)

---

### [ ] Gestão de Clientes ⭐
**Tempo estimado**: 4h

**Checklist**:
- [ ] Listar clientes (tabela)
- [ ] Buscar cliente (nome, telefone, email)
- [ ] Filtros (status, período, gasto)
- [ ] Ver detalhes (perfil completo)
- [ ] Histórico de agendamentos
- [ ] Editar informações
- [ ] Upload de foto (opcional)
- [ ] Notas internas (timeline)
- [ ] Estatísticas (frequência, gasto total, última visita)
- [ ] Preferências (serviços favoritos, alergias)
- [ ] Tags/Categorização
- [ ] Export Excel/CSV
- [ ] Desativar/Bloquear cliente

---

### [ ] Gestão de Terapeutas ⭐ **NOVO**
**Tempo estimado**: 5h

**Checklist Listagem**:
- [ ] Cards com foto, nome, especialidade
- [ ] Status visual (ativo, férias, inativo)
- [ ] Estatísticas rápidas (total atendimentos, avaliação)
- [ ] Busca por nome
- [ ] Filtros por status
- [ ] Ações: Ver, Editar, Agenda, Desativar

**Checklist Detalhes**:
- [ ] Foto grande
- [ ] Bio completa
- [ ] Certificações (listagem + download)
- [ ] Serviços que realiza
- [ ] Agenda semanal (visualização)
- [ ] Estatísticas detalhadas
- [ ] Próximos agendamentos
- [ ] Histórico de atendimentos
- [ ] Avaliações recebidas
- [ ] Cálculo de comissões

**Checklist Cadastro/Edição**:
- [ ] Form validado (React Hook Form + Zod)
- [ ] Upload de foto (crop)
- [ ] Dados pessoais (nome, email, telefone, CPF)
- [ ] Especialidade
- [ ] Bio (textarea)
- [ ] Upload de certificados (múltiplos, drag & drop)
- [ ] Seleção de serviços (multi-select ou checkboxes)
- [ ] Configuração de agenda:
  - [ ] Por dia da semana
  - [ ] Horário início/fim
  - [ ] Intervalos
  - [ ] Checkbox ativo/inativo por dia
- [ ] Configuração de comissões:
  - [ ] Tipo (percentual ou fixo)
  - [ ] Valor
- [ ] Status (ativo/inativo/férias)
- [ ] Validação e feedback

**Checklist Gestão de Agenda**:
- [ ] Calendário mensal do terapeuta
- [ ] Visualização de agendamentos confirmados
- [ ] Marcar folgas pontuais (date picker)
- [ ] Marcar período de férias (date range)
- [ ] Bloquear horários específicos
- [ ] Ver disponibilidade em tempo real
- [ ] Editar horários de trabalho
- [ ] Histórico de alterações

---

### [ ] Painel de Chatbot WhatsApp ⭐ **NOVO**
**Tempo estimado**: 3h

**Checklist**:
- [ ] Dashboard do chatbot:
  - [ ] Conversas ativas (em tempo real)
  - [ ] Total de mensagens hoje/semana/mês
  - [ ] Agendamentos feitos pelo bot
  - [ ] Taxa de conversão
  - [ ] Horários de pico
- [ ] Lista de conversas:
  - [ ] Tabela/Cards com conversas
  - [ ] Status (bot/humano/finalizada)
  - [ ] Última mensagem
  - [ ] Timestamp
  - [ ] Cliente (se identificado)
- [ ] Detalhes da conversa:
  - [ ] Histórico completo de mensagens
  - [ ] Dados do cliente (se capturado)
  - [ ] Fluxo percorrido
  - [ ] Botão "Assumir conversa"
  - [ ] Responder manualmente
  - [ ] Marcar como resolvida
  - [ ] Adicionar notas internas
- [ ] Chat interface (quando assumido):
  - [ ] Interface de chat em tempo real
  - [ ] Enviar mensagem
  - [ ] Enviar imagem
  - [ ] Enviar localização
  - [ ] Templates rápidos
  - [ ] Emoji picker
- [ ] Configurações do bot:
  - [ ] Ativar/Desativar bot
  - [ ] Horário de funcionamento
  - [ ] Mensagem de boas-vindas
  - [ ] Mensagem fora do horário
  - [ ] Templates de mensagens
  - [ ] FAQ (perguntas e respostas)
  - [ ] Palavras-chave e respostas
- [ ] Analytics:
  - [ ] Gráficos de mensagens por período
  - [ ] Taxa de resolução automática
  - [ ] Tempo médio de resposta
  - [ ] Temas mais perguntados
  - [ ] Horários de maior volume

---

### [ ] Configurações
**Checklist**:
- [ ] Editar informações do site:
  - [ ] Nome: Mali Spa
  - [ ] Email: **malispabr@gmail.com** ⭐
  - [ ] Telefone/WhatsApp: **83 99661-9603** ⭐
  - [ ] Instagram: **@malispa_br** ⭐
  - [ ] Endereço completo
  - [ ] Horário funcionamento
  - [ ] Logo (upload)
- [ ] Gerenciar horários:
  - [ ] Dias de atendimento
  - [ ] Horários disponíveis
  - [ ] Bloqueios/feriados
- [ ] Configurar notificações
- [ ] Gerenciar usuários admin (V2)
- [ ] Backup de dados

---

### [ ] Conteúdo (Blog - V2)
**Checklist**:
- [ ] Listar posts
- [ ] Criar post (WYSIWYG editor)
- [ ] Editar post
- [ ] Deletar post
- [ ] Upload de imagens
- [ ] Categorias/Tags
- [ ] Publicar/Rascunho
- [ ] SEO (meta title, description)

---

## 2.4 Deploy Backend

### [ ] Preparação
**Checklist**:
- [ ] Variáveis de ambiente (.env)
- [ ] Configurar para produção
- [ ] Testar localmente
- [ ] Documentar API (Swagger/Postman)

---

### [ ] Deploy (Railway/Render)
**Checklist**:
- [ ] Criar conta Railway ou Render
- [ ] Conectar repositório
- [ ] Configurar build
- [ ] Adicionar variáveis de ambiente
- [ ] Provisionar banco de dados
- [ ] Executar migrations
- [ ] Testar API em produção
- [ ] Configurar domínio (api.malispa.com)
- [ ] HTTPS/SSL
- [ ] CORS configurado

---

### [ ] Deploy Admin
**Checklist**:
- [ ] Build do admin frontend
- [ ] Deploy separado (admin.malispa.com)
- [ ] Ou deploy junto com API
- [ ] Testar acesso
- [ ] Credenciais iniciais

---

# FASE 3: INTEGRAÇÕES E FEATURES AVANÇADAS

## 3.1 Sistema de Agendamento Online

### [ ] Calendário Público
**Checklist**:
- [ ] Widget de agendamento no site
- [ ] Seleção de serviço
- [ ] Calendário com horários disponíveis
- [ ] Informações do cliente
- [ ] Confirmação
- [ ] Email/SMS confirmação
- [ ] Lembrete 24h antes
- [ ] Cancelamento pelo cliente

---

## 3.2 Gift Cards / Vouchers

### [ ] Sistema de Gift Cards
**Checklist**:
- [ ] Compra online (Stripe/PagSeguro)
- [ ] Gerar código único
- [ ] Enviar por email
- [ ] Validar código
- [ ] Usar no agendamento
- [ ] Controle de saldo
- [ ] Validade
- [ ] Relatórios

---

## 3.3 Blog / Conteúdo

### [ ] Blog Público
**Checklist**:
- [ ] Página de listagem
- [ ] Página de post individual
- [ ] Categorias
- [ ] Busca
- [ ] Related posts
- [ ] Compartilhamento social
- [ ] Comentários (Disqus)
- [ ] Newsletter (Mailchimp)

---

## 3.4 Multi-idioma

### [ ] Internacionalização
**Checklist**:
- [ ] Setup i18n (react-i18next)
- [ ] Traduzir textos (PT/EN)
- [ ] Seletor de idioma
- [ ] Persistir preferência
- [ ] URLs por idioma
- [ ] SEO multilíngue

---

## 3.5 Analytics e Marketing

### [ ] Analytics
**Checklist**:
- [ ] Google Analytics 4
- [ ] Facebook Pixel
- [ ] Hotjar (heatmaps)
- [ ] Event tracking
- [ ] Conversion tracking
- [ ] Relatórios customizados

---

### [ ] Email Marketing
**Checklist**:
- [ ] Integrar Mailchimp/SendGrid
- [ ] Capturar emails
- [ ] Automações:
  - [ ] Boas-vindas
  - [ ] Lembretes
  - [ ] Promoções
  - [ ] Aniversário

---

## 3.6 Integrações

### [ ] Pagamentos
**Checklist**:
- [ ] Stripe ou PagSeguro
- [ ] Checkout online
- [ ] Gift cards
- [ ] Recibo/Nota fiscal

---

### [ ] Google Maps
**Checklist**:
- [ ] API Key
- [ ] Mapa interativo
- [ ] Direções
- [ ] Embed no site

---

### [ ] Redes Sociais
**Checklist**:
- [ ] Instagram feed
- [ ] Compartilhamento
- [ ] Reviews do Google
- [ ] Facebook reviews

---

# 📋 MILESTONES E PRAZOS

## Milestone 1: MVP Frontend ✅
**Prazo**: 3-4 semanas
**Entregáveis**:
- Landing page completa
- Responsiva
- Otimizada
- Deploy em produção

## Milestone 2: Backend + Admin
**Prazo**: 3-4 semanas após Milestone 1
**Entregáveis**:
- API funcionando
- Painel admin básico
- CRUD de serviços e agendamentos
- Deploy

## Milestone 3: Features Avançadas
**Prazo**: 4-6 semanas após Milestone 2
**Entregáveis**:
- Agendamento online
- Gift cards
- Blog
- Integrações

---

# 🎯 PRIORIZAÇÃO

## Must Have (Obrigatório - MVP)
- Landing page completa
- WhatsApp integration
- Informações de contato
- Responsivo
- Performance 90+

## Should Have (Importante - V1.5)
- Backend + Admin básico
- Gestão de agendamentos
- Gestão de serviços

## Could Have (Desejável - V2)
- Agendamento online público
- Gift cards
- Blog
- Multi-idioma

## Won't Have (Não agora - V3+)
- App mobile
- Programa fidelidade complexo
- Marketplace de produtos

---

# 📊 TRACKING DE PROGRESSO

## Frontend Landing Page
```
Setup e Planejamento:        ████████████████ 100%
Componentes Base:            ░░░░░░░░░░░░░░░░   0%
Layout:                      ░░░░░░░░░░░░░░░░   0%
Seções:                      ░░░░░░░░░░░░░░░░   0%
Otimizações:                 ░░░░░░░░░░░░░░░░   0%
Deploy:                      ░░░░░░░░░░░░░░░░   0%
```

**PROGRESSO GERAL FRONTEND**: 16% (Setup completo)

---

**Última atualização**: 29 de Janeiro de 2026
**Versão do documento**: 1.0
**Próxima revisão**: Após conclusão Milestone 1
