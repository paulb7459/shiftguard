'use client'

import AppLayout from '@/components/AppLayout'
import { overtimeRecords, getOfficerFullName, getOfficerById } from '@/lib/mock-data'
import { getThresholdPercentage, getWarningLevel } from '@/lib/overtime-calculator'

const OT_THRESHOLD = 171
const WORK_PERIOD = '01/19/2026 – 02/15/2026'

const warningColors = {
  safe: 'bg-green-500',
  caution: 'bg-amber-500',
  warning: 'bg-orange-500',
  critical: 'bg-red-500',
}

const warningBg = {
  safe: 'bg-green-50 border-green-200',
  caution: 'bg-amber-50 border-amber-200',
  warning: 'bg-orange-50 border-orange-200',
  critical: 'bg-red-50 border-red-200',
}

export default function OvertimePage() {
  const totalOtHours = overtimeRecords.reduce((sum, r) => sum + r.overtimeHours, 0)
  const totalOtCost = overtimeRecords.reduce((sum, r) => sum + r.otCost, 0)
  const officersWithOt = overtimeRecords.filter(r => r.overtimeHours > 0)
  const maxOtHours = Math.max(...overtimeRecords.map(r => r.totalHours))

  // Sort by total hours descending
  const sorted = [...overtimeRecords].sort((a, b) => b.totalHours - a.totalHours)

  return (
    <AppLayout title="Overtime Tracking">
      {/* Period Selector */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-gray-500">FLSA 7(k) Work Period (28 days)</p>
          <p className="text-lg font-bold text-navy-900">{WORK_PERIOD}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition text-gray-600">←</button>
          <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition text-sm font-medium text-gray-600">Current Period</button>
          <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition text-gray-600">→</button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Total OT Hours</p>
          <p className="text-3xl font-bold text-navy-900">{totalOtHours}h</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Estimated OT Cost</p>
          <p className="text-3xl font-bold text-red-600">${totalOtCost.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Officers with OT</p>
          <p className="text-3xl font-bold text-navy-900">{officersWithOt.length}<span className="text-lg text-gray-400">/{overtimeRecords.length}</span></p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">OT Threshold</p>
          <p className="text-3xl font-bold text-navy-900">{OT_THRESHOLD}h</p>
          <p className="text-xs text-gray-400 mt-1">28-day work period</p>
        </div>
      </div>

      {/* Hours by Officer - Bar Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-bold text-navy-900 mb-6">Hours by Officer — Current Period</h2>
        <div className="space-y-3">
          {sorted.map(record => {
            const pct = getThresholdPercentage(record.totalHours, 28)
            const level = getWarningLevel(pct)
            const officer = getOfficerById(record.officerId)
            const barWidth = Math.min((record.totalHours / (OT_THRESHOLD * 1.15)) * 100, 100)
            const thresholdPosition = (OT_THRESHOLD / (OT_THRESHOLD * 1.15)) * 100

            return (
              <div key={record.id} className={`p-4 rounded-lg border ${warningBg[level]}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-navy-800 flex items-center justify-center text-[10px] font-bold text-white">
                      {officer?.firstName[0]}{officer?.lastName[0]}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-navy-900">{getOfficerFullName(record.officerId)}</span>
                      <span className="text-xs text-gray-500 ml-2">{officer?.rank}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-navy-900">{record.totalHours}h</span>
                    {record.overtimeHours > 0 && (
                      <span className="text-xs text-red-600 ml-2">(+{record.overtimeHours}h OT)</span>
                    )}
                  </div>
                </div>
                <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all ${warningColors[level]}`} style={{ width: `${barWidth}%` }} />
                  {/* Threshold line */}
                  <div className="absolute top-0 bottom-0 w-0.5 bg-navy-900 opacity-40" style={{ left: `${thresholdPosition}%` }} />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-gray-400">{pct}% of threshold</span>
                  <span className="text-[10px] text-gray-400">{OT_THRESHOLD}h threshold →</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* OT Detail Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-navy-900">Overtime Detail</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Officer</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Total Hours</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Regular</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Overtime</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Rate</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">OT Cost</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sorted.map(r => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 text-sm font-medium text-navy-900">{getOfficerFullName(r.officerId)}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{r.totalHours}h</td>
                <td className="px-6 py-3 text-sm text-gray-600">{r.regularHours}h</td>
                <td className="px-6 py-3 text-sm font-medium">
                  <span className={r.overtimeHours > 0 ? 'text-red-600' : 'text-gray-400'}>{r.overtimeHours}h</span>
                </td>
                <td className="px-6 py-3 text-sm text-gray-500 capitalize">{r.overtimeType}</td>
                <td className="px-6 py-3 text-sm text-gray-500">${r.hourlyRate}/hr</td>
                <td className="px-6 py-3 text-sm font-medium">
                  <span className={r.otCost > 0 ? 'text-red-600' : 'text-gray-400'}>${r.otCost.toLocaleString()}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  )
}
