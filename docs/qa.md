# Revisão de QA

Revisão executada por dois agentes (frontend e backend/infra), seguida de validação integrada independente. A aplicação é uma landing page pública; não possui backend próprio, autenticação, pagamento ou formulário.

## Correções

- Âncoras e IDs únicos, navegação Sobre funcional e ação Saber mais com destino real.
- Menu móvel com nome acessível, estado expandido, Escape e retorno de foco, fechamento por navegação, clique externo e saída de foco.
- Atalho Pular para o conteúdo, foco visível, alvos de toque e movimento reduzido.
- Links de contato consistentes, sem botão aninhado dentro de link, com aviso de nova aba e `noopener`.
- Hero móvel prioriza título e ação, em vez de reservar 300px para ilustração decorativa.
- Contraste corrigido em navegação, cartões, ações e ícone de WhatsApp. Texto normal sobre gradiente primário usa `--c-on-primary`, com contraste mínimo analítico de 4,81:1 nos endpoints.
- Prompt servida localmente e página 404 em português com retorno funcional.
- Remoção de seções sem uso e de depoimentos, métricas e promessas comerciais sem evidência. O número publicado anteriormente no rodapé foi reutilizado; sua titularidade comercial não foi verificada.
- Smoke robusto, com falhas explícitas para build ausente e porta ocupada.

## Verificações de infraestrutura

| Verificação | Resultado |
| --- | --- |
| `npm ci` | Passou, instalação limpa com lockfile |
| `npm run check` | Lint e TypeScript passaram sem warnings |
| `npm run build` | Passou após as últimas correções |
| `npm run test:smoke` | Passou: homepage, metadados, IDs, âncoras, 11 assets JS/CSS e 404 |
| Smoke sem build / com porta TCP ocupada | Ambos rejeitados como esperado |
| `npm run audit:production` | Zero vulnerabilidades de produção |
| Auditoria estática premium em modo strict | Zero achados; [JSON](qa/static-audit.json) |
| Lint oficial de DESIGN.md | Zero erros; warnings de tokens indiretos registrados abaixo |
| `git diff --check` | Passou |

Os comandos do CI foram executados nesta máquina. Isso não comprova que o GitHub Actions ou um deployment da Vercel executaram esses comandos remotamente.

## Navegador

Chromium headless real via Playwright, com JavaScript e assets de produção. Foram exercitadas larguras de 320, 375, 768 e 1440px, menu móvel, Escape e foco, navegação interna, movimento reduzido, ausência de overflow horizontal e conteúdo já carregado com rede offline. A revisão adicional cobriu teclado no skip link, fechamento por clique externo/saída de foco, contato externo, 404 e retorno, além de reflow com zoom CSS de 200%.

axe-core 4.11.1 foi usado com regras WCAG A/AA (2.0/2.1/2.2). Resultados são registrados em [browser-report.json](qa/browser-report.json) e [interactions.json](qa/interactions.json). Não são uma certificação completa de acessibilidade nem substituem testes com leitor de tela ou dispositivos físicos.

O axe marca parte do contraste como `incomplete` porque existem gradientes e pseudo-elementos. Esses resultados não foram ocultados. A revisão de CSS calculou limites conservadores de contraste: 4,81:1 para texto sobre gradiente primário, 4,84:1 para labels brancas do hero, 4,81:1 para texto claro em cartões compostos, 6,42:1 no CTA e 5,50:1 nas tags do portfólio. São análises das composições declaradas, não medições de todos os pixels e estados possíveis.

## Limitações e publicação

- A auditoria completa ainda aponta cinco alertas de desenvolvimento propagados de `braces@3.0.3`, na cadeia do ESLint. A versão mais recente consultada continua afetada; não houve downgrade ou supressão. A auditoria de produção é independente e passou com zero alertas.
- O lint de DESIGN.md aponta tokens utilizados indiretamente por gradientes/foco; não foram inventados componentes no manifest para silenciar avisos. O CSS é o proprietário dos tokens.
- Não foram testadas a entrega de mensagens pelo WhatsApp, a titularidade do número ou a configuração de domínio/DNS.
- A API GitHub retorna `Forbidden`; branch padrão, proteções e abertura automática de PR não foram modificadas. Não há acesso à conta Vercel para inspecionar logs ou confirmar publicação. Consulte [deploy](deployment.md) e [branches](branches.md).
