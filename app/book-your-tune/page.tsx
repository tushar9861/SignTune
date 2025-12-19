"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendEmailWithPDF } from "@/lib/email-smtp"
import { CheckCircle, Package } from "lucide-react"

export default function BookYourTunePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    language: "",
    mood: "",
    nameOrBrand: "",
    occasion: "",
    packageType: "",
    specialInstructions: "",
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
        subject: "New Caller Tune Order",
        data: formData,
        source: "Book Your Tune",
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error("[v0] Email sending error:", error)
      alert("There was an error sending your order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Thank You!</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for your order for customized caller tunes from SignTune. You will receive a specially
                  composed tune on your email.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Submit Another Order
                  </Button>
                  <Button onClick={() => (window.location.href = "/")}>Back to Home</Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Book Your Tune</h1>
              <p className="text-lg text-muted-foreground">
                Fill out the form below to order your personalized caller tune. We'll deliver it within 24-48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Order Form */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-6">
                {/* Package Selection */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Select Your Package</h3>
                  </div>
                  <Select
                    value={formData.packageType}
                    onValueChange={(value) => handleChange("packageType", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Name Tune - ₹299</SelectItem>
                      <SelectItem value="customized">Customized Tune - ₹499 (Most Popular)</SelectItem>
                      <SelectItem value="group">Group Package - ₹1,299</SelectItem>
                      <SelectItem value="bundle">Bundle Package - ₹1,999</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground text-lg border-b border-border pb-2">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => handleChange("whatsapp", e.target.value)}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                {/* Tune Preferences */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground text-lg border-b border-border pb-2">
                    Tune Preferences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">Preferred Language *</Label>
                      <Input
                        id="language"
                        required
                        value={formData.language}
                        onChange={(e) => handleChange("language", e.target.value)}
                        placeholder="e.g., English, Hindi"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mood">Mood / Style *</Label>
                      <Select value={formData.mood} onValueChange={(value) => handleChange("mood", value)} required>
                        <SelectTrigger id="mood">
                          <SelectValue placeholder="Select mood" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="calm">Calm</SelectItem>
                          <SelectItem value="energetic">Energetic</SelectItem>
                          <SelectItem value="spiritual">Spiritual</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nameOrBrand">Name / Brand to Include *</Label>
                    <Input
                      id="nameOrBrand"
                      required
                      value={formData.nameOrBrand}
                      onChange={(e) => handleChange("nameOrBrand", e.target.value)}
                      placeholder="Name or brand for the tune"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occasion">Occasion *</Label>
                    <Select
                      value={formData.occasion}
                      onValueChange={(value) => handleChange("occasion", value)}
                      required
                    >
                      <SelectTrigger id="occasion">
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="festival">Festival</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialInstructions">Special Instructions</Label>
                    <Textarea
                      id="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={(e) => handleChange("specialInstructions", e.target.value)}
                      placeholder="Any specific requirements or preferences..."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Proceed to Pay"}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-3">
                    Payment details will be sent to your email after order confirmation
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
