import type { Metadata } from "next"
import HowItWorksClient from "./how-it-works-client"

export const metadata: Metadata = {
  title: "How It Works - The Sign Tune",
  description: "Learn how to get your personalized caller tune in simple steps",
}

export default function HowItWorksPage() {
  return <HowItWorksClient />
}
