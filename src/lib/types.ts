export interface Department {
  id: string
  name: string
  state: string
  timezone: string
  flsaWorkPeriodDays: 7 | 14 | 28
  flsaOtThresholdHours: number
  minStaffingRules: Record<string, number>
  subscriptionTier: 'starter' | 'professional' | 'department'
  subscriptionStatus: 'active' | 'trial' | 'expired'
}

export type OfficerRank = 'Chief' | 'Captain' | 'Lieutenant' | 'Sergeant' | 'Detective' | 'Corporal' | 'Officer'
export type OfficerUnit = 'Patrol' | 'Detectives' | 'Admin' | 'Traffic' | 'K9' | 'Training'
export type OfficerStatus = 'active' | 'leave' | 'training' | 'separated'
export type OfficerRole = 'admin' | 'supervisor' | 'officer'

export interface Officer {
  id: string
  departmentId: string
  badgeNumber: string
  firstName: string
  lastName: string
  rank: OfficerRank
  unit: OfficerUnit
  seniorityDate: string
  email: string
  phone: string
  role: OfficerRole
  status: OfficerStatus
  shiftPreference?: string
}

export type ShiftType = 'patrol' | 'detective' | 'admin' | 'training' | 'court' | 'off_duty'
export type Watch = 'day' | 'swing' | 'graveyard'

export interface Shift {
  id: string
  departmentId: string
  name: string
  type: ShiftType
  startTime: string
  endTime: string
  watch: Watch
  minStaffing: number
  maxStaffing: number
}

export interface ShiftAssignment {
  id: string
  shiftId: string
  officerId: string
  date: string
  status: 'scheduled' | 'confirmed' | 'completed' | 'no_show'
  hoursRegular: number
  hoursOvertime: number
  overtimeType?: 'regular' | 'court' | 'callback' | 'extra_duty'
  notes?: string
}

export type SwapStatus = 'pending' | 'approved' | 'denied' | 'cancelled'

export interface SwapRequest {
  id: string
  requestingOfficerId: string
  coveringOfficerId: string
  originalAssignmentId: string
  originalDate: string
  proposedDate: string
  shiftName: string
  status: SwapStatus
  requestedAt: string
  reviewedBy?: string
  reviewedAt?: string
  reason: string
  denialReason?: string
}

export interface OvertimeRecord {
  id: string
  officerId: string
  departmentId: string
  workPeriodStart: string
  workPeriodEnd: string
  totalHours: number
  regularHours: number
  overtimeHours: number
  overtimeType: 'regular' | 'court' | 'callback' | 'extra_duty'
  hourlyRate: number
  otCost: number
  flsaCompliant: boolean
}

export interface CourtAppearance {
  id: string
  officerId: string
  departmentId: string
  caseNumber: string
  courtName: string
  courtAddress: string
  appearanceDate: string
  appearanceTime: string
  estimatedDuration: number
  generatesOvertime: boolean
  status: 'scheduled' | 'completed' | 'cancelled' | 'continued'
  conflictsWithShift: boolean
}
