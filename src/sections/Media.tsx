import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const newsOutlets = [
  'India Today', 'Times of India', 'The Hindu', 'LiveMint', 'Economic Times',
  'The Federal', 'Deccan Herald', 'Business Today', 'India TV', 'OneIndia',
  'Gujarat Samachar', 'OpIndia', 'Clarion India', 'The Print', 'Maktoob Media',
];

const articles = [
  {
    title: 'Cockroach Janta Party debuts, admits two TMC MPs within days',
    outlet: 'India Today',
    color: '#FF9933',
    link: 'https://www.indiatoday.in/india/story/cockroach-janta-party-40000-members-mahua-moitra-kirti-azad-gen-z-convention-2913347-2026-05-18',
  },
  {
    title: 'Who is Abhijeet Dipke? Inside the viral Cockroach Janta Party movement',
    outlet: 'The Hindu',
    color: '#138808',
    link: 'https://www.thehindu.com/news/national/who-is-abhijeet-dipke-inside-the-viral-cockroach-janta-party-movement/article70994402.ece',
  },
  {
    title: 'What is Cockroach Janta Party? 5-point manifesto attracts 40K members in 2 days',
    outlet: 'Times of India',
    color: '#00E5FF',
    link: 'https://timesofindia.indiatimes.com/india/what-is-cockroach-janta-party-5-point-manifesto-attracts-40k-members-in-2-days/articleshow/131177132.cms',
  },
];

const supporters = [
  'Mahua Moitra (TMC MP)',
  'Kirti Azad (TMC MP)',
  'Sanjay Hegde (Lawyer)',
  'Ramachandra Guha (Historian)',
  'Anjali Bhardwaj (Activist)',
];

export default function Media() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll('.animate-item');
      if (els) {
        gsap.fromTo(els, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        });
      }

      const cards = sectionRef.current?.querySelectorAll('.news-card');
      if (cards) {
        gsap.fromTo(cards, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: cards[0], start: 'top 85%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="media" ref={sectionRef} className="bg-[#0A0A0A] py-20 md:py-[120px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="animate-item label-accent label-saffron block mb-4">PRESS COVERAGE</span>
          <h2
            className="animate-item text-white font-extrabold"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 1.1,
            }}
          >
            Making Headlines Across India
          </h2>
        </div>

        {/* News Ticker */}
        <div className="border-t border-b border-white/[0.08] py-4 overflow-hidden mb-12">
          <div className="animate-ticker flex whitespace-nowrap" style={{ width: 'max-content' }}>
            {[...newsOutlets, ...newsOutlets].map((outlet, i) => (
              <span key={i} className="mx-6 text-sm font-semibold uppercase tracking-[0.08em] text-white/40">
                {outlet}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-card block bg-[#141414] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Color bar */}
              <div className="h-1 w-full" style={{ background: article.color }} />
              <div className="p-6">
                <h3 className="text-base font-semibold text-white leading-relaxed group-hover:text-[#00E5FF] transition-colors">
                  {article.title}
                </h3>
                <span className="inline-flex items-center gap-1 mt-4 text-[13px] text-[#00E5FF] font-medium">
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Notable Supporters */}
        <div className="mt-12">
          <p className="animate-item text-sm text-white/40 text-center mb-4 uppercase tracking-[0.1em]">Notable Supporters</p>
          <div className="flex flex-wrap justify-center gap-3">
            {supporters.map((name, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-[13px] font-medium"
                style={{
                  background: 'rgba(255,153,51,0.1)',
                  border: '1px solid rgba(255,153,51,0.2)',
                  color: '#FF9933',
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
