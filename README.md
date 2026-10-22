# MAX ASSESSORIA — website

Landing page de consultoria jurídica e defesa de direitos financeiros. O repositório mantém o nome histórico `landing-page-investcred`; a aplicação atual usa Next.js App Router, React, TypeScript, CSS Modules e Framer Motion.

## Começar

Requer Node.js 24 e npm (a versão do Node está em `.nvmrc`).

```bash
npm ci
npm run dev
```

Não há backend, banco de dados ou variável de ambiente obrigatória. O contato usa links de WhatsApp. `.env.example` documenta esse estado; nunca versione credenciais.

## Validar e executar em produção

```bash
npm run check
npm run build
npm run test:smoke
npm start
```

O smoke test inicia seu próprio servidor de produção na porta 3100, valida página, metadados, âncoras, assets JavaScript/CSS e uma rota inexistente, e encerra o processo. Requer build anterior e porta livre. Não execute `dev` e `build` simultaneamente: ambos escrevem em `.next`.

## Estrutura

- `app/`: layout, metadados e composição da página inicial.
- `components/`: cabeçalho, rodapé, seções e componentes reutilizáveis.
- `styles/globals.css`: estilos e tokens globais.
- `public/`: arquivos estáticos.
- `scripts/`: verificações executáveis.
- `docs/`: desenvolvimento, deploy e fluxo Git.

## Documentação

- [Desenvolvimento](docs/development.md)
- [Deploy na Vercel](docs/deployment.md)
- [Branches e contribuições](CONTRIBUTING.md)
- [Diagnóstico das branches existentes](docs/branches.md)
- [Revisão de QA](docs/qa.md)
- [Histórico](CHANGELOG.md)
- [Contato](CONTACT.md)

A documentação de HTML/Live Server foi substituída. Registros históricos estão em [docs/archive](docs/archive/README.md) e não são instruções atuais.
