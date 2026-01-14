import { useState } from 'react'
import { fetchRawPurchases } from '@/apis/dashboard'
import { downloadPurchasesCSV } from '@/utils/csv'
import { useDateRangeValue } from '@/stores/useFilterStore'

export const useExportPurchases = () => {
  const { fromDate, toDate } = useDateRangeValue()

  const [isExporting, setIsExporting] = useState(false)

  const exportCSV = async () => {
    if (isExporting) return

    try {
      setIsExporting(true)
      const rawData = await fetchRawPurchases(fromDate, toDate)

      const fileName = `purchase_report_${fromDate}_${toDate}`
      downloadPurchasesCSV(rawData, fileName)
    } catch (error) {
      console.error('CSV Export Error:', error)
      alert('다운로드 중 오류가 발생했습니다.')
    } finally {
      setIsExporting(false)
    }
  }

  return { exportCSV, isExporting }
}
