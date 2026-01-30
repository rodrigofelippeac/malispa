# Plano de Layout - Mali Spa Landing Page

## Objetivo
Criar um layout padronizado, responsivo e acolhedor que transmita a essência do Mali Spa: bem-estar, natureza e cuidado personalizado.

## Princípios de Design

### 1. Design System
- **Mobile-first**: Priorizar experiência mobile
- **Espaçamento consistente**: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- **Grid System**: Container max-width 1280px, padding lateral responsivo
- **Bordas**: Arredondamento suave (8px, 12px, 16px)

### 2. Paleta de Cores

```css
/* Cores Principais */
--primary-brown: #311303      /* Marrom escuro - CTA, títulos importantes */
--primary-brown-light: #5a3825 /* Hover states */
--primary-brown-dark: #1a0a01  /* Textos escuros */

--secondary-mint: #e6efee      /* Verde menta - Fundos, destaques */
--secondary-mint-light: #f5faf9 /* Seções alternadas */
--secondary-mint-dark: #d0e5e2  /* Bordas, divisores */

/* Cores de Apoio */
--white: #ffffff
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-500: #6b7280
--gray-900: #111827

/* Cores de Ação */
--whatsapp: #25d366
--success: #10b981
--error: #ef4444
```

### 3. Tipografia

```css
/* Família */
font-family: 'Poppins', sans-serif;  /* Títulos */
font-family: 'Inter', sans-serif;    /* Corpo */

/* Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* Peso */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Estrutura da Landing Page

### 1. Header (Fixo)
```
┌─────────────────────────────────────────┐
│  [Logo]              [Menu] [WhatsApp] │
└─────────────────────────────────────────┘
```

**Componentes:**
- Logo Mali Spa (esquerda)
- Menu navegação: Início | Sobre | Serviços | Contato
- Botão WhatsApp (destaque)
- Background: transparente → branco ao scroll
- Height: 80px (desktop), 64px (mobile)
- Shadow: ao fazer scroll

### 2. Hero Section
```
┌─────────────────────────────────────────┐
│                                         │
│        [Background Image/Gradient]      │
│                                         │
│         MALI SPA                        │
│    Um convite ao cuidado                │
│                                         │
│         [CTA: Agendar]                  │
│              ↓                          │
└─────────────────────────────────────────┘
```

**Características:**
- Height: 100vh (desktop), 80vh (mobile)
- Background: imagem com overlay escuro 40%
- Texto centralizado, branco
- CTA principal: botão grande, destaque
- Scroll indicator (animado)

### 3. Sobre Section
```
┌─────────────────────────────────────────┐
│                                         │
│  [Imagem]  │  Sobre o Mali Spa          │
│            │  [Texto descritivo]        │
│            │  [Diferenciais]            │
│                                         │
└─────────────────────────────────────────┘
```

**Layout:**
- 2 colunas (desktop), 1 coluna (mobile)
- Imagem: 40%, Texto: 60%
- Background: secondary-mint-light
- Padding: 80px vertical

### 4. Serviços Section
```
┌─────────────────────────────────────────┐
│          Nossos Serviços                │
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
- Desktop: 3 colunas
- Tablet: 2 colunas
- Mobile: 1 coluna
- Gap: 24px
- Background: white
- Padding: 80px vertical

**Card de Serviço:**
- Border-radius: 16px
- Shadow: sutil, aumenta no hover
- Padding: 32px
- Imagem/Ícone no topo
- Título do serviço
- Duração
- Descrição breve
- Botão "Saiba mais" ou "Agendar"

### 5. Diferenciais Section
```
┌─────────────────────────────────────────┐
│         Por que escolher o Mali         │
│                                         │
│   [Ícone]        [Ícone]      [Ícone]  │
│   Título         Título       Título   │
│   Descrição      Descrição    Descrição│
└─────────────────────────────────────────┘
```

**Layout:**
- 3 ou 4 colunas (desktop), 1 coluna (mobile)
- Ícones grandes, estilo outline
- Texto centralizado
- Background: secondary-mint
- Padding: 64px vertical

### 6. Depoimentos Section (Futuro)
```
┌─────────────────────────────────────────┐
│         O que dizem nossos clientes     │
│                                         │
│   ┌──────────────────────────┐         │
│   │  "Depoimento..."         │         │
│   │  - Nome Cliente          │         │
│   └──────────────────────────┘         │
│                                         │
│         [• • •] navegação              │
└─────────────────────────────────────────┘
```

**Características:**
- Carousel/Slider
- Cards com sombra
- Avatar + nome
- Estrelas de avaliação
- Background: white
- Padding: 80px vertical

