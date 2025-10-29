import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import laserCuttingRender from "../assets/web/Mesin/Picture4.png"
import metalPressRender from "../assets/web/Mesin/Picture8.png"
import assemblyRender from "../assets/web/Mesin/Picture6.png"
import laserCuttingPhoto from "../assets/img/laser-cutting-2.jpg"
import metalPressPhoto from "../assets/img/bending-machine-1.jpg"
import assemblyPhoto from "../assets/img/bending-machine-4.jpg"
import { useLanguage } from "../context/LanguageContext"

const mediaLibrary = {
  laser: {
    facility: {
      src: laserCuttingPhoto,
      alt: {
        id: "Lini laser cutting Geum Cheon Indo",
        en: "Geum Cheon Indo laser cutting line",
        ko: "Geum Cheon Indo laser cutting line",
      },
    },
    machine: {
      src: laserCuttingRender,
      alt: {
        id: "Mesin laser cutting fiber 6 kW Geum Cheon Indo",
        en: "Geum Cheon Indo 6 kW fiber laser cutting machine",
        ko: "6 kW fiber laser cutting machine",
      },
    },
  },
  press: {
    facility: {
      src: metalPressPhoto,
      alt: {
        id: "Area metal press Geum Cheon Indo",
        en: "Metal press area at Geum Cheon Indo",
        ko: "Metal press area at Geum Cheon Indo",
      },
    },
    machine: {
      src: metalPressRender,
      alt: {
        id: "Render lini metal press Geum Cheon Indo",
        en: "Geum Cheon Indo metal press render",
        ko: "Metal press render",
      },
    },
  },
  assembly: {
    facility: {
      src: assemblyPhoto,
      alt: {
        id: "Area assembly dan finishing Geum Cheon Indo",
        en: "Geum Cheon Indo assembly and finishing area",
        ko: "Geum Cheon Indo assembly and finishing area",
      },
    },
    machine: {
      src: assemblyRender,
      alt: {
        id: "Render lini laser cutting format besar",
        en: "Large-format laser line render",
        ko: "Large-format laser line render",
      },
    },
  },
}

const sectionCopy = {
  id: {
    badge: "Layanan Unggulan",
    title: "Produksi logam presisi yang menyatu dengan eksekusi digital",
    description:
      "Setiap lini kami dikalibrasi untuk kecepatan dan akurasi—mulai dari laser cutting 6 kW, press line volume tinggi, hingga workshop presisi dan finishing terpadu.",
    cta: "Selengkapnya",
    services: [
      {
        key: "laser",
        mediaKey: "laser",
        title: "Laser Cutting 6 kW",
        summary: "Pallet changer otomatis dan integrasi MES menjaga alur produksi tetap presisi.",
        points: ["Stainless, mild steel, aluminium", "Scheduling digital & prioritas proyek", "Inspeksi tepi potong realtime"],
        href: "/work/laser-cutting",
      },
      {
        key: "press",
        mediaKey: "press",
        title: "Metal Press & Forming",
        summary: "Press line 200-450 ton dengan quick die change mendukung produksi massal.",
        points: ["Monitoring stroke & SPC digital", "Desain tooling & setup cepat", "Inline inspection menjaga toleransi"],
        href: "/work/metal-press",
      },
      {
        key: "assembly",
        mediaKey: "assembly",
        title: "Precision Workshop",
        summary: "Perakitan, welding bersertifikasi, dan finishing siap kirim dalam satu kampus.",
        points: ["Tim welding bersertifikasi WPS/PQR", "Area assembly modular & fleksibel", "QA digital harian & laporan batch"],
        href: "/work/precision-workshop",
      },
    ],
  },
  en: {
    badge: "Core Services",
    title: "Precision metal output aligned with digital execution",
    description:
      "Every line is calibrated for velocity and accuracy—from 6 kW laser cutting and high-volume presses to integrated precision workshops and finishing.",
    cta: "See details",
    services: [
      {
        key: "laser",
        mediaKey: "laser",
        title: "6 kW Laser Cutting",
        summary: "Automated pallet change and MES integration keep production precise and transparent.",
        points: ["Stainless, mild steel, aluminium", "Digital scheduling with priority queues", "Realtime edge quality inspection"],
        href: "/work/laser-cutting",
      },
      {
        key: "press",
        mediaKey: "press",
        title: "Metal Press & Forming",
        summary: "200-450 ton press lines with quick die change accelerate mass production.",
        points: ["Digital stroke monitoring & SPC", "Tooling design and quick setup", "Inline inspection protects tolerances"],
        href: "/work/metal-press",
      },
      {
        key: "assembly",
        mediaKey: "assembly",
        title: "Precision Workshop",
        summary: "Certified welding, assembly, and finishing ready for distribution under one roof.",
        points: ["WPS/PQR certified welding team", "Modular and flexible assembly bays", "Daily QA with digital reporting"],
        href: "/work/precision-workshop",
      },
    ],
  },
  ko: {
    badge: "Core Services",
    title: "Precision metal output aligned with digital execution",
    description:
      "Every line is calibrated for velocity and accuracy—from 6 kW laser cutting and high-volume presses to integrated precision workshops and finishing.",
    cta: "See details",
    services: [
      {
        key: "laser",
        mediaKey: "laser",
        title: "6 kW Laser Cutting",
        summary: "Automated pallet change and MES integration keep production precise and transparent.",
        points: ["Stainless, mild steel, aluminium", "Digital scheduling with priority queues", "Realtime edge quality inspection"],
        href: "/work/laser-cutting",
      },
      {
        key: "press",
        mediaKey: "press",
        title: "Metal Press & Forming",
        summary: "200-450 ton press lines with quick die change accelerate mass production.",
        points: ["Digital stroke monitoring & SPC", "Tooling design and quick setup", "Inline inspection protects tolerances"],
        href: "/work/metal-press",
      },
      {
        key: "assembly",
        mediaKey: "assembly",
        title: "Precision Workshop",
        summary: "Certified welding, assembly, and finishing ready for distribution under one roof.",
        points: ["WPS/PQR certified welding team", "Modular and flexible assembly bays", "Daily QA with digital reporting"],
        href: "/work/precision-workshop",
      },
    ],
  },
}

