import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText, ExternalLink } from 'lucide-react'
import { getProductPage } from "@/lib/contentstack"
import { ContentstackLivePreview } from "@/components/contentstack-live-preview"

export default async function ExperienceBuilderPage() {
  // In a real implementation, this would fetch from Contentstack
  const product = await getProductPage("experience-builder")

  return (
    <div className="flex flex-col min-h-screen">
      <ContentstackLivePreview contentTypeUid="product_page" entryUid={product.uid}>
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-contentstack-stone to-contentstack-cement">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1
                      className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white"
                      data-cs-field="title"
                    >
                      How to Use Experience Builder
                    </h1>
                    <p className="max-w-[600px] text-gray-200 md:text-xl" data-cs-field="description">
                      Learn how to create and manage digital experiences with visual editing tools that empower marketers to build without code.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="https://www.contentstack.com/docs/developers/experience-builder/">
                      <Button className="px-8 bg-white text-contentstack-stone hover:bg-gray-100">
                        <FileText className="mr-2 h-4 w-4" />
                        View Documentation
                      </Button>
                    </Link>
                    <Link href="https://www.contentstack.com/academy/courses/experience-builder/">
                      <Button
                        variant="outline"
                        className="px-8 text-white border-white hover:bg-white/10 bg-transparent"
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Take Course
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={product.heroImage || "/placeholder.svg"}
                    width={550}
                    height={550}
                    alt="Experience Builder Interface"
                    className="rounded-lg object-cover"
                    priority
                    data-cs-field="hero_image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="features_title">
                    Key Features to Master
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="features_description"
                  >
                    Learn how to leverage Experience Builder's powerful visual editing capabilities to create engaging digital experiences.
                  </p>
                </div>
              </div>
              <div
                className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
                data-cs-field="features"
              >
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/visual-editing-icon.png"
                      width={32}
                      height={32}
                      alt="Visual Editing"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Visual Page Building</h3>
                  <p className="text-gray-500">
                    Learn how to use the drag-and-drop interface to build pages visually. Understand component libraries, layouts, and responsive design tools.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/experience-builder/visual-editing/" className="text-contentstack-purple flex items-center">
                    Learn visual editing <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/personalization-icon.png"
                      width={32}
                      height={32}
                      alt="Personalization"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Content Personalization</h3>
                  <p className="text-gray-500">
                    Create targeted experiences for different audience segments. Learn how to set up rules, conditions, and dynamic content delivery.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/personalization/" className="text-contentstack-purple flex items-center">
                    Setup personalization <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/ab-testing-icon.png"
                      width={32}
                      height={32}
                      alt="A/B Testing"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">A/B Testing</h3>
                  <p className="text-gray-500">
                    Set up experiments to test different content variations. Learn how to analyze results and optimize your experiences based on data.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/ab-testing/" className="text-contentstack-purple flex items-center">
                    Learn A/B testing <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/preview-icon.png"
                      width={32}
                      height={32}
                      alt="Live Preview"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Live Preview</h3>
                  <p className="text-gray-500">
                    Preview your changes in real-time across different devices and breakpoints. Learn how to use preview modes and sharing features.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/live-preview/" className="text-contentstack-purple flex items-center">
                    Master live preview <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/collaboration-icon.png"
                      width={32}
                      height={32}
                      alt="Collaboration"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Team Collaboration</h3>
                  <p className="text-gray-500">
                    Work effectively with your team using comments, approvals, and shared workspaces. Learn collaboration best practices.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/collaboration/" className="text-contentstack-purple flex items-center">
                    Enable collaboration <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/drag-drop-icon.png"
                      width={32}
                      height={32}
                      alt="Component Library"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Component Management</h3>
                  <p className="text-gray-500">
                    Build and manage reusable components. Learn how to create component libraries and maintain design consistency across experiences.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/components/" className="text-contentstack-purple flex items-center">
                    Build components <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Guide */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="implementation_title">
                    Implementation Workflow
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="implementation_description"
                  >
                    Follow this workflow to successfully implement Experience Builder in your organization.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl py-12">
                <div className="space-y-8" data-cs-field="implementation_steps">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-contentstack-stone text-white">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Setup and Configuration</h3>
                      <p className="text-gray-500">
                        Configure Experience Builder for your stack. Set up environments, permissions, and initial component library.
                      </p>
                      <Link href="https://www.contentstack.com/docs/developers/experience-builder/setup/" className="text-contentstack-purple flex items-center">
                        Setup guide <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-contentstack-stone text-white">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Create Component Library</h3>
                      <p className="text-gray-500">
                        Build reusable components that match your design system. Define component properties and configure visual editing capabilities.
                      </p>
                      <Link href="https://www.contentstack.com/docs/developers/experience-builder/components/" className="text-contentstack-purple flex items-center">
                        Component guide <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-contentstack-stone text-white">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Build Your First Experience</h3>
                      <p className="text-gray-500">
                        Use the visual editor to create your first page or experience. Learn the interface and practice with different components.
                      </p>
                      <Link href="https://www.contentstack.com/docs/developers/experience-builder/first-experience/" className="text-contentstack-purple flex items-center">
                        Building guide <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-contentstack-stone text-white">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Implement Personalization</h3>
                      <p className="text-gray-500">
                        Set up audience segments and personalization rules. Learn how to create targeted experiences for different user groups.
                      </p>
                      <Link href="https://www.contentstack.com/docs/developers/experience-builder/personalization/" className="text-contentstack-purple flex items-center">
                        Personalization guide <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" data-cs-field="best_practices_title">
                      Best Practices & Tips
                    </h2>
                    <p className="text-gray-500 md:text-xl/relaxed" data-cs-field="best_practices_description">
                      Learn from experienced users and avoid common pitfalls with these proven best practices.
                    </p>
                  </div>
                  <ul className="space-y-3" data-cs-field="best_practices">
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-5 w-5 text-contentstack-purple mt-0.5" />
                      <div>
                        <span className="font-medium">Design System Integration:</span>
                        <span className="text-gray-500 ml-1">Align your components with your existing design system for consistency.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-5 w-5 text-contentstack-purple mt-0.5" />
                      <div>
                        <span className="font-medium">Performance Optimization:</span>
                        <span className="text-gray-500 ml-1">Optimize component loading and implement lazy loading for better performance.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-5 w-5 text-contentstack-purple mt-0.5" />
                      <div>
                        <span className="font-medium">User Training:</span>
                        <span className="text-gray-500 ml-1">Provide proper training to your marketing team for effective adoption.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-5 w-5 text-contentstack-purple mt-0.5" />
                      <div>
                        <span className="font-medium">Testing Strategy:</span>
                        <span className="text-gray-500 ml-1">Implement a robust testing workflow for experiences before publishing.</span>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <Link href="https://www.contentstack.com/docs/developers/experience-builder/best-practices/">
                      <Button className="px-8">View Best Practices</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={product.benefitsImage || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt="Experience Builder Best Practices"
                    className="rounded-lg object-cover shadow-lg"
                    data-cs-field="best_practices_image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Learning Resources */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="resources_title">
                    Learning Resources
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="resources_description"
                  >
                    Comprehensive resources to help you master Experience Builder.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2" data-cs-field="resources">
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <FileText className="h-8 w-8 text-contentstack-purple" />
                  <h3 className="text-xl font-bold">Complete Documentation</h3>
                  <p className="text-gray-500">
                    Detailed guides covering all aspects of Experience Builder, from basic setup to advanced customization.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/experience-builder/" className="text-contentstack-purple flex items-center">
                    Read documentation <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <BookOpen className="h-8 w-8 text-contentstack-purple" />
                  <h3 className="text-xl font-bold">Interactive Tutorials</h3>
                  <p className="text-gray-500">
                    Hands-on tutorials that walk you through building real experiences step-by-step.
                  </p>
                  <Link href="https://www.contentstack.com/academy/courses/experience-builder/" className="text-contentstack-purple flex items-center">
                    Start tutorials <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-contentstack-purple">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect width="14" height="14" x="1" y="5" rx="2" ry="2"></rect>
                  </svg>
                  <h3 className="text-xl font-bold">Video Walkthroughs</h3>
                  <p className="text-gray-500">
                    Watch experienced users demonstrate common workflows and advanced techniques.
                  </p>
                  <Link href="https://www.youtube.com/contentstack" className="text-contentstack-purple flex items-center">
                    Watch videos <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-contentstack-purple">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h9l4 4V12z"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Community Examples</h3>
                  <p className="text-gray-500">
                    Explore real-world examples and templates shared by the Contentstack community.
                  </p>
                  <Link href="https://www.contentstack.com/community/" className="text-contentstack-purple flex items-center">
                    Browse examples <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-contentstack-stone text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="cta_title">
                    Start Building Experiences
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="cta_description"
                  >
                    Apply what you've learned and start creating engaging digital experiences with Experience Builder.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://app.contentstack.com/#!/login">
                    <Button className="px-8 bg-white text-contentstack-stone hover:bg-gray-100">Start Building</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="px-8 text-white border-white hover:bg-white/10 bg-transparent">
                      Get Help
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ContentstackLivePreview>
    </div>
  )
}
