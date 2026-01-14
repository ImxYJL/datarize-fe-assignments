import { RawPurchaseFrequency } from '@/types/dashboard'

export const downloadPurchasesCSV = (data: RawPurchaseFrequency[], fileName: string) => {
  if (!data || data.length === 0) {
    alert('추출할 데이터가 없습니다.')
    return
  }

  // 1. 헤더 정의
  const headers = ['구매 날짜', '고객명', '제품명', '가격', '수량', '합계']

  // 2. 데이터 행 변환
  const rows = data.map((item) => [
    item.date,
    item.customerName,
    item.productName,
    item.price,
    item.quantity,
    item.price * item.quantity,
  ])

  // 3. CSV 문자열 생성 (콤마로 구분, 줄바꿈 처리)
  const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n')

  // 4. Blob 생성 (BOM 추가로 한글 깨짐 방지)
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  // 5. 다운로드 실행
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${fileName}.csv`)

  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
