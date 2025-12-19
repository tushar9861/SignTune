"use client"

export function MusicalInstrumentArt() {
  return (
    <div className="relative w-full max-w-md mx-auto animate-float">
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
        {/* Guitar */}
        <g className="animate-tilt">
          <ellipse cx="200" cy="200" rx="80" ry="100" fill="url(#guitarGradient)" />
          <ellipse cx="200" cy="200" rx="50" ry="65" fill="#1e293b" />
          <rect x="195" y="100" width="10" height="120" fill="url(#neckGradient)" rx="5" />
          {/* Strings */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={i}
              x1="200"
              y1="100"
              x2="200"
              y2="300"
              stroke="#22d3ee"
              strokeWidth="1"
              opacity="0.6"
              transform={`translate(${(i - 2.5) * 3}, 0)`}
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </g>

        {/* Music Notes */}
        <g className="animate-bounce" style={{ animationDelay: "0.5s" }}>
          <circle cx="100" cy="100" r="15" fill="url(#noteGradient)" />
          <rect x="113" y="60" width="4" height="45" fill="#3b82f6" />
        </g>

        <g className="animate-bounce" style={{ animationDelay: "0.7s" }}>
          <circle cx="300" cy="120" r="12" fill="url(#noteGradient)" />
          <rect x="310" y="85" width="4" height="40" fill="#3b82f6" />
        </g>

        {/* Sound Waves */}
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M ${50 + i * 30} 300 Q ${100 + i * 30} 280, ${150 + i * 30} 300`}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="3"
            opacity={0.4 - i * 0.1}
            className="animate-wave"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="guitarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="neckGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <linearGradient id="noteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
