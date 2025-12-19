import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">ST</span>
              </div>
              <span className="text-xl font-bold text-foreground">The Sign Tune</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Create personalized caller tunes that speak before you do. Simple, professional, and uniquely yours.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Email:{" "}
              <a href="mailto:dev.signtune@gmail.com" className="text-primary hover:underline">
                dev.signtune@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/new-collections"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  New Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/book-your-tune"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Book Your Tune
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Sign Tune. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
