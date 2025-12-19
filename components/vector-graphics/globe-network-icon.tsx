"use client"

export function GlobeNetworkIcon({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Globe circle */}
      <circle cx="50" cy="50" r="35" fill="none" stroke="url(#globeGradient)" strokeWidth="2" opacity="0.6">
        <animate attributeName="r" values="35;37;35" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Latitude lines */}
      <ellipse cx="50" cy="50" rx="35" ry="10" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
      <ellipse cx="50" cy="50" rx="35" ry="20" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.3" />

      {/* Longitude lines */}
      <ellipse cx="50" cy="50" rx="10" ry="35" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
      <ellipse cx="50" cy="50" rx="20" ry="35" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.3" />

      {/* Network nodes */}
      <circle cx="30" cy="30" r="3" fill="#22d3ee">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="35" r="3" fill="#3b82f6">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="70" r="3" fill="#22d3ee">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="65" r="3" fill="#3b82f6">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Connection lines */}
      <line x1="30" y1="30" x2="70" y2="35" stroke="#22d3ee" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="70" y1="35" x2="65" y2="65" stroke="#3b82f6" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </line>
    </svg>
  )
}
