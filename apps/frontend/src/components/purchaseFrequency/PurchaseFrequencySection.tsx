import { Download } from 'lucide-react'
import Card from '../common/Card'
import DataTable from '../common/DataTable'
import Button from '../common/Button'
import useGetPurchaseFrequency from '@/queries/useGetPurchaseFrequency'

const PurchaseFrequencySection = () => {
  const { data: frequencies, isLoading, isError } = useGetPurchaseFrequency()

  return (
    <Card>
      <Card.Header>
        <div className="flex justify-between items-center">
          <div>
            <Card.Title>가격대별 구매 빈도</Card.Title>
            <Card.Description>선택한 기간 내 금액 구간별 구매 건수 분석입니다.</Card.Description>
          </div>
        </div>

        <Button variant="outline" size="sm" icon={<Download className="w-4 h-4" />}>
          Download CSV
        </Button>
      </Card.Header>

      <Card.Content>
        {isLoading ? (
          <p className="h-64 flex items-center justify-center text-muted-foreground animate-pulse">
            데이터를 불러오는 중입니다...
          </p>
        ) : isError ? (
          <p className="h-64 flex items-center justify-center text-destructive">
            데이터를 가져오는 중 오류가 발생했습니다.
          </p>
        ) : (
          <DataTable headers={['가격 범위', '구매 건수', '비율']}>
            {frequencies?.map((item, idx) => (
              <tr key={idx} className="hover:bg-muted/50 transition-colors">
                {/* 1. 가격 범위  */}
                <td className="py-3 px-4 text-left font-medium">{item.label}</td>

                {/* 2. 구매 건수  */}
                <td className="py-3 px-4 text-center">{item.count.toLocaleString()}건</td>

                {/* 3. 퍼센트 바  */}
                <td className="py-3 px-4">
                  <div className="flex items-center justify-end gap-3">
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden shrink-0">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                    <span className="text-muted-foreground text-xs font-mono w-10 text-right">
                      {Math.round(item.percent)}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </DataTable>
        )}
      </Card.Content>
    </Card>
  )
}

export default PurchaseFrequencySection
