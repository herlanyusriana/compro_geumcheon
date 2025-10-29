import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logoBig from "../assets/logo/logo-big.jpg"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useLanguage } from "../context/LanguageContext"

const navItems = [
  { key: "home", to: "/" },
  { key: "work", to: "/work" },
  { key: "partners", to: "/partners" },
  { key: "contact", to: "/contact" },
]

const navLabels = {
  id: {
    home: "Beranda",
    work: "Layanan Utama",
    partners: "Mitra Kami",
    contact: "Kontak",
    contactCta: "Hubungi Kami",
    projectCta: "Mulai Proyek",
    mobileCta: "Konsultasi Gratis",
  },
  en: {
    home: "Home",
    work: "Our Work",
    partners: "Our Partner",
    contact: "Contact",
    contactCta: "Contact Us",
    projectCta: "Start Your Project",
    mobileCta: "Request Consultation",
  },
  ko: {
    home: "?",
    work: "?? ??",
    partners: "?? ???",
    contact: "??",
    contactCta: "????",
    projectCta: "Start Your Project",
    mobileCta: "?? ??",
  },
}

const baseLinkClasses = "text-sm font-medium transition-colors duration-200"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()

  const labels = navLabels[language] ?? navLabels.id

  const linkClasses = ({ isActive }) =>
    `${baseLinkClasses} ${isActive ? "text-theme-purple" : "text-muted-grey hover:text-theme-purple"}`

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="inline-flex items-center">
          <img
            src={logoBig}
            alt="Geum Cheon Indo"
            className="h-10 w-auto rounded-xl border border-slate-200 bg-white p-1 shadow-sm"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClasses}>
              {labels[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden md:block" />
          <Link
            to="/project"
            className="hidden rounded-full border border-theme-purple/25 px-5 py-2 text-sm font-medium text-theme-purple transition hover:border-theme-purple hover:bg-light-theme-purple/60 md:inline-flex"
          >
            {labels.projectCta}
          </Link>
          <Link
            to="/contact"
            className="hidden rounded-full bg-theme-purple px-5 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-theme-purple/90 md:inline-flex"
          >
            {labels.contactCta}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-theme-blue md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="container flex flex-col gap-3 py-6 text-sm font-medium">
            <LanguageSwitcher />
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${baseLinkClasses} rounded-xl border border-transparent px-4 py-3 ${
                    isActive
                      ? "border-theme-purple/20 bg-light-theme-purple text-theme-purple"
                      : "text-theme-blue hover:border-theme-purple/30 hover:bg-light-theme-purple"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {labels[item.key]}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-theme-purple px-4 py-3 text-center text-white shadow-soft"
            >
              {labels.mobileCta}
            </Link>
            <Link
              to="/project"
              onClick={() => setOpen(false)}
              className="rounded-full border border-theme-purple/30 px-4 py-3 text-center text-theme-purple"
            >
              {labels.projectCta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}







