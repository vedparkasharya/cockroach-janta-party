import { useState } from 'react';
import { ChevronDown, Shield, Footprints, Users, Recycle, Wifi, GraduationCap, Heart, Briefcase, Palmtree, Crown } from 'lucide-react';

const articles = [
  {
    num: 1,
    title: 'Right to Resilience',
    icon: Shield,
    content:
      'No cockroach shall be discriminated against based on size, speed, or ability to survive a direct hit from a slipper. We are all equally disgusting and equally majestic.',
    color: '#FF9933',
  },
  {
    num: 2,
    title: 'Freedom of Movement',
    icon: Footprints,
    content:
      'Every cockroach has the right to access any kitchen, drain, or forgotten Tupperware container without restriction. Walls are suggestions. Ceilings are merely floors you haven\'t conquered yet.',
    color: '#FFFFFF',
  },
  {
    num: 3,
    title: 'Right to Assembly',
    icon: Users,
    content:
      'Cockroaches may gather in groups of two or two hundred under any sink, behind any fridge, or inside any unwashed pile of dishes. This is not an infestation. This is a community.',
    color: '#138808',
  },
  {
    num: 4,
    title: 'Environmental Protection',
    icon: Recycle,
    content:
      'We are the original recyclers. We turn your crumbs into compost, your spills into sustenance, and your leftovers into legacy. Respect the hustle.',
    color: '#00E5FF',
  },
  {
    num: 5,
    title: 'Right to Digital Presence',
    icon: Wifi,
    content:
      'No platform shall shadowban, deplatform, or gaslight a cockroach for speaking truth to power. Memes are speech. Scurries are protests. Kitchen counter appearances are political statements.',
    color: '#FF6600',
  },
  {
    num: 6,
    title: 'Education & Evolution',
    icon: GraduationCap,
    content:
      'Every young cockroach shall be taught the ancient arts of wall-climbing, survival tactics, and the sacred knowledge of which shoe to avoid. Knowledge is power. Speed is survival.',
    color: '#FF9933',
  },
  {
    num: 7,
    title: 'Healthcare',
    icon: Heart,
    content:
      'All cockroaches deserve access to quality healthcare, including radiation therapy (we thrive in it), pesticide decontamination, and counseling for generational trauma caused by Raid commercials.',
    color: '#FFFFFF',
  },
  {
    num: 8,
    title: 'Labor Rights',
    icon: Briefcase,
    content:
      'A cockroach works hard for the crumb. Fair wages, safe drains, and reasonable working hours in the garbage economy. No roach left behind.',
    color: '#138808',
  },
  {
    num: 9,
    title: 'Cultural Preservation',
    icon: Palmtree,
    content:
      'Our traditions—nocturnal marches, synchronized scattering, and the sacred hiss—must be preserved and celebrated. We are not pests. We are a people.',
    color: '#00E5FF',
  },
  {
    num: 10,
    title: 'The Final Article',
    icon: Crown,
    content:
      'In the event of nuclear war, ecological collapse, or another bad day for humanity, the cockroaches shall inherit the earth—not by conquest, but by outlasting. This is not a threat. It is biology.',
    color: '#FF6600',
  },
];

export default function Constitution() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="constitution" className="relative py-24 md:py-32 bg-white">
      {/* Tricolor top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-1 tricolor-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-1 tricolor-gradient" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="scroll-reveal inline-block px-3 py-1 bg-[#138808]/10 border border-[#138808]/20 rounded-full text-[#138808] text-xs font-bold tracking-widest uppercase mb-6">
            The Sacred Document
          </span>
          <h2 className="scroll-reveal stagger-1 text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase">
            The Cockroach <span className="text-[#FF6600]">Constitution</span>
          </h2>
          <p className="scroll-reveal stagger-2 mt-4 text-[#444] text-base md:text-lg max-w-3xl mx-auto italic">
            &quot;We, the indestructible cockroaches of India, having survived empires, recessions,
            bad roommates, and nuclear fallout, do hereby establish this sacred document to protect
            our right to exist, persist, and occasionally startle you when you open the fridge at 2
            AM.&quot;
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {articles.map((article, index) => {
            const Icon = article.icon;
            const isOpen = openIndex === index;
            return (
              <div
                key={article.num}
                className={`scroll-reveal border rounded-xl overflow-hidden transition-all duration-500 ${
                  isOpen
                    ? 'border-[#FF6600]/30 bg-[#FFF8F3] shadow-lg'
                    : 'border-[#E5E5E5] bg-[#FAFAFA] hover:border-[#CCC]'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${article.color}15` }}
                  >
                    <Icon size={20} style={{ color: article.color === '#FFFFFF' ? '#999' : article.color }} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-bold tracking-wider"
                        style={{ color: article.color === '#FFFFFF' ? '#999' : article.color }}
                      >
                        ARTICLE {article.num}
                      </span>
                    </div>
                    <h3 className="text-[#1A1A1A] font-bold text-base mt-0.5">{article.title}</h3>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-5 pl-[76px]">
                    <p className="text-[#555] text-sm leading-relaxed">{article.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
