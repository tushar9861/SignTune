"use client"

import { useEffect, useRef, useState } from "react"

interface MapPin {
  country: string
  x: number
  y: number
  region: "Asia" | "USA" | "Europe" | "India" | "Middle East"
}

export function GlobalSoundMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Map pins positioned on a stylized world map (percentage-based positioning)
  const pins: MapPin[] = [
    // Asia
    { country: "Japan", x: 85, y: 35, region: "Asia" },
    { country: "South Korea", x: 84, y: 38, region: "Asia" },
    { country: "China", x: 75, y: 35, region: "Asia" },
    { country: "Thailand", x: 73, y: 50, region: "Asia" },
    { country: "Singapore", x: 74, y: 58, region: "Asia" },
    { country: "Philippines", x: 82, y: 52, region: "Asia" },
    { country: "Vietnam", x: 74, y: 48, region: "Asia" },
    { country: "Indonesia", x: 77, y: 60, region: "Asia" },
    { country: "Malaysia", x: 74, y: 55, region: "Asia" },
    { country: "Hong Kong", x: 78, y: 42, region: "Asia" },

    // India
    { country: "India", x: 67, y: 48, region: "India" },

    // Middle East
    { country: "UAE", x: 60, y: 48, region: "Middle East" },
    { country: "Saudi Arabia", x: 58, y: 46, region: "Middle East" },
    { country: "Qatar", x: 59, y: 47, region: "Middle East" },

    // USA
    { country: "USA West", x: 15, y: 38, region: "USA" },
    { country: "USA East", x: 25, y: 40, region: "USA" },

    // Europe
    { country: "UK", x: 42, y: 28, region: "Europe" },
    { country: "Germany", x: 47, y: 28, region: "Europe" },
    { country: "France", x: 45, y: 32, region: "Europe" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("global-sound-map")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !isVisible) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const w = rect.width
    const h = rect.height

    let animationFrame: number
    const pulses: Array<{ x: number; y: number; radius: number; alpha: number }> = []

    pins.forEach((pin, index) => {
      setTimeout(() => {
        pulses.push({
          x: (pin.x / 100) * w,
          y: (pin.y / 100) * h,
          radius: 0,
          alpha: 1,
        })
      }, index * 100)
    })

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      // Draw map base (simplified continents with vector paths)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.15)"
      ctx.lineWidth = 1
      ctx.fillStyle = "rgba(14, 22, 40, 0.6)"

      // Simplified Asia
      ctx.beginPath()
      ctx.moveTo(w * 0.6, h * 0.3)
      ctx.quadraticCurveTo(w * 0.75, h * 0.25, w * 0.85, h * 0.35)
      ctx.lineTo(w * 0.88, h * 0.55)
      ctx.quadraticCurveTo(w * 0.8, h * 0.65, w * 0.72, h * 0.58)
      ctx.lineTo(w * 0.65, h * 0.5)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Simplified Europe
      ctx.beginPath()
      ctx.moveTo(w * 0.4, h * 0.25)
      ctx.quadraticCurveTo(w * 0.48, h * 0.22, w * 0.52, h * 0.28)
      ctx.lineTo(w * 0.5, h * 0.35)
      ctx.quadraticCurveTo(w * 0.45, h * 0.38, w * 0.42, h * 0.32)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Simplified Americas
      ctx.beginPath()
      ctx.moveTo(w * 0.12, h * 0.35)
      ctx.quadraticCurveTo(w * 0.15, h * 0.3, w * 0.2, h * 0.32)
      ctx.lineTo(w * 0.25, h * 0.45)
      ctx.quadraticCurveTo(w * 0.22, h * 0.55, w * 0.18, h * 0.6)
      ctx.lineTo(w * 0.14, h * 0.5)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Draw and animate pulses
      pulses.forEach((pulse) => {
        pulse.radius += 1.5
        pulse.alpha -= 0.008

        if (pulse.alpha > 0) {
          // Outer ripple
          ctx.beginPath()
          ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(34, 211, 238, ${pulse.alpha * 0.6})`
          ctx.lineWidth = 2
          ctx.stroke()

          // Inner glow
          const gradient = ctx.createRadialGradient(pulse.x, pulse.y, 0, pulse.x, pulse.y, pulse.radius * 0.5)
          gradient.addColorStop(0, `rgba(34, 211, 238, ${pulse.alpha * 0.3})`)
          gradient.addColorStop(1, `rgba(34, 211, 238, 0)`)
          ctx.fillStyle = gradient
          ctx.fill()
        } else {
          pulse.radius = 0
          pulse.alpha = 1
        }
      })

      // Draw pins
      pins.forEach((pin) => {
        const x = (pin.x / 100) * w
        const y = (pin.y / 100) * h

        // Pin glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8)
        gradient.addColorStop(0, "rgba(34, 211, 238, 0.8)")
        gradient.addColorStop(1, "rgba(34, 211, 238, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fill()

        // Pin dot
        ctx.fillStyle = "#22d3ee"
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [isVisible])

  return (
    <section
      id="global-sound-map"
      className="py-20 md:py-28 bg-gradient-to-b from-transparent via-primary/5 to-transparent overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Global Sound Identity</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              SignTune reaches across continents, creating unique sound signatures for clients worldwide
            </p>
          </div>

          {/* Map Canvas */}
          <div className="relative">
            <canvas
              ref={canvasRef}
              className="w-full h-[400px] md:h-[500px] rounded-2xl bg-gradient-to-br from-[#0B1220] to-[#0E1628] border border-primary/20 shadow-2xl"
            />

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-3 text-xs space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-muted-foreground">Active Regions</span>
              </div>
              <div className="text-[10px] text-muted-foreground/70 mt-2">{pins.length}+ Countries Served</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Asian Markets</div>
            </div>
            <div className="text-center p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">3</div>
              <div className="text-sm text-muted-foreground">Continents</div>
            </div>
            <div className="text-center p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Global Service</div>
            </div>
            <div className="text-center p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Original Audio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
