import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const img = sectionRef.current?.querySelector('.founder-img');
      const textEls = sectionRef.current?.querySelectorAll('.animate-item');

      if (img) {
        gsap.fromTo(img, { opacity: 0, x: -40 }, {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        });
      }

      if (textEls) {
        gsap.fromTo(textEls, { opacity: 0, x: 40 }, {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A] py-20 md:py-[120px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Image */}
        <div>
          <img
            src="/assets/founder.jpg"
            alt="Abhijeet Dipke - Founder of Cockroach Janta Party"
            className="founder-img rounded-2xl w-full object-cover"
            style={{ aspectRatio: '3/4', maxHeight: '600px' }}
          />
        </div>

        {/* Right - Text */}
        <div>
          <span className="animate-item label-accent label-saffron block mb-4">THE FOUNDER</span>
          <h2
            className="animate-item text-white font-extrabold"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(36px, 4vw, 56px)',
              lineHeight: 1.1,
            }}
          >
            Abhijeet Dipke
          </h2>
          <p className="animate-item mt-2 text-base font-medium text-[#00E5FF]">
            Founder, Cockroach Janta Party
          </p>
          <p className="animate-item mt-6 text-base text-white/80 leading-relaxed">
            A 30-year-old Public Relations student at Boston University, Abhijeet Dipke worked as a 
            social media campaigner for the Aam Aadmi Party (AAP) during the 2020 Delhi Assembly polls. 
            On May 16, 2026, he posted a Google form inviting people to register for the Cockroach Janta Party.
          </p>
          <p className="animate-item mt-4 text-base text-white/80 leading-relaxed">
            Within hours, he received over 5,000 registrations. Within 48 hours, the movement crossed 
            45,000 members. What started as an impulsive tweet — &ldquo;What if all the cockroaches come together?&rdquo; 
            — has become India&rsquo;s fastest-growing youth political movement.
          </p>
          <p className="animate-item mt-4 text-base text-white/80 leading-relaxed">
            &ldquo;It started as a joke, but it is no longer a joke. The kind of response we&rsquo;re 
            receiving shows that people are looking for a platform.&rdquo;
          </p>

          {/* Stats */}
          <div className="animate-item flex flex-wrap gap-8 mt-8">
            {[
              { num: '45,000+', label: 'Members in 48 hours' },
              { num: '1 Lakh+', label: 'Total Registrations' },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className="text-3xl font-extrabold"
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

          {/* Social Links */}
          <div className="animate-item flex gap-3 mt-8">
            {[
              { name: 'X', href: 'https://x.com/abhijeet_dipke' },
              { name: 'Instagram', href: 'https://www.instagram.com/cockroachjantaparty' },
              { name: 'YouTube', href: 'https://www.youtube.com/@cockroachjantaparty' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all duration-300"
                aria-label={social.name}
              >
                {social.name === 'X' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
                {social.name === 'Instagram' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                )}
                {social.name === 'YouTube' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
