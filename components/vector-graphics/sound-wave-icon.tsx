"use client"

export function SoundWaveIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Animated sound waves */}
      <rect x="15" y="40" width="4" height="20" fill="url(#waveGradient)" rx="2">
        <animate attributeName="height" values="20;40;20" dur="1.2s" repeatCount="indefinite" />
        <animate attributeName="y" values="40;30;40" dur="1.2s" repeatCount="indefinite" />
      </rect>
      <rect x="25" y="35" width="4" height="30" fill="url(#waveGradient)" rx="2">
        <animate attributeName="height" values="30;50;30" dur="1s" repeatCount="indefinite" />
        <animate attributeName="y" values="35;25;35" dur="1s" repeatCount="indefinite" />
      </rect>
      <rect x="35" y="30" width="4" height="40" fill="url(#waveGradient)" rx="2">
        <animate attributeName="height" values="40;60;40" dur="0.9s" repeatCount="indefinite" />
        <animate attributeName="y" values="30;20;30" dur="0.9s" repeatCount="indefinite" />
      </rect>
      <rect x="45" y="25" width="4" height="50" fill="url(#waveGradient)" rx="2">
        <animate attributeName="height" values="50;70;50" dur="1.1s" repeatCount="indefinite" />
        <animate attributeName="y" values="25;15;25" dur="1.1s" repeatCount="indefinite" />
      </rect>
      <rect x="55" y="30" width="4" height="40" fill="url(#waveGradient)" rx="2">
        <animate attributeName="height" values="40;60;40" dur="0.95s" repeatCount="indefinite" />
        <animate attributeName="y" values="30;20;30" dur="0.95s" repeatCount="indefinite" />
      </rect>
      <rect x="65" y="35" width="4" height="30" fill="url(#waveGradient)" rx="2">
        <animate attributeName="height" values="30;50;30" dur="1.05s" repeatCount="indefinite" />
        <animate attributeName="y" values="35;25;35" dur="1.05s" repeatCount="indefinite" />
      </rect>
      <rect x="75" y="40" width="4" height="20" fill="url(#waveGradient)" rx="2">
        <animate attributeName="height" values="20;40;20" dur="1.15s" repeatCount="indefinite" />
        <animate attributeName="y" values="40;30;40" dur="1.15s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}
