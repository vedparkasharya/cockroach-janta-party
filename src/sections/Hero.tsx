import { useEffect, useState } from 'react';
import { ChevronDown, Users, Calendar, TrendingUp } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/hero.jpg"
          alt="Cockroach Janta Party Rally"
          className="w-full h-full object-cover animate-hero-bg"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center pt-20">
        {/* Tagline */}
        <div
          className={`mb-6 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-widest text-[#FF9933]">
            <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse" />
            SECULAR • SOCIALIST • DEMOCRATIC • LAZY
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`transition-all duration-1000 delay-150 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.9] tracking-tight">
            COCKROACH
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight mt-2 text-tricolor">
            JANTA PARTY
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-medium transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Voice of the Lazy &amp; Unemployed. India's Viral Youth Political Movement.
        </p>

        {/* Stats */}
        <div
          className={`mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 text-gray-300">
            <Users size={20} className="text-[#FF9933]" />
            <span className="text-sm md:text-base font-semibold">80,000+ Members</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar size={20} className="text-[#FFFFFF]" />
            <span className="text-sm md:text-base font-semibold">Founded May 2026</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <TrendingUp size={20} className="text-[#138808]" />
            <span className="text-sm md:text-base font-semibold">1M+ Followers</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#join"
            onClick={(e) => handleClick(e, '#join')}
            className="px-8 py-4 bg-[#FF9933] text-black font-bold text-lg rounded-lg hover:bg-[#FFAA44] transition-all duration-300 hover:scale-105 saffron-glow animate-pulse-glow"
          >
            Join the Movement
          </a>
          <a
            href="#manifesto"
            onClick={(e) => handleClick(e, '#manifesto')}
            className="px-8 py-4 bg-transparent text-white font-bold text-lg rounded-lg border-2 border-white/30 hover:border-[#FF9933] hover:text-[#FF9933] transition-all duration-300"
          >
            Read Manifesto
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#origin" onClick={(e) => handleClick(e, '#origin')} className="text-white/50 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
