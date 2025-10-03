import { Link } from "react-router-dom"
import { Scissors, Hammer, Wrench } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"
import laserCuttingThumb from "../assets/img/Laser-Cutting-2-DSCN1100.jpg"
import metalPressThumb from "../assets/img/bending-machine-1.jpg"
import workshopThumb from "../assets/img/DSC05961.jpg"

const sectionCopy = {
  id: {
    badge: "Our Work",
    title: "Kapabilitas inti Geum Cheon Indo untuk manufaktur logam",
    description:
      "Tiga layanan utama kami memastikan kebutuhan fabrikasi logam terpenuhi secara cepat, presisi, dan terintegrasi dengan kawasan industri yang kami kelola.",
    cta: "Lihat detail",
  },
  en: {
    badge: "Our Work",
    title: "Geum Cheon Indo's core capabilities for metal manufacturing",
    description:
      "Our three flagship services deliver fast, precise, and fully integrated metal fabrication within the industrial ecosystem we manage.",
    cta: "View details",
  },
  ko: {
    badge: "주요 공정",
    title: "금천 인도의 핵심 금속 제조 역량",
    description:
      "세 가지 대표 서비스가 산업 단지 인프라와 연결되어 신속하고 정밀한 금속 가공을 제공합니다.",
    cta: "자세히 보기",
  },
}

const workCards = [
  {
    slug: "laser-cutting",
    icon: Scissors,
    image: laserCuttingThumb,
    alt: {
      id: "Mesin laser cutting Geum Cheon Indo",
      en: "Geum Cheon Indo laser cutting machine",
      ko: "금천 인도의 레이저 커팅 설비",
    },
    copy: {
      id: {
        title: "Laser Cutting Center",
        description:
          "Produksi panel, chassis, dan komponen presisi menggunakan mesin fiber 6kW dengan auto-loading untuk material baja, stainless, dan aluminium.",
        scope: "Toleransi 0.1 mm",
      },
      en: {
        title: "Laser Cutting Center",
        description:
          "Produce precision panels, chassis, and components with 6kW fiber lasers and auto-loading for steel, stainless, and aluminium.",
        scope: "0.1 mm tolerance",
      },
      ko: {
        title: "레이저 커팅 센터",
        description:
          "6kW 파이버 레이저와 자동 로딩 시스템으로 강철, 스테인리스, 알루미늄 패널과 섀시를 정밀 가공합니다.",
        scope: "0.1 mm 공차",
      },
    },
  },
  {
    slug: "metal-press",
    icon: Hammer,
    image: metalPressThumb,
    alt: {
      id: "Fasilitas metal press Geum Cheon Indo",
      en: "Geum Cheon Indo metal press facility",
      ko: "금천 인도의 금속 프레스 설비",
    },
    copy: {
      id: {
        title: "Metal Press Facility",
        description:
          "Lini metal press hingga 450 ton dengan quick die change dan monitoring digital untuk memenuhi kebutuhan mass production OEM otomotif.",
        scope: "450 ton kapasitas",
      },
      en: {
        title: "Metal Press Facility",
        description:
          "Press lines up to 450 tons with quick die change and digital monitoring to support high-volume automotive OEM production.",
        scope: "450 ton capacity",
      },
      ko: {
        title: "금속 프레스 설비",
        description:
          "최대 450톤 프레스 라인에 퀵 다이 체인지와 디지털 모니터링을 적용해 자동차 OEM 대량 생산을 지원합니다.",
        scope: "450톤 용량",
      },
    },
  },
  {
    slug: "precision-workshop",
    icon: Wrench,
    image: workshopThumb,
    alt: {
      id: "Workshop presisi Geum Cheon Indo",
      en: "Geum Cheon Indo precision workshop floor",
      ko: "금천 인도의 정밀 워크숍",
    },
    copy: {
      id: {
        title: "Precision Workshop",
        description:
          "Bengkel pemesinan dan perakitan menangani jig, fixture, welding, dan finishing untuk memastikan downtime tenant tetap minimum.",
        scope: "Engineering 24/7",
      },
      en: {
        title: "Precision Workshop",
        description:
          "Machining and assembly workshop handling jigs, fixtures, welding, and finishing to keep tenant downtime minimal.",
        scope: "24/7 engineering",
      },
      ko: {
        title: "정밀 워크숍",
        description:
          "지그와 픽스처, 용접, 피니싱을 담당해 입주사의 다운타임을 최소화하는 가공·조립 워크숍입니다.",
        scope: "24/7 엔지니어링",
      },
    },
  },
]

export function OurWorkSection() {
  const { language } = useLanguage()
  const copy = sectionCopy[language] ?? sectionCopy.id

  return (
    <section className="bg-white py-24">
      <div className="container space-y-16">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-grey">{copy.badge}</span>
          <h2 className="text-3xl font-semibold text-theme-blue sm:text-4xl">{copy.title}</h2>
          <p className="text-base text-muted-grey">{copy.description}</p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {workCards.map((work) => {
            const workCopy = work.copy[language] ?? work.copy.id
            const altText = work.alt?.[language] ?? work.alt?.id

            return (
              <Link
                key={work.slug}
                to={`/work/${work.slug}`}
                className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-[36px] border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-background">
                  <img
                    src={work.image}
                    alt={altText}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-theme-purple shadow-card">
                    <work.icon size={24} />
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-theme-blue">{workCopy.title}</h3>
                    <span className="rounded-full bg-light-theme-purple px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-theme-purple">
                      {workCopy.scope}
                    </span>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-grey">{workCopy.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-theme-purple">
                    {copy.cta} <span aria-hidden>&gt;</span>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
