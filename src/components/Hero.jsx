import { ArrowUpRight, Factory, Scissors, Sparkles, Wrench } from "lucide-react"
import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { createWhatsAppLink } from "../utils/whatsapp"

const highlightIcons = {
  laser: Scissors,
  fabrication: Factory,
  finishing: Wrench,
  spark: Sparkles,
}

const heroContent = {
  id: {
    badge: "PT. Geum Cheon Indo",
    headline: {
      leading: "Menyederhanakan",
      highlight: "manufaktur logam presisi",
      trailing: "untuk ekspansi industri Anda",
    },
    description:
      "Kampus produksi Geum Cheon Indo menggabungkan laser cutting, fabrikasi baja, dan QC digital agar setiap batch dikirim tepat waktu dengan toleransi presisi.",
    primaryCta: "Mulai Proyek",
    primaryHref: "/project",
    primaryType: "route",
    secondaryCta: "Telusuri Layanan",
    secondaryHref: "#services",
    secondaryType: "anchor",
    trustedHeading: "Dipercaya oleh manufaktur di",
    trusted: ["Semikonduktor", "Elektronik", "Otomotif", "Infrastruktur"],
    highlights: [
      {
        key: "laser",
        title: "Laser cutting fiber 6 kW",
        description: "Auto loading dengan toleransi +/-0,1 mm untuk stainless, mild steel, dan aluminium.",
      },
      {
        key: "fabrication",
        title: "Fabrikasi & welding presisi",
        description: "Tim MIG/TIG bersertifikasi WPS/PQR lengkap dengan jig presisi dan inspeksi visual.",
      },
      {
        key: "finishing",
        title: "Finishing terpadu siap kirim",
        description: "Bending, coating, dan assembly terintegrasi dengan laporan kualitas digital.",
      },
      {
        key: "spark",
        title: "Monitoring produksi realtime",
        description: "Dashboard OEE dan traceability digital memastikan transparansi penuh.",
      },
    ],
    metrics: [
      { label: "Lead Time", value: "3-5 hari" },
      { label: "Yield Rate", value: "98%" },
      { label: "Traceability", value: "Digital MES" },
    ],
  },
  en: {
    badge: "PT. Geum Cheon Indo",
    headline: {
      leading: "Simplifying",
      highlight: "precision metal fabrication",
      trailing: "for your next build",
    },
    description:
      "Geum Cheon Indo merges laser cutting, steel fabrication, and digital QC so every batch ships on schedule with tight tolerances.",
    primaryCta: "Start Your Project",
    primaryHref: "/project",
    primaryType: "route",
    secondaryCta: "Explore Services",
    secondaryHref: "#services",
    secondaryType: "anchor",
    trustedHeading: "Trusted by manufacturers in",
    trusted: ["Semiconductor", "Electronics", "Automotive", "Infrastructure"],
    highlights: [
      {
        key: "laser",
        title: "6 kW fiber laser cutting",
        description: "Automated loading with +/-0.1 mm tolerance for stainless, mild steel, and aluminium.",
      },
      {
        key: "fabrication",
        title: "Precision fabrication & welding",
        description: "Certified MIG/TIG teams with validated WPS/PQR, precision jigs, and structured inspection.",
      },
      {
        key: "finishing",
        title: "Integrated finishing ready to ship",
        description: "Bending, coating, and assembly with digital quality reports.",
      },
      {
        key: "spark",
        title: "Realtime production monitoring",
        description: "OEE dashboards and end-to-end traceability keep every run transparent.",
      },
    ],
    metrics: [
      { label: "Lead Time", value: "3-5 days" },
      { label: "Yield Rate", value: "98%" },
      { label: "Traceability", value: "Digital MES" },
    ],
  },
  ko: {
    badge: "PT. Geum Cheon Indo",
    headline: {
      leading: "Simplifying",
      highlight: "precision metal fabrication",
      trailing: "for your next build",
    },
    description:
      "Geum Cheon Indo integrates laser cutting, fabrication, and digital QC so every component meets schedule and tolerance expectations.",
    primaryCta: "Start Your Project",
    primaryHref: "/project",
    primaryType: "route",
    secondaryCta: "Explore Services",
    secondaryHref: "#services",
    secondaryType: "anchor",
    trustedHeading: "Trusted by manufacturers in",
    trusted: ["Semiconductor", "Electronics", "Automotive", "Infrastructure"],
    highlights: [
      {
        key: "laser",
        title: "6 kW fiber laser cutting",
        description: "Automated loading with +/-0.1 mm tolerance for stainless, mild steel, and aluminium.",
      },
      {
        key: "fabrication",
        title: "Precision fabrication & welding",
        description: "Certified MIG/TIG teams with validated WPS/PQR, precision jigs, and structured inspection.",
      },
      {
        key: "finishing",
        title: "Integrated finishing ready to ship",
        description: "Bending, coating, and assembly with digital quality reports.",
      },
      {
        key: "spark",
        title: "Realtime production monitoring",
        description: "OEE dashboards and end-to-end traceability keep every run transparent.",
      },
    ],
    metrics: [
      { label: "Lead Time", value: "3-5 days" },
      { label: "Yield Rate", value: "98%" },
      { label: "Traceability", value: "Digital MES" },
    ],
  },
}

