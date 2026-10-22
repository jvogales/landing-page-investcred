import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Highlights from '@/components/sections/Highlights';
import WhoWeAre from '@/components/sections/WhoWeAre';
import Services from '@/components/sections/Services';
import CTASection from '@/components/sections/CTASection';
import Portfolio from '@/components/sections/Portfolio';
import Atendimento from '@/components/sections/Atendimento';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Highlights />
        <WhoWeAre />
        <Services />
        <CTASection />
        <Portfolio />
        <Atendimento />
      </main>
      <Footer />
    </>
  );
}
