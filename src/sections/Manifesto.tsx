import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gavel, Users, Ban, Radio, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const manifestoPoints = [
  {
    num: '01',
    title: 'No Post-Retirement Political Appointments for Judges',
    body: 'No Chief Justice shall be granted a Rajya Sabha seat as a post-retirement reward. The judiciary must remain independent, not become a launching pad for political careers.',
    icon: Gavel,
    bg: 'linear-gradient(135deg, #141414 0%, #1a0a00 100%)',
    accent: '#FF9933',
  },
  {
    num: '02',
    title: '50% Women\'s Reservation in Parliament',
    body: '50% reservation for women in Parliament and the Cabinet, without increasing the strength of the House. Representation is not a privilege — it is a right.',
    icon: Users,
    bg: 'linear-gradient(135deg, #141414 0%, #0a1a0a 100%)',
    accent: '#138808',
  },
  {
    num: '03',
    title: '20-Year Ban on Defecting MLAs & MPs',
    body: 'Any MLA or MP who defects from one party to another shall face a 20-year ban from elections and public office. Democracy is not a marketplace.',
    icon: Ban,
    bg: 'linear-gradient(135deg, #141414 0%, #00001a 100%)',
    accent: '#000080',
  },
  {
    num: '04',
    title: 'Free Media — No Corporate Control',
    body: 'India\'s press freedom ranking speaks for itself. Media must represent citizens, not governments and corporations. Break the nexus.',
    icon: Radio,
    bg: 'linear-gradient(135deg, #141414 0%, #1a0a1a 100%)',
    accent: '#00E5FF',
  },
  {
    num: '05',
    title: 'Justice for Exam Fraud Victims',
    body: 'Stand with every student victim of exam fraud like NEET and CBSE. Scrap rechecking fees immediately. Education is a right, not a business.',
    icon: GraduationCap,
    bg: 'linear-gradient(135deg, #141414 0%, #0a1a1a 100%)',
    accent: '#FFD700',
  },
];

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerEls = headerRef.current?.querySelectorAll('.animate-item');
      if (headerEls) {
        gsap.fromTo(
          headerEls,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Card stack animation
      const cards = cardsContainerRef.current?.querySelectorAll('.manifesto-card');
      if (cards) {
        cards.forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            start: 'top 120px',
            end: 'bottom top',
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const brightness = 1 - (progress * 0.4);
              const scale = 1 - (progress * 0.08);
              gsap.set(card, {
                filter: `brightness(${brightness})`,
                scale: scale,
              });
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="manifesto" ref={sectionRef} className="bg-[#0A0A0A] py-20 md:py-[120px]">
      {/* Header */}
      <div ref={headerRef} className="max-w-[1280px] mx-auto px-5 md:px-10 text-center mb-16">
        <span className="animate-item label-accent label-cyan block mb-4">OUR AGENDA</span>
        <h2
          className="animate-item text-white font-black"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.1,
          }}
        >
          5 Demands. One Revolution.
        </h2>
        <p className="animate-item mt-4 text-base text-white/50">
          Our 5-Point Manifesto — Secular, Socialist, Democratic, Lazy.
        </p>
      </div>

      {/* Sticky Card Stack */}
      <div ref={cardsContainerRef} className="relative" style={{ height: `${manifestoPoints.length * 100}vh` }}>
        {manifestoPoints.map((point, i) => {
          const Icon = point.icon;
          return (
            <div
              key={i}
              className="manifesto-card-wrapper"
              style={{
                height: '100vh',
                position: 'relative',
              }}
            >
              <div
                className="manifesto-card"
                style={{
                  position: 'sticky',
                  top: '120px',
                  height: 'calc(100vh - 140px)',
                  maxWidth: '960px',
                  margin: '0 auto',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: point.bg,
                  border: '1px solid rgba(255,255,255,0.06)',
                  zIndex: i + 1,
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${point.accent}, transparent)` }}
                />

                <div className="p-8 md:p-12 lg:p-16 h-full flex flex-col md:flex-row gap-8">
                  {/* Text Content */}
                  <div className="flex-1 md:w-[60%] flex flex-col justify-center">
                    <div
                      className="text-[80px] font-black leading-none opacity-[0.08] mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif', color: point.accent }}
                    >
                      {point.num}
                    </div>
                    <h3
                      className="text-white font-bold text-xl md:text-[28px] leading-tight"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {point.title}
                    </h3>
                    <p className="mt-4 text-[15px] text-white/70 leading-relaxed max-w-[480px]">
                      {point.body}
                    </p>
                    <div
                      className="mt-6 w-12 h-[3px]"
                      style={{ background: '#00E5FF' }}
                    />
                  </div>

                  {/* Icon */}
                  <div className="md:w-[40%] flex items-center justify-center">
                    <div
                      className="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${point.accent}22, ${point.accent}08)`,
                        border: `1px solid ${point.accent}33`,
                      }}
                    >
                      <Icon size={48} style={{ color: point.accent }} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
