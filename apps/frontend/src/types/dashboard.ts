export type PurchaseFrequency = {
  range: string
  count: number
}

export type RawPurchaseFrequency = {
  date: string
  customerName: string
  productName: string
  price: number
  quantity: number
}

export type Customer = {
  id: number
  name: string
  count: number
  totalAmount: number
}

export type PurchaseDetail = {
  product: string
  date: string
  price: number
  quantity: number
  imgSrc?: string
}

export type DateRange = {
  fromDate: string
  toDate: string
}

export type Purchase = {
  product: string
  date: string
  price: number
  quantity: number
  imgSrc?: string
}
