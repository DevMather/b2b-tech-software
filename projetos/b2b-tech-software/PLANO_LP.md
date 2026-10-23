# Plano Estratégico, Copywriting B2B & Design System — B2B Tech Software

> **Projeto:** Landing Page Oficial — B2B Tech Software  
> **Fase:** 01 — Planejamento, Arquitetura de Conversão, Copywriting & Design System  
> **Agente Responsável:** `arquiteto-planejador`  
> **Status:** Pronto para Execução Front-End (`dev-frontend`)

---

## 1. Visão Estratégica B2B & Diagnóstico de Posicionamento

### 1.1. Posicionamento da Marca
A **B2B Tech Software** posiciona-se como uma **Software House & Produtora de Mídia B2B** focada em performance comercial para negócios locais e prestadores de serviços de alto valor. Ao contrário de freelancers isolados ou agências tradicionais lentas e burocráticas, a B2B Tech Software entrega os **dois pilares fundamentais do crescimento digital moderno** em uma operação unificada, enxuta e previsível:
1. **Infraestrutura de Conversão (Web):** Landing Pages rápidas, mobile-first, com hospedagem monitorada 24h e engenharia persuasiva desenhada para transformar visitantes em conversas qualificadas no WhatsApp.
2. **Retenção e Autoridade Visual (Mídia):** Edição dinâmica de vídeos curtos (Reels/TikTok) e design de artes estáticas de alto padrão para manter o perfil comercial ativo, profissional e magnético nas redes sociais.

### 1.2. Proposta Única de Valor (UVP)
> *"Unimos engenharia de páginas de alta conversão com edição profissional de vídeos e design estratégico para transformar a presença digital da sua empresa em um canal previsível de novos clientes no WhatsApp — sem custos ocultos e com suporte contínuo."*

### 1.3. Diagnóstico da Dor Principal do Público-Alvo
Empresas locais (barbearias premium, clínicas médicas/odontológicas, salões de estética, escritórios de advocacia e contabilidade) sofrem com três gargalos críticos:
- **Gargalo 1 — Presença Digital Amadora:** Perfis desatualizados, artes feitas no improviso e vídeos sem retenção que afastam clientes dispostos a pagar mais caro.
- **Gargalo 2 — Tráfego sem Destino (Link na Bio Fraco):** Quando o cliente clica no Instagram ou pesquisa no Google, encontra apenas um link genérico sem informações claras, gerando desconfiança e perda de vendas antes mesmo do primeiro "Olá".
- **Gargalo 3 — Falta de Tempo e Previsibilidade:** O empresário local não tem tempo para programar sites, gerenciar servidores ou passar horas editando vídeos no celular — e teme contratar agências caras com contratos presos e entregas confusas.

### 1.4. Objetivo de Conversão Primário
Direcionar o decisor B2B para o **WhatsApp Oficial `(61) 99824-5862`** com intenção de compra aquecida, escolhendo entre os **3 Planos Transparentes** (Plano 01: Web | Plano 02: Mídia | Plano 03: Solução Integrada Melhor Custo-Benefício).

---

## 2. Design System Completo (Dark Mode Azul Tecnológico + Branco)

### 2.1. Conceito Estético
**Dark Mode Tecnológico Sério, Corporativo e High-Trust.**  
A interface deve combinar a precisão de uma Software House moderna (inspirada em interfaces como Linear, Vercel e Stripe Dark) com clareza comercial imediata. Uso estratégico de **azul marinho profundo**, **gradientes luminosos em azul ciano/royal**, **textos em branco puro de alto contraste** e superfícies em **Glassmorphism sutil**.

### 2.2. Paleta de Cores Oficial (Tokens HEX & Tailwind Config)

| Token / Função | Nome da Cor | Código HEX | Aplicação Recomendada |
| :--- | :--- | :--- | :--- |
| `bg-primary` | Deep Navy Black | `#060B14` | Fundo principal da página (`body`), atmosfera profunda e tecnológica |
| `bg-secondary` | Midnight Slate | `#0B1324` | Fundo de seções alternadas, base de containers e rodapé |
| `bg-surface` | Tech Card Navy | `#101C33` | Superfície de cards, modais, mockups de código e itens do FAQ |
| `bg-glass` | Frosted Navy Glass | `rgba(16, 28, 51, 0.65)` | Cards com `backdrop-filter: blur(16px)` e Navbar fixa |
| `border-subtle` | Slate Blue Border | `#1E293B` | Bordas estruturais de cards, divisórias e linhas de tabela (`rgba(59, 130, 246, 0.18)` no hover) |
| `brand-primary` | Royal Tech Blue | `#2563EB` | Botões primários, destaques principais, badges de autoridade |
| `brand-bright` | Electric Azure | `#3B82F6` | Estados de hover, ícones ativos, borda do Plano 03 em destaque |
| `brand-glow` | Cyber Sky Glow | `#38BDF8` | Destaques em gradiente de texto, pontos de luz, indicadores de status e glows sutis |
| `brand-soft` | Soft Ice Blue | `#60A5FA` | Subtítulos técnicos, links secundários, ícones de suporte |
| `text-primary` | Pure White | `#FFFFFF` | Títulos (`H1`, `H2`, `H3`), preços em destaque, textos de botões primários |
| `text-secondary` | Ice Silver | `#E2E8F0` | Subheadlines importantes, itens de benefícios inclusos nos planos |
| `text-muted` | Cool Slate Gray | `#94A3B8` | Parágrafos explicativos, textos de apoio, respostas do FAQ |
| `status-success` | Emerald Tech | `#10B981` | Checkmarks de entregáveis inclusos, indicador "Online 24h" |

