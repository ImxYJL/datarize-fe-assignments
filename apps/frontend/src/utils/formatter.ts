export const DATE_CONFIG = {
  delimiter: '-',
  infinityLabel: ' - Infinity',
  plusSymbol: '+',
} as const

export const CURRENCY_CONFIG = {
  code: 'KRW',
  symbol: '₩',
  locale: 'ko-KR',
} as const

/**
 * Date 객체를 <input type="date">에 필요한 'YYYY-MM-DD' 문자열로 변환
 */
export const dateToPickerString = (date: Date): string => {
  return date.toISOString().split('T')[0]
}

/**
 * 초기 대시보드 날짜 범위 (당월 1일 ~ 오늘) 계산
 */
export const getInitialDateRange = () => {
  const now = new Date()
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)

  return {
    fromDate: dateToPickerString(firstDay),
    toDate: dateToPickerString(now),
  }
}

/**
 * 통화 포맷팅 (예: 1000 -> ₩1,000)
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat(CURRENCY_CONFIG.locale, {
    style: 'currency',
    currency: CURRENCY_CONFIG.code,
  }).format(amount)
}

export const formatRangeLabel = (range: string): string => {
  return range
    .replace(DATE_CONFIG.infinityLabel, DATE_CONFIG.plusSymbol)
    .replace(/(\d+)/g, (match) => Number(match).toLocaleString())
}

/**
 * 서버 전송을 위한 ISO 8601 형식 변환
 */
export const toServerDateFormat = (dateStr: string): string => {
  if (!dateStr) return ''

  return new Date(dateStr).toISOString()
}
