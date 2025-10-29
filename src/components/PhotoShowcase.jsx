import { useLanguage } from "../context/LanguageContext"
import sinarmasTower from "../assets/web/Project/sinarmas-project1.jpg"
import sinarmasTeam from "../assets/web/Project/sinarmas-project2.jpg"
import kccRack from "../assets/web/Project/kcc-project1.jpg"
import kccLine from "../assets/web/Project/kcc-project2.jpg"
import situbondoPier from "../assets/web/Project/situbondo1.jpg"
import situbondoGantry from "../assets/web/Project/situbondo2.jpg"
import holcimWeighbridge from "../assets/web/Project/holcim1.jpg"
import sarihusadaLift from "../assets/web/Project/sarihusada-project1.jpg"
import wkcTol from "../assets/web/Project/wkc1.jpg"
import kaiWorkshop from "../assets/web/Project/kai-project1.jpg"
import aldeposStructure from "../assets/web/Project/aldepos-project1.jpg"

const galleryItems = [
  { key: "sinarmasTower", src: sinarmasTower, span: "sm:col-span-2 sm:row-span-2" },
  { key: "sinarmasTeam", src: sinarmasTeam, span: "sm:col-span-1 sm:row-span-1" },
  { key: "wkcTol", src: wkcTol, span: "sm:col-span-1 sm:row-span-1" },
  { key: "kccLine", src: kccLine, span: "sm:col-span-2 sm:row-span-1" },
  { key: "situbondoPier", src: situbondoPier, span: "sm:col-span-1 sm:row-span-2" },
  { key: "situbondoGantry", src: situbondoGantry, span: "sm:col-span-1 sm:row-span-1" },
  { key: "holcimWeighbridge", src: holcimWeighbridge, span: "sm:col-span-1 sm:row-span-1" },
  { key: "sarihusadaLift", src: sarihusadaLift, span: "sm:col-span-2 sm:row-span-1" },
  { key: "kccRack", src: kccRack, span: "sm:col-span-1 sm:row-span-1" },
  { key: "aldeposStructure", src: aldeposStructure, span: "sm:col-span-2 sm:row-span-2" },
]

const altText = {
  sinarmasTower: "Palembang fire watch steel tower",
  sinarmasTeam: "Installation crew assembling tower segments",
  kccRack: "Single glass rack fabrication line",
  kccLine: "Double glass rack assembly area",
  situbondoPier: "Movable bridge pier structure in Situbondo",
  situbondoGantry: "Hydraulic gantry for movable bridge system",
  holcimWeighbridge: "Holcim weighbridge steel platform",
  sarihusadaLift: "Cargo lift structure for Sarihusada facility",
  wkcTol: "Jakarta-Cikampek toll steelwork in progress",
  aldeposStructure: "Aldepos boarding school steel frame",
}

const copy = {
  id: {
    badge: "Galeri Proyek & Workshop",
    title: "Kisah visual dari proyek lapangan dan workshop Geum Cheon Indo",
    intro: "Grid foto tanpa caption dengan pola kotak besar dan kecil ini menangkap dinamika produksi kami.",
  },
  en: {
    badge: "Project & Workshop Gallery",
    title: "A visual mosaic from field deliveries and workshop operations",
    intro: "A caption-free grid of large and small tiles that captures Geum Cheon Indo's production momentum.",
  },
}

export function PhotoShowcase() {
  const { language } = useLanguage()
  const content = copy[language] ?? copy.id

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-theme-blue md:py-28 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/40 via-white to-white" aria-hidden />
      <div className="absolute -right-24 top-12 h-64 w-64 rounded-full bg-light-theme-purple/60 blur-3xl" aria-hidden />
      <div className="absolute -left-16 bottom-[-8rem] h-[26rem] w-[26rem] rounded-full bg-theme-purple/15 blur-[120px]" aria-hidden />

      <div className="container relative z-10 space-y-12 md:space-y-16">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-theme-purple/20 bg-light-theme-purple/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
            {content.badge}
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-theme-blue sm:text-4xl">{content.title}</h2>
          {content.intro ? <p className="text-sm leading-relaxed text-muted-grey">{content.intro}</p> : null}
        </div>

        <div className="rounded-[40px] border border-slate-200 bg-white/90 p-8 shadow-[0_60px_140px_-90px_rgba(15,23,42,0.28)] backdrop-blur">
          <div className="grid auto-rows-[160px] gap-5 sm:grid-cols-3 lg:auto-rows-[220px] lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <figure
                key={item.key}
                className={`group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_30px_90px_-70px_rgba(15,23,42,0.25)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_100px_-60px_rgba(29,78,216,0.35)] animate-fade-up ${item.span ?? ""}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={item.src}
                  alt={altText[item.key] ?? "Gallery image"}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhotoShowcase



