import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - The Sign Tune",
  description: "Learn how The Sign Tune collects, uses, and protects your personal information",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground">Last updated: December 2024</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 md:p-10 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to The Sign Tune ("we," "our," or "us"). We are committed to protecting your personal
                  information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Place an order for a caller tune</li>
                  <li>Fill out contact forms</li>
                  <li>Subscribe to our newsletter (if applicable)</li>
                  <li>Communicate with us via email</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  The personal information we collect includes: name, email address, phone number, WhatsApp number,
                  language preferences, and any special instructions you provide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>To process and fulfill your caller tune orders</li>
                  <li>To communicate with you about your order status</li>
                  <li>To deliver the completed caller tune to your email</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To improve our services and user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. Your data is used
                  solely for order processing and will never be resold or misused.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Audio Previews</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All audio previews available on our website are samples only and are intended for demonstration
                  purposes. They remain the property of The Sign Tune and may not be used commercially without explicit
                  permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services to facilitate our operations, such as email delivery services. These
                  third parties have access to your personal information only to perform specific tasks on our behalf
                  and are obligated not to disclose or use it for any other purpose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of any inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:{" "}
                  <a href="mailto:dev.signtune@gmail.com" className="text-primary hover:underline">
                    dev.signtune@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
