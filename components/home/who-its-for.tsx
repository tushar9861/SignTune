"use client"

import { useEffect, useRef } from "react"
import { Briefcase, Heart, Mic, Zap } from "lucide-react"

export function WhoItsFor() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const audiences = [
    {
      icon: Briefcase,
      title: "Business Professionals",
      description: "Make every business call count with a professional tune that reflects your brand",
      color: "text-blue-400",
    },
    {
      icon: Mic,
      title: "Artists & Creators",
      description: "Showcase your artistry with custom tunes that match your creative identity",
      color: "text-cyan-400",
    },
    {
      icon: Heart,
      title: "Personal Expression",
      description: "Express yourself with tunes that tell your story before you say hello",
      color: "text-teal-400",
    },
    {
      icon: Zap,
      title: "Brands & Startups",
      description: "Build brand recognition with memorable audio that sticks in minds",
      color: "text-purple-400",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-card/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Who It's For</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Whether you're building a brand or expressing yourself, SignTune has the perfect sound for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className="scroll-fade-in hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm h-full text-center transition-all duration-300 group-hover:border-accent-light/50">
                  <div className="inline-flex p-4 rounded-full bg-background/80 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${audience.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
