# Diretivas do Projeto Mali Spa

## Contexto do Projeto

Este é o projeto de website para o **Mali Spa**, um spa boutique localizado em Tambaú, João Pessoa - PB. O Mali Spa oferece terapias holísticas que combinam técnicas ancestrais com escuta presente e personalizada.

### Objetivo
Criar uma landing page moderna em React que transmita a essência acolhedora e profissional do Mali Spa, com foco em conversão (agendamentos via WhatsApp) e futuro painel administrativo.

## Estrutura do Projeto

```
malispa/
├── briefing/              # Documentação de referência do cliente
├── especialistas/         # Documentação técnica e design system
├── frontend/             # Landing page React + Vite + Tailwind
└── backend/              # API Fastify (futuro)
```

## Stack Tecnológico

### Frontend
- **Framework**: React 18+
- **Build Tool**: Vite
- **Linguagem**: JavaScript (ES6+) - **NÃO usar TypeScript**
- **Estilização**: Tailwind CSS
- **Ícones**: React Icons

### Backend (Futuro)
- **Framework**: Fastify
- **Banco**: PostgreSQL ou MongoDB (a definir)

## Identidade Visual

### Cores Principais
```css
/* Primária - Marrom */
--primary: #311303
--primary-light: #5a3825
--primary-dark: #1a0a01

/* Secundária - Verde Menta */
--secondary: #e6efee
--secondary-light: #f5faf9
--secondary-dark: #d0e5e2
```

### Tipografia
```css
font-family: 'Poppins', sans-serif;  /* Títulos */
font-family: 'Inter', sans-serif;    /* Corpo */
```

## Premissas e Padrões

### 1. Design System - Componentes Reutilizáveis

**SEMPRE criar e reutilizar componentes base:**

#### Componentes Obrigatórios:
- `components/common/Button.jsx` - Todos os botões
- `components/common/Card.jsx` - Todos os cards
- `components/common/Container.jsx` - Wrapper de seções
- `components/common/Alert.jsx` - Mensagens e alertas
- `components/common/Badge.jsx` - Tags e labels
- `components/common/Input.jsx` - Campos de formulário
- `components/common/Modal.jsx` - Modais e overlays

#### Princípio:
**NUNCA criar botões, cards ou elementos inline. SEMPRE usar os componentes base.**

### 2. Sistema de Layout

#### Container Padrão
```jsx
// SEMPRE usar Container para seções
<Container>
  {/* conteúdo */}
</Container>

// Configurações:
<Container size="sm">    {/* max-w-4xl */}
<Container size="md">    {/* max-w-6xl */}
<Container size="lg">    {/* max-w-7xl (padrão) */}
<Container size="full">  {/* w-full */}
```

#### Espaçamento entre Seções
```jsx
// Padrão de padding vertical:
<section className="py-16 md:py-20 lg:py-24">
  {/* seção */}
</section>
```

### 3. Padrões de Botões

**Variantes obrigatórias no Button.jsx:**

```jsx
<Button variant="primary">    {/* Marrom, ação principal */}
<Button variant="secondary">  {/* Verde menta, ação secundária */}
<Button variant="outline">    {/* Borda, fundo transparente */}
<Button variant="ghost">      {/* Sem borda, apenas hover */}
<Button variant="whatsapp">   {/* Verde WhatsApp */}
```

**Tamanhos:**
```jsx
<Button size="sm">   {/* 32px altura */}
<Button size="md">   {/* 40px altura (padrão) */}
<Button size="lg">   {/* 48px altura */}
<Button size="xl">   {/* 56px altura */}
```

**Estados:**
- Hover: scale(1.02) + shadow aumentada
- Focus: ring visível para acessibilidade
- Disabled: opacity 50%, cursor not-allowed

### 4. Padrões de Cards

**Variantes no Card.jsx:**

```jsx
<Card variant="default">   {/* Branco, shadow padrão */}
<Card variant="elevated">  {/* Shadow maior */}
<Card variant="bordered">  {/* Apenas borda */}
<Card variant="flat">      {/* Sem shadow */}
```

**Hover States:**
```css
/* Card padrão hover */
transform: translateY(-4px);
box-shadow: aumentada;
transition: 200ms ease-in-out;
```

### 5. Padrões de Responsividade

**Breakpoints Tailwind:**
```javascript
sm: '640px'   // Tablet pequeno
md: '768px'   // Tablet
lg: '1024px'  // Desktop pequeno
xl: '1280px'  // Desktop
2xl: '1536px' // Desktop grande
```

