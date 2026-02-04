# Plano de Layout & UX Guidelines - Mali Spa

**Versão:** 2.0.0
**Data Criação:** 29 de Janeiro de 2026
**Última Atualização:** 03 de Fevereiro de 2026
**Especialistas:** Design System + UX/UI Design

---

## 🎯 Objetivo

Criar um layout padronizado, responsivo e com excelente UX que transmita a essência do Mali Spa: **bem-estar, natureza e cuidado personalizado**, garantindo uma jornada fluida que converta visitantes em clientes.

---

## 📊 Persona e Jornada do Usuário

### Persona Principal: Ana, 35 anos
- **Profissão:** Empresária
- **Objetivo:** Relaxar e aliviar o estresse do trabalho
- **Comportamento:** Busca pelo celular, valoriza experiências premium
- **Dor:** Falta de tempo, precisa de agendamento rápido
- **Ganho esperado:** Bem-estar, relaxamento, cuidado personalizado

### Jornada do Usuário
```
1. DESCOBERTA → 2. EXPLORAÇÃO → 3. DECISÃO → 4. AÇÃO → 5. AGENDAMENTO
   (Hero)        (Serviços)      (Sobre)     (Contato)  (WhatsApp)
```

**Tempo esperado:** 2-3 minutos da descoberta ao agendamento

---

## 🧭 Princípios de Design & UX

### 1. Mobile-First Obrigatório
- 70% dos acessos vêm de mobile
- Design otimizado para telas pequenas primeiro
- Touch targets mínimos de 44x44px
- Espaçamento consistente: 4px, 8px, 16px, 24px, 32px, 48px, 64px

### 2. Conversão via WhatsApp
- CTA WhatsApp sempre visível (floating button)
- Mensagens pré-preenchidas contextuais
- Máximo 2 cliques para agendamento

### 3. Hierarquia Visual Clara
```
Hero (Impacto) → Serviços (Valor) → Sobre (Confiança) → Contato (Ação)
```

### 4. Velocidade > Beleza
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1

### 5. Acessibilidade (WCAG 2.1 AA)
- Contraste mínimo 4.5:1 (texto normal)
- Contraste mínimo 3:1 (texto grande, ícones)
- Navegação por teclado funcional
- Screen reader friendly
- HTML semântico

### 6. Grid System
- Container max-width 1280px
- Padding lateral responsivo
- Bordas: Arredondamento suave (8px, 12px, 16px, 20px, 24px)

---

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary-brown: #311303      /* Marrom escuro - CTA, títulos importantes */
--primary-brown-light: #5a3825 /* Hover states */
--primary-brown-dark: #1a0a01  /* Textos escuros */

--secondary-mint: #e6efee      /* Verde menta - Fundos, destaques */
--secondary-mint-light: #f5faf9 /* Seções alternadas */
--secondary-mint-dark: #d0e5e2  /* Bordas, divisores */

/* Cores de Apoio - Mali Spa Identity */
--gold: #C9A050               /* Dourado - Destaques premium */
--gold-light: #D4B46A         /* Hover dourado */
--gold-dark: #B08C3C          /* Sombras douradas */

--brown: #5C4033              /* Marrom médio */
--brown-light: #8B7355        /* Fundos claros */
--brown-dark: #3D2A22         /* Textos escuros */

--beige: #F5F0E8              /* Bege - Fundos suaves */
--beige-light: #FAF7F2        /* Alternância */
--beige-dark: #E8DFD3         /* Bordas */

/* Cores Neutras */
--white: #ffffff
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-500: #6b7280
--gray-900: #111827

/* Cores de Ação */
--whatsapp: #25d366
--success: #10b981
--error: #ef4444
--warning: #f59e0b
--info: #3b82f6
```

---

## ✍️ Tipografia

```css
/* Famílias */
font-family: 'Poppins', sans-serif;  /* Títulos */
font-family: 'Inter', sans-serif;    /* Corpo */

