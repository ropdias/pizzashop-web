import { api } from '@/lib/axios'

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string // This was Date in back-end, but it's actually a string in front-end
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders() {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })
  return response.data
}
