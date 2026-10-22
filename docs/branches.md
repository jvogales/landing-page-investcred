# Diagnóstico e consolidação das branches

Observação do remoto em 21/10/2026:

| Branch | Commit observado | Situação |
| --- | --- | --- |
| `cleanup/remove-old-static` | `cb6ca9a` | Branch padrão remota e base desta tarefa; remove arquivos estáticos antigos, mas o último commit removeu `.gitignore` |
| `main` | `827693c` | Ancestral da base; não contém toda a limpeza posterior |
| `refactor/clean-code` | `1369ae5` | Ancestral de `main` e da base |
| `organize` | `451fe61` | Contém a base e acrescenta lockfile, CI e outputs `.next` versionados; não altera `app`, `components` ou `styles` em relação à base |

Esses nomes e commits são um registro, não uma garantia sobre o estado futuro do remoto. As correções de organização e QA estão na branch `chore/qa-project-review`, criada a partir da base preservada desta tarefa.

## Caminho recomendado

1. Integrar esta organização em `main` por pull request a partir da base `cleanup/remove-old-static`. Antes, atualizar a comparação com o remoto para detectar trabalho novo.
2. Revisar `organize`: os benefícios de instalação reproduzível e CI foram implementados nesta organização. Não fazer merge indiscriminado, pois isso reintroduziria `.next` no Git. Se houver novos commits, revisar separadamente.
3. Validar Preview e produção, então configurar `main` como branch padrão no GitHub e de produção na Vercel.
4. Somente depois arquivar ou excluir branches antigas, preservando qualquer trabalho exclusivo. Nenhuma branch remota foi excluída ou reescrita nesta tarefa.

A leitura Git e o teste de envio (`git push --dry-run`) do remoto funcionaram; chamadas à API GitHub retornaram `Forbidden`. Portanto, não foram alteradas a branch padrão, proteções, pull requests ou configurações da Vercel. Esses passos remotos continuam pendentes.