#### Gradientes Oficiais (CSS Custom)
- **Hero Radial Glow:** `radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.22) 0%, rgba(56, 189, 248, 0.06) 35%, rgba(6, 11, 20, 0) 70%)`
- **Text Gradient (Palavras-Chave):** `linear-gradient(135deg, #FFFFFF 0%, #60A5FA 50%, #38BDF8 100%)`
- **Primary Button Gradient:** `linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #0284C7 100%)`
- **Featured Plan Border/Glow (Plano 03):** Borda sólida `2px solid #3B82F6` com `box-shadow: 0 0 40px -10px rgba(59, 130, 246, 0.45)`

### 2.3. Tipografia (Google Fonts)

Importação obrigatória no `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
```

- **Títulos e Headlines (`font-display`):** `'Plus Jakarta Sans', sans-serif`
  - Pesos: `700` (Bold) e `800` (ExtraBold)
  - Tracking: `-0.03em` (`tracking-tight`) para aparência executiva e moderna.
- **Corpo de Texto e UI (`font-sans`):** `'Inter', sans-serif`
  - Pesos: `400` (Regular), `500` (Medium), `600` (SemiBold)
  - Line-height: `1.6` para leitura confortável em fundo escuro.
- **Badges Técnicos, Números de Planos e Código (`font-mono`):** `'JetBrains Mono', monospace`
  - Usado em: `"PLANO 01"`, `"PLANO 02"`, `"PLANO 03 • SOLUÇÃO INTEGRADA"`, métricas `"24/7"`, tags de código e badges superiores.

### 2.4. Componentes de UI & Micro-Interações
1. **Cards Glassmorphism:** Fundo `rgba(16, 28, 51, 0.65)`, `backdrop-filter: blur(12px)`, borda `1px solid rgba(59, 130, 246, 0.15)`. No `:hover`, transição suave (`300ms cubic-bezier(0.16, 1, 0.3, 1)`) com `translateY(-4px)` e borda iluminada `rgba(56, 189, 248, 0.45)`.
2. **Botões Primários (CTA):** Fundo gradiente azul (`#2563EB` -> `#3B82F6`), texto `#FFFFFF` em negrito, ícone do WhatsApp ou seta que desliza `4px` para a direita no hover, mais `box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.5)`.
3. **Grid Tecnológico de Fundo:** Padrão sutil de linhas ortogonais (`background-size: 40px 40px`) em `rgba(255, 255, 255, 0.025)` no Hero e na seção de Planos para reforçar a identidade de Software House.
4. **Botão Flutuante de WhatsApp:** Fixo no canto inferior direito (`bottom-6 right-6`), com halo pulsante suave e tooltip discreto `"Falar com Especialista"`.

---

## 3. Links Oficiais de Conversão (WhatsApp URLs Codificadas)

Telefone Oficial: **(61) 99824-5862** (`5561998245862`)

- **CTA Geral / Navbar / Hero / Footer:**
  `https://wa.me/5561998245862?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20B2B%20Tech%20Software%20e%20gostaria%20de%20conversar%20com%20um%20especialista%20sobre%20as%20solu%C3%A7%C3%B5es%20para%20minha%20empresa.`
- **CTA Plano 01 (Landing Page com Hospedagem e Suporte):**
  `https://wa.me/5561998245862?text=Ol%C3%A1!%20Tenho%20interesse%20no%20*PLANO%2001%20%E2%80%94%20Landing%20Page%20com%20Hospedagem%20e%20Suporte*%20(Setup%20R%24%20400%20%2B%20R%24%20100%2Fm%C3%AAs).%20Como%20podemos%20iniciar%3F`
