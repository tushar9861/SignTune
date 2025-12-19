"use client"

import { WhatsAppCTACard } from "@/components/whatsapp-cta-card"

export function WhatsAppCTASection() {
  return (
    <section className="py-16 md:py-24 bg-card/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-light/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with us instantly on WhatsApp for personalized assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <WhatsAppCTACard
            title="Quick Consultation"
            description="Not sure which package? Chat with our team for personalized recommendations based on your needs."
            ctaText="Chat Now"
            variant="accent"
            prefillData={{ interest: "Quick Consultation" }}
          />
          <WhatsAppCTACard
            title="Custom Quote Request"
            description="Have a unique project? Get a custom quote for bulk orders, corporate packages, or special events."
            ctaText="Request Quote"
            variant="gradient"
            prefillData={{ interest: "Custom Quote" }}
          />
          <WhatsAppCTACard
            title="Urgent Order"
            description="Need it fast? Talk to us about rush delivery options and same-day processing for urgent requirements."
            ctaText="Urgent Order"
            variant="accent"
            prefillData={{ interest: "Urgent Order", priority: "High" }}
          />
        </div>
      </div>
    </section>
  )
}
