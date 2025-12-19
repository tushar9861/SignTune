"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 400)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Transition overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background pointer-events-none transition-opacity duration-400 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: isTransitioning ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.4s ease",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent-light/20 to-primary/20 animate-shimmer" />
      </div>

      {/* Content with fade */}
      <div className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </>
  )
}
