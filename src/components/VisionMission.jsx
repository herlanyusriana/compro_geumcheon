import { useLanguage } from "../context/LanguageContext"

const visionMissionContent = {
  id: {
    badge: "Visi & Misi",
    title: "Komitmen kami terhadap keunggulan manufaktur logam dan pembangunan kawasan berkelas",
    blocks: [
      {
        badge: "Visi",
        description:
          "Menjadi pusat manufaktur logam kelas dunia yang menghubungkan keunggulan teknologi Korea dengan kapasitas produksi Indonesia.",
        pillars: ["Workshop berteknologi tinggi", "Kemitraan OEM global", "Kawasan industri berkelanjutan"],
      },
      {
        badge: "Misi",
        description:
          "Menyediakan layanan fabrikasi presisi, dukungan engineering, dan fasilitas kawasan yang mempercepat pertumbuhan mitra manufaktur.",
        pillars: ["Pendampingan produksi end-to-end", "Pengembangan talenta lokal", "Kepatuhan mutu & ESG"],
      },
    ],
  },
  en: {
    badge: "Vision & Mission",
    title: "Our commitment to metal manufacturing excellence and world-class estate development",
    blocks: [
      {
        badge: "Vision",
        description:
          "To become a world-class metal manufacturing hub that links Korean technology excellence with Indonesia's production capacity.",
        pillars: ["High-tech workshops", "Global OEM partnerships", "Sustainable industrial estate"],
      },
      {
        badge: "Mission",
        description:
          "To deliver precision fabrication, engineering support, and estate facilities that accelerate our partners' manufacturing growth.",
        pillars: ["End-to-end production guidance", "Local talent development", "Quality & ESG compliance"],
      },
    ],
  },
  ko: {
    badge: "비전 & 미션",
    title: "금속 제조와 세계적 수준의 산업 단지 개발에 대한 우리의 약속",
    blocks: [
      {
        badge: "비전",
        description:
          "한국의 기술력과 인도네시아의 생산 역량을 연결하는 세계적 금속 제조 허브가 되는 것.",
        pillars: ["첨단 기술 워크숍", "글로벌 OEM 파트너십", "지속 가능한 산업 단지"],
      },
      {
        badge: "미션",
        description:
          "정밀 가공, 엔지니어링 지원, 산업 단지 시설을 제공해 파트너의 성장을 가속화하는 것.",
        pillars: ["엔드투엔드 생산 지원", "현지 인재 육성", "품질 및 ESG 준수"],
      },
    ],
  },
}

export function VisionMission() {
  const { language } = useLanguage()
  const content = visionMissionContent[language] ?? visionMissionContent.id

  return (
    <section>
      <div className="container space-y-12">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-grey">{content.badge}</span>
          <h2 className="mt-4 text-3xl font-semibold text-theme-blue sm:text-4xl">{content.title}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {content.blocks.map((block) => (
            <div
              key={block.badge}
              className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-card"
            >
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-light-theme-purple/60 blur-xl" />
              <div className="relative space-y-4">
                <span className="inline-flex items-center rounded-full bg-light-theme-purple px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
                  {block.badge}
                </span>
                <p className="text-lg font-semibold text-theme-blue">{block.description}</p>
                <ul className="space-y-2 text-sm text-muted-grey">
                  {block.pillars.map((pillar) => (
                    <li key={pillar} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-theme-purple" />
                      {pillar}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
