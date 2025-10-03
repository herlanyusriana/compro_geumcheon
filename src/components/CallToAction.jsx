import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react'

export function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-500/5 to-transparent" />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">Hubungi Kami</span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Siap mempercepat realisasi investasi dan transformasi industri Anda
            </h2>
            <p className="text-base text-slate-200">
              Tim kami siap mendampingi mulai dari konsultasi strategi awal, proses perizinan, hingga implementasi operasional.
            </p>
            <div className="space-y-4 text-sm text-slate-200">
              <a
                href="mailto:partnership@geumcheonindo.com"
                className="flex items-center gap-3 transition hover:text-primary-100"
              >
                <Mail size={18} /> partnership@geumcheonindo.com
              </a>
              <a href="tel:+622150011223" className="flex items-center gap-3 transition hover:text-primary-100">
                <Phone size={18} /> +62 21 500 112 23
              </a>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-primary-400/40 bg-primary-500/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-100">
              <Send size={16} /> Response dalam 24 jam kerja
            </div>
          </div>

          <form className="space-y-4 rounded-[28px] border border-white/10 bg-black/40 p-8 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Perusahaan
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Nama perusahaan"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Nomor Telepon
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Nomor dapat dihubungi"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Kebutuhan Utama
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Ceritakan proyek atau tantangan yang ingin Anda diskusikan"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft transition hover:shadow-lg hover:shadow-primary-400/25"
            >
              Jadwalkan Diskusi <ArrowUpRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
