// ============================================================================
// FAQ API TYPES
// ============================================================================

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  visibilityOrder: number;
}

export interface FAQApiResponse {
  data: FAQItem[];
  success: boolean;
  message: string;
}

export interface FAQApiError {
  success: false;
  message: string;
  data?: null;
}