/* Escala Tipográfica */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Pesos */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.1;
--leading-normal: 1.5;
--leading-relaxed: 1.6;
```

**Estilos Pré-definidos:**
```css
H1: Poppins Bold, 3rem (48px), leading-tight
H2: Poppins Bold, 2.25rem (36px), leading-tight
H3: Poppins SemiBold, 1.875rem (30px), leading-normal
H4: Poppins SemiBold, 1.5rem (24px), leading-normal
Body: Inter Normal, 1rem (16px), leading-relaxed
Body Large: Inter Normal, 1.125rem (18px), leading-relaxed
Caption: Inter Normal, 0.75rem (12px), leading-normal
```

---

## 📐 Sistema de Espaçamento

### Hierarquia de Espaços

```javascript
// Dentro de componentes
gap-2   // 8px  - Entre ícone e texto
gap-4   // 16px - Entre elementos relacionados
gap-6   // 24px - Entre grupos de elementos
gap-8   // 32px - Entre blocos de conteúdo

// Entre seções (PADRÃO OBRIGATÓRIO)
py-12   // 48px - Mobile
py-16   // 64px - Tablet (md)
py-20   // 80px - Desktop (lg)

// Margem Interna de Containers
px-4    // 16px - Mobile
px-6    // 24px - Tablet
px-8    // 32px - Desktop

