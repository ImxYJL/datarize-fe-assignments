import { useDateRangeValue } from '@/stores/useFilterStore'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from './key'
import { fetchCustomerList } from '@/apis/dashboard'
import { CustomerTableState } from '@/hooks/useCustomerListState'

type UseGetCustomerListParams = Pick<CustomerTableState, 'searchText' | 'sortKey' | 'sortOrder' | 'page'>

const useGetCustomerList = ({ searchText, sortKey, sortOrder, page }: UseGetCustomerListParams) => {
  const { fromDate, toDate } = useDateRangeValue()

  // NOTE: id는 기본값이므로 amount 정렬일 때만 방향(asc/desc) 전달
  const sortBy = sortKey === 'id' ? undefined : sortOrder

  return useQuery({
    queryKey: [QUERY_KEY.customerList, fromDate, toDate, searchText, sortBy, page],
    queryFn: () =>
      fetchCustomerList({
        from: fromDate,
        to: toDate,
        name: searchText || undefined,
        page,
        sortBy,
      }),
  })
}

export default useGetCustomerList
