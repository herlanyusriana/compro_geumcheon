import { Link } from "react-router-dom"
import { Clock, Linkedin, MapPin, MessageCircle, Phone, Send, Youtube } from "lucide-react"
import logoBig from "../assets/logo/logo-big.jpg"
import { useLanguage } from "../context/LanguageContext"
import { createWhatsAppLink } from "../utils/whatsapp"

const footerContent = {
  id: {
    companyName: "PT. Geum Cheon Indo",
    tagline: "Precision Metal Manufacturing",
    summary:
      "Workshop terintegrasi untuk laser cutting, fabrikasi baja, dan finishing presisi dengan dukungan engineering dan quality control harian.",
    address: ["Jl. Raya Serang km 12,5", "Desa Sukadamai", "Cikupa, Tangerang 15710"],
    phones: ["(021) 5940-0240", "(021) 5940-2454"],
    whatsapp: "+62 812 1086 8681",
    email: "info@geumcheonindo.com",
    hours: "Senin - Jumat 08.00 - 17.00 WIB",
    sections: [
      {
        title: "Layanan",
        items: [
          { label: "Laser Cutting", to: "/work/laser-cutting" },
          { label: "Metal Press", to: "/work/metal-press" },
          { label: "Precision Workshop", to: "/work/precision-workshop" },
        ],
      },
      {
        title: "Perusahaan",
        items: [
          { label: "Profil", to: "/" },
          { label: "Visi & Misi", to: "/#visi-misi" },
          { label: "Sertifikasi", to: "/#certifications" },
          { label: "Hubungi", to: "/contact" },
        ],
      },
    ],
    socialNote: "Ikuti pembaruan workshop kami di kanal resmi.",
    social: [
      { label: "LinkedIn", abbr: "In", href: "https://www.linkedin.com" },
      { label: "YouTube", abbr: "Yt", href: "https://www.youtube.com" },
    ],
    bottomLinks: [
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
    ],
    copyright: "Copyright {year} PT. Geum Cheon Indo. Seluruh hak cipta dilindungi.",
  },
  en: {
    companyName: "PT. Geum Cheon Indo",
    tagline: "Precision Metal Manufacturing",
    summary:
      "Integrated workshop delivering laser cutting, steel fabrication, and precision finishing with daily engineering and quality oversight.",
    address: ["Jl. Raya Serang km 12.5", "Sukadamai Village", "Cikupa, Tangerang 15710"],
    phones: ["+62 21 5940 0240", "+62 21 5940 2454"],
    whatsapp: "+62 812 1086 8681",
    email: "info@geumcheonindo.com",
    hours: "Monday - Friday 08.00 - 17.00 WIB",
    sections: [
      {
        title: "Services",
        items: [
          { label: "Laser Cutting", to: "/work/laser-cutting" },
          { label: "Metal Press", to: "/work/metal-press" },
          { label: "Precision Workshop", to: "/work/precision-workshop" },
        ],
      },
      {
        title: "Company",
        items: [
          { label: "Profile", to: "/" },
          { label: "Vision & Mission", to: "/#visi-misi" },
          { label: "Certifications", to: "/#certifications" },
          { label: "Contact", to: "/contact" },
        ],
      },
    ],
    socialNote: "Follow our manufacturing updates on official channels.",
    social: [
      { label: "LinkedIn", abbr: "In", href: "https://www.linkedin.com" },
      { label: "YouTube", abbr: "Yt", href: "https://www.youtube.com" },
    ],
    bottomLinks: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
    copyright: "Copyright {year} PT. Geum Cheon Indo. All rights reserved.",
  },
  ko: {
    companyName: "PT. Geum Cheon Indo",
    tagline: "Precision Metal Manufacturing",
    summary:
      "Laser cutting, steel fabrication, and precision finishing delivered from an integrated workshop with dedicated engineering and QC.",
    address: ["Jl. Raya Serang km 12.5", "Sukadamai Village", "Cikupa, Tangerang 15710"],
    phones: ["+62 21 5940 0240", "+62 21 5940 2454"],
    whatsapp: "+62 812 1086 8681",
    email: "info@geumcheonindo.com",
    hours: "Monday - Friday 08.00 - 17.00 WIB",
    sections: [
      {
        title: "Services",
        items: [
          { label: "Laser Cutting", to: "/work/laser-cutting" },
          { label: "Metal Press", to: "/work/metal-press" },
          { label: "Precision Workshop", to: "/work/precision-workshop" },
        ],
      },
      {
        title: "Company",
        items: [
          { label: "Profile", to: "/" },
          { label: "Vision & Mission", to: "/#visi-misi" },
          { label: "Certifications", to: "/#certifications" },
          { label: "Contact", to: "/contact" },
        ],
      },
    ],
    socialNote: "Follow our manufacturing updates on official channels.",
    social: [
      { label: "LinkedIn", abbr: "In", href: "https://www.linkedin.com" },
      { label: "YouTube", abbr: "Yt", href: "https://www.youtube.com" },
    ],
    bottomLinks: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
    copyright: "Copyright {year} PT. Geum Cheon Indo. All rights reserved.",
  },
}

