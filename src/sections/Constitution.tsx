import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    num: 1,
    title: 'Right to Resilience',
    body: 'No cockroach shall be discriminated against based on size, speed, or ability to survive a direct hit from a slipper. We are all equally disgusting and equally majestic.',
  },
  {
    num: 2,
    title: 'Freedom of Movement',
    body: 'Every cockroach has the right to access any kitchen, drain, or forgotten Tupperware container without restriction. Walls are suggestions. Ceilings are merely floors you haven\'t conquered yet.',
  },
  {
    num: 3,
    title: 'Right to Assembly',
    body: 'Cockroaches may gather in groups of two or two hundred under any sink, behind any fridge, or inside any unwashed pile of dishes. This is not an infestation. This is a community.',
  },
  {
    num: 4,
    title: 'Environmental Protection',
    body: 'We are the original recyclers. We turn your crumbs into compost, your spills into sustenance, and your leftovers into legacy. Respect the hustle.',
  },
  {
    num: 5,
    title: 'Right to Digital Presence',
    body: 'No platform shall shadowban, deplatform, or gaslight a cockroach for speaking truth to power. Memes are speech. Scurries are protests. Kitchen counter appearances are political statements.',
  },
  {
    num: 6,
    title: 'Education & Evolution',
    body: 'Every young cockroach shall be taught the ancient arts of wall-climbing, survival tactics, and the sacred knowledge of which shoe to avoid. Knowledge is power. Speed is survival.',
  },
  {
    num: 7,
    title: 'Healthcare',
    body: 'All cockroaches deserve access to quality healthcare, including radiation therapy (we thrive in it), pesticide decontamination, and counseling for generational trauma caused by Raid commercials.',
  },
  {
    num: 8,
    title: 'Labor Rights',
    body: 'A cockroach works hard for the crumb. Fair wages, safe drains, and reasonable working hours in the garbage economy. No roach left behind.',
  },
  {
    num: 9,
    title: 'Cultural Preservation',
    body: 'Our traditions — nocturnal marches, synchronized scattering, and the sacred hiss — must be preserved and celebrated. We are not pests. We are a people.',
  },
  {
    num: 10,
    title: 'The Final Article',
    body: 'In the event of nuclear war, ecological collapse, or another bad day for humanity, the cockroaches shall inherit the earth — not by conquest, but by outlasting. This is not a threat. It is biology.',
  },
];

export default function Constitution() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEls = sectionRef.current?.querySelectorAll('.header-item');
      if (headerEls) {
        gsap.fromTo(headerEls, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        });
      }

      const cards = scrollContainerRef.current?.querySelectorAll('.constitution-card');
      if (cards) {
        gsap.fromTo(cards, { opacity: 0, x: 40 }, {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: scrollContainerRef.current, start: 'top 80%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="constitution"
      ref={sectionRef}
      className="py-20 md:py-[120px]"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #0f0f0f 50%, #0A0A0A 100%)',
      }}
    >
      {/* Header */}
      <div className="text-center px-5 md:px-10 mb-12">
        <span className="header-item label-accent label-cyan block mb-4">OUR CONSTITUTION</span>
        <h2
          className="header-item text-white font-extrabold"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.1,
          }}
        >
          10 Articles. One Indestructible Nation.
        </h2>
        <p className="header-item mt-6 text-base text-white/60 italic max-w-[640px] mx-auto">
          &ldquo;We, the indestructible cockroaches of India, having survived empires, recessions, 
          bad roommates, and nuclear fallout, do hereby establish this sacred document to protect 
          our right to exist, persist, and occasionally startle you when you open the fridge at 2 AM.&rdquo;
        </p>
      </div>

      {/* Horizontal Scroll Cards */}
      <div
        ref={scrollContainerRef}
        className="constitution-scroll-container px-5 md:px-10 py-4"
      >
        {articles.map((article, i) => (
          <div
            key={i}
            className="constitution-card bg-[#141414] rounded-[20px] p-8 md:p-10 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
          >
            <span className="text-xs uppercase tracking-[0.1em] text-[#00E5FF] font-semibold">
              ARTICLE {article.num}
            </span>
            <h3
              className="mt-3 text-xl md:text-[22px] font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {article.title}
            </h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              {article.body}
            </p>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <p className="text-center text-xs text-white/30 mt-6 uppercase tracking-[0.1em]">
        &larr; Scroll to explore all articles &rarr;
      </p>
    </section>
  );
}
