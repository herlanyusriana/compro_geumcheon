import factoryGate from "../assets/web/gerbang-gci-view-from-drone.png"
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
    badge: "Vision & Mission",
    title: "?? ??? ??? ??? ?? ?? ??? ??",
    blocks: [
      {
        badge: "Vision",
        description:
          "??? ???? ?????? ?? ??? ???? ??? ?? ?? ??? ?? ?.",
        pillars: ["?? ?? ???", "??? OEM ????", "?? ??? ?? ??"],
      },
      {
        badge: "Mission",
        description:
          "?? ??, ????? ??, ?? ?? ??? ??? ???? ??? ????? ?.",
        pillars: ["????? ?? ??", "?? ?? ??", "?? ? ESG ??"],
      },
    ],
  },
}

export function VisionMission() {
  const { language } = useLanguage()
  const content = visionMissionContent[language] ?? visionMissionContent.id

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-theme-blue md:py-28 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/45 via-white to-white" aria-hidden />
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-theme-purple/15 blur-3xl" aria-hidden />
      <div className="absolute -right-16 bottom-[-8rem] h-[26rem] w-[26rem] rounded-full bg-light-theme-purple/60 blur-[120px]" aria-hidden />

      <div className="container relative z-10 space-y-12 md:space-y-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_40px_120px_-80px_rgba(15,23,42,0.18)]">
            <img src={factoryGate} alt="PT. Geum Cheon Indo main gate" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-theme-purple/20 bg-light-theme-purple/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
              {content.badge}
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-theme-blue sm:text-4xl">{content.title}</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {content.blocks.map((block, index) => (
            <div
              key={block.badge}
              className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.18)] animate-fade-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-light-theme-purple blur-xl" />
              <div className="relative space-y-4">
                <span className="inline-flex items-center rounded-full border border-theme-purple/20 bg-light-theme-purple/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
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
