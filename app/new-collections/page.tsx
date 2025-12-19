import type { Metadata } from "next"
import NewCollectionsPageClient from "./new-collections-client"

export const metadata: Metadata = {
  title: "New Collections - The Sign Tune",
  description: "Explore our latest collection of professionally crafted caller tunes",
}

export default function NewCollectionsPage() {
  return <NewCollectionsPageClient />
}
