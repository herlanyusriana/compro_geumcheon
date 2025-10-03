import { MessageCircle } from 'lucide-react'

const whatsappLink = 'https://wa.me/6281210868681?text=Halo%20Geumcheon%20Indo%2C%20saya%20ingin%20mendiskusikan%20peluang%20investasi.'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-18px_rgba(37,211,102,0.6)] transition hover:scale-110 hover:bg-[#1ebe5d]"
    >
      <MessageCircle size={18} />
      WhatsApp
    </a>
  )
}
