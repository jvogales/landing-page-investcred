import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadQualifier from '@/components/landing/LeadQualifier';
import Icon from '@/components/landing/Icon';
import { WHATSAPP_URL } from '@/components/contact';

const services = [
  { icon: 'document' as const, tag: 'CONTRATOS BANCÁRIOS', title: 'Um contrato confuso não precisa continuar assim.', description: 'Orientação para entender condições, cobranças e informações que precisam de uma análise mais próxima.', detail: 'Clareza sobre o que você contratou' },
  { icon: 'shield' as const, tag: 'DESCONTOS NO BENEFÍCIO', title: 'Reconheça o que está saindo do seu benefício.', description: 'Entenda descontos relacionados a cartões e contratos, incluindo RMC, e as possibilidades de encaminhamento do seu caso.', detail: 'Atenção ao que faz parte da sua renda' },
  { icon: 'dialogue' as const, tag: 'INTERMEDIAÇÃO JURÍDICA', title: 'O próximo passo começa com informação.', description: 'A MAX conecta você à orientação e a profissionais para avaliar as particularidades da sua situação.', detail: 'Um caminho explicado com cuidado' },
];

const questions = [
  { question: 'O que é a MAX ASSESSORIA?', answer: 'Somos uma assessoria voltada à orientação sobre direitos financeiros e à intermediação jurídica. Ajudamos você a entender dúvidas sobre contratos e descontos e a conhecer os possíveis próximos passos.' },
  { question: 'Preciso enviar documentos para começar?', answer: 'Não pelo site. Aqui, você escolhe apenas o assunto e, se quiser, o momento em que está. Durante o atendimento, a equipe poderá explicar quais informações são necessárias para avaliar sua situação. Nunca envie senhas ou códigos de acesso.' },
  { question: 'A MAX garante recuperação de valores?', answer: 'Não. Cada caso depende dos fatos, dos documentos e da análise dos profissionais envolvidos. Não há garantia de resultado, prazo ou recuperação de valores.' },
  { question: 'Como funciona o primeiro contato?', answer: 'Você prepara uma mensagem por aqui e continua no WhatsApp. A mensagem não é enviada automaticamente: você pode revisá-la e decide se deseja enviá-la. Depois, conversa com a equipe sobre o atendimento.' },
  { question: 'A conversa pelo site tem algum custo?', answer: 'O site não faz cobranças. As condições de qualquer serviço devem ser esclarecidas diretamente com a equipe antes de uma contratação.' },
];

