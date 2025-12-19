"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollAnimationWrapper({ children, className = "", delay = 0 }: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`scroll-fade-in ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  )
}
