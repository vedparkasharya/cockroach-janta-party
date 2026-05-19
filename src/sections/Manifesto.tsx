import { Gavel, Users, Ban, Newspaper, GraduationCap } from 'lucide-react';

const manifestoPoints = [
  {
    icon: Gavel,
    title: 'No Post-Retirement Political Appointments for Judges',
    description:
      'No Chief Justice shall be granted a Rajya Sabha seat as a post-retirement reward. The judiciary must remain independent.',
    color: '#FF9933',
  },
  {
    icon: Users,
    title: "50% Women's Reservation in Parliament",
    description:
      '50% reservation for women in Parliament and the Cabinet, without increasing the strength of the House.',
    color: '#FFFFFF',
  },
  {
    icon: Ban,
    title: '20-Year Ban on Party Defectors',
    description:
      '20-year ban from elections and public office for any MLA or MP who defects from one party to another.',
    color: '#138808',
  },
  {
    icon: Newspaper,
    title: 'Free Media, No Godi Media',
    description:
      'Media should be free. No corporate control over news. No paid narratives. Press freedom is non-negotiable.',
    color: '#00E5FF',
  },
  {
    icon: GraduationCap,
    title: 'Justice for Exam Fraud Victims',
    description:
      'Scrap CBSE rechecking fees. Justice for every student victim of exam fraud like NEET and CBSE.',
    color: '#FF6600',
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 md:py-32 bg-[#0A0A0A]">
      {/* Tricolor top border */}
      <div className="absolute top-0 left-0 right-0 h-1 tricolor-gradient" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="scroll-reveal inline-block px-3 py-1 bg-[#138808]/10 border border-[#138808]/20 rounded-full text-[#138808] text-xs font-bold tracking-widest uppercase mb-6">
            Our Agenda
          </span>
          <h2 className="scroll-reveal stagger-1 text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase">
            Our <span className="text-[#FF9933]">Manifesto</span>
          </h2>
          <p className="scroll-reveal stagger-2 mt-4 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Five demands. One revolution.
          </p>
        </div>

        {/* Manifesto Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {manifestoPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`scroll-reveal stagger-${index + 1} group relative bg-[#141414] rounded-xl p-6 border border-[#2A2A2A] hover:border-[${point.color}]/50 transition-all duration-500 hover:-translate-y-1`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                {/* Number */}
                <span
                  className="absolute top-4 right-4 text-5xl font-black opacity-10"
                  style={{ color: point.color }}
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${point.color}15` }}
                >
                  <Icon size={24} style={{ color: point.color }} />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-base leading-tight mb-3">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${point.color}10, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <div className="scroll-reveal mt-16 text-center">
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            Secular • Socialist • Democratic • Lazy
          </p>
        </div>
      </div>
    </section>
  );
}
