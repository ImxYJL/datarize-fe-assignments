import { client } from '@/lib/axios'
import { ENDPOINT } from '@/constants/api'
import { PurchaseDetail, PurchaseFrequency, RawPurchaseFrequency } from '@/types/dashboard'
import { toServerDateFormat } from '@/utils/formatter'
import { PAGE } from '@/constants/dashboard'

export const fetchPurchaseFrequency = async (from: string, to: string): Promise<PurchaseFrequency[]> => {
  const { data } = await client.get(ENDPOINT.purchaseFrequency, {
    params: {
      from: toServerDateFormat(from),
      to: toServerDateFormat(to),
    },
  })

  return data
}

export const fetchRawPurchases = async (from: string, to: string): Promise<RawPurchaseFrequency[]> => {
  const { data } = await client.get(ENDPOINT.purchases, {
    params: {
      from: toServerDateFormat(from),
      to: toServerDateFormat(to),
    },
  })

  return data
}

// NOTE: 백엔드 명세에 따른 정렬 타입
export type SortByApi = 'asc' | 'desc'

export type FetchCustomerListParams = {
  from: string
  to: string
  page: number
  sortBy?: SortByApi
  name?: string
  limit?: number
}

export const fetchCustomerList = async ({
  page,
  from,
  to,
  sortBy,
  name,
  limit = PAGE.minLimit,
}: FetchCustomerListParams) => {
  const { data } = await client.get(ENDPOINT.customers, {
    params: {
      from: toServerDateFormat(from),
      to: toServerDateFormat(to),
      name,
      sortBy,
      page,
      limit,
    },
  })
  return data
}

export const fetchCustomerPurchases = async (id: number): Promise<PurchaseDetail[]> => {
  const { data } = await client.get(ENDPOINT.customer(id))
  return data
}
