import { Search } from 'lucide-react'
import Card from '../common/Card'
import DataTable from '../common/DataTable'

type Props = {
  onSelectCustomer: (id: number) => void
}

const CustomerListSection = ({ onSelectCustomer }: Props) => (
  <Card>
    <Card.Header>
      <div className="flex flex-col gap-4 w-full">
        <div>
          <Card.Title>고객 목록</Card.Title>
          <Card.Description>고객별 구매 통계 관리</Card.Description>
        </div>

        {/* 검색 및 필터 */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
            <input
              className="h-9 w-full rounded-md border border-input bg-transparent pl-10 pr-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="고객 이름으로 검색하세요..."
            />
          </div>
          <button className="inline-flex items-center justify-center border border-border h-8 rounded-md px-3 text-sm font-medium hover:bg-accent transition-colors">
            Sort by Amount
          </button>
        </div>
      </div>
    </Card.Header>

    <Card.Content>
      <DataTable headers={['ID', 'Name', 'Purchase Count', 'Total Amount']}>
        {[1, 2, 3, 4, 5].map((id) => (
          <tr
            key={id}
            onClick={() => onSelectCustomer(id)}
            className="hover:bg-muted/50 cursor-pointer transition-colors"
          >
            <td className="py-3 px-4 text-foreground font-medium">{id}</td>
            <td className="py-3 px-4 text-foreground">황지민</td>
            <td className="py-3 px-4 text-center text-foreground">8</td>
            <td className="py-3 px-4 text-right text-foreground font-medium">₩285,000</td>
          </tr>
        ))}
      </DataTable>

      {/* Pagination (DataTable 밖, Card.Content 안) */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground">Showing 5 of 10 customers</span>
        <div className="flex gap-2">
          <button
            className="h-8 border border-border rounded-md px-3 text-sm hover:bg-accent disabled:opacity-50"
            disabled
          >
            Previous
          </button>
          <span className="text-xs px-2 py-1 flex items-center">Page 1 of 2</span>
          <button className="h-8 border border-border rounded-md px-3 text-sm hover:bg-accent">Next</button>
        </div>
      </div>
    </Card.Content>
  </Card>
)

export default CustomerListSection
