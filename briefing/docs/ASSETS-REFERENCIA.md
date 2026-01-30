# Assets e Referências - Site Antigo

## URLs de Imagens para Download

### Logo e Avatar
**Nota**: O site atual usa um avatar/logo circular. Será necessário extrair ou solicitar ao cliente:
- Logo principal Mali Spa
- Versões: colorida, monocrática, horizontal, vertical
- Formatos: PNG (transparente), SVG (vetorial)

### Imagens do Site Atual
O site Keepo.bio atual possui imagens hospedadas. Para o novo site, será necessário:

1. **Solicitar ao cliente**:
   - Fotos profissionais do ambiente
   - Fotos dos serviços sendo realizados
   - Fotos da equipe (se aplicável)
   - Produtos utilizados (se aplicável)

2. **Alternativas temporárias** (para desenvolvimento):
   - Unsplash/Pexels: buscar por "spa", "massage", "wellness"
   - Palavras-chave: spa therapy, massage room, wellness center, relaxation

### Ícones Necessários

Para os serviços e navegação:
- Ícone de massagem/terapia
- Ícone de relaxamento
- Ícone de casal
- Ícone de tempo/duração
- Ícone WhatsApp
- Ícone Instagram
- Ícone localização
- Ícone telefone

**Biblioteca sugerida**: React Icons ou Lucide React

## Paleta de Cores Exata

```css
/* Cores principais */
--primary-brown: #311303;
--secondary-mint: #e6efee;

/* Sugestões de cores complementares */
--brown-light: #5a3825;
--brown-dark: #1a0a01;
--mint-light: #f5faf9;
--mint-dark: #d0e5e2;

/* Cores de apoio */
--white: #ffffff;
--black: #000000;
--gray-light: #f5f5f5;
--gray-medium: #9ca3af;
--gray-dark: #374151;

/* Cores de ação */
--whatsapp-green: #25d366;
--instagram-gradient: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
```

## Fontes

### Google Fonts
```html
<!-- Adicionar ao HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Configuração Tailwind
```javascript
// tailwind.config.js
fontFamily: {
  'heading': ['Poppins', 'sans-serif'],
  'body': ['Inter', 'sans-serif'],
}
```

## Referências de Design

### Estilo Visual
- Minimalista e clean
- Tons terrosos e naturais
- Espaçamento generoso (breathing room)
- Imagens em alta qualidade
- Bordas arredondadas suaves
- Sombras sutis

### Inspirações (sites similares)
- Spas boutique com design moderno
- Foco em experiência do usuário
- Mobile-first approach
- Animações suaves e discretas

## Estrutura de Pastas para Assets

```
frontend/
└── public/
    ├── images/
    │   ├── logo/
    │   │   ├── logo-main.svg
    │   │   ├── logo-white.svg
    │   │   └── favicon.ico
    │   ├── services/
    │   │   ├── therapy.jpg
    │   │   ├── relax.jpg
    │   │   ├── aconchego.jpg
    │   │   ├── revitalizar.jpg
    │   │   └── couples.jpg
    │   ├── ambiente/
    │   │   ├── ambiente-01.jpg
    │   │   ├── ambiente-02.jpg
    │   │   └── ambiente-03.jpg
    │   └── hero/
    │       └── hero-background.jpg
    └── fonts/ (se necessário usar localmente)
```

## Ações Necessárias

### Antes do Desenvolvimento
- [ ] Solicitar logo oficial ao cliente
- [ ] Solicitar fotos profissionais do spa
- [ ] Confirmar paleta de cores oficial
- [ ] Confirmar tipografia (se há marca registrada)

### Durante o Desenvolvimento
- [ ] Usar placeholders temporários
- [ ] Configurar otimização de imagens
- [ ] Implementar lazy loading
- [ ] Garantir imagens responsivas
- [ ] Adicionar alt text adequado (acessibilidade)

### Ferramentas Recomendadas
- **Otimização**: TinyPNG, Squoosh
- **Ícones**: React Icons, Lucide React
- **Imagens temporárias**: Unsplash, Pexels
- **Ferramentas de cor**: Coolors, Adobe Color
