# Desenvolvimento

## Ferramentas e instalação

Use Node.js 24 (`nvm use`, se você usa nvm). Execute na raiz, junto a `package.json`:

```bash
npm ci
npm run dev
```

A instalação usa `package-lock.json`. Alterações de dependências devem incluir manifesto e lockfile na mesma revisão. Não use `--legacy-peer-deps` para ocultar conflitos.

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Desenvolvimento com recarga |
| `npm run check` | ESLint e TypeScript |
| `npm run build` | Build de produção |
| `npm run test:smoke` | HTTP, headers, navegação, assets e 404 |
| `npm run test:e2e` | Lógica e testes de navegador com Playwright/axe |
| `npm run test:e2e:ui` | Interface interativa do Playwright |
| `npm run audit:production` | Auditoria de dependências de produção |
| `npm start` | Executar o build já gerado |

Antes do E2E, gere o build e instale o Chromium pelo comando oficial `npx playwright install chromium`. Em Linux, a instalação das dependências do navegador pode usar `npx playwright install --with-deps chromium`. Na máquina de nuvem com Chromium de sistema já disponível:

```bash
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e
```

A suíte inicia e encerra seu próprio servidor de produção na porta 3200; o smoke usa 3100. Não execute desenvolvimento e build simultaneamente: ambos escrevem em `.next`. Relatórios ficam em `playwright-report/` e artefatos em `test-results/`, ignorados pelo Git. O CI executa instalação limpa, auditoria, check, build, smoke e E2E.

## Organização

`app/page.tsx` compõe `components/LandingPage.tsx`. Cabeçalho, rodapé e qualificador ficam em `components/`. `lib/leads.ts` mantém opções, validação e URL de WhatsApp; `lib/contact.ts` mantém o contato compartilhado. Consulte [o contrato do fluxo](leads.md).

O proprietário executável dos tokens e estilos é `styles/globals.css`; `DESIGN.md` registra a direção visual. A fonte Prompt é local via `@fontsource/prompt`, com corpo de sistema. Metadados e ícone ficam em `app/`; `/privacidade` explica o funcionamento real do site. O qualificador não tem backend de cadastro ou envio.

Não versione `.next`, instalações, relatórios gerados, `.vercel` ou valores de ambiente. Não há variável obrigatória nem banco de dados. Não restaure a antiga referência de `next-env.d.ts`: o Next.js mantém esse arquivo.

## Dependências e segurança

Next.js e `eslint-config-next` estão alinhados em 15.5.28, com React 18. `overrides.postcss` fixa 8.5.31 para corrigir alertas na versão transitiva declarada pelo framework; revise esse override nas futuras atualizações. A remodelação retirou Framer Motion porque não utiliza a biblioteca.

A auditoria completa inclui um alerta upstream em `braces`, na cadeia de desenvolvimento do ESLint. Não houve downgrade nem supressão. A auditoria de produção é executada separadamente.

O contato deriva dos dados já publicados no rodapé. Sua titularidade e entrega de mensagens não são comprovadas pelos testes. O domínio nos metadados também não comprova configuração de DNS ou domínio na Vercel. Resultados executados e limitações estão em [QA](qa.md).
