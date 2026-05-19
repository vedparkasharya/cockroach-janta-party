import { useState, useEffect } from 'react';
import { Hand } from 'lucide-react';

export default function FloatingJoinButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 px-5 py-3 bg-[#FF6600] text-white font-bold text-sm rounded-full shadow-2xl transition-all duration-500 hover:scale-110 flex items-center gap-2 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      style={{
        boxShadow: '0 4px 20px rgba(255, 102, 0, 0.5)',
      }}
    >
      <Hand size={18} />
      Join CJP
    </button>
  );
}
