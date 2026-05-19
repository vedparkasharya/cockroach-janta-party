import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ElectionSymbol() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const img = sectionRef.current?.querySelector('.symbol-img');
      const textEls = sectionRef.current?.querySelectorAll('.animate-item');

      if (img) {
        gsap.fromTo(img, { opacity: 0, scale: 0.92 }, {
          opacity: 1, scale: 1, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        });
      }

      if (textEls) {
        gsap.fromTo(textEls, { opacity: 0, x: 30 }, {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A] py-20 md:py-[120px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
        {/* Left - Image */}
        <div>
          <img
            src="/assets/election-symbol.jpg"
            alt="Smartphone - Election Symbol of CJP"
            className="symbol-img rounded-3xl w-full object-cover"
            style={{
              boxShadow: '0 32px 96px rgba(0,0,0,0.5)',
              aspectRatio: '1/1',
              maxHeight: '500px',
            }}
          />
        </div>

        {/* Right - Text */}
        <div>
          <span className="animate-item label-accent label-saffron block mb-4">ELECTION SYMBOL</span>
          <h2
            className="animate-item text-transparent font-extrabold"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(36px, 4vw, 56px)',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #FF9933, #00E5FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The Smartphone
          </h2>
          <p className="animate-item mt-6 text-base text-white/80 leading-relaxed">
            Our election symbol is the smartphone — because today, all you need is a phone and 
            Wi-Fi to build resistance. Every phone carries a voice of courage. Every social media 
            post is a sign of resistance.
          </p>
          <p className="animate-item mt-4 text-base text-white/80 leading-relaxed">
            &ldquo;Today, a smartphone and internet connection are enough to express dissent and 
            organise people. That is why our election symbol would be a phone.&rdquo; — Abhijeet Dipke
          </p>

          {/* Quote */}
          <blockquote className="animate-item mt-8 pl-5 border-l-[3px] border-[#00E5FF]">
            <p className="text-xl font-medium italic text-[#00E5FF]">
              &ldquo;The revolution starts from your screens.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
