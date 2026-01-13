import Card from '../common/Card'
import PurchaseItem from './PurchaseItem'

type Purchase = {
  product: string
  date: string
  price: number
  quantity: number
  imgSrc?: string
}

type Props = {
  customerId: number
  dateRange: { from: string; to: string }
}

const DUMMY_DETAILS: Record<number, Purchase[]> = {
  1: [
    {
      product: '프리미엄 후드티',
      date: '2025-01-10',
      price: 89000,
      quantity: 1,
      imgSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200',
    },
  ],
}

const CustomerDetailSection = ({ customerId, dateRange }: Props) => {
  const purchases = DUMMY_DETAILS[customerId] || []
  const isEmptyList = purchases.length === 0

  return (
    <Card>
      <Card.Header>
        <div>
          <Card.Title>Purchase Details</Card.Title>
          <Card.Description>고객의 상세 구매 이력입니다.</Card.Description>
        </div>
      </Card.Header>
      <Card.Content>
        <ul className="space-y-4">
          {!isEmptyList ? (
            purchases.map((purchase, idx) => <PurchaseItem key={idx} purchase={purchase} />)
          ) : (
            <div className="py-20 text-center text-muted-foreground">구매 내역이 없습니다.</div>
          )}
        </ul>
      </Card.Content>
    </Card>
  )
}

export default CustomerDetailSection
