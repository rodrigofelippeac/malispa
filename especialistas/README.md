# Pasta Especialistas - Mali Spa

Esta pasta contém documentação técnica detalhada e planos especializados para o projeto.

## Documentos

### [PLANO-LAYOUT.md](PLANO-LAYOUT.md)
**Plano completo de layout e estrutura visual**
- Princípios de design
- Estrutura das seções da landing page
- Sistema de componentes
- Responsividade e breakpoints
- Animações e transições
- Acessibilidade
- Performance

### [DESIGN-TOKENS.md](DESIGN-TOKENS.md)
**Tokens de design padronizados**
- Paleta de cores completa
- Sistema tipográfico
- Espaçamentos
- Tamanhos e dimensões
- Bordas e sombras
- Animações
- Z-index

## Propósito

Esta pasta serve como referência técnica para garantir que todo o desenvolvimento mantenha:

1. **Consistência Visual**: Todos os elementos seguem os mesmos padrões
2. **Padronização**: Uso de tokens de design em todo o projeto
3. **Escalabilidade**: Sistema que cresce de forma organizada
4. **Manutenibilidade**: Documentação clara para mudanças futuras

## Como Usar

### Para Desenvolvedores
- Consulte [PLANO-LAYOUT.md](PLANO-LAYOUT.md) antes de criar novos componentes
- Use os tokens de [DESIGN-TOKENS.md](DESIGN-TOKENS.md) em vez de valores hardcoded
- Siga a estrutura de componentes definida

### Para Designers
- Use os tokens como base para o design no Figma/XD
- Mantenha a paleta de cores sincronizada
- Respeite os espaçamentos definidos

### Para Product Owners
- Entenda a estrutura da aplicação
- Veja o roadmap de features
- Compreenda as limitações e possibilidades

## Estrutura de Desenvolvimento

```
malispa/
├── briefing/           # Informações do cliente e site antigo
├── especialistas/      # Documentação técnica (você está aqui)
├── frontend/           # Aplicação React
│   └── src/
│       ├── components/ # Componentes seguindo PLANO-LAYOUT
│       ├── constants/  # Dados usando estrutura definida
│       └── styles/     # Estilos usando DESIGN-TOKENS
└── backend/           # API Fastify (futuro)
```

## Próximas Adições

Documentos que podem ser criados no futuro:
- **ARQUITETURA-BACKEND.md**: Estrutura do Fastify
- **API-DOCUMENTATION.md**: Endpoints e contratos
- **FLUXO-AGENDAMENTO.md**: UX do sistema de agendamento
- **COMPONENTES-AVANCADOS.md**: Componentes complexos
- **GUIA-CONTRIBUICAO.md**: Como contribuir para o projeto

---

**Criado em:** 29 de Janeiro de 2026
**Última atualização:** 29 de Janeiro de 2026
