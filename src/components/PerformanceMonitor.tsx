'use client';

import { useEffect } from 'react';

// Type definitions for Performance API
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface NavigationTiming extends PerformanceEntry {
  responseStart: number;
  requestStart: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'LCP', {
              value: Math.round(lastEntry.startTime),
              event_category: 'Web Vitals',
            });
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const firstInputEntry = entry as PerformanceEventTiming;
          console.log(
            'FID:',
            firstInputEntry.processingStart - firstInputEntry.startTime
          );
          if (window.gtag) {
            window.gtag('event', 'FID', {
              value: Math.round(
                firstInputEntry.processingStart - firstInputEntry.startTime
              ),
              event_category: 'Web Vitals',
            });
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const layoutShiftEntry = entry as LayoutShift;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
            console.log('CLS:', clsValue);
            if (window.gtag) {
              window.gtag('event', 'CLS', {
                value: Math.round(clsValue * 1000) / 1000,
                event_category: 'Web Vitals',
              });
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        if (firstEntry) {
          console.log('FCP:', firstEntry.startTime);
          if (window.gtag) {
            window.gtag('event', 'FCP', {
              value: Math.round(firstEntry.startTime),
              event_category: 'Web Vitals',
            });
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

      // Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const navigationEntry = entry as NavigationTiming;
          if (navigationEntry.entryType === 'navigation') {
            const ttfb =
              navigationEntry.responseStart - navigationEntry.requestStart;
            console.log('TTFB:', ttfb);
            if (window.gtag) {
              window.gtag('event', 'TTFB', {
                value: Math.round(ttfb),
                event_category: 'Web Vitals',
              });
            }
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Cleanup observers on unmount
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
      };
    }
  }, []);

  return null;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
