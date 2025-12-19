"use client"

export function MusicNoteIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="noteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="noteGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Musical note */}
      <path
        d="M 70 20 L 70 60 M 70 20 Q 85 25 85 35 L 85 65"
        stroke="url(#noteGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        filter="url(#noteGlow)"
      >
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Note heads */}
      <ellipse cx="70" cy="70" rx="10" ry="7" fill="url(#noteGradient)" filter="url(#noteGlow)">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;1.1;1"
          dur="2s"
          repeatCount="indefinite"
          additive="sum"
        />
      </ellipse>
      <ellipse cx="85" cy="75" rx="10" ry="7" fill="url(#noteGradient)" filter="url(#noteGlow)">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;1.1;1"
          dur="2s"
          begin="0.3s"
          repeatCount="indefinite"
          additive="sum"
        />
      </ellipse>

      {/* Floating particles */}
      <circle cx="40" cy="30" r="2" fill="#22d3ee" opacity="0.6">
        <animate attributeName="cy" values="30;20;30" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="50" r="1.5" fill="#3b82f6" opacity="0.5">
        <animate attributeName="cy" values="50;40;50" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
