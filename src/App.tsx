import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Integration from './components/Integration.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Testimonials from './components/Testimonials.tsx';
import CTA from './components/CTA.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Features />
      <Integration />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
