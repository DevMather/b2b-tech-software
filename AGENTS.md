# Regras da Agência & Orquestração Multiagente (Projeto Upgrade)

Este workspace é uma **Fábrica de Landing Pages e Soluções B2B** operada por uma arquitetura multiagente ágil.

## 1. Arquitetura do Time de Agentes

Sempre que o usuário solicitar a criação ou atualização de uma Landing Page, siga o fluxo de engenharia abaixo:

1. **Etapa 1: Planejamento, Copywriting e Prototipagem (`arquiteto-planejador`)**
   - **Modelo Recomendado:** Gemini 4 Argon (Máximo raciocínio e planejamento estrutural).
   - **Responsabilidade:** Analisar o briefing, criar a copy B2B de alta conversão, definir paleta de cores/tipografia e gerar o arquivo `PLANO_LP.md` com o backlog de tarefas.

2. **Etapa 2: Desenvolvimento e Execução de Código (`dev-frontend`)**
   - **Modelo Recomendado:** Claude Opus (ou subagente dedicado de desenvolvimento).
   - **Responsabilidade:** Ler o `PLANO_LP.md` e codificar a Landing Page completa (HTML5, TailwindCSS/CSS3 avançado, JavaScript interativo, animações e responsividade mobile-first).

3. **Etapa 3: Testes, QA e Code Review (`qa-revisor`)**
   - **Modelo Recomendado:** Claude Sonnet (ou subagente dedicado de revisão).
   - **Responsabilidade:** Revisar todo o código gerado contra o `PLANO_LP.md`, validar responsividade, SEO, links de WhatsApp/CTA, acessibilidade, corrigir eventuais bugs e gerar o `RELATORIO_QA.md`.

---

## 2. Modos de Execução no Antigravity

O usuário pode operar este fluxo de duas maneiras:

### Modo A: Híbrido Multi-Modelo (Alternando Modelos na UI para Força Máxima)
Como subagentes em background herdam a família de modelo da sessão atual (`inherit`/`pro`), para usar **literalmente** Gemini 4 Argon + Claude Opus + Claude Sonnet com limite máximo em cada etapa:
1. Com **Gemini 4 Argon** selecionado no topo do chat: Peça *"Fase 1: Planeje a Landing Page do cliente X"*. O agente criará o `PLANO_LP.md` completo.
2. Troque o seletor de modelo para **Claude Opus**: Peça *"Fase 2: Execute o código do PLANO_LP.md"*. O Claude Opus escreverá todo o código da página.
3. Troque o seletor de modelo para **Claude Sonnet**: Peça *"Fase 3: Faça o Code Review e QA da página"*. O Claude Sonnet revisará, testará e refinará o código.

### Modo B: Automático em 1 Clique (Subagentes Autônomos)
Se o usuário pedir *"Rode o ciclo completo da Landing Page automaticamente"*, o agente principal deve:
1. Garantir que os subagentes `arquiteto-planejador`, `dev-frontend` e `qa-revisor` estejam definidos via `define_subagent`.
2. Invocar sequencialmente `arquiteto-planejador` -> `dev-frontend` -> `qa-revisor` usando `invoke_subagent` com `Model: "pro"` ou `"inherit"`.

---

## 3. Padrões de Qualidade de Código (Padrão Agência B2B)
- **Design Moderno:** Nunca entregue páginas genéricas ou simples demais. Use gradientes sutis, glassmorphism, micro-interações no hover, ícones modernos (Lucide/FontAwesome/SVG) e tipografia do Google Fonts.
- **Mobile-First:** Toda página deve ficar impecável em celulares e desktops.
- **Foco em Conversão:** Botões de CTA claros, flutuante de WhatsApp opcional com mensagem personalizada na URL (`https://wa.me/...`), seções de prova social e FAQ interativo (accordion).
- **Organização:** Cada cliente/projeto deve ficar em sua própria subpasta dentro de `projetos/<nome-do-cliente>/`.

