import './globals.css'

const siteUrl = 'https://ginesat.com';
const businessName = 'GineSAT Servicios';
const phone = '+34663215621';
const displayPhone = '663 215 621';
const description = 'Servicio técnico de aire acondicionado y calderas en Torrente y Valencia. Reparación, instalación y mantenimiento con revisión desde 40€ descontable.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GineSAT | Aire acondicionado y calderas en Torrente, Valencia',
    template: '%s | GineSAT'
  },
  description,
  applicationName: businessName,
  keywords: [
    'GineSAT',
    'aire acondicionado Torrente',
    'aire acondicionado Torrent',
    'reparación aire acondicionado Valencia',
    'instalación aire acondicionado Valencia',
    'mantenimiento aire acondicionado',
    'calderas gas Valencia',
    'calderas gasóleo Valencia',
    'reparación calderas Torrente',
    'revisión calderas 40 euros',
    'servicio técnico climatización'
  ],
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  category: 'Servicios de climatización y calefacción',
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: businessName,
    title: 'GineSAT | Aire acondicionado y calderas en Torrente',
    description,
    images: [
      {
        url: '/aire.png',
        width: 1402,
        height: 1122,
        alt: 'Servicio técnico GineSAT de aire acondicionado y calderas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GineSAT | Servicio técnico en Torrente',
    description: `Aire acondicionado y calderas en Torrente y Valencia. Revisión desde 40€. Tel. ${displayPhone}`,
    images: ['/aire.png']
  },
  icons: {
    icon: '/logo_transparente.png',
    shortcut: '/logo_transparente.png',
    apple: '/logo_transparente.png'
  },
  manifest: '/manifest.json'
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${siteUrl}/#business`,
    name: businessName,
    alternateName: 'GineSAT',
    url: siteUrl,
    logo: `${siteUrl}/logo_transparente.png`,
    image: [
      `${siteUrl}/logo_transparente.png`,
      `${siteUrl}/aire.png`,
      `${siteUrl}/airee.png`
    ],
    description,
    telephone: phone,
    email: 'info@ginesat.com',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mare de Deu de la Purificacio 26',
      addressLocality: 'Torrent',
      addressRegion: 'Valencia',
      postalCode: '46900',
      addressCountry: 'ES'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '39.4370',
      longitude: '-0.4677'
    },
    areaServed: [
      { '@type': 'City', name: 'Torrente' },
      { '@type': 'City', name: 'Torrent' },
      { '@type': 'AdministrativeArea', name: 'Valencia' },
      { '@type': 'AdministrativeArea', name: 'Comunidad Valenciana' }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'customer service',
      areaServed: 'ES',
      availableLanguage: ['es']
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de climatización y calefacción',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Revisión de aire acondicionado',
          price: '40',
          priceCurrency: 'EUR',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de aire acondicionado',
            description: 'Diagnóstico y reparación profesional de equipos de aire acondicionado.'
          }
        },
        {
          '@type': 'Offer',
          name: 'Revisión de calderas',
          price: '40',
          priceCurrency: 'EUR',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación y revisión de calderas',
            description: 'Servicio técnico para calderas de gas y gasóleo con certificación.'
          }
        },
        {
          '@type': 'Offer',
          name: 'Instalación de aire acondicionado',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalación de aire acondicionado',
            description: 'Instalación profesional y puesta en marcha de sistemas de climatización.'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127'
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#207765" />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
