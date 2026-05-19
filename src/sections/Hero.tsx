import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(badgeRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
        .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .fromTo(statsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleManifestoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#manifesto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover animate-hero-bg"
          poster="/assets/hero.jpg"
        >
          <source src="/assets/hero-rally.mp4" type="video/mp4" />
        </video>
        {/* Fallback image if video doesn't load */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/hero.jpg)' }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 60%, #0A0A0A 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-[900px] mx-auto pt-[72px]">
        {/* Tricolor Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center px-5 py-1.5 rounded-full mb-8"
          style={{
            background: 'linear-gradient(90deg, #FF9933, #FFFFFF, #138808)',
          }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Secular &bull; Socialist &bull; Democratic &bull; Lazy
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-white font-black leading-[0.95] tracking-[-0.03em]"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(48px, 8vw, 96px)',
          }}
        >
          <span className="block">COCKROACH</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(90deg, #FF9933, #FFD700, #138808)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            JANTA PARTY
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 text-lg text-white/80 font-normal max-w-[540px] mx-auto"
        >
          Voice of the Lazy &amp; Unemployed. India&apos;s Viral Youth Political Movement.
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mt-10"
        >
          {[
            { num: '1,00,000+', label: 'Members' },
            { num: 'May 2026', label: 'Founded in New Delhi' },
            { num: '1M+', label: 'Followers' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl md:text-4xl font-extrabold"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: 'linear-gradient(135deg, #FF9933, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.num}
              </div>
              <div className="text-xs uppercase tracking-[0.1em] text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <button
            onClick={handleJoinClick}
            className="px-8 py-3.5 rounded-full text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #FF9933, #FF6600)' }}
          >
            Join the Movement
          </button>
          <button
            onClick={handleManifestoClick}
            className="px-8 py-3.5 rounded-full text-sm font-bold text-white border border-white/30 bg-transparent transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            Read Manifesto
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
