"use client"

import { useEffect, useRef } from "react"

export function WalkmanWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const w = rect.width
    const h = rect.height
    const centerY = h / 2

    let animationFrame: number
    let offset = 0

    // Classic Sony Walkman-style bars
    const bars = Array.from({ length: 60 }, (_, i) => ({
      x: (i / 59) * w,
      baseHeight: 20 + Math.random() * 30,
      speed: 0.02 + Math.random() * 0.03,
      phase: Math.random() * Math.PI * 2,
    }))

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      offset += 0.5

      // Draw center line
      ctx.strokeStyle = "rgba(34, 211, 238, 0.2)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, centerY)
      ctx.lineTo(w, centerY)
      ctx.stroke()

      // Draw animated bars (Walkman style)
      bars.forEach((bar) => {
        const height = bar.baseHeight * (1 + Math.sin(offset * bar.speed + bar.phase) * 0.5)
        const gradient = ctx.createLinearGradient(bar.x, centerY - height, bar.x, centerY + height)

        gradient.addColorStop(0, "rgba(34, 211, 238, 0.8)")
        gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.9)")
        gradient.addColorStop(1, "rgba(34, 211, 238, 0.8)")

        ctx.fillStyle = gradient
        ctx.fillRect(bar.x - 3, centerY - height / 2, 6, height)

        // Add glow
        ctx.shadowBlur = 8
        ctx.shadowColor = "#22d3ee"
        ctx.fillRect(bar.x - 3, centerY - height / 2, 6, height)
        ctx.shadowBlur = 0
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Crafted with Precision</h2>
            <p className="text-muted-foreground">
              Every signature tune is meticulously composed with studio-quality sound design
            </p>
          </div>

          {/* Walkman Wave Visualization */}
          <div className="relative bg-gradient-to-br from-[#0B1220] to-[#0E1628] rounded-2xl border border-primary/20 p-8 shadow-2xl overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-[200px] md:h-[250px]" />

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent font-medium">LIVE AUDIO SIGNATURE</span>
            </div>

            <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/50 font-mono">EST. 2024</div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">48kHz</div>
              <div className="text-sm text-muted-foreground">Sample Rate</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">24-bit</div>
              <div className="text-sm text-muted-foreground">Audio Depth</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">Studio</div>
              <div className="text-sm text-muted-foreground">Grade Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
