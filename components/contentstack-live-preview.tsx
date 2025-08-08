'use client'

import { useEffect, ReactNode } from 'react'
import ContentstackLivePreview from '@contentstack/live-preview-utils'

interface ContentstackLivePreviewProps {
  children: ReactNode
  contentTypeUid: string
  entryUid: string
}

export function ContentstackLivePreview({ children, contentTypeUid, entryUid }: ContentstackLivePreviewProps) {
  useEffect(() => {
    // Initialize Live Preview SDK
    ContentstackLivePreview.init({
      enable: process.env.NEXT_PUBLIC_CONTENTSTACK_LIVE_PREVIEW === 'true',
      stackDetails: {
        apiKey: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY || '',
        environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT || '',
      },
      ssr: false,
    })
    
    // Connect to Visual Builder if in edit mode
    if (typeof window !== 'undefined' && window.location.search.includes('cs_app=visual-builder')) {
      const visualBuilderBridge = document.createElement('script')
      visualBuilderBridge.src = 'https://app.contentstack.com/visual-builder/sdk/visual-builder-sdk.js'
      visualBuilderBridge.async = true
      document.body.appendChild(visualBuilderBridge)
    }
    
    return () => {
      // Clean up if needed
      if (typeof window !== 'undefined') {
        const bridgeScript = document.querySelector('script[src="https://app.contentstack.com/visual-builder/sdk/visual-builder-sdk.js"]')
        if (bridgeScript) {
          document.body.removeChild(bridgeScript)
        }
      }
    }
  }, [])

  return (
    <div 
      data-cs-content-type-uid={contentTypeUid}
      data-cs-entry-uid={entryUid}
      data-cs-live-preview="true"
    >
      {children}
    </div>
  )
}
