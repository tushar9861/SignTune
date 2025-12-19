"use server"

import { jsPDF } from "jspdf"

interface PDFData {
  data: Record<string, string>
  source: string
  submissionDate: Date
}

export async function generatePDF({ data, source, submissionDate }: PDFData): Promise<Buffer> {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  })

  const primaryColor = [11, 18, 32] // #0B1220
  const accentColor = [59, 130, 246] // #3B82F6
  const textColor = [55, 65, 81] // #374151
  const lightGray = [156, 163, 175] // #9CA3AF

  let yPosition = 20

  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.rect(0, 0, 210, 40, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(28)
  doc.setFont("helvetica", "bold")
  doc.text("SignTune", 105, 20, { align: "center" })

  doc.setFontSize(12)
  doc.setFont("helvetica", "normal")
  doc.text("Custom Caller Tune Service", 105, 28, { align: "center" })

  yPosition = 50

  doc.setTextColor(textColor[0], textColor[1], textColor[2])
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text(
    `Submission Date: ${submissionDate.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}`,
    20,
    yPosition,
  )
  yPosition += 6
  doc.text(`Submission Source: ${source}`, 20, yPosition)
  yPosition += 10

  doc.setFillColor(254, 243, 199) // Light yellow background
  doc.roundedRect(20, yPosition, 80, 12, 2, 2, "F")
  doc.setTextColor(146, 64, 14) // Dark yellow text
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Paid Amount: ₹0 (Test Mode)", 22, yPosition + 8)
  yPosition += 20

  doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2])
  doc.setLineWidth(0.5)
  doc.line(20, yPosition, 190, yPosition)
  yPosition += 10

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.setFontSize(16)
  doc.setFont("helvetica", "bold")
  doc.text("Customer Submission Details", 20, yPosition)
  yPosition += 10

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

  doc.setTextColor(textColor[0], textColor[1], textColor[2])
  doc.setFontSize(10)

  for (const [key, value] of Object.entries(data)) {
    if (!value) continue // Skip empty fields

    const label = fieldLabels[key] || formatFieldName(key)

    // Field label
    doc.setFont("helvetica", "bold")
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2])
    doc.text(label, 20, yPosition)
    yPosition += 5

    // Field value
    doc.setFont("helvetica", "normal")
    doc.setTextColor(textColor[0], textColor[1], textColor[2])

    // Handle long text (wrap if needed)
    const maxWidth = 170
    const lines = doc.splitTextToSize(value, maxWidth)

    for (const line of lines) {
      if (yPosition > 270) {
        // Add new page if needed
        doc.addPage()
        yPosition = 20
      }
      doc.text(line, 20, yPosition)
      yPosition += 5
    }

    yPosition += 5 // Extra spacing between fields
  }

  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2])
    doc.setFont("helvetica", "normal")
    doc.text(`SignTune © ${new Date().getFullYear()} | Page ${i} of ${pageCount}`, 105, 287, { align: "center" })
  }

  const pdfData = doc.output("arraybuffer")
  return Buffer.from(pdfData)
}

// Helper function to format field names
function formatFieldName(field: string): string {
  return field
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim()
}
