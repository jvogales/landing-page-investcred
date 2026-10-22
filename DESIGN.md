---
version: alpha
name: MAX ASSESSORIA
description: Landing page brasileira de orientação sobre direitos financeiros, preservando a identidade turquesa e azul-escura existente.
colors:
  primary: '#48D1CC'
  primary-dark: '#2BA39D'
  background: '#FFFFFF'
  text: '#2C3E50'
  on-primary: '#102B36'
  secondary: '#CDC9C9'
  light: '#E8F7F6'
  focus: '#163C40'
typography:
  sans:
    fontFamily: "Prompt, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
rounded:
  md: 16px
  lg: 20px
  pill: 50px
spacing:
  page-max: 1440px
  header-max: 1140px
components:
  button:
    textColor: "{colors.on-primary}"
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.md}"
  navigation:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text}"
  card:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  dark-section:
    backgroundColor: "{colors.text}"
    textColor: "{colors.light}"
---

# MAX ASSESSORIA Design System

## Overview

### Creative North Star

Uma página de acolhimento e orientação financeira: turquesa luminoso sobre azul jurídico escuro, com seções alternadas e conteúdo legível. Esta revisão preserva a identidade; não é um redesign.

### Product context and register

- Público: pessoas que buscam informações sobre contratos bancários e direitos financeiros.
- Mercado e idioma: Brasil, português brasileiro; evidência em `app/layout.tsx`, conteúdo e contato do rodapé.
- Uso: landing page pública, principalmente leitura e contato por WhatsApp, em celular ou desktop.
- Registro: marketing institucional; não há CRUD, autenticação, pagamento ou formulário de coleta de dados.
- Assinatura: contraste entre seções escuras, acentos turquesa e cartões arredondados.
- Restrição: legibilidade e clareza das ações prevalecem sobre animações decorativas.
- Anti-referências: dashboards genéricos, falso atendimento em tempo real e depoimentos ou garantias sem evidência.
- Tokens: o proprietário executável é `styles/globals.css`; este documento registra seus valores, sem gerar CSS. CSS Modules consomem `--c-*`, `--radius-*` e `--gradient-*`.

## Colors

`--c-primary` é o turquesa da marca; `--c-dark`/`--c-text` são o texto azul-escuro. Navegação usa `--c-dark` sobre turquesa uniforme. Botões e cartões com gradiente turquesa usam `--c-on-primary` (`#102B36`), cuja razão mínima nos endpoints é 4,80:1; texto branco não é permitido nessas superfícies. Texto turquesa claro fica reservado a títulos grandes sobre fundos escuros; rótulos pequenos em superfícies com transparência usam `#E8F7F6` para manter contraste mesmo durante o brilho decorativo. etiquetas sobre fundos claros usam turquesa profundo `#176660`. O foco usa `--c-focus`, com halo branco para permanecer visível em fundos claros e escuros. Não há tema escuro alternativo; as superfícies escuras fazem parte da marca.

## Typography

Prompt auto-hospedada via `@fontsource/prompt`, pesos 400/500/700/900, com fallback de sistema. Títulos recebem peso 700, corpo 400 e controles 500/700. O site não depende do Google Fonts em runtime. H1 é único e a hierarquia H2/H3 descreve as seções. Links de navegação usam nomes em português, consistentes com seus destinos.

## Layout

Conteúdo com máximo de 1440px; navegação com máximo de 1140px. Breakpoint móvel principal de 768px. O menu móvel é um disclosure não modal no cabeçalho; não é um diálogo e não bloqueia o restante da página. Âncoras possuem espaço de rolagem para o cabeçalho fixo. Em celulares, título e contato antecedem a decoração; a ilustração do Hero fica oculta para não empurrar o CTA para fora da primeira leitura. O documento é dono da rolagem, com scrollbar visível e gutter estável. Não há tabelas, seleção ou formulários.

## Elevation & Depth

Sombras suaves turquesa em cartões e ações; fundo escuro com gradientes preservados. O cabeçalho fixo e o atalho de pular conteúdo devem permanecer acima das seções. Cartões descritivos não usam cursor de botão, pois não executam ações.

## Shapes

Controles e cartões usam os raios `md` de 16px e `lg` de 20px; etiquetas usam formas de pílula. Círculos decorativos são distintos de controles clicáveis.

## Components

### Foundational visual states

Links e botões possuem foco visível, hover e estado pressionado. Desativado aplica-se ao botão nativo, sem estado falso de envio. Não existem operações assíncronas internas, toasts ou skeletons.

### Buttons and actions

`components/ui/Button.tsx` mantém botão nativo para ação e `LinkButton` para navegação, compartilhando estilos. Nunca aninhar botão em link. Links externos de contato indicam abertura de nova aba a leitores de tela. Número do WhatsApp tem proprietário único em `components/contact.ts`, derivado do rodapé existente; não foi inventado um novo contato comercial.

### Navigation and data display

Cabeçalho: Início, Serviços, Sobre, Contato. Destinos únicos e existentes. Menu móvel expõe `aria-expanded`/`aria-controls`, fecha em Escape, navegação, clique externo ou saída de foco. Escape devolve foco ao gatilho. A primeira ação de teclado é Pular para o conteúdo.

### Forms and overlays

Não aplicáveis à landing page atual; não adicionar modais ou formulários fictícios.

### Iconography

Emojis existentes são ilustrações leves, não controles sem texto. O botão flutuante de WhatsApp usa SVG decorativo e nome acessível explícito.

### Motion

Revelações e flutuações preservam o caráter existente, mas `prefers-reduced-motion` remove deslocamentos e animações; conteúdo continua visível. Rolagem suave é desativada sob movimento reduzido. Não usar movimento para esconder informação essencial.

### Content and data visualization

Texto português direto. A revisão remove números de sucesso/valores recuperados não comprovados e promessa de resultado garantido. A antiga seção de depoimentos sem fontes passa a explicar os passos do atendimento, sem atribuir falas a pessoas fictícias. Não há gráficos nem indicadores comerciais comprovados.

## Do's and Don'ts

- Manter identidade turquesa e o contato único existente.
- Garantir navegação por teclado e destinos válidos em todos os tamanhos.
- Não apresentar cartões estáticos como controles.
- Não publicar garantias, métricas ou depoimentos como fatos sem evidência fornecida pelo negócio.
