import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Origin from './sections/Origin';
import Manifesto from './sections/Manifesto';
import Founder from './sections/Founder';
import JoinUs from './sections/JoinUs';
import Media from './sections/Media';
import ElectionSymbol from './sections/ElectionSymbol';
import Constitution from './sections/Constitution';
import Footer from './sections/Footer';
import FloatingJoinButton from './sections/FloatingJoinButton';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <Origin />
        <Manifesto />
        <Founder />
        <JoinUs />
        <Media />
        <ElectionSymbol />
        <Constitution />
      </main>
      <Footer />
      <FloatingJoinButton />
    </div>
  );
}

export default App;
