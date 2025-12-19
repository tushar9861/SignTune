import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Package, MessageSquare, Music2, Mail, CheckCircle } from "lucide-react"
import { SoundWaveIcon } from "@/components/vector-graphics/sound-wave-icon"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works - The Sign Tune",
  description: "Learn how to get your personalized caller tune in simple steps",
}

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Package,
      title: "Choose Tune Type",
      description:
        "Browse our collection or request a custom tune. Select from various packages designed to fit your needs and budget.",
      features: ["Browse existing tunes", "Choose package tier", "Select customization level"],
    },
    {
      icon: MessageSquare,
      title: "Customize Details",
      description:
        "Share your preferences including language, mood, name or brand, and any special instructions for your tune.",
      features: ["Specify language preference", "Select mood and style", "Add personal touches"],
    },
    {
      icon: Music2,
      title: "Place Order",
      description:
        "Submit your order through our simple form. Our team will review your requirements and begin the composition process.",
      features: ["Fill out order form", "Review your details", "Submit request"],
    },
    {
      icon: Music2,
      title: "Composition by Experts",
      description:
        "Our professional composers create your unique caller tune based on your specifications. Quality and originality guaranteed.",
      features: ["Expert composition", "Quality assurance", "Multiple revisions if needed"],
    },
    {
      icon: Mail,
      title: "Email Delivery",
      description: "Receive your completed caller tune via email within 24-48 hours. Ready to use and uniquely yours.",
      features: ["Fast delivery", "High-quality audio file", "Usage instructions included"],
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Vector Graphics */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent relative overflow-hidden">
          <div className="absolute top-10 right-10 opacity-20 animate-float">
            <SoundWaveIcon className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-15 animate-float" style={{ animationDelay: "1s" }}>
            <SoundWaveIcon className="w-24 h-24" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">How It Works</h1>
              <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Get your personalized caller tune in five simple steps. Professional, fast, and hassle-free.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section with enhanced motion */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row gap-6 bg-card border border-border rounded-lg p-6 md:p-8 hover-lift card-glow transition-all duration-300"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg animate-pulse-glow">
                    {index + 1}
                  </div>

                  {/* Icon with animation */}
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-card-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-8 bottom-0 translate-y-full h-12 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Choose a package and create your unique caller tune today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/packages">
                  <Button size="lg">View Packages</Button>
                </Link>
                <Link href="/book-your-tune">
                  <Button size="lg" variant="outline">
                    Book Your Tune
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
