"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { MusicNoteIcon } from "@/components/vector-graphics/music-note-icon"
import { ComingSoonModal } from "@/components/coming-soon-modal"
import { MusicalInstrumentArt } from "@/components/vector-art/musical-instrument-art"
import Image from "next/image"

export default function PackagesPage() {
  const [showModal, setShowModal] = useState(false)

  const packages = [
    {
      name: "Basic Name Tune",
      price: "₹299",
      description: "Perfect for personal use with your name",
      image: "/microphone-in-recording-studio-with-soft-blue-ligh.jpg",
      features: [
        "Your name in the tune",
        "Single language",
        "Professional voice",
        "25-second duration",
        "Email delivery in 48 hours",
      ],
      popular: false,
    },
    {
      name: "Customized Tune",
      price: "₹499",
      description: "Most popular choice with full customization",
      image: "/premium-headphones-on-sound-mixer-with-glowing-equ.jpg",
      features: [
        "Fully customized content",
        "Choice of language",
        "Mood & style selection",
        "Name or brand inclusion",
        "25-second duration",
        "Email delivery in 24-48 hours",
        "One free revision",
      ],
      popular: true,
    },
    {
      name: "Group Package",
      price: "₹1,299",
      description: "Ideal for small teams or families",
      image: "/group-of-people-in-modern-music-studio--collaborat.jpg",
      features: [
        "Up to 5 custom tunes",
        "Individual customization",
        "Multiple languages",
        "Priority composition",
        "25-second duration each",
        "Email delivery in 48 hours",
        "Two free revisions per tune",
      ],
      popular: false,
    },
    {
      name: "Bundle Package",
      price: "₹1,999",
      description: "Best value for businesses and organizations",
      image: "/corporate-office-with-professional-audio-branding-.jpg",
      features: [
        "Up to 10 custom tunes",
        "Full customization for each",
        "Multiple languages & styles",
        "Priority support",
        "25-second duration each",
        "Email delivery in 24-48 hours",
        "Unlimited revisions",
        "Brand consistency support",
      ],
      popular: false,
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/premium-music-packages-display-with-modern-audio-e.jpg"
              alt="Packages Background"
              fill
              className="object-cover opacity-10"
            />
          </div>

          <div className="absolute top-10 left-1/4 opacity-10 animate-float">
            <MusicNoteIcon className="w-40 h-40" />
          </div>
          <div className="absolute bottom-10 right-1/4 opacity-10 animate-float" style={{ animationDelay: "1.5s" }}>
            <MusicNoteIcon className="w-32 h-32" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <MusicalInstrumentArt />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
                Choose Your Package
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Select the perfect package that fits your needs. All packages include professional composition and email
                delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-card border ${
                    pkg.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border"
                  } rounded-lg overflow-hidden flex flex-col hover-lift card-glow transition-all duration-300 ${
                    pkg.popular ? "lg:scale-105" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full flex items-center gap-1 animate-pulse-glow">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                      <div className="mb-3">
                        <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    </div>

                    <ul className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-card-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={() => setShowModal(true)}
                    >
                      Select Package
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">All Packages Include</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center hover-lift">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Professional Quality</h3>
                  <p className="text-sm text-muted-foreground">Expert composition and production</p>
                </div>
                <div className="text-center hover-lift">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">24-48 hours turnaround time</p>
                </div>
                <div className="text-center hover-lift">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Original Content</h3>
                  <p className="text-sm text-muted-foreground">No copyrighted music used</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
