// ============================================================================
// SUBSCRIPTION API TYPES
// ============================================================================

export interface SubscriptionPlan {
  id: string;
  planName: string;
  features: string[];
  priceEGP: number;
}

export interface PaginationInfo {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

export interface SubscriptionData {
  items: SubscriptionPlan[];
  pagination: PaginationInfo;
}

export interface SubscriptionApiResponse {
  data: SubscriptionData;
  success: boolean;
  message: string;
}

export interface SubscriptionApiError {
  success: false;
  message: string;
  data?: null;
}

export type SubscriptionType = 'monthly' | 'yearly';

export interface SubscriptionParams {
  pageNumber?: number;
  pageSize?: number;
}
