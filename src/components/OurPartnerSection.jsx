import { useLanguage } from "../context/LanguageContext"
import gciLogo from "../assets/img/geumcheonengineering.webp"
import sbmiLogo from "../assets/img/sbmi.png"

const sectionCopy = {
  id: {
    badge: "Strategic Alliance",
    title: "Mitra utama yang memperkuat ekosistem manufaktur Geum Cheon Indo",
    description:
      "Bersama PT Geum Cheon Engineering dan PT Sukses Baja Megah Indo, kami menghadirkan solusi end-to-end mulai dari engineering desain hingga eksekusi fabrikasi baja dan sheet metal berskala industri.",
    cta: "Lihat Detail",
    status: "Kolaborasi aktif",
  },
  en: {
    badge: "Strategic Alliance",
    title: "Core partners that strengthen Geum Cheon Indo's manufacturing ecosystem",
    description:
      "With PT Geum Cheon Engineering and PT Sukses Baja Megah Indo we deliver end-to-end solutions from engineering design to large-scale steel and sheet metal fabrication.",
    cta: "View Details",
    status: "Active collaboration",
  },
  ko: {
    badge: "전략적 동맹",
    title: "금천 인도의 제조 생태계를 강화하는 핵심 파트너",
    description:
      "PT Geum Cheon Engineering과 PT Sukses Baja Megah Indo와 함께 엔지니어링 설계부터 대규모 강재·시트메탈 제작까지 엔드투엔드 솔루션을 제공합니다.",
    cta: "자세히 보기",
    status: "협업 진행 중",
  },
}

const partnerCards = [
  {
    key: "gce",
    logo: gciLogo,
    link: "https://geumcheoneng.com",
    accent: "from-sky-100 via-white to-sky-50",
    copy: {
      id: {
        name: "PT Geum Cheon Engineering",
        tagline: "Engineered Manufacturing Excellence",
        description:
          "Divisi engineering kami menangani desain tooling, pengembangan proses produksi, dan integrasi fasilitas manufaktur lintas industri.",
        points: [
          "Perencanaan kawasan & utilitas manufaktur",
          "Desain jig, fixture, dan otomasi lini produksi",
          "Manajemen proyek konstruksi pabrik turnkey",
        ],
      },
      en: {
        name: "PT Geum Cheon Engineering",
        tagline: "Engineered Manufacturing Excellence",
        description:
          "Our engineering division oversees tooling design, production process development, and manufacturing facility integration across industries.",
        points: [
          "Industrial estate and utility planning",
          "Design of jigs, fixtures, and production automation",
          "Turnkey factory construction project management",
        ],
      },
      ko: {
        name: "PT Geum Cheon Engineering",
        tagline: "Engineered Manufacturing Excellence",
        description:
          "엔지니어링 부서는 다양한 산업의 금형 설계, 공정 개발, 제조 설비 통합을 담당합니다.",
        points: [
          "산업 단지 및 유틸리티 계획",
          "지그·픽스처 및 생산 자동화 설계",
          "턴키 공장 건설 프로젝트 관리",
        ],
      },
    },
  },
  {
    key: "sbmi",
    logo: sbmiLogo,
    link: "#",
    accent: "from-slate-100 via-white to-sky-50",
    copy: {
      id: {
        name: "PT Sukses Baja Megah Indo",
        tagline: "Steel Fabrication & Sheet Metal Expert",
        description:
          "Steel fabrication partner untuk cutting laser, bending, stamping, shearing, welding, hingga assembly komponen struktural.",
        points: [
          "Cutting laser high-speed & bending presisi",
          "Stamping, shearing, dan layanan finishing lengkap",
          "Tim welding & assembly berpengalaman",
        ],
      },
      en: {
        name: "PT Sukses Baja Megah Indo",
        tagline: "Steel Fabrication & Sheet Metal Expert",
        description:
          "Steel fabrication partner for laser cutting, bending, stamping, shearing, welding, and structural component assembly.",
        points: [
          "High-speed laser cutting and precision bending",
          "Complete stamping, shearing, and finishing services",
          "Experienced welding and assembly teams",
        ],
      },
      ko: {
        name: "PT Sukses Baja Megah Indo",
        tagline: "Steel Fabrication & Sheet Metal Expert",
        description:
          "레이저 절단, 벤딩, 스탬핑, 쉬어링, 용접, 구조물 조립을 담당하는 강재 가공 파트너입니다.",
        points: [
          "고속 레이저 커팅과 정밀 벤딩",
          "스탬핑·쉬어링·피니싱 토털 서비스",
          "경험 많은 용접 및 조립 팀",
        ],
      },
    },
  },
]

export function OurPartnerSection() {
  const { language } = useLanguage()
  const copy = sectionCopy[language] ?? sectionCopy.id

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-light-theme-purple/30 to-transparent" />
      <div className="container relative space-y-12">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-grey">{copy.badge}</span>
          <h2 className="text-3xl font-semibold text-theme-blue sm:text-4xl">{copy.title}</h2>
          <p className="text-base text-muted-grey">{copy.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {partnerCards.map((partner) => {
            const partnerCopy = partner.copy[language] ?? partner.copy.id
            return (
              <article
                key={partner.key}
                className={`relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-10 shadow-card transition hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div className={`absolute inset-0 rounded-[36px] bg-gradient-to-br ${partner.accent}`} />
                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <img src={partner.logo} alt={partnerCopy.name} className="h-full w-full object-contain" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-theme-blue">{partnerCopy.name}</h3>
                      <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-grey">{partnerCopy.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-grey">{partnerCopy.description}</p>

                  <ul className="space-y-2 text-sm text-theme-blue">
                    {partnerCopy.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-theme-purple" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-muted-grey">{copy.status}</span>
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-theme-purple/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-theme-purple transition hover:bg-theme-purple/10"
                    >
                      {copy.cta}
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
