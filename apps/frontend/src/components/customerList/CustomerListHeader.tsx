import { SortKey, SortState } from '@/constants/dashboard'
import SortingPanel from './SortingPanel'
import Card from '../common/Card'
import SearchPanel from './SearchPanel'

type CustomerListHeaderProps = SortState & {
  searchText: string
  onSearch: (val: string) => void
  onKeyChange: (key: SortKey) => void
  onOrderToggle: () => void
}

const CustomerListHeader = ({
  searchText,
  sortKey,
  sortOrder,
  onSearch,
  onKeyChange,
  onOrderToggle,
}: CustomerListHeaderProps) => (
  <div className="flex flex-col gap-4 w-full">
    <div className="flex justify-between items-start">
      <div>
        <Card.Title>고객 목록</Card.Title>
        {/* TODO: 선택한 날짜 연결 */}
        <Card.Description>날짜 범위 내 고객별 구매 통계</Card.Description>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <SearchPanel value={searchText} onChange={onSearch} />
      <SortingPanel
        // NOTE: ID 정렬은 서버 기본값(ASC) 고정 - id 정렬인 경우 오름/내림차 불가능
        isOrderDisabled={sortKey === 'id'}
        onOrderToggle={onOrderToggle}
        sortKey={sortKey}
        sortOrder={sortOrder}
        onKeyChange={onKeyChange}
      />
    </div>
  </div>
)

export default CustomerListHeader
