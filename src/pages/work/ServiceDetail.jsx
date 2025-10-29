import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import laserCutting1 from "../../assets/img/laser-cutting-2.jpg"
import laserCutting2 from "../../assets/img/laser-cutting-3.jpg"
import laserCutting3 from "../../assets/web/gerbang-gci-view-from-drone.png"
import metalPress1 from "../../assets/img/bending-machine-1.jpg"
import metalPress2 from "../../assets/web/Project/holcim1.jpg"
import metalPress3 from "../../assets/web/Project/holcim2.jpg"
import workshop1 from "../../assets/web/Project/holcim3.jpg"
import workshop2 from "../../assets/web/Project/kcc-project1.jpg"
import workshop3 from "../../assets/web/Project/kcc-project2.jpg"

const fallbackImage =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e5e9ff"/>
          <stop offset="100%" stop-color="#c7d2fe"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#g)"/>
      <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="#3f63ff" font-family="'Poppins', sans-serif" font-weight="600" font-size="56">Geum Cheon Indo</text>
      <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#1e3a8a" font-family="'Poppins', sans-serif" font-weight="400" font-size="36">Asset visual akan ditambahkan di sini</text>
    </svg>
  `)

const services = {
  "laser-cutting": {
    gallery: [laserCutting1, laserCutting2, laserCutting3],
    copy: {
      id: {
        title: "Laser Cutting Center",
        subtitle: "Mesin fiber 6kW dengan auto-loading system",
        description:
          "Layanan laser cutting Geum Cheon Indo memungkinkan produksi komponen presisi untuk otomotif, elektronik, dan konstruksi. Mesin fiber 6kW dilengkapi meja ganda otomatis sehingga pergantian material berjalan sangat cepat.",
        highlights: [
          "Auto nozzle cleaning & calibration untuk menjaga kualitas potong",
          "Tracking barcode material untuk traceability produksi",
          "Stok material standar tersedia on-site untuk lead time singkat",
        ],
        specs: [
          { label: "Kapasitas Lembar", value: "3000 x 1500 mm" },
          { label: "Ketebalan Maks", value: "Mild Steel 20 mm | Stainless 12 mm | Aluminium 10 mm" },
          { label: "Akurasi Posisi", value: "+/- 0.05 mm" },
          { label: "Output", value: "hingga 500 sheet / shift" },
          { label: "Software", value: "Nesting otomatis & integrasi MES" },
        ],
      },
      en: {
        title: "Laser Cutting Center",
        subtitle: "6kW fiber machine with auto-loading system",
        description:
          "Geum Cheon Indo's laser cutting service produces precision components for automotive, electronics, and construction industries. Dual-table 6kW fiber machines keep material changeover extremely fast.",
        highlights: [
          "Auto nozzle cleaning and calibration to maintain cut quality",
          "Material barcode tracking for production traceability",
          "Standard material stock on site for short lead times",
        ],
        specs: [
          { label: "Sheet size", value: "3000 x 1500 mm" },
          { label: "Maximum thickness", value: "Mild steel 20 mm | Stainless 12 mm | Aluminium 10 mm" },
          { label: "Positional accuracy", value: "+/- 0.05 mm" },
          { label: "Output", value: "up to 500 sheets/shift" },
          { label: "Software", value: "Automated nesting & MES integration" },
        ],
      },
      ko: {
        title: "??? ?? ??",
        subtitle: "6kW ??? ??? ?? ?? ???",
        description:
          "?? ??? ??? ?? ???? ???, ??, ?? ??? ?? ?? ??? ?????. 6kW ??? ??? ?? ???? ?? ?? ??? ??????.",
        highlights: [
          "? ?? ??? ?? ?? ?? ??? ??",
          "?? ??? ?? ?? ??? ???",
          "?? ????? ?? ???? ?? ?? ??",
        ],
        specs: [
          { label: "?? ??", value: "3000 x 1500 mm" },
          { label: "?? ??", value: "?? 20 mm | ????? 12 mm | ???? 10 mm" },
          { label: "???", value: "+/- 0.05 mm" },
          { label: "??", value: "??? ?? 500?" },
          { label: "?????", value: "?? ??? ? MES ??" },
        ],
      },
    },
  },
  "metal-press": {
    gallery: [metalPress1, metalPress2, metalPress3],
    copy: {
      id: {
        title: "Metal Press Facility",
        subtitle: "Press line 200 - 450 ton dengan quick die change",
        description:
          "Fasilitas metal press kami mendukung produksi massal komponen otomotif dan peralatan industri. Sistem quick die change & monitoring digital memastikan konsistensi kualitas pada setiap stroke.",
        highlights: [
          "Quick die change system mempercepat setup & mengurangi downtime",
          "Inspeksi dimensi inline dengan digital gauge",
          "Rangkaian coil feeder untuk material dalam gulungan",
        ],
        specs: [
          { label: "Rentang Tonase", value: "200 - 450 ton" },
          { label: "Stroke per Menit", value: "40 - 60 spm" },
          { label: "Ukuran Meja", value: "2500 x 1200 mm" },
          { label: "Controller", value: "PLC + sensor load monitor" },
          { label: "Kapasitas Produksi", value: "hingga 120.000 pcs / bulan" },
        ],
      },
      en: {
        title: "Metal Press Facility",
        subtitle: "200 - 450 ton press line with quick die change",
        description:
          "Our metal press facility supports mass production for automotive and industrial components. Quick die change and digital monitoring keep quality consistent on every stroke.",
        highlights: [
          "Quick die change system speeds up setup and reduces downtime",
          "Inline dimensional inspection with digital gauges",
          "Coil feeder system for roll material handling",
        ],
        specs: [
          { label: "Ton range", value: "200 - 450 ton" },
          { label: "Strokes per minute", value: "40 - 60 spm" },
          { label: "Bed size", value: "2500 x 1200 mm" },
          { label: "Controller", value: "PLC with load monitoring sensors" },
          { label: "Production capacity", value: "up to 120,000 pcs/month" },
        ],
      },
      ko: {
        title: "?? ??? ??",
        subtitle: "200~450? ??? ??? ? ?? ???",
        description:
          "?? ??? ??? ??? ? ?? ??? ?? ??? ?????. ? ?? ???? ??? ?????? ? ????? ??? ?????.",
        highlights: [
          "? ?? ??? ????? ?? ??? ???? ????? ????",
          "??? ???? ?? ??? ?? ??",
          "?? ?? ????? ? ??? ????? ??",
        ],
        specs: [
          { label: "? ??", value: "200 - 450 ton" },
          { label: "?? ????", value: "40 - 60 spm" },
          { label: "?? ??", value: "2500 x 1200 mm" },
          { label: "????", value: "?? ??? ??? ?? PLC" },
          { label: "?? ??", value: "? ?? 120,000?" },
        ],
      },
    },
  },
  "precision-workshop": {
    gallery: [workshop1, workshop2, workshop3],
    copy: {
      id: {
        title: "Precision Workshop",
        subtitle: "Machining, welding, dan assembly 24/7",
        description:
          "Workshop presisi Geum Cheon Indo mendukung pembuatan jig & fixture, machining CNC, welding, serta finishing. Tim engineering siap melayani permintaan kustom dan perawatan tooling tenant.",
        highlights: [
          "Pembuatan jig & fixture kustom untuk mendukung lini produksi tenant",
          "Perbaikan tooling cepat dengan dukungan spare part internal",
          "Dokumentasi digital setiap pekerjaan untuk histori pemeliharaan",
        ],
        specs: [
          { label: "Mesin CNC", value: "Vertical machining center 5-axis, lathe CNC" },
          { label: "Fasilitas Welding", value: "MIG, TIG, robotic welding cell" },
          { label: "Area", value: "2.500 m2 dengan crane 10 ton" },
          { label: "Quality Lab", value: "CMM, roughness tester, hardness tester" },
          { label: "Support", value: "Engineering 24/7 & layanan on-site tenant" },
        ],
      },
      en: {
        title: "Precision Workshop",
        subtitle: "24/7 machining, welding, and assembly",
        description:
          "Geum Cheon Indo's precision workshop builds jigs and fixtures, provides CNC machining, welding, and finishing. Our engineering team handles custom requests and tooling maintenance for tenants.",
        highlights: [
          "Custom jig and fixture fabrication to support tenant production lines",
          "Rapid tooling repair with internal spare-part support",
          "Digital documentation for every job to maintain maintenance history",
        ],
        specs: [
          { label: "CNC machines", value: "5-axis vertical machining centers, CNC lathe" },
          { label: "Welding facilities", value: "MIG, TIG, robotic welding cell" },
          { label: "Floor area", value: "2,500 m2 with 10-ton crane" },
          { label: "Quality lab", value: "CMM, roughness tester, hardness tester" },
          { label: "Support", value: "24/7 engineering & on-site tenant service" },
        ],
      },
      ko: {
        title: "?? ???",
        subtitle: "24?? ??, ??, ??",
        description:
          "?? ??? ?? ???? ??? ??? ??, CNC ??, ??, ???? ????, ????? ?? ?? ??? ??? ?? ????? ?????.",
        highlights: [
          "??? ?? ??? ?? ?? ??·??? ??",
          "?? ?? ???? ??? ?? ??",
          "?? ??? ???? ??? ???? ??? ??",
        ],
        specs: [
          { label: "CNC ??", value: "5? ??? ?????, CNC ??" },
          { label: "?? ??", value: "MIG, TIG, ?? ?? ?" },
          { label: "??", value: "10? ???? ?? 2,500 m2" },
          { label: "?? ???", value: "CMM, ?? ??? ???, ?? ???" },
          { label: "??", value: "24?? ????? ? ???? ???" },
        ],
      },
    },
  },
}

const sectionLabels = {
  id: {
    back: "Kembali",
    highlights: "Highlight Operasional",
    specs: "Spesifikasi Mesin",
  },
  en: {
    back: "Back",
    highlights: "Operational Highlights",
    specs: "Machine Specifications",
  },
  ko: {
    back: "??",
    highlights: "?? ?????",
    specs: "?? ??",
  },
}

function handleImageError(event) {
  const target = event.currentTarget
  target.onerror = null
  target.src = fallbackImage
}

export function ServiceDetail() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const navigate = useNavigate()

  const service = useMemo(() => services[slug], [slug])

  if (!service) {
    navigate("/work", { replace: true })
    return null
  }

  const serviceCopy = service.copy[language] ?? service.copy.id
  const labels = sectionLabels[language] ?? sectionLabels.id
  const galleryImages = service.gallery && service.gallery.length > 0 ? service.gallery : [fallbackImage]
  const [primaryImage, ...secondaryImages] = galleryImages

  return (
    <div className="relative bg-white">
      <div className="container space-y-12 py-16">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-theme-purple transition hover:text-dark-theme-purple"
        >
          <ArrowLeft size={16} /> {labels.back}
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-light-theme-purple px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
              {serviceCopy.subtitle}
            </span>
            <h1 className="text-4xl font-semibold text-theme-blue sm:text-5xl">{serviceCopy.title}</h1>
            <p className="text-lg leading-relaxed text-muted-grey">{serviceCopy.description}</p>
            <div className="rounded-[32px] border border-slate-200 bg-background p-6 shadow-card">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-grey">{labels.highlights}</h2>
              <ul className="mt-4 space-y-2 text-sm text-theme-blue">
                {serviceCopy.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-theme-purple" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[32px] border border-slate-200 bg-background p-3 shadow-card">
              <div className="relative h-[320px] w-full overflow-hidden rounded-[28px] bg-white sm:h-[380px] lg:h-[420px]">
                <img
                  src={primaryImage || fallbackImage}
                  onError={handleImageError}
                  alt={`${serviceCopy.title} image`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {secondaryImages.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {secondaryImages.map((src, index) => (
                  <div key={`${src}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                    <div className="relative h-28 overflow-hidden rounded-xl">
                      <img
                        src={src}
                        onError={handleImageError}
                        alt={`${serviceCopy.title} gallery`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-background p-6 shadow-card">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-grey">{labels.specs}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCopy.specs.map((item) => (
              <div key={`${item.label}-${item.value}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-theme-purple">{item.label}</p>
                <p className="mt-2 text-sm text-theme-blue">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

