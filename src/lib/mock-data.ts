import { Department, Officer, Shift, ShiftAssignment, SwapRequest, OvertimeRecord, CourtAppearance } from './types'

export const department: Department = {
  id: 'dept-001',
  name: 'Riverside Police Department',
  state: 'California',
  timezone: 'America/Los_Angeles',
  flsaWorkPeriodDays: 28,
  flsaOtThresholdHours: 171,
  minStaffingRules: { patrol_day: 4, patrol_swing: 5, patrol_graveyard: 4 },
  subscriptionTier: 'professional',
  subscriptionStatus: 'active',
}

export const officers: Officer[] = [
  { id: 'off-001', departmentId: 'dept-001', badgeNumber: '1001', firstName: 'Robert', lastName: 'Martinez', rank: 'Chief', unit: 'Admin', seniorityDate: '1998-03-15', email: 'r.martinez@riversidepd.gov', phone: '(951) 555-0101', role: 'admin', status: 'active' },
  { id: 'off-002', departmentId: 'dept-001', badgeNumber: '1042', firstName: 'David', lastName: 'Chen', rank: 'Captain', unit: 'Patrol', seniorityDate: '2001-06-20', email: 'd.chen@riversidepd.gov', phone: '(951) 555-0102', role: 'admin', status: 'active' },
  { id: 'off-003', departmentId: 'dept-001', badgeNumber: '1087', firstName: 'Sarah', lastName: 'Williams', rank: 'Lieutenant', unit: 'Detectives', seniorityDate: '2004-01-10', email: 's.williams@riversidepd.gov', phone: '(951) 555-0103', role: 'supervisor', status: 'active' },
  { id: 'off-004', departmentId: 'dept-001', badgeNumber: '1123', firstName: 'Michael', lastName: 'Thompson', rank: 'Sergeant', unit: 'Patrol', seniorityDate: '2006-09-01', email: 'm.thompson@riversidepd.gov', phone: '(951) 555-0104', role: 'supervisor', status: 'active' },
  { id: 'off-005', departmentId: 'dept-001', badgeNumber: '1156', firstName: 'James', lastName: 'Rodriguez', rank: 'Sergeant', unit: 'Patrol', seniorityDate: '2007-03-22', email: 'j.rodriguez@riversidepd.gov', phone: '(951) 555-0105', role: 'supervisor', status: 'active' },
  { id: 'off-006', departmentId: 'dept-001', badgeNumber: '1178', firstName: 'Angela', lastName: 'Park', rank: 'Detective', unit: 'Detectives', seniorityDate: '2009-11-05', email: 'a.park@riversidepd.gov', phone: '(951) 555-0106', role: 'officer', status: 'active' },
  { id: 'off-007', departmentId: 'dept-001', badgeNumber: '1201', firstName: 'Kevin', lastName: 'O\'Brien', rank: 'Detective', unit: 'Detectives', seniorityDate: '2010-04-18', email: 'k.obrien@riversidepd.gov', phone: '(951) 555-0107', role: 'officer', status: 'active' },
  { id: 'off-008', departmentId: 'dept-001', badgeNumber: '1234', firstName: 'Marcus', lastName: 'Johnson', rank: 'Corporal', unit: 'Patrol', seniorityDate: '2012-08-14', email: 'm.johnson@riversidepd.gov', phone: '(951) 555-0108', role: 'officer', status: 'active' },
  { id: 'off-009', departmentId: 'dept-001', badgeNumber: '1267', firstName: 'Lisa', lastName: 'Nakamura', rank: 'Corporal', unit: 'Patrol', seniorityDate: '2013-02-28', email: 'l.nakamura@riversidepd.gov', phone: '(951) 555-0109', role: 'officer', status: 'active' },
  { id: 'off-010', departmentId: 'dept-001', badgeNumber: '1289', firstName: 'Daniel', lastName: 'Foster', rank: 'Officer', unit: 'Patrol', seniorityDate: '2014-06-10', email: 'd.foster@riversidepd.gov', phone: '(951) 555-0110', role: 'officer', status: 'active' },
  { id: 'off-011', departmentId: 'dept-001', badgeNumber: '1312', firstName: 'Rachel', lastName: 'Kim', rank: 'Officer', unit: 'Patrol', seniorityDate: '2015-01-05', email: 'r.kim@riversidepd.gov', phone: '(951) 555-0111', role: 'officer', status: 'active' },
  { id: 'off-012', departmentId: 'dept-001', badgeNumber: '1345', firstName: 'Anthony', lastName: 'Reeves', rank: 'Officer', unit: 'Patrol', seniorityDate: '2015-09-20', email: 'a.reeves@riversidepd.gov', phone: '(951) 555-0112', role: 'officer', status: 'active' },
  { id: 'off-013', departmentId: 'dept-001', badgeNumber: '1378', firstName: 'Jennifer', lastName: 'Cruz', rank: 'Officer', unit: 'Patrol', seniorityDate: '2016-04-15', email: 'j.cruz@riversidepd.gov', phone: '(951) 555-0113', role: 'officer', status: 'active' },
  { id: 'off-014', departmentId: 'dept-001', badgeNumber: '1401', firstName: 'Brian', lastName: 'Walsh', rank: 'Officer', unit: 'Patrol', seniorityDate: '2017-07-01', email: 'b.walsh@riversidepd.gov', phone: '(951) 555-0114', role: 'officer', status: 'leave' },
  { id: 'off-015', departmentId: 'dept-001', badgeNumber: '1434', firstName: 'Samantha', lastName: 'Torres', rank: 'Officer', unit: 'Traffic', seniorityDate: '2018-02-12', email: 's.torres@riversidepd.gov', phone: '(951) 555-0115', role: 'officer', status: 'active' },
  { id: 'off-016', departmentId: 'dept-001', badgeNumber: '1456', firstName: 'Chris', lastName: 'Petrov', rank: 'Officer', unit: 'Patrol', seniorityDate: '2018-10-08', email: 'c.petrov@riversidepd.gov', phone: '(951) 555-0116', role: 'officer', status: 'active' },
  { id: 'off-017', departmentId: 'dept-001', badgeNumber: '1489', firstName: 'Nicole', lastName: 'Sanders', rank: 'Officer', unit: 'Patrol', seniorityDate: '2019-05-20', email: 'n.sanders@riversidepd.gov', phone: '(951) 555-0117', role: 'officer', status: 'active' },
  { id: 'off-018', departmentId: 'dept-001', badgeNumber: '1512', firstName: 'Derek', lastName: 'Hamilton', rank: 'Officer', unit: 'K9', seniorityDate: '2019-11-15', email: 'd.hamilton@riversidepd.gov', phone: '(951) 555-0118', role: 'officer', status: 'active' },
  { id: 'off-019', departmentId: 'dept-001', badgeNumber: '1534', firstName: 'Maria', lastName: 'Gonzalez', rank: 'Officer', unit: 'Patrol', seniorityDate: '2020-03-01', email: 'm.gonzalez@riversidepd.gov', phone: '(951) 555-0119', role: 'officer', status: 'active' },
  { id: 'off-020', departmentId: 'dept-001', badgeNumber: '1567', firstName: 'Tyler', lastName: 'Brooks', rank: 'Officer', unit: 'Patrol', seniorityDate: '2021-01-18', email: 't.brooks@riversidepd.gov', phone: '(951) 555-0120', role: 'officer', status: 'training' },
  { id: 'off-021', departmentId: 'dept-001', badgeNumber: '1589', firstName: 'Aisha', lastName: 'Patel', rank: 'Officer', unit: 'Patrol', seniorityDate: '2021-06-14', email: 'a.patel@riversidepd.gov', phone: '(951) 555-0121', role: 'officer', status: 'active' },
  { id: 'off-022', departmentId: 'dept-001', badgeNumber: '1612', firstName: 'Ryan', lastName: 'Cooper', rank: 'Officer', unit: 'Patrol', seniorityDate: '2022-02-07', email: 'r.cooper@riversidepd.gov', phone: '(951) 555-0122', role: 'officer', status: 'active' },
  { id: 'off-023', departmentId: 'dept-001', badgeNumber: '1634', firstName: 'Emily', lastName: 'Nguyen', rank: 'Officer', unit: 'Detectives', seniorityDate: '2022-09-12', email: 'e.nguyen@riversidepd.gov', phone: '(951) 555-0123', role: 'officer', status: 'active' },
  { id: 'off-024', departmentId: 'dept-001', badgeNumber: '1656', firstName: 'Jason', lastName: 'Miller', rank: 'Officer', unit: 'Patrol', seniorityDate: '2023-04-03', email: 'j.miller@riversidepd.gov', phone: '(951) 555-0124', role: 'officer', status: 'active' },
  { id: 'off-025', departmentId: 'dept-001', badgeNumber: '1678', firstName: 'Olivia', lastName: 'Davis', rank: 'Officer', unit: 'Admin', seniorityDate: '2023-08-21', email: 'o.davis@riversidepd.gov', phone: '(951) 555-0125', role: 'officer', status: 'active' },
]

