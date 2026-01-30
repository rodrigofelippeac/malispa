# Internacionalização (i18n) - Mali Spa

## Visão Geral

O site Mali Spa suporta 3 idiomas:
- **Português (pt)** - Idioma padrão
- **Inglês (en)**
- **Espanhol (es)**

A implementação utiliza **react-i18next**, uma biblioteca robusta para internacionalização em aplicações React.

---

## Estrutura de Arquivos

```
frontend/
├── src/
│   ├── i18n.js                    # Configuração do i18next
│   ├── locales/                   # Arquivos de tradução
│   │   ├── pt.json               # Traduções em Português
│   │   ├── en.json               # Traduções em Inglês
│   │   └── es.json               # Traduções em Espanhol
│   ├── components/
│   │   ├── common/
│   │   │   └── LanguageSelector.jsx  # Componente de seleção de idioma
│   │   ├── layout/
│   │   │   ├── Header.jsx        # Header com seletor de idioma
│   │   │   └── Footer.jsx        # Footer traduzido
│   │   └── sections/
│   │       ├── Hero.jsx          # Seção Hero traduzida
│   │       ├── About.jsx         # Seção Sobre traduzida
│   │       ├── Services.jsx      # Seção Serviços traduzida
│   │       └── Contact.jsx       # Seção Contato traduzida
│   └── main.jsx                  # Inicialização do i18n
```

---

## Configuração (i18n.js)

```javascript
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importar arquivos de tradução
import translationPT from './locales/pt.json'
import translationEN from './locales/en.json'
import translationES from './locales/es.json'

// Recursos de tradução
const resources = {
  pt: { translation: translationPT },
  en: { translation: translationEN },
  es: { translation: translationES },
}

// Obter idioma salvo ou usar Português como padrão
const savedLanguage = localStorage.getItem('maliSpaLanguage') || 'pt'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // React já protege contra XSS
    },
  })

// Salvar preferência de idioma quando mudar
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('maliSpaLanguage', lng)
})
```

### Características:
- **Persistência:** O idioma escolhido é salvo no localStorage
- **Fallback:** Se uma tradução não existir, usa o idioma padrão (pt)
- **Interpolação:** Suporta variáveis dinâmicas nas traduções

---

## Estrutura das Traduções

### Organização por Seção

```json
{
  "nav": { /* Navegação */ },
  "hero": { /* Seção Hero */ },
  "about": { /* Seção Sobre */ },
  "services": { /* Serviços */ },
  "contact": { /* Contato */ },
  "footer": { /* Rodapé */ },
  "common": { /* Elementos comuns */ }
}
```

### Exemplo de Uso

**No componente:**
```jsx
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <h1>{t('hero.tagline')}</h1>
  )
}
```

**No arquivo de tradução (pt.json):**
```json
{
  "hero": {
    "tagline": "Um convite ao cuidado"
  }
}
```

---

## Componente LanguageSelector

Localização: `/src/components/common/LanguageSelector.jsx`

### Funcionalidades:
- **Dropdown elegante** com bandeiras e nomes dos idiomas
- **Indicador visual** do idioma ativo
- **Responsivo** - mostra apenas bandeira em telas pequenas
- **Fechamento automático** ao clicar fora
- **Persiste escolha** via localStorage

### Idiomas Disponíveis:
```javascript
const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
]
```

### Integração:
- **Header Desktop:** Ao lado do botão WhatsApp
- **Header Mobile:** Dentro do menu hamburguer

---

## Tradução de Serviços

Os serviços são mapeados por IDs para chaves de tradução:

```javascript
const serviceKeys = {
  1: 'experienceTherapy',
  2: 'experienceRelax',
  3: 'ritualAconchego',
  4: 'ritualRevitalizar',
  5: 'daySpaMali',
  6: 'daySpaSentir',
  7: 'coupleExperiences',
}

// Uso:
const serviceName = t(`services.items.${serviceKeys[service.id]}.name`)
const serviceDescription = t(`services.items.${serviceKeys[service.id]}.description`)
```

---

## Interpolação de Variáveis

Exemplo de mensagem WhatsApp personalizada:

**Tradução:**
```json
{
  "contact": {
    "serviceMessage": "Olá! Gostaria de agendar: {{serviceName}}"
  }
}
```

**Uso:**
```javascript
const message = t('contact.serviceMessage', {
  serviceName: 'Experience Therapy'
})
// Resultado: "Olá! Gostaria de agendar: Experience Therapy"
```

