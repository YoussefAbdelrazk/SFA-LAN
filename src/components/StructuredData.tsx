import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'fitness' | 'localBusiness';
  locale?: string;
}

export default function StructuredData({
  type,
  locale = 'en',
}: StructuredDataProps) {
  const baseUrl = 'https://sherife-franca.com';

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sherife Franca',
    alternateName: 'شريف فرنسا',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Premium Fitness Platform - Get Fit. Pay Less. Stay Strong.',
    sameAs: [
      'https://twitter.com/sherife-franca',
      'https://facebook.com/sherife-franca',
      'https://instagram.com/sherife-franca',
      'https://linkedin.com/company/sherife-franca',
      'https://youtube.com/sherife-franca',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic', 'French'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Fitness Street',
      addressLocality: 'Health City',
      postalCode: '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHours: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sherife Franca',
    url: baseUrl,
    description: 'Premium Fitness Platform - Get Fit. Pay Less. Stay Strong.',
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const fitnessData = {
    '@context': 'https://schema.org',
    '@type': 'HealthClub',
    name: 'Sherife Franca',
    description:
      'Premium fitness platform offering expert trainers, personalized programs, and state-of-the-art equipment.',
    url: baseUrl,
    telephone: '+1-555-123-4567',
    email: 'info@sherife-franca.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Fitness Street',
      addressLocality: 'Health City',
      postalCode: '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHours: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fitness Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Personal Training',
            description: 'One-on-one sessions with certified trainers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Group Classes',
            description: 'High-energy group fitness sessions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nutrition Guidance',
            description: 'Expert nutrition advice and meal planning',
          },
        },
      ],
    },
  };

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sherife Franca',
    description:
      'Premium fitness platform offering expert trainers, personalized programs, and state-of-the-art equipment.',
    url: baseUrl,
    telephone: '+1-555-123-4567',
    email: 'info@sherife-franca.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Fitness Street',
      addressLocality: 'Health City',
      postalCode: '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHours: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'USD',
  };

  const getData = () => {
    switch (type) {
      case 'organization':
        return organizationData;
      case 'website':
        return websiteData;
      case 'fitness':
        return fitnessData;
      case 'localBusiness':
        return localBusinessData;
      default:
        return organizationData;
    }
  };

  return (
    <Script
      id='structured-data'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getData()),
      }}
    />
  );
}
