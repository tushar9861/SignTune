"use client"

import { useEffect, useState } from "react"

export function SignatureStamp() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative inline-block">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="drop-shadow-lg"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Outer circle with glow */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="stampGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Outer decorative circle */}
        <circle cx="60" cy="60" r="55" fill="none" stroke="url(#stampGradient)" strokeWidth="2" opacity="0.3" />

        {/* Main stamp circle */}
        <circle cx="60" cy="60" r="50" fill="none" stroke="url(#stampGradient)" strokeWidth="3" filter="url(#glow)" />

        {/* Inner decorative circle */}
        <circle cx="60" cy="60" r="42" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />

        {/* Center icon - Sound wave */}
        <path
          d="M 40 60 Q 45 50, 50 60 T 60 60 T 70 60 T 80 60"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Decorative stars */}
        <path
          d="M 60 25 L 62 30 L 67 30 L 63 33 L 65 38 L 60 35 L 55 38 L 57 33 L 53 30 L 58 30 Z"
          fill="#22d3ee"
          opacity="0.6"
        />

        {/* Text path for circular text */}
        <defs>
          <path id="circlePath" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
        </defs>
        <text className="text-[9px] fill-accent font-semibold tracking-wider" style={{ fontFamily: "sans-serif" }}>
          <textPath href="#circlePath" startOffset="25%">
            CRAFTED BY SIGNTUNE
          </textPath>
        </text>

        {/* Bottom text */}
        <text
          x="60"
          y="78"
          textAnchor="middle"
          className="text-[7px] fill-accent/80 font-medium"
          style={{ fontFamily: "sans-serif" }}
        >
          CERTIFIED ORIGINAL
        </text>
      </svg>

      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-accent/10 animate-ping" style={{ animationDuration: "3s" }} />
    </div>
  )
}
