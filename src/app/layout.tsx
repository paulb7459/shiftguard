import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShiftGuard — Law Enforcement Scheduling & Overtime Tracking',
  description: 'Modern scheduling and FLSA 7(k) overtime tracking built for law enforcement. Stop the spreadsheet chaos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
