export const PAGE = {
  start: 1,
  minLimit: 20,
  maxLimit: 100,
}

export const SORT_OPTIONS = [
  { id: 'id', label: 'ID' },
  { id: 'amount', label: '금액' },
] as const

export type SortKey = (typeof SORT_OPTIONS)[number]['id']

export const SORT_ORDERS = {
  asc: { id: 'asc', label: '오름차순' },
  desc: { id: 'desc', label: '내림차순' },
} as const

export type SortOrder = keyof typeof SORT_ORDERS

export type SortState = {
  sortKey: SortKey
  sortOrder: SortOrder
}
