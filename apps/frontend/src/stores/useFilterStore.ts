import { create } from 'zustand'
import { getInitialDateRange } from '@/utils/formatter'
import { DateRange } from '@/types/dashboard'

type FilterState = {
  dateRange: DateRange
  selectedCustomerId: string | null

  actions: {
    setDates: (from: string, to: string) => void
    setSelectedCustomerId: (id: string | null) => void
    reset: () => void
  }
}

const initialDates = getInitialDateRange()

export const useFilterStore = create<FilterState>((set) => ({
  dateRange: initialDates,
  selectedCustomerId: null,
  actions: {
    setDates: (fromDate, toDate) => set(() => ({ dateRange: { fromDate, toDate } })),
    setSelectedCustomerId: (id) => set({ selectedCustomerId: id }),
    reset: () => set({ dateRange: initialDates, selectedCustomerId: null }),
  },
}))

export const useDateRangeValue = () => useFilterStore((s) => s.dateRange)
export const useSelectedCustomerId = () => useFilterStore((s) => s.selectedCustomerId)
export const useFilterActions = () => useFilterStore((s) => s.actions)
