export const ENDPOINT = {
  purchaseFrequency: '/purchase-frequency',
  purchases: '/purchases',
  customers: '/customers',
  customer: (id: number) => `/customers/${id}/purchases`,
} as const