export const shifts: Shift[] = [
  { id: 'shift-day', departmentId: 'dept-001', name: 'Day Watch', type: 'patrol', startTime: '06:00', endTime: '14:00', watch: 'day', minStaffing: 4, maxStaffing: 8 },
  { id: 'shift-swing', departmentId: 'dept-001', name: 'Swing Watch', type: 'patrol', startTime: '14:00', endTime: '22:00', watch: 'swing', minStaffing: 5, maxStaffing: 8 },
  { id: 'shift-grave', departmentId: 'dept-001', name: 'Graveyard Watch', type: 'patrol', startTime: '22:00', endTime: '06:00', watch: 'graveyard', minStaffing: 4, maxStaffing: 7 },
  { id: 'shift-det', departmentId: 'dept-001', name: 'Detective Day', type: 'detective', startTime: '08:00', endTime: '16:00', watch: 'day', minStaffing: 2, maxStaffing: 4 },
  { id: 'shift-admin', departmentId: 'dept-001', name: 'Admin', type: 'admin', startTime: '08:00', endTime: '17:00', watch: 'day', minStaffing: 1, maxStaffing: 3 },
  { id: 'shift-training', departmentId: 'dept-001', name: 'Training', type: 'training', startTime: '08:00', endTime: '16:00', watch: 'day', minStaffing: 0, maxStaffing: 10 },
]

