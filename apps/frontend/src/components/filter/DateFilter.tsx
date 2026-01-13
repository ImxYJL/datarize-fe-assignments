import FormField from '../common/FormField'

type DateFilterProps = {
  values: { fromDate: string; toDate: string }
  onChange: (updates: Partial<{ fromDate: string; toDate: string }>) => void
}

const DateFilter = ({ values, onChange }: DateFilterProps) => {
  return (
    <section className="flex gap-6 items-center w-full">
      <FormField
        label="시작일"
        type="date"
        value={values.fromDate}
        onChange={(e) => onChange({ fromDate: e.target.value })}
      />
      <div className="text-muted-foreground mt-6 font-medium text-lg shrink-0">~</div>
      <FormField
        label="종료일"
        type="date"
        value={values.toDate}
        onChange={(e) => onChange({ toDate: e.target.value })}
      />
    </section>
  )
}

export default DateFilter
