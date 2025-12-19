"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Globe, Zap } from "lucide-react"

interface Region {
  id: number
  name: string
  clients: string
  x: number
  y: number
}

export function GlobalSoundMap() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeRegions, setActiveRegions] = useState<number[]>([])

  const regions = [
    { id: 1, name: "North America", clients: "500+", x: 15, y: 35 },
    { id: 2, name: "Europe", clients: "800+", x: 45, y: 30 },
    { id: 3, name: "Middle East", clients: "600+", x: 58, y: 45 },
    { id: 4, name: "India", clients: "1200+", x: 67, y: 48 },
    { id: 5, name: "Southeast Asia", clients: "900+", x: 75, y: 52 },
    { id: 6, name: "East Asia", clients: "700+", x: 82, y: 38 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          regions.forEach((region, index) => {
            setTimeout(() => {
              setActiveRegions((prev) => [...prev, region.id])
            }, index * 300)
          })
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("global-sound-map")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="global-sound-map"
      className="py-20 md:py-28 bg-gradient-to-b from-transparent via-primary/5 to-transparent overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-primary animate-spin-slow" />
              <span className="text-sm font-medium text-primary">Global Reach</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Serving Clients Across 6 Continents</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              SignTune creates unique sound signatures for clients worldwide, from corporate giants to individuals
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl bg-gradient-to-br from-[#0B1220] to-[#0E1628]">
              <Image src="/world-map-dark-blue-theme-with-glowing-continents.jpg" alt="Global Map" fill className="object-cover opacity-60" />

              {/* Animated Pins */}
              {regions.map((region) => (
                <div
                  key={region.id}
                  className={`absolute transition-all duration-500 ${
                    activeRegions.includes(region.id) ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{ left: `${region.x}%`, top: `${region.y}%` }}
                >
                  <div className="relative group cursor-pointer">
                    {/* Pulsing Circle */}
                    <div className="absolute inset-0 -m-4">
                      <div className="w-8 h-8 rounded-full bg-accent/30 animate-ping" />
                    </div>

                    {/* Pin Icon */}
                    {/* MapPin icon is imported from lucide-react, but not used here. */}
                    {/* Placeholder for MapPin icon if needed. */}
                    {/* <MapPin className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-bounce" /> */}

                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-background/95 backdrop-blur-sm border border-accent/30 rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                        <p className="text-sm font-bold text-foreground">{region.name}</p>
                        <p className="text-xs text-accent">{region.clients} Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
                    <stop offset="50%" stopColor="rgba(34, 211, 238, 0.6)" />
                    <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
                  </linearGradient>
                </defs>
                {regions.slice(0, -1).map((region, index) => {
                  const nextRegion = regions[index + 1]
                  return (
                    <line
                      key={`line-${region.id}`}
                      x1={`${region.x}%`}
                      y1={`${region.y}%`}
                      x2={`${nextRegion.x}%`}
                      y2={`${nextRegion.y}%`}
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      className={`transition-opacity duration-1000 ${
                        activeRegions.includes(region.id) && activeRegions.includes(nextRegion.id)
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  )
                })}
              </svg>
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-accent animate-pulse" />
                <div>
                  <p className="text-2xl font-bold text-foreground">4,800+</p>
                  <p className="text-xs text-muted-foreground">Global Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: "Countries Served", value: "25+" },
              { label: "Languages", value: "15+" },
              { label: "Time Zones", value: "24/7" },
              { label: "Satisfaction", value: "98%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
