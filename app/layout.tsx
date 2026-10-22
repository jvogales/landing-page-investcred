import type { Metadata } from 'next';
import '@fontsource/prompt/400.css';
import '@fontsource/prompt/500.css';
import '@fontsource/prompt/700.css';
import '@fontsource/prompt/900.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'MAX ASSESSORIA - Consultoria Jurídica',
  description: 'MAX ASSESSORIA - Consultoria Jurídica especializada em defesa de direitos financeiros e benefícios governamentais.',
  keywords: 'direitos financeiros, contratos bancários, RMC, advogados especializados, benefícios governamentais, intermediação jurídica, consultoria, MAX ASSESSORIA',
  authors: [{ name: 'MAX ASSESSORIA' }],
  metadataBase: new URL('https://maxassessoria.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://maxassessoria.com.br',
    siteName: 'MAX ASSESSORIA',
    title: 'MAX ASSESSORIA - Consultoria Jurídica e Defesa de Direitos Financeiros',
    description: 'Consultoria especializada em intermediação jurídica e financeira. Conectamos você a advogados especializados para defender seus direitos contra irregularidades bancárias.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAX ASSESSORIA - Defesa de Direitos Financeiros',
    description: 'Consultoria jurídica especializada em defesa de direitos financeiros e benefícios governamentais.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
