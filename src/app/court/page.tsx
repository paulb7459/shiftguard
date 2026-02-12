'use client'

import AppLayout from '@/components/AppLayout'
import { courtAppearances, getOfficerFullName, getOfficerById } from '@/lib/mock-data'

const statusColors: Record<string, string> = {
  scheduled: 'bg-blue-100 text-blue-700',
  completed: 'bg-green-100 text-green-700',
  cancelled: 'bg-gray-100 text-gray-500',
  continued: 'bg-amber-100 text-amber-700',
}

export default function CourtPage() {
  const sorted = [...courtAppearances].sort((a, b) => a.appearanceDate.localeCompare(b.appearanceDate))

  const otGenerating = courtAppearances.filter(c => c.generatesOvertime && c.status === 'scheduled')
  const conflicts = courtAppearances.filter(c => c.conflictsWithShift && c.status === 'scheduled')

  return (
    <AppLayout title="Court Calendar">
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Upcoming Appearances</p>
          <p className="text-3xl font-bold text-navy-900">{courtAppearances.filter(c => c.status === 'scheduled').length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Generates Overtime</p>
          <p className="text-3xl font-bold text-amber-600">{otGenerating.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Shift Conflicts</p>
          <p className="text-3xl font-bold text-red-600">{conflicts.length}</p>
        </div>
      </div>

      {/* Court List */}
      <div className="space-y-4">
        {sorted.map(c => {
          const officer = getOfficerById(c.officerId)
          return (
            <div key={c.id} className={`bg-white rounded-xl border p-6 hover:shadow-md transition ${c.conflictsWithShift ? 'border-red-300 bg-red-50/30' : 'border-gray-200'}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[c.status]}`}>
                      {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                    </span>
                    {c.conflictsWithShift && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-700">⚠ Shift Conflict</span>
                    )}
                    {c.generatesOvertime && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">💰 Generates OT</span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-xs font-bold text-white">
                      {officer?.firstName[0]}{officer?.lastName[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{getOfficerFullName(c.officerId)}</p>
                      <p className="text-xs text-gray-400">{officer?.rank} · Badge #{officer?.badgeNumber}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Case #</p>
                      <p className="font-medium text-navy-900 font-mono">{c.caseNumber}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Date & Time</p>
                      <p className="font-medium text-navy-900">{c.appearanceDate} at {c.appearanceTime}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Duration</p>
                      <p className="font-medium text-navy-900">~{c.estimatedDuration}h</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Court</p>
                      <p className="font-medium text-navy-900">{c.courtName}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">📍 {c.courtAddress}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </AppLayout>
  )
}
