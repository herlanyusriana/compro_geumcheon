import { Factory, Gauge, Layers, ShieldCheck } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"
import fiberLaser from "../assets/web/Mesin/Picture4.png"
import largeFormatLaser from "../assets/web/Mesin/Picture6.png"
import cncLathe from "../assets/web/Mesin/Picture10.png"
import tubeLaser from "../assets/web/Mesin/Picture5.png"

const worksCopy = {
  id: {
    badge: "Our Works",
    title: "Kemampuan manufaktur logam yang siap mendukung proyek industri",
    description:
      "Workshop Geum Cheon Indo mengoperasikan lini laser cutting, pembentukan, dan machining untuk memastikan setiap komponen diproduksi presisi, cepat, dan terdokumentasi.",
    highlights: [
      "Integrasi MES untuk pemantauan parameter produksi",
      "Tim engineer berdedikasi dari penjadwalan hingga QC akhir",
      "Traceability material dan laporan inspeksi digital",
    ],
    machinesTitle: "Mesin utama kami",
  },
  en: {
    badge: "Our Works",
    title: "Metal manufacturing capabilities ready for industrial scale projects",
    description:
      "Geum Cheon Indo operates laser cutting, forming, and machining lines so every component is produced with precision, speed, and complete documentation.",
    highlights: [
      "MES integration for live production parameter monitoring",
      "Dedicated engineers from scheduling through final QC",
      "Material traceability and digital inspection reports",
    ],
    machinesTitle: "Key equipment",
  },
  ko: {
    badge: "Our Works",
    title: "?? ?? ?? ??? ???? ????? ?? ??",
    description:
      "Geum Cheon Indo? ??? ??, ?????, ?????? ??? ?? ??? ?? ?? ????? ??? ??? ?? ?? ??.",
    highlights: [
      "MES ??? ??? ?? ????? ?????",
      "?? ?? ??? ??? ?? ??? ???? ???",
      "?? ?? ??? ??? ???? ?? ???",
    ],
    machinesTitle: "주요 설비",
  },
}

const machineCatalog = [
  {
    key: "fiber-laser",
    image: fiberLaser,
    specs: {
      id: {
        name: "Fiber Laser 6 kW",
        summary: "Precision cutting untuk stainless, mild steel, dan aluminium dengan auto pallet changer.",
        metrics: ["Toleransi +/-0,1 mm", "Meja 3000 x 1500 mm", "Auto nesting & MES"],
      },
      en: {
        name: "Fiber Laser 6 kW",
        summary: "Precision cutting for stainless, mild steel, and aluminium with automated pallet change.",
        metrics: ["Tolerance +/-0.1 mm", "3000 x 1500 mm table", "Auto nesting & MES"],
      },
      ko: {
        name: "Fiber Laser 6 kW",
        summary: "Stainless, mild steel, aluminium ?? ????? auto pallet ??? ?????.",
        metrics: ["?? +/-0.1 mm", "3000 x 1500 mm ??", "Auto nesting & MES"],
      },
    },
  },
  {
    key: "large-format-laser",
    image: largeFormatLaser,
    specs: {
      id: {
        name: "Laser Cutting Large Format",
        summary: "Cutting material lembaran extra panjang untuk konstruksi dan infrastruktur.",
        metrics: ["Area kerja 6000 mm", "Monitoring suhu optik", "Auto focus penyesuaian"],
      },
      en: {
        name: "Large Format Laser Cutting",
        summary: "Processes extended sheet material for construction and infrastructure projects.",
        metrics: ["Working area 6000 mm", "Optic temperature monitoring", "Auto focus adjustment"],
      },
      ko: {
        name: "??? ??? ???",
        summary: "???? ?? ??? ??? ??? ??? ?????.",
        metrics: ["?? ??? 6000 mm", "??? ??? ???", "Auto focus ???"],
      },
    },
  },
  {
    key: "cnc-lathe",
    image: cncLathe,
    specs: {
      id: {
        name: "CNC Turning Center",
        summary: "Menyelesaikan komponen silinder dengan akurasi tinggi dan repeatability konsisten.",
        metrics: ["Chuck 6 inch", "Lead time machining singkat", "Integrasi QC digital"],
      },
      en: {
        name: "CNC Turning Center",
        summary: "Delivers cylindrical components with tight tolerance and consistent repeatability.",
        metrics: ["6 inch chuck", "Short machining lead time", "Integrated digital QC"],
      },
      ko: {
        name: "CNC Turning Center",
        summary: "?? ??? ??? ?? ??? ??? ??? ????.",
        metrics: ["6 inch chuck", "??? ??? lead time", "?? QC ???"],
      },
    },
  },
  {
    key: "tube-laser",
    image: tubeLaser,
    specs: {
      id: {
        name: "Tube Laser",
        summary: "Pemotongan profil pipa dan hollow untuk struktur ringan maupun rak industri.",
        metrics: ["Diameter hingga 200 mm", "Rotary chuck presisi", "Perpindahan program cepat"],
      },
      en: {
        name: "Tube Laser",
        summary: "Cuts tube and hollow profiles for light structures and industrial racking.",
        metrics: ["Up to 200 mm diameter", "Precision rotary chuck", "Quick program changeover"],
      },
      ko: {
        name: "Tube Laser",
        summary: "?? ??? ?? ????? ??? ??? ??? ???.",
        metrics: ["???? 200 mm", "?? rotary chuck", "?? ??? ???"],
      },
    },
  },
]

