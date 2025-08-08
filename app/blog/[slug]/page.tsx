import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

// This would typically come from a CMS or database
const blogPosts = {
  "getting-started-with-web-development": {
    title: "Getting Started with Web Development",
    date: "2023-06-15",
    category: "Development",
    content: `
      <p>Web development is an exciting field that allows you to create websites and web applications that can be accessed by people all over the world. Whether you're looking to start a new career, build a personal project, or just learn something new, web development is a valuable skill to have.</p>
      
      <h2>The Basics: HTML, CSS, and JavaScript</h2>
      
      <p>At its core, web development involves three main technologies:</p>
      
      <ul>
        <li><strong>HTML (HyperText Markup Language)</strong>: The structure of web pages</li>
        <li><strong>CSS (Cascading Style Sheets)</strong>: The presentation and styling</li>
        <li><strong>JavaScript</strong>: The behavior and interactivity</li>
      </ul>
      
      <p>These three technologies work together to create the websites and web applications we use every day.</p>
      
      <h2>Getting Started</h2>
      
      <p>To get started with web development, you'll need a few things:</p>
      
      <ol>
        <li>A text editor (like Visual Studio Code, Sublime Text, or Atom)</li>
        <li>A web browser (like Chrome, Firefox, or Edge)</li>
        <li>Patience and persistence</li>
      </ol>
      
      <p>Once you have these, you can start learning the basics of HTML, CSS, and JavaScript through online tutorials, courses, or books.</p>
      
      <h2>Next Steps</h2>
      
      <p>After you've learned the basics, you might want to explore:</p>
      
      <ul>
        <li>Frameworks and libraries like React, Angular, or Vue.js</li>
        <li>Backend development with Node.js, Python, or Ruby</li>
        <li>Databases like MySQL, MongoDB, or PostgreSQL</li>
      </ul>
      
      <p>The world of web development is vast and constantly evolving, so there's always something new to learn!</p>
    `
  },
  "importance-of-seo": {
    title: "The Importance of SEO",
    date: "2023-07-22",
    category: "Marketing",
    content: `
      <p>Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. It's a crucial aspect of digital marketing that can significantly impact your online visibility and success.</p>
      
      <h2>Why SEO Matters</h2>
      
      <p>Here are some reasons why SEO is important for your website:</p>
      
      <ul>
        <li><strong>Increased Visibility</strong>: Higher rankings in search results lead to more visibility and more clicks.</li>
        <li><strong>Credibility and Trust</strong>: Websites that appear at the top of search results are often perceived as more credible and trustworthy.</li>
        <li><strong>Better User Experience</strong>: Good SEO practices often lead to a better user experience, which can increase engagement and conversions.</li>
        <li><strong>Cost-Effective Marketing</strong>: While SEO requires an investment of time and resources, it can be more cost-effective than paid advertising in the long run.</li>
      </ul>
      
      <h2>Key SEO Strategies</h2>
      
      <p>To improve your website's SEO, consider these strategies:</p>
      
      <ol>
        <li><strong>Keyword Research</strong>: Identify the terms and phrases your target audience is searching for.</li>
        <li><strong>On-Page Optimization</strong>: Optimize your website's content, meta tags, and structure for search engines.</li>
        <li><strong>Technical SEO</strong>: Ensure your website is technically sound, with fast loading times, mobile-friendliness, and secure connections.</li>
        <li><strong>Content Creation</strong>: Develop high-quality, relevant content that addresses your audience's needs and questions.</li>
        <li><strong>Link Building</strong>: Acquire high-quality backlinks from reputable websites in your industry.</li>
      </ol>
      
      <h2>Measuring SEO Success</h2>
      
      <p>To determine if your SEO efforts are successful, track metrics such as:</p>
      
      <ul>
        <li>Organic traffic</li>
        <li>Keyword rankings</li>
        <li>Bounce rate</li>
        <li>Conversion rate</li>
        <li>Backlink profile</li>
      </ul>
      
      <p>By regularly monitoring these metrics, you can adjust your SEO strategy as needed to achieve better results.</p>
    `
  },
  "responsive-design-best-practices": {
    title: "Responsive Design Best Practices",
    date: "2023-08-10",
    category: "Design",
    content: `
      <p>Responsive design is an approach to web design that makes your websites look good on all devices, from desktop computers to smartphones. With the increasing use of mobile devices to access the internet, responsive design has become essential for providing a good user experience.</p>
      
      <h2>Key Principles of Responsive Design</h2>
      
      <p>Here are some fundamental principles of responsive design:</p>
      
      <ul>
        <li><strong>Fluid Grids</strong>: Use relative units like percentages instead of fixed units like pixels for layout elements.</li>
        <li><strong>Flexible Images</strong>: Make images scale with the size of the screen or viewport.</li>
        <li><strong>Media Queries</strong>: Apply different styles based on the characteristics of the device, such as width, height, or orientation.</li>
      </ul>
      
      <h2>Best Practices for Responsive Design</h2>
      
      <ol>
        <li><strong>Mobile-First Approach</strong>: Design for mobile devices first, then enhance the design for larger screens.</li>
        <li><strong>Simplify Navigation</strong>: Use hamburger menus or other compact navigation patterns for small screens.</li>
        <li><strong>Optimize Images</strong>: Use appropriately sized images and modern formats like WebP to reduce load times.</li>
        <li><strong>Test on Real Devices</strong>: Don't rely solely on browser developer tools; test your design on actual devices when possible.</li>
        <li><strong>Consider Touch Interactions</strong>: Ensure buttons and links are large enough to be easily tapped on touch screens.</li>
      </ol>
      
      <h2>Tools for Responsive Design</h2>
      
      <p>Several tools can help you create and test responsive designs:</p>
      
      <ul>
        <li><strong>CSS Frameworks</strong>: Bootstrap, Tailwind CSS, and Foundation provide responsive grid systems and components.</li>
        <li><strong>Browser Developer Tools</strong>: Most modern browsers include device emulation features for testing responsive designs.</li>
        <li><strong>Online Testing Tools</strong>: Services like BrowserStack and Responsinator allow you to test your website on various devices and screen sizes.</li>
      </ul>
      
      <p>By following these best practices and using the right tools, you can create websites that provide an excellent user experience across all devices.</p>
    `
  },
  "introduction-to-react": {
    title: "Introduction to React",
    date: "2023-09-05",
    category: "Development",
    content: `
      <p>React is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed and maintained by Facebook (now Meta), React has gained widespread adoption in the web development community due to its efficiency, flexibility, and robust ecosystem.</p>
      
      <h2>Key Concepts in React</h2>
      
      <p>To understand React, you need to grasp these fundamental concepts:</p>
      
      <ul>
        <li><strong>Components</strong>: React applications are built using components, which are reusable pieces of UI.</li>
        <li><strong>JSX</strong>: A syntax extension for JavaScript that looks similar to HTML and makes it easier to write and understand React components.</li>
        <li><strong>Props</strong>: Short for properties, props allow you to pass data from parent to child components.</li>
        <li><strong>State</strong>: An object that determines how a component renders and behaves.</li>
        <li><strong>Virtual DOM</strong>: A lightweight copy of the actual DOM that React uses to optimize rendering performance.</li>
      </ul>
      
      <h2>Setting Up Your First React App</h2>
      
      <p>The easiest way to create a new React application is by using Create React App, a tool developed by the React team:</p>
      
      <pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>
      
      <p>This will set up a new React project with all the necessary configurations and start a development server.</p>
      
      <h2>Creating Your First Component</h2>
      
      <p>Here's a simple example of a React component:</p>
      
      <pre><code>import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;</code></pre>
      
      <p>You can then use this component in another component like this:</p>
      
      <pre><code>import React from 'react';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;</code></pre>
      
      <h2>Next Steps in Your React Journey</h2>
      
      <p>After learning the basics, you might want to explore:</p>
      
      <ul>
        <li>Hooks (like useState, useEffect, useContext)</li>
        <li>React Router for navigation</li>
        <li>State management with Redux or Context API</li>
        <li>Server-side rendering with Next.js</li>
      </ul>
      
      <p>React has a vibrant ecosystem and community, so there are plenty of resources available to help you continue learning and building amazing applications.</p>
    `
  },
  "content-marketing-strategies": {
    title: "Content Marketing Strategies",
    date: "2023-10-18",
    category: "Marketing",
    content: `
      <p>Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action. Unlike traditional marketing, content marketing aims to provide value to your audience rather than directly promoting your brand.</p>
      
      <h2>Why Content Marketing Matters</h2>
      
      <p>Content marketing offers numerous benefits for businesses:</p>
      
      <ul>
        <li><strong>Builds Trust and Authority</strong>: By providing valuable information, you position your brand as an authority in your industry.</li>
        <li><strong>Improves SEO</strong>: Quality content helps your website rank higher in search engine results.</li>
        <li><strong>Generates Leads</strong>: Content can attract potential customers and guide them through the buyer's journey.</li>
        <li><strong>Fosters Relationships</strong>: Engaging content helps build and maintain relationships with your audience.</li>
        <li><strong>Cost-Effective</strong>: Content marketing typically costs less than traditional advertising while generating more leads.</li>
      </ul>
      
      <h2>Effective Content Marketing Strategies</h2>
      
      <ol>
        <li><strong>Define Your Audience</strong>: Create detailed buyer personas to understand who you're creating content for.</li>
        <li><strong>Set Clear Goals</strong>: Determine what you want to achieve with your content marketing efforts.</li>
        <li><strong>Develop a Content Calendar</strong>: Plan your content in advance to ensure consistency and relevance.</li>
        <li><strong>Create Diverse Content Types</strong>: Blog posts, videos, podcasts, infographics, and social media posts can all be part of your strategy.</li>
        <li><strong>Focus on Quality Over Quantity</strong>: It's better to publish fewer pieces of high-quality content than numerous mediocre ones.</li>
        <li><strong>Optimize for SEO</strong>: Research keywords and incorporate them naturally into your content.</li>
        <li><strong>Promote Your Content</strong>: Share your content on social media, through email newsletters, and other channels.</li>
        <li><strong>Analyze and Adjust</strong>: Regularly review your content's performance and adjust your strategy accordingly.</li>
      </ol>
      
      <h2>Content Marketing Metrics to Track</h2>
      
      <p>To measure the success of your content marketing efforts, monitor these metrics:</p>
      
      <ul>
        <li>Website traffic</li>
        <li>Engagement (time on page, comments, shares)</li>
        <li>Lead generation</li>
        <li>Conversion rates</li>
        <li>SEO rankings</li>
        <li>Return on investment (ROI)</li>
      </ul>
      
      <p>By implementing these strategies and tracking the right metrics, you can create a content marketing plan that effectively reaches your target audience and achieves your business goals.</p>
    `
  },
  "ui-ux-design-principles": {
    title: "UI/UX Design Principles",
    date: "2023-11-30",
    category: "Design",
    content: `
      <p>User Interface (UI) and User Experience (UX) design are crucial aspects of creating digital products that are both visually appealing and easy to use. While UI focuses on the look and feel of a product, UX encompasses the entire user journey and how users interact with a product.</p>
      
      <h2>Key UI Design Principles</h2>
      
      <p>Here are some fundamental principles of effective UI design:</p>
      
      <ul>
        <li><strong>Clarity</strong>: The interface should be clear and easy to understand, with intuitive navigation and clear visual hierarchy.</li>
        <li><strong>Consistency</strong>: Use consistent design elements, patterns, and terminology throughout the interface.</li>
        <li><strong>Visual Hierarchy</strong>: Arrange elements to guide users' attention to the most important information first.</li>
        <li><strong>Accessibility</strong>: Design for users of all abilities, ensuring that everyone can use your product.</li>
        <li><strong>Simplicity</strong>: Keep the interface simple and focused, avoiding unnecessary complexity.</li>
      </ul>
      
      <h2>Key UX Design Principles</h2>
      
      <p>For a great user experience, consider these principles:</p>
      
      <ul>
        <li><strong>User-Centered Design</strong>: Focus on the needs, goals, and preferences of your users.</li>
        <li><strong>Usability</strong>: Make your product easy to use, with minimal friction and cognitive load.</li>
        <li><strong>Feedback</strong>: Provide clear feedback for user actions to help them understand what's happening.</li>
        <li><strong>Efficiency</strong>: Design for efficiency, allowing users to accomplish tasks with minimal effort.</li>
        <li><strong>Error Prevention</strong>: Design to prevent errors, and when they do occur, make them easy to recover from.</li>
      </ul>
      
      <h2>The UI/UX Design Process</h2>
      
      <p>A typical UI/UX design process includes these steps:</p>
      
      <ol>
        <li><strong>Research</strong>: Understand your users, their needs, and the context in which they'll use your product.</li>
        <li><strong>Information Architecture</strong>: Organize and structure content in a way that makes sense to users.</li>
        <li><strong>Wireframing</strong>: Create low-fidelity representations of your design to establish layout and functionality.</li>
        <li><strong>Prototyping</strong>: Build interactive prototypes to test and refine the user experience.</li>
        <li><strong>Visual Design</strong>: Apply visual elements like color, typography, and imagery to create an appealing interface.</li>
        <li><strong>Testing</strong>: Conduct usability testing to identify and address issues.</li>
        <li><strong>Implementation</strong>: Work with developers to bring the design to life.</li>
        <li><strong>Iteration</strong>: Continuously improve the design based on user feedback and data.</li>
      </ol>
      
      <h2>Tools for UI/UX Design</h2>
      
      <p>Popular tools for UI/UX design include:</p>
      
      <ul>
        <li>Figma</li>
        <li>Adobe XD</li>
        <li>Sketch</li>
        <li>InVision</li>
        <li>Axure RP</li>
        <li>Balsamiq</li>
      </ul>
      
      <p>By applying these principles and following a structured design process, you can create digital products that not only look good but also provide a seamless and enjoyable user experience.</p>
    `
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <article className="container max-w-3xl px-4 py-12 md:py-20 lg:py-32">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-primary mb-8">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
          </Link>
          
          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <Image
              src={`/abstract-geometric-shapes.png?height=400&width=800&query=${encodeURIComponent(post.title)}`}
              width={800}
              height={400}
              alt={post.title}
              className="object-cover w-full"
              priority
            />
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">{post.title}</h1>
          
          <div className="prose prose-gray max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="border-t mt-12 pt-8">
            <h2 className="text-2xl font-bold mb-4">Share this post</h2>
            <div className="flex gap-4">
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                Twitter
              </button>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                Facebook
              </button>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                LinkedIn
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
