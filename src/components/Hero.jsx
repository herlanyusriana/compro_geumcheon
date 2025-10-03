import { ArrowUpRight, Play, ShieldCheck, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"

const heroContent = {
  id: {
    badge: "Manufaktur Logam",
    title: "Solusi manufaktur logam presisi dan pengelolaan kawasan terpadu",
    description:
      "Geum Cheon Indo memimpin industri manufaktur logam melalui fasilitas laser cutting, metal press, dan workshop presisi. Kami mengintegrasikan pengembangan kawasan industri dengan layanan fabrikasi in-house untuk mempercepat produksi mitra global Anda.",
    primaryCta: "Konsultasi Manufaktur",
    secondaryCta: "Jelajahi Kapabilitas",
    quality: "Sistem mutu terpadu dengan inspeksi QA harian, traceability, dan command center produksi.",
    campusLabel: "Metalworks Campus",
    campusTitle: "Geum Cheon Indo Hub - Cikupa",
    campusBadge: "Operasi 24/7",
    modules: [
      {
        label: "Laser Cutting",
        description: "Mesin fiber 6kW dengan tabel otomatis untuk material baja, stainless, dan aluminium.",
      },
      {
        label: "Metal Press",
        description: "Kapasitas 450 ton dengan quick die change dan integrasi QC digital.",
      },
    ],
    metrics: [
      { label: "Lead Time", value: "3-5 hari" },
      { label: "Yield Rate", value: "98%" },
      { label: "Traceability", value: "Digital MES" },
    ],
  },
  en: {
    badge: "Metal Manufacturing",
    title: "Precision metal manufacturing with an integrated industrial campus",
    description:
      "Geum Cheon Indo leads metal manufacturing with fiber laser cutting, metal press, and precision workshop facilities. We connect industrial estate development with in-house fabrication to accelerate production for global partners.",
    primaryCta: "Manufacturing Consultation",
    secondaryCta: "Explore Capabilities",
    quality: "Integrated quality system with daily QA inspections, traceability, and a production command center.",
    campusLabel: "Metalworks Campus",
    campusTitle: "Geum Cheon Indo Hub - Cikupa",
    campusBadge: "24/7 Operation",
    modules: [
      {
        label: "Laser Cutting",
        description: "6kW fiber machines with auto table exchange for steel, stainless, and aluminium.",
      },
      {
        label: "Metal Press",
        description: "450-ton capacity with quick die change and digital QC integration.",
      },
    ],
    metrics: [
      { label: "Lead Time", value: "3-5 days" },
      { label: "Yield Rate", value: "98%" },
      { label: "Traceability", value: "Digital MES" },
    ],
  },
  ko: {
    badge: "금속 제조",
    title: "정밀 금속 제조와 통합 산업 단지 솔루션",
    description:
      "금천 인도는 파이버 레이저 절단, 금속 프레스, 정밀 워크숍 시설을 통해 금속 제조를 선도합니다. 산업 단지 개발과 사내 제작 서비스를 통합해 글로벌 파트너의 생산을 빠르게 지원합니다.",
    primaryCta: "제조 상담",
    secondaryCta: "역량 살펴보기",
    quality: "일일 QA 검사와 추적 시스템, 생산 지휘 센터를 포함한 통합 품질 체계.",
    campusLabel: "Metalworks Campus",
    campusTitle: "Geum Cheon Indo Hub - Cikupa",
    campusBadge: "24시간 가동",
    modules: [
      {
        label: "레이저 커팅",
        description: "6kW 파이버 장비와 자동 테이블로 강재, 스테인리스, 알루미늄을 가공합니다.",
      },
      {
        label: "금속 프레스",
        description: "퀵 다이 체인지와 디지털 QC가 결합된 450톤 프레스 라인.",
      },
    ],
    metrics: [
      { label: "리드타임", value: "3-5일" },
      { label: "수율", value: "98%" },
      { label: "추적성", value: "Digital MES" },
    ],
  },
}

const statsContent = {
  id: [
    { value: "25+", label: "Lini fabrikasi & workshop" },
    { value: "45+", label: "Mitra manufaktur aktif" },
    { value: "99%", label: "Uptime utilitas kawasan" },
  ],
  en: [
    { value: "25+", label: "Fabrication lines & workshops" },
    { value: "45+", label: "Active manufacturing partners" },
    { value: "99%", label: "Industrial utility uptime" },
  ],
  ko: [
    { value: "25+", label: "제작 라인 및 워크숍" },
    { value: "45+", label: "활성 제조 파트너" },
    { value: "99%", label: "산업 단지 가동률" },
  ],
}

export function Hero() {
  const { language } = useLanguage()

  const content = heroContent[language] ?? heroContent.id
  const stats = statsContent[language] ?? statsContent.id

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-y-10 right-[-18%] hidden h-[520px] w-[520px] rounded-full bg-light-theme-purple/60 blur-[160px] lg:block" />
      <div className="container relative grid gap-16 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-light-theme-purple px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
            <Sparkles size={14} /> {content.badge}
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-theme-blue sm:text-5xl lg:text-6xl">{content.title}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-grey">{content.description}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-theme-purple px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-dark-theme-purple"
            >
              {content.primaryCta} <ArrowUpRight size={18} />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-theme-purple/30 px-8 py-3 text-sm font-semibold text-theme-purple transition hover:bg-light-theme-purple"
            >
              <Play size={18} /> {content.secondaryCta}
            </Link>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <div className="flex items-center gap-3 text-sm text-muted-grey">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-light-theme-purple text-theme-purple">
                <ShieldCheck size={20} />
              </span>
              {content.quality}
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-[0.4em] text-muted-grey">{stat.label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-theme-blue">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="relative w-full max-w-xl justify-self-center lg:justify-self-end">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-light-theme-purple/60 via-white to-transparent blur-2xl" />
          <div className="relative rounded-[32px] border border-slate-200 bg-white p-10 shadow-card">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-grey">{content.campusLabel}</p>
                  <p className="mt-2 text-lg font-semibold text-theme-blue">{content.campusTitle}</p>
                </div>
                <span className="rounded-full bg-light-theme-purple px-4 py-1 text-xs font-medium text-theme-purple">
                  {content.campusBadge}
                </span>
              </div>
              <div className="space-y-4 text-sm text-muted-grey">
                {content.modules.map((module) => (
                  <div key={module.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.35em] text-muted-grey">{module.label}</p>
                    <p className="mt-2 text-theme-blue">{module.description}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-xs uppercase tracking-[0.35em] text-muted-grey">
                {content.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between">
                    <span>{metric.label}</span>
                    <span className="text-theme-purple">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
