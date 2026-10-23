# Projeto Upgrade

### Uma fábrica digital para transformar boas ideias em presença online profissional.

O **Projeto Upgrade** reúne processos, briefings e páginas de apresentação para criar soluções digitais voltadas a empresas e negócios. O repositório organiza cada cliente em sua própria pasta e orienta o trabalho desde o entendimento do negócio até a implementação e revisão da página.

> **Projeto em destaque:** [B2B Tech Software](./projetos/b2b-tech-software/) — uma landing page para apresentar serviços de desenvolvimento web e produção de conteúdo para redes sociais, com atendimento pelo WhatsApp.

---

## Índice

- [O que você encontra aqui](#o-que-você-encontra-aqui)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Projeto B2B Tech Software](#projeto-b2b-tech-software)
- [Visualizar a página](#visualizar-a-página)
- [Fluxo de criação](#fluxo-de-criação)
- [Criar um projeto para um novo cliente](#criar-um-projeto-para-um-novo-cliente)
- [Tecnologias](#tecnologias)

## O que você encontra aqui

- **Processo documentado:** orientações para planejar, desenvolver e revisar landing pages.
- **Briefing reutilizável:** um ponto de partida para reunir as informações de cada cliente.
- **Projetos organizados por cliente:** planejamento, conteúdo e código mantidos juntos.
- **Uma página completa para a B2B Tech Software:** apresentação de serviços, planos, perguntas frequentes e chamadas para contato.

## Estrutura do repositório

```text
.
├── .agents/
│   └── skills/
│       └── fabrica-landing-pages/
│           └── SKILL.md
├── briefings/
│   └── TEMPLATE_BRIEFING.md
├── projetos/
│   └── b2b-tech-software/
│       ├── BRIEFING.md
│       ├── PLANO_LP.md
│       ├── index.html
│       └── assets/
│           ├── css/
│           │   └── style.css
│           └── js/
│               └── main.js
├── AGENTS.md
└── README.md
```

### Arquivos principais

| Arquivo | Para que serve |
| --- | --- |
| [`AGENTS.md`](./AGENTS.md) | Diretrizes e padrões de trabalho do repositório. |
| [`briefings/TEMPLATE_BRIEFING.md`](./briefings/TEMPLATE_BRIEFING.md) | Modelo para coletar as informações de um novo projeto. |
| [`.agents/skills/fabrica-landing-pages/SKILL.md`](./.agents/skills/fabrica-landing-pages/SKILL.md) | Fluxo e critérios para planejar, desenvolver e revisar landing pages. |
| [`projetos/b2b-tech-software/BRIEFING.md`](./projetos/b2b-tech-software/BRIEFING.md) | Informações e oferta comercial da B2B Tech Software. |
| [`projetos/b2b-tech-software/PLANO_LP.md`](./projetos/b2b-tech-software/PLANO_LP.md) | Estratégia, copy, identidade visual e requisitos da página. |
| [`projetos/b2b-tech-software/index.html`](./projetos/b2b-tech-software/index.html) | Documento HTML principal da landing page. |
| [`projetos/b2b-tech-software/assets/css/style.css`](./projetos/b2b-tech-software/assets/css/style.css) | Estilos visuais e responsivos. |
| [`projetos/b2b-tech-software/assets/js/main.js`](./projetos/b2b-tech-software/assets/js/main.js) | Interações da página. |

## Projeto B2B Tech Software

A página apresenta uma empresa que combina **desenvolvimento de landing pages** com **edição de vídeos curtos e criação de artes para redes sociais**. O objetivo é explicar os serviços e os planos com clareza e facilitar o contato comercial pelo WhatsApp.

### Seções da página

- Apresentação da marca e chamada principal.
- Comparativo entre os desafios da presença digital sem estrutura e os serviços oferecidos.
- Soluções de desenvolvimento web e produção de mídia.
- Segmentos atendidos e etapas de trabalho.
- Planos e preços, incluindo a solução integrada.
- Perguntas frequentes, chamada final e informações de contato.

### Planos apresentados

| Plano | Criação / setup | Mensalidade | Resumo |
| --- | ---: | ---: | --- |
| **01 — Landing Page** | R$ 400,00 | R$ 100,00/mês | Página profissional, hospedagem e até duas alterações simples mensais. |
| **02 — Mídia** | Isento | R$ 250,00/mês | Até quatro vídeos curtos e quatro artes estáticas por mês. |
| **03 — Solução Integrada** | R$ 350,00 | R$ 300,00/mês | Landing page e pacote mensal de mídia em uma assinatura combinada. |

Os valores e condições estão descritos no [briefing comercial](./projetos/b2b-tech-software/BRIEFING.md). Consulte-o antes de reproduzir preços em outros materiais.

## Visualizar a página

Não é necessário instalar dependências locais para abrir a página:

1. Abra [`projetos/b2b-tech-software/index.html`](./projetos/b2b-tech-software/index.html) no navegador; ou
2. Abra a pasta do projeto no VS Code e use uma extensão de servidor local, como **Live Server**, para visualizar a página.

O Tailwind CSS, os ícones Lucide e as fontes são carregados por CDN. Para que esses recursos apareçam corretamente, é necessária uma conexão com a internet.

### Publicar no GitHub Pages

O workflow [`.github/workflows/static.yml`](./.github/workflows/static.yml) publica somente `projetos/b2b-tech-software/`, onde está o `index.html` do site. Assim, os arquivos Markdown e demais conteúdos da raiz do repositório não substituem a página inicial.

No GitHub, abra **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação. Depois, envie as alterações para a branch `main`; o workflow fará o deploy automaticamente. Também é possível iniciá-lo manualmente pela aba **Actions**.

## Fluxo de criação

O processo está organizado em três fases:

1. **Planejamento:** entender o briefing, definir posicionamento e identidade visual, escrever a copy e documentar a estrutura da página em `PLANO_LP.md`.
2. **Desenvolvimento:** implementar a experiência em HTML, CSS e JavaScript, seguindo o plano e os requisitos do cliente.
3. **QA e revisão:** conferir a página em relação ao plano, testar navegação, responsividade, acessibilidade e chamadas para ação, e registrar os resultados em `RELATORIO_QA.md`.

As instruções detalhadas estão em [`AGENTS.md`](./AGENTS.md) e na [skill da fábrica](./.agents/skills/fabrica-landing-pages/SKILL.md).

## Criar um projeto para um novo cliente

1. Copie o [template de briefing](./briefings/TEMPLATE_BRIEFING.md) e preencha as informações com o cliente.
2. Crie uma pasta em `projetos/` usando um identificador simples, por exemplo `projetos/nome-do-cliente/`.
3. Salve o briefing como `BRIEFING.md` e documente a estratégia e os requisitos em `PLANO_LP.md`.
4. Desenvolva a página e seus arquivos auxiliares dentro da pasta desse cliente.
5. Faça a revisão final e registre o resultado em `RELATORIO_QA.md`.

Mantenha cada projeto independente e confirme com o cliente os dados de contato, preços, condições comerciais e conteúdo antes da publicação.

## Tecnologias

- **HTML5** para a estrutura semântica.
- **Tailwind CSS via CDN** e **CSS personalizado** para o layout e o design responsivo.
- **JavaScript sem framework** para menu mobile, FAQ, navegação e animações de entrada.
- **Lucide** para ícones.
- **Google Fonts:** Inter, Plus Jakarta Sans e JetBrains Mono.

---

<p align="center">
  Feito para organizar ideias, dar forma a projetos e construir presenças digitais melhores.
</p>
