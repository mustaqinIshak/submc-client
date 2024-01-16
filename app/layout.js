import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Cmm Apparel Content Management System',
//   description: 'Cmm Apparel Content Management System',
// }

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
