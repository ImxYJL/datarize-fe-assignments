import Button from '../common/Button'

type PaginationProps = {
  currentPage: number
  totalPages: number
  totalCount: number
  onPageChange: (page: number) => void
}

const CustomerPagination = ({ currentPage, totalPages, totalCount, onPageChange }: PaginationProps) => (
  <section className="flex items-center justify-between mt-8 pt-5 border-t border-border/60">
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-foreground">총 {totalCount.toLocaleString()}명</span>
      <span className="text-xs text-muted-foreground">데이터 집계 완료</span>
    </div>

    <div className="flex gap-3 items-center">
      <Button variant="outline" size="sm" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        이전
      </Button>

      <div className="flex items-center px-4 py-1 bg-muted rounded-md border border-border/40">
        <span className="text-xs font-bold text-primary">
          {currentPage} <span className="text-muted-foreground font-normal mx-1">/</span> {totalPages}
        </span>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        다음
      </Button>
    </div>
  </section>
)

export default CustomerPagination
