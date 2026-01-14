import { Search } from 'lucide-react'
import Input from '../common/Input'

type SearchPanelProps = {
  value: string
  onChange: (val: string) => void
}

const SearchPanel = ({ value, onChange }: SearchPanelProps) => (
  <section className="relative w-full">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
    <Input
      className="pl-10 h-10 shadow-sm"
      placeholder="찾으시는 고객의 이름을 입력하세요..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </section>
)

export default SearchPanel
