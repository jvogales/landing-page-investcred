# MAX ASSESSORIA — website

Site institucional com qualificação de interesse e encaminhamento para atendimento via WhatsApp. O repositório mantém o nome histórico `landing-page-investcred`; a aplicação atual usa Next.js App Router, React, TypeScript, CSS Modules e Framer Motion.

## Começar

Requer Node.js 24 e npm (a versão do Node está em `.nvmrc`).

```bash
npm ci
npm run dev
```

Não há backend de coleta, banco de dados ou variável de ambiente obrigatória. O qualificador usa opções guiadas, prepara uma mensagem e deixa o visitante decidir se quer enviá-la pelo WhatsApp. `.env.example` documenta esse estado; nunca versione credenciais.

## Validar e executar em produção

```bash
npm run check
npm run build
npm run test:smoke
# Navegador instalado conforme docs/development.md:
npm run test:e2e
npm start
```

O smoke test inicia seu próprio servidor de produção na porta 3100, valida página, metadados, âncoras, assets JavaScript/CSS e uma rota inexistente, e encerra o processo. Requer build anterior e porta livre. Não execute `dev` e `build` simultaneamente: ambos escrevem em `.next`.

## Estrutura

- `app/`: layout, metadados e composição da página inicial.
- `components/`: página institucional, cabeçalho, rodapé e qualificador.
- `lib/`: contato compartilhado, opções permitidas e validação do fluxo.
- `tests/e2e/`: testes automatizados de lógica, interface e acessibilidade.
- `styles/globals.css`: estilos e tokens globais.
- `public/`: arquivos estáticos.
- `scripts/`: verificações executáveis.
- `docs/`: desenvolvimento, deploy e fluxo Git.

## Documentação

- [Desenvolvimento](docs/development.md)
- [Deploy na Vercel](docs/deployment.md)
- [Branches e contribuições](CONTRIBUTING.md)
- [Diagnóstico das branches existentes](docs/branches.md)
- [Fluxo de qualificação](docs/leads.md)
- [Revisão de QA](docs/qa.md)
- [Histórico](CHANGELOG.md)
- [Contato](CONTACT.md)

A documentação de HTML/Live Server foi substituída. Registros históricos estão em [docs/archive](docs/archive/README.md) e não são instruções atuais.
