/**
 * Utility functions for device detection
 */

export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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
    // For mobile devices, we'll show both options or redirect to a mobile landing page
    // For now, let's redirect to Android by default, but you can modify this logic
    window.open(mobile.android, '_blank');
  } else {
    // For web/desktop devices
    window.open(web, '_blank');
  }
};
