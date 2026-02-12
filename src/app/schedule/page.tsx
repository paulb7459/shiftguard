'use client'

import { useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { shifts, shiftAssignments, getOfficerFullName } from '@/lib/mock-data'

type ViewMode = 'weekly' | 'monthly'

const shiftColors: Record<string, string> = {
  patrol: 'bg-blue-500',
  detective: 'bg-green-500',
  admin: 'bg-gray-400',
  training: 'bg-orange-500',
  court: 'bg-red-500',
}

const shiftBgColors: Record<string, string> = {
  patrol: 'bg-blue-50 border-blue-200 text-blue-900',
  detective: 'bg-green-50 border-green-200 text-green-900',
  admin: 'bg-gray-50 border-gray-200 text-gray-900',
  training: 'bg-orange-50 border-orange-200 text-orange-900',
  court: 'bg-red-50 border-red-200 text-red-900',
}

function getWeekDates(offset: number = 0): Date[] {
  const today = new Date()
  const monday = new Date(today)
  monday.setDate(today.getDate() - today.getDay() + 1 + offset * 7)
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d
  })
}

const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function SchedulePage() {
  const [view, setView] = useState<ViewMode>('weekly')
  const [weekOffset, setWeekOffset] = useState(0)
  const [selectedSlot, setSelectedSlot] = useState<{ date: string; shift: string } | null>(null)

  const weekDates = getWeekDates(weekOffset)
  const displayShifts = shifts.filter(s => s.type !== 'training')

  return (
    <AppLayout title="Schedule">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button onClick={() => setView('weekly')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${view === 'weekly' ? 'bg-badge-blue text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            Weekly
          </button>
          <button onClick={() => setView('monthly')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${view === 'monthly' ? 'bg-badge-blue text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            Monthly
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setWeekOffset(w => w - 1)} className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition text-gray-600">←</button>
          <button onClick={() => setWeekOffset(0)} className="px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition text-sm font-medium text-gray-600">
            Today
          </button>
          <button onClick={() => setWeekOffset(w => w + 1)} className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition text-gray-600">→</button>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4">
          {Object.entries(shiftColors).filter(([k]) => k !== 'court').map(([type, color]) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-full ${color}`} />
              <span className="text-xs text-gray-500 capitalize">{type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Grid */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Header row */}
        <div className="grid grid-cols-8 border-b border-gray-200">
          <div className="p-4 bg-gray-50 border-r border-gray-200">
            <span className="text-xs font-medium text-gray-500 uppercase">Shift</span>
          </div>
          {weekDates.map((d, i) => {
            const isToday = d.toDateString() === new Date().toDateString()
            return (
              <div key={i} className={`p-4 text-center border-r border-gray-200 last:border-r-0 ${isToday ? 'bg-blue-50' : 'bg-gray-50'}`}>
                <div className="text-xs text-gray-500 font-medium">{dayNames[i]}</div>
                <div className={`text-lg font-bold ${isToday ? 'text-badge-blue' : 'text-navy-900'}`}>{d.getDate()}</div>
              </div>
            )
          })}
        </div>

        {/* Shift rows */}
        {displayShifts.map(shift => (
          <div key={shift.id} className="grid grid-cols-8 border-b border-gray-200 last:border-b-0">
            {/* Shift label */}
            <div className="p-4 border-r border-gray-200 bg-gray-50">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-8 rounded-full ${shiftColors[shift.type]}`} />
                <div>
                  <p className="text-sm font-semibold text-navy-900">{shift.name}</p>
                  <p className="text-xs text-gray-400">{shift.startTime}–{shift.endTime}</p>
                </div>
              </div>
            </div>

            {/* Day cells */}
            {weekDates.map((d, i) => {
              const dateStr = d.toISOString().split('T')[0]
              const assigned = shiftAssignments.filter(a => a.shiftId === shift.id && a.date === dateStr)
              const isToday = d.toDateString() === new Date().toDateString()
              const isSelected = selectedSlot?.date === dateStr && selectedSlot?.shift === shift.id

              return (
                <div
                  key={i}
                  onClick={() => setSelectedSlot({ date: dateStr, shift: shift.id })}
                  className={`p-2 border-r border-gray-200 last:border-r-0 min-h-[80px] cursor-pointer transition ${
                    isSelected ? 'bg-blue-50 ring-2 ring-badge-blue ring-inset' : isToday ? 'bg-blue-50/30' : 'hover:bg-gray-50'
                  }`}
                >
                  {assigned.map(a => (
                    <div key={a.id} className={`text-xs px-2 py-1 rounded border mb-1 ${shiftBgColors[shift.type]}`}>
                      {getOfficerFullName(a.officerId)}
                    </div>
                  ))}
                  {assigned.length === 0 && (
                    <div className="text-xs text-gray-300 italic">—</div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Selected slot detail */}
      {selectedSlot && (
        <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-navy-900">Shift Detail</h3>
            <button onClick={() => setSelectedSlot(null)} className="text-gray-400 hover:text-gray-600 text-sm">✕ Close</button>
          </div>
          {(() => {
            const shift = shifts.find(s => s.id === selectedSlot.shift)
            const assigned = shiftAssignments.filter(a => a.shiftId === selectedSlot.shift && a.date === selectedSlot.date)
            if (!shift) return null
            return (
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-3 h-3 rounded-full ${shiftColors[shift.type]}`} />
                  <div>
                    <p className="font-semibold text-navy-900">{shift.name}</p>
                    <p className="text-sm text-gray-500">{selectedSlot.date} · {shift.startTime}–{shift.endTime}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Staffing: {assigned.length} / {shift.maxStaffing} (min: {shift.minStaffing})
                  {assigned.length < shift.minStaffing && <span className="text-red-600 font-medium ml-2">⚠ Below minimum</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {assigned.map(a => (
                    <span key={a.id} className="text-sm bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700">
                      {getOfficerFullName(a.officerId)}
                    </span>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      )}
    </AppLayout>
  )
}
