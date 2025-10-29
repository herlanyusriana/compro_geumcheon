import { useEffect, useState } from "react"
import { useLanguage } from "../context/LanguageContext"

const quoteCopy = {
  id: {
    badge: "Start Your Project",
    heroTitle: "Penawaran cepat untuk kebutuhan sheet metal Anda",
    heroDescription:
      "Lengkapi detail komponen, material, dan volume produksi. Tim sales engineer Geum Cheon Indo akan merespons dengan estimasi biaya dan timeline produksi dalam 24 jam kerja.",
    requiredNote: "Bidang bertanda * wajib diisi",
    submit: "Kirim Permintaan",
    subject: "Penawaran Sheet Metal - Website",
    targetEmail: "info@geumcheonindo.com",
    fields: {
      firstName: "Nama depan",
      lastName: "Nama belakang",
      email: "Email",
      phone: "Telepon / WhatsApp",
      company: "Nama perusahaan",
      material: "Material utama",
      thickness: "Ketebalan material (mm)",
      quantity: "Volume / Qty per bulan",
      drawing: "Link drawing / referensi",
      timeline: "Target timeline produksi",
      notes: "Catatan tambahan",
    },
    process: {
      label: "Proses yang dibutuhkan",
      options: ["Laser cutting", "Bending & press", "Welding & assembly", "Finishing & coating"],
    },
  },
  en: {
    badge: "Start Your Project",
    heroTitle: "Request a tailored sheet metal quote",
    heroDescription:
      "Share component specs, materials, and volume targets. Geum Cheon Indo sales engineers will respond within 24 business hours with pricing and production timing.",
    requiredNote: "Fields marked with * are required",
    submit: "Send Request",
    subject: "Sheet Metal Quotation - Website",
    targetEmail: "info@geumcheonindo.com",
    fields: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone / WhatsApp",
      company: "Company name",
      material: "Primary material",
      thickness: "Material thickness (mm)",
      quantity: "Monthly volume / Qty",
      drawing: "Drawing / reference link",
      timeline: "Production timeline target",
      notes: "Additional notes",
    },
    process: {
      label: "Required processes",
      options: ["Laser cutting", "Bending & press", "Welding & assembly", "Finishing & coating"],
    },
  },
  ko: {
    badge: "Start Your Project",
    heroTitle: "Sheet metal ?? ?? ??? ?????",
    heroDescription:
      "?? ???, ?????, ??? ??? ???? ????. Geum Cheon Indo ??? ???? 24?? ??? ??? ??? ??? ???? ??? ???? ????.",
    requiredNote: "* ???? ???",
    submit: "?? ???",
    subject: "Sheet Metal Quotation - Website",
    targetEmail: "info@geumcheonindo.com",
    fields: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone / WhatsApp",
      company: "Company name",
      material: "Primary material",
      thickness: "Material thickness (mm)",
      quantity: "Monthly volume / Qty",
      drawing: "Drawing / reference link",
      timeline: "Production timeline target",
      notes: "Additional notes",
    },
    process: {
      label: "Required processes",
      options: ["Laser cutting", "Bending & press", "Welding & assembly", "Finishing & coating"],
    },
  },
}

const requiredFields = new Set(["firstName", "email", "phone", "company", "material", "thickness", "quantity", "timeline"])

