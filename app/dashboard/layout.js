"use client";
import Navbar from "@/components/navbar"

export const metadata = {
  title: 'Crasher',
  description: 'create by crasher',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          <div className="p-4 sm:ml-64">
              <div className="p-4 dark:border-gray-700">
                {children}
              </div>
          </div>
      </body>
    </html>
  )
}
