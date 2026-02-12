'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/schedule', label: 'Schedule', icon: '📅' },
  { href: '/roster', label: 'Roster', icon: '👮' },
  { href: '/overtime', label: 'Overtime', icon: '⏱️' },
  { href: '/swaps', label: 'Swap Requests', icon: '🔄' },
  { href: '/court', label: 'Court Calendar', icon: '⚖️' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-navy-900 text-white flex flex-col z-50">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-navy-700">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-badge-blue rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.23 9.36-7 10.58-3.77-1.22-7-5.75-7-10.58V6.3l7-3.12z"/>
              <path d="M10 12l-2-2-1.41 1.41L10 14.83l6-6L14.59 7.41z"/>
            </svg>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight">ShiftGuard</span>
            <span className="block text-[10px] text-gray-400 uppercase tracking-widest -mt-0.5">Command Center</span>
          </div>
        </Link>
      </div>

      {/* Department */}
      <div className="px-6 py-3 border-b border-navy-700">
        <p className="text-xs text-gray-400 uppercase tracking-wider">Department</p>
        <p className="text-sm font-medium text-gray-200 mt-0.5">Riverside PD</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-badge-blue text-white'
                  : 'text-gray-300 hover:bg-navy-700 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-navy-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-navy-600 flex items-center justify-center text-xs font-bold text-gold">RM</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-200 truncate">Chief Martinez</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
