import { useLanguage } from "../context/LanguageContext"

const sectionCopy = {
  id: {
    badge: "Mengapa Memilih Kami",
    title: "Pilar layanan yang menjamin keberhasilan ekspansi Anda",
    pillars: [
      {
        metric: "30+ ahli senior",
        title: "Dual-Nation Insight",
        detail:
          "Tim multidisiplin berpengalaman di Korea & Indonesia memastikan akselerasi project yang sensitif secara budaya.",
      },
      {
        metric: "< 90 hari rata-rata",
        title: "Fast-Track Licensing",
        detail:
          "Pendampingan perizinan dan legal compliance lengkap hingga fasilitas insentif fiskal pemerintah.",
      },
      {
        metric: "99.2% uptime utilitas",
        title: "Operational Reliability",
        detail:
          "Monitoring 24/7, smart command center, dan support tenant untuk menjaga kinerja produksi.",
      },
    ],
  },
  en: {
    badge: "Why Choose Us",
    title: "Service pillars that secure your expansion success",
    pillars: [
      {
        metric: "30+ senior experts",
        title: "Dual-Nation Insight",
        detail:
          "Multidisciplinary teams with Korea & Indonesia experience accelerate culturally-sensitive projects.",
      },
      {
        metric: "< 90 days average",
        title: "Fast-Track Licensing",
        detail:
          "Comprehensive licensing support and compliance, including access to government fiscal incentives.",
      },
      {
        metric: "99.2% utility uptime",
        title: "Operational Reliability",
        detail:
          "24/7 monitoring, a smart command center, and tenant support to maintain production performance.",
      },
    ],
  },
  ko: {
    badge: "왜 금천 인도인가",
    title: "성공적인 확장을 뒷받침하는 핵심 서비스",
    pillars: [
      {
        metric: "30+ 시니어 전문가",
        title: "Dual-Nation Insight",
        detail:
          "한국과 인도네시아 경험을 갖춘 다학제 팀이 문화적 감수성을 고려한 프로젝트를 가속화합니다.",
      },
      {
        metric: "평균 90일 미만",
        title: "Fast-Track Licensing",
        detail:
          "정부 인센티브까지 포함한 인허가 및 컴플라이언스를 원스톱으로 지원합니다.",
      },
      {
        metric: "99.2% 설비 가동률",
        title: "Operational Reliability",
        detail:
          "24시간 모니터링과 스마트 커맨드 센터, 입주사 지원으로 생산 성과를 유지합니다.",
      },
    ],
  },
}

export function ValuePillars() {
  const { language } = useLanguage()
  const copy = sectionCopy[language] ?? sectionCopy.id

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-theme-blue md:py-28 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/45 via-white to-white" aria-hidden />
      <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-theme-purple/15 blur-3xl" aria-hidden />
      <div className="absolute -right-14 bottom-[-8rem] h-[26rem] w-[26rem] rounded-full bg-light-theme-purple/60 blur-[120px]" aria-hidden />

      <div className="container relative z-10 space-y-12 md:space-y-16">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-theme-purple/20 bg-light-theme-purple/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
            {copy.badge}
          </span>
          <h2 className="text-3xl font-semibold text-theme-blue sm:text-4xl">{copy.title}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {copy.pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_-50px_rgba(37,99,235,0.35)] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -bottom-12 right-6 h-28 w-28 rounded-full bg-light-theme-purple blur-xl" />
              <div className="relative space-y-4">
                <p className="inline-flex rounded-full border border-theme-purple/20 bg-light-theme-purple/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-theme-purple">
                  {pillar.metric}
                </p>
                <h3 className="text-xl font-semibold text-theme-blue">{pillar.title}</h3>
                <p className="text-sm text-muted-grey">{pillar.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