export function PrimaryServicesSection() {
  const { language } = useLanguage()
  const content = sectionCopy[language] ?? sectionCopy.id

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-white py-24 text-theme-blue md:py-28 animate-fade-in"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/40 via-white to-white" aria-hidden />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-theme-purple/15 blur-3xl" aria-hidden />
      <div className="absolute -left-16 bottom-[-6rem] h-[26rem] w-[26rem] rounded-full bg-light-theme-purple/50 blur-[120px]" aria-hidden />

      <div className="container relative z-10 space-y-12 md:space-y-16">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-theme-purple/20 bg-light-theme-purple/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
            {content.badge}
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-theme-blue sm:text-4xl">{content.title}</h2>
          <p className="text-base leading-relaxed text-muted-grey">{content.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {content.services.map((service, index) => {
            const media = mediaLibrary[service.mediaKey]
            return (
              <article
                key={service.key}
                className="group relative flex h-full flex-col overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_45px_90px_-60px_rgba(15,23,42,0.18)] transition-transform duration-300 animate-fade-up hover:-translate-y-1 hover:shadow-[0_35px_70px_-50px_rgba(37,99,235,0.35)]"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {media?.facility?.src ? (
                  <img
                    src={media.facility.src}
                    alt={media.facility.alt[language] ?? media.facility.alt.id}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-15 transition duration-700 group-hover:opacity-25"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/40 to-white/10" aria-hidden />
                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-muted-grey/70">
                    <span>{`0${index + 1}`}</span>
                    <span>{service.title}</span>
                  </div>
                  {media?.machine?.src ? (
                    <div className="relative flex items-center justify-center rounded-3xl border border-theme-purple/20 bg-white/80 p-4 shadow-inner">
                      <img
                        src={media.machine.src}
                        alt={media.machine.alt[language] ?? media.machine.alt.id}
                        loading="lazy"
                        className="h-28 w-auto max-w-[220px] object-contain opacity-100"
                      />
                    </div>
                  ) : null}
                  <p className="text-sm font-medium text-theme-blue">{service.summary}</p>
                  <ul className="space-y-3 text-sm text-muted-grey">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-theme-purple/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 rounded-full border border-theme-purple/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-theme-blue transition hover:border-theme-purple hover:bg-light-theme-purple hover:text-theme-purple"
                    >
                      {content.cta}
                      <ArrowUpRight size={16} />
                    </Link>
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
