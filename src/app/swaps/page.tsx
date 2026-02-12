'use client'

import { useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { swapRequests, getOfficerFullName } from '@/lib/mock-data'
import type { SwapStatus } from '@/lib/types'

const statusColors: Record<SwapStatus, string> = {
  pending: 'bg-amber-100 text-amber-700',
  approved: 'bg-green-100 text-green-700',
  denied: 'bg-red-100 text-red-700',
  cancelled: 'bg-gray-100 text-gray-500',
}

const statusIcons: Record<SwapStatus, string> = {
  pending: '⏳',
  approved: '✅',
  denied: '❌',
  cancelled: '🚫',
}

export default function SwapsPage() {
  const [filter, setFilter] = useState<'all' | SwapStatus>('all')
  const [swaps, setSwaps] = useState(swapRequests)

  const filtered = filter === 'all' ? swaps : swaps.filter(s => s.status === filter)
  const counts = {
    all: swaps.length,
    pending: swaps.filter(s => s.status === 'pending').length,
    approved: swaps.filter(s => s.status === 'approved').length,
    denied: swaps.filter(s => s.status === 'denied').length,
  }

  const handleAction = (id: string, action: 'approved' | 'denied') => {
    setSwaps(prev => prev.map(s => s.id === id ? { ...s, status: action, reviewedAt: new Date().toISOString(), reviewedBy: 'off-004' } : s))
  }

  return (
    <AppLayout title="Swap Requests">
      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-6">
        {(['all', 'pending', 'approved', 'denied'] as const).map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === status ? 'bg-badge-blue text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
            <span className="ml-1.5 text-xs opacity-70">({counts[status as keyof typeof counts] ?? 0})</span>
          </button>
        ))}
      </div>

      {/* Swap cards */}
      <div className="space-y-4">
        {filtered.map(swap => (
          <div key={swap.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[swap.status]}`}>
                    {statusIcons[swap.status]} {swap.status.charAt(0).toUpperCase() + swap.status.slice(1)}
                  </span>
                  <span className="text-xs text-gray-400">
                    Requested {new Date(swap.requestedAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  {/* Requesting officer */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-xs font-bold text-white">
                      {getOfficerFullName(swap.requestingOfficerId).split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{getOfficerFullName(swap.requestingOfficerId)}</p>
                      <p className="text-xs text-gray-400">Requesting</p>
                    </div>
                  </div>

                  <span className="text-xl text-gray-300">→</span>

                  {/* Covering officer */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-badge-blue flex items-center justify-center text-xs font-bold text-white">
                      {getOfficerFullName(swap.coveringOfficerId).split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{getOfficerFullName(swap.coveringOfficerId)}</p>
                      <p className="text-xs text-gray-400">Covering</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span>📅 {swap.shiftName}</span>
                  <span>📆 {swap.originalDate}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Reason: {swap.reason}</p>
                {swap.denialReason && (
                  <p className="text-sm text-red-600 mt-1">Denial reason: {swap.denialReason}</p>
                )}
              </div>

              {/* Actions */}
              {swap.status === 'pending' && (
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleAction(swap.id, 'approved')}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition"
                  >
                    ✓ Approve
                  </button>
                  <button
                    onClick={() => handleAction(swap.id, 'denied')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition"
                  >
                    ✕ Deny
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <p className="text-gray-400 text-lg">No {filter === 'all' ? '' : filter} swap requests</p>
          </div>
        )}
      </div>
    </AppLayout>
  )
}
