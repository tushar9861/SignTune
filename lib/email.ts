"use server"

// Server-side email service for static-friendly implementation
// This uses Server Actions to keep environment variables secure

interface EmailData {
  to: string
  subject: string
  data: Record<string, string>
}

export async function sendEmail({ to, subject, data }: EmailData) {
  // Server-side environment variables (not exposed to client)
  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error("[v0] EmailJS environment variables not configured")
    throw new Error("Email service not configured. Please add EmailJS credentials in the Vars section.")
  }

  // Format the email content
  const emailContent = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")

  const templateParams = {
    to_email: to,
    subject: subject,
    message: emailContent,
    ...data,
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: templateParams,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] EmailJS error:", errorText)
      throw new Error("Email sending failed")
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Email error:", error)
    throw error
  }
}
