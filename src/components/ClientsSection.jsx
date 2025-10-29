import { useLanguage } from "../context/LanguageContext"
import lgLogo from "../assets/logo/lg.jpg"
import korindoLogo from "../assets/logo/korindo.jpg"
import rodaLogo from "../assets/logo/roda-karya.jpg"
import sanggarLogo from "../assets/logo/sanggar-sarana-baja.jpg"
import spectrumLogo from "../assets/logo/spectrum-unicipta.jpg"
import albaLogo from "../assets/logo/alba-unggul-metal.jpg"
import betonLogo from "../assets/logo/beton-perkasa-wijaksana.jpg"
import hartonoLogo from "../assets/logo/hartono-istana-teknologi.jpg"
import supraLogo from "../assets/logo/supra-bakti-mandiri.jpg"
import daesungLogo from "../assets/logo/daesung-electric.jpg"
import hasuraLogo from "../assets/logo/hasura-mitra-gemilang.jpg"
import himalayaLogo from "../assets/logo/himalaya-group.jpg"
import cilegonLogo from "../assets/logo/cilegon-fabricators.jpg"
import ciptaLogo from "../assets/logo/cipta-media-filter.jpg"
import yasunliLogo from "../assets/logo/yasunli.jpg"

const clients = [
  { name: "PT. LG Electronics Indonesia", logo: lgLogo },
  { name: "PT. Korindo Heavy Industry", logo: korindoLogo },
  { name: "PT. Roda Nada Karya", logo: rodaLogo },
  { name: "PT. Sanggar Sarana Baja", logo: sanggarLogo },
  { name: "PT. Spectrum Unicipta", logo: spectrumLogo },
  { name: "PT. Alba Unggul Metal", logo: albaLogo },
  { name: "PT. Beton Perkasa Wijaksana", logo: betonLogo },
  { name: "PT. Hartono Istana Teknologi", logo: hartonoLogo },
  { name: "PT. Supra Bakti Mandiri", logo: supraLogo },
  { name: "PT. Daesung Electric Components", logo: daesungLogo },
  { name: "PT. Hasura Mitra Gemilang", logo: hasuraLogo },
  { name: "PT. Himalaya Transmeka", logo: himalayaLogo },
  { name: "PT. Cilegon Fabricators", logo: cilegonLogo },
  { name: "PT. Cipta Media Filter", logo: ciptaLogo },
  { name: "PT. Yasunli Abadi Utama Plastic", logo: yasunliLogo },
]

const sectionCopy = {
  id: {
    badge: "Our Clients",
    title: "Dipercaya brand manufaktur global & nasional",
    description:
      "Kepercayaan klien menjadi bukti konsistensi kualitas dan keandalan layanan Geum Cheon Indo dalam produksi komponen logam presisi.",
  },
  en: {
    badge: "Our Clients",
    title: "Trusted by global and national manufacturing brands",
    description:
      "Client partnerships prove the consistent quality and reliability of Geum Cheon Indo's precision metal production services.",
  },
  ko: {
    badge: "주요 고객",
    title: "국내외 제조 브랜드가 신뢰하는 파트너",
    description:
      "고객의 신뢰는 금천 인도가 제공하는 정밀 금속 생산 서비스의 품질과 안정성을 보여 줍니다.",
  },
}

export function ClientsSection() {
  const { language } = useLanguage()
  const copy = sectionCopy[language] ?? sectionCopy.id

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-theme-blue md:py-28 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/45 via-white to-white" aria-hidden />
      <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-theme-purple/15 blur-3xl" aria-hidden />
      <div className="absolute -left-16 bottom-[-8rem] h-[26rem] w-[26rem] rounded-full bg-light-theme-purple/60 blur-[120px]" aria-hidden />

      <div className="container relative z-10 space-y-12 md:space-y-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-theme-purple/20 bg-light-theme-purple/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
            {copy.badge}
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-theme-blue sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-base text-muted-grey">{copy.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_-50px_rgba(37,99,235,0.35)] animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex h-20 w-full items-center justify-center">
                <img src={client.logo} alt={client.name} className="max-h-16 max-w-full object-contain" loading="lazy" />
              </div>
              <p className="text-center text-sm font-semibold text-theme-blue">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
