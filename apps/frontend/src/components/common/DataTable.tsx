import TableStatusRow from './TableStatusRow'

type DataTableProps<T> = {
  headers: string[]
  data: T[] | undefined
  isLoading?: boolean
  isError?: boolean
  emptyMessage?: string
  renderRow: (item: T, index: number) => React.ReactNode
}

const DataTable = <T,>({
  headers,
  data,
  isLoading,
  isError,
  emptyMessage = '데이터가 없습니다.',
  renderRow,
}: DataTableProps<T>) => {
  const colSpan = headers.length

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-muted/50 border-y border-border">
          <tr>
            {headers.map((header, index) => (
              <th
                key={header}
                className={`px-4 py-3 font-medium text-muted-foreground ${
                  index === headers.length - 1 ? 'text-right' : 'text-left'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {/* 1. 로딩 상태 */}
          {isLoading && (
            <TableStatusRow colSpan={colSpan} className="animate-pulse text-muted-foreground">
              데이터를 불러오는 중입니다...
            </TableStatusRow>
          )}

          {/* 2. 에러 상태 */}
          {!isLoading && isError && (
            <TableStatusRow colSpan={colSpan} className="text-destructive">
              데이터를 불러오는 중 문제가 발생했습니다.
            </TableStatusRow>
          )}

          {/* 3. 데이터 없음 (빈 상태) */}
          {!isLoading && !isError && (!data || data.length === 0) && (
            <TableStatusRow colSpan={colSpan} className="text-muted-foreground">
              {emptyMessage}
            </TableStatusRow>
          )}

          {/* 4. 데이터 렌더링 */}
          {!isLoading && !isError && data && data.length > 0 && data.map((item, index) => renderRow(item, index))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
