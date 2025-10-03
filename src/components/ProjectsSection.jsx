const projects = [
  {
    name: 'Smart Mobility Hub',
    location: 'Cikarang, Jawa Barat',
    description: 'Pengembangan kawasan otomotif terintegrasi dengan fasilitas EV battery, pusat riset, dan logistic hub.',
    highlights: ['4.5 ha EV campus', 'Joint venture Korea-Indonesia', 'Operasional Q3 2025'],
    tag: 'Mobility & EV',
  },
  {
    name: 'Sustainable Food Estate',
    location: 'Sulawesi Selatan',
    description: 'Integrasi produksi pangan, cold chain, dan pelabuhan laut dalam untuk ekspor ke pasar Asia.',
    highlights: ['Zero waste', 'Renewable driven', '3.000 tenaga kerja'],
    tag: 'Agro Processing',
  },
  {
    name: 'Digital Aeropolis',
    location: 'Bandara Kertajati',
    description: 'Proyek kota bandara dengan fokus logistik udara, maintenance pesawat, dan fasilitas MICE.',
    highlights: ['45% green open space', 'IoT infrastructure', 'Tax incentive ready'],
    tag: 'Logistics & Infrastructure',
  },
]

export function ProjectsSection() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-grey">Portofolio</span>
          <h2 className="mt-4 text-3xl font-semibold text-theme-blue sm:text-4xl">
            Proyek unggulan yang menciptakan nilai jangka panjang
          </h2>
          <p className="mt-4 text-base text-muted-grey">
            Setiap proyek dikembangkan melalui riset mendalam dan kolaborasi erat dengan pemangku kepentingan lokal maupun internasional.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-light-theme-purple/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-6">
                <span className="inline-flex rounded-full bg-light-theme-purple px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-theme-purple">
                  {project.tag}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-theme-blue">{project.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.35em] text-muted-grey">{project.location}</p>
                </div>
                <p className="text-sm text-muted-grey">{project.description}</p>
                <ul className="space-y-2 text-sm text-muted-grey">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-theme-purple" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
