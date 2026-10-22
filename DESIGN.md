---
version: alpha
name: MAX ASSESSORIA
description: Clareza financeira e contato consciente em uma landing page brasileira, com qualificação guiada antes de continuar no WhatsApp.
colors:
  primary: '#143E39'
  primary-deep: '#102F2B'
  background: '#F5F7F2'
  surface: '#FFFFFF'
  accent: '#D9F279'
  text: '#1C302B'
  muted: '#56665D'
  line: '#DCE2D7'
  control-line: '#637B6D'
  error: '#A12C28'
typography:
  display:
    fontFamily: "Prompt, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
rounded:
  control: 8px
  card: 16px
spacing:
  page-max: 1240px
components:
  button:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.surface}'
    rounded: '{rounded.control}'
  navigation:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
  qualifier:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    rounded: '{rounded.card}'
  section:
    backgroundColor: '{colors.background}'
    textColor: '{colors.muted}'
  dark-section:
    backgroundColor: '{colors.primary-deep}'
    textColor: '{colors.surface}'
  accent-section:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.primary}'
  error:
    textColor: '{colors.error}'
---

# MAX ASSESSORIA Design System

## Overview

### Creative North Star

Uma conversa que transforma um contrato confuso em um próximo passo compreensível. A página parece uma assessoria atenta e organizada, e não um portal bancário, uma campanha de dinheiro fácil ou um escritório com credenciais jurídicas presumidas.

O usuário autorizou uma remodelação completa, substituindo a identidade turquesa anterior. A nova assinatura é o encontro entre manchete ampla em verde-petróleo e um cartão real de preparação da conversa, com dois passos claros. O acento lima aparece como marca de atenção, não como urgência artificial. A ilustração do papel na seção institucional é abstrata e decorativa, não um documento real analisado.

### Product context and register

- Público: pessoas no Brasil com dúvidas sobre descontos em benefícios, contratos bancários e possíveis encaminhamentos jurídicos, incluindo pessoas com menor familiaridade digital.
- Objetivo: gerar uma conversa qualificada no WhatsApp sem pedir dados pessoais pelo site.
- Evidência: o pedido atual do usuário autoriza reestruturação e nova identidade; contatos e serviços já publicados no código orientam o conteúdo, sem comprovar credenciais, resultados ou garantias comerciais.
- Registro: marketing institucional com um qualificador local. Não há CRUD, cadastro, pagamento, conta ou formulário de coleta de informações pessoais.
- Idioma: português brasileiro; não há mercado ou locale japonês neste projeto.
- Rotas: `/` para a landing page e `/privacidade` para explicação factual do fluxo e infraestrutura.
- Anti-referências: dashboards, excesso de cartões e gradientes, emojis decorativos como hero, contadores inventados, falsos depoimentos, urgência ou disponibilidade online presumida.

### Token ownership and deliberate evolution

`styles/globals.css` é o proprietário executável dos tokens. Este documento registra a intenção e os valores, sem gerar CSS. O prefixo `--color-*` implementa `colors`; `--font-display`/`--font-body` implementam `typography`; `--radius-control`/`--radius-card` implementam `rounded`; `--shell` implementa a largura `page-max`. Os componentes usam esses tokens.

| Regra anterior | Mudança autorizada | Implementação |
| --- | --- | --- |
| Turquesa e azul jurídico em seções com gradiente | Petróleo, marfim frio e lima com superfícies planas | Tokens `--color-*` e seções em `globals.css` |
| Muitos cartões decorativos e CTAs diretos | Hero editorial com qualificador funcional | `LandingPage` e `LeadQualifier` |
| Apenas link genérico de WhatsApp | Seleção guiada, revisão e decisão de continuar | `lib/leads.ts`, sem API de coleta |
| Componentes e CSS Modules por seção legada | Seções estáticas compostas e CSS global canônico | `LandingPage`, `Header`, `Footer` e `landing/` |

## Colors

Petróleo `#143E39` transmite atenção e estabilidade. Marfim frio `#F5F7F2` oferece leitura confortável e evita a aparência de uma tela bancária. Lima `#D9F279` é um acento controlado em superfícies e detalhes; não é usado como texto pequeno sobre branco. Texto primário `#1C302B` e secundário `#56665D` são escuros o suficiente em superfícies claras. Erros são descritos em texto e usam `#A12C28`. Limites de controles e radios usam `--color-control-line` (`#637B6D`), contraste aproximado de 4,58:1 sobre branco; `--color-line` claro serve apenas para separações decorativas. Foco de links em superfícies escuras usa lima; o foco em superfícies claras usa verde escuro.

Ações primárias: fundo petróleo e texto branco. No encerramento em lima, a ação continua petróleo e branca para permanecer reconhecível. Superfícies escuras usam texto claro sólido. Não há tema alternativo; fundos escuros fazem parte da composição da marca.

## Typography

Prompt local, pesos 400/500/700, em wordmark e títulos. Corpo e controles usam fontes de sistema para leitura familiar. Não há fonte externa requerida em runtime. A hierarquia da página usa um H1, títulos de seção H2 e títulos de conteúdo H3.

