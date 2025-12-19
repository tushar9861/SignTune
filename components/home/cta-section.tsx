"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Music } from "lucide-react"
import { ComingSoonModal } from "@/components/coming-soon-modal"

export function CTASection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent-light/20 to-primary opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-float mb-8">
              <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-primary to-accent-light shadow-2xl shadow-primary/30">
                <Music className="h-12 w-12 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to Transform Your Call Experience?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto">
              Join thousands who've made their calls unforgettable with SignTune's professional caller tunes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setShowModal(true)}
                className="text-base px-8 h-14 gap-2 min-w-[220px] bg-gradient-to-r from-primary to-accent-light hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                Book Your Tune Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowModal(true)}
                className="text-base px-8 h-14 min-w-[220px] border-2 hover:bg-card/50 transition-all duration-300 bg-transparent"
              >
                Browse Collections
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
