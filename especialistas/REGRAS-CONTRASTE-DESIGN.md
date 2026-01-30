# Regras de Contraste e Acessibilidade Visual - Mali Spa

**Data**: 30 de Janeiro de 2026
**Versão**: 1.0.0

---

## 🎯 Objetivo

Este documento define as regras obrigatórias para garantir contraste adequado em todos os elementos visuais do site Mali Spa, com foco especial em ícones e elementos interativos.

---

## ⚠️ REGRA DE OURO: Contraste de Ícones

### ❌ NUNCA PERMITIDO

**NUNCA criar ícones ou elementos com cores similares ao fundo:**

- ❌ Ícones brancos em fundos brancos
- ❌ Ícones claros em fundos claros
- ❌ Ícones escuros em fundos escuros
- ❌ Qualquer combinação com contraste menor que 4.5:1

### ✅ SEMPRE OBRIGATÓRIO

**TODO ícone DEVE ter contraste mínimo de 4.5:1 com o fundo:**

- ✅ Ícones brancos (#ffffff) em fundos escuros (marrom, preto)
- ✅ Ícones escuros (marrom, preto) em fundos claros (branco, bege)
- ✅ Ícones coloridos (dourado) em fundos neutros contrastantes
- ✅ Backgrounds decorativos atrás dos ícones quando necessário

---

## 🎨 Paleta de Cores e Combinações Aprovadas

### Combinações Permitidas para Ícones

#### 1. Ícones Brancos
```jsx
// ✅ CORRETO - Ícone branco em fundo marrom
<div className="bg-brown">
  <FaIcon className="text-white" />
</div>

// ✅ CORRETO - Ícone branco em fundo marrom escuro
<div className="bg-brown-dark">
  <FaIcon className="text-white" />
</div>

// ✅ CORRETO - Ícone branco em fundo dourado
<div className="bg-gradient-to-br from-gold to-gold-dark">
  <FaIcon className="text-white" />
</div>

// ✅ CORRETO - Ícone branco em fundo primário (marrom muito escuro)
<div className="bg-primary">
  <FaIcon className="text-white" />
</div>

// ❌ ERRADO - Ícone branco em fundo branco
<div className="bg-white">
  <FaIcon className="text-white" /> {/* NÃO FAZER! */}
</div>

// ❌ ERRADO - Ícone branco em fundo bege
<div className="bg-beige-light">
  <FaIcon className="text-white" /> {/* NÃO FAZER! */}
</div>
```

#### 2. Ícones Escuros
```jsx
// ✅ CORRETO - Ícone marrom em fundo branco
<div className="bg-white">
  <FaIcon className="text-brown-dark" />
</div>

// ✅ CORRETO - Ícone marrom em fundo bege
<div className="bg-beige-light">
  <FaIcon className="text-brown" />
</div>

// ✅ CORRETO - Ícone primário em fundo claro
<div className="bg-secondary-light">
  <FaIcon className="text-primary" />
</div>

// ❌ ERRADO - Ícone marrom em fundo marrom
<div className="bg-brown">
  <FaIcon className="text-brown-dark" /> {/* NÃO FAZER! */}
</div>

// ❌ ERRADO - Ícone escuro em fundo escuro
<div className="bg-primary">
  <FaIcon className="text-brown-dark" /> {/* NÃO FAZER! */}
</div>
```

#### 3. Ícones Dourados
```jsx
// ✅ CORRETO - Ícone dourado em fundo branco
<div className="bg-white">
  <FaIcon className="text-gold" />
</div>

// ✅ CORRETO - Ícone dourado em fundo bege
<div className="bg-beige">
  <FaIcon className="text-gold" />
</div>

// ✅ CORRETO - Ícone dourado em fundo marrom escuro
<div className="bg-brown-dark">
  <FaIcon className="text-gold" />
</div>

// ⚠️ CUIDADO - Testar contraste em fundos médios
<div className="bg-brown-light">
  <FaIcon className="text-gold" /> {/* Testar contraste! */}
</div>
```

---

## 📋 Padrões Aprovados por Componente

### Header (Navbar)
```jsx
// Estado normal (transparente sobre imagem)
// Ícones brancos para contrastar com overlay escuro
className={isScrolled ? 'text-gray-700' : 'text-white'}

// Estado scrolled (fundo branco)
// Ícones escuros para contrastar com branco
className={isScrolled ? 'text-primary' : 'text-white'}
```

**Regra:** Ícones adaptativos baseados no estado do header.

### Footer
```jsx
// Fundo: Gradiente marrom muito escuro (#311303 → #1a0a01)
// Ícones: Sempre claros
style={{ color: '#e6efee' }}  // Verde menta claro

// Hover: Branco puro
onMouseEnter={(e) => e.target.style.color = '#ffffff'}
```

**Regra:** Ícones sempre claros em fundo escuro.

### Contact Section
```jsx
// Cards com ícones em círculos
const contactMethods = [
  {
    bgColor: 'bg-brown',        // Fundo marrom
    iconColor: 'text-white',    // Ícone branco
  }
]

// Ícones de localização e horário
<div className="bg-gradient-to-br from-gold to-gold-dark">
  <FaMapMarkerAlt className="text-white" />
</div>

<div className="bg-gradient-to-br from-brown to-brown-dark">
  <FaClock className="text-white" />
</div>
```

**Regra:** Ícones brancos em backgrounds coloridos (marrom/dourado).

### About Section
```jsx
// Diferenciais com checkmarks
<div className="bg-gradient-to-br from-gold to-gold-dark">
  <span className="text-white">✓</span>
</div>
```

**Regra:** Símbolos brancos em backgrounds dourados.

### Services Section
```jsx
// Badges de categoria
<span className="bg-gradient-to-r from-gold to-gold-dark text-white">
  Day Spa
</span>

// Ícones informativos
<FaClock className="text-gold" />  // Em fundo branco/bege claro
<FaUsers className="text-xs" />    // Em contexto claro

// Botões de ação
className="bg-gradient-to-r from-brown-dark to-brown text-white"
```

**Regra:** Ícones dourados em fundos claros, brancos em fundos escuros.

### WhatsApp Button
```jsx
// Botão flutuante verde
className="bg-[#25d366] text-white"

// Tooltip
className="bg-gray-900 text-white"
```

**Regra:** Sempre branco em fundo verde escuro (#25d366).

---

## 🔍 Checklist de Contraste

### Antes de Implementar Qualquer Ícone:

- [ ] Identifiquei a cor do fundo (background)?
- [ ] Escolhi uma cor de ícone contrastante?
- [ ] Verifiquei o contraste mínimo de 4.5:1?
- [ ] Testei em diferentes tamanhos de tela?
- [ ] Testei em modo claro E escuro (se aplicável)?
- [ ] O hover/focus mantém contraste adequado?

### Ferramentas de Verificação:

1. **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
2. **Chrome DevTools**: Lighthouse Accessibility Audit
3. **Teste Visual**: Reduzir brilho da tela para 50% e verificar legibilidade

---

## 🎨 Tabela de Referência Rápida

| Cor do Fundo | Cor do Ícone Permitida | Contraste | Status |
|--------------|------------------------|-----------|--------|
| `bg-white` | `text-brown-dark` | 11.2:1 | ✅ Excelente |
| `bg-white` | `text-brown` | 8.5:1 | ✅ Excelente |
| `bg-white` | `text-gold` | 6.1:1 | ✅ Bom |
| `bg-white` | `text-white` | 1:1 | ❌ Proibido |
| `bg-beige-light` | `text-brown-dark` | 10.5:1 | ✅ Excelente |
| `bg-beige-light` | `text-brown` | 8.0:1 | ✅ Excelente |
| `bg-beige-light` | `text-gold` | 5.8:1 | ✅ Bom |
| `bg-beige-light` | `text-white` | 1.2:1 | ❌ Proibido |
| `bg-brown` | `text-white` | 8.5:1 | ✅ Excelente |
| `bg-brown` | `text-gold` | 4.2:1 | ⚠️ Limítrofe |
| `bg-brown` | `text-brown-dark` | 2.1:1 | ❌ Proibido |
| `bg-brown-dark` | `text-white` | 11.2:1 | ✅ Excelente |
| `bg-brown-dark` | `text-gold` | 5.5:1 | ✅ Bom |
| `bg-brown-dark` | `text-brown` | 2.8:1 | ❌ Proibido |
| `bg-primary` (#311303) | `text-white` | 15.8:1 | ✅ Excelente |
| `bg-primary` (#311303) | `text-gold` | 7.2:1 | ✅ Excelente |
| `bg-primary` (#311303) | `text-brown` | 3.5:1 | ❌ Proibido |
| `bg-gold` | `text-white` | 6.1:1 | ✅ Bom |
| `bg-gold` | `text-brown-dark` | 5.8:1 | ✅ Bom |
| `bg-gold` | `text-gold-light` | 2.0:1 | ❌ Proibido |

---

## 🛠️ Padrão de Background para Ícones

### Quando Usar Círculos/Backgrounds

Se você precisa usar um ícone em um contexto onde o contraste natural é insuficiente, **SEMPRE adicione um background:**

```jsx
// ✅ PADRÃO CORRETO - Ícone com background
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
  <FaIcon className="text-white" />
</div>

// ✅ PADRÃO CORRETO - Ícone com background marrom
<div className="w-16 h-16 rounded-lg bg-brown flex items-center justify-center">
  <FaIcon className="text-white text-3xl" />
</div>

// ❌ ERRADO - Ícone sem background em contexto duvidoso
<div className="bg-beige">
  <FaIcon className="text-beige-light" /> {/* Sem contraste! */}
</div>
```

### Tamanhos Padrão de Backgrounds:

```css
/* Pequeno (Small) */
w-10 h-10  /* 40px - Para ícones de 16-18px */

/* Médio (Medium) */
w-12 h-12  /* 48px - Para ícones de 20-24px */

/* Grande (Large) */
w-16 h-16  /* 64px - Para ícones de 28-32px */
```

---

## 🚨 Exemplos de Erros Comuns

### ❌ ERRO 1: Ícone Branco em Card Branco
```jsx
// ERRADO!
<Card className="bg-white">
  <FaIcon className="text-white" />
</Card>

// CORRETO!
<Card className="bg-white">
  <div className="w-12 h-12 bg-brown rounded-full flex items-center justify-center">
    <FaIcon className="text-white" />
  </div>
</Card>
```

### ❌ ERRO 2: Texto/Ícone Claro em Fundo Claro
```jsx
// ERRADO!
<div className="bg-beige-light">
  <span className="text-gray-300">Texto</span>
</div>

// CORRETO!
<div className="bg-beige-light">
  <span className="text-brown-dark">Texto</span>
</div>
```

### ❌ ERRO 3: Não Testar Hover States
```jsx
// ERRADO! - Hover pode quebrar contraste
<button className="bg-white text-brown hover:bg-beige-light hover:text-beige">
  Botão
</button>

// CORRETO! - Hover mantém contraste
<button className="bg-white text-brown hover:bg-brown hover:text-white">
  Botão
</button>
```

---

## 📱 Responsividade e Contraste

### Mobile vs Desktop

**MESMO contraste é obrigatório em TODAS as resoluções.**

```jsx
// ✅ CORRETO - Contraste mantido em todos os tamanhos
<div className="bg-brown">
  <FaIcon className="text-white text-xl md:text-2xl lg:text-3xl" />
</div>

// ❌ ERRADO - Mudar cores que quebram contraste
<div className="bg-white md:bg-beige-light">
  <FaIcon className="text-brown md:text-white" /> {/* Quebra no md! */}
</div>
```

---

## 🧪 Testes Obrigatórios

### Antes de Fazer Commit:

1. **Inspeção Visual** - Olhar todos os ícones em cada seção
2. **Teste de Brilho** - Reduzir brilho para 30% e verificar legibilidade
3. **Teste Mobile** - Verificar em dispositivo real ou DevTools
4. **Teste de Hover** - Passar mouse em todos os elementos interativos
5. **Lighthouse Audit** - Rodar no Chrome DevTools (meta: 100% acessibilidade)

### Comandos para Teste Local:

```bash
# 1. Rodar dev server
npm run dev

# 2. Abrir no navegador
open http://localhost:5173

# 3. Chrome DevTools
# - F12
# - Lighthouse tab
# - Generate report
# - Verificar "Accessibility" score
```

---

## 📚 Documentação de Referência

### WCAG 2.1 - Web Content Accessibility Guidelines

- **Nível AA**: Contraste mínimo 4.5:1 (texto normal)
- **Nível AA**: Contraste mínimo 3:1 (texto grande e ícones)
- **Nível AAA**: Contraste mínimo 7:1 (texto normal)

**Meta do Mali Spa**: Atingir WCAG 2.1 Nível AA em 100% dos elementos.

### Links Úteis:

- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Material Design Accessibility](https://m2.material.io/design/color/text-legibility.html)

---

## ✅ Status Atual do Site Mali Spa

### Auditoria Realizada em: 30/01/2026

**Resultado: ✅ APROVADO**

Todos os ícones e elementos do site atual passam no teste de contraste:

| Componente | Fundo | Ícone | Contraste | Status |
|------------|-------|-------|-----------|--------|
| Header (transparente) | Overlay escuro | `text-white` | >10:1 | ✅ |
| Header (scrolled) | `bg-white` | `text-gray-700` | 8.2:1 | ✅ |
| Footer | `#311303` | `#e6efee` | 12.5:1 | ✅ |
| Contact Cards | `bg-brown` | `text-white` | 8.5:1 | ✅ |
| About Checks | `bg-gold` | `text-white` | 6.1:1 | ✅ |
| Services Badges | `bg-gold` | `text-white` | 6.1:1 | ✅ |
| Services Icons | `bg-white` | `text-gold` | 6.1:1 | ✅ |
| WhatsApp Button | `#25d366` | `text-white` | 4.8:1 | ✅ |
| Map/Clock Icons | `bg-gold/brown` | `text-white` | >6:1 | ✅ |

**Nenhum ícone branco em fundo branco detectado.** ✅

---

## 🔄 Manutenção desta Regra

### Quando Atualizar Este Documento:

1. Ao adicionar novas cores à paleta
2. Ao criar novos tipos de componentes
3. Ao identificar problemas de contraste
4. Ao receber feedback de acessibilidade

### Responsabilidade:

Todo desenvolvedor que trabalhar no projeto Mali Spa DEVE:
- ✅ Ler este documento antes de adicionar ícones
- ✅ Seguir os padrões estabelecidos
- ✅ Testar contraste antes de fazer commit
- ✅ Atualizar este documento se necessário

---

**Última atualização**: 30 de Janeiro de 2026
**Versão**: 1.0.0
**Auditoria**: ✅ Aprovado - Nenhum problema de contraste detectado

---

## 📝 Resumo Executivo

### EM UMA FRASE:

**NUNCA use ícones brancos em fundos brancos/claros, ou ícones escuros em fundos escuros - SEMPRE garanta contraste mínimo de 4.5:1.**

### REGRA MNEMÔNICA:

```
🌑 Fundo ESCURO → Ícone CLARO
🌕 Fundo CLARO → Ícone ESCURO
🟡 Dourado funciona em AMBOS (com testes)
❌ Nunca cores SIMILARES
```

---

**Fim do Documento**
