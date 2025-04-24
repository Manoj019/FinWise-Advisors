import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CalculatorSection from './components/CalculatorSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';



function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <CalculatorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;