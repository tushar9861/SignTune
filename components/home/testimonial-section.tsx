"use client"

import { TestimonialCarousel } from "@/components/testimonial-carousel"

export function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "CEO",
      company: "Tech Innovations Ltd",
      content:
        "SignTune transformed our corporate identity with a professional caller tune that truly represents our brand. The quality is outstanding and our clients love it!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Wedding Planner",
      content:
        "I ordered custom tunes for my wedding celebrations and they were absolutely perfect! The team understood exactly what I wanted and delivered beyond expectations.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Real Estate Agent",
      content:
        "As a realtor, first impressions matter. My SignTune caller tune makes me stand out and clients often compliment the professional touch. Highly recommend!",
      rating: 5,
    },
    {
      id: 4,
      name: "Dr. Sneha Reddy",
      role: "Medical Professional",
      content:
        "The calm and professional tune perfectly suits my practice. Patients appreciate the soothing music while waiting for me to answer their calls.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who've elevated their audio identity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TestimonialCarousel testimonials={testimonials} autoPlayInterval={7000} />
        </div>
      </div>
    </section>
  )
}