// Grid Gaps
gap-4 md:gap-6 lg:gap-8  // 16px → 24px → 32px
```

**⚠️ IMPORTANTE:** Todas as seções DEVEM usar `py-12 md:py-16 lg:py-20` para consistência.

---

## 📱 Responsividade

### Breakpoints Tailwind
```javascript
xs:  '0px'     // Mobile pequeno (< 640px)
sm:  '640px'   // Tablet pequeno
md:  '768px'   // Tablet
lg:  '1024px'  // Desktop pequeno
xl:  '1280px'  // Desktop
2xl: '1536px'  // Desktop extra grande
```

### Comportamentos por Device

**Mobile (< 640px):**
- Menu: hamburger
- Hero: 80vh, texto menor
- Grid: 1 coluna
- Padding: 16px lateral
- Títulos: text-2xl (24px)
- Touch targets: mínimo 44px

**Tablet (640px - 1024px):**
- Menu: links visíveis ou hamburger
- Grid: 2 colunas
- Padding: 24px lateral
- Títulos: text-3xl (30px)

**Desktop (> 1024px):**
- Menu: completo horizontal
- Grid: 3 colunas
- Padding: 32px lateral
- Títulos: text-4xl (36px)
- Container: max-w-7xl (1280px)

---

## 🏗️ Estrutura da Landing Page

### 1. Header (Fixo) - 80px altura

```
┌─────────────────────────────────────────┐
│  [Logo]         [Menu]    [Idioma]      │
└─────────────────────────────────────────┘
```

**Componentes:**
- Logo Mali Spa (esquerda, 64x64px)
- Menu navegação: Início | Sobre | Serviços | Contato
- Seletor de idioma (PT/EN/ES)
- Background: transparente → branco ao scroll (20px)
- Shadow: none → md ao scroll
- Z-index: 50

**Estados:**
- Normal: bg-transparent, text-white
- Scrolled: bg-white, text-gray-700, shadow-md

**UX:**
- Sticky top-0
- Smooth scroll para seções
- Menu mobile: slide from right
- Focus states visíveis

---

### 2. Hero Section - 100vh

```
┌─────────────────────────────────────────┐
│                                         │
│        [Background Image/Gradient]      │
│                                         │
│         [Logo Mali Spa Grande]          │
│      "Um convite ao cuidado"            │
│   Descrição breve e emocional (2 lin)   │
│                                         │
│   [CTA: Ver Experiências] (dourado)     │
│           [Scroll ↓]                    │
└─────────────────────────────────────────┘
```

**Características:**
- Height: 100vh (desktop), 80vh (mobile)
- Background: imagem `/hero-massagem.jpg` com overlay
- Overlay: gradiente marrom/dourado 50-70% opacity
- Texto: centralizado, branco
- Logo: 256px desktop, 192px mobile
- CTA: gradiente dourado, 48px altura, escala 1.05 hover

**Métricas de Sucesso:**
- Tempo de permanência: > 5 segundos
- Taxa de scroll: > 80%
- Cliques no CTA: > 15%

**Checklist UX:**
- [ ] Logo visível acima da dobra
- [ ] Texto legível em qualquer dispositivo (contraste > 4.5:1)
- [ ] CTA destaque com contraste
- [ ] Background evoca relaxamento
- [ ] Loading eager para imagem

---

### 3. Services Section

```
┌─────────────────────────────────────────┐
│      Nossas Experiências                │
│      [Subtítulo]                        │
│                                         │
│  ┌─────┐  ┌─────┐  ┌─────┐            │
│  │Card │  │Card │  │Card │            │
│  └─────┘  └─────┘  └─────┘            │
│  ┌─────┐  ┌─────┐  ┌─────┐            │
│  │Card │  │Card │  │Card │            │
│  └─────┘  └─────┘  └─────┘            │
└─────────────────────────────────────────┘
```

**Grid:**
- Desktop: 3 colunas (repeat(3, 1fr))
- Tablet: 2 colunas (repeat(2, 1fr))
- Mobile: 1 coluna
- Gap: gap-4 md:gap-6 lg:gap-8
- Background: gradiente beige
- Padding: py-12 md:py-16 lg:py-20

**Card de Serviço - Anatomia Detalhada:**
```
┌───────────────────────┐
│  [Imagem 16:9]        │ ← 224px altura, object-cover
│  [Badge Categoria]    │ ← Absolute top-4 left-4
├───────────────────────┤
│ Título Serviço        │ ← H3, font-heading bold
│ "Slogan opcional"     │ ← Italic, text-gold-dark
│                       │
│ ⏱ 90 minutos          │ ← Ícone dourado + texto
│ Descrição resumida... │ ← Max 3 linhas (line-clamp-3)
│                       │
│ ┌─────────────────┐   │
│ │ R$ 180 | R$ 320 │   │ ← Box beige-light, destaque
│ │  Indiv.   Casal │   │
│ └─────────────────┘   │
│                       │
│ [Agendar Agora →]     │ ← CTA WhatsApp verde
└───────────────────────┘
```

**Hierarquia de Informação:**
1. Imagem (atração visual)
2. Badge categoria (identificação rápida)
3. Título (nome do serviço)
4. Slogan (diferencial emocional)
5. Duração (praticidade)
6. Descrição (benefícios)
7. Preços (decisão)
8. CTA (ação)

**Interações:**
- Hover card: translateY(-4px) + shadow-2xl
- Hover imagem: scale-110 (300ms)
- Hover CTA: scale-105
- Focus: ring-2 ring-gold

**Checklist UX:**
- [ ] Imagens consistentes (mesma proporção 16:9)
- [ ] Preços sempre visíveis (sem "sob consulta")
- [ ] CTA com mensagem WhatsApp pré-preenchida
- [ ] Badge de categoria clara (Day Spa / Experience)
- [ ] Descrição persuasiva (max 80 chars)
- [ ] Loading lazy para imagens

---

### 4. About Section

```
┌─────────────────────────────────────────┐
│         Sobre o Mali Spa                │
│         [Subtítulo]                     │
│                                         │
│  ┌─────────┐  ┌─────────┐              │
│  │Imagem 1 │  │Imagem 2 │              │
│  └─────────┘  └─────────┘              │
│                                         │
│  ┌───────────────────────────┐         │
│  │  Texto Descritivo         │         │
│  │  [3 parágrafos]           │         │
│  └───────────────────────────┘         │
│                                         │
│  [4 Diferenciais em Grid Horizontal]   │
│  💆 Escuta  🌿 Técnicas  👤 Persona    │
└─────────────────────────────────────────┘
```

**Layout:**
- 2 imagens lado a lado (md:grid-cols-2)
- Imagens: 400px altura, rounded-2xl
- Texto: card branco, p-6 md:p-8
- Diferenciais: grid 1 → 2 → 4 colunas
- Background: gradiente beige
- Padding: py-12 md:py-16 lg:py-20

**Diferenciais - Estrutura Card:**
```
┌──────────────┐
│  ┌────────┐  │ ← Círculo dourado 64px
│  │ Ícone  │  │ ← Branco, 24px
│  └────────┘  │
│              │
│   Título     │ ← Font-heading bold, brown-dark
│   Descrição  │ ← 2-3 linhas, text-xs, gray-700
└──────────────┘
```

**Background Diferenciais:**
- Imagem do ambiente com overlay escuro (75-85% opacity)
- Cards sobre imagem: bg-white com leve sombra

**Tom de Comunicação:**
- Primeira pessoa do plural: "Acreditamos", "Oferecemos"
- Linguagem acolhedora, não técnica
- Foco em benefícios emocionais

**Checklist UX:**
- [ ] Imagens do ambiente real (não stock photos)
- [ ] Texto autêntico refletindo filosofia Mali
- [ ] 4 diferenciais visuais e escaneáveis
- [ ] Ícones brancos em círculos dourados (contraste > 6:1)
- [ ] Overlay garante legibilidade

---

### 5. Contact Section

```
┌─────────────────────────────────────────┐
│         Entre em Contato                │
│                                         │
│ ┌─────────┬─────────┬─────────┐        │
│ │WhatsApp │Horários │Contatos │        │
│ │[Destaq] │Seg-Dom  │Insta/Tel│        │
│ └─────────┴─────────┴─────────┘        │
│                                         │
│ ┌───────────────────────────────┐      │
│ │  [Mapa Google Maps]           │      │
│ │  Height: 400px                │      │
│ └───────────────────────────────┘      │
└─────────────────────────────────────────┘
```

**Layout em 3 Cards:**
- Grid: 1 → 2 → 3 colunas
- Gap: gap-6
- Cards: bg-white, rounded-2xl, shadow-xl, p-6
- Mapa: full width abaixo dos cards

**Card WhatsApp (Prioridade 1):**
```
┌──────────────────┐
│ 🟢 WhatsApp      │ ← Ícone dourado 48px
│                  │
│ (83) 99661-9603  │ ← Text-2xl bold
│ Atendimento...   │ ← Text-sm
│                  │
│ [Chamar no WA →] │ ← Button verde #25d366
└──────────────────┘
```

**Card Horários:**
- Tabela: Dias | Horários
- Bordas entre linhas
- Box destaque para observação

**Card Outros Contatos:**
- Telefone (clicável tel:)
- Email (clicável mailto:)
- Instagram (target="_blank")
- Hover: bg-beige transition

**Mapa:**
- Aspect ratio 21:9
- Lazy loading
- Iframe Google Maps
- Botão "Abrir no Maps" desktop
- Botão full width mobile

**Checklist UX:**
- [ ] WhatsApp é o CTA mais visível
- [ ] Todos os contatos clicáveis
- [ ] Horários claros e sem ambiguidade
- [ ] Mapa carregado com lazy loading
- [ ] Endereço completo com referência
- [ ] Ícones dourados em fundos brancos (contraste OK)

---

### 6. Footer

```
┌─────────────────────────────────────────┐
│  [Background Imagem + Overlay Escuro]   │
│                                         │
│  ┌──────┬──────────┬────────────┐      │
│  │Logo &│Links     │Contato     │      │
│  │Texto │Navegação │Info        │      │
│  └──────┴──────────┴────────────┘      │
│                                         │
│  ───────────────────────────────        │
│  © 2026 Mali Spa - Todos direitos      │
└─────────────────────────────────────────┘
```

**Características:**
- Background: imagem `/footer-spa-rosas.jpg`
- Overlay: gradiente marrom escuro 75-85% opacity
- Padding: py-12 md:py-16
- Grid: 1 → 3 colunas
- Texto: branco (#ffffff) e verde menta (#e6efee)

**Coluna 1: Logo & Tagline**
- Logo ou título "Mali Spa"
- Tagline
- Descrição breve

**Coluna 2: Navegação**
- Links para seções
- Hover: translate-x-1 + cor branca

**Coluna 3: Contato**
- WhatsApp, Telefone, Email
- Instagram, Localização
- Ícones verde menta → branco hover

**Copyright:**
- Border-top branco 10% opacity
- Centralizado, text-sm

**Checklist UX:**
- [ ] Contraste mínimo 4.5:1 (texto sobre overlay)
- [ ] Links com hover states claros
- [ ] Smooth scroll funcional
- [ ] Ícones claros em fundo escuro
- [ ] Social links abrem em nova aba

---

## 🎨 Componentes Especiais

### WhatsApp Floating Button

```
┌──────┐
│  WA  │ ← Botão verde, sombra grande
└──────┘
```

**Características:**
- Position: fixed
- Bottom: 20px, Right: 20px
- Size: 56x56px (mobile), 64x64px (desktop)
- Background: #25d366
- Shadow: xl + pulse animation
- Z-index: 9999
- Ícone: WhatsApp branco 24px
- Hover: scale-110 + shadow-2xl
- Tooltip: "Agendar no WhatsApp"

**Animação:**
```css
@keyframes pulse-subtle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

