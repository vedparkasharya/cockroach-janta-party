import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Constitution', href: '#constitution' },
  { label: 'Join Us', href: '#join' },
  { label: 'Media', href: '#media' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center"
        style={{
          background: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-2 shrink-0">
            <img src="/assets/logo.jpg" alt="CJP Logo" className="w-10 h-10 rounded-full object-cover" />
            <div className="hidden sm:block">
              <span className="text-[#FF9933] font-bold text-sm tracking-[0.1em] uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>CJP</span>
              <span className="text-white font-bold text-sm tracking-[0.1em] uppercase ml-2" style={{ fontFamily: 'Poppins, sans-serif' }}>COCKROACH JANTA PARTY</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#join"
              onClick={(e) => handleClick(e, '#join')}
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full text-[13px] font-bold text-black transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #FF9933, #FF6600)' }}
            >
              Join Now
            </a>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(10, 10, 10, 0.97)', backdropFilter: 'blur(20px)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-2xl font-semibold text-white/80 hover:text-[#FF9933] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={(e) => handleClick(e, '#join')}
            className="mt-4 inline-flex items-center px-8 py-3 rounded-full text-base font-bold text-black"
            style={{ background: 'linear-gradient(135deg, #FF9933, #FF6600)' }}
          >
            Join Now
          </a>
        </div>
      )}
    </>
  );
}
