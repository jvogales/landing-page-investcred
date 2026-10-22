# Histórico de alterações

## Remodelação para qualificação de interesse — não publicada

- Nova identidade visual, layout editorial, hierarquia de conteúdo e foco na conversa com o visitante.
- Qualificador com escolhas guiadas, revisão e encaminhamento explícito ao WhatsApp, sem cadastro ou envio automático.
- Página de privacidade factual, FAQ, novos metadados e ícone da marca.
- Lógica de contato e qualificação centralizada; componentes e dependência de animação antigos removidos.
- Headers de segurança e testes automatizados Playwright/axe para desktop, celular e fluxo sem JavaScript.

## Organização anterior

- Documentação unificada para o projeto Next.js, com guias de desenvolvimento, Vercel e branches.
- Next.js e configuração ESLint atualizados para 15.5.28; PostCSS corrigido via override e dependência `clsx` não utilizada removida.
- Lockfile npm e Node.js 24 padronizados para instalação reproduzível.
- Configuração da Vercel corrigida para usar `npm ci` com lockfile.
- Referência TypeScript a arquivo inexistente removida.
- `.gitignore` restaurado e configuração antiga do Live Server substituída.
- CI com auditoria de produção, lint, TypeScript, build e smoke test ampliado.
- Navegação e contatos unificados, menu por teclado, foco, contraste e movimento reduzido revisados.
- Fontes servidas localmente, sem dependência de Google Fonts.
- Depoimentos e promessas quantitativas sem evidência substituídos por explicação do atendimento.
- Documentação e configuração legadas preservadas em `docs/archive`.

Publicação e consolidação das branches remotas ainda não foram realizadas. O histórico anterior está no [arquivo](docs/archive/changelog-static.md).
