import Link from 'next/link';
import Icon from '@/components/landing/Icon';

export default function NotFound() {
  return <main className="not-found"><span className="eyebrow">ENDEREÇO NÃO ENCONTRADO · 404</span><h1>Página não<br />encontrada.</h1><p>Esta página não existe ou mudou de endereço. Você pode voltar ao início para conhecer a MAX ASSESSORIA.</p><Link href="/" className="button">Voltar ao início <Icon name="arrow" size={18} /></Link></main>;
}