const iconFeatures = [
  { icon: Factory, copy: { id: "Workshop 24/7 dengan jalur material terpisah", en: "24/7 workshop with dedicated material flow", ko: "24/7 ?? ?? ?? ??? ???" } },
  { icon: Gauge, copy: { id: "Monitoring parameter produksi realtime", en: "Real-time production parameter monitoring", ko: "??? ???? ??? ???" } },
  { icon: Layers, copy: { id: "Integrasi desain, nesting, hingga finishing", en: "Integrated design, nesting, through finishing", ko: "??? ???, nesting, finishing ?? ???" } },
  { icon: ShieldCheck, copy: { id: "QC digital dan dokumentasi sertifikat material", en: "Digital QC with full material certification", ko: "Digital QC ?? ??? ??? ???" } },
]

export function OurWorksSection() {
  const { language } = useLanguage()
  const copy = worksCopy[language] ?? worksCopy.id

  return (
    <section className="bg-white py-20 md:py-24 animate-fade-in">
      <div className="container space-y-12 md:space-y-16">
        <div className="grid gap-10 lg:grid-cols-[1fr,0.85fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-light-theme-purple px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
              {copy.badge}
            </span>
            <h1 className="text-3xl font-semibold text-theme-blue sm:text-4xl lg:text-5xl">{copy.title}</h1>
            <p className="text-base leading-relaxed text-muted-grey">{copy.description}</p>
            <ul className="space-y-3 text-sm text-theme-blue">
              {copy.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-theme-purple/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 rounded-[32px] border border-slate-200 bg-background/60 p-6 shadow-card">
            {iconFeatures.map(({ icon: Icon, copy: text }) => (
              <div key={text.id} className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-light-theme-purple text-theme-purple">
                  <Icon size={18} />
                </span>
                <p className="text-sm text-muted-grey">{text[language] ?? text.id}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-grey">{copy.machinesTitle}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {machineCatalog.map((machine, index) => {
              const detail = machine.specs[language] ?? machine.specs.id
              return (
                <div
                  key={machine.key}
                  className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-2xl animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-44 bg-background">
                    <img
                      src={machine.image}
                      alt={detail.name}
                      className="absolute inset-0 h-full w-full object-contain p-6"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-4 p-6">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-theme-blue">{detail.name}</p>
                      <p className="text-xs text-muted-grey">{detail.summary}</p>
                    </div>
                    <ul className="space-y-2 text-xs text-muted-grey">
                      {detail.metrics.map((metric) => (
                        <li key={metric} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-theme-purple/70" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
