import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WalkmanWave } from "@/components/about/walkman-wave"
import { Music, Target, Heart, Award } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - The Sign Tune",
  description: "Learn about The Sign Tune and our mission to create unique sound identities",
}

export default function AboutPage() {
  const values = [
    {
      icon: Music,
      title: "Originality",
      description:
        "Every caller tune we create is 100% original. We never use copyrighted music, ensuring your tune is uniquely yours.",
    },
    {
      icon: Target,
      title: "Professionalism",
      description:
        "Our team of expert composers and audio engineers deliver studio-quality productions with attention to every detail.",
    },
    {
      icon: Heart,
      title: "Personalization",
      description:
        "We believe every voice is unique. Our tunes are crafted to reflect your personality, brand, or occasion perfectly.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "We maintain the highest standards in composition, production, and delivery to ensure your complete satisfaction.",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-transparent relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/professional-audio-engineer-in-modern-music-record.jpg"
              alt="About Us Background"
              fill
              className="object-cover opacity-15"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About The Sign Tune</h1>
              <p className="text-lg text-muted-foreground">
                Creating unique sound identities for individuals and businesses since day one
              </p>
            </div>
          </div>
        </section>

        <WalkmanWave />

        {/* Story Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image src="/modern-sound-wave-visualization-with-music-notes--.jpg" alt="Our Story" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Welcome to The Sign Tune, where we transform ordinary phone calls into memorable experiences. In a
                      world where first impressions matter, your caller tune speaks before you do. We recognized the
                      power of audio branding and the need for truly personalized caller tunes that go beyond generic
                      options.
                    </p>
                    <p>
                      Founded with a passion for audio excellence and personalization, The Sign Tune brings together
                      professional composers, voice artists, and audio engineers to create custom caller tunes that
                      truly represent your identity. Whether you're an individual looking to stand out or a business
                      seeking to strengthen your brand, we craft the perfect sound identity for you.
                    </p>
                    <p>
                      Our commitment to originality means we never use copyrighted music or generic templates. Every
                      tune is composed from scratch, tailored to your specific requirements, mood, and occasion. This
                      ensures you receive a completely unique audio signature that's professionally produced and ready
                      to use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-12 md:py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading provider of personalized caller tunes, recognized for creativity, quality, and
                  customer satisfaction. We envision a world where every phone call begins with a unique, memorable
                  sound that perfectly represents the caller's personality or brand.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional, personalized caller tunes through professional composition and production. We
                  strive to make the process simple, affordable, and accessible while maintaining the highest standards
                  of quality and originality in every tune we create.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">What Sets Us Apart</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 md:py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why Trust Us?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At The Sign Tune, we understand the importance of trust when it comes to your personal or business
                  identity. Our commitment to data privacy means your information is used solely for order processing
                  and will never be resold or misused.
                </p>
                <p>
                  Our transparent process, fast delivery times, and dedication to customer satisfaction have made us a
                  trusted choice for individuals and businesses seeking professional caller tune services. Every tune we
                  deliver comes with usage rights and support, ensuring you can use your audio with confidence.
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
