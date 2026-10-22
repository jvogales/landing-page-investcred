# Contribuições e branches

Use `main` como destino das mudanças após a consolidação descrita em [docs/branches.md](docs/branches.md).

1. Atualize a branch base e crie uma branch curta: `feat/…`, `fix/…`, `docs/…` ou `chore/…`.
2. Faça uma mudança com escopo claro; inclua lockfile quando alterar dependências.
3. Execute `npm ci`, `npm run check`, `npm run build` e `npm run test:smoke`.
4. Abra um pull request com problema, solução e validação. Confira o Preview da Vercel quando disponível.
5. Integre depois de o CI passar. Exclua a branch de trabalho somente após confirmar sua integração e a ausência de trabalho exclusivo.

Recomenda-se proteger `main` contra force push e exigir o job `Validate` do CI. Essa proteção precisa ser habilitada nas configurações do GitHub; o arquivo de workflow sozinho não a habilita. Não versione outputs de build, credenciais ou instalações locais.
