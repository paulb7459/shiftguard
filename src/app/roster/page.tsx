'use client'

import { useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { officers } from '@/lib/mock-data'
import type { OfficerUnit, OfficerRank } from '@/lib/types'

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  leave: 'bg-amber-100 text-amber-700',
  training: 'bg-blue-100 text-blue-700',
  separated: 'bg-red-100 text-red-700',
}

export default function RosterPage() {
  const [filterUnit, setFilterUnit] = useState<string>('all')
  const [filterRank, setFilterRank] = useState<string>('all')
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const units: OfficerUnit[] = ['Patrol', 'Detectives', 'Admin', 'Traffic', 'K9', 'Training']
  const ranks: OfficerRank[] = ['Chief', 'Captain', 'Lieutenant', 'Sergeant', 'Detective', 'Corporal', 'Officer']

  const filtered = officers.filter(o => {
    if (filterUnit !== 'all' && o.unit !== filterUnit) return false
    if (filterRank !== 'all' && o.rank !== filterRank) return false
    if (search && !`${o.firstName} ${o.lastName} ${o.badgeNumber}`.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <AppLayout title="Roster">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name or badge #..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm w-64 focus:ring-2 focus:ring-badge-blue focus:border-transparent outline-none"
        />
        <select value={filterUnit} onChange={e => setFilterUnit(e.target.value)} className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white text-gray-600 outline-none">
          <option value="all">All Units</option>
          {units.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
        <select value={filterRank} onChange={e => setFilterRank(e.target.value)} className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white text-gray-600 outline-none">
          <option value="all">All Ranks</option>
          {ranks.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <div className="flex-1" />
        <div className="text-sm text-gray-500">{filtered.length} officers</div>
        <button onClick={() => setShowModal(true)} className="bg-badge-blue hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition">
          + Add Officer
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Officer</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Badge #</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map(o => (
                <tr key={o.id} className="hover:bg-gray-50 transition cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-xs font-bold text-white">
                        {o.firstName[0]}{o.lastName[0]}
                      </div>
                      <span className="text-sm font-medium text-navy-900">{o.firstName} {o.lastName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-mono">{o.badgeNumber}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{o.rank}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{o.unit}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{o.phone}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{o.email}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${statusColors[o.status]}`}>
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Officer Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-navy-900 mb-6">Add Officer</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-badge-blue" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-badge-blue" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Badge #</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-badge-blue" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rank</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white outline-none focus:ring-2 focus:ring-badge-blue">
                  {ranks.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white outline-none focus:ring-2 focus:ring-badge-blue">
                  {units.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-badge-blue" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-badge-blue" />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowModal(false)} className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">Cancel</button>
              <button onClick={() => setShowModal(false)} className="px-5 py-2.5 bg-badge-blue hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition">Add Officer</button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  )
}
