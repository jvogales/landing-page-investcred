import type { Metadata } from 'next';
import '@fontsource/prompt/400.css';
import '@fontsource/prompt/500.css';
import '@fontsource/prompt/700.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'MAX ASSESSORIA | Mais clareza para as suas decisões',
  description: 'Entenda dúvidas sobre descontos no benefício, contratos bancários e intermediação jurídica. Prepare sua conversa com a MAX ASSESSORIA pelo WhatsApp.',
  metadataBase: new URL('https://maxassessoria.com.br'),
  authors: [{ name: 'MAX ASSESSORIA' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'MAX ASSESSORIA',
    title: 'O seu dinheiro merece mais clareza. | MAX ASSESSORIA',
    description: 'Orientação financeira e intermediação jurídica. Entenda o seu cenário e conheça possíveis próximos passos.',
  },
  twitter: {
    card: 'summary',
    title: 'MAX ASSESSORIA | Mais clareza para as suas decisões',
    description: 'Uma boa conversa pode ser o começo de um caminho mais claro. Conheça a MAX ASSESSORIA.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
