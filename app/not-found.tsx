import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <p>Erro 404</p>
      <h1>Página não encontrada</h1>
      <p>O endereço pode ter mudado ou não existir. Volte ao início para conhecer nossos serviços.</p>
      <Link href="/">Voltar ao início</Link>
    </main>
  );
}
