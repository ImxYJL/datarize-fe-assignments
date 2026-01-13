import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/queries/key'
import { formatRangeLabel } from '@/utils/formatter'
import { useDateRangeValue } from '@/stores/useFilterStore'
import { fetchPurchaseFrequency } from '@/apis/dashboard'

const useGetPurchaseFrequency = () => {
  const dateRange = useDateRangeValue()

  return useQuery({
    queryKey: [QUERY_KEY.purchaseFrequency, dateRange.fromDate, dateRange.toDate],
    queryFn: () => fetchPurchaseFrequency(dateRange.fromDate, dateRange.toDate),

    select: (data) => {
      const totalCount = data.reduce((sum, item) => sum + item.count, 0)

      return data.map((item) => ({
        ...item,
        label: formatRangeLabel(item.range),
        percent: totalCount > 0 ? (item.count / totalCount) * 100 : 0,
      }))
    },
  })
}

export default useGetPurchaseFrequency
