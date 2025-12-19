"use server"

import nodemailer from "nodemailer"
import { generatePDF } from "./pdf-generator"

interface EmailData {
  to: string
  subject: string
  data: Record<string, string>
  source: string
}

export async function sendEmailWithPDF({ to, subject, data, source }: EmailData) {
  const SMTP_HOST = process.env.SMTP_HOST
  const SMTP_PORT = process.env.SMTP_PORT
  const SMTP_USER = process.env.SMTP_USER
  const SMTP_PASS = process.env.SMTP_PASS

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("[v0] SMTP environment variables not configured")
    throw new Error(
      "Email service not configured. Please add SMTP credentials (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS) in the Vars section.",
    )
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number.parseInt(SMTP_PORT),
      secure: Number.parseInt(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    const submissionDate = new Date()
    const pdfBuffer = await generatePDF({
      data,
      source,
      submissionDate,
    })

    const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0B1220; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
    .badge { background: #fef3c7; color: #92400e; padding: 8px 16px; border-radius: 6px; display: inline-block; font-weight: bold; margin: 20px 0; }
    .field { margin: 15px 0; }
    .label { font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; }
    .value { color: #111827; font-size: 14px; margin-top: 4px; }
    .footer { background: #f3f4f6; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">SignTune</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">Custom Caller Tune Service</p>
    </div>
    <div class="content">
      <h2 style="color: #0B1220; margin-top: 0;">New Customer Request Received</h2>
      
      <p><strong>Submission Source:</strong> ${source}</p>
      <p><strong>Submission Date:</strong> ${submissionDate.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}</p>
      
      <div class="badge">Paid Amount: ₹0 (Test Mode)</div>
      
      <hr style="border: none; border-top: 2px solid #e5e7eb; margin: 25px 0;" />
      
      <h3 style="color: #0B1220;">Customer Details:</h3>
      
      ${Object.entries(data)
        .filter(([_, value]) => value)
        .map(
          ([key, value]) => `
        <div class="field">
          <div class="label">${formatFieldName(key)}</div>
          <div class="value">${value}</div>
        </div>
      `,
        )
        .join("")}
      
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;" />
      
      <p style="color: #6b7280; font-size: 13px; margin-top: 20px;">
        <strong>Note:</strong> Full details are attached as a PDF document for your records.
      </p>
    </div>
    <div class="footer">
      <p style="margin: 0;">SignTune © ${new Date().getFullYear()} | Professional Caller Tune Service</p>
      <p style="margin: 5px 0 0 0;">This is an automated notification email.</p>
    </div>
  </div>
</body>
</html>
    `

    const info = await transporter.sendMail({
      from: `"SignTune Notifications" <${SMTP_USER}>`,
      to: to,
      subject: `${subject} - ₹0 (Test Mode)`,
      html: emailBody,
      attachments: [
        {
          filename: `SignTune_Submission_${submissionDate.getTime()}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    })

    console.log("[v0] Email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    throw error
  }
}

// Helper function to format field names for display
function formatFieldName(field: string): string {
  const fieldLabels: Record<string, string> = {
    fullName: "Full Name",
    name: "Name",
    email: "Email Address",
    whatsapp: "WhatsApp Number",
    language: "Preferred Language",
    mood: "Mood / Style",
    nameOrBrand: "Name / Brand to Include",
    occasion: "Occasion",
    packageType: "Package Selected",
    specialInstructions: "Special Instructions",
    message: "Message",
  }

  return (
    fieldLabels[field] ||
    field
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim()
  )
}
