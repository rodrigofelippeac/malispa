# Mali Spa - Website

Projeto de landing page e sistema administrativo para o Mali Spa, localizado em Tambaú, João Pessoa - PB.

## Sobre o Projeto

O Mali Spa é um espaço de bem-estar que oferece terapias holísticas combinando técnicas ancestrais com uma escuta presente e personalizada. Este projeto visa criar uma presença digital moderna que reflita a essência acolhedora e profissional do spa.

## Estrutura do Projeto

```
malispa/
├── briefing/              # Documentação de referência
│   ├── docs/             # Memória do site antigo, planejamento
│   └── images/           # Assets de referência
├── especialistas/         # Documentação técnica especializada
│   ├── PLANO-LAYOUT.md   # Plano completo de layout
│   └── DESIGN-TOKENS.md  # Tokens de design padronizados
├── frontend/             # Landing Page React
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas da aplicação
│   │   ├── constants/   # Dados e configurações
│   │   └── styles/      # Estilos globais
│   └── public/          # Assets estáticos
└── backend/              # API Fastify (futuro)
```

## Stack Tecnológico

### Frontend
- **Framework**: React 18+
- **Build Tool**: Vite
- **Linguagem**: JavaScript (ES6+)
- **Estilização**: Tailwind CSS
- **Ícones**: React Icons / Lucide React (a definir)

### Backend (Futuro)
- **Framework**: Fastify
- **Banco de Dados**: PostgreSQL / MongoDB (a definir)
- **ORM**: Prisma / Mongoose (a definir)

## Como Começar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
cd malispa
```

2. Instale as dependências do frontend:
```bash
cd frontend
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## Documentação

### Para Desenvolvedores
- **[CLAUDE.md](CLAUDE.md)**: Padrões e regras de desenvolvimento
- **[briefing/docs/PLANEJAMENTO-TECNICO.md](briefing/docs/PLANEJAMENTO-TECNICO.md)**: Arquitetura e stack completo
- **[especialistas/PLANO-LAYOUT.md](especialistas/PLANO-LAYOUT.md)**: Estrutura de layout e componentes
- **[especialistas/DESIGN-TOKENS.md](especialistas/DESIGN-TOKENS.md)**: Tokens de design

### Para Entender o Projeto
- **[briefing/docs/MEMORIA-SITE-ANTIGO.md](briefing/docs/MEMORIA-SITE-ANTIGO.md)**: Informações do site atual
- **[briefing/docs/ASSETS-REFERENCIA.md](briefing/docs/ASSETS-REFERENCIA.md)**: Paleta de cores, fontes e imagens
- **[briefing/README.md](briefing/README.md)**: Overview da documentação

## Identidade Visual

### Cores Principais
- **Primária**: `#311303` (Marrom escuro)
- **Secundária**: `#e6efee` (Verde menta)

### Tipografia
- **Títulos**: Poppins
- **Corpo**: Inter

## Funcionalidades

### Fase 1 (MVP) - Em Desenvolvimento
- [ ] Landing page responsiva
- [ ] Seção Hero com CTA
- [ ] Listagem de serviços
- [ ] Informações de contato
- [ ] Integração WhatsApp
- [ ] Links para redes sociais

### Fase 2 (Futuro)
- [ ] Sistema de agendamento online
- [ ] Painel administrativo
- [ ] Blog de conteúdo
- [ ] Depoimentos de clientes
- [ ] Sistema de gift cards
- [ ] Multi-idioma

## Contato do Cliente

- **WhatsApp**: +55 83 99661-9603
- **Instagram**: [@malisppa_br](https://instagram.com/malisppa_br)
- **Localização**: Tambaú, João Pessoa - PB
- **Site Atual**: https://malispa.keepo.bio/

## Status do Projeto

- [x] Setup inicial do projeto
- [x] Configuração Vite + React + Tailwind
- [x] Documentação de briefing
- [x] Planejamento técnico
- [x] Design tokens definidos
- [ ] Desenvolvimento de componentes base
- [ ] Implementação da landing page
- [ ] Testes e otimizações
- [ ] Deploy frontend
- [ ] Backend administrativo

## Scripts Disponíveis

### Frontend
```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Lint do código
```

## Contribuindo

Este é um projeto privado desenvolvido para o Mali Spa. Para contribuir:

1. Leia toda a documentação em `briefing/` e `especialistas/`
2. Siga os padrões de código estabelecidos
3. Use os design tokens definidos
4. Mantenha a documentação atualizada

## Licença

Projeto privado - Todos os direitos reservados ao Mali Spa.

## Próximos Passos

1. Criar componentes base (Container, Button, Card)
2. Implementar layout (Header, Footer)
3. Desenvolver seções da landing page
4. Adicionar imagens e assets
5. Otimizar performance
6. Deploy inicial

---

**Última atualização**: 29 de Janeiro de 2026
**Versão**: 0.1.0 (Setup inicial)
