import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import ico from "@/public/ico.svg"

const inter = Roboto({
  weight: ['300', "400", "500", "700", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Portfolio de desarrollo web | Johan Amaya',
  description: 'Descubre mi portafolio de desarrollo web, donde presento proyectos modernos y optimizados con tecnologías como React, Next.js, y más. ¡Conoce cómo puedo ayudarte a crear sitios web de alto impacto!',
  robots: 'index, follow',
  openGraph: {
    title: 'Portfolio de desarrollo web | Johan Amaya',
    description: 'Descubre mi portafolio de desarrollo web, donde presento proyectos modernos y optimizados con tecnologías como React, Next.js, y más. ¡Conoce nuestas habilidades y proyectos!',
    url: 'https://nahok.dev',
    siteName: 'Portfolio de desarrollo web | Johan Amaya',
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='scroll-smooth'>
      <head>
        <link rel="icon" href="/fabicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
