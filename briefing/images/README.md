# Assets e Imagens - Mali Spa

Esta pasta contém todas as imagens e assets do projeto.

## Estrutura Atual

```
images/
├── site-antigo/                    # Imagens do site atual
│   ├── logo-mali-spa.png          ✅ 52KB
│   ├── hero-background.jpg        ✅ 155KB
│   └── servicos/
│       ├── servico-01.jpg         ✅ 73KB
│       └── servico-02.jpg         ✅ 162KB
├── URLS-IMAGENS-SITE-ANTIGO.md    # URLs para download
└── README.md                       # Este arquivo
```

## Status dos Assets

### ✅ Baixados do Site Antigo

1. **Logo** (logo-mali-spa.png)
   - Formato: PNG com transparência
   - Tamanho: 52KB
   - Dimensões: 96x96px (circular)
   - Status: ✅ Baixado

2. **Hero Background** (hero-background.jpg)
   - Formato: JPEG
   - Tamanho: 155KB
   - Status: ✅ Baixado

3. **Serviços** (2 imagens)
   - servico-01.jpg: 73KB ✅
   - servico-02.jpg: 162KB ✅
   - Status: Parcial (faltam ~4-5 imagens)

### ⚠️ Pendente

- [ ] Demais imagens de serviços do site antigo
- [ ] Logo vetorial (SVG/AI) - solicitar ao cliente
- [ ] Fotos profissionais do ambiente
- [ ] Fotos das salas de tratamento
- [ ] Fotos de detalhes (velas, óleos, plantas)

## Uso das Imagens

### Para o Novo Site (frontend/)

**Caminho final**: `frontend/public/images/`

```
frontend/public/images/
├── logo/
│   ├── logo-main.svg         # Vetorial (solicitar)
│   ├── logo-main.png         # Usar logo-mali-spa.png
│   ├── logo-white.svg        # Variante branca
│   └── favicon.ico           # Gerar do logo
├── hero/
│   └── hero-background.jpg   # Usar hero-background.jpg
└── services/
    ├── therapy.jpg           # Mapear servico-01.jpg
    ├── relax.jpg             # Mapear servico-02.jpg
    └── ... (outros serviços)
```

## Otimizações Necessárias

Antes de usar as imagens no site novo:

### 1. Logo
- [ ] Solicitar versão vetorial (SVG)
- [ ] Criar versão branca para header escuro
- [ ] Gerar favicon (16x16, 32x32, 192x192, 512x512)
- [ ] Criar versão otimizada para web

### 2. Hero Background
- [ ] Redimensionar para múltiplas resoluções:
  - Desktop: 1920x1080
  - Tablet: 1024x768
  - Mobile: 768x1024, 375x667
- [ ] Converter para WebP (melhor compressão)
- [ ] Manter JPEG como fallback
- [ ] Comprimir (TinyPNG ou Squoosh)

### 3. Imagens de Serviços
- [ ] Padronizar dimensões (ex: 800x600 ou 1200x900)
- [ ] Converter para WebP + JPEG fallback
- [ ] Comprimir todas
- [ ] Criar thumbnails (400x300)

## Ferramentas Recomendadas

### Compressão:
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim**: https://imageoptim.com/ (Mac)

### Conversão WebP:
```bash
# Instalar cwebp (Mac)
brew install webp

# Converter imagem
cwebp -q 80 input.jpg -o output.webp
```

### Redimensionamento:
```bash
# ImageMagick
brew install imagemagick

# Redimensionar mantendo proporção
convert input.jpg -resize 1920x1080 output.jpg
```

## Próximos Passos

### Imediato:
1. [x] Baixar imagens disponíveis do site antigo
2. [ ] Solicitar ao cliente:
   - Logo vetorial (SVG/AI)
   - Fotos profissionais do spa
   - Permissão para usar imagens atuais

### Antes do Deploy:
3. [ ] Otimizar todas as imagens
4. [ ] Criar múltiplas resoluções
5. [ ] Converter para WebP
6. [ ] Gerar favicons
7. [ ] Organizar em `frontend/public/images/`

### Futuro (V2):
8. [ ] Galeria completa do ambiente (10-15 fotos)
9. [ ] Fotos da equipe
10. [ ] Vídeo institucional (opcional)

## Checklist de Qualidade

Antes de usar cada imagem no site:

- [ ] Imagem está em alta resolução (mínimo 1920px largura para hero)
- [ ] Imagem está otimizada (WebP + fallback)
- [ ] Alt text definido (acessibilidade)
- [ ] Lazy loading implementado
- [ ] Responsive images (srcset)
- [ ] Imagem carrega rápido (< 200KB idealmente)

## Observações

### Direitos Autorais
- ✅ Imagens pertencem ao Mali Spa
- ✅ Uso autorizado para o novo site
- ⚠️ Não redistribuir ou usar em outros projetos

### Qualidade
- ⚠️ Imagens do Keepo.bio podem ter qualidade reduzida
- 💡 **Recomendação forte**: Solicitar originais ao cliente
- 📸 Fotos profissionais fazem GRANDE diferença na conversão

### Estilo Visual
- Tom: Quente, acolhedor, natural
- Cores: Marrons, verdes, tons terrosos
- Iluminação: Suave, natural
- Composição: Detalhes, texturas, intimidade

---

**Última atualização**: 29 de Janeiro de 2026
**Status**: 4 imagens baixadas | Aguardando assets profissionais do cliente