---

## 🎨 Micro-interações e Feedback

### Botões
```css
Estado Normal → Hover → Active → Loading
(estático)   (scale-105) (scale-98) (spinner)

Timing:
- Hover: 200ms ease-in-out
- Active: 150ms ease-out
- Loading: Spinner 20px, cor mantida
```

### Cards
```css
Normal → Hover
(shadow-md, y=0) → (shadow-2xl, y=-4px)
Duration: 300ms ease-in-out
```

### Links
```css
Normal → Hover
(cor base) → (cor destaque + underline opcional)
Duration: 200ms ease
```

### Imagens
```css
Normal → Hover (dentro de card)
(scale-100) → (scale-110)
Duration: 300ms ease-in-out
Overflow: hidden (no container)
```

---

## ♿ Acessibilidade (A11Y)

### Checklist WCAG 2.1 AA

#### Perceptível
- [ ] Contraste mínimo 4.5:1 (texto normal < 18px)
- [ ] Contraste mínimo 3:1 (texto grande > 18px bold ou 24px)
- [ ] Contraste mínimo 3:1 (ícones e gráficos)
- [ ] Alt text descritivo em todas as imagens
- [ ] Vídeos com legendas (se houver)
- [ ] Sem informação apenas por cor

#### Operável
- [ ] Navegação por teclado completa (Tab)
- [ ] Tab order lógico (top → bottom, left → right)
- [ ] Skip to content link (opcional)
- [ ] Focus states visíveis (ring-2 ring-gold)
- [ ] Sem keyboard traps
- [ ] Tempo suficiente para interações

