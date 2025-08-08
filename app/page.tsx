import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { getHomePage } from "@/lib/contentstack"

export default async function Home() {
  // In a real implementation, this would fetch from Contentstack
  const homeContent = await getHomePage()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-contentstack-stone to-contentstack-cement">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Learn Contentstack
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Master the art of headless content management. Explore comprehensive guides, tutorials, and best practices for each Contentstack product.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://www.contentstack.com/docs/">
                    <Button className="px-8 bg-white text-contentstack-stone hover:bg-gray-100">
                      <FileText className="mr-2 h-4 w-4" />
                      Documentation
                    </Button>
                  </Link>
                  <Link href="https://www.contentstack.com/academy/">
                    <Button variant="outline" className="px-8 text-white border-white hover:bg-white/10 bg-transparent">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Academy
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/contentstack-hero.png"
                  width={550}
                  height={550}
                  alt="Contentstack Learning Platform"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Product Learning Guides</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dive deep into each Contentstack product with comprehensive learning resources and practical examples.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {homeContent.products.map((product, index) => (
                <Link
                  key={index}
                  href={`/products/${product.slug}`}
                  className="flex flex-col items-start space-y-4 border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="rounded-full bg-contentstack-purple/10 p-3">
                    <Image
                      src={product.icon || "/placeholder.svg"}
                      width={32}
                      height={32}
                      alt={product.title}
                      className="h-6 w-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{product.title}</h3>
                    <p className="text-gray-500">{product.description}</p>
                  </div>
                  <div className="flex items-center text-contentstack-purple mt-auto">
                    Learn how to use <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How to Get Started</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    Whether you're a developer, marketer, or content creator, we have learning paths tailored to your role and experience level.
                  </p>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-contentstack-purple" />
                      Start with the fundamentals of headless CMS
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-contentstack-purple" />
                      Learn content modeling best practices
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-contentstack-purple" />
                      Master API integration techniques
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-contentstack-purple" />
                      Explore advanced workflow automation
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-contentstack-purple" />
                      Implement multi-channel publishing strategies
                    </li>
                  </ul>
                </div>
                <div>
                  <Link href="/products/headless-cms">
                    <Button className="px-8">Start Learning</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/contentstack-dashboard.png"
                  width={600}
                  height={400}
                  alt="Contentstack Learning Dashboard"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Learning Formats */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Multiple Ways to Learn</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the learning format that works best for you and your team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                  <FileText className="h-6 w-6 text-contentstack-purple" />
                </div>
                <h3 className="text-xl font-bold">Documentation</h3>
                <p className="text-gray-500">
                  Comprehensive technical documentation with code examples, API references, and implementation guides.
                </p>
                <Link href="https://www.contentstack.com/docs/" className="text-contentstack-purple flex items-center">
                  Explore docs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                  <BookOpen className="h-6 w-6 text-contentstack-purple" />
                </div>
                <h3 className="text-xl font-bold">Academy Courses</h3>
                <p className="text-gray-500">
                  Structured learning paths with interactive tutorials, quizzes, and hands-on exercises for all skill levels.
                </p>
                <Link href="https://www.contentstack.com/academy/" className="text-contentstack-purple flex items-center">
                  Start learning <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-contentstack-purple">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect width="14" height="14" x="1" y="5" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Video Tutorials</h3>
                <p className="text-gray-500">
                  Step-by-step video guides covering everything from basic setup to advanced implementation techniques.
                </p>
                <Link href="https://www.youtube.com/contentstack" className="text-contentstack-purple flex items-center">
                  Watch videos <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-contentstack-stone text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Join the Learning Community
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with other developers and content creators. Share knowledge, ask questions, and learn together.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://www.contentstack.com/community/">
                  <Button className="px-8 bg-white text-contentstack-stone hover:bg-gray-100">Join Community</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8 text-white border-white hover:bg-white/10 bg-transparent">
                    Get Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
