"use client"

import { useState, useEffect } from "react"
import { Sparkles, Play, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendToWhatsApp } from "@/lib/whatsapp"
import Image from "next/image"

interface FeaturedTune {
  id: number
  title: string
  category: string
  artist: string
  image: string
  plays: string
  likes: string
}

export function ThisWeekFeatured() {
  const [activeIndex, setActiveIndex] = useState(0)

  const featured: FeaturedTune[] = [
    {
      id: 1,
      title: "Morning Motivation",
      category: "Corporate",
      artist: "Arjun Mehta",
      image: "/energetic-morning-sunrise-with-musical-notes.jpg",
      plays: "2.5K",
      likes: "850",
    },
    {
      id: 2,
      title: "Serene Harmony",
      category: "Spiritual",
      artist: "Ravi Kumar",
      image: "/peaceful-spiritual-meditation-with-sound-waves.jpg",
      plays: "1.8K",
      likes: "720",
    },
    {
      id: 3,
      title: "Urban Beats",
      category: "Trendy",
      artist: "Lisa Chen",
      image: "/modern-urban-cityscape-with-vibrant-music-elements.jpg",
      plays: "3.2K",
      likes: "1.1K",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featured.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [featured.length])

  const handleRequestSimilar = async (tune: FeaturedTune) => {
    const whatsappData = await sendToWhatsApp({
      message: `I love "${tune.title}" by ${tune.artist}. Can you create something similar for me?`,
      category: "Featured Tune Request",
    })
    window.open(whatsappData.url, "_blank")
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-accent/5 via-primary/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">This Week's Trending</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
            Featured Caller Tunes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most loved and trending caller tunes created by our musicians this week
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((tune, index) => (
              <div
                key={tune.id}
                className={`group relative bg-card border rounded-2xl overflow-hidden transition-all duration-700 ${
                  index === activeIndex
                    ? "border-accent shadow-2xl shadow-accent/30 scale-105 md:scale-110"
                    : "border-border hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tune.image || "/placeholder.svg"}
                    alt={tune.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                  {/* Featured Badge */}
                  {index === activeIndex && (
                    <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
                      FEATURED NOW
                    </div>
                  )}

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors duration-300">
                      {tune.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">{tune.category}</p>
                    <p className="text-xs text-muted-foreground mt-1">by {tune.artist}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      <span>{tune.plays}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                      <span>{tune.likes}</span>
                    </div>
                    <button className="ml-auto hover:text-accent transition-colors duration-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  <Button
                    onClick={() => handleRequestSimilar(tune)}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold transition-all duration-300"
                  >
                    Request Similar Tune
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Slideshow Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {featured.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-12 bg-accent" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
