'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function RequestPilotPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🛡️</div>
          <h1 className="text-3xl font-bold text-white mb-4">You&apos;re In!</h1>
          <p className="text-gray-300 text-lg mb-8">
            We&apos;ll be in touch within 24 hours to get your department set up with a free 60-day pilot.
          </p>
          <Link href="/" className="inline-block bg-badge-blue hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="bg-navy-900 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-badge-blue rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.23 9.36-7 10.58-3.77-1.22-7-5.75-7-10.58V6.3l7-3.12z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-white">ShiftGuard</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            60 Days Free · Full Features · Real Support
          </div>
          <h1 className="text-4xl font-bold text-navy-900 mb-3">Request Your Free Pilot</h1>
          <p className="text-gray-500 text-lg">
            Get your department set up in under 48 hours. No credit card, no obligation.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-badge-blue focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-badge-blue focus:border-transparent outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department Name *</label>
              <input type="text" required placeholder="e.g. Riverside Police Department" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-badge-blue focus:border-transparent outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Title / Rank *</label>
              <input type="text" required placeholder="e.g. Sergeant, Lieutenant, Chief" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-badge-blue focus:border-transparent outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" required placeholder="name@department.gov" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-badge-blue focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" placeholder="(555) 555-0100" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-badge-blue focus:border-transparent outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Sworn Officers *</label>
              <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-badge-blue focus:border-transparent outline-none">
                <option value="">Select range</option>
                <option value="1-15">1 – 15 officers</option>
                <option value="16-25">16 – 25 officers</option>
                <option value="26-50">26 – 50 officers</option>
                <option value="51-75">51 – 75 officers</option>
                <option value="76-100">76 – 100 officers</option>
                <option value="100+">100+ officers</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Scheduling Method *</label>
              <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-badge-blue focus:border-transparent outline-none">
                <option value="">How do you schedule today?</option>
                <option value="excel">Excel / Google Sheets</option>
                <option value="paper">Paper / Whiteboard</option>
                <option value="software">Other scheduling software</option>
                <option value="combo">Combination of methods</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Anything else we should know?</label>
              <textarea rows={3} placeholder="Biggest scheduling headaches, specific features you need, etc." className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-badge-blue focus:border-transparent outline-none resize-none" />
            </div>

            <button type="submit" className="w-full bg-badge-blue hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition text-lg">
              Request Free Pilot →
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Questions? Email us at <span className="text-badge-blue">hello@shiftguard.app</span>
          </p>
        </div>
      </div>
    </div>
  )
}
