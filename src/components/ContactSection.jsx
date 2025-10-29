import { motion as Motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const contactDetails = {
  name: "PT. Geum Cheon Indo",
  address: ["Jl. Raya Serang km 12,5", "Desa Sukadamai", "Cikupa, Tangerang"],
  phone: ["(021) 5940-0240", "(021) 5940-2454"],
  fax: "(021) 5940-1224",
  email: "info@geumcheonindo.com",
  representative: {
    name: "Mr. Hwang Min Ha",
    title: "Director - Korea",
    phone: "(+62) 812 1086 8681",
    email: "mentosnice@gmail.com",
  },
}

const copy = {
  id: {
    badge: "Hubungi Kami",
    heading: "Hubungi kami untuk konsultasi manufaktur logam dan pengembangan kawasan",
    description:
      "Tim kami siap merespons dalam 24 jam kerja melalui email atau telepon. Pertemuan tatap muka dapat dijadwalkan di kantor pusat Geum Cheon Indo di Cikupa atau secara daring sesuai kebutuhan Anda.",
    locationLabel: "Lokasi Kami",
    representativeTitle: "Kontak Direktur",
    representativeDescription:
      "Konsultasi langsung dengan direktur kami untuk mendiskusikan peluang kerja sama strategis dan kebutuhan produksi lintas negara.",
    mapTitle: "Lokasi PT. Geum Cheon Indo",
    faxLabel: "Fax",
  },
  en: {
    badge: "Contact Us",
    heading: "Reach out for metal manufacturing and industrial estate consultations",
    description:
      "Our team responds within 24 business hours via email or phone. We can arrange in-person meetings at the Geum Cheon Indo headquarters in Cikupa or online as needed.",
    locationLabel: "Our Location",
    representativeTitle: "Director Contact",
    representativeDescription:
      "Connect directly with our director to discuss strategic partnerships and cross-border production requirements.",
    mapTitle: "Location of PT. Geum Cheon Indo",
    faxLabel: "Fax",
  },
  ko: {
    badge: "????",
    heading: "?? ?? ? ?? ?? ???? ?? ??? ???",
    description:
      "???? ??? ??? ?? 24?? ??? ?????. ??? ?? ??? ?? ?? ?? ??? ??? ??? ????.",
    locationLabel: "??? ??",
    representativeTitle: "?? ???",
    representativeDescription:
      "??? ?? ??? ??? ?? ??? ????? ??? ??? ???? ??? ?????.",
    mapTitle: "PT. Geum Cheon Indo ??",
    faxLabel: "??",
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * index, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  }),
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

export function ContactSection() {
  const { language } = useLanguage()
  const content = copy[language] ?? copy.id
  const toTel = (value) => value.replace(/[^+\d]/g, "")

  return (
    <Motion.section
      id="contact"
      className="relative isolate overflow-hidden bg-white py-24 text-theme-blue md:py-28 animate-fade-in"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/45 via-white to-white" aria-hidden />
      <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-theme-purple/20 blur-3xl" aria-hidden />
      <div className="absolute -right-16 bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-light-theme-purple/60 blur-[140px]" aria-hidden />

      <div className="container relative z-10 space-y-16 md:space-y-20">
        <Motion.div className="space-y-10" variants={fadeIn} custom={0}>
          <div className="space-y-5">
            <Motion.span
              className="inline-flex items-center gap-2 rounded-full border border-theme-purple/20 bg-light-theme-purple/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple"
              variants={fadeIn}
              custom={0.2}
            >
              {content.badge}
            </Motion.span>
            <Motion.h2 className="text-3xl font-semibold text-theme-blue sm:text-4xl" variants={fadeIn} custom={0.4}>
              {content.heading}
            </Motion.h2>
            <Motion.p className="max-w-2xl text-base leading-relaxed text-muted-grey" variants={fadeIn} custom={0.6}>
              {content.description}
            </Motion.p>
          </div>

          <Motion.div
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_50px_140px_-80px_rgba(15,23,42,0.18)]"
            variants={fadeIn}
            custom={0.8}
          >
            <Motion.div className="grid gap-8 md:grid-cols-2" variants={containerVariants}>
              <Motion.div
                className="flex h-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                variants={fadeIn}
                custom={1}
              >
                <div className="flex items-start gap-3 text-theme-blue">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-theme-purple/20 bg-light-theme-purple/60 text-theme-purple">
                    <MapPin size={20} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-muted-grey">{content.locationLabel}</p>
                    <h3 className="mt-1 text-lg font-semibold text-theme-blue">{contactDetails.name}</h3>
                  </div>
                </div>
                <div className="space-y-2 text-sm leading-relaxed text-muted-grey">
                  {contactDetails.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div className="mt-auto space-y-2 text-sm leading-relaxed text-muted-grey">
                  {contactDetails.phone.map((number) => (
                    <p key={number} className="flex items-start gap-2">
                      <Phone size={16} className="mt-0.5 text-theme-purple" />
                      <a href={`tel:${toTel(number)}`} className="max-w-full break-all transition hover:text-theme-purple">
                        {number}
                      </a>
                    </p>
                  ))}
                  <p className="flex items-start gap-2">
                    <Phone size={16} className="mt-0.5 text-theme-purple" />
                    <span className="max-w-full break-all">
                      {content.faxLabel}:{" "}
                      <a href={`tel:${toTel(contactDetails.fax)}`} className="transition hover:text-theme-purple">
                        {contactDetails.fax}
                      </a>
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Mail size={16} className="mt-0.5 text-theme-purple" />
                    <a href={`mailto:${contactDetails.email}`} className="max-w-full break-all transition hover:text-theme-purple">
                      {contactDetails.email}
                    </a>
                  </p>
                </div>
              </Motion.div>

              <Motion.div
                className="flex h-full flex-col gap-5 rounded-2xl border border-theme-purple/30 bg-light-theme-purple/40 p-6 text-sm text-theme-blue"
                variants={fadeIn}
                custom={1.2}
              >
                <div className="leading-tight">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-theme-purple">{content.representativeTitle}</p>
                  <h3 className="mt-3 text-lg font-semibold text-theme-blue">{contactDetails.representative.name}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-grey">{contactDetails.representative.title}</p>
                </div>
                <p className="text-sm text-muted-grey">{content.representativeDescription}</p>
                <div className="space-y-3 text-sm">
                  <p className="flex items-start gap-2">
                    <Phone size={16} className="mt-0.5 text-theme-purple" />
                    <a
                      href={`tel:${toTel(contactDetails.representative.phone)}`}
                      className="max-w-full break-all transition hover:text-theme-purple"
                    >
                      {contactDetails.representative.phone}
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <Mail size={16} className="mt-0.5 text-theme-purple" />
                    <a
                      href={`mailto:${contactDetails.representative.email}`}
                      className="max-w-full break-all transition hover:text-theme-purple"
                    >
                      {contactDetails.representative.email}
                    </a>
                  </p>
                </div>
              </Motion.div>
            </Motion.div>
          </Motion.div>
        </Motion.div>

        <Motion.div className="space-y-8 min-w-0" variants={fadeIn} custom={1}>
          <Motion.div
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 sm:p-4 shadow-[0_50px_140px_-80px_rgba(15,23,42,0.18)] min-w-0"
            variants={fadeIn}
            custom={1.2}
          >
            <Motion.div
              className="relative overflow-hidden rounded-[28px] min-w-0"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[16/9]">
                <iframe
                  title={content.mapTitle}
                  src="https://maps.google.com/maps?q=PT.%20Geum%20Cheon%20Indo%20Cikupa&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </div>
    </Motion.section>
  )
}


