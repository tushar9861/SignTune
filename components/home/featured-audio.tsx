import { AudioPlayer } from "@/components/audio-player"

export function FeaturedAudio() {
  const featuredTunes = [
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
  ]

  return (
    <section className="py-16 md:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Caller Tunes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Listen to our handpicked collection of professionally crafted caller tunes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {featuredTunes.map((tune) => (
            <AudioPlayer key={tune.id} src={tune.src} title={tune.title} category={tune.category} />
          ))}
        </div>
      </div>
    </section>
  )
}
