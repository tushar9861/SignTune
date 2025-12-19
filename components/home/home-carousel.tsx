"use client"

import { AutoCarousel } from "@/components/auto-carousel"
import { sendToWhatsApp } from "@/lib/whatsapp"

export function HomeCarousel() {
  const slides = [
    {
      id: 1,
      title: "Transform Every Call Into An Experience",
      description:
        "Professional caller tunes that represent your unique identity. Stand out with original compositions crafted just for you.",
      cta: "Get Started on WhatsApp",
    },
    {
      id: 2,
      title: "Business? Personal? We've Got You Covered",
      description:
        "From corporate anthems to spiritual harmonies, we create caller tunes for every occasion and personality.",
      cta: "Explore Packages on WhatsApp",
    },
    {
      id: 3,
      title: "100% Original, 100% You",
      description:
        "No copyrighted music. Every tune is composed from scratch by professional musicians with your vision in mind.",
      cta: "Start Your Journey",
    },
    {
      id: 4,
      title: "Fast Delivery, Studio Quality",
      description:
        "Receive your professionally produced caller tune within 24-48 hours. Crystal clear audio, ready to use.",
      cta: "Order Now on WhatsApp",
    },
  ]

  const handleCTAClick = async (item: { title: string; description: string }) => {
    const whatsappData = await sendToWhatsApp({
      message: `I'm interested in: ${item.title}`,
      category: "Carousel Inquiry",
    })
    window.open(whatsappData.url, "_blank")
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <AutoCarousel items={slides} autoPlayInterval={5000} onCTAClick={handleCTAClick} />
      </div>
    </section>
  )
}
