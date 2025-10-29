export const WHATSAPP_NUMBER = "6281210868681"

export function createWhatsAppLink(message = "", phone = WHATSAPP_NUMBER) {
  const digits = phone.replace(/\D/g, "")
  const params = new URLSearchParams({ phone: digits })
  if (message) {
    params.append("text", message)
  }
  return `https://api.whatsapp.com/send?${params.toString()}`
}


