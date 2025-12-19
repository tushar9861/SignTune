"use client"

export function SoundWaveArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 800 200" className="w-full h-full">
        {/* Multiple layered sound waves */}
        {[0, 1, 2, 3, 4].map((layer) => (
          <g key={layer} opacity={1 - layer * 0.15}>
            <path
              d={`M 0 100 Q 50 ${50 + layer * 10}, 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100`}
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth={4 - layer * 0.5}
              className="animate-wave-flow"
              style={{ animationDelay: `${layer * 0.15}s` }}
            />
          </g>
        ))}

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <circle
            key={i}
            cx={i * 60}
            cy={Math.random() * 200}
            r={Math.random() * 3 + 1}
            fill="#22d3ee"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}

        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