- **CTA Plano 02 (Edição de Vídeo e Design para Redes Sociais):**
  `https://wa.me/5561998245862?text=Ol%C3%A1!%20Tenho%20interesse%20no%20*PLANO%2002%20%E2%80%94%20Edi%C3%A7%C3%A3o%20de%20V%C3%ADdeo%20e%20Design%20para%20Redes%20Sociais*%20(Setup%20Isento%20%2B%20R%24%20250%2Fm%C3%AAs).%20Como%20podemos%20iniciar%3F`
- **CTA Plano 03 (Solução Integrada — Site + Mídia Mensal):**
  `https://wa.me/5561998245862?text=Ol%C3%A1!%20Quero%20aproveitar%20o%20*PLANO%2003%20(Solu%C3%A7%C3%A3o%20Integrada%20%E2%80%94%20Site%20%2B%20M%C3%ADdia%20Mensal)*%20com%20desconto%20de%20setup%20por%20R%24%20350%20e%20mensalidade%20unificada%20de%20R%24%20300%2Fm%C3%AAs!`

---

## 4. Arquitetura de Seções e Copywriting Completo

> **Instrução para `dev-frontend`:** Utilize exatamente os textos abaixo. Toda a copy foi calibrada com gatilhos de autoridade, clareza comercial B2B, ancoragem de preços e redução de risco.

---

### SEÇÃO 1: Navbar Fixa (Glassmorphism)
- **Comportamento:** Fixa no topo (`fixed top-0 w-full z-50`), fundo `bg-[#060B14]/80 backdrop-blur-md border-b border-slate-800/80`.
- **Logo (Esquerda):**
  - Ícone tecnológico (cubo/código estilizado em gradiente azul `#2563EB` -> `#38BDF8`) + Texto: **`B2B Tech`** em branco bold + **`Software`** em azul `#38BDF8` (ou badge sutil `B2B`).
- **Links de Navegação (Centro - Desktop / Menu Drawer - Mobile):**
  1. `Soluções` (`#solucoes`)
  2. `Para Quem É` (`#nichos`)
  3. `Como Funciona` (`#como-funciona`)
  4. `Planos e Preços` (`#planos`)
  5. `FAQ` (`#faq`)
- **CTA Rápido (Direita):**
  - Texto do Botão: `Falar no WhatsApp` (com ícone WhatsApp e indicador verde pulsante)
  - Link: URL Geral do WhatsApp `(61) 99824-5862`

---

### SEÇÃO 2: Hero Section (Primeira Dobra de Alto Impacto)
- **Badge Superior (`font-mono`):**
  `● DESENVOLVIMENTO WEB • EDIÇÃO DE MÍDIA`
- **Headline Principal (`H1`):**
  `Estrutura Digital de Elite para Empresas que Querem Vender Todos os Dias.`
  *(Destacar `"Estrutura Digital de Elite"` ou `"Vender Todos os Dias"` com o gradiente de texto Branco -> Azul Brilhante `#38BDF8`)*
- **Subheadline:**
  `Desenvolvemos Landing Pages de alta conversão focadas em levar clientes direto para o seu WhatsApp e produzimos vídeos dinâmicos (Reels/TikTok) e artes profissionais que posicionam sua marca como líder no seu mercado.`
- **Grupo de Botões (CTAs):**
  - **CTA Primário (Botão Azul Vibrante com Glow):** `Ver Planos e Investimento` (âncora suave para `#planos` com ícone de seta)
  - **CTA Secundário (Botão Glass / Borda Azul):** `Falar com Especialista` (link direto para WhatsApp `(61) 99824-5862` com ícone do WhatsApp)
- **Micro-Prova de Confiança (Abaixo dos botões):**
  - `✓ Pagamento Facilitado (50% no início / 50% na entrega)`
  - `✓ Hospedagem e Monitoramento 24h`
  - `✓ Planos Claros e Sem Surpresas`
- **Elemento Visual Tecnológico (Coluna Direita do Hero - Mockup Interativo em Código/UI):**
  Construir em HTML/CSS puro um **Dashboard/Mockup Duplo Flutuante**:
  1. **Janela Principal (Web Engine):** Simulação de uma Landing Page de Alta Conversão com barra de navegador dark (`https://suaempresa.com.br`), cabeçalho com métrica `"Taxa de Conversão +340%"`, botão `"Agendar pelo WhatsApp"` em destaque e snippet flutuante de código limpo (`<LandingPage status="online-24h" conversion="high" />`).
  2. **Card Sobreposto (Media Studio Player):** Card vertical simulando um player de Reels/TikTok com ondas de áudio animadas em CSS, badge `"Reels & TikTok Ready • 60 FPS"`, timeline de corte de vídeo e selo `"4 Vídeos + 4 Artes / mês"`.

---