function Hero() {
  const { language } = useLanguage()
  const content = heroContent[language] ?? heroContent.id
  const headline = content.headline ?? heroContent.id.headline
  const highlights = content.highlights ?? []
  const metrics = content.metrics ?? []
  const trusted = content.trusted ?? []

  const primaryCta = {
    label: content.primaryCta ?? heroContent.id.primaryCta,
    href: content.primaryHref ?? heroContent.id.primaryHref,
    type: content.primaryType ?? heroContent.id.primaryType ?? "route",
  }
  const secondaryCta = {
    label: content.secondaryCta ?? heroContent.id.secondaryCta,
    href: content.secondaryHref ?? heroContent.id.secondaryHref,
    type: content.secondaryType ?? heroContent.id.secondaryType ?? "route",
  }

  const renderCta = (cta, variant = "primary") => {
    if (!cta?.label || !cta?.href) return null

    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    const primaryStyles = `${baseStyles} bg-theme-blue text-white shadow-[0_20px_40px_-24px_rgba(37,99,235,0.55)] hover:bg-[#1d4ed8] focus-visible:ring-theme-purple/60`
    const secondaryStyles = `${baseStyles} border border-theme-purple/20 text-theme-blue hover:border-theme-purple hover:text-theme-purple focus-visible:ring-theme-purple/40`
    const className = variant === "primary" ? primaryStyles : secondaryStyles
    const icon = <ArrowUpRight size={18} />

    if (cta.type === "external") {
      return (
        <a href={cta.href} target="_blank" rel="noreferrer" className={className}>
          {cta.label}
          {icon}
        </a>
      )
    }

    if (cta.type === "anchor") {
      return (
        <a href={cta.href} className={className}>
          {cta.label}
          {icon}
        </a>
      )
    }

    return (
      <Link to={cta.href} className={className}>
        {cta.label}
        {icon}
      </Link>
    )
  }

  return (
    <section className="relative isolate overflow-hidden bg-white text-theme-blue">
      <div
        className="absolute inset-0 bg-[length:180%_180%] bg-gradient-to-br from-[#dbe4ff] via-white to-[#e0e7ff] opacity-80 animate-gradient-pan"
        aria-hidden
      />
      <div className="absolute -right-24 bottom-[-18rem] h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-theme-purple/15 via-light-theme-purple/50 to-transparent blur-3xl animate-float-blob" aria-hidden />
      <div className="absolute -left-32 top-[-12rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-light-theme-purple/70 via-white/40 to-transparent blur-[120px] animate-float-blob [animation-delay:1.5s]" aria-hidden />

      <div className="container relative z-10 flex flex-col gap-16 py-24 md:py-32">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.45em] text-theme-purple/70">
              <Sparkles size={16} className="text-theme-purple" />
              {content.badge}
            </span>
          </div>

          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl font-semibold leading-[1.05] text-theme-blue sm:text-5xl xl:text-6xl">
              <span className="block">{headline.leading}</span>
              <span className="relative block">
                <span className="relative z-10">{headline.highlight}</span>
                <span
                  className="absolute inset-x-1 bottom-0 h-3 rounded-full bg-gradient-to-r from-theme-purple via-theme-purple/40 to-transparent"
                  aria-hidden
                />
              </span>
              <span className="block">{headline.trailing}</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-grey sm:text-lg">{content.description}</p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {renderCta(primaryCta, "primary")}
              {renderCta(secondaryCta, "secondary")}
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] lg:items-end">
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.slice(0, 4).map((item, index) => {
              const Icon = highlightIcons[item.key] ?? Sparkles
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_45px_90px_-60px_rgba(15,23,42,0.18)] transition-transform duration-300 animate-fade-up hover:-translate-y-1 hover:shadow-[0_35px_70px_-50px_rgba(37,99,235,0.35)]"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="absolute -right-12 top-12 h-24 w-24 rounded-full bg-light-theme-purple blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-light-theme-purple text-theme-purple">
                      <Icon size={18} />
                    </span>
                    <p className="text-sm font-semibold text-theme-blue">{item.title}</p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-grey">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-[0_45px_90px_-60px_rgba(15,23,42,0.18)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-muted-grey/70">{content.trustedHeading}</p>
            <div className="flex flex-wrap gap-3">
              {trusted.map((industry) => (
                <span key={industry} className="rounded-full border border-theme-purple/20 bg-light-theme-purple/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-theme-purple">
                  {industry}
                </span>
              ))}
            </div>
            <div className="grid gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex items-baseline justify-between border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
                  <span className="text-xs uppercase tracking-[0.35em] text-muted-grey/70">{metric.label}</span>
                  <span className="text-xl font-semibold text-theme-blue">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
export default Hero
