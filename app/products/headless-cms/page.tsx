import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText, ExternalLink } from 'lucide-react'
import { getProductPage } from "@/lib/contentstack"
import { ContentstackLivePreview } from "@/components/contentstack-live-preview"

export default async function HeadlessCMSPage() {
  // In a real implementation, this would fetch from Contentstack
  const product = await getProductPage("headless-cms")

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
                      How to Use Headless CMS
                    </h1>
                    <p className="max-w-[600px] text-gray-200 md:text-xl" data-cs-field="description">
                      Learn how to create, manage, and deliver content using Contentstack's flexible, API-first content management system.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="https://www.contentstack.com/docs/developers/cms/">
                      <Button className="px-8 bg-white text-contentstack-stone hover:bg-gray-100">
                        <FileText className="mr-2 h-4 w-4" />
                        View Documentation
                      </Button>
                    </Link>
                    <Link href="https://www.contentstack.com/academy/courses/headless-cms-fundamentals/">
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
                    alt="Headless CMS Interface"
                    className="rounded-lg object-cover"
                    priority
                    data-cs-field="hero_image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Core Concepts */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="concepts_title">
                    Core Concepts to Master
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="concepts_description"
                  >
                    Understanding these fundamental concepts will help you make the most of Contentstack's Headless CMS.
                  </p>
                </div>
              </div>
              <div
                className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
                data-cs-field="concepts"
              >
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/content-modeling-icon.png"
                      width={32}
                      height={32}
                      alt="Content Modeling"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Content Modeling</h3>
                  <p className="text-gray-500">
                    Learn how to design flexible content structures using content types, fields, and references. Create reusable models that scale with your needs.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/content-modeling/" className="text-contentstack-purple flex items-center">
                    Learn content modeling <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/api-icon.png"
                      width={32}
                      height={32}
                      alt="Content Delivery API"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Content Delivery API</h3>
                  <p className="text-gray-500">
                    Master the REST and GraphQL APIs to fetch content efficiently. Learn query optimization, filtering, and caching strategies.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/apis/content-delivery-api/" className="text-contentstack-purple flex items-center">
                    Explore API docs <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/multi-language-icon.png"
                      width={32}
                      height={32}
                      alt="Localization"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Localization</h3>
                  <p className="text-gray-500">
                    Set up multi-language content management. Learn how to structure localized content and manage translation workflows.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/multilingual-content/" className="text-contentstack-purple flex items-center">
                    Learn localization <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/version-control-icon.png"
                      width={32}
                      height={32}
                      alt="Publishing"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Publishing & Environments</h3>
                  <p className="text-gray-500">
                    Understand how to manage content across different environments. Learn publishing strategies and content versioning.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/publishing/" className="text-contentstack-purple flex items-center">
                    Master publishing <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/role-based-access-icon.png"
                      width={32}
                      height={32}
                      alt="User Management"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">User Management</h3>
                  <p className="text-gray-500">
                    Configure roles and permissions for your team. Learn how to set up secure access controls and collaboration workflows.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/user-management/" className="text-contentstack-purple flex items-center">
                    Setup user roles <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <div className="rounded-full bg-contentstack-purple/10 p-3 w-fit">
                    <Image
                      src="/icons/workflows-icon.png"
                      width={32}
                      height={32}
                      alt="Workflows"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Content Workflows</h3>
                  <p className="text-gray-500">
                    Design approval processes that match your organization. Learn to create custom workflows for content review and publishing.
                  </p>
                  <Link href="https://www.contentstack.com/docs/developers/workflows/" className="text-contentstack-purple flex items-center">
                    Build workflows <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started Guide */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="getting_started_title">
                    Getting Started Pathway
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="getting_started_description"
                  >
                    Follow this learning path to become proficient with Contentstack's Headless CMS.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl py-12">
                <div className="space-y-8" data-cs-field="learning_steps">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-contentstack-stone text-white">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Set Up Your First Stack</h3>
                      <p className="text-gray-500">
                        Create your Contentstack account and set up your first stack. Learn the basic interface and navigation.
                      </p>
                      <Link href="https://www.contentstack.com/docs/developers/quick-start/" className="text-contentstack-purple flex items-center">
                        Quick start guide <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-contentstack-stone text-white">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Create Your Content Model</h3>
                      <p className="text-gray-500">
                        Design your first content type with fields, validations, and references. Understand the relationship between content types.
                      </p>
                      <Link href="https://www.contentstack.com/docs/developers/content-modeling/content-types/" className="text-contentstack-purple flex items-center">
                        Content modeling guide <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-contentstack-stone text-white">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Add and Manage Content</h3>
                      <p className="text-gray-500">
                        Learn how to create, edit, and organize entries. Understand the content editor interface and publishing workflow.
                      </p>
                      <Link href="https://www.contentstack.com/docs/content-managers/work-with-entries/" className="text-contentstack-purple flex items-center">
                        Content management guide <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-contentstack-stone text-white">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Integrate with Your Application</h3>
                      <p className="text-gray-500">
                        Use the Content Delivery API to fetch content in your application. Learn about SDKs and best practices for integration.
                      </p>
                      <Link href="https://www.contentstack.com/docs/developers/sdks/" className="text-contentstack-purple flex items-center">
                        SDK documentation <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Topics */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-center justify-center">
                  <Image
                    src={product.benefitsImage || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt="Advanced CMS Features"
                    className="rounded-lg object-cover shadow-lg"
                    data-cs-field="advanced_image"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" data-cs-field="advanced_title">
                      Advanced Implementation Topics
                    </h2>
                    <p className="text-gray-500 md:text-xl/relaxed" data-cs-field="advanced_description">
                      Once you've mastered the basics, explore these advanced topics to optimize your content management workflow.
                    </p>
                  </div>
                  <ul className="space-y-3" data-cs-field="advanced_topics">
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-5 w-5 text-contentstack-purple mt-0.5" />
                      <div>
                        <span className="font-medium">Performance Optimization:</span>
                        <span className="text-gray-500 ml-1">Learn caching strategies, CDN integration, and query optimization techniques.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-5 w-5 text-contentstack-purple mt-0.5" />
                      <div>
                        <span className="font-medium">Webhooks & Extensions:</span>
                        <span className="text-gray-500 ml-1">Integrate with external systems using webhooks and build custom extensions.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-5 w-5 text-contentstack-purple mt-0.5" />
                      <div>
                        <span className="font-medium">Migration Strategies:</span>
                        <span className="text-gray-500 ml-1">Learn how to migrate content from other systems and manage large-scale imports.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-5 w-5 text-contentstack-purple mt-0.5" />
                      <div>
                        <span className="font-medium">Security Best Practices:</span>
                        <span className="text-gray-500 ml-1">Implement secure authentication, manage API keys, and configure access controls.</span>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <Link href="https://www.contentstack.com/docs/developers/advanced/">
                      <Button className="px-8">Explore Advanced Topics</Button>
                    </Link>
                  </div>
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
                    Comprehensive resources to help you master Contentstack's Headless CMS.
                  </p>
                </div>
              </div>
              <div
                className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
                data-cs-field="resources"
              >
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <FileText className="h-8 w-8 text-contentstack-purple" />
                  <h3 className="text-xl font-bold">API Reference</h3>
                  <p className="text-gray-500">Complete API documentation with examples and interactive testing tools.</p>
                  <Link href="https://www.contentstack.com/docs/developers/apis/" className="text-contentstack-purple flex items-center">
                    View API docs <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <BookOpen className="h-8 w-8 text-contentstack-purple" />
                  <h3 className="text-xl font-bold">Academy Course</h3>
                  <p className="text-gray-500">Interactive course covering all aspects of headless CMS implementation.</p>
                  <Link href="https://www.contentstack.com/academy/courses/headless-cms/" className="text-contentstack-purple flex items-center">
                    Take course <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-contentstack-purple">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h9l4 4V12z"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Sample Projects</h3>
                  <p className="text-gray-500">Ready-to-use example projects demonstrating common implementation patterns.</p>
                  <Link href="https://github.com/contentstack" className="text-contentstack-purple flex items-center">
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
                    Ready to Start Building?
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="cta_description"
                  >
                    Put your knowledge into practice. Start building with Contentstack's Headless CMS today.
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
