import { ArrowUpRight } from 'lucide-react'

const insights = [
  {
    title: 'Keunggulan Indonesia dalam rantai pasok baterai kendaraan listrik',
    category: 'Insight Industri',
    date: 'Agustus 2025',
    excerpt: 'Analisis mendalam mengenai peluang investasi baterai EV, dari hilirisasi nikel hingga fasilitas recycling.',
  },
  {
    title: 'Model kemitraan strategis Korea-Indonesia untuk kawasan industri hijau',
    category: 'Whitepaper',
    date: 'Juli 2025',
    excerpt: 'Kerangka kolaborasi multi-pihak untuk mewujudkan kawasan industri rendah karbon yang kompetitif.',
  },
  {
    title: 'Transformasi digital operasional pabrik dengan digital twin',
    category: 'Studi Kasus',
    date: 'Mei 2025',
    excerpt: 'Implementasi digital twin pada tenant otomotif yang meningkatkan efisiensi hingga 19%.',
  },
]

export function InsightsSection() {
  return (
    <section id="insights" className="relative overflow-hidden py-24">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">Insight & Publikasi</span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Wawasan terkini untuk mendukung keputusan strategis Anda
            </h2>
            <p className="text-base text-slate-300">
              Tim riset kami rutin menerbitkan insight seputar tren industri, kebijakan, serta praktik terbaik transformasi digital.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-100 transition hover:text-primary-200"
          >
            Lihat semua publikasi <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-6 transition hover:border-primary-400/40 hover:bg-primary-500/5"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
                  <span className="rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-[0.65rem] tracking-[0.4em] text-primary-100">
                    {item.category}
                  </span>
                  {item.date}
                </span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100">
                  Baca selengkapnya <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
