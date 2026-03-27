import './ctv-styles.css';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Capabilities from './components/Capabilities';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

export default function CTVApp() {
  useScrollReveal();

  return (
    <div className="ctv-page">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Problem />
      <div className="section-divider" />
      <Capabilities />
      <div className="section-divider" />
      <HowItWorks />
      <Trust />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
}