### SEÇÃO 3: O Problema vs. A Solução B2B (Comparativo de Impacto)
- **Tag da Seção (`font-mono`):** `DIAGNÓSTICO DE MERCADO`
- **Título da Seção (`H2`):** `Por que excelentes empresas locais perdem clientes todos os dias para concorrentes menores?`
- **Subtítulo:** `Hoje, o cliente decide em menos de 5 segundos se a sua empresa transmite confiança ou amadorismo. Veja a diferença entre operar no improviso e ter a B2B Tech Software no seu time:`

- **Coluna Esquerda — Card "Cenário Comum (Sem Estrutura B2B)" (Borda discreta avermelhada/cinza, ícones `X`):**
  - **Título do Card:** `O Custo Invisível do Amadorismo Digital`
  - **Item 1:** **Instagram abandonado ou sem padrão visual:** Postagens esporádicas e artes improvisadas que fazem seu serviço parecer barato.
  - **Item 2:** **Falta de um Site Profissional:** Apenas um link solto na bio. O cliente tem dúvidas sobre seus serviços e desiste antes de chamar no WhatsApp.
  - **Item 3:** **Vídeos que ninguém assiste até o fim:** Falta de cortes dinâmicos, legendas estratégicas e ritmo visual no Reels e TikTok.
  - **Item 4:** **Tempo perdido tentando fazer tudo sozinho:** Você gasta horas tentando editar vídeos ou configurar ferramentas em vez de focar em atender e gerir seu negócio.

- **Coluna Direita — Card "Padrão B2B Tech Software" (Borda iluminada `#3B82F6`, glow azul, ícones `Check` em `#38BDF8`):**
  - **Título do Card:** `Sua Empresa com Presença Digital de Alto Valor`
  - **Item 1:** **Landing Page Profissional no Ar 24h:** Página rápida, responsiva no celular e computador, estruturada para conduzir o visitante direto ao seu atendimento.
  - **Item 2:** **Conteúdo Visual Recorrente e Magnético:** Vídeos curtos editados com retenção máxima para Reels/TikTok e artes estáticas que impõem autoridade imediata.
  - **Item 3:** **Suporte Técnico e Atualizações Mensais:** Precisou trocar fotos, ajustar preços ou atualizar textos do site? Nossa equipe resolve para você sem dor de cabeça.
  - **Item 4:** **Previsibilidade Financeira Total:** Valores tabelados, justos e transparentes — com opção de pacote integrado para economizar todos os meses.

---

### SEÇÃO 4: Nossas Soluções (Os 2 Pilares + Sinergia) (`id="solucoes"`)
- **Tag da Seção (`font-mono`):** `NOSSAS SOLUÇÕES`
- **Título da Seção (`H2`):** `Duas frentes de tecnologia e mídia desenhadas para gerar vendas reais.`
- **Subtítulo:** `Você pode contratar cada serviço separadamente de acordo com a sua necessidade atual ou unir ambos na nossa Solução Integrada.`

#### Card Pilar 01: Engenharia de Landing Pages de Alta Conversão
- **Badge Técnico:** `PILAR 01 • DESENVOLVIMENTO WEB`
- **Título (`H3`):** `Landing Pages Profissionais com Hospedagem e Suporte`
- **Descrição:** `Criamos o site oficial da sua empresa em formato de página única de alta performance. Carregamento ultrarrápido, design moderno adaptado para celulares e computadores, e estrutura pensada para transformar visitantes em chamados no seu WhatsApp.`
- **Lista de Diferenciais Inclusos:**
  - **Foco Total em Atendimento:** Botões estratégicos que levam o cliente direto para o seu WhatsApp com mensagem pronta.
  - **Design 100% Responsivo (Mobile-First):** Experiência impecável tanto no smartphone quanto no desktop.
  - **Hospedagem 24h com Monitoramento:** Seu site sempre online, seguro e monitorado tecnicamente pela nossa equipe.
  - **Manutenção Mensal Inclusa:** Até 2 alterações simples por mês (troca de fotos, atualização de preços ou ajustes de textos).

#### Card Pilar 02: Edição de Vídeo (Reels/TikTok) & Design para Redes Sociais
- **Badge Técnico:** `PILAR 02 • EDIÇÃO DE MÍDIA & DESIGN`
- **Título (`H3`):** `Produção e Edição Recorrente para Instagram e TikTok`
- **Descrição:** `Mantenha o perfil comercial da sua empresa ativo, atraente e profissional sem precisar gastar horas editando. Você grava o material bruto com o celular e nossa equipe transforma em peças visuais de alto impacto.`
- **Lista de Diferenciais Inclusos:**
  - **Até 4 Vídeos Curtos (Reels/TikTok) por mês:** Edição dinâmica com cortes precisos, legendas modernas, tratamento visual e foco em retenção de atenção.
  - **4 Artes Estáticas Profissionais por mês:** Design corporativo alinhado à identidade da sua empresa para feed ou avisos estratégicos.
  - **Zero Taxa de Setup Inicial:** Contratação direta pela mensalidade fixa, sem custo de adesão.
  - **Escala Sob Demanda:** Precisa de mais volume em meses de campanha? Adicione vídeos extras por apenas R$ 40,00 por unidade.

