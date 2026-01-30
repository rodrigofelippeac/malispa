# Paleta de Cores - Mali Spa

## Cores Extraídas do Site Original
Site: https://malispa.keepo.bio/

### Cores Primárias

#### Marrom Escuro (Primary)
- **Hex:** `#311303`
- **RGB:** `rgb(49, 19, 3)`
- **Uso:**
  - Background principal do site
  - Backgrounds de botões
  - Backgrounds de cards
  - Elementos de destaque

#### Verde Menta / Soft Green (Secondary)
- **Hex:** `#e6efee`
- **RGB:** `rgb(230, 239, 238)`
- **Uso:**
  - Cor primária de texto
  - Bordas de elementos
  - Texto de inputs
  - Placeholders

#### Branco
- **Hex:** `#FFFFFF`
- **RGB:** `rgb(255, 255, 255)`
- **Uso:**
  - Texto em botões
  - Elementos de alto contraste
  - Overlays

---

## Paleta Implementada no Tailwind

### Primary (Marrom)
```css
primary: {
  DEFAULT: '#311303',  // Marrom escuro
  light: '#5a2710',    // Variação mais clara
  dark: '#1a0a01',     // Variação mais escura
}
```

### Secondary (Verde Menta)
```css
secondary: {
  DEFAULT: '#e6efee',  // Verde menta suave
  light: '#f5faf9',    // Variação mais clara
  dark: '#d0e0de',     // Variação mais escura
}
```

---

## Aplicação das Cores

### Backgrounds
- **Principal:** `#311303` (marrom escuro)
- **Seções alternadas:** `#f5faf9` (mint claro)
- **Cards:** `#311303` ou `#FFFFFF`

### Texto
- **Sobre fundo escuro:** `#e6efee` (mint) ou `#FFFFFF` (branco)
- **Sobre fundo claro:** `#311303` (marrom) ou `#111827` (gray-900)

### Botões
- **Primário:** Background `#311303`, texto `#FFFFFF`
- **Secundário:** Background `#e6efee`, texto `#311303`
- **WhatsApp:** Background `#25D366` (verde WhatsApp), texto `#FFFFFF`
- **Outline:** Border `#311303` ou `#e6efee`, background transparente

### Bordas e Divisores
- **Principal:** `#e6efee`
- **Secundária:** `#311303` com opacidade

---

## Psicologia das Cores

### Marrom (#311303)
- **Significado:** Terra, natureza, estabilidade, conforto
- **Emoção:** Acolhimento, segurança, calor
- **Uso no Spa:** Representa conexão com a terra, técnicas ancestrais, ambiente acolhedor

### Verde Menta (#e6efee)
- **Significado:** Frescor, renovação, tranquilidade, saúde
- **Emoção:** Calma, equilíbrio, paz
- **Uso no Spa:** Representa bem-estar, cura, relaxamento, renovação

### Combinação Marrom + Mint
- Cria um **contraste suave** e **harmonioso**
- **Sofisticado** sem ser frio
- **Natural** e **orgânico**
- Alinhado com tendências de wellness e spa de luxo 2025/2026

---

## Acessibilidade (WCAG)

### Contraste de Cores
- **Marrom (#311303) vs Mint (#e6efee):** ✅ AAA (contraste > 12:1)
- **Marrom (#311303) vs Branco (#FFFFFF):** ✅ AAA (contraste > 15:1)
- **Mint (#e6efee) vs Marrom (#311303):** ✅ AAA (legível)

Todos os pares de cores principais atendem aos padrões WCAG AAA para acessibilidade.

---

## Variações para Estados

### Hover States
```css
primary-hover: #5a2710    // Marrom mais claro
secondary-hover: #d0e0de  // Mint mais escuro
```

### Focus States
```css
primary-focus: #7a3518    // Marrom médio
secondary-focus: #c0d5d3  // Mint médio
```

### Disabled States
```css
primary-disabled: rgba(49, 19, 3, 0.5)   // Marrom com 50% opacidade
secondary-disabled: rgba(230, 239, 238, 0.5) // Mint com 50% opacidade
```

---

## Gradientes

### Gradient Hero
```css
background: linear-gradient(to bottom right, #311303, #5a2710, #311303);
```

### Gradient Overlay
```css
background: linear-gradient(to bottom, rgba(49, 19, 3, 0.8), rgba(49, 19, 3, 0.9));
```

---

## Esquema de Cores por Seção (✨ ATUALIZADO)

| Seção | Background | Texto Principal | Acentos | Cards/Elementos |
|-------|-----------|----------------|---------|-----------------|
| **Hero** | Imagem + overlay preto 40% | `#FFFFFF` | `#FFFFFF` | Logo 132x132px |
| **About** | Gradiente: `white → #f5faf9 → white` | `#311303` | `#311303` | Cards brancos + ícones gradient marrom + hover shadow |
| **Services** | Gradiente: `#f9fafb → white` | `#311303` | `#311303` | Cards brancos + borda cinza + hover lift + translate-y |
| **Contact** | Gradiente: `white → #f5faf9 → #e6efee` | `#311303` | `#311303` | Cards brancos + borda + hover lift |
| **Footer** | Gradiente: `#311303 → #1a0a01` | `#e6efee` | `#FFFFFF` | Links secondary com hover branco + translate-x |

---

## Referências de Implementação

### Arquivo Tailwind Config
`/frontend/tailwind.config.js`

### Arquivo CSS Principal
`/frontend/src/index.css`

### Componentes com Cores
- Header: `src/components/layout/Header.jsx`
- Hero: `src/components/sections/Hero.jsx`
- Button: `src/components/common/Button.jsx`
- Card: `src/components/common/Card.jsx`
