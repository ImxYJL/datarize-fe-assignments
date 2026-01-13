import { Download } from 'lucide-react'
import Card from '../common/Card'
import DataTable from '../common/DataTable'
import Button from '../common/Button'

type Props = {
  dateRange: { from: string; to: string }
}

const DUMMY_FREQ = [
  { range: '0 - 20,000', count: 156, percent: 20.8 },
  { range: '20,001 - 30,000', count: 123, percent: 16.4 },
  { range: '30,001 - 40,000', count: 98, percent: 13.0 },
  // ... 나머지 데이터
]

const PurchaseFrequencySection = ({ dateRange }: Props) => (
  <Card>
    <Card.Header className="flex flex-col gap-8">
      <div>
        <Card.Title>구매 현황 분석</Card.Title>
        <Card.Description>
          가격대별 구매 분포 분석 ({dateRange.from} ~ {dateRange.to})
        </Card.Description>
      </div>

      <Button variant="outline" size="sm" icon={<Download className="w-4 h-4" />}>
        Download CSV
      </Button>
    </Card.Header>

    <Card.Content>
      <DataTable headers={['Price Range', 'Count', 'Percentage']}>
        {DUMMY_FREQ.map((item, idx) => (
          <tr key={idx} className="hover:bg-muted/50 transition-colors">
            <td className="py-3 px-4">{item.range}</td>
            <td className="py-3 px-4 font-medium">{item.count}</td>

            {/* 3. Percentage: 우측 정렬이되 내부 요소들을 밀착시킴 */}
            <td className="py-3 px-4 text-center">
              <div className="flex items-center justify-end gap-3">
                {/* justify-end로 밀착 */}
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden shrink-0">
                  {/* w-24로 적당히 늘림 */}
                  <div className="h-full bg-primary rounded-full" style={{ width: `${item.percent}%` }} />
                </div>
                <span className="text-muted-foreground text-xs font-mono w-12 text-right">{item.percent}%</span>
              </div>
            </td>
          </tr>
        ))}
      </DataTable>
    </Card.Content>
  </Card>
)

export default PurchaseFrequencySection