#### Banner Horizontal de Sinergia (Abaixo dos 2 Pilares):
- **Título:** `Quer o máximo resultado com economia mensal?`
- **Texto:** `Ao combinar sua Landing Page + Mídia Mensal no **Plano 03 (Solução Integrada)**, você garante **R$ 50,00 de desconto imediato no Setup** do site e reduz sua mensalidade combinada de R$ 350,00 para **R$ 300,00/mês**.`
- **CTA Rápido:** `Conhecer Solução Integrada →` (leva para `#planos`)

---

### SEÇÃO 5: Para Quem É Ideal (Nichos Atendidos) (`id="nichos"`)
- **Tag da Seção (`font-mono`):** `SEGMENTOS ATENDIDOS`
- **Título da Seção (`H2`):** `Projetado para negócios que vivem de credibilidade e agendamentos.`
- **Subtítulo:** `Nossa metodologia se adapta perfeitamente à rotina de empresas locais e escritórios que precisam atrair clientes qualificados todos os dias.`

- **Grid de 4 Cards Segmentados:**
  1. **Barbearias, Salões & Estética**
     - *Ícone sugerido:* `Scissors` / `Sparkles`
     - *Texto:* Destaque seus cortes, procedimentos e ambiente com Reels dinâmicos e tenha uma página exclusiva para agendamentos rápidos via WhatsApp.
  2. **Clínicas Médicas, Odontológicas & Consultórios**
     - *Ícone sugerido:* `Stethoscope` / `HeartPulse`
     - *Texto:* Transmita máxima segurança e higiene visual. Apresente suas especialidades, corpo clínico, localização e facilite a marcação de consultas.
  3. **Escritórios de Advocacia, Contabilidade & Consultorias**
     - *Ícone sugerido:* `Scale` / `Briefcase`
     - *Texto:* Posicionamento sóbrio, corporativo e de alta autoridade. Transforme dúvidas técnicas em vídeos educativos e capte clientes empresariais na sua Landing Page.
  4. **Comércios Locais & Prestadores de Serviços**
     - *Ícone sugerido:* `Building2` / `Store`
     - *Texto:* De oficinas especializadas a empresas de engenharia e tecnologia: profissionalize sua vitrine digital, apresente seu catálogo/portfólio e receba pedidos de orçamento.

---

### SEÇÃO 6: Como Funciona (Processo Ágil em 4 Passos) (`id="como-funciona"`)
- **Tag da Seção (`font-mono`):** `METODOLOGIA ÁGIL`
- **Título da Seção (`H2`):** `Do primeiro contato ao projeto no ar em 4 etapas simples.`
- **Subtítulo:** `Sem burocracia técnica e sem reuniões intermináveis. Cuidamos de toda a parte pesada para você.`

- **Passo 01 — Alinhamento e Briefing Estratégico**
  - *Descrição:* Você escolhe o plano ideal e conversa com nosso especialista no WhatsApp. Coletamos as informações essenciais da sua empresa, logotipo, fotos, serviços e objetivos.
- **Passo 02 — Desenvolvimento Web & Edição de Mídia**
  - *Descrição:* Nossa equipe entra em ação codificando sua Landing Page exclusiva e/ou editando seus vídeos curtos (Reels/TikTok) e artes estáticas com padrão profissional.
- **Passo 03 — Validação, Aprovação e Ajustes**
  - *Descrição:* Apresentamos o resultado para sua avaliação. No desenvolvimento do site, você só paga os 50% finais após a entrega estar pronta e aprovada.
- **Passo 04 — Publicação 24h & Evolução Mensal**
  - *Descrição:* Colocamos seu site no ar com monitoramento contínuo e entregamos seu pacote mensal de mídias e manutenções para sua empresa nunca parar de crescer.

---

### SEÇÃO 7: Tabela Oficial de Planos e Investimento (`id="planos"`)
> **ATENÇÃO CRÍTICA PARA `dev-frontend`:** Os valores, condições de pagamento e entregáveis abaixo são **100% fiéis à proposta comercial oficial da B2B Tech Software** e devem ser exibidos com máxima precisão e destaque visual.

- **Tag da Seção (`font-mono`):** `TABELA DE INVESTIMENTO TRANSPARENTE`
- **Título da Seção (`H2`):** `Escolha o plano ideal para o momento da sua empresa.`
- **Subtítulo:** `Transparência total do início ao fim: sem taxas surpresas, com pagamento de criação dividido em 50% no início e 50% na entrega.`

