import { ReactNode } from 'react'

type TableStatusRowProps = {
  colSpan: number
  children: ReactNode
  className?: string
}

/**
 * <tbody> 내부에서 로딩, 에러, 빈 상태를 렌더링할 때 사용하는 공통 행 컴포넌트
 */
const TableStatusRow = ({ colSpan, children, className = '' }: TableStatusRowProps) => {
  return (
    <tr>
      <td colSpan={colSpan} className={`h-64 text-center align-middle ${className}`}>
        {children}
      </td>
    </tr>
  )
}

export default TableStatusRow
