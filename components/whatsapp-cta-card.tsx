"use client"

import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface WhatsAppCTACardProps {
  title: string
  description: string
  ctaText?: string
  prefillData?: Record<string, string>
  variant?: "default" | "accent" | "gradient"
  className?: string
}

export function WhatsAppCTACard({
  title,
  description,
  ctaText = "Chat on WhatsApp",
  prefillData = {},
  variant = "default",
  className = "",
}: WhatsAppCTACardProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919861000000" // Replace with actual WhatsApp number
    let message = `Hi SignTune Team! 🎵\n\nI'm interested in: ${title}\n\n`

    // Add prefill data to message
    Object.entries(prefillData).forEach(([key, value]) => {
      if (value) {
        message += `${key}: ${value}\n`
      }
    })

    message += "\nPlease provide more details. Thank you!"

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const variantStyles = {
    default: "bg-card hover:bg-card/80 border-border/50",
    accent:
      "bg-gradient-to-br from-accent-light/10 to-primary/10 hover:from-accent-light/20 hover:to-primary/20 border-accent-light/30",
    gradient:
      "bg-gradient-to-br from-primary/20 via-accent-light/20 to-primary/20 hover:from-primary/30 hover:via-accent-light/30 hover:to-primary/30 border-accent-light/50",
  }

  return (
    <Card
      className={`group relative overflow-hidden border ${variantStyles[variant]} transition-all duration-500 hover:shadow-xl hover:shadow-accent-light/10 hover:-translate-y-2 ${className}`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-light/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent-light/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-6 h-6 text-accent-light" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent-light transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg shadow-[#25D366]/20 group-hover:shadow-[#25D366]/40 transition-all duration-300"
          size="lg"
        >
          <MessageCircle className="w-5 h-5 mr-2 animate-bounce" />
          {ctaText}
        </Button>
      </div>
    </Card>
  )
}
