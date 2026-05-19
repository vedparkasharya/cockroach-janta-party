import { ExternalLink } from 'lucide-react';

const newsOutlets = [
  'India Today',
  'Times of India',
  'The Hindu',
  'LiveMint',
  'Economic Times',
  'Gujarat Samachar',
  'The Federal',
  'OneIndia',
  'Mathrubhumi',
  'NewsX',
  'OpIndia',
  'English Jagran',
];

const newsArticles = [
  {
    outlet: 'India Today',
    headline: 'Cockroach Janta Party debuts, admits two TMC MPs within days',
    excerpt:
      'The Cockroach Janta Party claims to have already crossed the 40,000-member mark. Within two days, it has admitted two TMC MPs, Mahua Moitra and Kirti Azad.',
    color: '#FF4444',
    url: 'https://www.indiatoday.in/india/story/cockroach-janta-party-40000-members-mahua-moitra-kirti-azad-gen-z-convention-2913347-2026-05-18',
  },
  {
    outlet: 'The Hindu',
    headline: 'Who is Abhijeet Dipke? Inside the viral Cockroach Janta Party movement',
    excerpt:
      'On May 16, 30-year-old Abhijeet Dipke posted a Google form inviting people to register for the Cockroach Janta Party. Within hours, he received over 5,000 registrations.',
    color: '#1E3A5F',
    url: 'https://www.thehindu.com/news/national/who-is-abhijeet-dipke-inside-the-viral-cockroach-janta-party-movement/article70994402.ece',
  },
  {
    outlet: 'Times of India',
    headline: 'What is Cockroach Janta Party? 5-point manifesto attracts 40K members in 2 days',
    excerpt:
      'Discover the rise of the Cockroach Janta Party, a satirical political group that attracted over 40000 members in just two days with its unique manifesto.',
    color: '#CC0000',
    url: 'https://timesofindia.indiatimes.com/india/what-is-cockroach-janta-party-5-point-manifesto-attracts-40k-members-in-2-days/articleshow/131177132.cms',
  },
];

export default function Media() {
  return (
    <section id="media" className="relative py-24 md:py-32 bg-[#0A0A0A]">
      {/* Tricolor top border */}
      <div className="absolute top-0 left-0 right-0 h-1 tricolor-gradient" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="scroll-reveal inline-block px-3 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-full text-[#00E5FF] text-xs font-bold tracking-widest uppercase mb-6">
            Press Coverage
          </span>
          <h2 className="scroll-reveal stagger-1 text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase">
            In The <span className="text-[#00E5FF]">News</span>
          </h2>
        </div>

        {/* News Ticker */}
        <div className="scroll-reveal mb-16 overflow-hidden bg-[#141414] rounded-xl border border-[#2A2A2A] py-4">
          <div className="flex animate-ticker whitespace-nowrap">
            {[...newsOutlets, ...newsOutlets].map((outlet, index) => (
              <span key={index} className="mx-8 text-sm font-semibold text-gray-400 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor:
                      index % 3 === 0 ? '#FF9933' : index % 3 === 1 ? '#FFFFFF' : '#138808',
                  }}
                />
                {outlet}
              </span>
            ))}
          </div>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`scroll-reveal stagger-${index + 1} group block bg-[#141414] rounded-xl p-6 border border-[#2A2A2A] hover:border-[${article.color}]/30 transition-all duration-500 hover:-translate-y-1`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              {/* Outlet badge */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: article.color }}
                />
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                  {article.outlet}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-white font-bold text-lg leading-tight mb-3 group-hover:text-[#FF9933] transition-colors">
                {article.headline}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{article.excerpt}</p>

              {/* Read more */}
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#FF9933] group-hover:gap-2 transition-all">
                Read Article <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>

        {/* Notable supporters */}
        <div className="scroll-reveal mt-16 text-center">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-6">Notable Supporters</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Mahua Moitra (TMC MP)', 'Kirti Azad (TMC MP)', 'Sanjay Hegde (Lawyer)', 'Ramachandra Guha (Historian)', 'Anjali Bhardwaj (Activist)'].map(
              (name, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#141414] border border-[#2A2A2A] rounded-full text-sm text-gray-300"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
