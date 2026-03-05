# MAX ASSESSORIA - Website (Next.js)

## 🚀 Setup Rápido

### Requisitos
- Node.js 18+ (recomendado 20 LTS)
- npm ou yarn

### Instalação

```bash
# 1. Instale as dependências
npm install
# ou
yarn install

# 2. Execute em desenvolvimento
npm run dev
# ou
yarn dev

# 3. Abra no navegador
# http://localhost:3000
```

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
app/
  ├── layout.tsx       # Layout principal
  ├── page.tsx         # Página inicial
  └── globals.css      # Estilos globais

components/
  ├── Header.tsx       # Componente do header
  ├── Footer.tsx       # Componente do footer
  ├── ui/
  │   └── Button.tsx   # Componente reutilizável
  └── sections/
      ├── Hero.tsx     # Seção hero
      ├── Services.tsx # Seção serviços
      ├── Portfolio.tsx # Seção projetos
      └── About.tsx    # Seção sobre

styles/
  └── globals.css      # Estilos CSS globais

public/
  └── ...              # Assets státicos

lib/                   # Utilitários (em breve)
```

## 🎨 Tecnologias Utilizadas

- **Next.js 14** - React framework
- **React 18** - Biblioteca UI
- **Framer Motion 11** - Animações
- **CSS Modules** - Estilização
- **TypeScript** - Type safety

## ✨ Features

✅ Landing page moderna e responsiva
✅ Animações suaves com Framer Motion
✅ SEO otimizado
✅ Mobile-first design
✅ Componentes reutilizáveis
✅ TypeScript para type safety
✅ Performance otimizada
✅ Dark mode support (em breve)

## 🔧 Disponíveis Scripts

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build para produção
- `npm start` - Executa build em produção
- `npm run lint` - Verifica código com ESLint

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints para:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎯 Cores da Marca

```
Primary: #48D1CC (Turquesa)
Primary Dark: #2BA39D (Turquesa Escuro)
Secondary: #CDC9C9 (Cinza Claro)
Text: #2C3E50 (Cinza Escuro)
Background: #FFFFFF (Branco)
```

## 📞 Contato

- Email: contato@maxassessoria.com.br
- Telefone: (43) 3371-1212
- WhatsApp: wa.me/554333711212

## 📝 Próximos Passos

- [ ] Implementar página de blog
- [ ] Adicionar formulário de contato dinâmico
- [ ] Integrar com backend
- [ ] Analytics
- [ ] Dark mode
- [ ] Multilíngue (PT/EN)

---

**Versão**: 2.0.0  
**Última atualização**: Março de 2026  
Built with ❤️ using Next.js
