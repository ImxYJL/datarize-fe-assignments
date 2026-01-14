import { useGetCustomerPurchases } from '@/queries/useGetCustomerDetail'
import Card from '../common/Card'
import PurchaseItem from './PurchaseItem'
import { useSelectedCustomerId } from '@/stores/useFilterStore'

type StatusPlaceholderProps = {
  message: string
  type?: 'loading' | 'error' | 'empty'
}

const StatusPlaceholder = ({ message, type = 'empty' }: StatusPlaceholderProps) => {
  const isLoading = type === 'loading'
  const textColor = type === 'error' ? 'text-destructive' : 'text-muted-foreground'

  return (
    <div className={`py-20 text-center text-sm font-medium ${textColor} ${isLoading ? 'animate-pulse' : ''}`}>
      {message}
    </div>
  )
}

const CustomerDetailSection = () => {
  const selectedCustomerId = useSelectedCustomerId()

  const { data: purchases = [], isLoading, isError } = useGetCustomerPurchases(selectedCustomerId)
  const isEmptyList = purchases.length === 0

  return (
    <Card className="border-border/60 shadow-sm mt-8">
      <Card.Header>
        <div className="flex flex-col gap-1">
          <Card.Title className="text-lg font-bold text-foreground">상세 구매 내역</Card.Title>
          <Card.Description>
            {selectedCustomerId ? (
              <>
                <span className="font-bold text-primary">ID #{selectedCustomerId}</span> 고객님의 선택 기간 내 구매
                이력입니다.
              </>
            ) : (
              '목록에서 고객을 선택하면 상세 내역이 표시됩니다.'
            )}
          </Card.Description>
        </div>
      </Card.Header>

      <Card.Content>
        {!selectedCustomerId ? (
          <StatusPlaceholder message="고객을 선택해 주세요." />
        ) : isLoading ? (
          <StatusPlaceholder message="구매 내역 분석 중..." type="loading" />
        ) : isError ? (
          <StatusPlaceholder message="데이터 로딩 실패" type="error" />
        ) : isEmptyList ? (
          <StatusPlaceholder message="해당 기간 내 구매 내역이 없습니다." />
        ) : (
          <ul className="space-y-4">
            {purchases.map((purchase, idx) => (
              <PurchaseItem key={`${selectedCustomerId}-${idx}`} purchase={purchase} />
            ))}
          </ul>
        )}
      </Card.Content>
    </Card>
  )
}

export default CustomerDetailSection
