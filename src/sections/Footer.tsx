import { Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Constitution', href: '#constitution' },
  { label: 'Join Us', href: '#join' },
  { label: 'Media', href: '#media' },
];

const socialLinks = [
  {
    icon: Twitter,
    label: 'X (Twitter)',
    handle: '@CJP_2029',
    url: 'https://x.com/CJP_2029',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@cockroachjantaparty',
    url: 'https://www.instagram.com/cockroachjantaparty',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    handle: 'Cockroach Janta Party',
    url: 'https://www.youtube.com/@cockroachjantaparty',
  },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0A0A0A]">
      {/* Tricolor top border */}
      <div className="h-1 tricolor-gradient" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo.png"
                alt="CJP Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-bold text-lg">CJP</p>
                <p className="text-[10px] tracking-widest text-gray-400">COCKROACH JANTA PARTY</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Voice of the Lazy &amp; Unemployed. India's viral youth political movement.
            </p>
            <div className="mt-4">
              <p className="text-xs text-gray-500 tracking-widest uppercase">
                Secular • Socialist • Democratic • Lazy
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-gray-400 text-sm hover:text-[#FF9933] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-[#FF9933] transition-colors"
                    >
                      <Icon size={16} />
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Disclaimer */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Disclaimer
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              This is a satirical political movement. We believe in the Constitution of India and
              work towards protecting its values.
            </p>
            <p className="mt-3 text-2xl">🪳</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
              &copy; 2026 Cockroach Janta Party of India. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs italic">
              Made with resilience by cockroaches, for cockroaches.
            </p>
            <a
              href="https://github.com/vedparkasharya/cockroach-janta-party"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-500 text-xs hover:text-[#FF9933] transition-colors"
            >
              <ExternalLink size={12} /> View Source on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
