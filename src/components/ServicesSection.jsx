import { Building2, Factory, Globe2, Handshake, Leaf, Lightbulb } from 'lucide-react'

const services = [
  {
    title: 'Investment Advisory',
    description: 'Market-entry, feasibility studies, due diligence, dan strukturisasi investasi yang aman.',
    icon: Globe2,
    highlights: ['Analisis regulasi', 'Model keuangan', 'Skema kemitraan'],
  },
  {
    title: 'Industrial Park Development',
    description: 'Perencanaan, desain, dan pengembangan kawasan industri berstandar smart & green.',
    icon: Building2,
    highlights: ['Masterplan terintegrasi', 'Smart utility', 'Project management'],
  },
  {
    title: 'Operational Excellence',
    description: 'Pengelolaan operasional, supply chain, dan peningkatan produktivitas tenant.',
    icon: Factory,
    highlights: ['Lean operations', 'Digital twin', 'Maintenance 24/7'],
  },
  {
    title: 'Sustainability & ESG',
    description: 'Strategi dekarbonisasi, energy management, dan pelaporan ESG yang kredibel.',
    icon: Leaf,
    highlights: ['Renewable integration', 'Carbon accounting', 'Circular economy'],
  },
  {
    title: 'Innovation & R&D Hub',
    description: 'Kolaborasi riset, transfer teknologi, dan akselerasi inovasi lintas negara.',
    icon: Lightbulb,
    highlights: ['Open innovation', 'Pilot lab', 'Talent development'],
  },
  {
    title: 'Strategic Partnerships',
    description: 'Membangun aliansi antara korporasi, pemerintah, dan institusi keuangan.',
    icon: Handshake,
    highlights: ['Joint venture', 'Public private partnership', 'Financing advisory'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">Layanan Kami</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Satu mitra, seluruh kebutuhan Anda dari strategi hingga operasional
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Setiap solusi dirancang modular dan dapat disesuaikan dengan kebutuhan investor maupun pemerintah daerah,
            memastikan percepatan realisasi investasi secara berkelanjutan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-6 transition hover:border-primary-500/40 hover:bg-primary-500/5"
            >
              <div className="absolute -right-12 top-12 h-24 w-24 rounded-full bg-primary-500/10 blur-2xl transition group-hover:bg-primary-500/20" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-200">
                  <service.icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{service.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
