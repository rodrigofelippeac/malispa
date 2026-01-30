# URLs das Imagens do Site Antigo - Mali Spa

**Fonte**: https://malispa.keepo.bio/
**Data de extração**: 29 de Janeiro de 2026

## Como Usar Este Arquivo

As URLs abaixo são das imagens hospedadas no site atual do Mali Spa.
**Para baixar**: Abra cada URL no navegador e salve a imagem.

---

## 1. Logo / Avatar / Perfil

**URL**:
```
https://static.keepo.io/users/2e5a4625-b616-44f7-98ed-6a2bcba0ddda/sites/e6ab99aa-54f7-47c7-94a5-21734cffe3ba/39b23878-b3b5-4de3-8e39-87278613a399-cropped.png
```

**Descrição**: Avatar/Logo circular do Mali Spa
**Dimensões**: 96x96 pixels (circular)
**Uso**: Logo principal, favicon
**Formato**: PNG (transparente)

**Salvar como**: `logo-mali-spa.png`

---

## 2. Imagem de Fundo / Hero

**URL**:
```
https://static.keepo.io/users/2e5a4625-b616-44f7-98ed-6a2bcba0ddda/sites/e6ab99aa-54f7-47c7-94a5-21734cffe3ba/e6510eff-6553-40b2-b869-c99c0e0c23cd-cropped.jpeg
```

**Descrição**: Imagem de background/hero principal
**Uso**: Background da página inicial
**Formato**: JPEG

**Salvar como**: `hero-background.jpg`

---

## 3. Imagens de Serviços / Experiências

### Imagem 1
**URL**:
```
https://static.keepo.io/users/2e5a4625-b616-44f7-98ed-6a2bcba0ddda/sites/e6ab99aa-54f7-47c7-94a5-21734cffe3ba/8c398f5a-d48a-4e27-b12b-4d80b4319a01-cropped.jpeg
```

**Descrição**: Imagem de serviço/experiência
**Formato**: JPEG

**Salvar como**: `servico-01.jpg`

---

### Imagem 2
**URL**:
```
https://static.keepo.io/users/2e5a4625-b616-44f7-98ed-6a2bcba0ddda/sites/e6ab99aa-54f7-47c7-94a5-21734cffe3ba/9712d4b5-32b9-4d7f-b5e1-351f9277398a-cropped.jpeg
```

**Descrição**: Imagem de serviço/experiência
**Formato**: JPEG

**Salvar como**: `servico-02.jpg`

---

### Imagem 3
**URL**:
```
https://static.keepo.io/users/2e5a4625-b616-44f7-98ed-6a2bcba0ddda/sites/e6ab99aa-54f7-47c7-94a5-21734cffe3ba/[continua...]
```

**Nota**: A URL foi cortada na extração. Acesse https://malispa.keepo.bio/ para ver as outras 4 imagens.

---

## Estrutura de Pastas Recomendada

Salve as imagens nesta estrutura:

```
briefing/images/
├── site-antigo/
│   ├── logo-mali-spa.png          # Logo/Avatar
│   ├── hero-background.jpg        # Hero/Background principal
│   └── servicos/
│       ├── servico-01.jpg
│       ├── servico-02.jpg
│       ├── servico-03.jpg
│       ├── servico-04.jpg
│       ├── servico-05.jpg
│       └── servico-06.jpg
└── URLS-IMAGENS-SITE-ANTIGO.md   # Este arquivo
```

---

## Instruções de Download

### Método 1: Manual (Navegador)
1. Copie cada URL
2. Cole no navegador
3. Clique direito na imagem
4. "Salvar imagem como..."
5. Salve com o nome sugerido

