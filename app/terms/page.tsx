import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions - The Sign Tune",
  description: "Read the terms and conditions for using The Sign Tune services",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Terms & Conditions</h1>
              <p className="text-lg text-muted-foreground">Last updated: December 2024</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 md:p-10 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using The Sign Tune website and services, you accept and agree to be bound by these
                  Terms and Conditions. If you do not agree with any part of these terms, please do not use our
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Sign Tune provides personalized caller tune creation services. We compose original audio content
                  based on your specifications, including name, brand, mood, and language preferences. All compositions
                  are created specifically for your order and delivered via email.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Delivery Timelines</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Standard delivery time for completed caller tunes is 24-48 hours from order confirmation. Delivery
                  times may vary based on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Order complexity and customization requirements</li>
                  <li>Current order volume</li>
                  <li>Holidays and weekends</li>
                  <li>Bundle and group package orders (may require additional time)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Usage Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon delivery and full payment, you receive the right to use your customized caller tune for personal
                  or business purposes. However, you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                  <li>Resell, redistribute, or share the tune commercially</li>
                  <li>Claim ownership of the composition or production</li>
                  <li>Use the tune for unlawful purposes</li>
                  <li>Modify the tune without permission</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Unauthorized Redistribution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Caller tunes delivered to you are for your personal or business use only. Any unauthorized
                  redistribution, sharing on public platforms, or commercial resale is strictly prohibited and may
                  result in legal action.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Originality Guarantee</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All caller tunes produced by The Sign Tune are original compositions. We do not use copyrighted music
                  or unauthorized samples. Each tune is created specifically for your order using professional
                  composition and production techniques.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Revisions and Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">Revision policies vary by package:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                  <li>Basic Package: No revisions included</li>
                  <li>Customized Package: One free revision</li>
                  <li>Group Package: Two free revisions per tune</li>
                  <li>Bundle Package: Unlimited revisions</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Additional revisions beyond package limits may incur extra charges.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment details will be provided upon order confirmation. Full payment is required before final
                  delivery of the completed caller tune. We accept various payment methods as communicated during the
                  order process.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Refund Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Due to the custom nature of our services, refunds are handled on a case-by-case basis. If you are
                  unsatisfied with the final product, please contact us to discuss resolution options, which may include
                  revisions or partial refunds.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While you receive usage rights for your caller tune, The Sign Tune retains certain intellectual
                  property rights. We may use your commissioned work in our portfolio or promotional materials unless
                  you specifically request otherwise.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Sign Tune is not liable for any indirect, incidental, or consequential damages arising from the
                  use or inability to use our services. Our liability is limited to the amount paid for the specific
                  service in question.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                  immediately upon posting to our website. Your continued use of our services after changes constitutes
                  acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at:{" "}
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
