import '../styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Nunito } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

const fataisie = localFont({
  src: "../public/fonts/FantaisieArtistique.ttf",
  variable: "--font-fantaisie"
})

const font = Nunito({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Look Ahead BnB',
  description: 'Look Ahead is a travel app generated using NEXT JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={font.className}>
        <main>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  )
}
