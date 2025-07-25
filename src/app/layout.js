import './globals.css'

export const metadata = {
  title: 'GineSAT | Aire Acondicionado y Calderas en Torrent, Valencia',
  description: 'Especialistas en aire acondicionado, calderas de gas y gasóleo en Torrent. Instalación, reparación y mantenimiento profesional. Diagnóstico 35€ descontable. ☎ 663 215 621',
  keywords: 'aire acondicionado Torrent, calderas gas Valencia, reparación aire acondicionado, mantenimiento calderas, instalación climatización, servicio técnico calderas, GineSAT',
  authors: [{ name: 'GineSAT Servicios' }],
  creator: 'GineSAT Servicios',
  publisher: 'GineSAT Servicios',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ginesat.com'
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ginesat.com',
    siteName: 'GineSAT Servicios',
    title: 'GineSAT | Aire Acondicionado y Calderas en Torrent, Valencia',
    description: 'Especialistas en aire acondicionado, calderas de gas y gasóleo en Torrent. Instalación, reparación y mantenimiento profesional. Diagnóstico 35€ descontable.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GineSAT - Servicios de Aire Acondicionado y Calderas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GineSAT | Aire Acondicionado y Calderas en Torrent',
    description: 'Especialistas en climatización y calderas en Torrent, Valencia. Servicio profesional con garantía.',
    images: ['/twitter-image.jpg']
  },
  verification: {
    google: 'your-google-verification-code'
  },
  category: 'Servicios de Climatización y Calefacción'
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ginesat.com',
    name: 'GineSAT Servicios',
    image: [
      'https://ginesat.com/logo.jpg',
      'https://ginesat.com/servicios.jpg'
    ],
    description: 'Especialistas en aire acondicionado, calderas de gas y gasóleo en Torrent, Valencia. Servicios de instalación, reparación y mantenimiento profesional.',
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
    url: 'https://ginesat.com',
    telephone: '+34663215621',
    email: 'ginesat24@gmail.com',
    priceRange: '€€',
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
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '39.4370',
        longitude: '-0.4677'
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Climatización y Calefacción',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de Aire Acondicionado',
            description: 'Servicio de reparación profesional de equipos de aire acondicionado con garantía'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalación de Aire Acondicionado',
            description: 'Instalación profesional de sistemas de climatización'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de Calderas',
            description: 'Servicio técnico especializado en calderas de gas y gasóleo'
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
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
