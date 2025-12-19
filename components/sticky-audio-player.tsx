"use client"

import { useState, useEffect } from "react"
import { Play, Pause, Music2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StickyAudioPlayerProps {
  currentTrack?: {
    title: string
    category: string
    isPlaying: boolean
  }
  onClose?: () => void
}

export function StickyAudioPlayer({ currentTrack, onClose }: StickyAudioPlayerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (currentTrack && currentTrack.isPlaying) {
      setIsVisible(true)
      // Simulate progress
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
      }, 250)
      return () => clearInterval(interval)
    }
  }, [currentTrack])

  if (!isVisible || !currentTrack) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-accent-light/20 shadow-2xl animate-slide-in-up">
      {/* Progress bar with accent-light color */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-secondary">
        <div className="h-full bg-accent-light transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-light to-primary flex items-center justify-center animate-pulse-glow">
              <Music2 className="w-5 h-5 text-background" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-foreground truncate">{currentTrack.title}</p>
              <p className="text-xs text-accent-light">{currentTrack.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Waveform visualization */}
            <div className="hidden sm:flex items-center gap-0.5 h-6 mr-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-accent-light rounded-full animate-waveform"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full hover:bg-accent-light/20"
              onClick={onClose}
            >
              {currentTrack.isPlaying ? (
                <Pause className="h-4 w-4 text-accent-light" />
              ) : (
                <Play className="h-4 w-4 text-accent-light" />
              )}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full hover:bg-destructive/20"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
