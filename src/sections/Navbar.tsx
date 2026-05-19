import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Constitution', href: '#constitution' },
  { label: 'Join Us', href: '#join' },
  { label: 'Media', href: '#media' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="Cockroach Janta Party Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div className="hidden md:block">
              <span className="text-sm font-bold tracking-wider text-white">CJP</span>
              <span className="block text-[10px] tracking-widest text-gray-400">COCKROACH JANTA PARTY</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-[#FF9933] transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={(e) => handleClick(e, '#join')}
              className="px-5 py-2 bg-[#FF9933] text-black text-sm font-bold rounded-lg hover:bg-[#FFAA44] transition-all duration-300 hover:scale-105"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block text-lg font-medium text-gray-300 hover:text-[#FF9933] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={(e) => handleClick(e, '#join')}
              className="block w-full text-center px-5 py-3 bg-[#FF9933] text-black font-bold rounded-lg"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