export function ProjectQuote() {
  const { language } = useLanguage()
  const content = quoteCopy[language] ?? quoteCopy.id

  const createInitialFormState = () => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    material: "",
    thickness: "",
    quantity: "",
    drawing: "",
    timeline: "",
    notes: "",
    processes: [],
  })

  const [formData, setFormData] = useState(createInitialFormState())

  useEffect(() => {
    setFormData(createInitialFormState())
  }, [language])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleProcessToggle = (value) => {
    setFormData((prev) => {
      const exists = prev.processes.includes(value)
      return {
        ...prev,
        processes: exists ? prev.processes.filter((item) => item !== value) : [...prev.processes, value],
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { fields, process, subject, targetEmail } = content
    const body = [
      `${fields.firstName}: ${formData.firstName}`,
      `${fields.lastName}: ${formData.lastName}`,
      `${fields.email}: ${formData.email}`,
      `${fields.phone}: ${formData.phone}`,
      `${fields.company}: ${formData.company}`,
      `${fields.material}: ${formData.material}`,
      `${fields.thickness}: ${formData.thickness}`,
      `${fields.quantity}: ${formData.quantity}`,
      `${fields.drawing}: ${formData.drawing}`,
      `${fields.timeline}: ${formData.timeline}`,
      `${process.label}: ${formData.processes.join(", ") || "-"}`,
      "",
      `${fields.notes}:`,
      formData.notes || "-",
    ].join("\n")

    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const renderLabel = (label, fieldName) => (
    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-muted-grey">
      {label}
      {requiredFields.has(fieldName) ? <span className="text-theme-purple"> *</span> : null}
    </span>
  )

  return (
    <section className="relative isolate overflow-hidden bg-white text-theme-blue">
      <div
        className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-br from-[#e0e7ff] via-white to-[#eef2ff] opacity-80 animate-gradient-pan"
        aria-hidden
      />
      <div className="absolute -left-32 top-10 h-[32rem] w-[32rem] rounded-full bg-light-theme-purple/60 blur-[140px] animate-float-blob" aria-hidden />
      <div className="absolute -right-40 bottom-[-12rem] h-[36rem] w-[36rem] rounded-full bg-theme-purple/15 blur-[160px] animate-float-blob [animation-delay:1.8s]" aria-hidden />

      <div className="container relative z-10 space-y-12 py-24 md:py-28">
        <div className="max-w-2xl space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-theme-purple/20 bg-light-theme-purple/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-theme-purple">
            {content.badge}
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-theme-blue sm:text-4xl lg:text-5xl">{content.heroTitle}</h1>
          <p className="text-base leading-relaxed text-muted-grey">{content.heroDescription}</p>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-theme-purple/70">{content.requiredNote}</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 rounded-[40px] border border-theme-purple/20 bg-white/90 p-8 shadow-[0_60px_140px_-90px_rgba(15,23,42,0.4)] backdrop-blur md:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              {renderLabel(content.fields.firstName, "firstName")}
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required={requiredFields.has("firstName")}
                className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
                autoComplete="given-name"
              />
            </label>
            <label className="flex flex-col gap-2">
              {renderLabel(content.fields.lastName, "lastName")}
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
                autoComplete="family-name"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              {renderLabel(content.fields.email, "email")}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required={requiredFields.has("email")}
                className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col gap-2">
              {renderLabel(content.fields.phone, "phone")}
              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required={requiredFields.has("phone")}
                className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
                autoComplete="tel"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              {renderLabel(content.fields.company, "company")}
              <input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required={requiredFields.has("company")}
                className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
                autoComplete="organization"
              />
            </label>
            <label className="flex flex-col gap-2">
              {renderLabel(content.fields.material, "material")}
              <input
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                required={requiredFields.has("material")}
                className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              {renderLabel(content.fields.thickness, "thickness")}
              <input
                name="thickness"
                value={formData.thickness}
                onChange={handleInputChange}
                required={requiredFields.has("thickness")}
                className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
              />
            </label>
            <label className="flex flex-col gap-2">
              {renderLabel(content.fields.quantity, "quantity")}
              <input
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                required={requiredFields.has("quantity")}
                className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            {renderLabel(content.fields.drawing, "drawing")}
            <input
              name="drawing"
              value={formData.drawing}
              onChange={handleInputChange}
              className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
              placeholder="https://..."
              type="url"
            />
          </label>

          <label className="flex flex-col gap-2">
            {renderLabel(content.fields.timeline, "timeline")}
            <input
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              required={requiredFields.has("timeline")}
              className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
            />
          </label>

          <div className="space-y-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-muted-grey">{content.process.label}</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {content.process.options.map((option) => (
                <label key={option} className="flex items-center gap-2 rounded-xl border border-theme-purple/20 bg-white px-4 py-2 shadow-sm">
                  <input
                    type="checkbox"
                    checked={formData.processes.includes(option)}
                    onChange={() => handleProcessToggle(option)}
                    className="h-4 w-4 rounded border-theme-purple/40 text-theme-purple focus:ring-theme-purple/40"
                  />
                  <span className="text-sm text-theme-blue">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="flex flex-col gap-2">
            {renderLabel(content.fields.notes, "notes")}
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={4}
              className="rounded-xl border border-theme-purple/20 bg-white px-4 py-2.5 text-theme-blue shadow-sm focus:border-theme-purple focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-theme-blue px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(37,99,235,0.55)] transition hover:bg-[#1d4ed8]"
          >
            {content.submit}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ProjectQuote
