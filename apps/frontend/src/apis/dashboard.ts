import { client } from '@/lib/axios'
import { ENDPOINT } from '@/constants/api'
import { PurchaseDetail, PurchaseFrequency } from '@/types/dashboard'
import { toServerDateFormat } from '@/utils/formatter'

export const fetchPurchaseFrequency = async (from: string, to: string): Promise<PurchaseFrequency[]> => {
  const { data } = await client.get(ENDPOINT.purchaseFrequency, {
    params: {
      from: toServerDateFormat(from),
      to: toServerDateFormat(to),
    },
  })

  return data
}

export const fetchRawPurchases = async (from: string, to: string): Promise<PurchaseDetail[]> => {
  const { data } = await client.get(ENDPOINT.purchases, {
    params: {
      from: toServerDateFormat(from),
      to: toServerDateFormat(to),
    },
  })

  return data
}

export const fetchCustomerPurchases = async (id: number): Promise<PurchaseDetail[]> => {
  const { data } = await client.get(ENDPOINT.customer(id))
  return data
}
