import { useLanguage } from "../context/LanguageContext"
import sinarmasHero from "../assets/web/Project/sinarmas-project1.jpg"
import sinarmasDetail1 from "../assets/web/Project/sinarmas-project2.jpg"
import sinarmasDetail2 from "../assets/web/Project/sinarmas-project3.jpg"
import kccHero from "../assets/web/Project/kcc-project1.jpg"
import kccDetail1 from "../assets/web/Project/kcc-project2.jpg"
import kccDetail2 from "../assets/web/Project/kcc-project3.jpg"
import situbondoHero from "../assets/web/Project/situbondo1.jpg"
import situbondoDetail1 from "../assets/web/Project/situbondo2.jpg"
import situbondoDetail2 from "../assets/web/Project/situbondo3.jpg"
import holcimHero from "../assets/web/Project/holcim1.jpg"
import holcimDetail1 from "../assets/web/Project/holcim2.jpg"
import holcimDetail2 from "../assets/web/Project/holcim3.jpg"
import sarihusadaHero from "../assets/web/Project/sarihusada-project1.jpg"
import sarihusadaDetail1 from "../assets/web/Project/sarihusada-project2.jpg"
import sarihusadaDetail2 from "../assets/web/Project/sarihusada-project3.jpg"
import wkcHero from "../assets/web/Project/wkc1.jpg"
import wkcDetail1 from "../assets/web/Project/wkc2.jpg"
import wkcDetail2 from "../assets/web/Project/wkc3.jpg"
import hangNadimHero from "../assets/web/Project/sinarmas-project1.jpg"
import hangNadimDetail1 from "../assets/web/Project/sinarmas-project2.jpg"
import hangNadimDetail2 from "../assets/web/Project/sinarmas-project3.jpg"
import kaiHero from "../assets/web/Project/kai-project1.jpg"
import kaiDetail1 from "../assets/web/Project/kai-project2.jpg"
import kaiDetail2 from "../assets/web/Project/kai-project3.jpg"
import depokHero from "../assets/web/Project/zimico-utama1.jpg"
import depokDetail1 from "../assets/web/Project/zimico-utama2.jpg"
import depokDetail2 from "../assets/web/Project/zimico-utama3.jpg"
import aldeposHero from "../assets/web/Project/aldepos-project1.jpg"
import aldeposDetail1 from "../assets/web/Project/aldepos-project2.jpg"
import aldeposDetail2 from "../assets/web/Project/aldepos-project3.jpg"
import sinarmasLogo from "../assets/logo-project/sinarmas-logo.jpg"
import kccLogo from "../assets/logo-project/kcc-logo.png"
import holcimLogo from "../assets/logo-project/holcim-logo.png"
import sarihusadaLogo from "../assets/logo-project/sarihusada-logo.png"
import wkcLogo from "../assets/logo-project/wkc-logo.png"
import wikaLogo from "../assets/logo-project/wika-logo.png"
import kaiLogo from "../assets/logo-project/kai-logo.png"
import aldeposLogo from "../assets/logo-project/aldepos-logo.png"

