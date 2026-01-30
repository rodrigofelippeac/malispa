# Design Tokens - Mali Spa

## Introdução
Design tokens são variáveis que armazenam valores de design reutilizáveis. Este documento serve como fonte única de verdade para todos os valores visuais do projeto.

## Cores

### Paleta Principal

```javascript
// Colors - Primary (Brown)
export const colors = {
  primary: {
    DEFAULT: '#311303',
    50: '#faf6f4',
    100: '#f5ede8',
    200: '#e6d4c6',
    300: '#d7bba4',
    400: '#b98960',
    500: '#9b571c',
    600: '#7a4516',
    700: '#5a3825',
    800: '#3a2611',
    900: '#311303',
    950: '#1a0a01',
  },

  // Secondary (Mint)
  secondary: {
    DEFAULT: '#e6efee',
    50: '#f5faf9',
    100: '#e6efee',
    200: '#d0e5e2',
    300: '#b3d9d5',
    400: '#96cdc8',
    500: '#79c1bb',
    600: '#5caead',
    700: '#4a8b87',
    800: '#386861',
    900: '#26453b',
  },

  // Neutral
  neutral: {
    white: '#ffffff',
    black: '#000000',
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  // Functional
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',

  // Social
  whatsapp: '#25d366',
  instagram: {
    purple: '#bc1888',
    pink: '#cc2366',
    orange: '#f09433',
  },
}
```

### Uso das Cores

```javascript
// Mapeamento de uso
export const colorUsage = {
  // Backgrounds
  bgPrimary: 'neutral.white',
  bgSecondary: 'secondary.50',
  bgTertiary: 'secondary.100',
  bgDark: 'primary.900',

  // Text
  textPrimary: 'primary.900',
  textSecondary: 'neutral.600',
  textTertiary: 'neutral.500',
  textInverse: 'neutral.white',

  // Borders
  borderLight: 'neutral.200',
  borderMedium: 'neutral.300',
  borderDark: 'neutral.400',

  // Actions
  actionPrimary: 'primary.DEFAULT',
  actionPrimaryHover: 'primary.700',
  actionSecondary: 'secondary.600',
  actionWhatsapp: 'whatsapp',
}
```

## Tipografia

### Famílias de Fonte

```javascript
export const fontFamily = {
  heading: ['Poppins', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
  mono: ['Monaco', 'Courier New', 'monospace'],
}
```

### Escalas de Tamanho

```javascript
export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
  sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
  base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
  lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
  xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
  '5xl': ['3rem', { lineHeight: '1' }],           // 48px
  '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
  '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
}
```

### Pesos de Fonte

```javascript
export const fontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}
```

### Estilos de Texto Pré-definidos

```javascript
export const textStyles = {
  // Headings
  h1: {
    fontFamily: 'heading',
    fontSize: '5xl',
    fontWeight: 'bold',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: 'heading',
    fontSize: '4xl',
    fontWeight: 'bold',
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
  },
  h3: {
    fontFamily: 'heading',
    fontSize: '3xl',
    fontWeight: 'semibold',
    lineHeight: '1.3',
  },
  h4: {
    fontFamily: 'heading',
    fontSize: '2xl',
    fontWeight: 'semibold',
    lineHeight: '1.4',
  },

  // Body
  body: {
    fontFamily: 'body',
    fontSize: 'base',
    fontWeight: 'normal',
    lineHeight: '1.6',
  },
  bodyLarge: {
    fontFamily: 'body',
    fontSize: 'lg',
    fontWeight: 'normal',
    lineHeight: '1.6',
  },
  bodySmall: {
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'normal',
    lineHeight: '1.5',
  },

  // Special
  caption: {
    fontFamily: 'body',
    fontSize: 'xs',
    fontWeight: 'normal',
    lineHeight: '1.4',
    color: 'neutral.600',
  },
  label: {
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'medium',
    lineHeight: '1.4',
  },
}
```

## Espaçamento

```javascript
export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
  40: '160px',
  48: '192px',
  56: '224px',
  64: '256px',
}

// Uso recomendado
export const spacingUsage = {
  xs: 'spacing.1',    // 4px - espaços muito pequenos
  sm: 'spacing.2',    // 8px - espaços pequenos
  md: 'spacing.4',    // 16px - espaço padrão entre elementos
  lg: 'spacing.6',    // 24px - espaço entre grupos
  xl: 'spacing.8',    // 32px - espaço entre seções pequenas
  '2xl': 'spacing.12', // 48px - espaço entre seções médias
  '3xl': 'spacing.16', // 64px - espaço entre seções grandes
  '4xl': 'spacing.20', // 80px - espaço entre seções muito grandes
}
```

## Tamanhos

```javascript
export const sizes = {
  // Container
  containerSm: '640px',
  containerMd: '768px',
  containerLg: '1024px',
  containerXl: '1280px',
  container2xl: '1536px',

  // Common components
  buttonHeight: {
    sm: '32px',
    md: '40px',
    lg: '48px',
    xl: '56px',
  },

  inputHeight: {
    sm: '32px',
    md: '40px',
    lg: '48px',
  },

  headerHeight: {
    mobile: '64px',
    desktop: '80px',
  },

  footerHeight: {
    mobile: 'auto',
    desktop: 'auto',
  },
}
```

## Bordas

```javascript
export const borderRadius = {
  none: '0',
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
}

export const borderWidth = {
  0: '0px',
  DEFAULT: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
}
```

## Sombras

```javascript
export const boxShadow = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
}
```

## Animações

```javascript
export const animation = {
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },

  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },

  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
    slideUp: {
      from: { transform: 'translateY(20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    slideDown: {
      from: { transform: 'translateY(-20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.7 },
    },
    bounce: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
  },
}
```

## Breakpoints

```javascript
export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
```

## Z-Index

```javascript
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  notification: 1700,
  floatingButton: 9999,
}
```

## Exemplo de Uso no Tailwind Config

```javascript
// tailwind.config.js
import { colors, fontFamily, fontSize, spacing, borderRadius, boxShadow } from './design-tokens'

export default {
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      spacing,
      borderRadius,
      boxShadow,
    },
  },
}
```

## Notas de Implementação

### CSS Custom Properties
Para maior flexibilidade, considere exportar também como CSS variables:

```css
:root {
  /* Colors */
  --color-primary: #311303;
  --color-secondary: #e6efee;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;

  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Uso no Figma
Estes tokens devem ser sincronizados com o design no Figma para manter consistência entre design e desenvolvimento.

---

**Versão:** 1.0.0
**Criado em:** 29 de Janeiro de 2026
**Última atualização:** 29 de Janeiro de 2026
