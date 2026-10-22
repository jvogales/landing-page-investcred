# Auditoria geral — Kronos

## Escopo e decisão de produto

Revisão da remodelação voltada a encaminhar uma conversa qualificada para o WhatsApp. A implementação é uma landing page de marketing com qualificador local; não há cadastro, coleta de dados pessoais, API de leads, CRM ou confirmação de recebimento pela equipe.

O usuário autorizou a mudança completa da identidade. A nova direção visual é petróleo, marfim frio e lima, com tipografia ampla, conteúdo explicativo e preparação de contato em dois passos. A capacidade técnica de qualificar e encaminhar não comprova aumento medido de conversão.

## Achados corrigidos durante a revisão

| Área | Achado | Correção verificada em código |
| --- | --- | --- |
| Minimização de dados | Proposta inicial incluía nome/contexto livre | Somente assunto e situação escolhidos de enums permitidos; sem campos de dados pessoais |
| Honestidade do fluxo | Preparar poderia ser interpretado como envio | Revisão informa que nada foi enviado e o link diz Continuar no WhatsApp |
| Sem JavaScript | Submit nativo poderia enviar escolhas pela URL do site | Preparo fica desabilitado antes da hidratação; noscript oferece link direto |
| Navegação entre rotas | Âncoras locais quebrariam o shell em /privacidade | Header/Footer usam destinos /#... para a página inicial |
| Validação | Obrigatoriedade só aparecia após o erro | Grupo com legenda explícita, metadata required, erro associado e foco no campo |
| Legibilidade | Texto e controles essenciais muito pequenos | Controles próximos de 16px e conteúdo principal de 15–16px, com reflow móvel |
| Contraste textual | Indicador de progresso tinha 4,12:1 sobre branco | Cor secundária canônica mais escura |
| Contraste de componentes | Radio desmarcado tinha 2,93:1; borda de select 1,32:1 | Token de linha interativa #637B6D, com 4,58:1 sobre branco |
| Foco em fundos escuros | Outline global tinha menos de 3:1 nessas superfícies | Links em seções escuras e rodapé usam foco lima |
| Conteúdo de erro | H1 criativo escondia o diagnóstico de 404 | H1 explícito Página não encontrada |
| Auditoria estática | Configuração padrão varria somente app/ | Manifest premium-ui.json inclui app, components, styles e lib |

## Evidência estática e rastreabilidade

- [Auditoria oficial strict](static-audit.json): zero achados, zero warnings. Foi utilizado o script oficial `scripts/audit_project.py` da skill `frontend-design-premium`, recuperado no ambiente; ele não é distribuído pelo repositório. Com a skill instalada, executar o script sobre a raiz com `--mode strict` usa o manifest versionado.
- [Lint oficial de DESIGN.md](design-lint.json): zero erros. Ferramenta `@google/design.md@0.4.0`, executada com `designmd lint DESIGN.md`. Avisos de tokens não referenciados por componentes são limitações documentais do manifest; os valores e sua aplicação existem no CSS e no texto do DESIGN.
- O auditor estático não executa os comandos do manifest. As validações de produção e navegador são responsabilidade da execução integrada e do relatório de QA.
- Proprietário do contrato de contato: `lib/contact.ts`; regras de qualificação e destino permitido: `lib/leads.ts`; fluxo de edição/revisão: `components/landing/LeadQualifier.tsx`.
- `styles/globals.css` é o proprietário executável dos tokens. DESIGN registra a evolução autorizada da identidade anterior, evitando reescrever regras antigas sem explicar a mudança.

## Parecer integrado: aprovado nesta revisão

A fonte, os contratos, a direção visual e a execução integrada foram aprovados, sem bloqueio pendente de implementação observado. A revisão visual independente inspecionou as capturas de produção em 1440px e 375px; a suíte verificou reflow em 320, 375, 768 e 1440px.

- Build, lint, TypeScript e smoke de produção passaram na execução integrada. O smoke verificou oito assets JS/CSS, metadados, âncoras, status e headers.
- [Execução automatizada real](browser-report.json): **16 testes passaram, zero falhas, zero skips e zero flaky**, em 41,2 segundos. São quatro testes de lógica, seis de desktop e seis de celular.
- [Fluxos verificados](interactions.json): validação e foco, escolhas guiadas, revisão e edição preservadas, handoff explícito interceptado sem envio real, ausência de POST/cookies/storage, navegação, privacidade, 404 e comportamento sem JavaScript.
- Axe executou dez auditorias de estado (inicial, erro, revisão, privacidade e 404 em desktop e celular), com zero violações automáticas.
- O único contraste inconclusivo foi `.art-caption`, repetido em três estados desktop. Trata-se de microtexto decorativo na ilustração `aria-hidden`, e não de formulário, CTA ou informação necessária. O resultado foi preservado. A análise da cor `#C6D3BE` sobre o fundo `#143E39` dá **7,57:1**; mesmo o limite conservador de duas linhas brancas de 4% sobrepostas no grid mantém aproximadamente **6,00:1**, acima de 4,5:1. A captura completa confirma que a legenda está sobre o fundo escuro, sem sobreposição ao papel claro.

Esses resultados não são uma certificação completa WCAG, teste de dispositivo físico ou revisão de leitor de tela. Não se presume publicação remota, recebimento real no WhatsApp, titularidade do telefone, validade comercial de credenciais ou ganho estatístico de leads.

A explicação de privacidade é factual sobre o fluxo implementado; não inventa uma política jurídica completa ou ausência de logs da hospedagem. O contato reutiliza o número já publicado. As escolhas não são persistidas nem enviadas automaticamente pelo site; o visitante decide continuar no serviço externo e confirmar o envio lá.
