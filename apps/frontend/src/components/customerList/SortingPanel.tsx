import Button from '../common/Button'
import { SORT_ORDERS, SortOrder, SORT_OPTIONS, SortKey } from '@/constants/dashboard'
import { Tab } from '../common/Tab'

type SortPanelProps = {
  sortKey: SortKey
  sortOrder: SortOrder
  onKeyChange: (target: SortKey) => void
  onOrderToggle: () => void
  isOrderDisabled: boolean
}

const SortingPanel = ({ sortKey, sortOrder, onKeyChange, onOrderToggle, isOrderDisabled }: SortPanelProps) => {
  const nextOrder = sortOrder === 'asc' ? 'desc' : 'asc'
  const nextOrderInfo = SORT_ORDERS[nextOrder]

  return (
    <section className="flex items-center gap-3">
      {/* 정렬 기준 선택 */}
      <Tab>
        {SORT_OPTIONS.map((opt) => (
          <Tab.TabItem
            key={opt.id}
            label={opt.label}
            isActive={sortKey === opt.id}
            onClick={() => onKeyChange(opt.id)}
          />
        ))}
      </Tab>

      {/* 정렬 방향 토글 */}
      <Button variant="outline" size="sm" onClick={onOrderToggle} disabled={isOrderDisabled} className="min-w-[120px]">
        {nextOrderInfo.label} 정렬하기
      </Button>
    </section>
  )
}

export default SortingPanel
