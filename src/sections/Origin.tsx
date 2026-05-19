import { ArrowRight, Quote } from 'lucide-react';

export default function Origin() {
  return (
    <section id="origin" className="relative py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="scroll-reveal order-2 lg:order-1">
            <div className="relative group">
              <img
                src="/assets/mascot.jpg"
                alt="Cockroach Janta Party Mascot - The Resilient Cockroach Leader"
                className="w-full rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-[#FF9933]/30 transition-all duration-500" />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-[#0A0A0A] border border-[#FF9933]/30 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-[#FF9933] font-bold text-sm">EST. MAY 2026</p>
                <p className="text-gray-400 text-xs">New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="scroll-reveal stagger-1">
              <span className="inline-block px-3 py-1 bg-[#FF9933]/10 border border-[#FF9933]/20 rounded-full text-[#FF9933] text-xs font-bold tracking-widest uppercase mb-6">
                Our Origin Story
              </span>
            </div>

            <h2 className="scroll-reveal stagger-2 text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase">
              Why <span className="text-[#FF9933]">Cockroach</span>?
            </h2>

            <div className="scroll-reveal stagger-3 mt-6 space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                When Chief Justice Surya Kant called unemployed youth{' '}
                <span className="text-[#FF9933] font-semibold">&quot;cockroaches&quot;</span> and{' '}
                <span className="text-[#FF9933] font-semibold">&quot;parasites&quot;</span>, he didn't know
                he was giving us our identity. We took his insult and turned it into our strength.
              </p>
              <p>
                The cockroach — the world's most resilient creature. It survives everything.
                Nuclear blasts, earthquakes, extermination. Just like India's youth. We survive
                despite a system that tries to crush us.
              </p>
            </div>

            {/* Quote */}
            <div className="scroll-reveal stagger-4 mt-8 relative pl-6 border-l-2 border-[#FF9933]">
              <Quote size={24} className="absolute -left-3 -top-1 text-[#FF9933] bg-[#0A0A0A]" />
              <p className="text-white text-lg md:text-xl font-medium italic">
                &quot;What if all the cockroaches come together?&quot;
              </p>
              <p className="mt-2 text-[#FF9933] font-semibold">— Abhijeet Dipke, Founder</p>
            </div>

            <div className="scroll-reveal stagger-5 mt-8">
              <a
                href="#manifesto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#manifesto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-[#FF9933] font-bold hover:gap-4 transition-all duration-300"
              >
                Read Our Manifesto <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
