import { useScrollReveal } from './hooks/useScrollReveal';
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

function App() {
  useScrollReveal(0.1);

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