Conteúdo principal e controles são 15–16px; controles móveis e select têm 16px para legibilidade e evitar zoom automático em iOS. Helpers e notas operacionais têm 12–14px; microtexto decorativo pode ser menor. Não reduzir perguntas, erros ou escolhas essenciais para encaixar um cartão.

## Layout

Conteúdo limitado a 1240px, com margens responsivas. Hero assimétrico: proposição à esquerda, preparação de contato à direita. No celular, proposição e ação precedem o qualificador. O contato persistente móvel fica no rodapé da viewport com espaço seguro e não substitui ações visíveis no conteúdo.

A página pertence à rolagem do documento; não há painéis de conteúdo com scroll interno. Cabeçalho sticky tem âncoras com offset. Chrome compartilhado usa links `/#...` para funcionar também na página de privacidade. Formulário mantém uma base geométrica estável entre escolha e revisão; mensagens de erro ficam adjacentes aos campos. Scrollbars são visíveis, com baseline global padrão e fallback WebKit, e respeitam forced-colors.

## Elevation & Depth

Superfícies majoritariamente planas, com divisórias finas. Apenas o qualificador tem sombra suave para destacar a ação real. A ilustração institucional usa sombra e rotação como recurso visual, sem imitar dados pessoais ou resultado de um caso real. Não empilhar efeitos de brilho, flutuação e parallax.

## Shapes

Ações têm raio de 8px; cartão principal tem raio de 16px. Não transformar todas as peças em pílulas. Círculos têm função específica: seleção de radio, número de etapa ou elemento abstrato da ilustração.

## Components

### Foundational visual states

Links, botões, radios, selects e summaries têm foco visível, hover e semântica nativa. Controles desabilitados não disparam ação. O documento permanece legível sem JavaScript; o preparo interativo fica desabilitado antes da hidratação e um fallback `noscript` oferece contato direto, sem submeter escolhas pela URL da página.

### Buttons and actions

Links navegam; botões alteram estado ou validam o qualificador. Não aninhar botões em links. A ação da fase de revisão é sempre **Continuar no WhatsApp**, abre uma nova aba com `noopener noreferrer` e informa isso a tecnologias assistivas. Não mostrar mensagem enviada, cadastro criado ou lead recebido: o site não executa essas operações.

### Qualification and privacy behavior

Proprietário do contrato: `lib/leads.ts`; proprietário da experiência: `components/landing/LeadQualifier.tsx`.

1. O assunto é obrigatório e escolhido em um grupo de radio com três opções permitidas.
2. A etapa/situação é uma seleção opcional de opções permitidas. **Decisão explícita: native select**, com popup e semântica do sistema operacional aceitos; não exige geometria de popup customizada.
3. Não há nome, telefone, CPF, relato livre, documento, consentimento genérico ou armazenamento local/servidor. Não inventar uma integração de CRM.
4. **Preparar minha conversa** valida localmente. Erro inline associado ao grupo, foco no primeiro campo inválido, escolhas preservadas.
5. Revisão mostra apenas labels permitidas; heading recebe foco. **Editar informações** preserva escolhas e devolve foco ao heading de edição.
6. O link apenas prepara uma mensagem em um destino WhatsApp permitido. O visitante decide abrir o serviço e confirmar o envio lá. Nenhuma requisição de lead é feita pelo site.

### Navigation and disclosure

Header: Como ajudamos, A MAX, Dúvidas frequentes, Conversar com a MAX. Menu móvel é disclosure não modal com `aria-expanded`/`aria-controls`; fecha em Escape, navegação, clique externo e saída de foco. Escape retorna ao gatilho. FAQ usa `details`/`summary` nativos, que continuam funcionais sem JavaScript. Skip link é o primeiro destino de teclado.

### Iconography and illustration

Ícones SVG de traço fino compartilham tamanho e stroke; são decorativos quando acompanhados por texto. A marca MAX usa três barras inclinadas como sinal gráfico abstrato. Não usar avatares, selos de certificação ou marcas de terceiros como falsa prova social.

### Motion

Apenas hover e transições curtas como feedback. Nenhuma animação esconde conteúdo, move controles ou atrasa a leitura. A preferência por movimento reduzido desativa transições e rolagem suave.

### Content and trust

Sem resultados, métricas, clientes, prazos, gratuidade, credenciais jurídicas ou depoimentos inventados. A descrição comercial permanece orientação e intermediação. A FAQ esclarece que não há garantia de resultado; a página de privacidade descreve o fluxo técnico sem fingir política legal completa, prazos de retenção dos provedores ou ausência de logs de hospedagem.

## Do's and Don'ts

- Priorizar clareza, tamanho de leitura e a decisão do visitante.
- Manter um contrato único de contato em `lib/contact.ts` e enums em `lib/leads.ts`.
- Testar o qualificador vazio, revisão, edição, navegação por teclado e abertura externa sem envio automático.
- Não coletar dados pessoais por conveniência de conversão.
- Não apresentar dinheiro recuperado, selos ou depoimentos sem evidência fornecida pelo negócio.
- Não tratar zero violações automáticas como certificação completa de acessibilidade.
