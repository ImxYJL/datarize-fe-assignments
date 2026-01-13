import { ReactNode } from 'react'

type DataTableProps = {
  headers: string[]
  children: ReactNode
}

const DataTable = ({ headers, children }: DataTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border transition-colors">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="py-3 px-4 font-semibold text-foreground text-left first:text-left last:text-right"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-border">{children}</tbody>
      </table>
    </div>
  )
}

export default DataTable
