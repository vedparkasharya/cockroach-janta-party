import { Twitter, Quote, Calendar, Briefcase, Lightbulb } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <span className="scroll-reveal inline-block px-3 py-1 bg-[#FF9933]/10 border border-[#FF9933]/20 rounded-full text-[#FF6600] text-xs font-bold tracking-widest uppercase mb-6">
              Leadership
            </span>

            <h2 className="scroll-reveal stagger-1 text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase">
              Meet The <span className="text-[#FF6600]">Founder</span>
            </h2>

            <div className="scroll-reveal stagger-2 mt-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">Abhijeet Dipke</h3>
              <p className="text-[#FF6600] font-semibold mt-1">Founder, Cockroach Janta Party</p>
            </div>

            <div className="scroll-reveal stagger-3 mt-6 space-y-4 text-[#444] text-base md:text-lg leading-relaxed">
              <p>
                30-year-old former AAP social media worker who turned a tweet into a movement.
                &quot;What if all the cockroaches come together?&quot; — that single tweet got 800
                retweets and sparked a revolution.
              </p>
              <p>
                Within 48 hours, CJP had 40,000 members. Today, we're 80,000 strong and growing.
                From an internet joke to India's most viral political phenomenon.
              </p>
            </div>

            {/* Quote */}
            <div className="scroll-reveal stagger-4 mt-8 relative pl-6 border-l-2 border-[#FF6600]">
              <Quote size={24} className="absolute -left-3 -top-1 text-[#FF6600] bg-white" />
              <p className="text-[#1A1A1A] text-lg font-medium italic">
                &quot;It's no longer a joke. The response shows people are looking for a platform. We
                want to channel this energy into political awareness.&quot;
              </p>
            </div>

            {/* Stats */}
            <div className="scroll-reveal stagger-5 mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#F5F5F5] rounded-xl">
                <Calendar size={20} className="mx-auto text-[#FF6600] mb-2" />
                <p className="text-[#1A1A1A] font-bold text-sm">May 16, 2026</p>
                <p className="text-gray-500 text-xs">Founded</p>
              </div>
              <div className="text-center p-4 bg-[#F5F5F5] rounded-xl">
                <Briefcase size={20} className="mx-auto text-[#FF6600] mb-2" />
                <p className="text-[#1A1A1A] font-bold text-sm">AAP Media</p>
                <p className="text-gray-500 text-xs">Former Role</p>
              </div>
              <div className="text-center p-4 bg-[#F5F5F5] rounded-xl">
                <Lightbulb size={20} className="mx-auto text-[#FF6600] mb-2" />
                <p className="text-[#1A1A1A] font-bold text-sm">Revolutionary</p>
                <p className="text-gray-500 text-xs">Self-taught</p>
              </div>
            </div>

            {/* Social */}
            <div className="scroll-reveal stagger-5 mt-6">
              <a
                href="https://x.com/abhijeet_dipke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#333] transition-colors"
              >
                <Twitter size={16} />
                <span className="text-sm font-medium">Follow on X</span>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="scroll-reveal order-first lg:order-last">
            <div className="relative group">
              <img
                src="/assets/founder.jpg"
                alt="Abhijeet Dipke - Founder of Cockroach Janta Party"
                className="w-full rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 group-hover:ring-[#FF6600]/30 transition-all duration-500" />

              {/* Overlay stats */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-black text-[#1A1A1A]">80K+</p>
                    <p className="text-xs text-gray-500">Members Joined</p>
                  </div>
                  <div className="h-8 w-px bg-gray-200" />
                  <div>
                    <p className="text-2xl font-black text-[#1A1A1A]">1M+</p>
                    <p className="text-xs text-gray-500">Social Followers</p>
                  </div>
                  <div className="h-8 w-px bg-gray-200" />
                  <div>
                    <p className="text-2xl font-black text-[#FF6600]">#1</p>
                    <p className="text-xs text-gray-500">Viral Movement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
