import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Wifi, Megaphone, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const eligibilityCards = [
  { icon: Briefcase, title: 'Unemployed', desc: 'By force, by choice, or by principle' },
  { icon: Wifi, title: 'Chronically Online', desc: 'You live on the internet' },
  { icon: Megaphone, title: 'Rant Professionally', desc: 'Ability to rant with precision' },
  { icon: BookOpen, title: 'Believe in Constitution', desc: 'Secular, Socialist, Democratic' },
];

export default function JoinUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll('.animate-item');
      if (els) {
        gsap.fromTo(els, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        });
      }

      const cards = sectionRef.current?.querySelectorAll('.eligibility-card');
      if (cards) {
        gsap.fromTo(cards, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: cards[0], start: 'top 85%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleJoin = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="join"
      ref={sectionRef}
      className="py-20 md:py-[120px] px-5 md:px-10 relative"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(255,153,51,0.06) 0%, transparent 70%)',
        backgroundColor: '#0A0A0A',
      }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        <span className="animate-item label-accent label-cyan block mb-4">BECOME A MEMBER</span>
        <h2
          className="animate-item text-white font-extrabold"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.1,
          }}
        >
          Join 1,00,000+ Cockroach Soldiers
        </h2>
        <p className="animate-item mt-4 text-lg text-white/60">
          Membership is free. Resistance is compulsory.
        </p>

        {/* Eligibility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {eligibilityCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="eligibility-card bg-[#141414] border border-white/[0.08] rounded-2xl p-7 text-left hover:border-[#FF9933]/30 transition-all duration-300 hover:translate-y-[-2px]"
              >
                <Icon size={28} className="text-[#FF9933] mb-3" strokeWidth={1.5} />
                <h3 className="text-base font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {card.title}
                </h3>
                <p className="text-[13px] text-white/50 mt-1">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={handleJoin}
          className="animate-item mt-10 px-12 py-4 rounded-full text-base font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ background: 'linear-gradient(135deg, #FF9933, #FF6600)' }}
        >
          Join CJP — Registration Free
        </button>
        <p className="animate-item mt-4 text-sm text-white/40">
          1,00,000+ Cockroach Soldiers Enlisted
        </p>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-[#141414] border border-white/[0.08] rounded-3xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Join the Movement
                </h3>
                <p className="text-sm text-white/50 mb-6">Fill in your details to become a Cockroach Soldier.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9933]/50 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9933]/50 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9933]/50 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="City, State"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9933]/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02]"
                    style={{ background: 'linear-gradient(135deg, #FF9933, #FF6600)' }}
                  >
                    Submit Application
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#138808]/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#138808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Welcome to CJP!</h3>
                <p className="text-sm text-white/60">You are now officially a Cockroach Soldier. Main Bhi Cockroach!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