const projects = [
  {
    key: "fire-tower",
    hero: sinarmasHero,
    gallery: [sinarmasDetail1, sinarmasDetail2],
    logos: [sinarmasLogo],
    client: { id: "Sinar Mas Forestry", en: "Sinar Mas Forestry" },
    title: {
      id: "Konstruksi Menara Pengawas Kebakaran 32 m - Palembang",
      en: "Steel Construction of a 32 m Fire Tower - Palembang",
    },
    caption: {
      id: "Sinarmas Forestry mempercayakan PT Geum Cheon Indo membangun menara pengawas kebakaran setinggi 32 meter di Palembang. Struktur baja dirakit dengan standar keselamatan tinggi untuk memastikan keandalan operasional dalam pemantauan hutan.",
      en: "Sinarmas Forestry trusted PT Geum Cheon Indo to build a 32 meter fire watch tower in Palembang. The steel structure was delivered to high safety standards to keep forest monitoring reliable.",
    },
    meta: { location: "Palembang, South Sumatra", year: "2024", scope: "Fire watch tower" },
  },
  {
    key: "glass-rack",
    hero: kccHero,
    gallery: [kccDetail1, kccDetail2],
    logos: [kccLogo],
    client: { id: "PT KCC Glass Indonesia", en: "PT KCC Glass Indonesia" },
    title: {
      id: "Manufaktur Rak Kaca Single & Double - Batang",
      en: "Steel Manufacture of Single & Double Glass Racks - Batang",
    },
    caption: {
      id: "Kami memproduksi rak kaca tipe single dan double untuk PT KCC Glass Indonesia. Fabrikasi presisi menghadirkan kekuatan struktural dan finishing yang memenuhi standar industri kaca modern.",
      en: "We manufactured single and double glass racks for PT KCC Glass Indonesia. Precise fabrication delivered structural strength and finish quality that meets modern glass industry standards.",
    },
    meta: { location: "Batang, Central Java", year: "2025", scope: "Glass rack fabrication" },
  },
  {
    key: "movable-bridge",
    hero: situbondoHero,
    gallery: [situbondoDetail1, situbondoDetail2],
    logos: [wikaLogo],
    client: { id: "Dishub Kabupaten Situbondo", en: "Situbondo Transportation Agency" },
    title: {
      id: "Proyek Jembatan Bergerak - Situbondo, Jawa Timur",
      en: "Movable Bridge Construction Project - Situbondo, East Java",
    },
    caption: {
      id: "Jembatan bergerak ini dirancang agar kapal tetap dapat melintas tanpa mengganggu konektivitas darat. Kami memprioritaskan akurasi struktural, material berkualitas, serta teknologi konstruksi modern yang mematuhi standar teknis.",
      en: "The movable bridge allows vessels to pass without disrupting land connectivity. We prioritised structural accuracy, quality materials, and modern construction technology that complies with technical standards.",
    },
    meta: { location: "Situbondo, East Java", year: "2022", scope: "Movable bridge system" },
  },
  {
    key: "weighbridge",
    hero: holcimHero,
    gallery: [holcimDetail1, holcimDetail2],
    logos: [holcimLogo],
    client: { id: "Holcim Indonesia", en: "Holcim Indonesia" },
    title: {
      id: "Fabrikasi Struktur Baja Weighbridge Holcim",
      en: "Structural Steel Fabrication for Holcim Weighbridge",
    },
    caption: {
      id: "Pekerjaan mencakup perencanaan, pemotongan, assembly, dan pemasangan struktur utama timbangan kendaraan. Seluruh proses mengikuti standar nasional (SNI) untuk menjamin keselamatan dan keandalan fasilitas.",
      en: "The scope covered planning, cutting, assembly, and integration of the main vehicle weighbridge structure. All work followed Indonesian national standards to guarantee safety and reliability.",
    },
    meta: { location: "Indonesia", year: "2023", scope: "Weighbridge fabrication" },
  },
  {
    key: "cargo-lift",
    hero: sarihusadaHero,
    gallery: [sarihusadaDetail1, sarihusadaDetail2],
    logos: [sarihusadaLogo],
    client: { id: "Sarihusada - Danone", en: "Sarihusada - Danone" },
    title: {
      id: "Proyek Fabrikasi Cargo Lift - Yogyakarta",
      en: "Cargo Lift and Segregation Lift Fabrication Project",
    },
    caption: {
      id: "Sistem lift kargo dirancang untuk memindahkan material dengan kapasitas besar dan tingkat keamanan tinggi. Solusi ini mendukung kelancaran distribusi internal fasilitas manufaktur Danone.",
      en: "The cargo lift system was engineered to move materials with high carrying capacity and strong safety controls, supporting internal distribution for Danone's manufacturing facility.",
    },
    meta: { location: "Yogyakarta", year: "2023", scope: "Custom lift system" },
  },
  {
    key: "jakarta-toll",
    hero: wkcHero,
    gallery: [wkcDetail1, wkcDetail2],
    logos: [wkcLogo],
    client: { id: "Wijaya Kusuma Contractors", en: "Wijaya Kusuma Contractors" },
    title: {
      id: "Fabrikasi Struktur Baja Tol Jakarta-Cikampek",
      en: "Structural Steel Fabrication for Jakarta-Cikampek Toll Road",
    },
    caption: {
      id: "Kami memproduksi struktur baja yang mendukung proyek jalan tol Jakarta-Cikampek. Komponen girder, rangka pendukung, dan elemen sambungan dikerjakan dengan ketelitian tinggi untuk memenuhi kebutuhan infrastruktur transportasi.",
      en: "We fabricated steel structures that support the Jakarta-Cikampek toll road project. Girder components, support frames, and connection elements were delivered with high precision for transport infrastructure.",
    },
    meta: { location: "Jakarta - Cikampek", year: "2022", scope: "Transport infrastructure steel" },
  },
  {
    key: "hang-nadim",
    hero: hangNadimHero,
    gallery: [hangNadimDetail1, hangNadimDetail2],
    logos: [wikaLogo],
    client: { id: "Wijaya Karya", en: "Wijaya Karya" },
    title: {
      id: "Struktur Baja GSE Hang Nadim Airport - Batam",
      en: "Steel Structure for the GSE Building at Hang Nadim Airport",
    },
    caption: {
      id: "Bangunan Ground Support Equipment di Bandara Hang Nadim mendukung operasi logistik dan mobilitas bandara. PT Geum Cheon Indo menghadirkan struktur baja dengan kontrol kualitas ketat untuk menjaga keandalan fasilitas.",
      en: "The Ground Support Equipment building at Hang Nadim Airport supports airport logistics and mobility. PT Geum Cheon Indo delivered a tightly controlled steel structure to keep the facility dependable.",
    },
    meta: { location: "Batam, Riau Islands", year: "2024", scope: "Airport support facility" },
  },
  {
    key: "kai-complex",
    hero: kaiHero,
    gallery: [kaiDetail1, kaiDetail2],
    logos: [kaiLogo],
    client: { id: "PT KAI Properti", en: "PT KAI Properti" },
    title: {
      id: "Steel Construction Final Test Gerbong & Power House",
      en: "Steel Construction Final Test Gerbong, SKCD, Power House & Office",
    },
    caption: {
      id: "Rangkaian proyek PT KAI Properti meliputi workshop perawatan gerbong, gudang SKCD, power house, dan kantor. Infrastruktur baja ini meningkatkan efisiensi logistik nasional serta layanan perkeretaapian.",
      en: "PT KAI Properti's programme covers wagon maintenance workshops, SKCD warehouses, power houses, and offices. The steel infrastructure boosts national logistics efficiency and rail services.",
    },
    meta: { location: "Palembang", year: "2025", scope: "Rail facility complex" },
  },
  {
    key: "depok-bridge",
    hero: depokHero,
    gallery: [depokDetail1, depokDetail2],
    logos: [],
    client: { id: "Pemkot Depok & CV Zimico Utama", en: "Depok City Government & CV Zimico Utama" },
    title: {
      id: "Struktur Baja JPO dan Kantilever Depok",
      en: "Steel Structure of Pedestrian Bridge and Cantilever in Depok",
    },
    caption: {
      id: "Kolaborasi dengan Pemkot Depok menghadirkan fasilitas penyeberangan yang aman, mempercantik kota, dan mendukung mobilitas masyarakat. Konstruksi baja presisi memastikan struktur tangguh untuk aktivitas padat.",
      en: "Working with Depok City, we delivered a safe pedestrian bridge that enhances the cityscape and supports daily mobility. Precise steel construction keeps the structure resilient under heavy use.",
    },
    meta: { location: "Depok, West Java", year: "2023", scope: "Pedestrian bridge and cantilever" },
  },
  {
    key: "aldepos-boarding",
    hero: aldeposHero,
    gallery: [aldeposDetail1, aldeposDetail2],
    logos: [aldeposLogo],
    client: { id: "Aldepos Islamic Boarding School", en: "Aldepos Islamic Boarding School" },
    title: {
      id: "Steel Structure Aldepos Boarding School",
      en: "Steel Structure Aldepos Boarding School",
    },
    caption: {
      id: "PT Geum Cheon Indo membangun struktur baja utama untuk kompleks asrama Aldepos di Bogor. Fasilitas pendidikan ini mengedepankan keandalan, durabilitas, dan kenyamanan bagi kegiatan pembelajaran santri.",
      en: "PT Geum Cheon Indo erected the primary steel structure for the Aldepos boarding complex in Bogor. The educational facility prioritises reliability, durability, and comfort for daily learning activities.",
    },
    meta: { location: "Bogor, West Java", year: "2023", scope: "Educational facility" },
  },
]

