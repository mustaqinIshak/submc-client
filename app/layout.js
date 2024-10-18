'use client'
import './globals.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
