# Deploy na Vercel

## Configuração do projeto

Conecte `jvogales/landing-page-investcred` à Vercel e use:

| Campo | Valor |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | Raiz do repositório (`.`) |
| Node.js | 24.x |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | Padrão do framework; remova overrides antigos |
| Variáveis obrigatórias | Nenhuma |

`vercel.json` declara o framework e os comandos. Remova configurações antigas de HTML estático, `pages/landing.html`, Live Server e diretórios `dist` ou `public` como saída do build. `public` contém assets, não a aplicação compilada.

## Preview da remodelação

A nova interface e o qualificador ficam na branch `feat/lead-experience`. Para avaliar a versão nova, crie um Preview Deployment dessa branch. A versão de organização anterior estava em `chore/qa-project-review`; escolher essa branch não inclui automaticamente a remodelação.

O fluxo de interesse usa apenas opções guiadas e encaminhamento explícito ao WhatsApp; não requer nova variável de ambiente ou serviço de backend. Valide a página, a revisão da mensagem e o retorno de `/privacidade` antes de promover para produção.

## Branch de produção

A recomendação é usar `main` como branch padrão e de produção **depois** de integrar a versão Next.js e esta organização nela. No diagnóstico de 21/10/2026, `main` ainda estava atrás e a branch padrão remota era `cleanup/remove-old-static`. Não selecione `main` para produção antes de integrar as alterações. Consulte [branches](branches.md).

Primeiro publique um Preview Deployment da branch com as correções. Valide a página e links comerciais; depois integre em `main`, selecione-a em Settings → Environments / Production Branch (conforme a interface da Vercel) e confira o deploy de produção. Configure domínio e DNS no projeto, quando necessário.

## Verificação antes de enviar

```bash
npm ci
npm run check
npm run build
npm run test:smoke
npm run test:e2e
```

## Diagnóstico

- **`npm ci` exige lockfile:** o deploy antigo executava `npm ci --legacy-peer-deps` sem `package-lock.json` nesta branch. O lockfile agora deve acompanhar o código.
- **Arquivo `tsconfig.node.json` não encontrado:** havia uma referência de outro toolchain; removida da configuração Next.js.
- **Deploy parece o site antigo:** confira repositório, branch, commit e Root Directory no deployment.
- **Erro de cache ou arquivos gerados:** `.next` não deve estar no Git. Após atualizar a branch, faça um redeploy sem reutilizar Build Cache se o problema persistir.
- **Falha diferente:** leia o primeiro erro do log de instalação/build, não apenas o status final. Não desative TypeScript ou ESLint para publicar.

Um build local aprovado não comprova publicação na Vercel. Este trabalho não teve acesso aos logs ou às configurações da conta Vercel.
