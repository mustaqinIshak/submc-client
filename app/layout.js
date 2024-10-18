"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CMS Crasher',
  description: 'CMS Crasher',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
