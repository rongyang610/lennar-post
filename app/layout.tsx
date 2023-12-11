import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto my-0 h-screen max-w-7xl pt-6 pl-4 bg-gray-900`}
      >
        <header className="pr-4">
          <Navigation />
        </header>
        <main className="max-h-screen h-[calc(100vh_-_14rem)] md:h-[calc(100vh_-_4.5rem)] pl-4 items-center overflow-visible md:overflow-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
