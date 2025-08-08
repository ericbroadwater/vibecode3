'use client'

import { useEffect, ReactNode } from 'react'

interface ContentstackAppProviderProps {
  children: ReactNode
}

export function ContentstackAppProvider({ children }: ContentstackAppProviderProps) {
  useEffect(() => {
    // Initialize Contentstack App SDK
    if (typeof window !== 'undefined') {
      // Check if we're in the Contentstack Visual Builder
      const isInVisualBuilder = window.location.search.includes('cs_app=visual-builder')
      
      if (isInVisualBuilder) {
        // Add Visual Builder specific initialization
        const visualBuilderScript = document.createElement('script')
        visualBuilderScript.innerHTML = `
          window.addEventListener('ContentstackVisualBuilderReady', function() {
            console.log('Contentstack Visual Builder is ready');
            
            // Initialize the Visual Builder connection
            if (window.ContentstackVisualBuilder) {
              window.ContentstackVisualBuilder.initialize({
                stackDetails: {
                  apiKey: '${process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY || ''}',
                  environment: '${process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT || ''}',
                },
                editMode: true
              });
            }
          });
        `
        document.head.appendChild(visualBuilderScript)
      }
    }
  }, [])

  return <>{children}</>
}
