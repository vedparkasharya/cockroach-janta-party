import { Smartphone, Quote } from 'lucide-react';

export default function ElectionSymbol() {
  return (
    <section id="symbol" className="relative py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="scroll-reveal">
            <div className="relative group">
              <img
                src="/assets/election-symbol.jpg"
                alt="CJP Election Symbol - The Smartphone representing digital democracy"
                className="w-full rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-[#00E5FF]/30 transition-all duration-500" />

              {/* Phone badge overlay */}
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#00E5FF]/30 rounded-xl px-4 py-3">
                <Smartphone size={24} className="text-[#00E5FF]" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="scroll-reveal inline-block px-3 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-full text-[#00E5FF] text-xs font-bold tracking-widest uppercase mb-6">
              Digital Democracy
            </span>

            <h2 className="scroll-reveal stagger-1 text-4xl md:text-5xl font-black text-white uppercase">
              Our Election <span className="text-[#00E5FF]">Symbol</span>
            </h2>

            <div className="scroll-reveal stagger-2 mt-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF9933] via-white to-[#138808] flex items-center justify-center shadow-lg">
                <Smartphone size={32} className="text-[#000080]" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">The Smartphone</h3>
                <p className="text-gray-400 text-sm">Symbol of Digital Revolution</p>
              </div>
            </div>

            <div className="scroll-reveal stagger-3 mt-6 space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                In today's India, all you need is a smartphone and WiFi to build resistance. Every
                phone carries a voice of courage. Every social media post is a sign of resistance.
              </p>
              <p>
                The revolution starts from your screens. Our poll symbol is the smartphone — because
                today, a smartphone and internet connection are enough to express dissent and
                organise people.
              </p>
            </div>

            {/* Quote */}
            <div className="scroll-reveal stagger-4 mt-8 relative pl-6 border-l-2 border-[#00E5FF]">
              <Quote size={24} className="absolute -left-3 -top-1 text-[#00E5FF] bg-[#0A0A0A]" />
              <p className="text-white text-lg font-medium italic">
                &quot;Every phone now carries a voice of courage... Every social media post is a sign
                of resistance... The revolution starts from your screens.&quot;
              </p>
              <p className="mt-2 text-[#00E5FF] font-semibold">— CJP Official Statement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