#### Compreensível
- [ ] Linguagem clara e simples (nível leitura médio)
- [ ] Erros de formulário descritivos
- [ ] Labels em todos os inputs
- [ ] Idioma da página declarado (lang="pt-BR")
- [ ] Navegação consistente

#### Robusto
- [ ] HTML semântico (header, nav, main, section, footer)
- [ ] ARIA labels onde necessário
- [ ] Landmarks para regiões
- [ ] Headings hierárquicos (H1 → H2 → H3)
- [ ] Formulários acessíveis

### ARIA Labels Importantes

```html
<!-- Botão sem texto visível -->
<button aria-label="Abrir menu de navegação">
  <FaBars />
</button>

<!-- Link externo -->
<a
  href="https://instagram.com/..."
  target="_blank"
  aria-label="Abrir Instagram do Mali Spa em nova aba"
>
  <FaInstagram />
</a>

<!-- Região de navegação -->
<nav aria-label="Navegação principal">
  ...
</nav>

<!-- Ícone decorativo -->
<FaClock aria-hidden="true" />
<span>90 minutos</span>

<!-- Floating button -->
<a
  href="..."
  aria-label="Agendar no WhatsApp"
  className="floating-whatsapp"
>
  <FaWhatsapp aria-hidden="true" />
</a>
```

---

## 🖼️ Imagens e Mídia

### Regras de Imagens

**1. Formato:**
- WebP + fallback JPEG (futuro)
- PNG apenas para logo/ícones com transparência
- JPG para fotos (qualidade 80-85%)

**2. Tamanhos Responsivos (futuro):**
```html
<img
  srcset="
    service-mobile.jpg 640w,
    service-tablet.jpg 1024w,
    service-desktop.jpg 1920w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  src="service-desktop.jpg"
  alt="Massagem relaxante no Mali Spa"
/>
```

**3. Lazy Loading:**
```html
<!-- Hero Section -->
<img loading="eager" src="/hero.jpg" />

<!-- Above fold -->
<img loading="eager" src="/logo.png" />

<!-- Below fold -->
<img loading="lazy" src="/service.jpg" />
```

**4. Alt Text:**
```html
✅ BOM:
<img alt="Cliente relaxando durante massagem de pedras quentes no Mali Spa" />
<img alt="Logo Mali Spa" />

❌ RUIM:
<img alt="imagem1" />
<img alt="" /> (só se decorativo)
```

