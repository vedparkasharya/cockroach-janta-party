import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Origin() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column animation
      const leftElements = leftRef.current?.querySelectorAll('.animate-item');
      if (leftElements) {
        gsap.fromTo(
          leftElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        );
      }

      // Image animation
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A] py-20 md:py-[120px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
        {/* Left Column - Text */}
        <div ref={leftRef}>
          <span className="animate-item label-accent label-saffron block mb-4">THE ORIGIN</span>
          <h2
            className="animate-item text-white font-extrabold leading-[1.1]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
            }}
          >
            When they called us cockroaches, we made it our crown.
          </h2>
          <p className="animate-item mt-6 text-base text-white/80 leading-relaxed max-w-[480px]">
            On May 15, 2026, Chief Justice of India Surya Kant reportedly compared unemployed youth 
            entering journalism, law, and activism to &ldquo;cockroaches&rdquo; and &ldquo;parasites&rdquo; 
            attacking the system. The remarks triggered nationwide outrage among India&rsquo;s youth.
          </p>
          <p className="animate-item mt-4 text-base text-white/80 leading-relaxed max-w-[480px]">
            Within 24 hours, Abhijeet Dipke — a 30-year-old PR student at Boston University — 
            tweeted: &ldquo;What if all the cockroaches come together?&rdquo; That tweet received 
            700+ reposts. The Cockroach Janta Party was born.
          </p>

          {/* Quote */}
          <blockquote
            className="animate-item mt-8 pl-5 border-l-[3px] border-[#00E5FF]"
          >
            <p className="text-xl font-medium italic text-[#00E5FF]">
              &ldquo;What if all the cockroaches come together?&rdquo;
            </p>
            <cite className="block mt-2 text-[13px] text-white/50 not-italic">
              — Abhijeet Dipke, Founder
            </cite>
          </blockquote>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            ref={imgRef}
            src="/assets/resilience.jpg"
            alt="Cockroach resilience symbol"
            className="rounded-2xl w-full max-w-[500px] object-cover"
            style={{
              boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
