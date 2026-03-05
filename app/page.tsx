import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Highlights from '@/components/sections/Highlights';
import WhoWeAre from '@/components/sections/WhoWeAre';
import Services from '@/components/sections/Services';
import CTASection from '@/components/sections/CTASection';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <WhoWeAre />
        <Services />
        <CTASection />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
