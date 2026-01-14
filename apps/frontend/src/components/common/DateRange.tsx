import { CURRENCY_CONFIG } from '@/utils/formatter'

type DateRangeProps = {
  fromDate: Date | string
  toDate: Date | string
  className?: string
}

const DateRange = ({ fromDate, toDate, className = '' }: DateRangeProps) => {
  const format = (date: Date | string) =>
    new Date(date).toLocaleDateString(CURRENCY_CONFIG.locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  return (
    <span className={`font-medium text-foreground ${className}`}>
      {format(fromDate)} ~ {format(toDate)}
    </span>
  )
}

export default DateRange
