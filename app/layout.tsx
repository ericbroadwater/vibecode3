import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ContentstackAppProvider } from "@/components/contentstack-app-provider"

export const metadata: Metadata = {
  title: "Contentstack Features",
  description: "Explore Contentstack products and features",
    generator: 'v0.dev'
}

function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-contentstack-stone">Contentstack</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/products/headless-cms"
            className="text-sm font-medium transition-colors hover:text-contentstack-purple"
          >
            Headless CMS
          </Link>
          <Link
            href="/products/experience-builder"
            className="text-sm font-medium transition-colors hover:text-contentstack-purple"
          >
            Experience Builder
          </Link>
          <Link
            href="/products/marketplace"
            className="text-sm font-medium transition-colors hover:text-contentstack-purple"
          >
            Marketplace
          </Link>
          <Link
            href="/products/automation-hub"
            className="text-sm font-medium transition-colors hover:text-contentstack-purple"
          >
            Automation Hub
          </Link>
          <Link
            href="/products/launch"
            className="text-sm font-medium transition-colors hover:text-contentstack-purple"
          >
            Launch
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-contentstack-purple">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-contentstack-purple hover:bg-contentstack-purple/90">Request Demo</Button>
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="mobile-menu-button">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mobile-menu hidden md:hidden">
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-contentstack-stone">Contentstack</span>
            </Link>
            <Button variant="ghost" size="icon" className="mobile-menu-close">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="mt-6 flex flex-col gap-4">
            <Link
              href="/products/headless-cms"
              className="text-base font-medium transition-colors hover:text-contentstack-purple"
            >
              Headless CMS
            </Link>
            <Link
              href="/products/experience-builder"
              className="text-base font-medium transition-colors hover:text-contentstack-purple"
            >
              Experience Builder
            </Link>
            <Link
              href="/products/marketplace"
              className="text-base font-medium transition-colors hover:text-contentstack-purple"
            >
              Marketplace
            </Link>
            <Link
              href="/products/automation-hub"
              className="text-base font-medium transition-colors hover:text-contentstack-purple"
            >
              Automation Hub
            </Link>
            <Link
              href="/products/launch"
              className="text-base font-medium transition-colors hover:text-contentstack-purple"
            >
              Launch
            </Link>
            <Link href="/contact" className="text-base font-medium transition-colors hover:text-contentstack-purple">
              Contact
            </Link>
            <Link href="/contact" className="mt-4">
              <Button className="w-full bg-contentstack-purple hover:bg-contentstack-purple/90">Request Demo</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-contentstack-stone">Contentstack</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Contentstack is the industry-leading Composable Digital Experience Platform (DXP) that empowers marketers
              and developers to deliver exceptional digital experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-contentstack-cement hover:text-contentstack-purple">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-contentstack-cement hover:text-contentstack-purple">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-contentstack-cement hover:text-contentstack-purple">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/products/headless-cms"
                  className="text-sm text-contentstack-cement hover:text-contentstack-purple"
                >
                  Headless CMS
                </Link>
              </li>
              <li>
                <Link
                  href="/products/experience-builder"
                  className="text-sm text-contentstack-cement hover:text-contentstack-purple"
                >
                  Experience Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/products/marketplace"
                  className="text-sm text-contentstack-cement hover:text-contentstack-purple"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/products/automation-hub"
                  className="text-sm text-contentstack-cement hover:text-contentstack-purple"
                >
                  Automation Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/products/launch"
                  className="text-sm text-contentstack-cement hover:text-contentstack-purple"
                >
                  Launch
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-contentstack-cement hover:text-contentstack-purple">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-contentstack-cement hover:text-contentstack-purple">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-contentstack-cement hover:text-contentstack-purple">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-contentstack-cement hover:text-contentstack-purple">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-contentstack-cement hover:text-contentstack-purple">
                  Webinars
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-contentstack-cement hover:text-contentstack-purple">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-contentstack-cement hover:text-contentstack-purple">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-contentstack-cement hover:text-contentstack-purple">
                  Partners
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-contentstack-cement hover:text-contentstack-purple">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-contentstack-cement hover:text-contentstack-purple">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Contentstack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ContentstackAppProvider>
            <div className="relative flex min-h-screen flex-col">
              <MainNav />
              {children}
              <Footer />
            </div>
          </ContentstackAppProvider>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const mobileMenuButton = document.querySelector('.mobile-menu-button');
              const mobileMenuClose = document.querySelector('.mobile-menu-close');
              const mobileMenu = document.querySelector('.mobile-menu');
              
              if (mobileMenuButton && mobileMenu && mobileMenuClose) {
                mobileMenuButton.addEventListener('click', function() {
                  mobileMenu.classList.toggle('hidden');
                });
                
                mobileMenuClose.addEventListener('click', function() {
                  mobileMenu.classList.add('hidden');
                });
              }
            });
          `,
          }}
        />
      </body>
    </html>
  )
}
