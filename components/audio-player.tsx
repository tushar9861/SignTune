"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AudioPlayerProps {
  src: string
  title: string
  category?: string
}

export function AudioPlayer({ src, title, category }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [hasError, setHasError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
      setHasError(false)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    const handleError = () => {
      setHasError(true)
      setIsPlaying(false)
      console.log("[v0] Audio file not found:", src)
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("error", handleError)
    }
  }, [src])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio || hasError) return

    if (isPlaying) {
      audio.pause()
    } else {
      // Pause all other audio elements
      document.querySelectorAll("audio").forEach((a) => {
        if (a !== audio) {
          a.pause()
        }
      })
      audio.play().catch((err) => {
        console.log("[v0] Playback failed:", err)
        setHasError(true)
        setIsPlaying(false)
      })
    }
    setIsPlaying(!isPlaying)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-card-foreground mb-1">{title}</h3>
          {category && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
              {category}
            </span>
          )}
        </div>
      </div>

      {hasError ? (
        <div className="flex items-center justify-center h-24 bg-secondary/50 rounded-lg border border-dashed border-border">
          <p className="text-sm text-muted-foreground">
            Audio preview coming soon. Add your MP3 file to{" "}
            <code className="text-xs bg-secondary px-1 py-0.5 rounded">{src}</code>
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="default"
              onClick={togglePlayPause}
              className="h-12 w-12 rounded-full group-hover:animate-glow"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {/* Waveform Animation */}
                <div className="flex items-center gap-0.5 h-8">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 bg-primary rounded-full ${isPlaying ? "animate-waveform" : "h-2"}`}
                      style={{
                        animationDelay: `${i * 0.05}s`,
                        height: isPlaying ? undefined : "8px",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-1 bg-secondary rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-primary transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
                <span className="text-xs text-muted-foreground">{formatTime(duration || 25)}</span>
              </div>
            </div>
          </div>

          <audio ref={audioRef} src={src} preload="metadata" />
        </>
      )}
    </div>
  )
}
