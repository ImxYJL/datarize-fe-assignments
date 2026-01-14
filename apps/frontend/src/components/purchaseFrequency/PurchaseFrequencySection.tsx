import { Download } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import DataTable from '../common/DataTable'
import useGetPurchaseFrequency, { PurchaseFrequencyUI } from '@/queries/useGetPurchaseFrequency'
import { useDateRangeValue } from '@/stores/useFilterStore'
import DateRange from '../common/DateRange'
import { useExportPurchases } from '@/hooks/useExportPurchases'

const PurchaseFrequencySection = () => {
  const { data: frequencies, isLoading, isError } = useGetPurchaseFrequency()
  const { fromDate, toDate } = useDateRangeValue()

  const { exportCSV, isExporting } = useExportPurchases()

  const renderFrequencyRow = (item: PurchaseFrequencyUI, idx: number) => (
    <tr key={idx} className="hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0">
      {/* 1. 가격 범위 */}
      <td className="py-4 px-4 text-left font-medium text-foreground">{item.label}</td>

      {/* 2. 구매 건수 */}
      <td className="py-4 px-4 text-left text-foreground">{item.count.toLocaleString()}건</td>

      {/* 3. 퍼센트 바 및 수치 */}
      <td className="py-4 px-4">
        <div className="flex items-center justify-end gap-4">
          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden shrink-0">
            <div
              className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
              style={{ width: `${item.percent}%` }}
            />
          </div>
          <span className="text-muted-foreground text-xs font-mono w-10 text-right">{Math.round(item.percent)}%</span>
        </div>
      </td>
    </tr>
  )

  return (
    <Card className="shadow-sm border-border/60">
      <Card.Header className="flex flex-row items-center justify-between space-y-0 pb-6">
        <div className="space-y-1">
          <Card.Title className="text-xl font-bold tracking-tight">가격대별 구매 빈도</Card.Title>
          <Card.Description>
            <DateRange fromDate={fromDate} toDate={toDate} />의 금액 구간별 구매 건수 분석입니다.
          </Card.Description>
        </div>

        <Button
          disabled={isExporting}
          variant="outline"
          size="sm"
          icon={<Download className="w-4 h-4" />}
          onClick={exportCSV}
        >
          {isExporting ? '추출 중...' : 'CSV 다운로드'}
        </Button>
      </Card.Header>

      <Card.Content>
        <DataTable
          headers={['가격 범위', '구매 건수', '점유 비율']}
          data={frequencies}
          isLoading={isLoading}
          isError={isError}
          emptyMessage="데이터 분석 결과가 존재하지 않습니다."
          renderRow={renderFrequencyRow}
        />
      </Card.Content>
    </Card>
  )
}

export default PurchaseFrequencySection
