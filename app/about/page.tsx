import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Learn more about our company and our mission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                  <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    Founded in 2010, our company began with a simple mission: to provide high-quality services and valuable content to our customers. Over the years, we've grown from a small team of passionate individuals to a thriving company with a global reach.
                  </p>
                  <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    Our journey hasn't always been easy, but our commitment to excellence and customer satisfaction has remained unwavering. We've faced challenges, celebrated successes, and learned valuable lessons along the way.
                  </p>
                  <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    Today, we continue to innovate and evolve, always striving to exceed expectations and make a positive impact in our industry.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/office-team-collaboration.png"
                  width={600}
                  height={400}
                  alt="Our Team"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The principles that guide everything we do.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from the quality of our content to the service we provide."
                },
                {
                  title: "Integrity",
                  description: "We believe in honesty, transparency, and doing what's right, even when it's difficult."
                },
                {
                  title: "Innovation",
                  description: "We're constantly looking for new and better ways to serve our customers and improve our offerings."
                },
                {
                  title: "Collaboration",
                  description: "We believe that the best results come from working together and valuing diverse perspectives."
                },
                {
                  title: "Customer Focus",
                  description: "Our customers are at the center of everything we do. Their success is our success."
                },
                {
                  title: "Continuous Learning",
                  description: "We're committed to growth and improvement, both as individuals and as an organization."
                }
              ].map((value, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-950">
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The talented individuals who make our company great.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Jane Smith",
                  title: "CEO & Founder",
                  bio: "Jane has over 15 years of experience in the industry and is passionate about building great teams."
                },
                {
                  name: "John Doe",
                  title: "CTO",
                  bio: "John leads our technical team and ensures we're using the latest technologies to serve our customers."
                },
                {
                  name: "Emily Johnson",
                  title: "Head of Content",
                  bio: "Emily oversees our content strategy and ensures we're delivering valuable information to our audience."
                },
                {
                  name: "Michael Brown",
                  title: "Marketing Director",
                  bio: "Michael develops and implements our marketing strategies to reach new customers."
                },
                {
                  name: "Sarah Wilson",
                  title: "Customer Success Manager",
                  bio: "Sarah works closely with our customers to ensure they're getting the most out of our services."
                },
                {
                  name: "David Lee",
                  title: "Lead Developer",
                  bio: "David leads our development team and is responsible for building and maintaining our digital products."
                }
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 border rounded-lg p-6 bg-white dark:bg-gray-950">
                  <Image
                    src={`/professional-headshot.png?height=150&width=150&query=professional%20headshot%20${index + 1}`}
                    width={150}
                    height={150}
                    alt={member.name}
                    className="rounded-full object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.title}</p>
                    <p className="text-gray-500 dark:text-gray-400">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