**5. Aspect Ratios:**
- Hero: livre (object-cover)
- Cards de serviço: 16:9 (h-56 md:h-48)
- About images: livre (h-[400px])
- Depoimentos (futuro): 1:1 (avatar)
- Logo: 1:1 (64x64, 256x256)

**6. Otimização:**
- Máximo 200KB por imagem
- Compressão lossy 80-85%
- Dimensões: 2x o tamanho de exibição

---

## 🎯 Padrões de CTA (Call-to-Action)

### Hierarquia de CTAs

```
Primário    → Agendar Agora (WhatsApp #25d366)
Secundário  → Ver Experiências (Gradiente dourado)
Terciário   → Saiba Mais (Link text-gold + seta)
Floating    → WhatsApp fixo (sempre visível)
```

### Textos de CTA (Do's & Don'ts)

#### ✅ DO's (Ação + Valor/Urgência)
- "Agendar Agora"
- "Chamar no WhatsApp"
- "Ver Todas as Experiências"
- "Fale Conosco"
- "Conheça o Mali Spa"

#### ❌ DON'Ts (Genéricos)
- "Clique aqui"
- "Saiba mais" (sem contexto)
- "Enviar"
- "Ok"
- "Ver"

### Posicionamento de CTAs

1. **Hero:** 1 CTA primário centralizado (Ver Experiências)
2. **Serviços:** 1 CTA por card (Agendar Agora - WhatsApp)
3. **About:** Nenhum CTA direto
4. **Contact:** 1 CTA principal WhatsApp + CTAs secundários
5. **Floating:** WhatsApp sempre visível (z-index 9999)

**Regra:** Máximo 1 CTA primário por seção para evitar decisão paralisia.

---

## 🔍 SEO e Conteúdo

### Meta Tags Essenciais (index.html)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary Meta Tags -->
  <title>Mali Spa - Terapias Holísticas em João Pessoa | Tambaú</title>
  <meta name="title" content="Mali Spa - Um convite ao cuidado">
  <meta name="description" content="Descubra o Mali Spa em Tambaú, João Pessoa. Massagens relaxantes, terapias holísticas e cuidado personalizado. Agende agora pelo WhatsApp!">
  <meta name="keywords" content="spa joão pessoa, massagem tambaú, terapias holísticas pb, day spa joão pessoa, massagem relaxante, bem-estar joão pessoa">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://malispa.com.br/">
  <meta property="og:title" content="Mali Spa - Um convite ao cuidado">
  <meta property="og:description" content="Terapias holísticas e massagens em João Pessoa">
  <meta property="og:image" content="https://malispa.com.br/og-image.jpg">
  <meta property="og:locale" content="pt_BR">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://malispa.com.br/">
  <meta property="twitter:title" content="Mali Spa - Um convite ao cuidado">
  <meta property="twitter:description" content="Terapias holísticas e massagens em João Pessoa">
  <meta property="twitter:image" content="https://malispa.com.br/og-image.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <!-- Fonts Preload -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
```

### Schema.org Markup (JSON-LD)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Mali Spa",
  "description": "Terapias holísticas que combinam técnicas ancestrais com escuta presente e personalizada",
  "url": "https://malispa.com.br",
  "telephone": "+55-83-99661-9603",
  "email": "contato@malispa.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Nossa Senhora dos Navegantes, 431",
    "addressLocality": "João Pessoa",
    "addressRegion": "PB",
    "postalCode": "58039-110",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-7.1166",
    "longitude": "-34.8329"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "image": "https://malispa.com.br/logo-mali-spa.png",
  "sameAs": [
    "https://www.instagram.com/malisppa_br"
  ]
}
</script>
```

### Hierarquia de Headings

```html
<!-- 1 H1 por página -->
<h1>Mali Spa - Um convite ao cuidado</h1>

<!-- H2 para seções principais -->
<h2>Nossas Experiências de Bem-Estar</h2>
<h2>Sobre o Mali Spa</h2>
<h2>Entre em Contato</h2>

<!-- H3 para cards/subsecções -->
<h3>Massagem Relaxante</h3>
<h3>Nossos Diferenciais</h3>

<!-- H4 para detalhes -->
<h4>Escuta Presente e Personalizada</h4>
```

---

