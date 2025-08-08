import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { getProductPage } from "@/lib/contentstack"
import { ContentstackLivePreview } from "@/components/contentstack-live-preview"

export default async function LaunchPage() {
  // In a real implementation, this would fetch from Contentstack
  const product = await getProductPage("launch")

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
                      {product.title}
                    </h1>
                    <p className="max-w-[600px] text-gray-200 md:text-xl" data-cs-field="description">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/contact">
                      <Button className="px-8 bg-white text-contentstack-stone hover:bg-gray-100">Request Demo</Button>
                    </Link>
                    <Link href={product.documentationUrl}>
                      <Button
                        variant="outline"
                        className="px-8 text-white border-white hover:bg-white/10 bg-transparent"
                      >
                        Documentation
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={product.heroImage || "/placeholder.svg"}
                    width={550}
                    height={550}
                    alt={product.title}
                    className="rounded-lg object-cover"
                    priority
                    data-cs-field="hero_image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="features_title">
                    Key Features
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="features_description"
                  >
                    {product.featuresDescription}
                  </p>
                </div>
              </div>
              <div
                className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
                data-cs-field="features"
              >
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-4 border rounded-lg p-6 bg-white shadow-sm"
                  >
                    <div className="rounded-full bg-contentstack-purple/10 p-3">
                      <Image
                        src={feature.icon || "/placeholder.svg"}
                        width={32}
                        height={32}
                        alt={feature.title}
                        className="h-6 w-6"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-500 text-center">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Workflow Diagram */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="workflow_title">
                    {product.workflowTitle}
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="workflow_description"
                  >
                    {product.workflowDescription}
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-5xl py-12">
                <Image
                  src={product.workflowImage || "/placeholder.svg"}
                  width={1000}
                  height={600}
                  alt="Launch Workflow"
                  className="rounded-lg shadow-lg"
                  data-cs-field="workflow_image"
                />
              </div>
              <div className="mx-auto max-w-3xl">
                <div className="space-y-8" data-cs-field="workflow_steps">
                  {product.workflowSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-contentstack-purple text-white">
                        {index + 1}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-gray-500">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" data-cs-field="benefits_title">
                      {product.benefitsTitle}
                    </h2>
                    <p className="text-gray-500 md:text-xl/relaxed" data-cs-field="benefits_description">
                      {product.benefitsDescription}
                    </p>
                  </div>
                  <ul className="space-y-2" data-cs-field="benefits">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-contentstack-purple" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link href="/contact">
                      <Button className="px-8 bg-contentstack-purple hover:bg-contentstack-purple/90">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={product.benefitsImage || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt="Launch Benefits"
                    className="rounded-lg object-cover shadow-lg"
                    data-cs-field="benefits_image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="case_studies_title">
                    {product.caseStudiesTitle}
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="case_studies_description"
                  >
                    {product.caseStudiesDescription}
                  </p>
                </div>
              </div>
              <div
                className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
                data-cs-field="case_studies"
              >
                {product.caseStudies.map((caseStudy, index) => (
                  <Link
                    key={index}
                    href={caseStudy.url}
                    className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={caseStudy.logo || "/placeholder.svg"}
                      width={120}
                      height={60}
                      alt={caseStudy.company}
                      className="h-12 w-auto"
                    />
                    <h3 className="text-xl font-bold">{caseStudy.title}</h3>
                    <p className="text-gray-500">{caseStudy.description}</p>
                    <div className="flex items-center text-contentstack-purple mt-auto">
                      Read case study <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-contentstack-stone text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="cta_title">
                    {product.ctaTitle}
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="cta_description"
                  >
                    {product.ctaDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button className="px-8 bg-white text-contentstack-stone hover:bg-gray-100">Request Demo</Button>
                  </Link>
                  <Link href={product.documentationUrl}>
                    <Button variant="outline" className="px-8 text-white border-white hover:bg-white/10 bg-transparent">
                      Documentation
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
