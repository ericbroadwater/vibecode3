import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { getProductPage } from "@/lib/contentstack"
import { ContentstackLivePreview } from "@/components/contentstack-live-preview"

export default async function MarketplacePage() {
  // In a real implementation, this would fetch from Contentstack
  const product = await getProductPage("marketplace")

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
                        Browse Marketplace
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

          {/* Popular Apps */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="apps_title">
                    Popular Apps
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="apps_description"
                  >
                    {product.appsDescription}
                  </p>
                </div>
              </div>
              <div
                className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4"
                data-cs-field="apps"
              >
                {product.apps.map((app, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-4 border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={app.icon || "/placeholder.svg"}
                      width={64}
                      height={64}
                      alt={app.name}
                      className="h-16 w-16 rounded-lg"
                    />
                    <h3 className="text-lg font-bold">{app.name}</h3>
                    <p className="text-gray-500 text-center text-sm">{app.description}</p>
                    <Link href={app.url} className="text-contentstack-purple text-sm flex items-center">
                      View details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Link href={product.allAppsUrl}>
                  <Button className="px-8 bg-contentstack-purple hover:bg-contentstack-purple/90">View All Apps</Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="categories_title">
                    {product.categoriesTitle}
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="categories_description"
                  >
                    {product.categoriesDescription}
                  </p>
                </div>
              </div>
              <div
                className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
                data-cs-field="categories"
              >
                {product.categories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.url}
                    className="flex flex-col items-center space-y-4 border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="rounded-full bg-contentstack-purple/10 p-3">
                      <Image
                        src={category.icon || "/placeholder.svg"}
                        width={32}
                        height={32}
                        alt={category.name}
                        className="h-6 w-6"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-gray-500 text-center">{category.description}</p>
                    <div className="text-contentstack-purple flex items-center">
                      Browse {category.name} <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Developer Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-center justify-center">
                  <Image
                    src={product.developerImage || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt="Developer Resources"
                    className="rounded-lg object-cover shadow-lg"
                    data-cs-field="developer_image"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" data-cs-field="developer_title">
                      {product.developerTitle}
                    </h2>
                    <p className="text-gray-500 md:text-xl/relaxed" data-cs-field="developer_description">
                      {product.developerDescription}
                    </p>
                  </div>
                  <ul className="space-y-2" data-cs-field="developer_features">
                    {product.developerFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-contentstack-purple" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link href={product.developerDocsUrl}>
                      <Button className="px-8 bg-contentstack-purple hover:bg-contentstack-purple/90">
                        Developer Documentation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Partners */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-cs-field="partners_title">
                    {product.partnersTitle}
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="partners_description"
                  >
                    {product.partnersDescription}
                  </p>
                </div>
              </div>
              <div
                className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3"
                data-cs-field="partners"
              >
                {product.partners.map((partner, index) => (
                  <div key={index} className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        width={120}
                        height={60}
                        alt={partner.name}
                        className="h-12 w-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{partner.name}</h3>
                    <p className="text-gray-500">{partner.description}</p>
                    <Link href={partner.url} className="text-contentstack-purple flex items-center">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
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
                      Browse Marketplace
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