## 📊 Métricas de UX e Performance

### KPIs a Monitorar

**1. Engajamento:**
- Bounce rate: < 40%
- Tempo médio na página: > 2 minutos
- Scroll depth: > 75%
- Páginas por sessão: > 1.5

**2. Conversão:**
- Taxa de clique em CTAs: > 15%
- Taxa de clique no WhatsApp: > 10%
- Taxa de abertura do mapa: > 5%
- Agendamentos via WhatsApp: > 3% do tráfego

**3. Performance (Lighthouse):**
- Performance Score: > 90
- First Contentful Paint: < 1.5s
- Speed Index: < 2.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1
- Largest Contentful Paint: < 2.5s

**4. Acessibilidade:**
- Lighthouse Accessibility: 100
- Erros de contraste: 0
- ARIA issues: 0
- Elementos sem labels: 0

**5. SEO:**
- Lighthouse SEO: 100
- Meta tags completas: ✓
- Schema.org: ✓
- Sitemap XML: ✓
- Robots.txt: ✓

### Ferramentas de Análise

- **Google Analytics 4:** Comportamento, conversões
- **Google Search Console:** SEO, indexação
- **Hotjar/Clarity:** Heatmaps, session recordings
- **Lighthouse:** Performance, acessibilidade, SEO
- **WAVE:** Validação de acessibilidade
- **WebPageTest:** Performance detalhado

---

## 🎨 Animações e Transições

### Princípios
- Suaves e discretas (não chamar atenção excessiva)
- Duração: 150-300ms (rápido mas perceptível)
- Easing: ease-in-out (natural)
- Apenas quando necessário (não decorativo)

### Durações Padrão
```css
--duration-fast: 150ms      /* Hover rápido, focus */
--duration-normal: 200ms    /* Hover padrão, transitions */
--duration-slow: 300ms      /* Imagens, cards lift */
--duration-slower: 500ms    /* Menu mobile, modais */
```

### Easing Functions
```css
--ease-linear: linear
--ease: ease
--ease-in: ease-in
--ease-out: ease-out
--ease-in-out: ease-in-out    /* Padrão recomendado */
```

### Onde Usar

**Botões:**
```css
hover:scale-105 transition-transform duration-200 ease-in-out
hover:shadow-xl transition-shadow duration-200
```

**Cards:**
```css
hover:-translate-y-1 transition-all duration-300 ease-in-out
hover:shadow-2xl
```

**Imagens (dentro de cards):**
```css
group-hover:scale-110 transition-transform duration-300 ease-in-out
```

**Links:**
```css
hover:text-gold transition-colors duration-200
```

**Menu Mobile:**
```css
/* Slide-in */
translate-x-full → translate-x-0
transition-transform duration-300 ease-in-out
```

**Scroll Reveal (futuro com Intersection Observer):**
```css
opacity-0 translate-y-8 → opacity-100 translate-y-0
transition-all duration-500 ease-out
```

---

## 📋 Checklist Final de UX/UI

### Antes de Publicar

#### ✅ Visual
- [ ] Todas as imagens têm alt text descritivo
- [ ] Logo visível em todas as páginas (header + footer)
- [ ] Cores seguem paleta definida (sem hardcode)
- [ ] Fontes Poppins e Inter carregam corretamente
- [ ] Ícones têm contraste adequado (> 3:1)
- [ ] Sem elementos cortados ou overflow

#### ✅ Interação
- [ ] Todos os links funcionam
- [ ] CTAs são clicáveis e visíveis
- [ ] Hover states funcionam em todos elementos interativos
- [ ] Focus states visíveis (ring-2)
- [ ] Navegação mobile funcional (hamburger + close)
- [ ] WhatsApp abre com mensagem pré-preenchida
- [ ] Smooth scroll funcionando
- [ ] Touch targets > 44px

#### ✅ Performance
- [ ] Lighthouse Performance > 90
- [ ] Imagens otimizadas (< 200kb cada)
- [ ] Lazy loading implementado (exceto hero)
- [ ] Fontes pré-carregadas
- [ ] JavaScript minificado
- [ ] CSS minificado
- [ ] Gzip/Brotli habilitado

