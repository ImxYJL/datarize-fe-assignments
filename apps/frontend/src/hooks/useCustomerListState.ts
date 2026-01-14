import { useState } from 'react'
import { PAGE, SortKey, SortOrder } from '@/constants/dashboard'

export type CustomerTableState = {
  searchText: string
  sortKey: SortKey
  sortOrder: SortOrder
  page: number
}

const useCustomerListState = () => {
  // NOTE: 기본값은 오름차순 id 정렬
  const [state, setState] = useState<CustomerTableState>({
    searchText: '',
    sortKey: 'id',
    sortOrder: 'asc',
    page: PAGE.start,
  })

  const actions = {
    updateSearchText: (val: string) => {
      setState((prev) => ({ ...prev, searchText: val, page: PAGE.start }))
    },
    updateSortKey: (val: SortKey) => {
      setState((prev) => ({ ...prev, sortKey: val, page: PAGE.start }))
    },
    toggleSortOrder: () => {
      setState((prev) => ({
        ...prev,
        sortOrder: prev.sortOrder === 'asc' ? 'desc' : 'asc',
        page: PAGE.start,
      }))
    },
    updatePage: (val: number) => {
      setState((prev) => ({ ...prev, page: val }))
    },
  }

  return {
    ...state,
    actions,
  }
}

export default useCustomerListState
