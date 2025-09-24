// Contact configuration
export const CONTACT_CONFIG = {
  // WhatsApp Business number - Replace with your actual WhatsApp number
  whatsappNumber: '+1234567890', // Format: +[country code][phone number]

  // Hotline configuration
  hotline: {
    // Default fallback number
    defaultNumber: '+1234567890',
    // Display name for hotline
    displayName: {
      ar: 'خط المساعدة',
      en: 'Hotline',
      fr: "Ligne d'assistance",
    },
  },

  // WhatsApp messages in different languages
  whatsappMessages: {
    ar: 'مرحباً! أريد معرفة المزيد عن خدمات اللياقة البدنية في منصة شريف فرنسا.',
    en: 'Hello! I would like to know more about the fitness services at Sherife Franca Platform.',
    fr: 'Bonjour! Je voudrais en savoir plus sur les services de fitness de la plateforme Sherife Franca.',
  },

  // Business hours
  businessHours: {
    ar: 'الاثنين - الجمعة: ٦:٠٠ ص - ١٠:٠٠ م\nالسبت - الأحد: ٨:٠٠ ص - ٨:٠٠ م',
    en: 'Monday - Friday: 6:00 AM - 10:00 PM\nSaturday - Sunday: 8:00 AM - 8:00 PM',
    fr: 'Lundi - Vendredi : 6h00 - 22h00\nSamedi - Dimanche : 8h00 - 20h00',
  },

  // Contact information
  contactInfo: {
    address: {
      ar: '١٢٣ شارع اللياقة، مدينة الصحة، هـس ١٢٣٤٥',
      en: '123 Fitness Street, Health City, HC 12345',
      fr: '123 Rue du Fitness, Ville Santé, VS 12345',
    },
    phone: {
      ar: '+١ (٥٥٥) ١٢٣-٤٥٦٧',
      en: '+1 (555) 123-4567',
      fr: '+33 (0)1 23 45 67 89',
    },
    email: 'info@sherife-franca.com',
  },
};

// Helper function to get WhatsApp URL
export const getWhatsAppUrl = (locale: string, customMessage?: string) => {
  const number = CONTACT_CONFIG.whatsappNumber;
  const message =
    customMessage ||
    CONTACT_CONFIG.whatsappMessages[locale as keyof typeof CONTACT_CONFIG.whatsappMessages] ||
    CONTACT_CONFIG.whatsappMessages.en;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

// Helper function to get hotline number with fallback
export const getHotlineNumber = (apiData?: { hotline?: string; phone?: string }): string => {
  return apiData?.hotline || apiData?.phone || CONTACT_CONFIG.hotline.defaultNumber;
};

// Helper function to get hotline display name
export const getHotlineDisplayName = (locale: string): string => {
  return CONTACT_CONFIG.hotline.displayName[
    locale as keyof typeof CONTACT_CONFIG.hotline.displayName
  ] || CONTACT_CONFIG.hotline.displayName.en;
};