### 7. Contato Section
```
┌─────────────────────────────────────────┐
│              Entre em Contato           │
│                                         │
│  [WhatsApp]  [Instagram]  [Telefone]   │
│                                         │
│     Endereço: Tambaú, João Pessoa      │
│     Horário: Seg-Sáb, 9h-20h           │
│                                         │
│          [Mapa Google Maps]            │
└─────────────────────────────────────────┘
```

**Layout:**
- Informações centralizadas
- Ícones grandes para contato
- Background: secondary-mint-light
- Padding: 64px vertical
- Mapa: altura 400px

### 8. Footer
```
┌─────────────────────────────────────────┐
│  [Logo]                                 │
│                                         │
│  Links: Sobre | Serviços | Contato     │
│  Social: [Instagram] [WhatsApp]        │
│                                         │
│  © 2026 Mali Spa - Todos os direitos   │
└─────────────────────────────────────────┘
```

**Características:**
- Background: primary-brown
- Texto: branco
- Padding: 48px vertical
- Centralizado

## Componentes Especiais

### WhatsApp Floating Button
```
┌─────┐
│ WA  │ ← Botão fixo, canto inferior direito
└─────┘
```

**Características:**
- Position: fixed, bottom: 20px, right: 20px
- Background: verde WhatsApp
- Shadow: grande
- Ícone: WhatsApp
- Animação: pulse sutil
- Z-index: 9999

## Responsividade

### Breakpoints Tailwind
```javascript
sm: '640px'   // Tablet pequeno
md: '768px'   // Tablet
lg: '1024px'  // Desktop pequeno
xl: '1280px'  // Desktop grande
2xl: '1536px' // Desktop extra grande
```

### Comportamentos

**Mobile (< 640px):**
- Menu: hamburger
- Hero: 80vh, texto menor
- Grid: 1 coluna
- Padding: 16px lateral
- Títulos: text-2xl

**Tablet (640px - 1024px):**
- Menu: links visíveis
- Grid: 2 colunas
- Padding: 24px lateral
- Títulos: text-3xl

**Desktop (> 1024px):**
- Menu: completo
- Grid: 3 colunas
- Padding: 32px lateral
- Títulos: text-4xl
- Container: max-w-7xl

## Animações e Transições

### Princípios
- Suaves e discretas
- Duração: 200ms - 300ms
- Easing: ease-in-out
- Apenas quando necessário

### Onde usar
- Hover em botões: scale 1.02, shadow aumenta
- Cards: hover com lift (translateY -4px)
- Menu mobile: slide-in lateral
- Scroll reveal: fade-in + translateY
- Botões: ripple effect opcional
- Imagens: fade-in ao carregar

## Acessibilidade

### Checklist
- [ ] Contraste mínimo 4.5:1 (texto normal)
- [ ] Contraste mínimo 3:1 (texto grande)
- [ ] Focus states visíveis
- [ ] Alt text em todas imagens
- [ ] Labels em inputs
- [ ] Navegação por teclado
- [ ] ARIA labels onde necessário
- [ ] Semantic HTML (header, nav, main, section, footer)

## Performance

### Otimizações
- [ ] Lazy loading de imagens
- [ ] Imagens responsivas (srcset)
- [ ] Formato WebP + fallback
- [ ] Critical CSS inline
- [ ] Code splitting
- [ ] Preload fontes
- [ ] Minificação de assets
- [ ] Compression (Gzip/Brotli)

### Targets
- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1

## Arquivo de Componentes

### Prioridade Alta (MVP)
1. Layout/Container
2. Layout/Header
3. Layout/Footer
4. Common/Button
5. Common/Card
6. Sections/Hero
7. Sections/About
8. Sections/Services
9. Sections/Contact
10. Common/WhatsAppButton

### Prioridade Média
11. Common/SocialLinks
12. Sections/Testimonials
13. Common/ServiceCard
14. Layout/MobileMenu

### Prioridade Baixa (Futuro)
15. Common/Carousel
16. Common/Modal
17. Common/Form
18. Sections/Blog

## Próximos Passos

1. [ ] Criar componente Container (base)
2. [ ] Criar componente Button (variações)
3. [ ] Criar layout Header + Footer
4. [ ] Implementar Hero Section
5. [ ] Implementar Services Section
6. [ ] Implementar About Section
7. [ ] Implementar Contact Section
8. [ ] Criar WhatsApp Floating Button
9. [ ] Implementar responsividade
10. [ ] Otimizar performance
11. [ ] Testes de acessibilidade
12. [ ] Deploy

---

**Criado em:** 29 de Janeiro de 2026
**Última atualização:** 29 de Janeiro de 2026
