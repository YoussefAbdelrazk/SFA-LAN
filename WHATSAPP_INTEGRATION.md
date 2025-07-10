# WhatsApp Integration Guide

## Overview

The Sherife Franca platform now includes WhatsApp integration for easy customer communication. This feature allows visitors to quickly start a WhatsApp conversation with your business.

## Features

- **Multi-language Support**: WhatsApp messages are automatically translated based on the user's selected language (Arabic, English, French)
- **Floating Button**: A persistent WhatsApp button appears on all pages
- **Contact Cards**: WhatsApp option in the contact page with clickable cards
- **Customizable Messages**: Pre-configured messages for each language
- **Easy Configuration**: Centralized configuration in `src/constants/contact.ts`

## Setup Instructions

### 1. Update WhatsApp Number

Edit `src/constants/contact.ts` and replace the WhatsApp number:

```typescript
export const CONTACT_CONFIG = {
  // Replace with your actual WhatsApp Business number
  whatsappNumber: '+1234567890', // Format: +[country code][phone number]
  // ... rest of config
};
```

### 2. Customize Messages

You can customize the default messages for each language:

```typescript
whatsappMessages: {
  ar: 'مرحباً! أريد معرفة المزيد عن خدمات اللياقة البدنية في منصة شريف فرنسا.',
  en: 'Hello! I would like to know more about the fitness services at Sherife Franca Platform.',
  fr: 'Bonjour! Je voudrais en savoir plus sur les services de fitness de la plateforme Sherife Franca.'
}
```

### 3. Update Contact Information

Update the contact information for each language:

```typescript
contactInfo: {
  address: {
    ar: '١٢٣ شارع اللياقة، مدينة الصحة، هـس ١٢٣٤٥',
    en: '123 Fitness Street, Health City, HC 12345',
    fr: '123 Rue du Fitness, Ville Santé, VS 12345'
  },
  phone: {
    ar: '+١ (٥٥٥) ١٢٣-٤٥٦٧',
    en: '+1 (555) 123-4567',
    fr: '+33 (0)1 23 45 67 89'
  },
  email: 'info@sherife-franca.com'
}
```

## Components

### WhatsAppButton Component

A floating WhatsApp button that appears on all pages:

```tsx
import WhatsAppButton from '@/components/ui/WhatsAppButton';

// Usage
<WhatsAppButton size='md' />; // sm, md, lg
```

### ContactInfo Component

Updated contact cards with WhatsApp integration:

```tsx
import { ContactInfo } from '@/components/contact';

// Usage
<ContactInfo />;
```

## How It Works

1. **Language Detection**: The system automatically detects the user's selected language
2. **Message Selection**: Appropriate message is selected based on language
3. **URL Generation**: WhatsApp URL is generated with the correct phone number and message
4. **User Experience**: Clicking opens WhatsApp with pre-filled message

## WhatsApp Business API (Optional)

For advanced features, you can integrate with WhatsApp Business API:

1. **Webhook Setup**: Handle incoming messages
2. **Automated Responses**: Set up automated replies
3. **Message Templates**: Use approved message templates
4. **Analytics**: Track conversation metrics

## Best Practices

1. **Response Time**: Aim to respond within 1 hour during business hours
2. **Message Length**: Keep initial messages concise and welcoming
3. **Business Hours**: Set clear expectations about response times
4. **Professional Tone**: Maintain professional but friendly communication
5. **Quick Responses**: Use saved replies for common questions

## Troubleshooting

### WhatsApp Button Not Appearing

- Check if the component is imported in the layout
- Verify the component is not hidden by CSS

### Messages Not Sending

- Ensure the phone number format is correct (+[country code][number])
- Test the WhatsApp link manually
- Check if the message encoding is working properly

### Language Issues

- Verify all language keys exist in translation files
- Check the locale detection logic
- Ensure fallback messages are available

## Customization

### Styling the WhatsApp Button

You can customize the button appearance by modifying the CSS classes in `WhatsAppButton.tsx`:

```tsx
className={`
  fixed bottom-6 right-6 z-50
  ${sizeClasses[size]}
  bg-green-500 hover:bg-green-600
  text-white rounded-full shadow-lg
  hover:shadow-xl transform hover:scale-110
  transition-all duration-300 ease-in-out
  flex items-center justify-center
  ${className}
`}
```

### Adding WhatsApp to Specific Pages

To add WhatsApp only to specific pages, import and use the component:

```tsx
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function MyPage() {
  return (
    <div>
      {/* Your page content */}
      <WhatsAppButton size='lg' />
    </div>
  );
}
```

## Security Considerations

1. **Phone Number Privacy**: Consider using a business phone number
2. **Message Content**: Avoid sending sensitive information via WhatsApp
3. **User Consent**: Ensure users understand they're being redirected to WhatsApp
4. **Data Protection**: Follow GDPR and local privacy laws

## Analytics

Track WhatsApp interactions by adding analytics:

```tsx
const handleWhatsAppClick = () => {
  // Track the click
  analytics.track('whatsapp_click', {
    page: window.location.pathname,
    language: locale,
  });

  const whatsappUrl = getWhatsAppUrl(locale);
  window.open(whatsappUrl, '_blank');
};
```

## Support

For technical support or questions about the WhatsApp integration, please contact the development team or refer to the WhatsApp Business API documentation.
