import { BadgeCheck, Factory, Shield } from "lucide-react"
import bsiAnab from "../assets/img/bsi-anab.jpg"
import { useLanguage } from "../context/LanguageContext"

const certificationCopy = {
  id: {
    badge: "Certified Excellence",
    title: "Standar kualitas global untuk manufaktur logam kelas dunia",
    description:
      "Seluruh lini produksi Geum Cheon Indo tersertifikasi ISO 9001:2015 dan mengedepankan quality assurance terpadu. Setiap komponen logam memiliki jejak material dan pengujian lengkap sebelum dikirimkan ke klien.",
    badgeLabel: "ISO 9001:2015 Quality Management",
    footnote:
      "Divalidasi oleh BSI & ANAB untuk memastikan konsistensi mutu dan traceability produksi Geum Cheon Indo.",
  },
  en: {
    badge: "Certified Excellence",
    title: "Global quality standards for world-class metal manufacturing",
    description:
      "All Geum Cheon Indo production lines are ISO 9001:2015 certified with integrated quality assurance. Every metal component carries complete material traceability and testing records before shipment.",
    badgeLabel: "ISO 9001:2015 Quality Management",
    footnote:
      "Validated by BSI & ANAB to guarantee consistent quality and production traceability.",
  },
  ko: {
    badge: "Certified Excellence",
    title: "세계 수준 금속 제조를 위한 글로벌 품질 기준",
    description:
      "금천 인도의 모든 생산 라인은 ISO 9001:2015 인증을 받았으며 통합 품질 보증 체계를 갖추고 있습니다. 모든 금속 부품은 출하 전 완전한 자재 추적과 시험 기록을 보유합니다.",
    badgeLabel: "ISO 9001:2015 품질 경영",
    footnote:
      "BSI와 ANAB의 검증을 통해 일관된 품질과 생산 추적성을 보장합니다.",
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
      description: "Laser cutting fiber 6kW, metal press 450 ton, dan machining center 5-axis.",
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
      description: "Quality management system audited by BSI & ANAB across every production line.",
    },
    {
      icon: Factory,
      title: "Certified machinery",
      description: "6kW fiber laser cutting, 450-ton metal press, and 5-axis machining centers.",
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
      title: "ISO 9001:2015 인증",
      description: "BSI와 ANAB 감사를 통해 모든 생산 라인의 품질 경영 시스템을 검증했습니다.",
    },
    {
      icon: Factory,
      title: "인증 설비",
      description: "6kW 파이버 레이저 커팅, 450톤 프레스, 5축 가공 설비를 운용합니다.",
    },
    {
      icon: Shield,
      title: "컴플라이언스 & ESG",
      description: "국제 기준에 맞춘 폐기물 관리와 안전 시스템을 운영합니다.",
    },
  ],
}

export function CertificationsSection() {
  const { language } = useLanguage()
  const copy = certificationCopy[language] ?? certificationCopy.id
  const highlights = highlightCopy[language] ?? highlightCopy.id

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-light-theme-purple/30 to-transparent" />
      <div className="container relative space-y-12">
        <div className="grid gap-10 rounded-[40px] border border-slate-200 bg-white p-10 shadow-card lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-grey">{copy.badge}</span>
            <h2 className="text-3xl font-semibold text-theme-blue sm:text-4xl">{copy.title}</h2>
            <p className="text-base leading-relaxed text-muted-grey">{copy.description}</p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex h-20 w-32 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-background p-2 shadow-sm">
                <img src={bsiAnab} alt="BSI & ANAB Certification" className="h-full w-full object-contain" loading="lazy" />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-muted-grey">
                {copy.badgeLabel}
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-grey">{copy.footnote}</p>
          </div>

          <div className="grid gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-background p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-light-theme-purple text-theme-purple">
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
