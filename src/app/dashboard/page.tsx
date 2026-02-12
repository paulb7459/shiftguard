'use client'

import AppLayout from '@/components/AppLayout'
import { officers, shiftAssignments, shifts, swapRequests, courtAppearances, overtimeRecords, getOfficerFullName, getShiftById } from '@/lib/mock-data'

const today = new Date().toISOString().split('T')[0]
const todayAssignments = shiftAssignments.filter(a => a.date === today)
const pendingSwaps = swapRequests.filter(s => s.status === 'pending')
const upcomingCourt = courtAppearances.filter(c => c.status === 'scheduled')
const totalOtHours = overtimeRecords.reduce((sum, r) => sum + r.overtimeHours, 0)
const activeOfficers = officers.filter(o => o.status === 'active')

const stats = [
  { label: 'Officers On Duty', value: todayAssignments.length || 18, color: 'bg-badge-blue', icon: '👮' },
  { label: 'OT Hours This Period', value: `${totalOtHours}h`, color: 'bg-amber-500', icon: '⏱️' },
  { label: 'Open Swap Requests', value: pendingSwaps.length, color: 'bg-purple-500', icon: '🔄' },
  { label: 'Upcoming Court Dates', value: upcomingCourt.length, color: 'bg-red-500', icon: '⚖️' },
]

function getShiftColor(type: string) {
  switch (type) {
    case 'patrol': return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'detective': return 'bg-green-100 text-green-800 border-green-200'
    case 'admin': return 'bg-gray-100 text-gray-800 border-gray-200'
    case 'training': return 'bg-orange-100 text-orange-800 border-orange-200'
    default: return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export default function DashboardPage() {
  // Get today's shifts grouped
  const shiftGroups = shifts.slice(0, 5).map(shift => {
    const assigned = todayAssignments.filter(a => a.shiftId === shift.id)
    return { shift, officers: assigned.map(a => getOfficerFullName(a.officerId)) }
  })

  // Mini calendar - current week
  const now = new Date()
  const weekStart = new Date(now)
  weekStart.setDate(now.getDate() - now.getDay() + 1)
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart)
    d.setDate(weekStart.getDate() + i)
    return d
  })

  return (
    <AppLayout title="Dashboard">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{s.icon}</span>
              <span className={`w-2 h-2 rounded-full ${s.color}`} />
            </div>
            <p className="text-3xl font-bold text-navy-900">{s.value}</p>
            <p className="text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Shifts */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-navy-900 mb-4">Today&apos;s Shift Overview</h2>
          <div className="space-y-4">
            {shiftGroups.map(({ shift, officers: assignedOfficers }) => (
              <div key={shift.id} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getShiftColor(shift.type)}`}>
                  {shift.type.charAt(0).toUpperCase() + shift.type.slice(1)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-navy-900">{shift.name}</h3>
                    <span className="text-sm text-gray-500">{shift.startTime} - {shift.endTime}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {assignedOfficers.length > 0 ? assignedOfficers.map(name => (
                      <span key={name} className="text-xs bg-white border border-gray-200 rounded px-2 py-1 text-gray-700">{name}</span>
                    )) : (
                      <span className="text-xs text-gray-400 italic">No assignments for today</span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-navy-900">{assignedOfficers.length}</span>
                  <span className="text-xs text-gray-400 block">/{shift.maxStaffing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Mini Calendar */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-4">This Week</h2>
            <div className="grid grid-cols-7 gap-1 text-center">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <div key={i} className="text-xs font-medium text-gray-400 py-1">{d}</div>
              ))}
              {weekDays.map((d, i) => {
                const isToday = d.toDateString() === now.toDateString()
                return (
                  <div key={i} className={`py-2 rounded-lg text-sm font-medium ${isToday ? 'bg-badge-blue text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                    {d.getDate()}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Pending Swaps */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-4">Pending Swaps</h2>
            {pendingSwaps.length === 0 ? (
              <p className="text-sm text-gray-400">No pending requests</p>
            ) : (
              <div className="space-y-3">
                {pendingSwaps.map(swap => (
                  <div key={swap.id} className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm font-medium text-navy-900">
                      {getOfficerFullName(swap.requestingOfficerId)} → {getOfficerFullName(swap.coveringOfficerId)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{swap.shiftName} · {swap.originalDate}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{swap.reason}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upcoming Court */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-4">Upcoming Court</h2>
            <div className="space-y-3">
              {upcomingCourt.slice(0, 3).map(c => (
                <div key={c.id} className={`p-3 rounded-lg border ${c.conflictsWithShift ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-navy-900">{getOfficerFullName(c.officerId)}</p>
                    {c.conflictsWithShift && <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">⚠ Conflict</span>}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Case {c.caseNumber}</p>
                  <p className="text-xs text-gray-400">{c.appearanceDate} at {c.appearanceTime}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
