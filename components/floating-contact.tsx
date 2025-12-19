"use client"

import { useState } from "react"
import { MessageCircle, Phone, Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Contact options */}
      {isOpen && (
        <div className="mb-4 flex flex-col gap-3 animate-scale-in">
          <a
            href="https://wa.me/917854813448"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm">WhatsApp</span>
          </a>

          <a
            href="tel:+917854813448"
            className="flex items-center gap-3 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm">Call Us</span>
          </a>

          <a
            href="mailto:dev.signtune@gmail.com"
            className="flex items-center gap-3 px-4 py-3 bg-accent-light hover:bg-accent-light/90 text-background rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm">Email</span>
          </a>
        </div>
      )}

      {/* Toggle button */}
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-br from-primary to-accent-light hover:shadow-primary/50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  )
}
