import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from './key'
import { useDateRangeValue } from '@/stores/useFilterStore'
import { fetchCustomerPurchases } from '@/apis/dashboard'

export const useGetCustomerPurchases = (id: number | null) => {
  const { fromDate, toDate } = useDateRangeValue()

  return useQuery({
    queryKey: [QUERY_KEY.customerDetail, id, fromDate, toDate],
    queryFn: () => fetchCustomerPurchases(id!),
    enabled: !!id,

    select: (data) => {
      // 날짜 범위에 맞는 데이터만 필터링
      return data
        .filter((item) => {
          // 문자열 비교 (YYYY-MM-DD 형식)
          return item.date >= fromDate && item.date <= toDate
        })
        .map((item) => ({
          ...item,
          totalPrice: item.price * item.quantity,
        }))
    },
  })
}
