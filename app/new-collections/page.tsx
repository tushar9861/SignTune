import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AudioPlayer } from "@/components/audio-player"
import { SignatureStamp } from "@/components/collections/signature-stamp"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Collections - The Sign Tune",
  description: "Explore our latest collection of professionally crafted caller tunes",
}

export default function NewCollectionsPage() {
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
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">New Collections</h1>
              <p className="text-lg text-muted-foreground">
                Discover our latest professionally crafted caller tunes. Each tune is designed to make a lasting
                impression.
              </p>
              <div className="flex justify-center mt-8">
                <SignatureStamp />
              </div>
            </div>
          </div>
        </section>

        {/* Tunes Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {tunes.map((tune) => (
                <AudioPlayer key={tune.id} src={tune.src} title={tune.title} category={tune.category} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
