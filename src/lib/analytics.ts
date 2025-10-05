// Analytics utility for performance monitoring

// Add this type declaration at the top
declare global {
  interface Window {
    gtag?: (
      command: string, 
      event: string, 
      params?: Record<string, unknown>
    ) => void
  }
}

export const trackEvent = (event: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, properties)
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    })
  }
}

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    timestamp: new Date().toISOString(),
  })
}

export const trackButtonClick = (buttonName: string, section?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    section: section,
    timestamp: new Date().toISOString(),
  })
}

// Performance monitoring
export const measurePageLoad = () => {
  if (typeof window !== 'undefined' && typeof performance !== 'undefined') {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        trackEvent('page_load_time', {
          load_time: navigation.loadEventEnd - navigation.loadEventStart,
          dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        })
      }
    })
  }
}

// Error tracking
export const trackError = (error: Error, context?: string) => {
  trackEvent('error', {
    message: error.message,
    stack: error.stack,
    context: context,
    timestamp: new Date().toISOString(),
  })
}