import PurchaseFrequencySection from './purchaseFrequency/PurchaseFrequencySection'
import CustomerListSection from './customerList/CustomerListSection'
import CustomerDetailSection from './customerDetail/CustomerDetailSection'
import DashboardFilter from './filter/DashboardFilter'
import { useSelectedCustomerId } from '@/stores/useFilterStore'

const DashBoard = () => {
  const selectedCustomerId = useSelectedCustomerId()

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Purchase Analytics</h1>
          <p className="text-muted-foreground">고객 구매 패턴 및 빈도 분석 대시보드</p>
        </header>

        <DashboardFilter />

        <PurchaseFrequencySection />
        <CustomerListSection />
        {selectedCustomerId && <CustomerDetailSection />}
      </div>
    </main>
  )
}

export default DashBoard