**Mobile-First:**
```jsx
{/* SEMPRE começar mobile, depois desktop */}
<div className="flex-col md:flex-row">
<h1 className="text-2xl md:text-4xl lg:text-5xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### 6. Nomenclatura de Arquivos

**Padrão PascalCase para componentes:**
```
Button.jsx          ✅
Card.jsx            ✅
ServiceCard.jsx     ✅
WhatsAppButton.jsx  ✅

button.jsx          ❌
serviceCard.jsx     ❌
whatsapp-button.jsx ❌
```

**Padrão camelCase para utils e constants:**
```
services.js         ✅
contact.js          ✅
formatPhone.js      ✅

Services.js         ❌
ContactInfo.js      ❌
```

### 7. Estrutura de Componentes

**Ordem padrão dentro de um componente:**
```jsx
// 1. Imports
import React from 'react'
import PropTypes from 'prop-types'

// 2. Componente
export default function ComponentName({ props }) {
  // 3. States e hooks
  const [state, setState] = useState()

  // 4. Effects
  useEffect(() => {}, [])

  // 5. Handlers
  const handleClick = () => {}

  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  )
}

// 7. PropTypes
ComponentName.propTypes = {
  prop: PropTypes.string.isRequired,
}

// 8. Default props
ComponentName.defaultProps = {
  prop: 'default',
}
```

### 8. Importações

**Ordem de imports:**
```jsx
// 1. React e hooks
import React, { useState, useEffect } from 'react'

// 2. Bibliotecas externas
import { FaWhatsapp } from 'react-icons/fa'

// 3. Componentes internos
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'

// 4. Utils e constants
import { services } from '@/constants'
import { formatPhone } from '@/utils'

// 5. Estilos (se houver CSS modules)
import styles from './Component.module.css'
```

### 9. Constantes e Dados

**SEMPRE usar arquivos de constants:**

```jsx
// ❌ NUNCA hardcode dados
const phone = '+55 83 99661-9603'

// ✅ SEMPRE importar de constants
import { contact } from '@/constants'
const phone = contact.phone.display
```

**Localização dos dados:**
- `src/constants/services.js` - Serviços do spa
- `src/constants/contact.js` - Informações de contato
- `src/constants/config.js` - Configurações gerais

### 10. Classes Tailwind

**Ordem recomendada:**
```jsx
className="
  // Layout
  flex items-center justify-between

  // Spacing
  p-4 m-2 gap-4

  // Sizing
  w-full h-auto

  // Typography
  font-heading text-2xl font-bold

  // Colors
  bg-primary text-white

  // Borders
  border border-gray-200 rounded-lg

  // Effects
  shadow-md hover:shadow-lg

  // Transitions
  transition-all duration-200

  // Responsive
  md:flex-row md:text-3xl
"
```

### 11. Contraste e Acessibilidade de Ícones

**REGRA CRÍTICA: NUNCA use ícones brancos em fundos brancos ou cores similares.**

```jsx
// ❌ NUNCA fazer isso
<div className="bg-white">
  <FaIcon className="text-white" />
</div>

// ✅ SEMPRE garantir contraste mínimo 4.5:1
<div className="bg-white">
  <div className="bg-brown rounded-full p-3">
    <FaIcon className="text-white" />
  </div>
</div>

// ✅ Ou usar cor contrastante diretamente
<div className="bg-white">
  <FaIcon className="text-brown-dark" />
</div>
```

**Documentação completa:** [especialistas/REGRAS-CONTRASTE-DESIGN.md](especialistas/REGRAS-CONTRASTE-DESIGN.md)

**Combinações aprovadas:**
- Fundo escuro (brown, primary) → Ícone claro (white, gold)
- Fundo claro (white, beige) → Ícone escuro (brown, primary)
- Ícones dourados → Funcionam em ambos (com testes)

### 12. Animações e Transições

**Padrão de transições:**
```css
/* Duração */
--fast: 150ms
--normal: 200ms
--slow: 300ms

/* Easing */
transition-all duration-200 ease-in-out
```

**Hover Effects:**
```jsx
// Botões
hover:scale-102 hover:shadow-lg

// Cards
hover:-translate-y-1 hover:shadow-xl

// Links
hover:text-primary-light transition-colors
```

### 12. Acessibilidade

**Checklist obrigatório:**
- [ ] Alt text em todas as imagens
- [ ] Labels em todos os inputs
- [ ] Focus states visíveis
- [ ] Navegação por teclado funcional
- [ ] Contraste mínimo 4.5:1
- [ ] ARIA labels quando necessário
- [ ] Semantic HTML (header, nav, main, section, footer)

### 13. Performance

**Otimizações obrigatórias:**
- [ ] Lazy loading de imagens
- [ ] Imagens responsivas (srcset)
- [ ] Code splitting por rota
- [ ] Minificação de assets
- [ ] Preload de fontes críticas

### 14. Commits e Git

**Padrão de commits:**
```bash
# Tipos
feat: Nova funcionalidade
fix: Correção de bug
style: Mudanças de estilo/formatação
refactor: Refatoração de código
docs: Documentação
test: Testes
chore: Tarefas de manutenção

