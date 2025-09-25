/**
 * Utility functions for device detection
 */

export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isIOSDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

export const isAndroidDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /Android/i.test(navigator.userAgent);
};

export const getPlatformLinks = () => {
  const isMobile = isMobileDevice();

  return {
    web: 'https://web.sherif-faranca.com',
    mobile: {
      android: 'https://android.sherif-faranca.com',
      ios: 'https://ios.sherif-faranca.com',
    },
    isMobile,
  };
};

export const handleGetStartedClick = () => {
  const { web, mobile, isMobile } = getPlatformLinks();

  if (isMobile) {
    // Detect specific mobile platform
    if (isIOSDevice()) {
      // iOS devices (iPhone, iPad, iPod)
      window.open(mobile.ios, '_blank');
    } else if (isAndroidDevice()) {
      // Android devices
      window.open(mobile.android, '_blank');
    } else {
      // Other mobile devices - default to Android
      window.open(mobile.android, '_blank');
    }
  } else {
    // For web/desktop devices
    window.open(web, '_blank');
  }
};
