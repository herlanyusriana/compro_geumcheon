import { BadgeCheck, Factory, Shield } from "lucide-react"
import certificateIso from "../assets/web/Certificate/Picture37.png"
import certificateBsi from "../assets/web/Certificate/Picture38.png"
import certificateAnab from "../assets/web/Certificate/Picture39.png"
import bsiAnabLogo from "../assets/img/bsi-anab.jpg"
import { useLanguage } from "../context/LanguageContext"

const certificationCopy = {
  id: {
    badge: "Certified Excellence",
    title: "Standar kualitas global untuk manufaktur logam kelas dunia",
    description:
      "Seluruh lini produksi Geum Cheon Indo tersertifikasi ISO 9001:2015 dan diawasi melalui inspeksi digital. Setiap komponen memiliki jejak material lengkap sebelum dikirimkan ke klien.",
    badgeLabel: "ISO 9001:2015 Quality Management",
    footnote:
      "Divalidasi oleh BSI dan ANAB untuk memastikan konsistensi mutu dan traceability produksi.",
  },
  en: {
    badge: "Certified Excellence",
    title: "Global quality standards for world-class metal manufacturing",
    description:
      "All Geum Cheon Indo lines are ISO 9001:2015 certified with digital inspection checkpoints. Every component leaves with complete material traceability.",
    badgeLabel: "ISO 9001:2015 Quality Management",
    footnote:
      "Audited by BSI and ANAB to guarantee consistent quality and production traceability.",
  },
  ko: {
    badge: "Certified Excellence",
    title: "?? ?? ?? ??? ?? ??? ?? ??",
    description:
      "Geum Cheon Indo? ?? ??? ISO 9001:2015 ?? ??? ??? ?????? ??? ??? ??? ?? ???? ????.",
    badgeLabel: "ISO 9001:2015 ?? ??",
    footnote:
      "BSI? ANAB? ??? ??? ?? ??? ??? ???? ????.",
  },
}

const highlightCopy = {
  id: [
    {
      icon: BadgeCheck,
      title: "ISO 9001:2015 Certified",
      description: "Sistem manajemen mutu tervalidasi melalui audit BSI & ANAB di seluruh lini produksi.",
    },
    {
      icon: Factory,
      title: "Mesin bersertifikasi",
      description: "Laser cutting fiber, metal press 450 ton, dan pusat machining dengan kalibrasi berkala.",
    },
    {
      icon: Shield,
      title: "Compliance & ESG",
      description: "Pengelolaan limbah dan keselamatan kerja mengikuti standar internasional.",
    },
  ],
  en: [
    {
      icon: BadgeCheck,
      title: "ISO 9001:2015 Certified",
      description: "Quality management audited by BSI & ANAB across every production line.",
    },
    {
      icon: Factory,
      title: "Certified machinery",
      description: "Fiber lasers, 450-ton presses, and machining centres maintained with scheduled calibration.",
    },
    {
      icon: Shield,
      title: "Compliance & ESG",
      description: "Waste management and safety practices aligned with international standards.",
    },
  ],
  ko: [
    {
      icon: BadgeCheck,
      title: "ISO 9001:2015 ??",
      description: "BSI? ANAB ??? ??? ?? ?? ??? ?? ???? ??????.",
    },
    {
      icon: Factory,
      title: "?? ??",
      description: "Fiber laser, 450? press, machining centre ??? ??? ??? ??? ????.",
    },
    {
      icon: Shield,
      title: "Compliance & ESG",
      description: "??? ??? ??? ?? ??? ?? ?? ????.",
    },
  ],
}

const certificateImages = [
  { src: certificateIso, alt: "ISO 9001:2015 Certificate" },
  { src: certificateBsi, alt: "BSI Certification" },
  { src: certificateAnab, alt: "ANAB Accreditation" },
]

const accreditationLogos = [
  { src: bsiAnabLogo, alt: "BSI and ANAB logos" },
]

export function CertificationsSection() {
  const { language } = useLanguage()
  const copy = certificationCopy[language] ?? certificationCopy.id
  const highlights = highlightCopy[language] ?? highlightCopy.id

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-theme-blue md:py-28 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/45 via-white to-white" aria-hidden />
      <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-theme-purple/20 blur-3xl" aria-hidden />
      <div className="absolute -right-16 bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-light-theme-purple/60 blur-[140px]" aria-hidden />

      <div className="container relative z-10 space-y-12 md:space-y-16">
        <div className="grid gap-10 rounded-[40px] border border-slate-200 bg-white p-10 shadow-[0_60px_140px_-80px_rgba(15,23,42,0.18)] lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-theme-purple/20 bg-light-theme-purple/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
              {copy.badge}
            </span>
            <h2 className="text-3xl font-semibold text-theme-blue sm:text-4xl">{copy.title}</h2>
            <p className="text-base leading-relaxed text-muted-grey">{copy.description}</p>

            <div className="flex flex-wrap items-center gap-4">
              {certificateImages.map((certificate) => (
                <div
                  key={certificate.alt}
                  className="flex h-28 w-32 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                >
                  <img src={certificate.src} alt={certificate.alt} className="h-full w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {accreditationLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-20 w-32 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                >
                  <img src={logo.src} alt={logo.alt} className="h-full w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-theme-purple/20 bg-light-theme-purple/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-theme-purple">
              {copy.badgeLabel}
            </div>
            <p className="mt-3 text-xs text-muted-grey">{copy.footnote}</p>
          </div>

          <div className="grid gap-5">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_40px_100px_-80px_rgba(15,23,42,0.18)] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-theme-purple/20 bg-light-theme-purple/60 text-theme-purple">
                  <item.icon size={24} />
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-theme-blue">{item.title}</p>
                  <p className="text-sm text-muted-grey">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
