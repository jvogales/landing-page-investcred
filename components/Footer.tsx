import Link from 'next/link';
import { Brand } from '@/components/Header';
import Icon from '@/components/landing/Icon';
import { WHATSAPP_URL } from '@/components/contact';

export default function Footer() {
  return <footer id="footer" className="site-footer">
    <div className="shell">
      <div className="footer-top"><Brand inverse /><p>Mais clareza para decidir.<br />Mais cuidado com o que é seu.</p><a className="footer-contact" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Fale com a nossa equipe <Icon name="arrowUp" /><span className="sr-only">(abre em nova aba)</span></a></div>
      <div className="footer-columns"><div><span className="eyebrow">ENCONTRE A MAX</span><p>Rua Cel. Cecílio da Rocha, nº 212<br />Centro · Jacarezinho/PR<br />CEP 86400-000</p></div><div><span className="eyebrow">VAMOS CONVERSAR</span><a href="tel:+554333711212">(43) 3371-1212</a><a href="mailto:contato@maxassessoria.com.br">contato@maxassessoria.com.br</a></div><div><span className="eyebrow">EXPLORE</span><Link href="/#servicos">Como podemos ajudar</Link><Link href="/#como-funciona">Nosso atendimento</Link><Link href="/#duvidas">Dúvidas frequentes</Link></div></div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} MAX ASSESSORIA. Todos os direitos reservados.</p><Link href="/privacidade">Privacidade e uso de dados <Icon name="arrowUp" size={14} /></Link></div>
    </div>
  </footer>;
}