#### CARD 1: PLANO 01
- **Tag Superior (`font-mono`):** `PLANO 01`
- **Título do Plano:** `Landing Page com Hospedagem e Suporte`
- **Descrição:** `Site profissional de página única, rápido, responsivo (celular e computador) e focado em levar o cliente direto para o seu atendimento.`
- **Bloco de Preços (Destaque Duplo):**
  - **Box 1 — CRIAÇÃO (SETUP ÚNICO):**
    - Valor: **`R$ 400,00`**
    - Detalhe: `50% no início do projeto e 50% na entrega final`
  - **Box 2 — MENSALIDADE (MANUTENÇÃO E HOSPEDAGEM):**
    - Valor: **`R$ 100,00`** `/mês`
    - Detalhe: `Site sempre online e atualizado`
- **Entregáveis Inclusos:**
  - `✓` Site no ar 24h com monitoramento técnico
  - `✓` Até 2 alterações simples por mês (troca de fotos, preços ou textos)
  - `✓` Design responsivo para celular e computador
  - `✓` Botões diretos para o seu WhatsApp de atendimento
- **Botão CTA:** `Contratar Plano 01`
  - *Link:* `https://wa.me/5561998245862?text=Ol%C3%A1!%20Tenho%20interesse%20no%20*PLANO%2001%20%E2%80%94%20Landing%20Page%20com%20Hospedagem%20e%20Suporte*%20(Setup%20R%24%20400%20%2B%20R%24%20100%2Fm%C3%AAs).%20Como%20podemos%20iniciar%3F`

#### CARD 2: PLANO 02
- **Tag Superior (`font-mono`):** `PLANO 02`
- **Título do Plano:** `Edição de Vídeo e Design para Redes Sociais`
- **Descrição:** `Produção e edição recorrente de conteúdo visual para manter seu perfil comercial ativo e profissional no Instagram e no TikTok.`
- **Bloco de Preços (Destaque Duplo):**
  - **Box 1 — CRIAÇÃO (SETUP):**
    - Valor: **`Isento · R$ 0`**
    - Detalhe: `Contratação direta pela mensalidade`
  - **Box 2 — MENSALIDADE FIXA:**
    - Valor: **`R$ 250,00`** `/mês`
    - Detalhe: `Pacote recorrente de mídia`
- **Entregáveis Inclusos:**
  - `✓` Até 4 vídeos curtos (Reels/TikTok) por mês
  - `✓` 4 artes estáticas por mês
  - `✓` Demandas extras são orçadas à parte: R$ 40,00 por vídeo adicional
- **Botão CTA:** `Contratar Plano 02`
  - *Link:* `https://wa.me/5561998245862?text=Ol%C3%A1!%20Tenho%20interesse%20no%20*PLANO%2002%20%E2%80%94%20Edi%C3%A7%C3%A3o%20de%20V%C3%ADdeo%20e%20Design%20para%20Redes%20Sociais*%20(Setup%20Isento%20%2B%20R%24%20250%2Fm%C3%AAs).%20Como%20podemos%20iniciar%3F`

#### CARD 3 (DESTAQUE PRINCIPAL): PLANO 03 • SOLUÇÃO INTEGRADA
- **Selo de Destaque no Topo:** `MELHOR CUSTO-BENEFÍCIO` (Fundo azul vibrante `#2563EB` com brilho `#38BDF8`)
- **Tag Superior (`font-mono`):** `PLANO 03 • SOLUÇÃO INTEGRADA`
- **Título do Plano:** `Pacote Completo: Site + Mídia Mensal`
- **Descrição:** `A estrutura definitiva para sua empresa: sua Landing Page oficial convertendo clientes 24h somada à presença constante no Instagram e TikTok.`
- **Bloco de Preços (Destaque Duplo com Ancoragem):**
  - **Box 1 — CRIAÇÃO (DESCONTO DE INCENTIVO):**
    - Ancoragem: `De ` ~~`R$ 400,00`~~ ` por`
    - Valor: **`R$ 350,00`**
    - Detalhe: `50% no início / 50% na entrega`
  - **Box 2 — MENSALIDADE UNIFICADA:**
    - Valor: **`R$ 300,00`** `/mês`
    - Detalhe: `Economia direta na assinatura combinada (separados somam R$ 350/mês)`
- **Entregáveis Inclusos:**
  - `✓` Criação do site profissional (Landing Page) + hospedagem 24h
  - `✓` 2 manutenções/atualizações mensais na página
  - `✓` Pacote mensal de mídia: 4 vídeos curtos editados + 4 artes estáticas (vídeos extras a R$ 40,00/un)