### Método 2: Terminal (Mais Rápido)
```bash
# Navegar até a pasta
cd /Users/rodrigofelippe/Documents/projetosgit/malispa/briefing/images
mkdir -p site-antigo/servicos

# Baixar logo
curl -o "site-antigo/logo-mali-spa.png" "https://static.keepo.io/users/2e5a4625-b616-44f7-98ed-6a2bcba0ddda/sites/e6ab99aa-54f7-47c7-94a5-21734cffe3ba/39b23878-b3b5-4de3-8e39-87278613a399-cropped.png"

# Baixar hero
curl -o "site-antigo/hero-background.jpg" "https://static.keepo.io/users/2e5a4625-b616-44f7-98ed-6a2bcba0ddda/sites/e6ab99aa-54f7-47c7-94a5-21734cffe3ba/e6510eff-6553-40b2-b869-c99c0e0c23cd-cropped.jpeg"

# Baixar serviço 1
curl -o "site-antigo/servicos/servico-01.jpg" "https://static.keepo.io/users/2e5a4625-b616-44f7-98ed-6a2bcba0ddda/sites/e6ab99aa-54f7-47c7-94a5-21734cffe3ba/8c398f5a-d48a-4e27-b12b-4d80b4319a01-cropped.jpeg"

# Baixar serviço 2
curl -o "site-antigo/servicos/servico-02.jpg" "https://static.keepo.io/users/2e5a4625-b616-44f7-98ed-6a2bcba0ddda/sites/e6ab99aa-54f7-47c7-94a5-21734cffe3ba/9712d4b5-32b9-4d7f-b5e1-351f9277398a-cropped.jpeg"
```

---

## Próximos Passos Após Download

### 1. Otimização das Imagens
As imagens do site antigo podem precisar de otimização:

- **Formato**: Converter para WebP (melhor compressão)
- **Tamanho**: Redimensionar se necessário
- **Compressão**: TinyPNG ou Squoosh
- **Responsive**: Criar versões em diferentes tamanhos

### 2. Uso no Novo Site

**Logo**:
- Vetorizar (criar versão SVG) - solicitar ao designer
- Criar variantes: colorida, branca, preta
- Favicon (16x16, 32x32, 192x192)

**Hero Background**:
- Alta resolução para desktop (1920px+)
- Versões menores para mobile (768px, 375px)
- WebP + JPEG fallback

**Serviços**:
- Padronizar dimensões (ex: 800x600)
- WebP + JPEG fallback
- Lazy loading

### 3. Solicitar ao Cliente

**Imagens Profissionais** (prioridade):
- [ ] Fotos do ambiente interno
- [ ] Salas de tratamento
- [ ] Recepção/área de espera
- [ ] Detalhes (velas, óleos, plantas)
- [ ] Fachada/entrada
- [ ] Equipe (opcional)

**Logo Oficial**:
- [ ] Versão vetorial (SVG/AI)
- [ ] Manual da marca (se houver)
- [ ] Variações de cor

---

## Observações Importantes

### ⚠️ Direitos das Imagens
- As imagens pertencem ao Mali Spa
- Uso autorizado apenas para o novo site
- Não redistribuir ou usar em outros projetos

### 📸 Qualidade
- As imagens do Keepo.bio podem ter qualidade limitada
- **Recomendado**: Solicitar originais ao cliente
- Fotos profissionais fazem MUITA diferença

### 🎨 Estilo Visual
- Observar estilo das imagens atuais
- Manter consistência visual
- Tons quentes, acolhedores
- Foco em detalhes e texturas

---

## Checklist de Assets

### Essenciais (MVP):
- [x] Logo/Avatar (baixado)
- [x] Hero background (baixado)
- [x] Imagens de serviços (parcial)
- [ ] Logo vetorial (solicitar)
- [ ] Fotos profissionais (solicitar)

### Desejável (V2):
- [ ] Galeria do ambiente (5-10 fotos)
- [ ] Fotos da equipe
- [ ] Detalhes/close-ups (produtos, ambiente)
- [ ] Vídeo institucional (opcional)

---

**Última atualização**: 29 de Janeiro de 2026
**Status**: URLs extraídas, aguardando download manual das demais imagens
