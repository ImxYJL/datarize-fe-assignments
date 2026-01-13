import { useState } from 'react'
import FormField from './common/FormField'
import PurchaseFrequencySection from './purchaseFrequency/PurchaseFrequencySection'
import CustomerListSection from './customerList/CustomerListSection'
import CustomerDetailSection from './customerDetail/CustomerDetailSection'

type DateRange = {
  from: string
  to: string
}

const DashBoard = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null)
  const [dateRange, setDateRange] = useState<DateRange>({
    from: '2025-01-01',
    to: '2025-01-13',
  })

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Purchase Analytics</h1>
          <p className="text-muted-foreground">고객 구매 패턴 및 빈도 분석 대시보드</p>
        </header>

        {/* 필터 영역 */}
        <section className="mb-8 flex gap-4 p-6 bg-card rounded-xl border border-border shadow-sm items-end">
          {/* TODO: Hover */}
          <FormField
            label="시작일"
            type="date"
            value={dateRange.from}
            onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
          />
          <FormField
            label="종료일"
            type="date"
            value={dateRange.to}
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
          />
        </section>

        <PurchaseFrequencySection dateRange={dateRange} />

        <CustomerListSection dateRange={dateRange} onSelectCustomer={setSelectedCustomerId} />

        {selectedCustomerId && <CustomerDetailSection customerId={selectedCustomerId} dateRange={dateRange} />}
      </div>
    </main>
  )
}

export default DashBoard
