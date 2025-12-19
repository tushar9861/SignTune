"use client"

import { useState } from "react"
import { Zap, Heart, Sparkles, Briefcase, TrendingUp } from "lucide-react"
import { AudioPlayer } from "./audio-player"
import { Button } from "./ui/button"

const soundCategories = [
  { id: "energetic", name: "Energetic", icon: Zap, color: "text-accent-light" },
  { id: "calm", name: "Calm", icon: Heart, color: "text-blue-400" },
  { id: "spiritual", name: "Spiritual", icon: Sparkles, color: "text-purple-400" },
  { id: "corporate", name: "Corporate", icon: Briefcase, color: "text-cyan-400" },
  { id: "trendy", name: "Trendy", icon: TrendingUp, color: "text-pink-400" },
]

const sampleTunes = {
  energetic: [
    { src: "/audio/energetic-1.mp3", title: "Power Intro", category: "Energetic" },
    { src: "/audio/energetic-2.mp3", title: "Dynamic Vibe", category: "Energetic" },
    { src: "/audio/energetic-3.mp3", title: "Upbeat Welcome", category: "Energetic" },
  ],
  calm: [
    { src: "/audio/calm-1.mp3", title: "Peaceful Greet", category: "Calm" },
    { src: "/audio/calm-2.mp3", title: "Soft Melody", category: "Calm" },
    { src: "/audio/calm-3.mp3", title: "Tranquil Intro", category: "Calm" },
  ],
  spiritual: [
    { src: "/audio/spiritual-1.mp3", title: "Sacred Sound", category: "Spiritual" },
    { src: "/audio/spiritual-2.mp3", title: "Divine Tune", category: "Spiritual" },
    { src: "/audio/spiritual-3.mp3", title: "Meditative Voice", category: "Spiritual" },
  ],
  corporate: [
    { src: "/audio/corporate-1.mp3", title: "Professional Greeting", category: "Corporate" },
    { src: "/audio/corporate-2.mp3", title: "Business Tone", category: "Corporate" },
    { src: "/audio/corporate-3.mp3", title: "Executive Voice", category: "Corporate" },
  ],
  trendy: [
    { src: "/audio/trendy-1.mp3", title: "Modern Intro", category: "Trendy" },
    { src: "/audio/trendy-2.mp3", title: "Fresh Sound", category: "Trendy" },
    { src: "/audio/trendy-3.mp3", title: "Urban Vibe", category: "Trendy" },
  ],
}

export function TryMySoundPanel() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-light/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Try <span className="text-accent-light">My Sound</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collections and find your perfect sound identity
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {soundCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="lg"
                className={`scroll-fade-in transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-accent-light text-accent-light-foreground shadow-lg shadow-accent-light/30"
                    : "border-accent-light/30 hover:border-accent-light"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Icon className={`mr-2 h-5 w-5 ${selectedCategory === category.id ? "" : category.color}`} />
                {category.name}
              </Button>
            )
          })}
        </div>

        {/* Audio samples */}
        {selectedCategory && (
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            {sampleTunes[selectedCategory as keyof typeof sampleTunes].map((tune, idx) => (
              <div key={idx} className="animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <AudioPlayer src={tune.src} title={tune.title} category={tune.category} />
              </div>
            ))}
          </div>
        )}

        {!selectedCategory && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Select a category above to explore samples</p>
          </div>
        )}
      </div>
    </section>
  )
}