#### ✅ Acessibilidade
- [ ] Contraste validado com WebAIM (> 4.5:1)
- [ ] Navegação por teclado completa (Tab order)
- [ ] Screen reader testado (NVDA ou JAWS)
- [ ] ARIA labels em ícones sem texto
- [ ] HTML semântico (header, nav, main, section, footer)
- [ ] Landmarks definidos
- [ ] Formulários com labels (futuro)

#### ✅ SEO
- [ ] Meta tags completas (title, description)
- [ ] Open Graph tags
- [ ] Schema.org markup
- [ ] Sitemap XML
- [ ] Robots.txt
- [ ] Favicon configurado
- [ ] Headings hierárquicos (H1 → H2 → H3)

#### ✅ Conteúdo
- [ ] Textos sem erros ortográficos
- [ ] Informações de contato corretas e atualizadas
- [ ] Horários corretos
- [ ] Preços visíveis e corretos
- [ ] Links sociais funcionando (Instagram)
- [ ] Endereço completo com referência

#### ✅ Mobile
- [ ] Responsivo em 3 breakpoints (mobile, tablet, desktop)
- [ ] Touch targets > 44px
- [ ] Menu mobile funcional
- [ ] Imagens se adaptam
- [ ] Textos legíveis (min 16px body)
- [ ] Botões não colam nas bordas (padding adequado)

#### ✅ Navegadores
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + iOS)
- [ ] Firefox (desktop)
- [ ] Edge (desktop)

---

## 🚀 Próximos Passos e Melhorias Futuras

### Prioridade Alta (MVP)
1. [x] Layout/Container
2. [x] Layout/Header (sticky)
3. [x] Layout/Footer
4. [x] Common/Button (variantes)
5. [x] Common/Card
6. [x] Sections/Hero
7. [x] Sections/Services
8. [x] Sections/About
9. [x] Sections/Contact
10. [x] Common/WhatsAppButton (floating)
11. [ ] Meta tags SEO
12. [ ] Schema.org markup
13. [ ] Otimização de imagens (WebP)

### Prioridade Média
14. [ ] Common/SocialLinks
15. [ ] Sections/Testimonials (carousel)
16. [ ] Layout/MobileMenu (melhorias)
17. [ ] Animações scroll reveal
18. [ ] Skeleton screens (loading)
19. [ ] Toast notifications
20. [ ] Analytics (GA4 + Hotjar)

### Prioridade Baixa (Futuro)
21. [ ] Sistema de Agendamento Online
22. [ ] Área de Depoimentos com reviews
23. [ ] Blog de Conteúdo
24. [ ] Programa de Fidelidade
25. [ ] Chat ao Vivo / Chatbot
26. [ ] PWA (Progressive Web App)
27. [ ] Multi-idioma (i18n completo)
28. [ ] Newsletter signup
29. [ ] Integração com Google Reviews
30. [ ] Vídeos do ambiente

---

## 📚 Referências e Documentação

### UX/UI Design
- [Nielsen Norman Group - 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Material Design 3](https://m3.material.io/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Refactoring UI](https://www.refactoringui.com/)

### Acessibilidade
- [WCAG 2.1 Guidelines (PT-BR)](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)
- [Inclusive Components](https://inclusive-components.design/)

### Performance
- [Web.dev Performance](https://web.dev/performance/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web.dev Vitals](https://web.dev/vitals/)

### SEO
- [Google Search Central](https://developers.google.com/search/docs)
- [Schema.org Documentation](https://schema.org/)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)

### Frameworks/Tools
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)

---

## 💡 Princípios Finais

> **"Design não é só como parece ou como se sente.
> Design é como funciona."**
> — Steve Jobs

### Manifesto Mali Spa UX

1. **Cada pixel transmite cuidado** - Design reflete a filosofia do Mali
2. **Velocidade é acolhimento** - Performance é UX
3. **Acessibilidade é inclusão** - Todos merecem bem-estar
4. **Conversão é natural** - CTAs não forçam, convidam
5. **Mobile é prioridade** - Maioria dos clientes usa celular
6. **Dados guiam decisões** - Analytics > achismos

---

**Versão:** 2.0.0
**Criado em:** 29 de Janeiro de 2026
**Última atualização:** 03 de Fevereiro de 2026
**Responsáveis:** Design System + UX/UI Design Mali Spa
**Status:** ✅ Aprovado para implementação
