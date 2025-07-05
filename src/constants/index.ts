// ============================================================================
// APP CONSTANTS
// ============================================================================

export const SITE_CONFIG = {
  name: "Sherife Franca",
  description: "Premium Fitness Platform - Get Fit. Pay Less. Stay Strong.",
  url: "https://sherife-franca.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/sherife-franca",
    github: "https://github.com/sherife-franca",
    instagram: "https://instagram.com/sherife-franca",
    facebook: "https://facebook.com/sherife-franca",
    linkedin: "https://linkedin.com/company/sherife-franca",
    youtube: "https://youtube.com/sherife-franca"
  }
} as const;

// ============================================================================
// THEME CONSTANTS
// ============================================================================

export const COLORS = {
  primary: "#3E1492",
  primaryDark: "#2D0F6B",
  secondary: "#FCFCFD",
  text: {
    primary: "#000000",
    secondary: "#475467",
    light: "#FCFCFD"
  },
  background: {
    primary: "#FCFCFD",
    gradient: "linear-gradient(to right, #1a1442, #3E1492)"
  }
} as const;

// ============================================================================
// ANIMATION CONSTANTS
// ============================================================================

export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2
} as const;

export const ANIMATION_EASES = {
  power1: "power1.out",
  power2: "power2.out",
  power3: "power3.out",
  back: "back.out(1.7)",
  elastic: "elastic.out(1, 0.8)",
  sine: "sine.inOut"
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
} as const;

// ============================================================================
// ROUTES
// ============================================================================

export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/#services",
  pricing: "/#pricing",
  contact: "/#contact"
} as const;

// ============================================================================
// API ENDPOINTS
// ============================================================================

export const API_ENDPOINTS = {
  contact: "/api/contact",
  newsletter: "/api/newsletter",
  pricing: "/api/pricing"
} as const;
