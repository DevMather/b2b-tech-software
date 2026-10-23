---
name: fabrica-landing-pages
description: >-
  Fluxo completo de criacao de Landing Pages B2B em 3 etapas (Planejamento/Copy,
  Desenvolvimento Front-End e QA/Code Review). Ative esta skill sempre que o usuario
  pedir para criar uma nova Landing Page, planejar um site para cliente ou rodar
  a esteira de agentes.
---

# Skill: Fábrica de Landing Pages B2B

Esta skill padroniza o ciclo de vida de desenvolvimento de Landing Pages (baseado em Metodologias Ágeis, Briefing, Prototipagem e Desenvolvimento Web).

## Estrutura de Pastas por Cliente

Para cada novo projeto, crie uma pasta dedicada:
```text
projetos/<slug-do-cliente>/
├── BRIEFING.md       # Dados do cliente e objetivo da página
├── PLANO_LP.md       # Gerado na Fase 1 (Copy + Wireframe + Design System + Tarefas)
├── index.html        # Código principal da Landing Page (gerado na Fase 2)
├── assets/           # CSS, JS ou imagens locais (se necessário)
└── RELATORIO_QA.md   # Relatório de revisão e testes (gerado na Fase 3)
```

## Passo a Passo do Ciclo

### Fase 1: Planejamento & Prototipagem (`arquiteto-planejador`)
1. Leia o briefing fornecido pelo usuário (ou ajude-o a preencher `briefings/TEMPLATE_BRIEFING.md`).
2. Crie `projetos/<slug-do-cliente>/PLANO_LP.md` contendo:
   - **Diagnóstico B2B:** Proposta única de valor (UVP) e dor principal resolvida.
   - **Design System:** Paleta de cores (Primária, Secundária, Fundo, Texto, Acento/CTA), tipografia (Títulos e Corpo) e estética visual.
   - **Copywriting Seção por Seção:**
     1. Header/Navbar com CTA rápido
     2. Hero Section (Headline magnética, Subheadline, CTA principal, elemento visual/vídeo)
     3. Dores / Problemas do cliente atual
     4. Solução / Serviços (ex: Landing Pages de Alta Conversão & Edição de Vídeos Dinâmicos)
     5. Diferenciais / Como Funciona (Passo a passo simples)
     6. Prova Social / Depoimentos / Números
     7. FAQ (Perguntas Frequentes em Accordion)
     8. Footer + CTA Final
   - **Backlog de Tarefas Técnicas:** Lista numerada de requisitos para o desenvolvedor.

### Fase 2: Execução & Desenvolvimento (`dev-frontend`)
1. Leia `projetos/<slug-do-cliente>/PLANO_LP.md`.
2. Crie `projetos/<slug-do-cliente>/index.html` (e arquivos auxiliares se necessário) usando:
   - HTML5 semântico
   - TailwindCSS (via CDN configurada com as cores e fontes do `PLANO_LP.md`) + CSS customizado para animações suaves
   - Ícones modernos (Lucide Icons ou Phosphor Icons via CDN)
   - JavaScript para menu mobile, animações de scroll (IntersectionObserver), FAQ accordion e integração com link de WhatsApp.

### Fase 3: Testes & Code Review (`qa-revisor`)
1. Inspecione `projetos/<slug-do-cliente>/index.html` comparando item por item com `PLANO_LP.md`.
2. Verifique:
   - Todas as seções planejadas foram criadas?
   - Existe algum link quebrado, tag não fechada ou erro de console JS?
   - O menu mobile e a responsividade funcionam em telas pequenas?
   - Os botões de CTA têm contraste alto e levam para a ação correta?
3. Aplique melhorias diretamente no `index.html` e salve o checklist final em `projetos/<slug-do-cliente>/RELATORIO_QA.md`.

