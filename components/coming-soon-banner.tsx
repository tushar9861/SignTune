"use client"

import { Sparkles } from "lucide-react"

export function ComingSoonBanner() {
  return (
    <div className="bg-gradient-to-r from-accent-light/20 via-primary/20 to-purple-500/20 border-b border-accent-light/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3 text-center">
          <Sparkles className="h-5 w-5 text-accent-light animate-pulse" />
          <p className="text-sm md:text-base font-medium text-foreground">
            🎵 <span className="text-accent-light font-bold">Coming Soon!</span> Our developer is on vacation. Full
            service launches shortly! 🎶
          </p>
          <Sparkles className="h-5 w-5 text-accent-light animate-pulse" />
        </div>
      </div>
    </div>
  )
}
