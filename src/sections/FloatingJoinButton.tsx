import { useEffect, useState } from 'react';

export default function FloatingJoinButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
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
      className={`fixed bottom-6 right-6 z-40 px-6 py-3 rounded-full text-sm font-bold text-black shadow-lg transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{
        background: 'linear-gradient(135deg, #FF9933, #FF6600)',
        boxShadow: '0 8px 32px rgba(255, 153, 51, 0.4)',
      }}
    >
      Join CJP
    </button>
  );
}
