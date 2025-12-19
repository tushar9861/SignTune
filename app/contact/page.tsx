"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, CheckCircle } from "lucide-react"
import { GlobeNetworkIcon } from "@/components/vector-graphics/globe-network-icon"
import { sendEmailWithPDF } from "@/lib/email-smtp"
import Image from "next/image"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendEmailWithPDF({
        to: "dev.signtune@gmail.com",
        subject: "Contact Form Submission",
        data: formData,
        source: "Contact",
      })
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("[v0] Email sending error:", error)
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/customer-support-team-with-modern-communication-t.jpg"
              alt="Contact Us Background"
              fill
              className="object-cover opacity-10"
            />
          </div>

          <div className="absolute top-10 right-20 opacity-15 animate-float">
            <GlobeNetworkIcon className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 left-20 opacity-10 animate-float" style={{ animationDelay: "2s" }}>
            <GlobeNetworkIcon className="w-24 h-24" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">Contact Us</h1>
              <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a
                          href="mailto:dev.signtune@gmail.com"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          dev.signtune@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-sm text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-lg p-6 md:p-8 card-glow">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="flex justify-center mb-6">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center animate-scale-in">
                          <CheckCircle className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting us. We'll get back to you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder="Your name"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="your@email.com"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            required
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            placeholder="Tell us how we can help you..."
                            rows={6}
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
