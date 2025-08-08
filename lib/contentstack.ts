import Contentstack from 'contentstack'

// Initialize Contentstack SDK
const Stack = Contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY || 'your_api_key',
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN || 'your_delivery_token',
  environment: process.env.CONTENTSTACK_ENVIRONMENT || 'development',
  region: process.env.CONTENTSTACK_REGION || 'us',
  live_preview: {
    management_token: process.env.CONTENTSTACK_MANAGEMENT_TOKEN || 'your_management_token',
    enable: process.env.CONTENTSTACK_LIVE_PREVIEW === 'true',
    host: process.env.CONTENTSTACK_API_HOST || 'api.contentstack.io',
  },
})

// Enable live editing if in development mode
if (process.env.NODE_ENV === 'development') {
  Stack.setHost('api.contentstack.io')
}

// Helper function to get home page content
export async function getHomePage() {
  try {
    // In a real implementation, this would fetch from Contentstack
    // const entry = await Stack.ContentType('home_page').Entry('home_page_uid').fetch()
    // return entry.toJSON()
    
    // For demo purposes, returning mock data
    return {
      hero: {
        title: "Learn Contentstack",
        description: "Master the art of headless content management. Explore comprehensive guides, tutorials, and best practices for each Contentstack product."
      },
      products: [
        {
          title: "Headless CMS",
          description: "Learn how to create, manage, and deliver content using our flexible, API-first content management system.",
          slug: "headless-cms",
          icon: "/icons/headless-cms-icon.png"
        },
        {
          title: "Experience Builder",
          description: "Master visual editing tools that empower marketers to create digital experiences without code.",
          slug: "experience-builder",
          icon: "/icons/experience-builder-icon.png"
        },
        {
          title: "Marketplace",
          description: "Discover how to extend your Contentstack capabilities with apps, extensions, and integrations.",
          slug: "marketplace",
          icon: "/icons/marketplace-icon.png"
        },
        {
          title: "Automation Hub",
          description: "Learn to streamline your content operations with powerful workflow automation tools.",
          slug: "automation-hub",
          icon: "/icons/automation-hub-icon.png"
        },
        {
          title: "Launch",
          description: "Master content release orchestration and scheduling across multiple channels and environments.",
          slug: "launch",
          icon: "/icons/launch-icon.png"
        },
        {
          title: "Workflows",
          description: "Learn to customize content approval processes to match your team's requirements.",
          slug: "workflows",
          icon: "/icons/workflows-icon.png"
        }
      ]
    }
  } catch (error) {
    console.error('Error fetching home page:', error)
    return {
      hero: {
        title: "Learn Contentstack",
        description: "Master the art of headless content management. Explore comprehensive guides, tutorials, and best practices for each Contentstack product."
      },
      products: [],
      testimonials: []
    }
  }
}

// Helper function to get product page content
export async function getProductPage(slug: string) {
  try {
    // In a real implementation, this would fetch from Contentstack
    // const entry = await Stack.ContentType('product_page').Query()
    //   .where('slug', slug)
    //   .includeCount()
    //   .toJSON()
    //   .find()
    
    // For demo purposes, returning mock educational content based on slug
    const products = {
      'headless-cms': {
        uid: 'headless_cms_uid',
        title: "How to Use Headless CMS",
        description: "Learn how to create, manage, and deliver content using Contentstack's flexible, API-first content management system.",
        heroImage: "/product-images/headless-cms-hero.png",
        documentationUrl: "https://www.contentstack.com/docs/developers/cms/",
        // Educational content structure would continue here...
      },
      'experience-builder': {
        uid: 'experience_builder_uid',
        title: "How to Use Experience Builder",
        description: "Learn how to create and manage digital experiences with visual editing tools that empower marketers to build without code.",
        heroImage: "/product-images/experience-builder-hero.png",
        documentationUrl: "https://www.contentstack.com/docs/developers/experience-builder/",
        // Educational content structure would continue here...
      },
      'marketplace': {
        uid: 'marketplace_uid',
        title: "How to Use Marketplace",
        description: "Discover how to extend your Contentstack capabilities with apps, extensions, and integrations.",
        heroImage: "/product-images/marketplace-hero.png",
        documentationUrl: "https://www.contentstack.com/docs/developers/marketplace/",
        // Educational content structure would continue here...
      },
      'automation-hub': {
        uid: 'automation_hub_uid',
        title: "How to Use Automation Hub",
        description: "Learn to streamline your content operations with powerful workflow automation tools.",
        heroImage: "/product-images/automation-hub-hero.png",
        documentationUrl: "https://www.contentstack.com/docs/developers/automation-hub/",
        // Educational content structure would continue here...
      },
      'launch': {
        uid: 'launch_uid',
        title: "How to Use Launch",
        description: "Master content release orchestration and scheduling across multiple channels and environments.",
        heroImage: "/product-images/launch-hero.png",
        documentationUrl: "https://www.contentstack.com/docs/developers/launch/",
        // Educational content structure would continue here...
      },
      'workflows': {
        uid: 'workflows_uid',
        title: "How to Use Workflows",
        description: "Learn to customize content approval processes to match your team's requirements.",
        heroImage: "/product-images/workflows-hero.png",
        documentationUrl: "https://www.contentstack.com/docs/developers/workflows/",
        // Educational content structure would continue here...
      }
    }
    
    return products[slug] || {
      uid: 'default_uid',
      title: "Learning Guide Not Found",
      description: "The requested learning guide is not available."
    }
  } catch (error) {
    console.error(`Error fetching product page for ${slug}:`, error)
    return {
      uid: 'error_uid',
      title: "Error Loading Guide",
      description: "There was an error loading the learning guide. Please try again later."
    }
  }
}

export default Stack
