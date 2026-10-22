# Desenvolvimento

## Ferramentas e instalação

Use Node.js 24 (`nvm use`, se você usa nvm). Execute os comandos na raiz, junto a `package.json`.

```bash
npm ci
npm run dev
```

`npm ci` usa o lockfile versionado e falha se ele não corresponder ao manifesto. Para alterar dependências, use npm e inclua `package.json` e `package-lock.json` na mesma revisão. Não use `--legacy-peer-deps` para ocultar conflitos.

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servidor com recarga durante desenvolvimento |
| `npm run lint` | ESLint com configuração Next.js |
| `npm run type-check` | TypeScript sem emissão |
| `npm run check` | Lint seguido de TypeScript |
| `npm run build` | Build otimizado e geração de páginas |
| `npm run test:smoke` | Página, metadados, âncoras, JavaScript/CSS e 404 no servidor de produção |
| `npm run audit:production` | Auditoria das dependências de produção (bloqueia alertas altos/críticos) |
| `npm start` | Servidor do build já gerado |

O CI executa instalação limpa, auditoria de produção, check, build e smoke test. O smoke também rejeita portas ocupadas e build ausente. A revisão de QA em navegador está descrita em [qa.md](qa.md); não há suíte de testes de componentes ou garantia de entrega de mensagens pelo WhatsApp.

## Organização

`app/page.tsx` define as seções exibidas. As seções antigas `About` e `WhyMax`, sem uso, foram removidas. A explicação de atendimento fica em `Atendimento`, sem depoimentos atribuídos a clientes sem evidência. Metadados ficam em `app/layout.tsx`; estilos globais em `styles/globals.css`. Não existe configuração de conteúdo carregada de `config.json`.

Não versione `.next`, `node_modules`, `.vercel`, arquivos `.env` com valores ou `*.tsbuildinfo`. O Next.js mantém `next-env.d.ts`; não edite suas referências manualmente.

## Dependências e segurança

Next.js e `eslint-config-next` estão alinhados em 15.5.28, mantendo React 18. `clsx` foi removido porque não era importado. `overrides.postcss` fixa 8.5.31: o Next.js 15 declara uma versão antiga com alertas de segurança. A substituição mantém a API PostCSS 8 e é validada pelo build; revise esse override ao atualizar o framework.

A auditoria também apontou um alerta de negação de serviço em `braces`, dependência de desenvolvimento do plugin ESLint via `fast-glob`/`micromatch`. A versão mais recente consultada (3.0.3) ainda é afetada. Não há downgrade ou supressão desse alerta; acompanhe a correção upstream. Isso não equivale a afirmar que a aplicação explora o caminho vulnerável.

## Limitações conhecidas

- A fonte Prompt é servida localmente por `@fontsource/prompt`, sem requisição obrigatória ao Google Fonts.
- Os links de WhatsApp usam `components/contact.ts`, com o número que já existia no rodapé. A titularidade e a disponibilidade do canal comercial precisam ser verificadas pelo responsável pelo negócio.
- O domínio nos metadados não comprova que domínio, DNS ou projeto Vercel estejam configurados.
