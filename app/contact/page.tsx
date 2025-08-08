"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContentstackLivePreview } from "@/components/contentstack-live-preview"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ContentstackLivePreview contentTypeUid="contact_page" entryUid="contact_page_uid">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-contentstack-stone to-contentstack-cement">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white" data-cs-field="title">
                    Contact Us
                  </h1>
                  <p
                    className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="description"
                  >
                    We'd love to hear from you. Get in touch with our team to learn more about Contentstack.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Contact Form */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold" data-cs-field="form_title">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400" data-cs-field="form_description">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-contentstack-purple hover:bg-contentstack-purple/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold" data-cs-field="info_title">
                      Contact Information
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400" data-cs-field="info_description">
                      You can also reach out to us using the information below.
                    </p>
                  </div>
                  <div className="grid gap-6" data-cs-field="contact_details">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-contentstack-purple" />
                      <div>
                        <h3 className="text-lg font-medium">Email</h3>
                        <p className="text-gray-500 dark:text-gray-400">info@contentstack.com</p>
                        <p className="text-gray-500 dark:text-gray-400">support@contentstack.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-contentstack-purple" />
                      <div>
                        <h3 className="text-lg font-medium">Phone</h3>
                        <p className="text-gray-500 dark:text-gray-400">+1 (415) 255-5555</p>
                        <p className="text-gray-500 dark:text-gray-400">+44 20 3890 5890</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-contentstack-purple" />
                      <div>
                        <h3 className="text-lg font-medium">Address</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          201 Mission Street
                          <br />
                          Suite 1200
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium" data-cs-field="office_hours_title">
                      Business Hours
                    </h3>
                    <div className="grid grid-cols-2 gap-2" data-cs-field="office_hours">
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-gray-500 dark:text-gray-400">9:00 AM - 5:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Saturday - Sunday</p>
                        <p className="text-gray-500 dark:text-gray-400">Closed</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium" data-cs-field="social_title">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4" data-cs-field="social_links">
                      <a
                        href="https://twitter.com/contentstack"
                        className="text-gray-500 hover:text-contentstack-purple dark:text-gray-400 dark:hover:text-contentstack-purple"
                      >
                        Twitter
                      </a>
                      <a
                        href="https://www.linkedin.com/company/contentstack"
                        className="text-gray-500 hover:text-contentstack-purple dark:text-gray-400 dark:hover:text-contentstack-purple"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://www.facebook.com/contentstack"
                        className="text-gray-500 hover:text-contentstack-purple dark:text-gray-400 dark:hover:text-contentstack-purple"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.youtube.com/contentstack"
                        className="text-gray-500 hover:text-contentstack-purple dark:text-gray-400 dark:hover:text-contentstack-purple"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold" data-cs-field="map_title">
                    Find Us
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    data-cs-field="map_description"
                  >
                    Visit our office at the address below.
                  </p>
                </div>
              </div>
              <div
                className="mt-8 h-[400px] w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700"
                data-cs-field="map_image"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968358861895!2d-122.39681492392044!3d37.78797871231333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c23cc4ebb%3A0x7f9e3ee0bd678a18!2s201%20Mission%20St%20%231200%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1691432868347!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
      </ContentstackLivePreview>
    </div>
  )
}
