import { useFilterActions } from '@/stores/useFilterStore'
import Card from '../common/Card'
import DataTable from '../common/DataTable'
import CustomerListHeader from './CustomerListHeader'
import useGetCustomerList from '@/queries/useGetCustomerList'
import useCustomerListState from '@/hooks/useCustomerListState'
import CustomerPagination from './CustomerPagenation'
import { Customer } from '@/types/dashboard'

const CustomerListSection = () => {
  const { searchText, sortKey, sortOrder, page, actions } = useCustomerListState()
  const { setSelectedCustomerId } = useFilterActions()

  const { data, isLoading, isError } = useGetCustomerList({
    searchText,
    sortKey,
    sortOrder,
    page,
  })

  const renderCustomerRow = (customer: Customer) => (
    <tr
      key={customer.id}
      onClick={() => setSelectedCustomerId(customer.id)}
      className="group hover:bg-muted/50 cursor-pointer transition-colors border-b border-border/50 last:border-0"
    >
      <td className="py-3.5 px-4 text-muted-foreground text-xs font-mono">{customer.id}</td>
      <td className="py-3.5 px-4 text-foreground font-medium group-hover:text-primary transition-colors">
        {customer.name}
      </td>
      <td className="py-3.5 px-4 text-center text-foreground">
        <span className="bg-muted px-2 py-1 rounded text-xs">{customer.count}건</span>
      </td>
      <td className="py-3.5 px-4 text-right text-foreground font-semibold">
        {customer.totalAmount.toLocaleString()}원
      </td>
    </tr>
  )

  return (
    <Card className="shadow-sm border-border/60">
      <Card.Header>
        <CustomerListHeader
          searchText={searchText}
          sortKey={sortKey}
          sortOrder={sortOrder}
          onSearch={actions.updateSearchText}
          onKeyChange={actions.updateSortKey}
          onOrderToggle={actions.toggleSortOrder}
        />
      </Card.Header>

      <Card.Content className="pt-2">
        <DataTable
          headers={['ID', '고객명', '총 구매 횟수', '총 구매 금액']}
          data={data?.data}
          isLoading={isLoading}
          isError={isError}
          emptyMessage="조건에 맞는 고객 데이터가 존재하지 않습니다."
          renderRow={renderCustomerRow}
        />

        <CustomerPagination
          currentPage={page}
          totalPages={data?.pagination.totalPages || 1}
          totalCount={data?.pagination.total || 0}
          onPageChange={actions.updatePage}
        />
      </Card.Content>
    </Card>
  )
}

export default CustomerListSection
