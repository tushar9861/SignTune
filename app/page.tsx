import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { GlobalSoundMap } from "@/components/home/global-sound-map"
import { SoundPhilosophyQuote } from "@/components/home/sound-philosophy-quote"
import { FeaturedAudio } from "@/components/home/featured-audio"
import { WhySignTune } from "@/components/home/why-signtune"
import { WhoItsFor } from "@/components/home/who-its-for"
import { HowItWorksPreview } from "@/components/home/how-it-works-preview"
import { CTASection } from "@/components/home/cta-section"
import { CustomTuneForm } from "@/components/home/custom-tune-form"
import { FloatingContact } from "@/components/floating-contact"
import { TryMySoundPanel } from "@/components/try-my-sound-panel"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <GlobalSoundMap />
        <SoundPhilosophyQuote />
        <FeaturedAudio />
        <TryMySoundPanel />
        <WhySignTune />
        <WhoItsFor />
        <HowItWorksPreview />
        <CTASection />
        <CustomTuneForm />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
