"use client"

import { useState, useEffect } from "react"
import { Music, Award, Star, TrendingUp, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendToWhatsApp } from "@/lib/whatsapp"
import Image from "next/image"

interface Musician {
  id: number
  name: string
  specialty: string
  rating: number
  projects: number
  image: string
  bio: string
  instruments: string[]
}

export function MusiciansClient() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const musicians: Musician[] = [
    {
      id: 1,
      name: "Arjun Mehta",
      specialty: "Classical & Fusion Composer",
      rating: 4.9,
      projects: 500,
      image: "/professional-indian-male-music-composer-with-instr.jpg",
      bio: "15 years creating unforgettable melodies across genres",
      instruments: ["Piano", "Tabla", "Synthesizer"],
    },
    {
      id: 2,
      name: "Sarah Williams",
      specialty: "Corporate Audio Branding Expert",
      rating: 5.0,
      projects: 350,
      image: "/professional-female-audio-producer-in-modern-recor.jpg",
      bio: "Transformed 200+ businesses with signature sounds",
      instruments: ["Audio Production", "Mixing", "Sound Design"],
    },
    {
      id: 3,
      name: "Ravi Kumar",
      specialty: "Spiritual & Devotional Music",
      rating: 4.8,
      projects: 450,
      image: "/indian-male-musician-playing-sitar-in-spiritual-se.jpg",
      bio: "Master of creating transcendent spiritual experiences",
      instruments: ["Sitar", "Flute", "Harmonium"],
    },
    {
      id: 4,
      name: "Lisa Chen",
      specialty: "Modern Pop & EDM Producer",
      rating: 4.9,
      projects: 600,
      image: "/asian-female-music-producer-with-electronic-music-.jpg",
      bio: "Creating viral-worthy beats and energetic compositions",
      instruments: ["DJ Equipment", "DAW", "Synthesizer"],
    },
    {
      id: 5,
      name: "Ahmed Al-Rashid",
      specialty: "World Music & Cultural Fusion",
      rating: 5.0,
      projects: 380,
      image: "/middle-eastern-male-musician-with-traditional-inst.jpg",
      bio: "Bridging cultures through innovative sound design",
      instruments: ["Oud", "Darbuka", "Guitar"],
    },
    {
      id: 6,
      name: "Priya Sharma",
      specialty: "Bollywood & Regional Hits",
      rating: 4.9,
      projects: 520,
      image: "/indian-female-singer-in-professional-recording-boo.jpg",
      bio: "Chart-topping composer with regional expertise",
      instruments: ["Vocals", "Keyboard", "Traditional Instruments"],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % musicians.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [musicians.length])

  const handleBookMusician = async (musician: Musician) => {
    const whatsappData = await sendToWhatsApp({
      message: `I want to book ${musician.name} - ${musician.specialty}`,
      category: "Musician Booking",
    })
    window.open(whatsappData.url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card/20 to-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">World-Class Musicians</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Meet Our Top-Rated Musicians
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Award-winning composers, producers, and sound designers creating extraordinary caller tunes for clients
              worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Auto-Rotating Slideshow */}
      <section className="py-12 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-card shadow-2xl">
              {/* Current Musician Display */}
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="relative h-[400px] rounded-xl overflow-hidden group">
                  <Image
                    src={musicians[currentSlide].image || "/placeholder.svg"}
                    alt={musicians[currentSlide].name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-accent fill-accent" />
                      <span className="text-2xl font-bold text-foreground">{musicians[currentSlide].rating}</span>
                      <span className="text-sm text-muted-foreground">Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {musicians[currentSlide].projects}+ Projects Completed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                      {musicians[currentSlide].name}
                    </h2>
                    <p className="text-lg text-primary font-medium mb-4">{musicians[currentSlide].specialty}</p>
                    <p className="text-muted-foreground leading-relaxed">{musicians[currentSlide].bio}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3">EXPERTISE</h3>
                    <div className="flex flex-wrap gap-2">
                      {musicians[currentSlide].instruments.map((instrument) => (
                        <span
                          key={instrument}
                          className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium"
                        >
                          {instrument}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleBookMusician(musicians[currentSlide])}
                    className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-accent/30 transition-all duration-300"
                  >
                    <Music className="w-5 h-5 mr-2" />
                    Book This Musician
                  </Button>
                </div>
              </div>

              {/* Slideshow Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {musicians.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Musicians Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Complete Musician Roster</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicians.map((musician, index) => (
              <div
                key={musician.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={musician.image || "/placeholder.svg"}
                    alt={musician.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-bold">{musician.rating}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{musician.name}</h3>
                    <p className="text-sm text-primary font-medium">{musician.specialty}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span>{musician.projects}+ Projects</span>
                  </div>
                  <Button
                    onClick={() => handleBookMusician(musician)}
                    className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/30 transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Work With The Best</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our musicians have created thousands of signature caller tunes. Let them craft yours next.
          </p>
          <Button
            onClick={async () => {
              const whatsappData = await sendToWhatsApp({
                message: "I want to work with your top musicians for my caller tune",
                category: "Premium Musician Request",
              })
              window.open(whatsappData.url, "_blank")
            }}
            size="lg"
            className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-bold px-12 py-6 rounded-xl shadow-2xl hover:shadow-accent/40 transition-all duration-300"
          >
            Connect With Our Team
          </Button>
        </div>
      </section>
    </div>
  )
}
