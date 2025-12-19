"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Music, Sparkles, Play } from "lucide-react"
import { ComingSoonModal } from "@/components/coming-soon-modal"

export function HeroSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-light/5 to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-light/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-16 bg-gradient-to-t from-primary to-accent-light rounded-full animate-waveform"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/3 left-1/3 w-2 h-24 bg-gradient-to-t from-primary to-accent-light rounded-full animate-waveform"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="absolute top-1/4 right-1/3 w-2 h-20 bg-gradient-to-t from-accent-light to-primary rounded-full animate-waveform"
            style={{ animationDelay: "0.4s" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-2 h-28 bg-gradient-to-t from-accent-light to-primary rounded-full animate-waveform"
            style={{ animationDelay: "0.6s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent-light/20 border border-accent-light/30 mb-8 animate-scale-in shadow-lg shadow-accent-light/10">
              <Sparkles className="h-4 w-4 text-accent-light animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">
                Premium Caller Tune Service
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance animate-fade-in-up">
              <span className="bg-gradient-to-r from-foreground via-foreground to-accent-light bg-clip-text text-transparent">
                Your Sound
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent-light via-primary to-foreground bg-clip-text text-transparent">
                Identity
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Create personalized caller tunes that speak before you do.
              <span className="text-accent-light font-semibold"> Professional</span>,
              <span className="text-primary font-semibold"> unique</span>, and
              <span className="text-foreground font-semibold"> unforgettable</span>.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                onClick={() => setShowModal(true)}
                className="text-base px-10 h-14 gap-3 min-w-[240px] bg-gradient-to-r from-primary to-accent-light hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 group"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Explore Tunes
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowModal(true)}
                className="text-base px-10 h-14 min-w-[240px] border-2 border-accent-light/30 hover:bg-accent-light/10 hover:border-accent-light transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Request Custom Tune
              </Button>
            </div>

            <div
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2">
                <Music className="h-5 w-5 text-accent-light" />
                <span>
                  <span className="text-foreground font-semibold">1000+</span> Tunes Created
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>
                  <span className="text-foreground font-semibold">Studio</span> Quality Sound
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5 text-accent-light" />
                <span>
                  <span className="text-foreground font-semibold">24-48hr</span> Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