# Exemplos
git commit -m "feat: adiciona componente Button reutilizável"
git commit -m "fix: corrige responsividade do header no mobile"
git commit -m "style: ajusta espaçamento da seção de serviços"
```

## Documentação de Referência

### Antes de Codificar, SEMPRE Consultar:

1. **[especialistas/PLANO-LAYOUT.md](especialistas/PLANO-LAYOUT.md)**
   - Estrutura completa de todas as seções
   - Layout de componentes
   - Responsividade

2. **[especialistas/DESIGN-TOKENS.md](especialistas/DESIGN-TOKENS.md)**
   - Cores exatas
   - Tamanhos e espaçamentos
   - Tipografia
   - Animações

3. **[briefing/docs/MEMORIA-SITE-ANTIGO.md](briefing/docs/MEMORIA-SITE-ANTIGO.md)**
   - Identidade da marca
   - Tom de comunicação
   - Serviços

4. **[briefing/docs/INSPIRACOES-DESIGN.md](briefing/docs/INSPIRACOES-DESIGN.md)**
   - Tendências de design
   - Referências visuais
   - Boas práticas

## Fluxo de Desenvolvimento

### Ao Criar Novo Componente:

1. **Verificar** se componente similar já existe
2. **Consultar** PLANO-LAYOUT.md e DESIGN-TOKENS.md
3. **Criar** na pasta correta:
   - `components/common/` - Reutilizáveis
   - `components/layout/` - Header, Footer, etc
   - `components/sections/` - Seções da página
4. **Usar** design tokens (cores, espaçamentos)
5. **Implementar** responsividade mobile-first
6. **Adicionar** PropTypes
7. **Testar** em múltiplos tamanhos de tela

### Ao Criar Nova Seção:

1. **Consultar** estrutura em PLANO-LAYOUT.md
2. **Usar** componente Container
3. **Seguir** padrão de espaçamento (py-16 md:py-20 lg:py-24)
4. **Reutilizar** componentes base (Button, Card)
5. **Implementar** responsivo
6. **Testar** acessibilidade

## Regras de Ouro

### ✅ SEMPRE:
- Usar componentes reutilizáveis
- Mobile-first
- Consultar design tokens
- PropTypes em componentes
- Alt text em imagens
- Semantic HTML
- Transições suaves (200ms)
- Importar de constants, não hardcode

### ❌ NUNCA:
- Criar botões inline
- Criar cards inline
- Hardcode de cores (#hex no JSX)
- Hardcode de dados (telefone, etc)
- Desktop-first
- Ignorar acessibilidade
- Estilos inline excessivos
- Usar TypeScript (projeto é JS)

## Padrão de Cores - Referência Rápida

```jsx
// Backgrounds
bg-white              // Branco puro
bg-secondary-50       // Verde menta muito claro
bg-secondary-100      // Verde menta claro
bg-primary-900        // Marrom escuro

// Text
text-primary-900      // Texto escuro principal
text-gray-600         // Texto secundário
text-gray-500         // Texto terciário
text-white            // Texto branco

// Borders
border-gray-200       // Borda clara
border-secondary-200  // Borda verde menta
border-primary-900    // Borda marrom

// Hovers
hover:bg-primary-700  // Hover botão primário
hover:text-primary-light  // Hover link
```

## Contato e Suporte

### Informações do Cliente:
- **Nome**: Mali Spa
- **WhatsApp**: +55 83 99661-9603
- **Instagram**: @malisppa_br
- **Site Atual**: https://malispa.keepo.bio/

### Dúvidas sobre Design:
Consultar documentação em `briefing/` e `especialistas/`

### Dúvidas Técnicas:
Seguir padrões definidos neste arquivo

## Changelog

### 2026-01-29 - Setup Inicial
- Projeto criado com Vite + React + Tailwind
- Estrutura de pastas definida
- Documentação completa criada
- Design system planejado
- Constantes de dados estruturadas

---

**Última atualização**: 29 de Janeiro de 2026
**Versão**: 1.0.0

## Nota Final

**Este arquivo é a fonte única de verdade para padrões de desenvolvimento.**

Ao trabalhar neste projeto:
1. Leia este arquivo primeiro
2. Consulte a documentação referenciada
3. Siga os padrões estabelecidos
4. Mantenha consistência
5. Atualize este arquivo se necessário

**Consistência > Perfeição**
