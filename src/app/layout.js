import './globals.css'

export const metadata = {
  title: 'Ginesat - Especialistas en Aire acondicionado y calefacción',
  description: 'Servicios profesionales de instalación, reparación y mantenimiento de aire acondicionado, calderas de gas y gasóleo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