- **Botão CTA (Destaque Máximo):** `Quero o Pacote Completo (Plano 03)`
  - *Link:* `https://wa.me/5561998245862?text=Ol%C3%A1!%20Quero%20aproveitar%20o%20*PLANO%2003%20(Solu%C3%A7%C3%A3o%20Integrada%20%E2%80%94%20Site%20%2B%20M%C3%ADdia%20Mensal)*%20com%20desconto%20de%20setup%20por%20R%24%20350%20e%20mensalidade%20unificada%20de%20R%24%20300%2Fm%C3%AAs!`

---

### SEÇÃO 8: Perguntas Frequentes (FAQ Interativo em Accordion) (`id="faq"`)
- **Tag da Seção (`font-mono`):** `DÚVIDAS FREQUENTES`
- **Título da Seção (`H2`):** `Tudo o que você precisa saber antes de começarmos.`
- **Subtítulo:** `Respostas diretas e transparentes sobre pagamentos, prazos e funcionamento dos planos.`

1. **Como funciona o pagamento de 50% no início e 50% na entrega para a criação do site?**
   - *Resposta:* Para sua total segurança e tranquilidade, o valor de criação (Setup) da Landing Page — seja R$ 400,00 no Plano 01 ou R$ 350,00 no Plano 03 — é dividido em duas etapas: você investe 50% na aprovação do início do projeto e os outros 50% apenas na entrega final, quando sua página estiver pronta para ir ao ar.
2. **O que está incluso nas 2 alterações mensais da Landing Page?**
   - *Resposta:* A mensalidade de manutenção e hospedagem garante que seu site fique no ar 24 horas por dia com monitoramento técnico e dá direito a até 2 atualizações simples por mês. Isso inclui troca de fotos da sua empresa, atualização de tabela de preços, mudança de textos promocionais ou alteração de números de contato.
3. **Como eu envio os vídeos para a edição do Plano 02 e Plano 03?**
   - *Resposta:* O processo é extremamente simples! Você grava os vídeos brutos com o seu próprio celular (seguindo nossas orientações práticas de enquadramento e iluminação) e nos envia pelo WhatsApp ou Google Drive. Nossa equipe faz toda a decupagem, cortes dinâmicos, inserção de legendas, efeitos visuais e entrega os arquivos prontos para você postar no Reels e TikTok.
4. **E se em algum mês eu precisar de mais de 4 vídeos editados?**
   - *Resposta:* Sem problemas! Tanto no Plano 02 quanto no Plano 03 você já conta com até 4 vídeos curtos (Reels/TikTok) e 4 artes estáticas por mês. Caso sua empresa tenha uma campanha especial ou queira aumentar a frequência de postagens, cada vídeo adicional é orçado à parte pelo valor fixo de apenas R$ 40,00 por unidade.
5. **Qual é o prazo médio de entrega da Landing Page e das mídias?**
   - *Resposta:* Após o envio das informações iniciais (briefing, textos base e fotos), entregamos a primeira versão completa da sua Landing Page em poucos dias úteis para sua validação.Já os vídeos e artes do pacote mensal seguem um cronograma semanal organizado para que seu perfil esteja sempre abastecido.

---

### SEÇÃO 9: CTA Final de Alta Conversão + Footer Corporativo
- **Bloco CTA Final (Card Panorâmico com Glow Azul Intenso):**
  - **Badge:** `PRONTO PARA PROFISSIONALIZAR SUA EMPRESA?`
  - **Headline (`H2`):** `Pare de perder clientes por falta de posicionamento digital.`
  - **Subheadline:** `Chame nossa equipe agora no WhatsApp, tire suas dúvidas em tempo real e escolha o plano ideal para colocar sua Landing Page e suas mídias em operação.`
  - **Botão CTA Principal:** `Falar no WhatsApp: (61) 99824-5862`
    - *Link:* `https://wa.me/5561998245862?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20B2B%20Tech%20Software%20e%20gostaria%20de%20conversar%20com%20um%20especialista%20sobre%20as%20solu%C3%A7%C3%B5es%20para%20minha%20empresa.`
  - **Texto de Apoio:** `Atendimento comercial rápido • Sem compromisso • Brasília/DF e todo o Brasil`

- **Footer Corporativo (`footer`):**
  - **Coluna 1 (Marca):** Logo `B2B Tech Software` + Descrição curta: *"Soluções profissionais em Desenvolvimento Web (Landing Pages de Alta Conversão) e Edição de Mídia Estratégica para empresas."*
  - **Coluna 2 (Navegação Rápida):** Links para Soluções, Nichos Atendidos, Como Funciona, Planos e FAQ.
  - **Coluna 3 (Contato Direto):**
    - WhatsApp Comercial: `(61) 99824-5862` (clicável)
    - Horário de Atendimento: Segunda a Sexta, Atendimento Comercial B2B
    - Status do Sistema: Indicador verde `"● Todos os servidores operacionais (24/7)"`
  - **Linha de Copyright:** `© 2026 B2B Tech Software. Todos os direitos reservados. Desenvolvido com tecnologia de alta performance.`

