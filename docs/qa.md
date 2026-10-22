# Revisão integrada da remodelação

A nova interface foi implementada por Zeus (frontend), Hades (lógica e infraestrutura), Poseidon (testes automatizados) e revisada por Kronos (auditoria geral), com integração e revisão visual independente.

## O que mudou

- Identidade petróleo, marfim e lima, nova composição editorial e hierarquia de conteúdo.
- Qualificação com assunto obrigatório e situação opcional, revisão e ação explícita para continuar no WhatsApp.
- Nenhum campo pessoal, relato livre, documento ou promessa de envio/cadastro automático. O contato continua sendo o publicado anteriormente pelo negócio.
- FAQ nativa, privacidade factual, navegação entre páginas e fallback sem JavaScript.
- Metadados e ícone renovados, componentes legados eliminados e dependência de animação retirada.
- Contraste e foco revisados, textos/controles maiores no celular e nenhuma prova social ou garantia inventada.
- Headers de segurança e testes de lógica, navegador, acessibilidade e privacidade incorporados ao CI.

## Evidências

| Verificação | Evidência |
| --- | --- |
| Instalação limpa | `npm ci` passou após a remoção de Framer Motion |
| Lint e TypeScript | `npm run check` passou |
| Produção | Build passou; home, privacidade, ícone e 404 foram gerados |
| Smoke | Passou: headers, metadados, entrada do qualificador, âncoras, 8 assets e 404 |
| Dependências de produção | Auditoria retornou zero vulnerabilidades |
| Auditoria oficial strict | [Zero achados](qa/static-audit.json), com sourceRoots completos |
| Contexto de design | [Lint oficial](qa/design-lint.json), sem erros; avisos documentais preservados |
| Testes automatizados | 16/16 passaram, zero falhas/ignorados/flaky; [execução de 41,2 s](qa/browser-report.json) |
| Parecer de auditoria | [Kronos](qa/kronos.md) |

O build informa JavaScript inicial da home em aproximadamente 110 kB, contra 149 kB na versão anterior. Essa é a estimativa do Next.js para o bundle inicial, não uma medição de velocidade real ou de aumento de conversão.

## Cobertura do fluxo

A suíte usa Playwright e axe-core em Chromium desktop e mobile emulado. Cobre enum obrigatório/opcional, rejeição de valores desconhecidos, construção de URL com destino fixo, erro e foco, revisão/edição preservada, teclado, limites de foco contra cabeçalho/barra fixa, navegação interna, 404, privacidade e retorno. Há inspeção em larguras de 320, 375, 768 e 1440px.

O teste do WhatsApp intercepta a navegação externa: nenhuma mensagem de teste é enviada ao negócio. São verificados ausência de requisições de mutação e armazenamento das escolhas, além do fallback sem JavaScript sem submissão GET.

A primeira rodada encontrou uma divergência entre o texto visível e o nome acessível do logotipo; a marcação foi corrigida. Uma expectativa excessivamente exata sobre a pontuação do H1 de 404 também foi ajustada, mantendo a exigência de status, idioma, diagnóstico e retorno. Falhas não foram suprimidas.

Os relatórios completos e screenshots são gerados em `playwright-report/` e `test-results/`, ignorados pelo Git. O CI preserva esses artefatos se falhar. Veja [desenvolvimento](development.md) para reproduzir.

## Limitações

- O fluxo qualifica interesse e encaminha para WhatsApp; não existe CRM ou cadastro de lead. Aumento real de conversão depende de medição depois da publicação.
- Não foram comprovados titularidade comercial do número, recebimento de mensagens, domínio/DNS ou publicação desta nova branch na Vercel.
- O Chromium emulado não substitui aparelhos físicos, Safari/iOS, revisão com leitores de tela ou certificação WCAG completa. O axe conserva resultados inconclusivos para revisão, sem mascará-los.
- A auditoria completa inclui alerta upstream na cadeia de desenvolvimento do ESLint. Não foi aplicado downgrade nem supressão; a auditoria de produção é separada e passou.
- A explicação de privacidade descreve a implementação, sem inventar prazos de retenção ou garantir ausência de logs técnicos da hospedagem.
