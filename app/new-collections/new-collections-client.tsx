"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AudioPlayer } from "@/components/audio-player"
import { SignatureStamp } from "@/components/collections/signature-stamp"
import { SoundWaveArt } from "@/components/vector-art/sound-wave-art"
import { MusicalInstrumentArt } from "@/components/vector-art/musical-instrument-art"

export default function NewCollectionsPageClient() {
  const tunes = [
    {
      id: 1,
      title: "Professional Greeting",
      category: "Business",
      src: "/audio/professional-greeting.mp3",
    },
    {
      id: 2,
      title: "Calm & Composed",
      category: "Personal",
      src: "/audio/calm-composed.mp3",
    },
    {
      id: 3,
      title: "Energetic Vibe",
      category: "Energetic",
      src: "/audio/energetic-vibe.mp3",
    },
    {
      id: 4,
      title: "Spiritual Harmony",
      category: "Spiritual",
      src: "/audio/spiritual-harmony.mp3",
    },
    {
      id: 5,
      title: "Corporate Excellence",
      category: "Business",
      src: "/audio/corporate-excellence.mp3",
    },
    {
      id: 6,
      title: "Festive Celebration",
      category: "Festival",
      src: "/audio/festive-celebration.mp3",
    },
    {
      id: 7,
      title: "Modern Minimalist",
      category: "Professional",
      src: "/audio/modern-minimalist.mp3",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent relative overflow-hidden">
          {/* <CHANGE> Add animated vector art background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <SoundWaveArt className="absolute top-0 left-0 w-full h-32 animate-wave-flow" />
            <SoundWaveArt
              className="absolute bottom-0 left-0 w-full h-32 animate-wave-flow"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="absolute top-1/2 left-10 opacity-10 animate-float">
            <MusicalInstrumentArt />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
                New Collections
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Discover our latest professionally crafted caller tunes. Each tune is designed to make a lasting
                impression.
              </p>
              <div className="flex justify-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <SignatureStamp />
              </div>
            </div>
          </div>
        </section>

        {/* Tunes Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {tunes.map((tune, index) => (
                <div key={tune.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <AudioPlayer src={tune.src} title={tune.title} category={tune.category} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