---

## Adicionando Novas Traduções

### Passo 1: Adicionar chave nos 3 arquivos de tradução

**pt.json:**
```json
{
  "newSection": {
    "title": "Novo Título"
  }
}
```

**en.json:**
```json
{
  "newSection": {
    "title": "New Title"
  }
}
```

**es.json:**
```json
{
  "newSection": {
    "title": "Nuevo Título"
  }
}
```

### Passo 2: Usar no componente

```jsx
import { useTranslation } from 'react-i18next'

export default function NewComponent() {
  const { t } = useTranslation()

  return <h2>{t('newSection.title')}</h2>
}
```

---

## Boas Práticas

### 1. Chaves Descritivas
✅ `services.scheduleButton`
❌ `btn1`

### 2. Organização Hierárquica
```json
{
  "about": {
    "differentials": {
      "listening": {
        "title": "...",
        "description": "..."
      }
    }
  }
}
```

### 3. Consistência
- Use a mesma estrutura nos 3 arquivos
- Mantenha a mesma ordem de chaves
- Verifique todos os idiomas ao adicionar novas traduções

### 4. Contexto
```json
{
  "contact": {
    "whatsapp": "WhatsApp",    // Label do botão
    "phone": "Telefone"         // Label do botão
  }
}
```

---

## Tradução de Textos Dinâmicos

### Multi-linha com `\n\n`:
```javascript
{t('about.description').split('\n\n').map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}
```

### Pluralização (se necessário no futuro):
```json
{
  "services": {
    "count_one": "{{count}} serviço",
    "count_other": "{{count}} serviços"
  }
}
```

---

## Testando as Traduções

### Manual:
1. Abrir o site: http://localhost:5173
2. Clicar no seletor de idioma (ícone do globo)
3. Selecionar cada idioma e verificar todas as seções

### Checklist de Verificação:
- [ ] Header (navegação e botões)
- [ ] Hero (tagline, descrição, CTAs)
- [ ] About (título, descrição, diferenciais)
- [ ] Services (título, descrição dos serviços, botões)
- [ ] Contact (formulários, informações)
- [ ] Footer (links, copyright)

---

## Arquivos de Tradução

### Localização:
- [/frontend/src/locales/pt.json](/frontend/src/locales/pt.json)
- [/frontend/src/locales/en.json](/frontend/src/locales/en.json)
- [/frontend/src/locales/es.json](/frontend/src/locales/es.json)

### Tamanho Estimado:
- ~150-200 linhas por arquivo
- Cobertura completa do site

---

## Próximos Passos (Opcional)

### Recursos Avançados:
1. **Tradução de datas e números**
   ```javascript
   const date = new Date()
   const formattedDate = new Intl.DateTimeFormat(i18n.language).format(date)
   ```

2. **Namespaces** (para sites maiores)
   ```javascript
   const { t } = useTranslation(['common', 'services'])
   t('common:welcome')
   t('services:list')
   ```

3. **Detecção automática de idioma do navegador**
   ```javascript
   import LanguageDetector from 'i18next-browser-languagedetector'
   i18n.use(LanguageDetector)
   ```

4. **Lazy loading de traduções** (performance)
   ```javascript
   import Backend from 'i18next-http-backend'
   i18n.use(Backend)
   ```

---

## Ferramentas Úteis

### Validação de JSON:
- [JSONLint](https://jsonlint.com/)
- [JSON Formatter](https://jsonformatter.curiousconcept.com/)

### Tradução:
- Google Translate (revisão manual sempre recomendada)
- DeepL (melhor qualidade para PT/EN/ES)
- Profissional para versão final

---

## Suporte e Documentação

### Documentação Oficial:
- [react-i18next](https://react.i18next.com/)
- [i18next](https://www.i18next.com/)

### Exemplo de Uso no Projeto:
- Ver qualquer componente em `/src/components/sections/`
- Todos seguem o mesmo padrão de implementação

---

## Resumo da Implementação

✅ **3 idiomas completos:** Português, Inglês, Espanhol
✅ **Seletor visual:** LanguageSelector com bandeiras
✅ **Persistência:** localStorage salva preferência
✅ **100% traduzido:** Todas as seções do site
✅ **Responsivo:** Funciona em mobile e desktop
✅ **Fácil manutenção:** Estrutura organizada e documentada
