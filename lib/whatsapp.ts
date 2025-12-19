"use server"

interface WhatsAppMessageData {
  name?: string
  email?: string
  phone?: string
  message?: string
  category?: string
  package?: string
  [key: string]: string | undefined
}

export async function sendToWhatsApp(data: WhatsAppMessageData) {
  // This function prepares the WhatsApp message format
  // The actual redirection happens on the client side
  const phoneNumber = "919861000000" // Replace with your actual WhatsApp Business number

  let message = `🎵 New Inquiry from SignTune Website\n\n`

  if (data.name) message += `👤 Name: ${data.name}\n`
  if (data.email) message += `📧 Email: ${data.email}\n`
  if (data.phone) message += `📱 Phone: ${data.phone}\n`
  if (data.category) message += `🎼 Category: ${data.category}\n`
  if (data.package) message += `📦 Package: ${data.package}\n`
  if (data.message) message += `💬 Message:\n${data.message}\n`

  // Add any additional fields
  Object.entries(data).forEach(([key, value]) => {
    if (value && !["name", "email", "phone", "message", "category", "package"].includes(key)) {
      message += `${key}: ${value}\n`
    }
  })

  message += `\n✨ Please respond promptly!`

  return {
    phoneNumber,
    message: encodeURIComponent(message),
    url: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
  }
}
