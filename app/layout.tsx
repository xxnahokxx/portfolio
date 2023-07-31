import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import ico from "@/public/ico.svg"

const inter = Roboto({
  weight: ['300', "400", "500", "700", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Portfolio Johan Amaya',
  description: 'Bienvenidos a mi portafolio de desarrollo web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link rel="icon" href="/fabicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
