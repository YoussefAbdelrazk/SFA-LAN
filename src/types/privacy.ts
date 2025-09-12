// ============================================================================
// PRIVACY API TYPES
// ============================================================================

export interface PrivacyData {
  title: string;
  tiltleImage: string;
  section1: string;
  content1: string;
  section2: string;
  content2: string;
  imageUrl: string;
}

export interface PrivacyApiResponse {
  data: PrivacyData;
  success: boolean;
  message: string;
}

export interface PrivacyApiError {
  success: false;
  message: string;
  data?: null;
}