export default function LandingPage() {
  return <>
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo" tabIndex={-1}>
      <section id="inicio" className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" />CLAREZA PARA AS SUAS DECISÕES</div>
            <h1>O seu dinheiro<br />merece <span className="hero-emphasis">mais<br className="desktop-break" /> clareza.</span></h1>
            <p className="hero-description">Descontos que você não reconhece? Um contrato difícil de entender? A MAX ajuda a transformar dúvidas em próximos passos.</p>
            <div className="hero-actions"><a href="#orientacao" className="button">Quero entender meu caso <Icon name="arrowUp" /></a><a href="#como-funciona" className="plain-link">Como funciona <Icon name="arrow" size={17} /></a></div>
            <div className="hero-assurance"><span className="assurance-icon"><Icon name="check" size={15} /></span><p>Você entende as possibilidades.<br /><strong>Você decide como seguir.</strong></p></div>
          </div>
          <div className="hero-qualification"><LeadQualifier /><div className="qualification-caption"><span />UM BOM COMEÇO É TER COM QUEM CONVERSAR.</div></div>
        </div>
        <div className="shell hero-bottom"><span>ORIENTAÇÃO FINANCEIRA E JURÍDICA</span><div><span>Informação clara</span><span>Escuta e cuidado</span><span>Decisões conscientes</span></div><a href="#servicos" aria-label="Conheça como podemos ajudar"><Icon name="arrow" size={20} style={{ transform: 'rotate(90deg)' }} /></a></div>
      </section>

      <section id="servicos" className="section services-section">
        <div className="shell">
          <div className="section-heading"><div><span className="eyebrow">COMO PODEMOS AJUDAR</span><h2>Não é só sobre contratos.<br />É sobre a sua tranquilidade.</h2></div><p>Quando o assunto envolve a sua renda, entender o que está acontecendo faz toda a diferença.</p></div>
          <div className="service-grid">{services.map(service => <article className="service-card" key={service.tag}><div className="service-icon"><Icon name={service.icon} size={28} /></div><span className="eyebrow">{service.tag}</span><h3>{service.title}</h3><p>{service.description}</p><div className="service-detail"><Icon name="check" size={15} /><span>{service.detail}</span></div></article>)}</div>
          <div className="services-note"><p>Não sabe por onde começar? <strong>É para isso que estamos aqui.</strong></p><a href="#orientacao" className="plain-link">Vamos conversar <Icon name="arrowUp" size={17} /></a></div>
        </div>
      </section>

      <section id="sobre" className="about-section">
        <div className="shell about-grid"><div className="about-art" aria-hidden="true"><div className="art-grid" /><div className="document-art"><span className="document-art-caption">UM OLHAR MAIS ATENTO</span><div className="document-art-heading">O que é seu<br />importa.</div><div className="document-art-rule" /><div className="document-art-lines"><span /><span /><span /></div><div className="document-stamp"><Icon name="check" size={23} /><span>CLAREZA<br />EM CADA PASSO</span></div></div><span className="art-caption">CUIDADO COMEÇA COM ATENÇÃO.</span><div className="art-orbit" /></div><div className="about-copy"><span className="eyebrow">PRAZER, SOMOS A MAX.</span><h2>Do outro lado da dúvida,<br />existe um caminho<br /><span>mais claro.</span></h2><p>Sabemos que falar sobre dinheiro, descontos e contratos pode ser complicado. Por isso, nosso ponto de partida é simples: ouvir você.</p><p>A MAX ASSESSORIA atua com orientação financeira e intermediação jurídica, aproximando pessoas das informações e dos profissionais que podem ajudar.</p><a className="plain-link" href="#como-funciona">Conheça nosso atendimento <Icon name="arrow" size={17} /></a></div></div>
      </section>

      <section id="como-funciona" className="section process-section"><div className="shell"><div className="section-heading"><div><span className="eyebrow">DO PRIMEIRO CONTATO AO PRÓXIMO PASSO</span><h2>Menos complicação.<br />Mais direção.</h2></div><p>Você não precisa ter todas as respostas para começar uma conversa.</p></div><ol className="process-grid"><li><span className="process-number">01</span><h3>Escolha o assunto</h3><p>Escolha o que está acontecendo e prepare uma mensagem para nossa equipe.</p></li><li><span className="process-number">02</span><h3>Entenda o seu cenário</h3><p>Converse sobre sua situação e esclareça as informações necessárias para a análise.</p></li><li><span className="process-number">03</span><h3>Decida com clareza</h3><p>Conheça os possíveis encaminhamentos e tire suas dúvidas antes de seguir.</p></li></ol><div className="process-remark"><Icon name="shield" size={18} /><p>Cada história é única. Os encaminhamentos dependem da análise de cada caso.</p></div></div></section>

      <section id="duvidas" className="section faq-section"><div className="shell faq-grid"><div className="faq-intro"><span className="eyebrow">TODA PERGUNTA MERECE ESPAÇO</span><h2>Antes de conversar,<br />talvez você queira<br />saber.</h2><p>Informação clara desde o primeiro contato.</p><a href="#orientacao" className="plain-link">Tenho outra dúvida <Icon name="arrowUp" size={17} /></a></div><div className="faq-list">{questions.map(item => <details className="faq-item" key={item.question}><summary>{item.question}<span className="faq-toggle"><Icon name="plus" size={18} /></span></summary><div className="faq-answer"><p>{item.answer}</p></div></details>)}</div></div></section>

      <section className="final-cta-section"><div className="shell final-cta"><div><span className="eyebrow">SEU PRÓXIMO PASSO PODE COMEÇAR AQUI</span><h2>Uma boa conversa<br />muda a forma de ver<br /><span>as possibilidades.</span></h2></div><div><p>Vamos entender o que está acontecendo<br />e pensar no próximo passo?</p><a className="button button--lime" href="#orientacao">Quero conversar com a MAX <Icon name="arrowUp" /></a><a className="final-direct" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Prefiro ir direto ao WhatsApp <Icon name="arrowUp" size={15} /><span className="sr-only">(abre em nova aba)</span></a></div></div></section>
    </main>
    <Footer />
    <div className="mobile-contact-bar"><span>Clareza começa<br /><strong>com uma conversa.</strong></span><a href="#orientacao" className="button button--small">Começar <Icon name="arrowUp" size={16} /></a></div>
  </>;
}
