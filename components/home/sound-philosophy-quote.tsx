"use client"

import { useEffect, useRef } from "react"

export function SoundPhilosophyQuote() {
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

    let animationFrame: number
    let offset = 0

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      offset += 0.3

      // Draw flowing sound waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 - i * 0.04})`
        ctx.lineWidth = 2

        for (let x = 0; x < w; x += 5) {
          const y = h / 2 + Math.sin((x + offset + i * 50) * 0.01) * (30 + i * 15)
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <div className="relative">
            {/* Opening Quote Mark */}
            <div className="absolute -top-8 -left-4 md:-left-12 text-6xl md:text-8xl text-accent/20 font-serif">"</div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
              <span className="inline-block bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Sound is the first signature
              </span>
              <br />
              <span className="text-accent">of identity</span>
            </h2>

            {/* Closing Quote Mark */}
            <div className="absolute -bottom-8 -right-4 md:-right-12 text-6xl md:text-8xl text-accent/20 font-serif">
              "
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
            Every voice tells a story. Every sound creates a memory. Your audio identity should be as unique as you are.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-700" />
    </section>
  )
}
