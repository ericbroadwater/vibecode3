import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt: "Learn the basics of web development and start your journey. This comprehensive guide covers HTML, CSS, and JavaScript fundamentals.",
    date: "2023-06-15",
    slug: "getting-started-with-web-development",
    category: "Development"
  },
  {
    id: 2,
    title: "The Importance of SEO",
    excerpt: "Discover why SEO is crucial for your website's success and how to implement effective SEO strategies to improve your visibility.",
    date: "2023-07-22",
    slug: "importance-of-seo",
    category: "Marketing"
  },
  {
    id: 3,
    title: "Responsive Design Best Practices",
    excerpt: "Tips and tricks for creating responsive websites that look great on all devices, from mobile phones to desktop computers.",
    date: "2023-08-10",
    slug: "responsive-design-best-practices",
    category: "Design"
  },
  {
    id: 4,
    title: "Introduction to React",
    excerpt: "Explore the fundamentals of React, a popular JavaScript library for building user interfaces, and learn how to create your first React app.",
    date: "2023-09-05",
    slug: "introduction-to-react",
    category: "Development"
  },
  {
    id: 5,
    title: "Content Marketing Strategies",
    excerpt: "Effective content marketing strategies to help you reach your target audience and achieve your business goals.",
    date: "2023-10-18",
    slug: "content-marketing-strategies",
    category: "Marketing"
  },
  {
    id: 6,
    title: "UI/UX Design Principles",
    excerpt: "Learn the key principles of UI/UX design and how to create user-friendly interfaces that enhance the user experience.",
    date: "2023-11-30",
    slug: "ui-ux-design-principles",
    category: "Design"
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Insights, tips, and updates from our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.id} className="flex flex-col space-y-4 border rounded-lg p-6 bg-white dark:bg-gray-950">
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src={`/blog-post-concept.png?height=200&width=400&query=blog%20post%20${post.id}`}
                      width={400}
                      height={200}
                      alt={post.title}
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                    <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                  </div>
                  <div className="flex-1" />
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-medium text-primary">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
