import { Link } from "react-router-dom"
import { Linkedin, Youtube } from "lucide-react"
import logoBig from "../assets/logo/logo-big.jpg"
import { useLanguage } from "../context/LanguageContext"

const footerContent = {
  id: {
    companyText:
      "PT. Geum Cheon Indo, Jl. Raya Serang km 12,5, Desa Sukadamai, Cikupa, Tangerang 15710. Telp: (021) 5940-0240 / (021) 5940-2454 | Fax: (021) 5940-1224 | Email: info@geumcheonindo.com",
    columns: [
      {
        title: "Tentang",
        items: [
          { label: "Profil Perusahaan", to: "/" },
          { label: "Visi & Misi", to: "/" },
          { label: "Hubungi Kami", to: "/contact" },
        ],
      },
      {
        title: "Our Work",
        items: [
          { label: "Laser Cutting", to: "/work/laser-cutting" },
          { label: "Metal Press", to: "/work/metal-press" },
          { label: "Precision Workshop", to: "/work/precision-workshop" },
        ],
      },
    ],
    partnersTitle: "Our Partner",
    partners: [
      { label: "Geum Cheon Engineering", href: "https://geumcheoneng.com" },
      { label: "SBMI", href: "#" },
    ],
    bottomLinks: [
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "Privasi", href: "#" },
      { label: "Dukungan", to: "/contact" },
    ],
    bottomText: "© {year} Geum Cheon Indo. Seluruh hak cipta dilindungi.",
  },
  en: {
    companyText:
      "PT. Geum Cheon Indo, Jl. Raya Serang km 12.5, Sukadamai Village, Cikupa, Tangerang 15710. Phone: (021) 5940-0240 / (021) 5940-2454 | Fax: (021) 5940-1224 | Email: info@geumcheonindo.com",
    columns: [
      {
        title: "About",
        items: [
          { label: "Company Profile", to: "/" },
          { label: "Vision & Mission", to: "/" },
          { label: "Contact", to: "/contact" },
        ],
      },
      {
        title: "Our Work",
        items: [
          { label: "Laser Cutting", to: "/work/laser-cutting" },
          { label: "Metal Press", to: "/work/metal-press" },
          { label: "Precision Workshop", to: "/work/precision-workshop" },
        ],
      },
    ],
    partnersTitle: "Our Partner",
    partners: [
      { label: "Geum Cheon Engineering", href: "https://geumcheoneng.com" },
      { label: "SBMI", href: "#" },
    ],
    bottomLinks: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Support", to: "/contact" },
    ],
    bottomText: "© {year} Geum Cheon Indo. All rights reserved.",
  },
  ko: {
    companyText:
      "PT. Geum Cheon Indo, Jl. Raya Serang km 12.5, Desa Sukadamai, Cikupa, Tangerang 15710. 전화: (021) 5940-0240 / (021) 5940-2454 | 팩스: (021) 5940-1224 | 이메일: info@geumcheonindo.com",
    columns: [
      {
        title: "회사 소개",
        items: [
          { label: "기업 프로필", to: "/" },
          { label: "비전 & 미션", to: "/" },
          { label: "문의하기", to: "/contact" },
        ],
      },
      {
        title: "주요 공정",
        items: [
          { label: "레이저 커팅", to: "/work/laser-cutting" },
          { label: "금속 프레스", to: "/work/metal-press" },
          { label: "정밀 워크숍", to: "/work/precision-workshop" },
        ],
      },
    ],
    partnersTitle: "파트너",
    partners: [
      { label: "Geum Cheon Engineering", href: "https://geumcheoneng.com" },
      { label: "SBMI", href: "#" },
    ],
    bottomLinks: [
      { label: "이용 약관", href: "#" },
      { label: "개인정보", href: "#" },
      { label: "지원", to: "/contact" },
    ],
    bottomText: "© {year} Geum Cheon Indo. 모든 권리 보유.",
  },
}

export function Footer() {
  const { language } = useLanguage()
  const copy = footerContent[language] ?? footerContent.id
  const currentYear = new Date().getFullYear()
  const bottomText = copy.bottomText.replace('{year}', currentYear.toString())

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container py-14">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center">
              <img src={logoBig} alt="Geum Cheon Indo" className="h-12 w-auto rounded-xl border border-slate-200 bg-white p-1 shadow-sm" />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-muted-grey">{copy.companyText}</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-muted-grey transition hover:border-theme-purple/40 hover:text-theme-purple"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.youtube.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-muted-grey transition hover:border-theme-purple/40 hover:text-theme-purple"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {copy.columns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-grey">{column.title}</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-grey">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      {item.to ? (
                        <Link className="transition hover:text-theme-purple" to={item.to}>
                          {item.label}
                        </Link>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-grey">{copy.partnersTitle}</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-grey">
                {copy.partners.map((partner) => (
                  <li key={partner.label}>
                    <a className="transition hover:text-theme-purple" href={partner.href} target="_blank" rel="noreferrer">
                      {partner.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-background py-6">
        <div className="container flex flex-col gap-4 text-xs text-muted-grey sm:flex-row sm:items-center sm:justify-between">
          <p>{bottomText}</p>
          <div className="flex gap-6">
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
    </footer>
  )
}