const icons = {
  address: MapPin,
  email: Send,
  phone: Phone,
  whatsapp: MessageCircle,
  hours: Clock,
}

function telSanitizer(value) {
  return value.replace(/[^+\d]/g, "")
}

function Footer() {
  const { language } = useLanguage()
  const copy = footerContent[language] ?? footerContent.id
  const year = new Date().getFullYear()

  const whatsappLink = copy.whatsapp ? createWhatsAppLink("", copy.whatsapp) : undefined

  const contactItems = [
    {
      key: "address",
      lines: copy.address,
    },
    ...copy.phones.map((number) => ({
      key: "phone",
      value: number,
      href: `tel:${telSanitizer(number)}`,
    })),
    {
      key: "whatsapp",
      value: copy.whatsapp,
      href: whatsappLink,
      external: true,
    },
    {
      key: "email",
      value: copy.email,
      href: `mailto:${copy.email}`,
    },
    {
      key: "hours",
      value: copy.hours,
    },
  ]

  return (
    <footer className="border-t border-slate-200 bg-[#f6f8fc] text-muted-grey animate-fade-in">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:[grid-template-columns:1.4fr_1fr_1fr_1fr_1fr] xl:[grid-template-columns:1.6fr_1.1fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoBig} alt={`${copy.companyName} logo`} className="h-12 w-12 rounded-xl border border-slate-200 bg-white object-contain" />
              <div>
                <p className="text-sm font-semibold text-theme-blue">{copy.tagline}</p>
                <p className="text-lg font-semibold text-theme-blue">{copy.companyName}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{copy.summary}</p>
            <p className="text-xs text-slate-500">{copy.socialNote}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-theme-blue">Get in Touch</p>
            <ul className="mt-4 space-y-3 text-sm">
              {contactItems.map((item, index) => {
                const Icon = icons[item.key]
                if (!Icon) return null

                return (
                  <li key={`${item.key}-${index}`} className="flex items-start gap-3">
                    <span className="mt-1 text-theme-purple">
                      <Icon size={16} />
                    </span>
                    <div>
                      {item.lines ? (
                        item.lines.map((line) => (
                          <p key={line} className="leading-relaxed">
                            {line}
                          </p>
                        ))
                      ) : item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noreferrer" : undefined}
                          className="transition hover:text-theme-purple"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {copy.sections.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-semibold text-theme-blue">{section.title}</p>
              <ul className="mt-4 space-y-3 text-sm">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="transition hover:text-theme-purple">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <p className="text-sm font-semibold text-theme-blue">Sosial</p>
            <div className="flex flex-wrap gap-2">
              {copy.social.map((account) => (
                <a
                  key={account.label}
                  href={account.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-theme-purple/30 text-sm font-semibold text-theme-purple transition hover:border-theme-purple hover:bg-theme-purple hover:text-white"
                  aria-label={account.label}
                >
                  {account.abbr}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.linkedin.com"
                className="flex items-center gap-2 transition hover:text-theme-purple"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://www.youtube.com"
                className="flex items-center gap-2 transition hover:text-theme-purple"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube size={16} /> YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{copy.copyright.replace("{year}", year.toString())}</p>
            <div className="flex flex-wrap gap-4">
              {copy.bottomLinks.map((link) =>
                link.to ? (
                  <Link key={link.label} to={link.to} className="transition hover:text-theme-purple">
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href} className="transition hover:text-theme-purple">
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
