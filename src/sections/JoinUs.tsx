import { useState } from 'react';
import { Smartphone, Globe, MessageCircle, BookOpen, CheckCircle } from 'lucide-react';

const eligibilityItems = [
  {
    icon: Smartphone,
    title: 'Unemployed',
    desc: 'By force, by choice, or by principle',
    color: '#FF9933',
  },
  {
    icon: Globe,
    title: 'Chronically Online',
    desc: 'You live on the internet',
    color: '#FFFFFF',
    textDark: true,
  },
  {
    icon: MessageCircle,
    title: 'Rant Professionally',
    desc: 'Ability to rant with precision',
    color: '#138808',
  },
  {
    icon: BookOpen,
    title: 'Believe in Constitution',
    desc: 'Secular, Socialist, Democratic',
    color: '#000080',
  },
];

export default function JoinUs() {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(true);
    setTimeout(() => setJoined(false), 3000);
  };

  return (
    <section id="join" className="relative py-24 md:py-32 overflow-hidden">
      {/* Tricolor Background */}
      <div className="absolute inset-0 tricolor-gradient-vertical -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="scroll-reveal inline-block px-3 py-1 bg-black/10 border border-black/20 rounded-full text-black text-xs font-bold tracking-widest uppercase mb-6">
            Enlist Now
          </span>
          <h2 className="scroll-reveal stagger-1 text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase">
            Join The <span className="text-[#000080]">Movement</span>
          </h2>
          <p className="scroll-reveal stagger-2 mt-4 text-[#444] text-lg md:text-xl max-w-2xl mx-auto">
            Be part of India's fastest growing political movement.
          </p>
        </div>

        {/* Eligibility Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eligibilityItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="scroll-reveal bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-black/5 hover:border-black/20 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <Icon size={28} style={{ color: item.color }} />
                </div>
                <h3 className="text-[#1A1A1A] font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="scroll-reveal text-center">
          <button
            onClick={handleJoin}
            disabled={joined}
            className={`relative px-10 py-5 text-lg font-bold rounded-xl transition-all duration-500 hover:scale-105 shadow-2xl ${
              joined
                ? 'bg-[#138808] text-white'
                : 'bg-[#FF6600] text-white hover:bg-[#FF5500]'
            }`}
          >
            {joined ? (
              <span className="flex items-center gap-2">
                <CheckCircle size={20} /> Welcome to CJP, Cockroach Soldier!
              </span>
            ) : (
              'Join CJP — Registration Free'
            )}
          </button>

          {!joined && (
            <p className="mt-4 text-[#444] text-sm font-medium">
              80,000+ Cockroach Soldiers Enlisted
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
