import { useState } from 'react'
import { useFilterStore } from '@/stores/useFilterStore'
import DateFilter from './DateFilter'
import Button from '../common/Button'
import Card from '../common/Card'

const DashboardFilter = () => {
  const { dateRange, actions } = useFilterStore()
  const [tempFilter, setTempFilter] = useState({
    fromDate: dateRange.fromDate,
    toDate: dateRange.toDate,
  })

  const handleSearch = () => {
    if (tempFilter.fromDate > tempFilter.toDate) {
      alert('시작일이 종료일보다 늦을 수 없습니다.')
      return
    }

    actions.setDates(tempFilter.fromDate, tempFilter.toDate)
  }

  return (
    <Card>
      <DateFilter values={tempFilter} onChange={(updates) => setTempFilter({ ...tempFilter, ...updates })} />

      <Button variant="primary" size="lg" onClick={handleSearch} className="w-full">
        조회하기
      </Button>
    </Card>
  )
}

export default DashboardFilter