// Generate assignments for the current week
function getWeekDates(): string[] {
  const today = new Date()
  const monday = new Date(today)
  monday.setDate(today.getDate() - today.getDay() + 1)
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d.toISOString().split('T')[0]
  })
}

const weekDates = getWeekDates()

export const shiftAssignments: ShiftAssignment[] = [
  // Day Watch assignments
  ...weekDates.flatMap(date => [
    { id: `sa-day-${date}-1`, shiftId: 'shift-day', officerId: 'off-004', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-day-${date}-2`, shiftId: 'shift-day', officerId: 'off-010', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-day-${date}-3`, shiftId: 'shift-day', officerId: 'off-011', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-day-${date}-4`, shiftId: 'shift-day', officerId: 'off-015', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-day-${date}-5`, shiftId: 'shift-day', officerId: 'off-019', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
  ]),
  // Swing Watch assignments
  ...weekDates.flatMap(date => [
    { id: `sa-swing-${date}-1`, shiftId: 'shift-swing', officerId: 'off-005', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-swing-${date}-2`, shiftId: 'shift-swing', officerId: 'off-008', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-swing-${date}-3`, shiftId: 'shift-swing', officerId: 'off-012', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-swing-${date}-4`, shiftId: 'shift-swing', officerId: 'off-013', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-swing-${date}-5`, shiftId: 'shift-swing', officerId: 'off-016', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-swing-${date}-6`, shiftId: 'shift-swing', officerId: 'off-021', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
  ]),
  // Graveyard assignments
  ...weekDates.flatMap(date => [
    { id: `sa-grave-${date}-1`, shiftId: 'shift-grave', officerId: 'off-009', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-grave-${date}-2`, shiftId: 'shift-grave', officerId: 'off-017', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-grave-${date}-3`, shiftId: 'shift-grave', officerId: 'off-022', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-grave-${date}-4`, shiftId: 'shift-grave', officerId: 'off-024', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
  ]),
  // Detective assignments (weekdays only)
  ...weekDates.slice(0, 5).flatMap(date => [
    { id: `sa-det-${date}-1`, shiftId: 'shift-det', officerId: 'off-003', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-det-${date}-2`, shiftId: 'shift-det', officerId: 'off-006', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-det-${date}-3`, shiftId: 'shift-det', officerId: 'off-007', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-det-${date}-4`, shiftId: 'shift-det', officerId: 'off-023', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
  ]),
  // Admin
  ...weekDates.slice(0, 5).flatMap(date => [
    { id: `sa-admin-${date}-1`, shiftId: 'shift-admin', officerId: 'off-001', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-admin-${date}-2`, shiftId: 'shift-admin', officerId: 'off-002', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
    { id: `sa-admin-${date}-3`, shiftId: 'shift-admin', officerId: 'off-025', date, status: 'scheduled' as const, hoursRegular: 8, hoursOvertime: 0 },
  ]),
]

export const swapRequests: SwapRequest[] = [
  {
    id: 'swap-001',
    requestingOfficerId: 'off-010',
    coveringOfficerId: 'off-019',
    originalAssignmentId: `sa-day-${weekDates[3]}-2`,
    originalDate: weekDates[3],
    proposedDate: weekDates[3],
    shiftName: 'Day Watch',
    status: 'pending',
    requestedAt: new Date().toISOString(),
    reason: 'Child\'s school event',
  },
  {
    id: 'swap-002',
    requestingOfficerId: 'off-012',
    coveringOfficerId: 'off-016',
    originalAssignmentId: `sa-swing-${weekDates[4]}-3`,
    originalDate: weekDates[4],
    proposedDate: weekDates[4],
    shiftName: 'Swing Watch',
    status: 'pending',
    requestedAt: new Date(Date.now() - 86400000).toISOString(),
    reason: 'Medical appointment',
  },
  {
    id: 'swap-003',
    requestingOfficerId: 'off-017',
    coveringOfficerId: 'off-009',
    originalAssignmentId: `sa-grave-${weekDates[1]}-2`,
    originalDate: weekDates[1],
    proposedDate: weekDates[1],
    shiftName: 'Graveyard Watch',
    status: 'approved',
    requestedAt: new Date(Date.now() - 172800000).toISOString(),
    reviewedBy: 'off-005',
    reviewedAt: new Date(Date.now() - 86400000).toISOString(),
    reason: 'Family obligation',
  },
  {
    id: 'swap-004',
    requestingOfficerId: 'off-021',
    coveringOfficerId: 'off-013',
    originalAssignmentId: `sa-swing-${weekDates[0]}-6`,
    originalDate: weekDates[0],
    proposedDate: weekDates[0],
    shiftName: 'Swing Watch',
    status: 'denied',
    requestedAt: new Date(Date.now() - 259200000).toISOString(),
    reviewedBy: 'off-005',
    reviewedAt: new Date(Date.now() - 172800000).toISOString(),
    reason: 'Personal matter',
    denialReason: 'Would drop below minimum staffing',
  },
]

export const overtimeRecords: OvertimeRecord[] = [
  { id: 'ot-001', officerId: 'off-004', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 168, regularHours: 168, overtimeHours: 0, overtimeType: 'regular', hourlyRate: 42, otCost: 0, flsaCompliant: true },
  { id: 'ot-002', officerId: 'off-005', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 178, regularHours: 171, overtimeHours: 7, overtimeType: 'regular', hourlyRate: 42, otCost: 441, flsaCompliant: true },
  { id: 'ot-003', officerId: 'off-008', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 182, regularHours: 171, overtimeHours: 11, overtimeType: 'court', hourlyRate: 38, otCost: 627, flsaCompliant: true },
  { id: 'ot-004', officerId: 'off-009', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 165, regularHours: 165, overtimeHours: 0, overtimeType: 'regular', hourlyRate: 38, otCost: 0, flsaCompliant: true },
  { id: 'ot-005', officerId: 'off-010', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 174, regularHours: 171, overtimeHours: 3, overtimeType: 'callback', hourlyRate: 35, otCost: 157.5, flsaCompliant: true },
  { id: 'ot-006', officerId: 'off-011', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 160, regularHours: 160, overtimeHours: 0, overtimeType: 'regular', hourlyRate: 35, otCost: 0, flsaCompliant: true },
  { id: 'ot-007', officerId: 'off-012', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 186, regularHours: 171, overtimeHours: 15, overtimeType: 'regular', hourlyRate: 35, otCost: 787.5, flsaCompliant: true },
  { id: 'ot-008', officerId: 'off-013', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 171, regularHours: 171, overtimeHours: 0, overtimeType: 'regular', hourlyRate: 35, otCost: 0, flsaCompliant: true },
  { id: 'ot-009', officerId: 'off-016', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 176, regularHours: 171, overtimeHours: 5, overtimeType: 'court', hourlyRate: 34, otCost: 255, flsaCompliant: true },
  { id: 'ot-010', officerId: 'off-017', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 162, regularHours: 162, overtimeHours: 0, overtimeType: 'regular', hourlyRate: 34, otCost: 0, flsaCompliant: true },
  { id: 'ot-011', officerId: 'off-019', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 169, regularHours: 169, overtimeHours: 0, overtimeType: 'regular', hourlyRate: 33, otCost: 0, flsaCompliant: true },
  { id: 'ot-012', officerId: 'off-021', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 172, regularHours: 171, overtimeHours: 1, overtimeType: 'regular', hourlyRate: 32, otCost: 48, flsaCompliant: true },
  { id: 'ot-013', officerId: 'off-022', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 158, regularHours: 158, overtimeHours: 0, overtimeType: 'regular', hourlyRate: 32, otCost: 0, flsaCompliant: true },
  { id: 'ot-014', officerId: 'off-024', departmentId: 'dept-001', workPeriodStart: '2026-01-19', workPeriodEnd: '2026-02-15', totalHours: 155, regularHours: 155, overtimeHours: 0, overtimeType: 'regular', hourlyRate: 31, otCost: 0, flsaCompliant: true },
]

export const courtAppearances: CourtAppearance[] = [
  { id: 'court-001', officerId: 'off-008', departmentId: 'dept-001', caseNumber: '2025-CR-4412', courtName: 'Riverside County Superior Court', courtAddress: '4100 Main St, Riverside, CA 92501', appearanceDate: weekDates[2], appearanceTime: '09:00', estimatedDuration: 4, generatesOvertime: true, status: 'scheduled', conflictsWithShift: true },
  { id: 'court-002', officerId: 'off-016', departmentId: 'dept-001', caseNumber: '2025-CR-5578', courtName: 'Riverside County Superior Court', courtAddress: '4100 Main St, Riverside, CA 92501', appearanceDate: weekDates[3], appearanceTime: '10:30', estimatedDuration: 2, generatesOvertime: true, status: 'scheduled', conflictsWithShift: true },
  { id: 'court-003', officerId: 'off-010', departmentId: 'dept-001', caseNumber: '2025-TR-8821', courtName: 'Riverside Traffic Court', courtAddress: '4175 Main St, Riverside, CA 92501', appearanceDate: weekDates[4], appearanceTime: '08:00', estimatedDuration: 3, generatesOvertime: false, status: 'scheduled', conflictsWithShift: false },
  { id: 'court-004', officerId: 'off-006', departmentId: 'dept-001', caseNumber: '2024-CR-9034', courtName: 'San Bernardino Superior Court', courtAddress: '247 W 3rd St, San Bernardino, CA 92415', appearanceDate: weekDates[5], appearanceTime: '13:00', estimatedDuration: 2, generatesOvertime: true, status: 'scheduled', conflictsWithShift: false },
  { id: 'court-005', officerId: 'off-012', departmentId: 'dept-001', caseNumber: '2025-CR-3367', courtName: 'Riverside County Superior Court', courtAddress: '4100 Main St, Riverside, CA 92501', appearanceDate: weekDates[6], appearanceTime: '09:00', estimatedDuration: 4, generatesOvertime: true, status: 'scheduled', conflictsWithShift: false },
]

// Helper to get officer by ID
export function getOfficerById(id: string): Officer | undefined {
  return officers.find(o => o.id === id)
}

export function getOfficerName(id: string): string {
  const o = getOfficerById(id)
  return o ? `${o.rank} ${o.lastName}` : 'Unknown'
}

export function getOfficerFullName(id: string): string {
  const o = getOfficerById(id)
  return o ? `${o.firstName} ${o.lastName}` : 'Unknown'
}

export function getShiftById(id: string): Shift | undefined {
  return shifts.find(s => s.id === id)
}
