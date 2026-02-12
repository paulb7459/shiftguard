/**
 * FLSA Section 7(k) Overtime Calculator for Law Enforcement
 *
 * Law enforcement agencies can use a work period of 7–28 consecutive days.
 * Overtime is triggered when hours exceed the threshold for that work period.
 *
 * 28-day period: 171 hours threshold
 * 14-day period: 86 hours threshold
 * 7-day period: 43 hours threshold
 *
 * Formula: (171 / 28) × workPeriodDays = OT threshold
 * Source: 29 CFR § 553.230
 */

const LE_28_DAY_THRESHOLD = 171
const FIRE_28_DAY_THRESHOLD = 212

export function calculateOtThreshold(
  workPeriodDays: number,
  type: 'law_enforcement' | 'fire' = 'law_enforcement'
): number {
  const base = type === 'law_enforcement' ? LE_28_DAY_THRESHOLD : FIRE_28_DAY_THRESHOLD
  return Math.round((base / 28) * workPeriodDays * 100) / 100
}

export function calculateOvertime(
  hoursWorked: number,
  workPeriodDays: number = 28,
  type: 'law_enforcement' | 'fire' = 'law_enforcement'
): { regularHours: number; overtimeHours: number; threshold: number } {
  const threshold = calculateOtThreshold(workPeriodDays, type)
  const overtimeHours = Math.max(0, hoursWorked - threshold)
  const regularHours = hoursWorked - overtimeHours

  return { regularHours, overtimeHours, threshold }
}

export function getThresholdPercentage(
  hoursWorked: number,
  workPeriodDays: number = 28
): number {
  const threshold = calculateOtThreshold(workPeriodDays)
  return Math.round((hoursWorked / threshold) * 100)
}

export function getWarningLevel(percentage: number): 'safe' | 'caution' | 'warning' | 'critical' {
  if (percentage >= 100) return 'critical'
  if (percentage >= 90) return 'warning'
  if (percentage >= 80) return 'caution'
  return 'safe'
}

export function estimateOtCost(overtimeHours: number, avgHourlyRate: number): number {
  return Math.round(overtimeHours * avgHourlyRate * 1.5 * 100) / 100
}
