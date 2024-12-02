import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

export interface GetOrdersResponseResponse {
  orders: {
    orderId: string
    createdAt: string
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
async function getOrders() {
  const response = await api.get<GetOrdersResponseResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })
  return response.data
}

export function useGetOders() {
  return useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  })
}
