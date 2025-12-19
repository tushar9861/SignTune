"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselItem {
  id: number
  image?: string
  title: string
  description: string
  cta?: string
}

interface AutoCarouselProps {
  items: CarouselItem[]
  autoPlayInterval?: number
  onCTAClick?: (item: CarouselItem) => void
}

export function AutoCarousel({ items, autoPlayInterval = 5000, onCTAClick }: AutoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [items.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 shadow-xl border border-border/50">
      {/* Slides */}
      <div className="relative h-[400px] md:h-[500px]">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full p-8 md:p-12 text-center relative overflow-hidden">
              {/* Animated background particles */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-light/30 rounded-full blur-3xl animate-float" />
                <div
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-float"
                  style={{ animationDelay: "2s" }}
                />
              </div>

              <div className="relative z-10 max-w-3xl">
                <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">{item.title}</h3>
                <p
                  className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {item.description}
                </p>
                {item.cta && (
                  <Button
                    size="lg"
                    className="bg-accent-light hover:bg-accent-light/90 text-primary-foreground shadow-lg shadow-accent-light/20 animate-scale-in"
                    style={{ animationDelay: "0.4s" }}
                    onClick={() => onCTAClick?.(item)}
                  >
                    {item.cta}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-card/80 backdrop-blur-sm border border-border/50 rounded-full hover:bg-card transition-all hover:scale-110 shadow-lg z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-card/80 backdrop-blur-sm border border-border/50 rounded-full hover:bg-card transition-all hover:scale-110 shadow-lg z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-accent-light" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
