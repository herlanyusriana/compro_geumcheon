import { BatteryCharging, Building2, Cpu, Droplets, PlaneTakeoff, Truck } from 'lucide-react'

const industries = [
  {
    title: 'Advanced Manufacturing',
    description: 'Perakitan otomotif, elektronik presisi, dan komponen semikonduktor dengan integrasi smart factory.',
    icon: Cpu,
    stats: '12 fasilitas aktif',
  },
  {
    title: 'Energi & Bahan Bakar Baru',
    description: 'Investasi hilirisasi baterai EV, hidrogen, dan pengolahan mineral kritikal.',
    icon: BatteryCharging,
    stats: '4 mega projects',
  },
  {
    title: 'Logistik & Aeropolis',
    description: 'Pengembangan hub logistik, dry port, dan fasilitas pendukung industri penerbangan.',
    icon: PlaneTakeoff,
    stats: '3 gateway strategis',
  },
  {
    title: 'Infrastruktur Kota',
    description: 'Mixed-use development dan manajemen kawasan terintegrasi dengan utilitas cerdas.',
    icon: Building2,
    stats: '1.2 juta m² GFA',
  },
  {
    title: 'Agro Processing',
    description: 'Ekosistem pengolahan hasil pertanian dan perikanan untuk pasar ekspor.',
    icon: Droplets,
    stats: '5 klaster pangan',
  },
  {
    title: 'Rantai Pasok',
    description: 'Solusi cold chain, pergudangan, dan distribusi domestik-internasional.',
    icon: Truck,
    stats: '28 rute harian',
  },
]

export function IndustriesSection() {
  return (
    <section>
      <div className="container space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-grey">Fokus Industri</span>
            <h2 className="text-3xl font-semibold text-theme-blue sm:text-4xl">
              Prioritas sektor bernilai tinggi yang kami fasilitasi
            </h2>
            <p className="text-base text-muted-grey">
              Kolaborasi lintas sektor kami memastikan ekosistem manufaktur dan logistik berkembang secara responsif serta berkelanjutan.
            </p>
          </div>
          <div className="ml-auto rounded-full bg-light-theme-purple px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
            Korea x Indonesia Value Chain
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-light-theme-purple text-theme-purple">
                <industry.icon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-theme-blue">{industry.title}</h3>
              <p className="mt-3 text-sm text-muted-grey">{industry.description}</p>
              <p className="mt-6 inline-flex rounded-full bg-light-theme-purple px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-theme-purple">
                {industry.stats}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