const sectionCopy = {
  id: {
    badge: "Proyek Kami",
    title: "Studi kasus utama yang menampilkan kompetensi baja Geum Cheon Indo",
    subtitle:
      "Setiap kartu menampilkan konteks proyek, rangkuman progres, dan identitas klien sehingga rekam jejak kami mudah ditelusuri.",
  },
  en: {
    badge: "Our Projects",
    title: "Key case studies that showcase Geum Cheon Indo's steel capabilities",
    subtitle:
      "Each card blends project context, progress imagery, and client identity so our track record is easy to explore.",
  },
}

export function OurProjectsSection() {
  const { language } = useLanguage()
  const copy = sectionCopy[language] ?? sectionCopy.id
  const localized = projects.map((project) => ({
    ...project,
    title: project.title[language] ?? project.title.id,
    caption: project.caption[language] ?? project.caption.id,
    client: project.client[language] ?? project.client.id,
  }))

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-theme-blue md:py-28 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/50 via-white to-white" aria-hidden />
      <div className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-light-theme-purple/50 blur-[160px]" aria-hidden />
      <div className="absolute -left-24 bottom-[-140px] h-[420px] w-[420px] rounded-full bg-theme-purple/15 blur-[180px]" aria-hidden />

      <div className="container relative z-10 space-y-12 md:space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-theme-purple/20 bg-light-theme-purple/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
            {copy.badge}
          </span>
          <h2 className="text-3xl font-semibold text-theme-blue sm:text-4xl">{copy.title}</h2>
          <p className="text-sm leading-relaxed text-muted-grey">{copy.subtitle}</p>
        </div>

        <div className="grid gap-10">
          {localized.map((project, index) => (
            <article
              key={project.key}
              className="grid gap-8 rounded-[40px] border border-slate-200 bg-white/90 p-10 shadow-[0_60px_140px_-90px_rgba(15,23,42,0.28)] backdrop-blur lg:grid-cols-[0.95fr,1.05fr] animate-fade-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-theme-purple/80">{project.client}</p>
                    <h3 className="text-2xl font-semibold text-theme-blue">{project.title}</h3>
                  </div>
                  <div className="h-1 w-16 rounded-full bg-theme-purple/30" />
                  <p className="text-sm leading-relaxed text-muted-grey">{project.caption}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-muted-grey">
                  <span className="rounded-full border border-theme-purple/25 bg-light-theme-purple/60 px-4 py-1 text-theme-purple">{project.meta.location}</span>
                  <span className="rounded-full border border-slate-200 px-4 py-1">{project.meta.year}</span>
                  <span className="rounded-full border border-slate-200 px-4 py-1 text-muted-grey">{project.meta.scope}</span>
                </div>
                {project.logos.length ? (
                  <div className="flex flex-wrap items-center gap-4">
                    {project.logos.map((logoSrc) => (
                      <div key={`${project.key}-${logoSrc}`} className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
                        <img src={logoSrc} alt={`${project.client} logo`} className="h-full w-auto object-contain" loading="lazy" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_90px_-70px_rgba(15,23,42,0.25)]">
                  <img src={project.hero} alt={`${project.title} hero`} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="grid grid-rows-2 gap-4">
                  {project.gallery.map((frame, frameIndex) => (
                    <div
                      key={`${project.key}-frame-${frameIndex}`}
                      className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_70px_-60px_rgba(15,23,42,0.2)]"
                    >
                      <img src={frame} alt={`${project.title} progress ${frameIndex + 1}`} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProjectsSection
