"use client"

import { useState, useEffect } from "react"
import { Quote, Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company?: string
  content: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number
}

export function TestimonialCarousel({ testimonials, autoPlayInterval = 6000 }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [testimonials.length, autoPlayInterval])

  return (
    <div className="relative w-full">
      <div className="relative min-h-[300px] flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center text-center p-8 md:p-12">
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-full bg-accent-light/10 flex items-center justify-center mb-6 animate-scale-in">
                <Quote className="w-8 h-8 text-accent-light" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "fill-accent-light text-accent-light" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-foreground mb-6 max-w-3xl leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                  {testimonial.company && ` at ${testimonial.company}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-12 bg-accent-light" : "w-8 bg-muted-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