---

## 5. Backlog de Tarefas Técnicas para o Agente `dev-frontend`

O desenvolvedor responsável pela **Fase 2 (`dev-frontend`)** deve cumprir rigorosamente o checklist abaixo ao criar o arquivo `projetos/b2b-tech-software/index.html`:

- [ ] **TAREFA 01 — Configuração Base HTML5, SEO & Meta Tags:**
  - Configurar `lang="pt-BR"`, `<title>B2B Tech Software | Landing Pages de Alta Conversão & Edição de Mídia</title>`, meta description persuasiva e OpenGraph tags.
  - Importar Google Fonts (`Plus Jakarta Sans`, `Inter` e `JetBrains Mono`).
  - Importar TailwindCSS via CDN e configurar `tailwind.config` com as cores exatas do Design System (`#060B14`, `#0B1324`, `#101C33`, `#2563EB`, `#3B82F6`, `#38BDF8`, `#FFFFFF`, `#E2E8F0`, `#94A3B8`).
  - Importar biblioteca de ícones moderna (Lucide Icons via CDN `https://unpkg.com/lucide@latest`).

- [ ] **TAREFA 02 — Estilização Customizada Dark Mode Tech (CSS):**
  - Criar classes utilitárias para `.glass-card`, `.glow-blue`, `.text-gradient-blue`, `.bg-grid-pattern` e animações flutuantes suaves (`@keyframes float`, `@keyframes pulse-glow`).
  - Garantir `scroll-behavior: smooth` no `html`.

- [ ] **TAREFA 03 — Navbar Responsiva & Menu Mobile:**
  - Implementar Header fixo com efeito glassmorphism que aumenta a opacidade ao rolar a página.
  - Criar menu hambúrguer funcional em JavaScript para dispositivos móveis com fechamento automático ao clicar em um link de seção.

- [ ] **TAREFA 04 — Construção do Hero Section + Mockup Visual em Código:**
  - Implementar a primeira dobra com a Headline, Subheadline, Badges e os 2 CTAs.
  - Desenvolver o **Mockup Visual Tecnológico** em HTML/CSS (simulando a interface de código/Landing Page + player de edição de vídeo Reels/TikTok com barras de áudio animadas), garantindo que fique visualmente impressionante em desktop e bem adaptado em telas mobile.

- [ ] **TAREFA 05 — Implementação das Seções de Diagnóstico, Soluções, Nichos e Processo:**
  - Codificar a seção comparativa "O Problema vs. A Solução B2B" em 2 colunas contrastantes.
  - Codificar os 2 Pilares de Soluções + Banner de Sinergia.
  - Codificar o grid de 4 Nichos Atendidos e a linha do tempo de 4 Passos ("Como Funciona").

- [ ] **TAREFA 06 — Tabela Oficial de Planos e Investimento (Fidelidade 100% ao Briefing):**
  - Construir o grid de 3 cards de planos (`PLANO 01`, `PLANO 02` e `PLANO 03 • SOLUÇÃO INTEGRADA`).
  - Destacar visualmente o **Plano 03** com borda azul brilhante `#3B82F6`, badge superior `"MELHOR CUSTO-BENEFÍCIO"`, preço riscado `De R$ 400,00 por R$ 350,00` no setup e mensalidade unificada de `R$ 300,00/mês`.
  - Configurar cada botão de plano com seu respectivo link de WhatsApp (`5561998245862`) contendo a mensagem personalizada codificada na URL.

- [ ] **TAREFA 07 — FAQ Interativo (Accordion JS) + CTA Final + Botão Flutuante WhatsApp:**
  - Implementar o Accordion de 5 perguntas frequentes com animação suave de abertura/fechamento e rotação do ícone `+` / `chevron`.
  - Implementar seção de CTA Final, Footer corporativo e botão flutuante fixo do WhatsApp no canto inferior direito (`target="_blank" rel="noopener noreferrer"` em todos os links externos).

- [ ] **TAREFA 08 — Animações de Scroll (IntersectionObserver) & Acessibilidade:**
  - Adicionar efeito de entrada suave (`fade-up` / `reveal`) conforme o usuário rola a página usando `IntersectionObserver`.
  - Garantir atributos `aria-label`, contraste perfeito e zero overflow horizontal (`overflow-x-hidden`) em telas de `320px` a `1920px`.
