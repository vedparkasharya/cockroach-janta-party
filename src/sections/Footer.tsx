const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Constitution', href: '#constitution' },
  { label: 'Join Us', href: '#join' },
  { label: 'Media', href: '#media' },
];

const socialLinks = [
  { label: 'X (Twitter)', href: 'https://x.com/CJP_2029' },
  { label: 'Instagram', href: 'https://www.instagram.com/cockroachjantaparty' },
  { label: 'YouTube', href: 'https://www.youtube.com/@cockroachjantaparty' },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/[0.06]" style={{ background: '#080808' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/logo.jpg" alt="CJP Logo" className="w-8 h-8 rounded-full object-cover" />
              <div>
                <span className="text-[#FF9933] font-bold text-xs tracking-[0.1em] uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>CJP</span>
                <span className="text-white font-bold text-xs tracking-[0.1em] uppercase ml-1.5" style={{ fontFamily: 'Poppins, sans-serif' }}>COCKROACH JANTA PARTY</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Voice of the Lazy &amp; Unemployed. India&apos;s viral youth political movement.
            </p>
            <p className="text-xs text-[#FF9933] mt-2 tracking-wide">
              Secular &bull; Socialist &bull; Democratic &bull; Lazy
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-[0.05em]">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-[0.05em]">Connect</h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-[#00E5FF] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-[0.05em]">Disclaimer</h4>
            <p className="text-xs text-white/50 leading-relaxed max-w-[280px]">
              This is a satirical political movement. We believe in the Constitution of India and 
              work towards protecting its values.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            &copy; 2026 Cockroach Janta Party of India. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with resilience by cockroaches, for cockroaches.
          </p>
        </div>
      </div>
    </footer>
  );
}
