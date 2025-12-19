import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Package, MessageSquare, Music2, Mail } from "lucide-react"

export function HowItWorksPreview() {
  const steps = [
    {
      icon: Package,
      title: "Select Package",
      description: "Choose from our flexible pricing options",
    },
    {
      icon: MessageSquare,
      title: "Share Requirements",
      description: "Tell us your preferences and style",
    },
    {
      icon: Music2,
      title: "We Compose",
      description: "Our experts create your unique tune",
    },
    {
      icon: Mail,
      title: "Delivered via Email",
      description: "Receive your tune within 24-48 hours",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your personalized caller tune in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-card border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                <step.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/how-it-works">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
