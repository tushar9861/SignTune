import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingContact } from "@/components/floating-contact"
import { MusiciansClient } from "./musicians-client"

export const metadata = {
  title: "Top Musicians | SignTune",
  description: "Meet our world-class musicians who create stunning caller tunes",
}

export default function MusiciansPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <MusiciansClient />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
