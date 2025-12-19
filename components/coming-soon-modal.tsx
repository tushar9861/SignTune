"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/button"

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  const [particles, setParticles] = useState<Array<{ id: number; emoji: string; left: number; delay: number }>>([])

  useEffect(() => {
    if (isOpen) {
      const musicEmojis = ["🎵", "🎶", "🎸", "🎹", "🎺", "🎷", "🥁", "🎤", "🎧", "🎼"]
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        emoji: musicEmojis[Math.floor(Math.random() * musicEmojis.length)],
        left: Math.random() * 100,
        delay: Math.random() * 2,
      }))
      setParticles(newParticles)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-md w-full mx-4 bg-gradient-to-br from-card via-card to-primary/10 rounded-2xl shadow-2xl border border-accent-light/30 p-8 animate-scale-in overflow-hidden">
        {/* Animated musical particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-2xl animate-float-music pointer-events-none"
            style={{
              left: `${particle.left}%`,
              top: "-10%",
              animationDelay: `${particle.delay}s`,
            }}
          >
            {particle.emoji}
          </div>
        ))}

        {/* Close button */}
        <Button
          size="icon"
          variant="ghost"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full hover:bg-destructive/20"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Content */}
        <div className="text-center relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="text-6xl animate-bounce">🎵</div>
              <div className="absolute -top-2 -right-2 text-3xl animate-spin-slow">🎶</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent-light via-primary to-purple-400 bg-clip-text text-transparent">
            Coming Soon!
          </h2>

          <p className="text-lg text-muted-foreground mb-2">Our developer is currently on vacation 🏖️</p>

          <p className="text-base text-foreground/80 mb-6">
            This amazing feature will be available shortly. Stay tuned! 🎶
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-accent-light font-medium mb-6">
            <span className="animate-pulse">🎸</span>
            <span>Full service launching soon</span>
            <span className="animate-pulse">🎹</span>
          </div>

          <Button
            onClick={onClose}
            size="lg"
            className="w-full bg-gradient-to-r from-accent-light to-primary hover:shadow-lg hover:shadow-accent-light/30"
          >
            Got It!
          </Button>
        </div>

        {/* Animated waves at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden opacity-20">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,50 C150,80 350,20 600,50 C850,80 1050,20 1200,50 L1200,120 L0,120 Z"
              fill="currentColor"
              className="text-accent-light animate-wave"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
