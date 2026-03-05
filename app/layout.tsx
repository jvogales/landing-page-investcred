import type { Metadata } from 'next';
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
