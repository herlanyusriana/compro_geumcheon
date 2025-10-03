import { useLanguage } from "../context/LanguageContext"

const aboutContent = {
  id: {
    badge: "Tentang Geum Cheon Indo",
    title: "Pusat manufaktur logam presisi dengan dukungan kawasan industri terintegrasi",
    paragraphs: [
      "Geum Cheon Indo adalah perusahaan manufaktur logam yang menyediakan layanan laser cutting, metal press, machining, dan assembly. Fasilitas kami berlokasi strategis di Cikupa dengan koneksi langsung ke pelabuhan dan jaringan logistik nasional.",
      "Selain workshop, kami mengelola kawasan industri yang mendukung tenant otomotif, energi baru, dan logistik. Kombinasi infrastruktur, tenaga ahli, dan sistem digital memastikan produksi stabil serta memenuhi standar global.",
    ],
    differentiators: [
      {
        metric: "15+ proyek aktif",
        title: "Integrasi End-to-End",
        description:
          "Desain kawasan, utilitas, dan layanan workshop kami terhubung dalam satu platform sehingga tenant memperoleh lead time lebih singkat.",
      },
      {
        metric: "40+ mitra strategis",
        title: "Jejaring Korea-Indonesia",
        description:
          "Kolaborasi dengan OEM Korea dan ekosistem lokal memastikan transfer teknologi manufaktur logam berjalan mulus.",
      },
      {
        metric: "Audit rutin & QA digital",
        title: "Standar Kualitas",
        description:
          "Proses produksi kami diawasi secara ketat melalui inspeksi dimensi, sertifikat material, dan pelaporan ESG terpadu.",
      },
    ],
    highlight:
      "Kami memprioritaskan ketepatan waktu pengiriman, traceability material, dan keselamatan kerja untuk memberi nilai tambah bagi mitra global yang mempercayakan produksi logamnya kepada Geum Cheon Indo.",
  },
  en: {
    badge: "About Geum Cheon Indo",
    title: "A precision metal manufacturing hub backed by an integrated industrial estate",
    paragraphs: [
      "Geum Cheon Indo provides laser cutting, metal press, machining, and assembly services. Our facilities sit strategically in Cikupa with direct access to ports and the national logistics network.",
      "Beyond workshops, we manage an industrial estate that supports automotive, new energy, and logistics tenants. Infrastructure, expert teams, and digital systems keep production stable to global standards.",
    ],
    differentiators: [
      {
        metric: "15+ active projects",
        title: "End-to-End Integration",
        description:
          "Estate design, utilities, and workshop services are united on one platform so tenants enjoy shorter lead times.",
      },
      {
        metric: "40+ strategic partners",
        title: "Korea-Indonesia Network",
        description:
          "Collaboration with Korean OEMs and the local ecosystem ensures seamless transfer of metal manufacturing technology.",
      },
      {
        metric: "Routine audits & digital QA",
        title: "Quality Standards",
        description:
          "Production is tightly supervised through dimensional inspections, material certificates, and integrated ESG reporting.",
      },
    ],
    highlight:
      "We prioritize on-time delivery, material traceability, and workplace safety to deliver lasting value for global partners who trust Geum Cheon Indo.",
  },
  ko: {
    badge: "금천 인도 소개",
    title: "통합 산업 단지와 함께하는 정밀 금속 제조 허브",
    paragraphs: [
      "금천 인도는 레이저 커팅, 금속 프레스, 가공 및 조립 서비스를 제공하며, 치쿠파에 위치한 공장은 항만과 국가 물류망에 바로 연결되어 있습니다.",
      "워크숍뿐 아니라 자동차, 신에너지, 물류 기업을 위한 산업 단지를 운영합니다. 인프라, 전문가 팀, 디지털 시스템이 결합되어 글로벌 기준의 안정적인 생산을 보장합니다.",
    ],
    differentiators: [
      {
        metric: "15+ 진행 프로젝트",
        title: "엔드투엔드 통합",
        description:
          "산업 단지 설계, 유틸리티, 워크숍 서비스를 하나의 플랫폼으로 연결해 입주사의 리드타임을 단축합니다.",
      },
      {
        metric: "40+ 전략 파트너",
        title: "한-인 네트워크",
        description:
          "한국 OEM과 현지 생태계의 협업을 통해 금속 제조 기술을 원활하게 이전합니다.",
      },
      {
        metric: "정기 감사 & 디지털 QA",
        title: "품질 기준",
        description:
          "치수 검사, 자재 인증, ESG 보고를 통해 생산 공정을 철저히 관리합니다.",
      },
    ],
    highlight:
      "납기 준수, 자재 추적성, 안전한 작업 환경을 최우선으로 하여 금속 생산을 맡긴 글로벌 파트너에게 가치를 제공합니다.",
  },
}

export function AboutSection() {
  const { language } = useLanguage()
  const content = aboutContent[language] ?? aboutContent.id

  return (
    <section className="bg-white">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-grey">{content.badge}</span>
          <h2 className="text-3xl font-semibold leading-tight text-theme-blue sm:text-4xl">{content.title}</h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className="text-base leading-relaxed text-muted-grey">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-5 rounded-[32px] border border-slate-200 bg-background p-6 shadow-card">
          {content.differentiators.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-theme-purple">{item.metric}</p>
              <p className="mt-3 text-lg font-semibold text-theme-blue">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-grey">{item.description}</p>
            </div>
          ))}
          <div className="rounded-2xl bg-light-theme-purple/60 p-6 text-sm leading-relaxed text-theme-blue">{content.highlight}</div>
        </div>
      </div>
    </section>
  )
}
