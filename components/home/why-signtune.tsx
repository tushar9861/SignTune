"use client"

import { useEffect, useRef } from "react"
import { Sparkles, Music2, Users, Shield } from "lucide-react"

export function WhySignTune() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Music2,
      title: "Studio Quality Sound",
      description: "Professional audio production with crystal-clear quality that makes every call memorable",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Users,
      title: "Composer-Driven Craft",
      description: "Real musicians creating authentic tunes tailored to your personality and brand identity",
      gradient: "from-cyan-400 to-teal-400",
    },
    {
      icon: Sparkles,
      title: "Unlimited Creativity",
      description: "From corporate anthems to personal jingles, we bring your audio vision to life",
      gradient: "from-teal-400 to-blue-500",
    },
    {
      icon: Shield,
      title: "100% Original Content",
      description: "Copyright-free music crafted exclusively for you, no licensing worries ever",
      gradient: "from-blue-500 to-purple-500",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/10 border border-accent-light/20 mb-6">
            <Sparkles className="h-4 w-4 text-accent-light" />
            <span className="text-sm font-medium text-accent-light">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">The SignTune Difference</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Premium caller tunes crafted by professional composers, designed to elevate your audio identity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="scroll-fade-in hover-lift card-glow group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative p-8 rounded-2xl bg-card border border-border/50 h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-light transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
