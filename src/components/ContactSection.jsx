import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const contactDetails = {
  name: "PT. Geum Cheon Indo",
  address: ["Jl. Raya Serang km 12,5", "Desa Sukadamai", "Cikupa, Tangerang"],
  phone: ["(021) 5940-0240", "(021) 5940-2454"],
  fax: "(021) 5940-1224",
  email: "info@geumcheonindo.com",
  marketing: {
    name: "Mr. Hwang Min Ha (Director - Korea)",
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
    marketingTitle: "Divisi Marketing",
    marketingDescription:
      "Spesialis kami akan membantu merencanakan produksi logam Anda mulai dari request sampel hingga skala mass production.",
    liaison: "Pendamping khusus untuk mitra Korea",
    mapTitle: "Lokasi PT. Geum Cheon Indo",
    faxLabel: "Fax",
  },
  en: {
    badge: "Contact Us",
    heading: "Reach out for metal manufacturing and industrial estate consultations",
    description:
      "Our team responds within 24 business hours via email or phone. We can arrange in-person meetings at the Geum Cheon Indo headquarters in Cikupa or online as needed.",
    locationLabel: "Our Location",
    marketingTitle: "Marketing Division",
    marketingDescription:
      "Our specialist supports your metal production planning from sample requests through to mass production.",
    liaison: "Dedicated liaison for Korean partners",
    mapTitle: "Location of PT. Geum Cheon Indo",
    faxLabel: "Fax",
  },
  ko: {
    badge: "문의하기",
    heading: "금속 제조 및 산업 단지 컨설팅을 위해 연락해 주세요",
    description:
      "이메일과 전화로 영업일 기준 24시간 이내에 응답합니다. 필요에 따라 치쿠파 본사 방문 또는 온라인 미팅을 조율해 드립니다.",
    locationLabel: "사업장 위치",
    marketingTitle: "마케팅 팀",
    marketingDescription:
      "샘플 요청부터 대량 생산까지 금속 생산 계획을 전담 전문가가 지원합니다.",
    liaison: "한국 파트너 전담 창구",
    mapTitle: "PT. Geum Cheon Indo 위치",
    faxLabel: "팩스",
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

  return (
    <motion.section
      className="bg-white py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container space-y-16">
        <motion.div className="space-y-10" variants={fadeIn} custom={0}>
          <div className="space-y-5">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-light-theme-purple px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple"
              variants={fadeIn}
              custom={0.2}
            >
              {content.badge}
            </motion.span>
            <motion.h2
              className="text-3xl font-semibold text-theme-blue sm:text-4xl"
              variants={fadeIn}
              custom={0.4}
            >
              {content.heading}
            </motion.h2>
            <motion.p className="max-w-2xl text-base leading-relaxed text-muted-grey" variants={fadeIn} custom={0.6}>
              {content.description}
            </motion.p>
          </div>

          <motion.div
            className="rounded-[32px] border border-slate-200 bg-background p-8 shadow-card"
            variants={fadeIn}
            custom={0.8}
          >
            <motion.div className="grid gap-8 md:grid-cols-2" variants={containerVariants}>
              <motion.div
                className="flex h-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                variants={fadeIn}
                custom={1}
              >
                <div className="flex items-start gap-3 text-theme-blue">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-light-theme-purple text-theme-purple">
                    <MapPin size={20} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-muted-grey">{content.locationLabel}</p>
                    <h3 className="mt-1 text-lg font-semibold">{contactDetails.name}</h3>
                  </div>
                </div>
                <div className="space-y-2 text-sm leading-relaxed text-muted-grey">
                  {contactDetails.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div className="mt-auto space-y-2 text-sm leading-relaxed text-muted-grey">
                  <p className="flex items-start gap-2">
                    <Phone size={16} className="mt-0.5 text-theme-purple" />
                    <span className="max-w-full break-all">{contactDetails.phone.join(", ")}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Phone size={16} className="mt-0.5 text-theme-purple" />
                    <span className="max-w-full break-all">{content.faxLabel}: {contactDetails.fax}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Mail size={16} className="mt-0.5 text-theme-purple" />
                    <span className="max-w-full break-all">{contactDetails.email}</span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex h-full flex-col gap-5 rounded-2xl border border-theme-purple/30 bg-light-theme-purple/40 p-6 text-sm text-theme-blue"
                variants={fadeIn}
                custom={1.2}
              >
                <div className="leading-tight">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-theme-purple">{content.marketingTitle}</p>
                  <h3 className="mt-3 text-lg font-semibold text-theme-blue">{contactDetails.marketing.name}</h3>
                </div>
                <p className="text-sm text-muted-grey">{content.marketingDescription}</p>
                <div className="space-y-3 text-sm">
                  <p className="flex items-start gap-2">
                    <Phone size={16} className="mt-0.5 text-theme-purple" />
                    <span className="max-w-full break-all">{contactDetails.marketing.phone}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Mail size={16} className="mt-0.5 text-theme-purple" />
                    <span className="max-w-full break-all">{contactDetails.marketing.email}</span>
                  </p>
                </div>
                <div className="mt-auto rounded-xl border border-theme-purple/30 bg-white px-4 py-3 text-center text-xs uppercase tracking-[0.25em] text-theme-purple">
                  {content.liaison}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="space-y-8 min-w-0" variants={fadeIn} custom={1}>
          <motion.div
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 sm:p-4 shadow-card min-w-0"
            variants={fadeIn}
            custom={1.2}
          >
            <motion.div
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
